import type { APIRoute } from 'astro';
import { SITE } from '../config/site';
import { translationsFor, PRODUCT_GROUPS } from '../i18n/routes';
import { getProducts, productPath } from '../lib/products';
import { gitDates } from '../lib/git-dates';

const EXCLUDE = new Set(['/404.html', '/en/404.html', '/ru/404.html', '/pretraga.html', '/en/search.html', '/ru/search.html',
  // kalkulator je u robots.txt Disallow (kao na starom sajtu)
  '/kalkulator.html', '/en/calculator.html', '/ru/calculator.html']);

const pageFiles = Object.keys(import.meta.glob('./**/*.astro'));

const toUrl = (file: string) =>
  file
    .replace(/^\.\//, '/')
    .replace(/(^|\/)index\.astro$/, '$1')
    .replace(/\.astro$/, '.html');

export const GET: APIRoute = async () => {
  const pages = pageFiles.filter((f) => !f.includes('[')).map(toUrl);
  const dates = gitDates();
  const allProducts = await getProducts();
  const lastmod = new Map<string, string>();
  for (const p of allProducts) {
    const d = dates.get(`src/content/products/${p.id}.json`);
    if (d) lastmod.set(productPath(p), d);
  }
  for (const [file, d] of dates) {
    const m = file.match(/^src\/content\/species\/sr\/(.+)\.json$/);
    if (m) lastmod.set(`/zivotinje/${m[1].replaceAll('-', '')}.html`, d);
  }
  const products = [
    ...allProducts.map(productPath),
    ...PRODUCT_GROUPS.flatMap((g) => [g.en, g.ru].filter((u): u is string => !!u)),
  ];
  const urls = [...new Set([...pages, ...products])].filter((u) => !EXCLUDE.has(u)).sort();

  const entry = (path: string) => {
    const group = translationsFor(path);
    const alternates = group.sr
      ? [
          ...Object.entries(group).map(([lang, p]) => [lang, p!]),
          ['x-default', group.sr],
        ]
          .map(([lang, p]) => `\n    <xhtml:link rel="alternate" hreflang="${lang}" href="${SITE.url}${p}"/>`)
          .join('')
      : '';
    const mod = lastmod.has(path) ? `\n    <lastmod>${lastmod.get(path)}</lastmod>` : '';
    return `  <url>\n    <loc>${SITE.url}${path}</loc>${mod}${alternates}\n  </url>`;
  };

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map(entry).join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
