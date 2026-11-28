import type { APIRoute } from 'astro';
import { SITE } from '../config/site';
import { translationsFor, PRODUCT_GROUPS } from '../i18n/routes';
import { getProducts, productPath } from '../lib/products';
import { gitDates } from '../lib/git-dates';

const EXCLUDE = new Set(['/404.html', '/en/404.html', '/ru/404.html', '/blog.html', '/en/blog.html', '/ru/blog.html', '/pretraga.html', '/en/search.html', '/ru/search.html',
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
  // prevod deli slike, cenu i mere sa sr izvorom: datum je noviji od ta dva fajla
  const setGroup = (srPath: string, srDate: string | undefined, i18nFile: (lang: string) => string) => {
    for (const [lang, p] of Object.entries({ sr: srPath, ...translationsFor(srPath) })) {
      const own = lang === 'sr' ? undefined : dates.get(i18nFile(lang));
      const d = [srDate, own].filter(Boolean).sort().pop();
      if (p && d) lastmod.set(p, d);
    }
  };
  for (const p of allProducts) {
    setGroup(productPath(p), dates.get(`src/content/products/${p.id}.json`), (lang) => `src/content/product-i18n/${lang}/${p.id}.json`);
  }
  for (const [file, d] of dates) {
    const m = file.match(/^src\/content\/species\/sr\/(.+)\.json$/);
    if (m) setGroup(`/zivotinje/${m[1].replaceAll('-', '')}.html`, d, (lang) => `src/content/species/${lang}/${m[1]}.json`);
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
