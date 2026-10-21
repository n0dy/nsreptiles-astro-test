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
      title: z.string().min(1).max(70),
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

export const collections = { products, productI18n };
