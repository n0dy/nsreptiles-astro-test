// Manje varijante slika za srcset (kartice proizvoda, hero na telefonu, slike na pocetnoj).
// sharp nije zavisnost projekta: SHOT_DEPS=/folder/sa/sharp/ node scripts/img-variants.mjs
// Postojece varijante preskace, pa se pokrece ponovo kad se dodaju nove slike proizvoda.
import { createRequire } from 'node:module';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const sharp = createRequire(join(process.env.SHOT_DEPS || process.cwd(), 'x.js'))('sharp');
const IMG = 'public/style/img/';
const jobs = []; // [izvor, sufiks, sirina]

for (const dir of ['terarijumi', 'akvarijumi', 'oprema'])
  for (const f of readdirSync(`src/content/products/${dir}`)) {
    const { image } = JSON.parse(readFileSync(`src/content/products/${dir}/${f}`, 'utf8'));
    if (image?.startsWith('/style/img/') && image.endsWith('.webp')) jobs.push(['public' + image, '-320', 320]);
  }
for (const f of readdirSync(IMG + 'backgrounds')) if (/^(?!.*-320)\S+\.webp$/.test(f)) jobs.push([IMG + 'backgrounds/' + f, '-320', 320]);
for (const f of ['izrada/terarijum', 'izrada/akvarijum', 'oprema/scena']) jobs.push([IMG + f + '.webp', '-sm', 768]);
for (const f of ['bradata', 'piton', 'leopard', 'smuk', 'vodena']) jobs.push([IMG + `reptili/${f}.webp`, '-400', 400]);
jobs.push([IMG + 'about-agama.webp', '-600', 600]);
for (const f of ['terarijum', 'akvarijum']) jobs.push([IMG + `3d/konfigurator-${f}.webp`, '-800', 800]);

let made = 0;
for (const [src, suffix, width] of new Map(jobs.map((j) => [j[0] + j[1], j])).values()) {
  const out = src.replace(/\.webp$/, suffix + '.webp');
  if (existsSync(out) || !existsSync(src)) continue;
  await sharp(src).resize({ width, withoutEnlargement: true }).webp({ quality: 78 }).toFile(out);
  made++;
}
console.log(`napravljeno ${made} varijanti`);
