import { getCollection, type CollectionEntry } from 'astro:content';
import { SITE } from '../config/site';

export type Product = CollectionEntry<'products'>;

export const CATEGORIES = {
  terarijumi: { listing: '/terarijumi.html', crumb: 'Terarijumi', schema: 'Terarijumi', related: 'Slični terarijumi' },
  akvarijumi: { listing: '/akvaristika.html', crumb: 'Akvaristika', schema: 'Akvarijumi', related: 'Slični akvarijumi' },
  oprema: { listing: '/oprema.html', crumb: 'Oprema', schema: 'Oprema', related: 'Slična oprema' },
} as const;
export type Category = keyof typeof CATEGORIES;

export const categoryOf = (p: Product) => p.id.split('/')[0] as Category;
export const productPath = (p: Product) => `/proizvodi/${p.id}.html`;
export const stripHtml = (s: string) => s.replace(/<[^>]+>/g, '');

export function priceLabel(p: Product) {
  const d = p.data;
  if (d.price <= 0) return 'Pozovite za cenu';
  return `${d.priceFrom ? 'već od ' : ''}${d.price.toLocaleString('sr-RS')} din${d.priceUnit ? ' ' + d.priceUnit : ''}`;
}

export async function getProducts() {
  return (await getCollection('products')).sort((a, b) => a.id.localeCompare(b.id));
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

export function productSchema(p: Product) {
  const url = SITE.url + productPath(p);
  const d = p.data;
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: d.name,
    description: stripHtml(d.lead),
    image: SITE.url + d.image,
    url,
    ...(d.brand ? { brand: { '@type': 'Brand', name: SITE.name } } : {}),
    manufacturer: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    category: CATEGORIES[categoryOf(p)].schema,
    additionalProperty: d.specs.map((s) => ({ '@type': 'PropertyValue', name: s.k, value: s.v })),
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
