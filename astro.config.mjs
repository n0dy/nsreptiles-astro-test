// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nsreptiles.net',
  // .html URL-ovi kao na postojecem sajtu - nijedan indeksirani URL se ne menja
  build: { format: 'preserve' },
  trailingSlash: 'ignore',
  // kompresija brise razmak izmedju teksta i <strong>/<a> u novom redu ("je<strong>odgajivacnica")
  compressHTML: false,
});
