import type { Locale } from '../../config/site';

type L<T = string> = Record<Locale, T>;

const titleCase = (s: string) => s.replace(/\b\w/g, (c) => c.toUpperCase());

// Vrednosti sa <b> se renderuju kao HTML - samo nas tekst, nikad korisnicki unos.
export const KIT_DETAIL_UI: L<{
  home: string;
  crumb: string;
  /** naziv strane kompleta u schema.org putanji */
  crumbSchema: string;
  crumbsLabel: string;
  lead: string;
  h1: (name: string) => string;
  schemaName: (name: string) => string;
  title: (name: string) => string;
  alt: (name: string) => string;
  inclTitle: string;
  inquiry: string;
  askWa: string;
  wa: (name: string) => string;
  note: string;
  perksTitle: string;
  perks: { num: string; title: string; text: string }[];
  othersTitle: string;
  allKits: string;
  cta: { title: string; text: string };
}> = {
  sr: {
    home: 'Početna',
    crumb: 'Kompleti',
    crumbSchema: 'Kompleti za početnike',
    crumbsLabel: 'Breadcrumb',
    lead: 'Životinja, terarijum i osnovna oprema — sve što je potrebno za siguran start, na jednom mestu.',
    h1: (n) => `Komplet ${n}`,
    schemaName: (n) => `Komplet ${n} za početnike`,
    title: (n) => `Komplet ${n} za Početnike | NS Reptiles`,
    alt: (n) => `${n} - komplet za početnike`,
    inclTitle: 'Šta je uključeno',
    inquiry: 'Pošalji upit',
    askWa: 'Pitaj na WhatsApp',
    wa: (n) => `Zanima me komplet ${n}`,
    note: 'Lično preuzimanje u Novom Sadu ili slanje po dogovoru. Konsultacije oko izbora i nege su besplatne — javite nam se pre kupovine.',
    perksTitle: 'Sve za <b>siguran start</b>',
    perks: [
      { num: '01', title: 'Sve na jednom mestu', text: 'Životinja, terarijum odgovarajuće veličine i osnovna oprema — bez lutanja po prodavnicama i pogađanja šta je potrebno.' },
      { num: '02', title: 'Odabrano za početnike', text: 'Vrste iz naših kompleta su mirne naravi i jednostavne za negu, a oprema je prilagođena baš njihovim potrebama.' },
      { num: '03', title: 'Stručna podrška', text: 'Iza nas je 10 godina uzgoja. Uz komplet dobijate i savete za negu, a za sva pitanja smo dostupni i posle kupovine.' },
    ],
    othersTitle: 'Ostali <b>kompleti</b>',
    allKits: 'Svi kompleti',
    cta: {
      title: 'Kontaktirajte <b>NS Reptiles</b>',
      text: 'Niste sigurni da li je ovaj komplet pravi izbor? Javite nam se — rado ćemo pomoći oko odluke.',
    },
  },
  en: {
    home: 'Home',
    crumb: 'Starter kits',
    crumbSchema: 'Starter kits',
    crumbsLabel: 'Breadcrumb',
    lead: 'The animal, a terrarium and basic equipment — everything you need for a confident start, in one place.',
    h1: (n) => `${titleCase(n)} Starter Kit`,
    schemaName: (n) => `${titleCase(n)} Starter Kit`,
    title: (n) => `${titleCase(n)} Starter Kit with Terrarium | NS Reptiles`,
    alt: (n) => `${n} - starter kit`,
    inclTitle: "What's included",
    inquiry: 'Send an inquiry',
    askWa: 'Ask on WhatsApp',
    wa: (n) => `I'm interested in the ${n} kit`,
    note: 'Pickup in person in Novi Sad or shipping by arrangement. Advice on choosing and care is free — get in touch before you buy.',
    perksTitle: 'Everything for a <b>confident start</b>',
    perks: [
      { num: '01', title: 'All in one place', text: 'The animal, a terrarium of the right size and basic equipment — no running from shop to shop or guessing what you need.' },
      { num: '02', title: 'Chosen for beginners', text: 'The species in our kits are calm-natured and easy to care for, and the equipment is matched to their specific needs.' },
      { num: '03', title: 'Expert support', text: 'We have 10 years of breeding behind us. With the kit you also get care advice, and we are available for any questions after you buy.' },
    ],
    othersTitle: 'Other <b>kits</b>',
    allKits: 'All kits',
    cta: {
      title: 'Contact <b>NS Reptiles</b>',
      text: 'Not sure if this kit is the right choice? Get in touch — we are happy to help you decide.',
    },
  },
  ru: {
    home: 'Главная',
    crumb: 'Наборы',
    crumbSchema: 'Наборы для начинающих',
    crumbsLabel: 'Навигационная цепочка',
    lead: 'Животное, террариум и базовое оборудование — всё, что нужно для уверенного старта, в одном месте.',
    h1: (n) => `Набор «${n}»`,
    schemaName: (n) => `Набор «${n}» для начинающих`,
    title: (n) => `${n} — набор для начинающих | NS Reptiles`,
    alt: (n) => `${n} — набор для начинающих`,
    inclTitle: 'Что входит в набор',
    inquiry: 'Отправить запрос',
    askWa: 'Спросить в WhatsApp',
    wa: (n) => `Меня интересует набор «${n}»`,
    note: 'Самовывоз в Нови-Саде или отправка по договорённости. Консультации по выбору и уходу бесплатны — свяжитесь с нами до покупки.',
    perksTitle: 'Всё для <b>уверенного старта</b>',
    perks: [
      { num: '01', title: 'Всё в одном месте', text: 'Животное, террариум подходящего размера и базовое оборудование — без походов по магазинам и догадок, что нужно.' },
      { num: '02', title: 'Подобрано для начинающих', text: 'Виды из наших наборов спокойного нрава и просты в уходе, а оборудование подобрано именно под их потребности.' },
      { num: '03', title: 'Экспертная поддержка', text: 'За нами 10 лет разведения. Вместе с набором вы получаете советы по уходу, а на все вопросы мы отвечаем и после покупки.' },
    ],
    othersTitle: 'Другие <b>наборы</b>',
    allKits: 'Все наборы',
    cta: {
      title: 'Свяжитесь с <b>NS Reptiles</b>',
      text: 'Не уверены, подходит ли вам этот набор? Напишите нам — мы с радостью поможем с выбором.',
    },
  },
};

export interface KitDetail {
  /** og slika, ako nije slika kompleta */
  ogImage?: string;
  /** ime u WhatsApp poruci kad se razlikuje od imena (zateceni URL se ne menja) */
  waName?: Partial<L>;
  schemaDescription: L;
  description: L;
  keywords?: Partial<L>;
  text: L;
  incl: L<string[]>;
}

// kljuc = srpski slug strane kompleta
export const KIT_DETAILS: Record<string, KitDetail> = {
  'bradata-agama': {
    schemaDescription: {
      sr: 'Komplet za početnike: bradata agama + terarijum 100×45×45 sa 3D pozadinom, UVB/UVA rasveta, pesak, vitamini i hrana. Sve na jednom mestu - NS Reptiles Novi Sad.',
      en: 'Starter kit: bearded dragon + 100×45×45 terrarium with 3D background, UVB/UVA lighting, sand, vitamins and food. All in one place - NS Reptiles Novi Sad.',
      ru: 'Набор для начинающих: бородатая агама + террариум 100×45×45 с 3D-фоном, UVB/UVA-освещение, песок, витамины и корм. Всё в одном месте — NS Reptiles, Нови-Сад.',
    },
    description: {
      sr: 'Komplet za početnike: bradata agama + terarijum 100×45×45 sa 3D pozadinom, UVB/UVA rasveta, pesak, vitamini i hrana. NS Reptiles, Novi Sad.',
      en: 'Bearded dragon starter kit: 100×45×45 terrarium with 3D background, UVB/UVA lighting, sand, vitamins and food. NS Reptiles, Novi Sad.',
      ru: 'Набор для начинающих: бородатая агама, террариум 100×45×45 с 3D-фоном, UVB/UVA-освещение, песок, витамины и корм. NS Reptiles, Нови-Сад.',
    },
    keywords: {
      en: 'bearded dragon starter kit, bearded dragon for sale, bearded dragon terrarium, reptiles Novi Sad',
      ru: 'бородатая агама купить, набор бородатая агама, террариум для бородатой агамы, продажа ящериц, Нови-Сад, Сербия',
    },
    text: {
      sr: 'Bradata agama je jedan od najpopularnijih guštera za kućno držanje — dnevna vrsta, radoznala i pitoma, koja se brzo navikne na rukovanje. Komplet sadrži sve što je potrebno za siguran start: terarijum sa 3D pozadinom, UVB/UVA rasvetu i osnovnu opremu.',
      en: 'The bearded dragon is one of the most popular pet lizards — a diurnal species, curious and tame, that quickly gets used to handling. The kit contains everything you need for a confident start: a terrarium with a 3D background, UVB/UVA lighting and basic equipment.',
      ru: 'Бородатая агама — одна из самых популярных ящериц для домашнего содержания: дневной вид, любопытная и ручная, она быстро привыкает к рукам. Набор содержит всё необходимое для уверенного старта: террариум с 3D-фоном, UVB/UVA-освещение и базовое оборудование.',
    },
    incl: {
      sr: ['Terarijum 100×45×45 sa 3D pozadinom', 'UVB/UVA rasveta', 'Pesak i vitamini', 'Hrana za mesec dana'],
      en: ['100×45×45 terrarium with 3D background', 'UVB/UVA lighting', 'Sand and vitamins', 'Food for one month'],
      ru: ['Террариум 100×45×45 с 3D-фоном', 'UVB/UVA-освещение', 'Песок и витамины', 'Корм на месяц'],
    },
  },
  'leopard-gekon': {
    schemaDescription: {
      sr: 'Komplet za početnike: leopard gekon + terarijum 50×35×35, folija grejač, skrovište, treset, posuda, hrana i vitamini. Sve na jednom mestu - NS Reptiles Novi Sad.',
      en: 'Starter kit: leopard gecko + 50×35×35 terrarium, heat mat, hide, peat, bowl, food and vitamins. All in one place - NS Reptiles Novi Sad.',
      ru: 'Набор для начинающих: леопардовый геккон + террариум 50×35×35, нагревательная плёнка, укрытие, субстрат, миска, корм и витамины. Всё в одном месте — NS Reptiles, Нови-Сад.',
    },
    description: {
      sr: 'Komplet za početnike: leopard gekon + terarijum 50×35×35, folija grejač, skrovište, treset, posuda, hrana i vitamini. NS Reptiles, Novi Sad.',
      en: 'Leopard gecko starter kit: 50×35×35 terrarium, heat mat, hide, coconut peat, water bowl, food and vitamins. NS Reptiles, Novi Sad.',
      ru: 'Набор для начинающих: леопардовый геккон, террариум 50×35×35, нагревательная плёнка, укрытие, субстрат, миска, корм и витамины. NS Reptiles, Нови-Сад.',
    },
    keywords: {
      en: 'leopard gecko starter kit, leopard gecko for sale, leopard gecko terrarium, reptiles Novi Sad',
      ru: 'леопардовый геккон купить, набор леопардовый геккон, террариум для геккона, продажа ящериц, Нови-Сад, Сербия',
    },
    text: {
      sr: 'Leopard gekon je jedna od najčešće čuvanih vrsta gekona na svetu — mirne naravi, lak za pripitomljavanje i jednostavan za negu. Idealan prvi reptil, a komplet donosi terarijum, grejanje i svu osnovnu opremu odjednom.',
      en: 'The leopard gecko is one of the most commonly kept gecko species in the world — calm-natured, easy to tame and easy to care for. An ideal first reptile, and the kit brings the terrarium, heating and all the basic equipment at once.',
      ru: 'Леопардовый геккон — один из самых распространённых в домашнем содержании видов гекконов в мире: спокойного нрава, легко приручается и прост в уходе. Идеальная первая рептилия, а набор сразу включает террариум, обогрев и всё базовое оборудование.',
    },
    incl: {
      sr: ['Terarijum 50×35×35', 'Folija grejač i skrovište', 'Kokosov treset i posuda za vodu', 'Hrana i vitamini'],
      en: ['50×35×35 terrarium', 'Heat mat and hide', 'Coconut peat and water bowl', 'Food and vitamins'],
      ru: ['Террариум 50×35×35', 'Нагревательная плёнка и укрытие', 'Кокосовый субстрат и миска для воды', 'Корм и витамины'],
    },
  },
  'kukuruzni-smuk': {
    schemaDescription: {
      sr: 'Komplet za početnike: kukuruzni smuk + terarijum 50×35×35, kokosov treset, posuda za vodu i pećina. Sve na jednom mestu - NS Reptiles Novi Sad.',
      en: 'Starter kit: corn snake + 50×35×35 terrarium, coconut peat, water bowl and cave. All in one place - NS Reptiles Novi Sad.',
      ru: 'Набор для начинающих: маисовый полоз + террариум 50×35×35, кокосовый субстрат, миска для воды и пещера. Всё в одном месте — NS Reptiles, Нови-Сад.',
    },
    description: {
      sr: 'Komplet za početnike: kukuruzni smuk + terarijum 50×35×35, kokosov treset, posuda za vodu i pećina. Sve na jednom mestu - NS Reptiles Novi Sad.',
      en: 'Corn snake starter kit: 50×35×35 terrarium, coconut peat, water bowl and a cave hide. Everything in one place - NS Reptiles, Novi Sad.',
      ru: 'Набор для начинающих: маисовый полоз, террариум 50×35×35, кокосовый субстрат, миска для воды и пещера-укрытие. Всё в одном месте. NS Reptiles, Нови-Сад.',
    },
    keywords: {
      en: 'corn snake starter kit, corn snake for sale, corn snake terrarium, snakes Novi Sad',
      ru: 'маисовый полоз купить, набор маисовый полоз, террариум для змеи, продажа змей, Нови-Сад, Сербия',
    },
    text: {
      sr: 'Kukuruzni smuk je među najpopularnijim zmijama za kućno držanje — mirne naravi i jednostavan za održavanje, pa je odličan izbor za prvi susret sa zmijama. Komplet uključuje terarijum i osnovnu opremu za udoban dom.',
      en: 'The corn snake is among the most popular pet snakes — calm-natured and easy to keep, which makes it an excellent choice for a first snake. The kit includes a terrarium and basic equipment for a comfortable home.',
      ru: 'Маисовый полоз — одна из самых популярных змей для домашнего содержания: спокойного нрава и прост в уходе, поэтому это отличный выбор для первого знакомства со змеями. Набор включает террариум и базовое оборудование для уютного дома.',
    },
    incl: {
      sr: ['Terarijum 50×35×35', 'Kokosov treset', 'Posuda za vodu', 'Pećina - skrovište'],
      en: ['50×35×35 terrarium', 'Coconut peat', 'Water bowl', 'Cave - hide'],
      ru: ['Террариум 50×35×35', 'Кокосовый субстрат', 'Миска для воды', 'Пещера-укрытие'],
    },
  },
  skorpija: {
    ogImage: '/style/img/gallery/16.jpg',
    waName: { sr: 'Skorpija' },
    schemaDescription: {
      sr: 'Komplet za početnike: škorpija Heterometrus petersii + terarijum 40×25×30 i kokosov treset. Dostupna u 3 veličine - NS Reptiles Novi Sad.',
      en: 'Starter kit: Heterometrus petersii scorpion + 40×25×30 terrarium and coconut peat. Available in 3 sizes - NS Reptiles Novi Sad.',
      ru: 'Набор для начинающих: скорпион Heterometrus petersii + террариум 40×25×30 и кокосовый субстрат. Доступен в 3 размерах — NS Reptiles, Нови-Сад.',
    },
    description: {
      sr: 'Komplet za početnike: škorpija Heterometrus petersii + terarijum 40×25×30 i kokosov treset. Dostupna u 3 veličine - NS Reptiles Novi Sad.',
      en: 'Scorpion starter kit: Heterometrus petersii with a 40×25×30 terrarium and coconut peat. Available in 3 sizes - NS Reptiles, Novi Sad.',
      ru: 'Набор для начинающих: скорпион Heterometrus petersii, террариум 40×25×30 и кокосовый субстрат. Доступен в 3 размерах. NS Reptiles, Нови-Сад.',
    },
    keywords: {
      en: 'scorpion starter kit, scorpion for sale, Heterometrus petersii, scorpion terrarium Novi Sad',
      ru: 'скорпион купить, Heterometrus petersii, набор скорпион, террариум для скорпиона, Нови-Сад, Сербия',
    },
    text: {
      sr: 'Heterometrus petersii je krupna tropska škorpija — atraktivan ljubimac za posmatranje koji zahteva minimalno održavanje. Efektna u terarijumu, dostupna u tri veličine, a komplet donosi terarijum i podlogu spremne za useljenje.',
      en: 'Heterometrus petersii is a large tropical scorpion — an attractive pet to watch that needs minimal maintenance. It looks striking in a terrarium and is available in three sizes, and the kit brings a terrarium and substrate ready to move in.',
      ru: 'Heterometrus petersii — крупный тропический скорпион, эффектный питомец для наблюдения, который требует минимального ухода. Хорошо смотрится в террариуме, доступен в трёх размерах, а набор включает террариум и субстрат, готовые к заселению.',
    },
    incl: {
      sr: ['Heterometrus petersii', 'Terarijum 40×25×30', 'Kokosov treset', 'Dostupna u 3 veličine'],
      en: ['Heterometrus petersii', '40×25×30 terrarium', 'Coconut peat', 'Available in 3 sizes'],
      ru: ['Heterometrus petersii', 'Террариум 40×25×30', 'Кокосовый субстрат', 'Доступен в 3 размерах'],
    },
  },
  tarantula: {
    ogImage: '/style/img/tarantule/brachypelma-boehmei.png',
    schemaDescription: {
      sr: 'Komplet za početnike: tarantula + terarijum 11×15×20 sa 3D pozadinom i kokosov treset. Oko 10 vrsta u ponudi - NS Reptiles Novi Sad.',
      en: 'Starter kit: tarantula + 11×15×20 terrarium with 3D background and coconut peat. About 10 species available - NS Reptiles Novi Sad.',
      ru: 'Набор для начинающих: тарантул + террариум 11×15×20 с 3D-фоном и кокосовый субстрат. В наличии около 10 видов — NS Reptiles, Нови-Сад.',
    },
    description: {
      sr: 'Komplet za početnike: tarantula + terarijum 11×15×20 sa 3D pozadinom i kokosov treset. Oko 10 vrsta u ponudi - NS Reptiles Novi Sad.',
      en: 'Tarantula starter kit: 11×15×20 terrarium with 3D background and coconut peat. About 10 tarantula species available - NS Reptiles, Novi Sad.',
      ru: 'Набор для начинающих: тарантул, террариум 11×15×20 с 3D-фоном и кокосовый субстрат. В наличии около 10 видов тарантулов. NS Reptiles, Нови-Сад.',
    },
    keywords: {
      en: 'tarantula starter kit, tarantula for sale, tarantula terrarium, spiders Novi Sad',
      ru: 'тарантул купить, набор тарантул, террариум для паука, продажа тарантулов, Нови-Сад, Сербия',
    },
    text: {
      sr: 'Idealan ulazak u svet paukova — u ponudi je oko 10 vrsta tarantula, a komplet uključuje terarijum sa 3D pozadinom i podlogu. Zauzima malo prostora, lako se održava i uvek je zanimljiva za posmatranje.',
      en: 'An ideal entry into the world of spiders — about 10 tarantula species are available, and the kit includes a terrarium with a 3D background and substrate. It takes up little space, is easy to maintain and is always interesting to watch.',
      ru: 'Идеальное начало знакомства с миром пауков — в наличии около 10 видов тарантулов, а набор включает террариум с 3D-фоном и субстрат. Он занимает мало места, прост в уходе и всегда интересен для наблюдения.',
    },
    incl: {
      sr: ['Terarijum 11×15×20 sa 3D pozadinom', 'Kokosov treset', 'Oko 10 vrsta u ponudi', 'Idealan za prvi pauk'],
      en: ['11×15×20 terrarium with 3D background', 'Coconut peat', 'About 10 species available', 'Ideal for a first spider'],
      ru: ['Террариум 11×15×20 с 3D-фоном', 'Кокосовый субстрат', 'Около 10 видов в наличии', 'Идеален для первого паука'],
    },
  },
};
