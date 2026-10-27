import type { Locale } from '../config/site';

type Group = Partial<Record<Locale, string>>;

// Strane koje postoje na vise jezika (za hreflang, jezicki meni i sitemap)
export const TRANSLATIONS: Group[] = [
  {
    "ru": "/ru/aquariums.html",
    "sr": "/akvarijumi.html",
    "en": "/en/aquariums.html"
  },
  {
    "ru": "/ru/faq.html",
    "sr": "/cesta-pitanja.html",
    "en": "/en/faq.html"
  },
  {
    "ru": "/ru/shipping.html",
    "sr": "/dostava.html",
    "en": "/en/shipping.html"
  },
  {
    "ru": "/ru/about.html",
    "sr": "/onama.html",
    "en": "/en/about.html"
  },
  {
    "sr": "/zivotinje.html",
    "en": "/en/animals.html",
    "ru": "/ru/animals.html"
  },
  {
    "ru": "/ru/contact.html",
    "sr": "/kontakt.html",
    "en": "/en/contact.html"
  },
  {
    "ru": "/ru/custom-aquariums.html",
    "sr": "/izrada-akvarijuma.html",
    "en": "/en/custom-aquariums.html"
  },
  {
    "ru": "/ru/custom-terrariums.html",
    "sr": "/izrada-terarijuma.html",
    "en": "/en/custom-terrariums.html"
  },
  {
    "ru": "/ru/custom-vivariums.html",
    "sr": "/izrada-vivarijuma.html",
    "en": "/en/custom-vivariums.html"
  },
  {
    "ru": "/ru/equipment.html",
    "sr": "/oprema.html",
    "en": "/en/equipment.html"
  },
  {
    "ru": "/ru/gallery.html",
    "sr": "/galerija.html",
    "en": "/en/gallery.html"
  },
  {
    "ru": "/ru/",
    "sr": "/",
    "en": "/en/"
  },
  {
    "ru": "/ru/led-lighting.html",
    "sr": "/izrada-led-rasvete.html",
    "en": "/en/led-lighting.html"
  },
  {
    "ru": "/ru/maintenance.html",
    "sr": "/odrzavanje-akvarijuma-terarijuma.html",
    "en": "/en/maintenance.html"
  },
  {
    "ru": "/ru/privacy-policy.html",
    "sr": "/politika-privatnosti.html",
    "en": "/en/privacy-policy.html"
  },
  {
    "ru": "/ru/repair.html",
    "sr": "/popravka-akvarijuma-terarijuma.html",
    "en": "/en/repair.html"
  },
  {
    "sr": "/terarijumi.html",
    "en": "/en/terrariums.html",
    "ru": "/ru/terrariums.html"
  }
];

// Dodatne grupe prevedenih strana: src/i18n/routes/*.json (niz grupa {sr, en, ru})
const extra = Object.values(
  import.meta.glob<Group[]>('./routes/*.json', { eager: true, import: 'default' })
).flat();

// Proizvodi: postoje na en/ru kad postoji fajl u content/product-i18n/<lang>/
const EN_PRODUCT_CAT: Record<string, string> = { terarijumi: 'terrariums', akvarijumi: 'aquariums', oprema: 'equipment' };
const enFiles = import.meta.glob<{ slug?: string }>('../content/product-i18n/en/**/*.json', { eager: true, import: 'default' });
const ruFiles = new Set(
  Object.keys(import.meta.glob('../content/product-i18n/ru/**/*.json')).map((k) => k.replace('/ru/', '/en/'))
);
export const PRODUCT_GROUPS: Group[] = Object.entries(enFiles).flatMap(([file, data]) => {
  const m = file.match(/\/en\/([a-z]+)\/([^/]+)\.json$/);
  if (!m || !data.slug) return [];
  const [, cat, srSlug] = m;
  const loc = `/products/${EN_PRODUCT_CAT[cat]}/${data.slug}.html`;
  return [{ sr: `/proizvodi/${cat}/${srSlug}.html`, en: `/en${loc}`, ...(ruFiles.has(file) ? { ru: `/ru${loc}` } : {}) }];
});

// grupe sa istom sr stranom (npr. en i ru iz razlicitih fajlova) spajaju se u jednu
const merged = new Map<string, Group>();
for (const g of [...TRANSLATIONS, ...extra, ...PRODUCT_GROUPS]) {
  const key = g.sr ?? g.en!;
  merged.set(key, { ...merged.get(key), ...g });
}
export const ALL_GROUPS = [...merged.values()];

const index = new Map<string, Group>();
for (const g of ALL_GROUPS) for (const p of Object.values(g)) index.set(p!, g);

export const translationsFor = (path: string): Group => index.get(path) ?? {};

/** srpska putanja -> putanja na datom jeziku; build pada ako prevod strane ne postoji */
export function localizePath(srPath: string, lang: Locale): string {
  if (lang === 'sr') return srPath;
  const path = translationsFor(srPath)[lang];
  if (!path) throw new Error(`Nema ${lang} verzije strane ${srPath}`);
  return path;
}
