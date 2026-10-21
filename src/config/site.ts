export const SITE = {
  url: 'https://nsreptiles.net',
  name: 'NS Reptiles',
  phone: '+381693301474',
  phoneDisplay: '+381 69 330 1474',
  whatsapp: '381693301474',
  email: 'bata.dino00@gmail.com',
  mapsUrl: 'https://maps.google.com/?q=NS+REPTILES+Novi+Sad',
  gaId: 'G-3KC3X479RW',
  gtmId: 'GTM-KCTXKR4',
  social: {
    facebook: 'https://facebook.com/NSReptiless',
    instagram: 'https://www.instagram.com/ns_reptiles/',
    tiktok: 'https://www.tiktok.com/@ns_reptiles',
  },
} as const;

export const LOCALES = ['sr', 'en', 'ru'] as const;
export type Locale = (typeof LOCALES)[number];

export const whatsappLink = (text?: string) =>
  `https://wa.me/${SITE.whatsapp}` +
  (text ? `?text=${encodeURIComponent(text)}` : '');

// Netlify postavlja URL na primarni domen sajta. Dok primarni domen nije
// nsreptiles.net (test na *.netlify.app, lokalni build), sve strane su noindex.
export const IS_INDEXABLE = (process.env.URL ?? '').startsWith(SITE.url);
