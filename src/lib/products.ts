import { getCollection, type CollectionEntry } from 'astro:content';
import { SITE, type Locale } from '../config/site';

export type Product = CollectionEntry<'products'>;
type ProductI18n = CollectionEntry<'productI18n'>;

type CategoryText = { listing: string; crumb: string; schema: string; related: string };
export const CATEGORIES = {
  terarijumi: { listing: '/terarijumi.html', crumb: 'Terarijumi', schema: 'Terarijumi', related: 'Slični terarijumi' },
  akvarijumi: { listing: '/akvarijumi.html', crumb: 'Akvarijumi', schema: 'Akvarijumi', related: 'Slični akvarijumi' },
  oprema: { listing: '/oprema.html', crumb: 'Oprema', schema: 'Oprema', related: 'Slična oprema' },
} as const;
export type Category = keyof typeof CATEGORIES;

const CATEGORIES_I18N: Record<'en' | 'ru', Record<Category, CategoryText>> = {
  en: {
    terarijumi: { listing: '/en/terrariums.html', crumb: 'Terrariums', schema: 'Terrariums', related: 'Similar terrariums' },
    akvarijumi: { listing: '/en/aquariums.html', crumb: 'Aquariums', schema: 'Aquariums', related: 'Similar aquariums' },
    oprema: { listing: '/en/equipment.html', crumb: 'Equipment', schema: 'Equipment', related: 'Similar equipment' },
  },
  ru: {
    terarijumi: { listing: '/ru/terrariums.html', crumb: 'Террариумы', schema: 'Террариумы', related: 'Похожие террариумы' },
    akvarijumi: { listing: '/ru/aquariums.html', crumb: 'Аквариумы', schema: 'Аквариумы', related: 'Похожие аквариумы' },
    oprema: { listing: '/ru/equipment.html', crumb: 'Оборудование', schema: 'Оборудование', related: 'Похожее оборудование' },
  },
};
export const categoryText = (lang: Locale, c: Category): CategoryText =>
  lang === 'sr' ? CATEGORIES[c] : CATEGORIES_I18N[lang][c];

/** URL segment kategorije na en/ru */
export const EN_CATEGORY: Record<Category, string> = { terarijumi: 'terrariums', akvarijumi: 'aquariums', oprema: 'equipment' };

export const categoryOf = (p: Product) => p.id.split('/')[0] as Category;
export const productPath = (p: Product) => `/proizvodi/${p.id}.html`;
export const stripHtml = (s: string) => s.replace(/<[^>]+>/g, '');

/** Proizvod na jednom jeziku: tekst iz prevoda, cena i slika iz srpskog fajla */
export interface ProductView {
  product: Product;
  lang: Locale;
  category: Category;
  path: string;
  name: string;
  label: string;
  lead: string;
  imageAlt: string;
  specs: { k: string; v: string }[];
  description: Product['data']['description'];
  seo: Product['data']['seo'];
  priceUnit?: string;
}

export async function getProducts() {
  return (await getCollection('products')).sort((a, b) => a.id.localeCompare(b.id));
}

let i18nCache: Promise<Map<string, ProductI18n>> | undefined;
const getI18n = () =>
  (i18nCache ??= getCollection('productI18n').then((all) => new Map(all.map((e) => [e.id, e]))));

/** null kad proizvod jos nema prevod na taj jezik */
export async function productView(p: Product, lang: Locale): Promise<ProductView | null> {
  const category = categoryOf(p);
  const d = p.data;
  if (lang === 'sr') {
    return { product: p, lang, category, path: productPath(p), name: d.name, label: d.label, lead: d.lead,
      imageAlt: d.imageAlt, specs: d.specs, description: d.description, seo: d.seo, priceUnit: d.priceUnit };
  }
  const map = await getI18n();
  const t = map.get(`${lang}/${p.id}`);
  const slug = map.get(`en/${p.id}`)?.data.slug;
  if (!t || !slug) return null;
  const td = t.data;
  return { product: p, lang, category, path: `/${lang}/products/${EN_CATEGORY[category]}/${slug}.html`,
    name: td.name, label: td.label, lead: td.lead, imageAlt: td.imageAlt, specs: td.specs,
    description: td.description, seo: td.seo, priceUnit: td.priceUnit ?? d.priceUnit };
}

/** Prevod ako postoji, inace srpska verzija (za kartice na en/ru stranama) */
export const productViewOrSr = async (p: Product, lang: Locale) =>
  (await productView(p, lang)) ?? (await productView(p, 'sr'))!;

const PRICE_TEXT: Record<Locale, { call: string; from: string; locale: string }> = {
  sr: { call: 'Pozovite za cenu', from: 'već od ', locale: 'sr-RS' },
  en: { call: 'Price on request', from: 'from ', locale: 'en-US' },
  ru: { call: 'Цена по запросу', from: 'от ', locale: 'ru-RU' },
};

export function priceLabel(p: Product | ProductView, lang: Locale = 'sr') {
  const v = 'product' in p ? p : null;
  const d = (v ? v.product : (p as Product)).data;
  const t = PRICE_TEXT[v ? v.lang : lang];
  if (d.price <= 0) return t.call;
  const unit = v ? v.priceUnit : d.priceUnit;
  return `${d.priceFrom ? t.from : ''}${d.price.toLocaleString(t.locale)} din${unit ? ' ' + unit : ''}`;
}

// 4 slicna proizvoda: prvo rucno izabrani, pa dopuna iz iste kategorije i iste grupe
export function relatedFor(p: Product, all: Product[], count = 4): Product[] {
  const byId = new Map(all.map((x) => [x.id, x]));
  const picked = p.data.related.map((id) => byId.get(id)).filter((x): x is Product => !!x && x.id !== p.id);
  const cat = categoryOf(p);
  const pool = all.filter((x) => x.id !== p.id && categoryOf(x) === cat && !picked.includes(x));
  const sameLabel = pool.filter((x) => x.data.label === p.data.label);
  return [...picked, ...sameLabel, ...pool].filter((x, i, arr) => arr.indexOf(x) === i).slice(0, count);
}

export function productSchema(v: ProductView) {
  const url = SITE.url + v.path;
  const d = v.product.data;
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: v.name,
    description: stripHtml(v.lead),
    image: SITE.url + d.image,
    url,
    inLanguage: v.lang,
    ...(d.brand ? { brand: { '@type': 'Brand', name: SITE.name } } : {}),
    manufacturer: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    category: categoryText(v.lang, v.category).schema,
    additionalProperty: v.specs.map((s) => ({ '@type': 'PropertyValue', name: s.k, value: s.v })),
    // Offer bez cene Google prijavljuje kao gresku - dodaje se samo kad je cena poznata
    ...(d.price > 0
      ? {
          offers: {
            '@type': 'Offer',
            price: d.price,
            priceCurrency: 'RSD',
            availability: 'https://schema.org/InStock',
            url,
            seller: { '@type': 'Organization', name: SITE.name },
          },
        }
      : {}),
  };
}
