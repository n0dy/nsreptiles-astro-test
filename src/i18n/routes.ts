import type { Locale } from '../config/site';

type Group = Partial<Record<Locale, string>>;

// Strane koje postoje na vise jezika (za hreflang, jezicki meni i sitemap)
export const TRANSLATIONS: Group[] = [
  {
    "ru": "/ru/aquariums.html",
    "sr": "/akvaristika.html",
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
    "ru": "/ru/cart.html",
    "sr": "/korpa.html",
    "en": "/en/cart.html"
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

const index = new Map<string, Group>();
for (const g of TRANSLATIONS) for (const p of Object.values(g)) index.set(p!, g);

export const translationsFor = (path: string): Group => index.get(path) ?? {};
