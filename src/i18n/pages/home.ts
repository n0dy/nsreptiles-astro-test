import type { Locale } from '../../config/site';

type L<T = string> = Record<Locale, T>;

// Vrednosti sa <b>/<strong> se renderuju kao HTML - samo nas tekst, nikad korisnicki unos.
export const HOME_TEXT = {
  sr: {
    meta: {
      title: 'NS Reptiles Novi Sad — egzotične životinje i terarijumi',
      description:
        'Odgajivačnica egzotičnih ljubimaca i izrada terarijuma i akvarijuma po meri u Novom Sadu. Zdrave i pitome jedinke, kvalitetna oprema i stručan savet.',
      ogDescription:
        'Odgajivačnica egzotičnih ljubimaca i izrada terarijuma po meri u Novom Sadu. Zdrave jedinke, kvalitetna oprema, stručan savet.',
    },
    hero: {
      pre: 'Odgajivačnica · Novi Sad',
      title: 'Egzotične životinje',
      text: 'NS Reptiles je <strong>odgajivačnica egzotičnih kućnih ljubimaca</strong> i radionica za <strong>izradu terarijuma i akvarijuma po meri</strong> - zdrave i pitome jedinke, kvalitetna oprema i stručan savet, sve na jednom mestu.',
      cta: 'Pogledaj komplete',
    },
    about: {
      title: 'O <b>odgajivačnici</b>',
      lead: 'Već 10 godina selektivno uzgajamo zdrave egzotične ljubimce i ručno izrađujemo terarijume i akvarijume po meri. Bradate agame, leopard gekoni, loptasti pitoni, kukuruzni smukovi - i sva oprema koja im treba.',
      stats: ['Zadovoljnih kupaca', 'Uzgojenih životinja', 'Izrađenih ter/akv'],
      more: 'Više o nama',
    },
    reptilesTitle: 'Naši <b>reptili</b>',
    bigtypo: { title: 'Najbolji <b>terarijum</b>', sub: 'u celom svetu egzotike' },
    gallery: { title: 'Galerija <b>životinja</b>', all: 'Pogledaj celu galeriju', lizard: 'Gušter', snake: 'Zmija' },
    kits: { title: 'Kompleti za <b>početnike</b>', all: 'Svi kompleti' },
    services: { title: 'Šta sve <b>radimo</b>', label: 'Usluga' },
    work: {
      title: 'Naši <b>radovi</b>',
      text: 'Pogledajte neke od terarijuma i akvarijuma koje smo izradili.',
      all: 'Pogledaj sve',
    },
    custom: { more: 'Saznaj više' },
    testi: { title: 'Šta kažu <b>kupci</b>', reviews: '364 pozitivne ocene', source: 'izvor', prev: 'Prethodna', next: 'Sledeća' },
    faqTitle: 'Sve što te <b>zanima</b>',
  },
  en: {
    meta: {
      title: 'NS Reptiles Novi Sad — Exotic Animals & Custom Terrariums',
      description:
        'Exotic pet breeding facility and custom terrarium and aquarium workshop in Novi Sad. Healthy and tame animals, quality equipment and expert advice.',
      ogDescription:
        'Exotic pet breeding facility and custom terrarium workshop in Novi Sad. Healthy animals, quality equipment, expert advice.',
    },
    hero: {
      pre: 'Breeding Facility · Novi Sad',
      title: 'Exotic Animals',
      text: 'NS Reptiles is an <strong>exotic pet breeding facility</strong> and workshop for <strong>custom terrarium and aquarium construction</strong> - healthy and tame animals, quality equipment and expert advice, all in one place.',
      cta: 'View Kits',
    },
    about: {
      title: 'About the <b>Breeding Facility</b>',
      lead: 'For over 10 years, we have been selectively breeding healthy exotic pets and handcrafting custom terrariums and aquariums. Bearded dragons, leopard geckos, ball pythons, corn snakes - and all the equipment they need.',
      stats: ['Happy Customers', 'Animals Bred', 'Terrariums/Aquariums Built'],
      more: 'More About Us',
    },
    reptilesTitle: 'Our <b>Reptiles</b>',
    bigtypo: { title: 'The Best <b>Terrarium</b>', sub: 'in the entire world of exotics' },
    gallery: { title: 'Animal <b>Gallery</b>', all: 'View Full Gallery', lizard: 'Lizard', snake: 'Snake' },
    kits: { title: 'Starter <b>Kits</b>', all: 'All Kits' },
    services: { title: 'What We <b>Do</b>', label: 'Service' },
    work: {
      title: 'Our <b>Work</b>',
      text: 'Take a look at some of the terrariums and aquariums we have built.',
      all: 'View All',
    },
    custom: { more: 'Learn More' },
    testi: { title: 'What Our <b>Customers</b> Say', reviews: '364 positive reviews', source: 'source', prev: 'Previous', next: 'Next' },
    faqTitle: 'Everything You <b>Want to Know</b>',
  },
  ru: {
    meta: {
      title: 'NS Reptiles Нови-Сад — экзотические животные и террариумы',
      description:
        'Питомник экзотических животных и изготовление террариумов и аквариумов на заказ в Нови-Саде. Здоровые ручные особи, качественное оборудование и советы.',
      ogDescription:
        'Питомник экзотических животных и изготовление террариумов на заказ в Нови Саде. Здоровые особи, качественное оборудование, профессиональные консультации.',
    },
    hero: {
      pre: 'Питомник · Нови Сад',
      title: 'Экзотические животные',
      text: 'NS Reptiles - это <strong>питомник экзотических домашних животных</strong> и мастерская по <strong>изготовлению террариумов и аквариумов на заказ</strong> - здоровые и ручные особи, качественное оборудование и профессиональные консультации, всё в одном месте.',
      cta: 'Смотреть комплекты',
    },
    about: {
      title: 'О <b>питомнике</b>',
      lead: 'Уже 10 лет мы занимаемся селективным разведением здоровых экзотических питомцев и вручную изготавливаем террариумы и аквариумы на заказ. Бородатые агамы, леопардовые гекконы, шаровидные питоны, маисовые полозы - и всё необходимое оборудование.',
      stats: ['Довольных клиентов', 'Выращенных животных', 'Изготовленных тер/акв'],
      more: 'Подробнее о нас',
    },
    reptilesTitle: 'Наши <b>рептилии</b>',
    bigtypo: { title: 'Лучший <b>террариум</b>', sub: 'во всём мире экзотики' },
    gallery: { title: 'Галерея <b>животных</b>', all: 'Смотреть всю галерею', lizard: 'Ящерица', snake: 'Змея' },
    kits: { title: 'Комплекты для <b>начинающих</b>', all: 'Все комплекты' },
    services: { title: 'Что мы <b>делаем</b>', label: 'Услуга' },
    work: {
      title: 'Наши <b>работы</b>',
      text: 'Посмотрите некоторые террариумы и аквариумы, которые мы изготовили.',
      all: 'Смотреть все',
    },
    custom: { more: 'Узнать больше' },
    testi: { title: 'Что говорят <b>клиенты</b>', reviews: '364 положительных оценки', source: 'источник', prev: 'Предыдущий', next: 'Следующий' },
    faqTitle: 'Всё, что вас <b>интересует</b>',
  },
} satisfies L<unknown>;

const SPECIES = {
  bradata: { sr: 'Bradata agama', en: 'Bearded Dragon', ru: 'Бородатая агама' },
  piton: { sr: 'Loptasti piton', en: 'Ball Python', ru: 'Шаровидный питон' },
  leopard: { sr: 'Leopard gekon', en: 'Leopard Gecko', ru: 'Леопардовый геккон' },
  smuk: { sr: 'Kukuruzni smuk', en: 'Corn Snake', ru: 'Маисовый полоз' },
  vodena: { sr: 'Vodena agama', en: 'Water Dragon', ru: 'Водяная агама' },
} satisfies Record<string, L>;

export const REPTILES: { img: string; name: L }[] = [
  { img: '/style/img/gallery/2.jpg', name: SPECIES.bradata },
  { img: '/style/img/gallery/1.jpg', name: SPECIES.piton },
  { img: '/style/img/gallery/3.jpg', name: SPECIES.leopard },
  { img: '/style/img/gallery/9.jpg', name: SPECIES.smuk },
  { img: '/style/img/gallery/13.jpg', name: SPECIES.vodena },
  { img: '/style/img/gallery/7.jpg', name: { sr: 'Piton', en: 'Python', ru: 'Питон' } },
  { img: '/style/img/gallery/10.jpg', name: { sr: 'Gekon', en: 'Gecko', ru: 'Геккон' } },
];

export const GALLERY: { img: string; cat: 'guster' | 'zmija'; size?: 'tall' | 'big' | 'wide'; name: L }[] = [
  { img: '/style/img/gallery/2.jpg', cat: 'guster', size: 'tall', name: SPECIES.bradata },
  { img: '/style/img/gallery/14.jpg', cat: 'guster', name: SPECIES.leopard },
  { img: '/style/img/gallery/13.jpg', cat: 'guster', size: 'big', name: SPECIES.vodena },
  { img: '/style/img/gallery/3.jpg', cat: 'guster', name: SPECIES.leopard },
  { img: '/style/img/gallery/1.jpg', cat: 'zmija', name: SPECIES.piton },
  { img: '/style/img/gallery/9.jpg', cat: 'zmija', size: 'wide', name: SPECIES.smuk },
  { img: '/style/img/gallery/7.jpg', cat: 'zmija', size: 'tall', name: SPECIES.piton },
  { img: '/style/img/gallery/6.jpg', cat: 'guster', name: SPECIES.bradata },
  { img: '/style/img/gallery/10.jpg', cat: 'guster', name: SPECIES.leopard },
  { img: '/style/img/gallery/8.jpg', cat: 'guster', name: SPECIES.bradata },
];

export const SERVICES: { img: string; title: L; text: L }[] = [
  {
    img: '/style/img/gallery/2.jpg',
    title: { sr: 'Odgajivačnica', en: 'Breeding Facility', ru: 'Питомник' },
    text: {
      sr: 'Selektivan uzgoj više vrsta egzotičnih kućnih ljubimaca - bradate agame, leopard gekoni, loptasti pitoni i kukuruzni smukovi. Zdrave i pitome jedinke.',
      en: 'Selective breeding of multiple exotic pet species - bearded dragons, leopard geckos, ball pythons and corn snakes. Healthy and tame animals.',
      ru: 'Селективное разведение нескольких видов экзотических домашних животных - бородатые агамы, леопардовые гекконы, шаровидные питоны и маисовые полозы. Здоровые и ручные особи.',
    },
  },
  {
    img: '/style/img/gallery/11.jpg',
    title: { sr: 'Terarijumi', en: 'Terrariums', ru: 'Террариумы' },
    text: {
      sr: 'Izrađujemo terarijume od stakla i iverice po meri i želji, sa ugrađenom UVB/UVA rasvetom. Pored toga u ponudi imamo preko 70 različitih modela.',
      en: 'We build glass and chipboard terrariums to custom specifications, with built-in UVB/UVA lighting. We also offer over 70 different models in stock.',
      ru: 'Изготавливаем террариумы из стекла и ДСП на заказ по вашим размерам, со встроенным UVB/UVA освещением. Кроме того, в ассортименте более 70 различных моделей.',
    },
  },
  {
    img: '/style/img/gallery/4.jpg',
    title: { sr: 'Akvarijumi', en: 'Aquariums', ru: 'Аквариумы' },
    text: {
      sr: 'Akvarijumi svih dimenzija po meri - za ribice, kornjače ili biljni akvarijum. LED rasveta sa dnevnim/noćnim režimom i kompletnom opremom.',
      en: 'Aquariums of all dimensions made to order - for fish, turtles or planted aquariums. LED lighting with day/night mode and complete equipment.',
      ru: 'Аквариумы любых размеров на заказ - для рыбок, черепах или растительный аквариум. LED-освещение с дневным/ночным режимом и полным комплектом оборудования.',
    },
  },
  {
    img: '/style/img/gallery/8.jpg',
    title: { sr: '3D pozadine', en: '3D Backgrounds', ru: '3D фоны' },
    text: {
      sr: 'Izrađujemo od najkvalitetnijih materijala - prirodni siga kamen, imitacija stene, kombinacija treseta i kore od drveta, ili 3D logo vašeg brenda/firme.',
      en: 'We craft from the highest quality materials - natural travertine stone, rock imitation, combination of peat and bark, or a 3D logo of your brand/company.',
      ru: 'Изготавливаем из высококачественных материалов - натуральный известняк, имитация скалы, комбинация торфа и коры дерева, или 3D-логотип вашего бренда/компании.',
    },
  },
  {
    img: '/style/img/gallery/12.jpg',
    title: { sr: 'Oprema', en: 'Equipment', ru: 'Оборудование' },
    text: {
      sr: 'U širokoj ponudi može se naći sve za vaše reptile - UVA i UVB rasveta različitih jačina, biljne dekoracije, skrovišta, posudice za vodu/hranu i sredstva za održavanje.',
      en: 'Our wide range includes everything for your reptiles - UVA and UVB lighting of various strengths, plant decorations, hideouts, water/food dishes and maintenance supplies.',
      ru: 'В широком ассортименте можно найти всё для ваших рептилий - UVA и UVB лампы различной мощности, растительные декорации, укрытия, ёмкости для воды/корма и средства для ухода.',
    },
  },
];

/** id proizvoda iz content/products ("kategorija/slug") */
export const WORK_PRODUCTS = [
  'terarijumi/terarijum-120x40x50-3d',
  'akvarijumi/akvarijum-120x40x40',
  'terarijumi/terarijum-100x45x45-lakobel',
  'terarijumi/terarijum-80x50x80-akvarijum',
  'akvarijumi/akvarijum-36x28x35',
];

interface CustomBlock {
  img: string;
  imgFirst: boolean;
  href: string;
  links: { href: string; label: L }[];
  imgAlt: L;
  title: L;
  text: L;
  feats: L<string[]>;
}

const MAINTENANCE = { href: '/odrzavanje-akvarijuma-terarijuma.html', label: { sr: 'Održavanje', en: 'Maintenance', ru: 'Обслуживание' } };
const REPAIR = { href: '/popravka-akvarijuma-terarijuma.html', label: { sr: 'Popravka', en: 'Repair', ru: 'Ремонт' } };

export const CUSTOM: CustomBlock[] = [
  {
    img: '/style/img/terrariums/120x40x50.webp',
    imgFirst: true,
    href: '/izrada-terarijuma.html',
    links: [
      { href: '/terarijumi.html', label: { sr: 'Gotovi terarijumi', en: 'Ready-made Terrariums', ru: 'Готовые террариумы' } },
      MAINTENANCE,
      { href: '/izrada-led-rasvete.html', label: { sr: 'LED rasveta', en: 'LED Lighting', ru: 'LED освещение' } },
      REPAIR,
    ],
    imgAlt: { sr: 'Terarijum po meri', en: 'Custom terrarium', ru: 'Террариум на заказ' },
    title: {
      sr: 'Izrada terarijuma <b>po meri</b>',
      en: 'Custom <b>Terrarium</b> Building',
      ru: 'Изготовление террариумов <b>на заказ</b>',
    },
    text: {
      sr: 'Svaki terarijum izrađujemo ručno, po vašim merama i željama. Koristimo kvalitetne materijale i nudimo kompletnu uslugu - od konsultacija do gotovog proizvoda sa opremom.',
      en: 'Every terrarium is handcrafted to your measurements and preferences. We use quality materials and offer a complete service - from consultation to the finished product with equipment.',
      ru: 'Каждый террариум мы изготавливаем вручную, по вашим размерам и пожеланиям. Используем качественные материалы и предлагаем полный комплекс услуг - от консультаций до готового изделия с оборудованием.',
    },
    feats: {
      sr: [
        'Preko 100 dezena folija',
        'Ugrađena UVB i UVA rasveta sa prekidačima',
        '3D pozadine od siga kamena, stiropora ili treseta',
        'Dupli poklopac sa ventilacijom',
        'Klizna vrata sa bravicom',
        'Izrada od stakla ili iverice',
      ],
      en: [
        'Over 100 foil patterns',
        'Built-in UVB and UVA lighting with switches',
        '3D backgrounds from travertine stone, styrofoam or peat',
        'Double lid with ventilation',
        'Sliding doors with lock',
        'Built from glass or chipboard',
      ],
      ru: [
        'Более 100 видов декоративных плёнок',
        'Встроенное UVB и UVA освещение с выключателями',
        '3D фоны из известняка, пенопласта или торфа',
        'Двойная крышка с вентиляцией',
        'Раздвижные двери с замком',
        'Изготовление из стекла или ДСП',
      ],
    },
  },
  {
    img: '/style/img/aquariums/a120x40x40.webp',
    imgFirst: false,
    href: '/izrada-akvarijuma.html',
    links: [
      { href: '/akvarijumi.html', label: { sr: 'Gotovi akvarijumi', en: 'Ready-made Aquariums', ru: 'Готовые аквариумы' } },
      { href: '/akvarijumi-za-pocetnike.html', label: { sr: 'Za početnike', en: 'For Beginners', ru: 'Для начинающих' } },
      MAINTENANCE,
      REPAIR,
    ],
    imgAlt: { sr: 'Akvarijum po meri', en: 'Custom aquarium', ru: 'Аквариум на заказ' },
    title: {
      sr: 'Izrada akvarijuma <b>po meri</b>',
      en: 'Custom <b>Aquarium</b> Building',
      ru: 'Изготовление аквариумов <b>на заказ</b>',
    },
    text: {
      sr: 'Akvarijume izrađujemo od kvalitetnog stakla, po vašim dimenzijama i potrebama. Bilo da vam treba akvarijum za ribice, kornjače ili biljni akvarijum - mi smo tu da ga napravimo.',
      en: 'We build aquariums from quality glass, to your dimensions and needs. Whether you need an aquarium for fish, turtles or a planted aquarium - we are here to make it.',
      ru: 'Аквариумы изготавливаем из качественного стекла, по вашим размерам и потребностям. Будь то аквариум для рыбок, черепах или растительный аквариум - мы изготовим его для вас.',
    },
    feats: {
      sr: [
        'Akvarijumi svih dimenzija po meri',
        'LED rasveta sa dnevnim i noćnim režimom',
        'Mogućnost daljinskog upravljanja rasvetom',
        '3D pozadine i dekoracije',
        'Kompletna oprema - filteri, pumpe, grejači',
        'Akvarijumi za početnike sa svom opremom',
      ],
      en: [
        'Aquariums of all dimensions made to order',
        'LED lighting with day and night mode',
        'Remote control lighting option',
        '3D backgrounds and decorations',
        'Complete equipment - filters, pumps, heaters',
        'Beginner aquariums with all equipment',
      ],
      ru: [
        'Аквариумы любых размеров на заказ',
        'LED-освещение с дневным и ночным режимом',
        'Возможность дистанционного управления освещением',
        '3D фоны и декорации',
        'Полное оборудование - фильтры, помпы, обогреватели',
        'Аквариумы для начинающих со всем оборудованием',
      ],
    },
  },
];

export const TESTIMONIALS: { author: string; item: L; text: L }[] = [
  {
    author: 'F.',
    item: { sr: 'Akvarijum 25×19×20', en: 'Aquarium 25×19×20', ru: 'Аквариум 25×19×20' },
    text: {
      sr: 'Sve ispoštovano po dogovoru, moja preporuka za Borisa - profesionalan u svom poslu, brz i lak dogovor. Čista desetka.',
      en: 'Everything was done as agreed, my recommendation for Boris - professional at his work, fast and easy arrangement. A solid ten.',
      ru: 'Всё выполнено по договорённости, рекомендую Бориса - профессионал своего дела, быстрый и лёгкий договор. Чистая десятка.',
    },
  },
  {
    author: 'S.M.',
    item: { sr: 'Terarijum 65×35×30', en: 'Terrarium 65×35×30', ru: 'Террариум 65×35×30' },
    text: {
      sr: 'Terarijum prelep i prezadovoljna sam. Ulepšao mi dan. Hvala puno!',
      en: 'The terrarium is beautiful and I am very satisfied. It made my day. Thank you so much!',
      ru: 'Террариум прекрасный, я очень довольна. Поднял мне настроение. Большое спасибо!',
    },
  },
  {
    author: 'I.',
    item: { sr: 'Spot sijalica', en: 'Spot bulb', ru: 'Спот-лампа' },
    text: {
      sr: 'Odlična saradnja! Od spot sijalice do kompletne opreme za našu kornjaču zahvaljujući Borisu! Za svaku preporuku za terarijume i prateću opremu.',
      en: 'Excellent cooperation! From a spot bulb to complete equipment for our turtle, all thanks to Boris! Highly recommended for terrariums and related equipment.',
      ru: 'Отличное сотрудничество! От спот-лампы до полного комплекта оборудования для нашей черепахи благодаря Борису! Рекомендую для террариумов и сопутствующего оборудования.',
    },
  },
  {
    author: 'LJ.',
    item: { sr: 'Terarijum 30×30×40', en: 'Terrarium 30×30×40', ru: 'Террариум 30×30×40' },
    text: {
      sr: 'Sve je stiglo kao po dogovoru. Jako prijatan i ljubazan prodavac, detaljno mi je objasnio kako da se brinem o tarantuli.',
      en: 'Everything arrived as agreed. Very pleasant and kind seller, he explained in detail how to take care of the tarantula.',
      ru: 'Всё пришло как договаривались. Очень приятный и вежливый продавец, подробно объяснил, как ухаживать за тарантулом.',
    },
  },
  {
    author: 'A.G.',
    item: {
      sr: 'Leopard gekon Blizzard Eclipse',
      en: 'Leopard Gecko Blizzard Eclipse',
      ru: 'Леопардовый геккон Blizzard Eclipse',
    },
    text: {
      sr: 'Maksimalna preporuka za Borisa. Sjajna saradnja, brz dogovor - stvarno svaka preporuka.',
      en: 'Maximum recommendation for Boris. Great cooperation, fast arrangement - truly every recommendation.',
      ru: 'Максимальная рекомендация Борису. Отличное сотрудничество, быстрый договор - действительно рекомендую.',
    },
  },
  {
    author: 'M.',
    item: {
      sr: 'Terarijum za leopard gekona 50×35×35',
      en: 'Leopard Gecko Terrarium 50×35×35',
      ru: 'Террариум для леопардового геккона 50×35×35',
    },
    text: {
      sr: 'Naručili smo terarijum, bio je gotov u rekordnom vremenu. Prezadovoljni smo uslugom, 10/10.',
      en: 'We ordered a terrarium and it was ready in record time. We are very satisfied with the service, 10/10.',
      ru: 'Заказали террариум, он был готов в рекордные сроки. Мы очень довольны обслуживанием, 10/10.',
    },
  },
  {
    author: 'I.J.',
    item: { sr: 'Akvarijum 40×30×40', en: 'Aquarium 40×30×40', ru: 'Аквариум 40×30×40' },
    text: {
      sr: 'Brz dogovor i realizacija. Veoma profesionalan i korektan. Kvalitet vrhunski, izrada savršena, spreman da objasni sve do detalja i preporuči ono što je najbolje. Topla preporuka.',
      en: 'Fast arrangement and delivery. Very professional and fair. Top quality, perfect craftsmanship, willing to explain everything in detail and recommend the best option. Warm recommendation.',
      ru: 'Быстрый договор и реализация. Очень профессиональный и корректный. Высочайшее качество, безупречное изготовление, готов объяснить всё до мельчайших деталей и порекомендовать лучшее. Горячая рекомендация.',
    },
  },
  {
    author: 'P.G.',
    item: { sr: 'Akvarijum 35×25×50', en: 'Aquarium 35×25×50', ru: 'Аквариум 35×25×50' },
    text: {
      sr: 'Odlično urađen akvarijum! Profi upakovan! Sve po dogovoru ispoštovano. Preporuka!',
      en: 'Excellent aquarium! Professionally packaged! Everything as agreed. Recommended!',
      ru: 'Отлично сделанный аквариум! Профессионально упакован! Всё по договорённости. Рекомендую!',
    },
  },
  {
    author: 'S.A.',
    item: { sr: 'Akvarijum 40×25×27 - komplet', en: 'Aquarium 40×25×27 - complete kit', ru: 'Аквариум 40×25×27 — комплект' },
    text: {
      sr: 'Boris je bio jako ljubazan, izašao u susret i prilagodio akvarijum tako da bude terarijum za bebu kornjaču - dodao platformu. Komunikacija brza i laka, dogovor maksimalno ispoštovan.',
      en: 'Boris was very kind, accommodating and adapted the aquarium to serve as a terrarium for a baby turtle - he added a platform. Communication was fast and easy, agreement fully honored.',
      ru: 'Борис был очень любезен, пошёл навстречу и адаптировал аквариум в террариум для маленькой черепахи - добавил платформу. Общение быстрое и лёгкое, договор полностью соблюдён.',
    },
  },
];

export const FAQ: { q: L; a: L }[] = [
  {
    q: {
      sr: 'Da li šaljete van Novog Sada?',
      en: 'Do you ship outside of Novi Sad?',
      ru: 'Доставляете ли вы за пределы Нови Сада?',
    },
    a: {
      sr: 'Da. Moguće je lično preuzimanje u Novom Sadu, a slanje organizujemo po dogovoru kurirskom službom (troškove slanja snosi kupac). Životinje pakujemo bezbedno i sa iskustvom.',
      en: 'Yes. Personal pickup is available in Novi Sad, and we organize shipping by arrangement via courier service (shipping costs are covered by the buyer). We pack animals safely and with experience.',
      ru: 'Да. Возможен самовывоз в Нови Саде, а отправку организуем по договорённости курьерской службой (расходы на доставку несёт покупатель). Животных упаковываем безопасно и с опытом.',
    },
  },
  {
    q: {
      sr: 'Koliko traje izrada terarijuma po meri?',
      en: 'How long does it take to build a custom terrarium?',
      ru: 'Сколько времени занимает изготовление террариума на заказ?',
    },
    a: {
      sr: 'Zavisi od dimenzija i opreme, ali većinu terarijuma izrađujemo u roku od nekoliko dana do dve nedelje. Tačan rok dogovaramo prilikom narudžbine.',
      en: 'It depends on dimensions and equipment, but we build most terrariums within a few days to two weeks. The exact timeframe is agreed upon when ordering.',
      ru: 'Зависит от размеров и оборудования, но большинство террариумов мы изготавливаем в течение нескольких дней до двух недель. Точный срок согласовываем при заказе.',
    },
  },
  {
    q: {
      sr: 'Šta tačno uključuje komplet?',
      en: 'What exactly is included in a kit?',
      ru: 'Что именно включает комплект?',
    },
    a: {
      sr: 'Svaki komplet sadrži životinju, terarijum odgovarajuće veličine i osnovnu opremu (podloga, rasveta ili grejač, skrovišta - zavisno od vrste). Tačan sadržaj je naveden na svakoj kartici kompleta.',
      en: 'Each kit includes the animal, an appropriately sized terrarium and basic equipment (substrate, lighting or heater, hideouts - depending on the species). The exact contents are listed on each kit card.',
      ru: 'Каждый комплект содержит животное, террариум подходящего размера и базовое оборудование (подстилка, освещение или обогреватель, укрытия - в зависимости от вида). Точный состав указан на каждой карточке комплекта.',
    },
  },
  {
    q: {
      sr: 'Kako da izaberem pravi terarijum za svog ljubimca?',
      en: 'How do I choose the right terrarium for my pet?',
      ru: 'Как выбрать подходящий террариум для своего питомца?',
    },
    a: {
      sr: 'Rado pomažemo oko izbora - javite nam koju životinju imate ili planirate, a mi predlažemo odgovarajuću veličinu, rasvetu i opremu. Konsultacije su besplatne.',
      en: 'We are happy to help with your choice - let us know what animal you have or plan to get, and we will recommend the appropriate size, lighting and equipment. Consultations are free.',
      ru: 'Мы с удовольствием поможем с выбором - сообщите нам, какое у вас животное или какое планируете, и мы предложим подходящий размер, освещение и оборудование. Консультации бесплатные.',
    },
  },
  {
    q: {
      sr: 'Da li su životinje zdrave i odgajene kod vas?',
      en: 'Are the animals healthy and bred by you?',
      ru: 'Здоровы ли животные и выращены ли они у вас?',
    },
    a: {
      sr: 'Da. Bavimo se selektivnim uzgojem više vrsta već 10 godina. Sve jedinke su zdrave, dobro hranjene i naviknute na rukovanje.',
      en: 'Yes. We have been selectively breeding multiple species for over 10 years. All animals are healthy, well-fed and accustomed to handling.',
      ru: 'Да. Мы занимаемся селективным разведением нескольких видов уже 10 лет. Все особи здоровы, хорошо откормлены и приучены к рукам.',
    },
  },
];

export const INSTA_IMAGES = [8, 12, 14, 6, 5, 10].map((n) => `/style/img/gallery/${n}.jpg`);
