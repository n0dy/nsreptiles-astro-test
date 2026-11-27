// Snimci ekrana 3D konfiguratora za stranu sa uputstvom (/3d-uputstvo.html).
// Pokrece se rucno kad se izgled konfiguratora promeni, uz upaljen `astro dev`:
//   SHOT_DEPS=/neki/folder/ node scripts/3d-guide-shots.mjs [sr en ru]
// puppeteer-core i sharp nisu zavisnosti projekta: instaliraj ih u bilo koji folder i daj ga u SHOT_DEPS.
import { mkdirSync, writeFileSync, readFileSync, existsSync } from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(process.env.SHOT_DEPS || import.meta.url);
const puppeteer = require('puppeteer-core');
const sharp = require('sharp');
const langs = process.argv.slice(2);
const out = 'public/style/img/3d/uputstvo';
const SIZES_FILE = 'src/i18n/pages/guide-3d-shots.json';
const sizes = existsSync(SIZES_FILE) ? JSON.parse(readFileSync(SIZES_FILE, 'utf8')) : {};
const BASE = 'http://localhost:4321';
const PAGES = {
  sr: { terarijum: '/3d-terarijum.html', akvarijum: '/3d-akvarijum.html' },
  en: { terarijum: '/en/3d-terrarium.html', akvarijum: '/en/3d-aquarium.html' },
  ru: { terarijum: '/ru/3d-terrarium.html', akvarijum: '/ru/3d-aquarium.html' },
};
const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'],
});
// upis tek na kraju: svaka nova slika u public/ natera astro dev da ponovo ucita stranu usred snimanja
const files = [];
// height: iseci panel ispod poslednje kontrole (ostatak je prazan)
const save = async (el, lang, name, height) => {
  let img = sharp(await el.screenshot());
  if (height) img = img.extract({ left: 0, top: 0, width: (await img.metadata()).width, height });
  const { data, info } = await img.webp({ quality: 82 }).toBuffer({ resolveWithObject: true });
  files.push([`${out}/${lang}/${name}.webp`, data]);
  (sizes[lang] ??= {})[name] = [info.width, info.height];
  console.log(lang, name, info.width, info.height);
};
const ready = (page) => page.waitForFunction(() => getComputedStyle(document.getElementById('loading')).display === 'none', { timeout: 60000 });
// klik preko DOM-a: klik misem ume da promasi tab dok se raspored panela jos pomera
const openTab = (page, tab) => page.evaluate((t) => document.querySelector(`.panel-tabs button[data-tab="${t}"]`).click(), tab);
const settle = (ms = 700) => new Promise((r) => setTimeout(r, ms));
for (const lang of langs.length ? langs : ['sr', 'en', 'ru']) {
  mkdirSync(`${out}/${lang}`, { recursive: true });
  for (const [type, path] of Object.entries(PAGES[lang])) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 1250, deviceScaleFactor: 1 });
    await page.goto(BASE + path, { waitUntil: 'networkidle2' });
    await ready(page); await settle(1500);
    await page.evaluate(() => document.querySelector('astro-dev-toolbar')?.remove());
    const panel = await page.$('#panel');
    for (const tab of await page.$$eval('.panel-tabs button', (bs) => bs.map((b) => b.dataset.tab))) {
      await openTab(page, tab);
      if (tab === 'decor') {
        await page.evaluate(() => {
          document.querySelectorAll('#substrate-options > *')[1]?.click();
          document.querySelector('#decor-options > *')?.click();
        });
        await page.waitForFunction(() => !document.getElementById('decor-selected').hidden, { timeout: 30000 });
        await settle(1500);
      }
      await settle();
      const height = await page.evaluate((t) => {
        const tabEl = document.querySelector(`.panel-tab[data-tab="${t}"]`);
        return Math.ceil(tabEl.getBoundingClientRect().bottom - document.getElementById('panel').getBoundingClientRect().top) + 20;
      }, tab);
      await save(panel, lang, `${type}-${tab}`, height);
    }
    await openTab(page, 'box');
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
    await settle(1200);
    await save(await page.$('#viewer-wrap'), lang, `${type}-pregled`);
    await page.close();
  }
  // telefon: AR dugme se inace pojavi tek kad uredjaj potvrdi AR, ovde ga samo otkrivamo za sliku
  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 760, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await page.goto(BASE + PAGES[lang].terarijum, { waitUntil: 'networkidle2' });
  await ready(page); await settle(5000);
  await page.evaluate(() => {
    document.querySelector('astro-dev-toolbar')?.remove();
    document.getElementById('ar-button').classList.remove('hidden');
  });
  await settle(300);
  await save(await page.$('#viewer-wrap'), lang, 'ar-telefon');
  await page.close();
}
await browser.close();
files.forEach(([file, data]) => writeFileSync(file, data));
writeFileSync(SIZES_FILE, JSON.stringify(sizes, null, 2) + '\n');
