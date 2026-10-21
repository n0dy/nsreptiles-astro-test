import type { APIRoute } from 'astro';
import { SITE } from '../config/site';
import { translationsFor } from '../i18n/routes';
import { getProducts, productPath } from '../lib/products';

const EXCLUDE = new Set(['/404.html', '/korpa.html', '/en/cart.html', '/ru/cart.html']);

const pageFiles = Object.keys(import.meta.glob('./**/*.astro'));

const toUrl = (file: string) =>
  file
    .replace(/^\.\//, '/')
    .replace(/(^|\/)index\.astro$/, '$1')
    .replace(/\.astro$/, '.html');

export const GET: APIRoute = async () => {
  const pages = pageFiles.filter((f) => !f.includes('[')).map(toUrl);
  const products = (await getProducts()).map(productPath);
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
    return `  <url>\n    <loc>${SITE.url}${path}</loc>${alternates}\n  </url>`;
  };

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.map(entry).join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
