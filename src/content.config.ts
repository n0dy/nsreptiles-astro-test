import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Podaci o proizvodima - sve sa postojecih strana, nista izmisljeno.
// Build pada ako nekom proizvodu fali obavezno polje.
const block = z.discriminatedUnion('type', [
  z.object({ type: z.literal('h2'), text: z.string().min(1) }),
  z.object({ type: z.literal('p'), html: z.string().min(1) }),
  z.object({ type: z.literal('ul'), items: z.array(z.string().min(1)).min(1) }),
]);

const products = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/products' }),
  schema: z.object({
    name: z.string().min(1),
    label: z.string().min(1),
    lead: z.string().min(1),
    image: z.string().startsWith('/style/img/'),
    imageAlt: z.string().min(1),
    /** 0 = "Pozovite za cenu" */
    price: z.number().int().nonnegative(),
    /** cena je pocetna ("od 600 din"), uz opcionu jedinicu ("/ 100 kom") */
    priceFrom: z.boolean().default(false),
    priceUnit: z.string().optional(),
    specs: z.array(z.object({ k: z.string().min(1), v: z.string().min(1) })).min(1),
    description: z.array(block).min(1),
    seo: z.object({
      title: z.string().min(1).max(65),
      description: z.string().min(50).max(160),
      keywords: z.string().optional(),
      ogTitle: z.string().optional(),
      ogDescription: z.string().optional(),
    }),
    brand: z.boolean().default(true),
    /** "kategorija/slug" drugih proizvoda */
    related: z.array(z.string()).default([]),
  }),
});

// Prevodi proizvoda: product-i18n/{en,ru}/<kategorija>/<sr-slug>.json
// Samo tekst - cena, slika i ostalo dolaze iz srpskog fajla.
const productI18n = defineCollection({
  // id = putanja fajla; inace glob loader uzima polje `slug` kao id
  loader: glob({
    pattern: '{en,ru}/**/*.json',
    base: './src/content/product-i18n',
    generateId: ({ entry }) => entry.replace(/\.json$/, ''),
  }),
  schema: z.object({
    /** URL slug na engleskom (obavezan u en fajlu, ru koristi isti) */
    slug: z.string().regex(/^[a-z0-9-]+$/).optional(),
    name: z.string().min(1),
    label: z.string().min(1),
    lead: z.string().min(1),
    imageAlt: z.string().min(1),
    specs: z.array(z.object({ k: z.string().min(1), v: z.string().min(1) })).min(1),
    description: z.array(block).min(1),
    priceUnit: z.string().optional(),
    seo: z.object({
      title: z.string().min(1).max(65),
      description: z.string().min(50).max(160),
      keywords: z.string().optional(),
    }),
  }),
});

// Vodici o vrstama: species/{sr,en,ru}/<sr-slug>.json
// Slike, preporuceni proizvodi i cena su samo u sr fajlu, en/ru nose samo tekst.
// Polja sa <b>/<strong> se renderuju kao HTML - samo nas tekst.
const species = defineCollection({
  loader: glob({
    pattern: '{sr,en,ru}/*.json',
    base: './src/content/species',
    generateId: ({ entry }) => entry.replace(/\.json$/, ''),
  }),
  schema: z.object({
    seo: z.object({
      title: z.string().min(1),
      description: z.string().min(1),
      keywords: z.string().optional(),
      ogTitle: z.string().optional(),
      ogDescription: z.string().min(1),
    }),
    article: z.object({ headline: z.string().min(1), description: z.string().min(1) }),
    name: z.string().min(1),
    /** naziv u breadcrumb JSON-LD, kad se razlikuje od h1 */
    schemaName: z.string().optional(),
    lead: z.string().min(1),
    image: z.string().startsWith('/style/img/').optional(),
    photo: z.string().startsWith('/style/img/').optional(),
    /** [sirina, visina] fotografije, podrazumevano 1248x832 */
    photoSize: z.tuple([z.number().int().positive(), z.number().int().positive()]).optional(),
    photoAlt: z.string().min(1),
    intro: z.string().min(1),
    price: z
      .object({
        label: z.string().min(1),
        value: z.string().min(1),
        note: z.string().min(1),
        call: z.string().min(1),
        waText: z.string().min(1),
        /** najniza cena u RSD za Product JSON-LD */
        low: z.number().int().positive().optional(),
      })
      .optional(),
    sections: z
      .array(
        z.object({
          title: z.string().min(1),
          boxes: z
            .array(
              z.object({
                title: z.string().optional(),
                p: z.array(z.string().min(1)).min(1),
                /** <br> izmedju pasusa */
                spaced: z.boolean().optional(),
              }),
            )
            .min(1),
        }),
      )
      .min(1),
    /** "kategorija/slug" proizvoda iz kolekcije products */
    related: z.array(z.string()).optional(),
    faq: z
      .object({
        title: z.string().min(1),
        items: z.array(z.object({ q: z.string().min(1), a: z.string().min(1) })).min(1),
      })
      .optional(),
    /** Product JSON-LD (uz price) */
    product: z.object({ name: z.string().optional(), description: z.string().min(1) }).optional(),
    cta: z.object({ title: z.string().optional(), text: z.string().min(1), waText: z.string().min(1) }),
  }),
});

export const collections = { products, productI18n, species };
