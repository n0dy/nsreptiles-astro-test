import type { Locale } from '../../config/site';
import type { Product } from '../../lib/products';

type L<T = string> = Record<Locale, T>;

// Vrednosti sa <b>/<strong> se renderuju kao HTML - samo nas tekst, nikad korisnicki unos.
export const LISTING_UI = {
  sr: {
    all: 'Sve',
    call: 'Pozovi nas',
    contact: 'kontaktirajte',
    /** Intl.PluralRules kategorija -> rec */
    count: { one: 'proizvod', few: 'proizvoda', other: 'proizvoda' },
  },
  en: {
    all: 'All',
    call: 'Call us',
    contact: 'contact us',
    count: { one: 'product', other: 'products' },
  },
  ru: {
    all: 'Все',
    call: 'Позвонить нам',
    contact: 'свяжитесь с нами',
    count: { one: 'товар', few: 'товара', many: 'товаров', other: 'товара' },
  },
} satisfies L<unknown>;

export interface Listing {
  /** srpska putanja strane */
  path: string;
  active: 'terrariums' | 'aquariums' | 'equipment';
  image: string;
  meta: L<{ title: string; description: string; ogTitle: string; ogDescription: string }>;
  h1: L;
  lead: L;
  intro: L;
  search: L;
  /** {contact} = link ka kontakt strani */
  empty: L;
  groups: { key: string; label: L }[];
  /** dodatni link medju filterima (srpska putanja) */
  extraPill?: { href: string; label: L };
  guides?: { title: L; links: { href: string; label: L }[] };
  cta: { title: L; text: L };
  /** koji proizvodi idu na listing */
  includes: (p: Product) => boolean;
  /** filter grupa proizvoda; undefined = build pada, da nijedan proizvod ne ostane bez grupe */
  groupOf: (p: Product) => string | undefined;
}

const cat = (p: Product) => p.id.split('/')[0];
const slug = (p: Product) => p.id.split('/')[1];

const SIZE: Record<string, string> = { 'Mali terarijum': 'mali', 'Srednji terarijum': 'srednji', 'Veliki terarijum': 'veliki' };

const EQUIPMENT_BY_LABEL: Record<string, string> = {
  Rasveta: 'rasveta',
  Hrana: 'ishrana',
  Suplementi: 'ishrana',
  'Živa hrana': 'ishrana',
  Dekoracija: 'dekoracija',
  Podloge: 'dekoracija',
  Supstrat: 'dekoracija',
  Pribor: 'dodatna-oprema',
};
// labela "Oprema" je presiroka za filter, pa se ti proizvodi rasporedjuju pojedinacno
const EQUIPMENT_BY_ID: Record<string, string> = {
  'cork-bark': 'dekoracija',
  'skrivalice-za-reptile': 'dekoracija',
  'folija-grejac': 'rasveta',
  'habistat-double-feeding-ledge': 'dodatna-oprema',
  'lizard-leash': 'dodatna-oprema',
  pinceta: 'dodatna-oprema',
  'posude-za-reptile': 'dodatna-oprema',
};

const EMPTY_CUSTOM: L = {
  sr: 'Nema rezultata za tu pretragu. Probajte drugi pojam ili nas <a href="{contact}">kontaktirajte</a> — radimo i po meri.',
  en: 'No results found. Try a different search term or <a href="{contact}">contact us</a> — we build to order too.',
  ru: 'По вашему запросу ничего не найдено. Попробуйте другой запрос или <a href="{contact}">свяжитесь с нами</a> — мы работаем на заказ.',
};

export const LISTINGS = {
  terarijumi: {
    path: '/terarijumi.html',
    active: 'terrariums',
    image: '/style/img/terrariums/90x45x45.webp',
    meta: {
      sr: {
        title: 'Terarijumi sa 3D pozadinom — izrada i prodaja | NS Reptiles',
        description: 'Stakleni terarijumi sa 3D pozadinom u preko 80 dimenzija. Ručna izrada, ventilacija, izrada po meri. NS Reptiles, Novi Sad.',
        ogTitle: 'Terarijumi sa 3D pozadinom | NS Reptiles',
        ogDescription: 'Stakleni terarijumi u preko 80 dimenzija, sa 3D pozadinom. Izrada po meri. Novi Sad.',
      },
      en: {
        title: 'Glass Terrariums with 3D Background | NS Reptiles',
        description: 'Hand-made glass terrariums with 3D backgrounds in over 80 sizes, with mesh or plastic ventilation. Custom builds available. NS Reptiles, Novi Sad.',
        ogTitle: 'Glass Terrariums with 3D Background | NS Reptiles',
        ogDescription: 'Glass terrariums in over 80 sizes, with 3D backgrounds. Custom builds. NS Reptiles, Novi Sad.',
      },
      ru: {
        title: 'Террариумы с 3D-фоном — изготовление | NS Reptiles',
        description: 'Стеклянные террариумы с 3D-фоном в более чем 80 размерах. Ручная работа, вентиляция, изготовление на заказ. NS Reptiles, Нови-Сад.',
        ogTitle: 'Террариумы с 3D-фоном | NS Reptiles',
        ogDescription: 'Стеклянные террариумы в более чем 80 размерах, с 3D-фоном. Изготовление на заказ. Нови-Сад.',
      },
    },
    h1: {
      sr: 'Stakleni terarijumi sa 3D pozadinom',
      en: 'Glass terrariums with 3D background',
      ru: 'Стеклянные террариумы с 3D-фоном',
    },
    lead: {
      sr: 'Ručno rađeni stakleni terarijumi u preko 80 dimenzija — od malih za mladunce do velikih nastambi, sa 3D pozadinom i ventilacijom.',
      en: 'Hand-made glass terrariums in over 80 sizes — from small ones for hatchlings to large enclosures, with 3D backgrounds and ventilation.',
      ru: 'Стеклянные террариумы ручной работы в более чем 80 размерах — от маленьких для детёнышей до больших вольеров, с 3D-фоном и вентиляцией.',
    },
    intro: {
      sr: 'Svaki terarijum izrađujemo <strong>ručno od stakla</strong>, sa mrežastom ili plastičnom ventilacijom i opcionom 3D pozadinom koja imitira prirodno stanište. Ne vidite dimenziju koja vam treba? Radimo <strong>izradu po meri</strong> — javite nam se sa merama.',
      en: 'Every terrarium is <strong>hand-made from glass</strong>, with mesh or plastic ventilation and an optional 3D background that mimics a natural habitat. Don\'t see the size you need? We offer <strong>custom builds</strong> — get in touch with your measurements.',
      ru: 'Каждый террариум мы изготавливаем <strong>вручную из стекла</strong>, с сетчатой или пластиковой вентиляцией и опциональным 3D-фоном, который имитирует естественную среду обитания. Не видите нужный размер? Выполняем <strong>изготовление на заказ</strong> — напишите нам ваши размеры.',
    },
    search: { sr: 'Pretraži terarijume...', en: 'Search terrariums...', ru: 'Поиск террариумов...' },
    empty: EMPTY_CUSTOM,
    groups: [
      { key: 'mali', label: { sr: 'Mali', en: 'Small', ru: 'Маленькие' } },
      { key: 'srednji', label: { sr: 'Srednji', en: 'Medium', ru: 'Средние' } },
      { key: 'veliki', label: { sr: 'Veliki', en: 'Large', ru: 'Большие' } },
    ],
    cta: {
      title: { sr: 'Terarijum <b>po meri</b>', en: 'Terrarium <b>built to order</b>', ru: 'Террариум <b>на заказ</b>' },
      text: {
        sr: 'Pošaljite nam dimenzije i vrstu životinje — izradićemo terarijum tačno po vašim potrebama, sa 3D pozadinom po želji.',
        en: "Send us the dimensions and the type of animal — we'll build a terrarium exactly to your needs, with a 3D background if you like.",
        ru: 'Отправьте нам размеры и вид животного — изготовим террариум точно под ваши потребности, с 3D-фоном по желанию.',
      },
    },
    includes: (p) => cat(p) === 'terarijumi',
    groupOf: (p) => SIZE[p.data.label],
  },
  akvarijumi: {
    path: '/akvarijumi.html',
    active: 'aquariums',
    image: '/style/img/aquariums/a100x40x50.webp',
    meta: {
      sr: {
        title: 'Akvarijumi i ter-akvarijumi — izrada i prodaja | NS Reptiles',
        description: 'Ručno lepljeni stakleni akvarijumi, kompleti sa opremom i ter-akvarijumi za kornjače. Izrada po meri. NS Reptiles, Novi Sad.',
        ogTitle: 'Akvarijumi i ter-akvarijumi | NS Reptiles',
        ogDescription: 'Stakleni akvarijumi, kompleti i ter-akvarijumi za vodene kornjače. Izrada po meri. Novi Sad.',
      },
      en: {
        title: 'Glass Aquariums & Ter-Aquariums for Sale | NS Reptiles',
        description: 'Hand-glued glass aquariums, starter kits with equipment and ter-aquariums for water turtles. Custom sizes available. NS Reptiles, Novi Sad.',
        ogTitle: 'Glass Aquariums & Ter-Aquariums | NS Reptiles',
        ogDescription: 'Glass aquariums, starter kits and ter-aquariums for water turtles. Custom sizes. NS Reptiles, Novi Sad.',
      },
      ru: {
        title: 'Аквариумы и тер-аквариумы в Нови-Саде | NS Reptiles',
        description: 'Стеклянные аквариумы ручной склейки, комплекты с оборудованием и тер-аквариумы для черепах. Изготовление на заказ. NS Reptiles, Нови-Сад.',
        ogTitle: 'Аквариумы и тер-аквариумы | NS Reptiles',
        ogDescription: 'Стеклянные аквариумы, комплекты и тер-аквариумы для водных черепах. Изготовление на заказ. Нови-Сад.',
      },
    },
    h1: {
      sr: 'Stakleni akvarijumi i ter-akvarijumi',
      en: 'Glass aquariums and ter-aquariums',
      ru: 'Стеклянные аквариумы и тер-аквариумы',
    },
    lead: {
      sr: 'Ručno lepljeni stakleni akvarijumi, kompleti sa opremom i ter-akvarijumi za vodene kornjače — plus izrada po meri.',
      en: 'Hand-glued glass aquariums, starter kits with equipment and ter-aquariums for water turtles — plus custom-made sizes.',
      ru: 'Стеклянные аквариумы ручной склейки, комплекты с оборудованием и тер-аквариумы для водных черепах — а также изготовление на заказ.',
    },
    intro: {
      sr: 'Sve akvarijume <strong>ručno lepimo od stakla</strong> — od malih za sitne ribice do velikih od preko 190 litara. <strong>Ter-akvarijumi</strong> sa suvim i vodenim delom idealni su za vodene kornjače. Za bilo koju dimenziju van ponude radimo <strong>izradu po meri</strong>.',
      en: 'Every aquarium is <strong>hand-glued from glass</strong> — from small tanks for fish to large ones exceeding 190 litres. <strong>Ter-aquariums</strong> with a dry and water section are ideal for water turtles. For any size outside our range we offer <strong>custom builds</strong>.',
      ru: 'Все аквариумы мы <strong>склеиваем вручную из стекла</strong> — от маленьких для мелкой рыбки до больших объёмом свыше 190 литров. <strong>Тер-аквариумы</strong> с сухой и водной зонами идеально подходят для водных черепах. Для любых нестандартных размеров выполняем <strong>изготовление на заказ</strong>.',
    },
    search: { sr: 'Pretraži akvarijume...', en: 'Search aquariums...', ru: 'Поиск аквариумов...' },
    empty: EMPTY_CUSTOM,
    groups: [
      { key: 'akvarijumi', label: { sr: 'Akvarijumi', en: 'Aquariums', ru: 'Аквариумы' } },
      { key: 'ter-akvarijumi', label: { sr: 'Ter-akvarijumi', en: 'Ter-aquariums', ru: 'Тер-аквариумы' } },
      { key: 'kompleti', label: { sr: 'Kompleti', en: 'Kits', ru: 'Комплекты' } },
    ],
    guides: {
      title: { sr: 'Kako opremiti <b>akvarijum</b>', en: 'How to set up an <b>aquarium</b>', ru: 'Как оборудовать <b>аквариум</b>' },
      links: [
        {
          href: '/akvaristika/red-moor-wood.html',
          label: { sr: 'Red Moor Wood — dekoracija', en: 'Red Moor Wood — decoration', ru: 'Red Moor Wood — декорация' },
        },
        {
          href: '/akvarijumi/akvarijum-za-kornjacu.html',
          label: { sr: 'Akvarijum za kornjaču', en: 'Turtle aquarium', ru: 'Аквариум для черепахи' },
        },
      ],
    },
    cta: {
      title: { sr: 'Akvarijum <b>po meri</b>', en: 'Aquarium <b>built to order</b>', ru: 'Аквариум <b>на заказ</b>' },
      text: {
        sr: 'Pošaljite nam dimenzije i namenu — izradićemo akvarijum ili ter-akvarijum tačno po vašem prostoru.',
        en: "Send us the dimensions and intended use — we'll build an aquarium or ter-aquarium that fits your space perfectly.",
        ru: 'Отправьте нам размеры и назначение — изготовим аквариум или тер-аквариум точно под ваше пространство.',
      },
    },
    // ter-akvarijumi su u katalogu pod terarijumima, a prikazuju se i ovde
    includes: (p) => cat(p) === 'akvarijumi' || slug(p).startsWith('ter-akvarijum'),
    groupOf: (p) =>
      slug(p).startsWith('ter-akvarijum') ? 'ter-akvarijumi' : p.data.label === 'Akvarijum komplet' ? 'kompleti' : 'akvarijumi',
  },
  oprema: {
    path: '/oprema.html',
    active: 'equipment',
    image: '/style/img/oprema/dubie.webp',
    meta: {
      sr: {
        title: 'Oprema za terarijume i akvarijume | NS Reptiles, Novi Sad',
        description: 'Oprema za reptile - UVB rasveta, grejanje, hrana i suplementi, ziva hrana (dubie, fobasi), podloge i dekoracija. NS Reptiles, Novi Sad.',
        ogTitle: 'Oprema za terarijume i akvarijume | NS Reptiles',
        ogDescription: 'UVB rasveta, grejanje, hrana i suplementi, ziva hrana, podloge i dekoracija za terarijume i akvarijume.',
      },
      en: {
        title: 'Terrarium & Aquarium Equipment | NS Reptiles, Novi Sad',
        description: 'Reptile equipment - UVB lighting, heating, food and supplements, live feeders (dubia, feeder roaches), substrates and decoration. NS Reptiles, Novi Sad.',
        ogTitle: 'Terrarium & Aquarium Equipment | NS Reptiles',
        ogDescription: 'UVB lighting, heating, food and supplements, live feeders, substrates and decoration for terrariums and aquariums.',
      },
      ru: {
        title: 'Оборудование для террариумов и аквариумов | NS Reptiles',
        description: 'Оборудование для рептилий — UVB освещение, обогрев, корм и добавки, живой корм (дубии, фобасии), подложки и декорации. NS Reptiles, Нови-Сад.',
        ogTitle: 'Оборудование для террариумов и аквариумов | NS Reptiles',
        ogDescription: 'UVB освещение, обогрев, корм и добавки, живой корм, подложки и декорации для террариумов и аквариумов.',
      },
    },
    h1: {
      sr: 'Oprema za terarijume i akvarijume',
      en: 'Terrarium & aquarium equipment',
      ru: 'Оборудование для террариумов и аквариумов',
    },
    lead: {
      sr: 'Sve što je potrebno za pravilno držanje reptila i akvarijumskih životinja - rasveta, grejanje, ishrana, podloge i dekoracija.',
      en: 'Everything you need to keep reptiles and aquatic animals properly - lighting, heating, food, substrates and decoration.',
      ru: 'Всё необходимое для правильного содержания рептилий и аквариумных животных — освещение, обогрев, питание, подложки и декорации.',
    },
    intro: {
      sr: 'U ponudi držimo <strong>Arcadia</strong> i <strong>HabiStat</strong> opremu - UVB i spot rasvetu, grejače, suplemente i hranu za gekone i kornjače, kao i živu hranu (dubie i fobasi) uvek na stanju. Za uređenje terarijuma tu su prirodne podloge, kamen i dekoracija.',
      en: 'We stock <strong>Arcadia</strong> and <strong>HabiStat</strong> equipment - UVB and spot lighting, heaters, supplements and food for geckos and tortoises, as well as live feeders (dubia and feeder roaches) always in stock. For terrarium decoration we carry natural substrates, stone and décor.',
      ru: 'Мы предлагаем оборудование <strong>Arcadia</strong> и <strong>HabiStat</strong> — UVB и споттинговые лампы, нагреватели, добавки и корм для гекконов и черепах, а также живой корм (дубии и фобасии) всегда в наличии. Для оформления террариума — натуральные подложки, камни и декорации.',
    },
    search: { sr: 'Pretraži opremu...', en: 'Search equipment...', ru: 'Поиск оборудования...' },
    empty: {
      sr: 'Nema rezultata za tu pretragu. Probajte drugi pojam ili nas <a href="{contact}">kontaktirajte</a> - možda imamo baš to što tražite.',
      en: 'No results for that search. Try a different term or <a href="{contact}">contact us</a> - we may have exactly what you\'re looking for.',
      ru: 'По вашему запросу ничего не найдено. Попробуйте другой термин или <a href="{contact}">свяжитесь с нами</a> — возможно, у нас есть именно то, что вам нужно.',
    },
    groups: [
      { key: 'rasveta', label: { sr: 'Rasveta i grejanje', en: 'Lighting & heating', ru: 'Освещение и обогрев' } },
      { key: 'ishrana', label: { sr: 'Ishrana i suplementi', en: 'Food & supplements', ru: 'Питание и добавки' } },
      { key: 'dekoracija', label: { sr: 'Dekoracija i podloge', en: 'Decoration & substrates', ru: 'Декорации и подложки' } },
      { key: 'dodatna-oprema', label: { sr: 'Dodatna oprema', en: 'Accessories', ru: 'Дополнительное оборудование' } },
    ],
    extraPill: { href: '/hrana-za-gustere.html', label: { sr: 'Hrana za guštere', en: 'Lizard food', ru: 'Корм для ящериц' } },
    cta: {
      title: { sr: 'Pomoći ćemo vam da <b>izaberete</b>', en: "We'll help you <b>choose</b>", ru: 'Мы поможем вам <b>выбрать</b>' },
      text: {
        sr: 'Recite nam koju životinju držite - preporučićemo tačno onu opremu koja joj treba, bez suvišnih troškova.',
        en: 'Tell us which animal you keep - we\'ll recommend exactly the right equipment, without unnecessary expense.',
        ru: 'Расскажите нам, какое животное вы держите — мы порекомендуем именно то оборудование, которое ему нужно, без лишних расходов.',
      },
    },
    includes: (p) => cat(p) === 'oprema',
    groupOf: (p) => EQUIPMENT_BY_ID[slug(p)] ?? EQUIPMENT_BY_LABEL[p.data.label],
  },
} satisfies Record<string, Listing>;

export type ListingKey = keyof typeof LISTINGS;
