// Posle builda: dopunjuje dist/_redirects za Cloudflare (html_handling "none")
// i proverava da produkcioni build nije noindex.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = 'dist';
const SKIP_DIRS = new Set(['en', 'ru', 'pagefind', '_astro']);

function htmlPages(dir, out = [], skip = SKIP_DIRS) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      if (dir === DIST && skip.has(e.name)) continue;
      htmlPages(join(dir, e.name), out, skip);
    } else if (e.name.endsWith('.html')) {
      out.push('/' + relative(DIST, join(dir, e.name)));
    }
  }
  return out;
}

const base = readFileSync(join(DIST, '_redirects'), 'utf8');
const rules = base
  .split('\n')
  .map((l) => l.split('#')[0].trim().split(/\s+/))
  .filter((p) => p.length >= 3);
const sources = new Set(rules.map((p) => p[0]));
const lines = [];
const add = (from, to, code) => {
  if (sources.has(from)) return;
  sources.add(from);
  lines.push(`${from} ${to} ${code}`);
};

// jezicki koreni: rewrite, ne redirekt
add('/en/', '/en/index.html', 200);
add('/ru/', '/ru/index.html', 200);
add('/en', '/en/', 301);
add('/ru', '/ru/', 301);
add('/index.html', '/', 301);
add('/en/index.html', '/en/', 301);
add('/ru/index.html', '/ru/', 301);

// Netlify je servirao /x i /x/ za x.html; ovde idu jednim 301 na krajnji URL.
// Samo sr strane (stari sajt nije imao en/ru), da ostanemo ispod limita od 2000 pravila.
const noExt = (p) => p.slice(0, -'.html'.length);
for (const [from, to, code] of rules) {
  if (code === '301' && from.endsWith('.html')) {
    add(noExt(from), to, 301);
    add(noExt(from) + '/', to, 301);
  }
}
for (const page of htmlPages(DIST).sort()) {
  if (page === '/index.html' || page === '/404.html' || page.startsWith('/google')) continue;
  add(noExt(page), page, 301);
  add(noExt(page) + '/', page, 301);
}

if (sources.size > 2000) throw new Error(`_redirects ima ${sources.size} pravila, limit je 2000`);
writeFileSync(
  join(DIST, '_redirects'),
  base.trimEnd() + '\n\n# Generisano (scripts/postbuild.mjs)\n' + lines.join('\n') + '\n',
);

// Slika zaglavlja (.page-head) je CSS pozadina iz promenljive, pa je preload skener ne vidi - bez ovoga LCP kasni.
let preloaded = 0;
for (const page of htmlPages(DIST, [], new Set(['pagefind', '_astro']))) {
  const file = join(DIST, page);
  const html = readFileSync(file, 'utf8');
  const m = html.match(/class="page-head"[^>]*--ph-img: url\(([^)]+)\); --ph-img-sm: url\(([^)]+)\)/);
  if (!m || html.includes(`rel="preload" as="image" href="${m[1]}"`)) continue;
  const link = (href, media) => `<link rel="preload" as="image" href="${href}"${media ? ` media="${media}"` : ''} fetchpriority="high">`;
  const links = m[1] === m[2] ? link(m[1]) : link(m[2], '(max-width: 768px)') + link(m[1], '(min-width: 769px)');
  writeFileSync(file, html.replace('</head>', links + '</head>'));
  preloaded++;
}

const home = readFileSync(join(DIST, 'index.html'), 'utf8');
const noindex = /<meta name="robots" content="[^"]*noindex/.test(home);
if (process.env.SITE_INDEXABLE === 'true' && noindex) {
  throw new Error('SITE_INDEXABLE=true, a dist/index.html je noindex');
}
console.log(`[postbuild] preload zaglavlja: ${preloaded} strana; _redirects: ${sources.size} pravila; indeksiranje: ${noindex ? 'ISKLJUCENO (noindex)' : 'ukljuceno'}`);
