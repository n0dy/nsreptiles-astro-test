import type { Locale } from '../../config/site';

type L<T = string> = Record<Locale, T>;

/** modeli su isti na svim jezicima; slike imaju nepravilna imena (poz0010...) pa se cuvaju cela */
export const BG_MODELS = [
  { size: '100x40cm', code: 'M001', img: 'poz001' },
  { size: '100x40cm', code: 'M002', img: 'poz002' },
  { size: '100x40cm', code: 'M003', img: 'poz003' },
  { size: '100x40cm', code: 'M004', img: 'poz004' },
  { size: '100x40cm', code: 'M005', img: 'poz005' },
  { size: '100x40cm', code: 'M006', img: 'poz006' },
  { size: '90x45cm', code: 'M007', img: 'poz007' },
  { size: '11x20cm', code: 'M008', img: 'poz008' },
  { size: '65x30cm', code: 'M009', img: 'poz009' },
  { size: '35x25cm', code: 'M010', img: 'poz0010' },
  { size: '35x25cm', code: 'M011', img: 'poz0011' },
  { size: '70x50cm', code: 'M012', img: 'poz0012' },
];

// Vrednosti sa <strong>/<b> se renderuju kao HTML - samo nas tekst, nikad korisnicki unos.
export const BACKGROUNDS_3D: L<{
  meta: { title: string; description: string; keywords: string; ogTitle: string; ogDescription: string };
  schemaName: string;
  schemaDescription: string;
  home: string;
  crumb: string;
  h1: string;
  lead: string;
  intro: string;
  searchPlaceholder: string;
  /** oblici za Intl.PluralRules kategorije jezika */
  models: Partial<Record<Intl.LDMLPluralRule, string>> & { other: string };
  /** prefiks za data-search; ru sadrzi i srpsku rec da pretraga radi i latinicom */
  search: string;
  cat: string;
  alt: string;
  name: string;
  price: string;
  empty: string;
  showAll: string;
  ctaTitle: string;
  ctaText: string;
  call: string;
  moreTitle: string;
  more: string[];
}> = {
  sr: {
    meta: {
      title: '3D pozadine za akvarijume i terarijume po meri | NS Reptiles',
      description:
        '3D pozadine po meri za akvarijume i terarijume - prirodni siga kamen, imitacija stene, treset i kora drveta. Unikatni dizajni, izrada u Novom Sadu.',
      keywords:
        '3D pozadina za akvarijum, 3D pozadina za terarijum, 3D pozadine po meri, siga kamen pozadina, stena pozadina, dekoracija akvarijuma, NS Reptiles',
      ogTitle: '3D Pozadine za Akvarijume i Terarijume - NS Reptiles',
      ogDescription:
        'Unikatne 3D pozadine po meri za akvarijume i terarijume. Izrada od prirodnih materijala - siga kamen, stena, treset.',
    },
    schemaName: '3D Pozadine za Akvarijume i Terarijume',
    schemaDescription:
      'Unikatne 3D pozadine po meri izradjene od prirodnih materijala - siga kamen, imitacija stene, treset i kora drveta.',
    home: 'Pocetna',
    crumb: '3D pozadine',
    h1: '3D pozadine za akvarijume i terarijume',
    lead: 'Unikatne 3D pozadine po meri od prirodnih materijala - siga kamen, imitacija stene, treset i kora drveta. Svaka pozadina se izrađuje ručno, prema dimenzijama vašeg akvarijuma ili terarijuma.',
    intro:
      '3D pozadine izrađujemo od najkvalitetnijih materijala. U ponudi su pozadine sa <strong>prirodnim siga kamenom</strong>, imitacijom stene, kombinacijom <strong>treseta i kore od drveta</strong>, kao i 3D logo vašeg brenda ili firme. Sve pozadine se prave po meri, tako da savršeno naleže na zadnji zid vašeg akvarijuma ili terarijuma.',
    searchPlaceholder: 'Pretraži pozadine...',
    models: { one: 'model', other: 'modela' },
    search: 'pozadina',
    cat: '3D pozadina',
    alt: '3D pozadina za akvarijum i terarijum',
    name: 'Pozadina',
    price: 'Pozovite za cenu',
    empty: 'Nema rezultata za vašu pretragu.',
    showAll: 'Prikaži sve pozadine',
    ctaTitle: '3D pozadina <b>po meri</b>',
    ctaText:
      'Pošaljite nam dimenzije vašeg akvarijuma ili terarijuma i željeni materijal - izradićemo unikatnu 3D pozadinu tačno po vašim potrebama.',
    call: 'Pozovi nas',
    moreTitle: 'Sve na <b>jednom mestu</b>',
    more: ['Izrada terarijuma', 'Izrada akvarijuma', 'Izrada LED rasvete', 'Oprema za terarijume'],
  },
  en: {
    meta: {
      title: 'Custom 3D Aquarium & Terrarium Backgrounds | NS Reptiles',
      description:
        'Custom 3D backgrounds for aquariums and terrariums - natural tufa stone, rock imitation, peat and tree bark. Unique designs, made in Novi Sad.',
      keywords:
        '3D aquarium background, 3D terrarium background, custom 3D background, tufa stone background, rock background, aquarium decoration, NS Reptiles',
      ogTitle: '3D Backgrounds for Aquariums and Terrariums - NS Reptiles',
      ogDescription:
        'Unique custom 3D backgrounds for aquariums and terrariums. Made from natural materials - tufa stone, rock, peat.',
    },
    schemaName: '3D Backgrounds for Aquariums and Terrariums',
    schemaDescription:
      'Unique custom 3D backgrounds made from natural materials - tufa stone, rock imitation, peat and tree bark.',
    home: 'Home',
    crumb: '3D backgrounds',
    h1: '3D backgrounds for aquariums and terrariums',
    lead: 'Unique custom 3D backgrounds made from natural materials - tufa stone, rock imitation, peat and tree bark. Every background is handmade to the dimensions of your aquarium or terrarium.',
    intro:
      'We make 3D backgrounds from top-quality materials. We offer backgrounds with <strong>natural tufa stone</strong>, rock imitation, a combination of <strong>peat and tree bark</strong>, as well as a 3D logo of your brand or company. All backgrounds are made to measure, so they fit the back wall of your aquarium or terrarium perfectly.',
    searchPlaceholder: 'Search backgrounds...',
    models: { one: 'model', other: 'models' },
    search: 'background',
    cat: '3D background',
    alt: '3D background for aquarium and terrarium',
    name: 'Background',
    price: 'Price on request',
    empty: 'No results for your search.',
    showAll: 'Show all backgrounds',
    ctaTitle: 'Custom <b>3D background</b>',
    ctaText:
      'Send us the dimensions of your aquarium or terrarium and the material you want - we will make a unique 3D background tailored exactly to your needs.',
    call: 'Call us',
    moreTitle: 'Everything in <b>one place</b>',
    more: ['Custom terrariums', 'Custom aquariums', 'Custom LED lighting', 'Terrarium equipment'],
  },
  ru: {
    meta: {
      title: '3D-фоны для аквариумов и террариумов | NS Reptiles',
      description:
        '3D-фоны на заказ для аквариумов и террариумов — натуральный туф, имитация скалы, торф и кора. Уникальный дизайн, изготовление в Нови-Саде.',
      keywords:
        '3D-фон для аквариума, 3D-фон для террариума, 3D-фон на заказ, фон из туфа, фон скала, декор аквариума, NS Reptiles',
      ogTitle: '3D-фоны на заказ для аквариумов и террариумов — NS Reptiles',
      ogDescription:
        'Уникальные 3D-фоны на заказ для аквариумов и террариумов. Изготовление из натуральных материалов — туф, скала, торф.',
    },
    schemaName: '3D-фоны для аквариумов и террариумов',
    schemaDescription:
      'Уникальные 3D-фоны на заказ из натуральных материалов — туф, имитация скалы, торф и кора дерева.',
    home: 'Главная',
    crumb: '3D-фоны',
    h1: '3D-фоны для аквариумов и террариумов',
    lead: 'Уникальные 3D-фоны на заказ из натуральных материалов — туф, имитация скалы, торф и кора дерева. Каждый фон изготавливается вручную по размерам вашего аквариума или террариума.',
    intro:
      'Мы изготавливаем 3D-фоны из самых качественных материалов. В ассортименте фоны с <strong>натуральным туфом</strong>, имитацией скалы, сочетанием <strong>торфа и коры дерева</strong>, а также 3D-логотип вашего бренда или компании. Все фоны делаются на заказ, поэтому идеально прилегают к задней стенке вашего аквариума или террариума.',
    searchPlaceholder: 'Поиск фонов...',
    models: { one: 'модель', few: 'модели', many: 'моделей', other: 'моделей' },
    search: 'фон pozadina',
    cat: '3D-фон',
    alt: '3D-фон для аквариума и террариума',
    name: 'Фон',
    price: 'Цена по запросу',
    empty: 'По вашему запросу ничего не найдено.',
    showAll: 'Показать все фоны',
    ctaTitle: '3D-фон <b>на заказ</b>',
    ctaText:
      'Пришлите нам размеры вашего аквариума или террариума и желаемый материал — мы изготовим уникальный 3D-фон точно под ваши потребности.',
    call: 'Позвоните нам',
    moreTitle: 'Всё в <b>одном месте</b>',
    more: ['Изготовление террариумов', 'Изготовление аквариумов', 'Изготовление LED-освещения', 'Оборудование для террариумов'],
  },
};
