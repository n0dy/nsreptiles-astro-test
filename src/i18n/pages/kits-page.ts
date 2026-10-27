import type { Locale } from '../../config/site';

type L<T = string> = Record<Locale, T>;

interface Step {
  num: string;
  title: string;
  text: string;
}

// Vrednosti sa <b> se renderuju kao HTML - samo nas tekst, nikad korisnicki unos.
export const KITS_PAGE: L<{
  meta: { title: string; description: string; keywords?: string };
  schemaName: string;
  /** naziv kompleta u schema.org listi */
  kitName: (name: string) => string;
  home: string;
  crumb: string;
  crumbsLabel: string;
  h1: string;
  lead: string;
  intro: string;
  chooseTitle: string;
  allAnimals: string;
  perksTitle: string;
  perksText: string;
  perks: Step[];
  howTitle: string;
  steps: Step[];
  cta: { title: string; text: string; wa: string };
}> = {
  sr: {
    meta: {
      title: 'Prodaja Guštera | Kompleti za Početnike - NS Reptiles',
      description:
        'Prodaja guštera iz sopstvenog uzgoja - bradate agame i leopard gekoni, uz kukuruzne smukove, škorpije i tarantule. Kompleti sa terarijumom i opremom.',
    },
    schemaName: 'Kompleti za početnike - prodaja guštera i egzotičnih ljubimaca',
    kitName: (n) => `Komplet ${n}`,
    home: 'Početna',
    crumb: 'Kompleti',
    crumbsLabel: 'Putanja',
    h1: 'Prodaja guštera',
    lead: 'Bradate agame i leopard gekoni iz sopstvenog uzgoja, uz kukuruzne smukove, škorpije i tarantule — svaka životinja u kompletu sa terarijumom i opremom.',
    intro:
      'Već 10 godina se bavimo selektivnim uzgojem egzotičnih kućnih ljubimaca. Sve jedinke su zdrave, dobro hranjene i naviknute na rukovanje. Da bi start bio što jednostavniji, svaku životinju nudimo u kompletu — sa terarijumom odgovarajuće veličine i osnovnom opremom, po ceni povoljnijoj od pojedinačne kupovine.',
    chooseTitle: 'Izaberi svoj <b>komplet</b>',
    allAnimals: 'Sve životinje',
    perksTitle: 'Prodaja <b>guštera</b>',
    perksText:
      'Gušteri su najtraženiji egzotični ljubimci — pitomi, zanimljivi za posmatranje i jednostavni za negu. Bradate agame i leopard gekone odgajamo sami, pa uz svaku jedinku znate poreklo, starost i navike.',
    perks: [
      {
        num: '01',
        title: 'Zdrave i pitome jedinke',
        text: 'Iza nas je 10 godina selektivnog uzgoja. Sve životinje su dobro hranjene, redovno praćene i naviknute na rukovanje od malih nogu.',
      },
      {
        num: '02',
        title: 'Komplet umesto lutanja',
        text: 'Uz životinju dobijate terarijum odgovarajuće veličine i opremu prilagođenu baš toj vrsti — bez pogađanja šta je potrebno i kupovine na više mesta.',
      },
      {
        num: '03',
        title: 'Saveti i posle kupovine',
        text: 'Objasnimo sve o ishrani, temperaturi i nezi pre nego što ljubimac stigne kod vas — a za pitanja smo dostupni i kasnije, telefonom ili porukom.',
      },
    ],
    howTitle: 'Kako <b>funkcioniše</b>',
    steps: [
      {
        num: 'Korak 1',
        title: 'Izaberite komplet',
        text: 'Pogledajte komplete i otvorite onaj koji vas zanima — na svakoj strani je tačan sadržaj i cena.',
      },
      {
        num: 'Korak 2',
        title: 'Pošaljite upit',
        text: 'Klikom na „Pošalji upit" forma se popunjava automatski. Možete nam pisati i na WhatsApp ili Viber — odgovaramo brzo.',
      },
      {
        num: 'Korak 3',
        title: 'Preuzimanje ili slanje',
        text: 'Lično preuzimanje u Novom Sadu ili slanje po dogovoru. Životinje pakujemo bezbedno i sa iskustvom.',
      },
    ],
    cta: {
      title: 'Pitajte <b>NS Reptiles</b>',
      text: 'Recite nam koliko prostora i vremena imate, a mi ćemo predložiti ljubimca koji vam najviše odgovara. Konsultacije su besplatne.',
      wa: 'Zanimaju me kompleti za pocetnike',
    },
  },
  en: {
    meta: {
      title: 'Lizards for Sale | Reptile Starter Kits - NS Reptiles',
      description:
        'Captive-bred bearded dragons and leopard geckos for sale, plus corn snakes, scorpions and tarantulas. Starter kits with terrarium and equipment.',
      keywords:
        'lizards for sale, reptile starter kit, bearded dragon for sale, leopard gecko for sale, corn snake, tarantula, scorpion, Novi Sad',
    },
    schemaName: 'Starter kits - lizards and exotic pets for sale',
    kitName: (n) => `${n} Starter Kit`,
    home: 'Home',
    crumb: 'Starter kits',
    crumbsLabel: 'Breadcrumb',
    h1: 'Lizards for sale',
    lead: 'Captive-bred bearded dragons and leopard geckos from our own breeding, plus corn snakes, scorpions and tarantulas — every animal comes in a kit with a terrarium and equipment.',
    intro:
      'We have been selectively breeding exotic pets for 10 years. All animals are healthy, well fed and used to handling. To make your start as simple as possible, we offer every animal as a kit — with a terrarium of the right size and basic equipment, at a lower price than buying each item separately.',
    chooseTitle: 'Choose your <b>kit</b>',
    allAnimals: 'All animals',
    perksTitle: 'Lizards <b>for sale</b>',
    perksText:
      'Lizards are the most sought-after exotic pets — tame, interesting to watch and easy to care for. We breed bearded dragons and leopard geckos ourselves, so with every animal you know its origin, age and habits.',
    perks: [
      {
        num: '01',
        title: 'Healthy, tame animals',
        text: 'We have 10 years of selective breeding behind us. All animals are well fed, regularly monitored and used to handling from a young age.',
      },
      {
        num: '02',
        title: 'A kit instead of guesswork',
        text: 'With the animal you get a terrarium of the right size and equipment matched to that specific species — no guessing what you need and no shopping in several places.',
      },
      {
        num: '03',
        title: 'Advice after purchase too',
        text: 'We explain everything about feeding, temperature and care before your pet arrives — and we are available for questions later too, by phone or message.',
      },
    ],
    howTitle: 'How it <b>works</b>',
    steps: [
      {
        num: 'Step 1',
        title: 'Choose a kit',
        text: 'Browse the kits and open the one you are interested in — each page lists the exact contents and price.',
      },
      {
        num: 'Step 2',
        title: 'Send an inquiry',
        text: 'Click "Send an inquiry" and the form fills in automatically. You can also message us on WhatsApp or Viber — we reply quickly.',
      },
      {
        num: 'Step 3',
        title: 'Pickup or shipping',
        text: 'Pickup in person in Novi Sad or shipping by arrangement. We pack animals safely and with experience.',
      },
    ],
    cta: {
      title: 'Ask <b>NS Reptiles</b>',
      text: 'Tell us how much space and time you have, and we will suggest the pet that suits you best. Consultations are free.',
      wa: "I'm interested in the starter kits",
    },
  },
  ru: {
    meta: {
      title: 'Продажа ящериц — наборы для начинающих | NS Reptiles',
      description:
        'Продажа ящериц собственного разведения: бородатые агамы и леопардовые гекконы, а также маисовые полозы, скорпионы и тарантулы. Наборы с террариумом.',
      keywords:
        'продажа ящериц, купить ящерицу, наборы для начинающих, бородатая агама, леопардовый геккон, маисовый полоз, тарантул, скорпион, Нови-Сад, Сербия',
    },
    schemaName: 'Наборы для начинающих — продажа ящериц и экзотических питомцев',
    kitName: (n) => `Набор «${n}»`,
    home: 'Главная',
    crumb: 'Наборы',
    crumbsLabel: 'Навигационная цепочка',
    h1: 'Продажа ящериц',
    lead: 'Бородатые агамы и леопардовые гекконы собственного разведения, а также маисовые полозы, скорпионы и тарантулы — каждое животное в наборе с террариумом и оборудованием.',
    intro:
      'Уже 10 лет мы занимаемся селекционным разведением экзотических домашних питомцев. Все особи здоровы, хорошо накормлены и приучены к рукам. Чтобы старт был как можно проще, каждое животное мы предлагаем в наборе — с террариумом подходящего размера и базовым оборудованием, по цене выгоднее, чем при покупке по отдельности.',
    chooseTitle: 'Выберите свой <b>набор</b>',
    allAnimals: 'Все животные',
    perksTitle: 'Продажа <b>ящериц</b>',
    perksText:
      'Ящерицы — самые востребованные экзотические питомцы: ручные, интересные для наблюдения и простые в уходе. Бородатых агам и леопардовых гекконов мы разводим сами, поэтому о каждой особи вы знаете происхождение, возраст и привычки.',
    perks: [
      {
        num: '01',
        title: 'Здоровые и ручные особи',
        text: 'За нами 10 лет селекционного разведения. Все животные хорошо накормлены, находятся под регулярным наблюдением и с малых лет приучены к рукам.',
      },
      {
        num: '02',
        title: 'Готовый набор вместо поисков',
        text: 'Вместе с животным вы получаете террариум подходящего размера и оборудование, подобранное именно для этого вида, — без догадок, что нужно, и покупок в разных местах.',
      },
      {
        num: '03',
        title: 'Советы и после покупки',
        text: 'Мы расскажем всё о кормлении, температуре и уходе ещё до того, как питомец приедет к вам, — а на вопросы отвечаем и позже, по телефону или в сообщениях.',
      },
    ],
    howTitle: 'Как это <b>работает</b>',
    steps: [
      {
        num: 'Шаг 1',
        title: 'Выберите набор',
        text: 'Посмотрите наборы и откройте тот, который вас интересует, — на каждой странице указаны точный состав и цена.',
      },
      {
        num: 'Шаг 2',
        title: 'Отправьте запрос',
        text: 'При нажатии на «Отправить запрос» форма заполняется автоматически. Вы также можете написать нам в WhatsApp или Viber — мы отвечаем быстро.',
      },
      {
        num: 'Шаг 3',
        title: 'Самовывоз или доставка',
        text: 'Самовывоз в Нови-Саде или отправка по договорённости. Животных мы упаковываем надёжно и с опытом.',
      },
    ],
    cta: {
      title: 'Спросите <b>NS Reptiles</b>',
      text: 'Расскажите, сколько у вас места и времени, а мы предложим питомца, который подойдёт вам больше всего. Консультации бесплатны.',
      wa: 'Меня интересуют наборы для начинающих',
    },
  },
};
