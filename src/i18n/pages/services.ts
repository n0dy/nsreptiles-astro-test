import type { Locale } from '../../config/site';
import type { SeoProps } from '../../components/SeoHead.astro';

type L<T = string> = Record<Locale, T>;

// Vrednosti sa <b>/<strong> se renderuju kao HTML - samo nas tekst, nikad korisnicki unos.
export const SERVICE_UI = {
  sr: { areaServed: 'Srbija', moreTitle: 'Sve na <b>jednom mestu</b>' },
  en: { areaServed: 'Serbia', moreTitle: 'Everything in <b>one place</b>' },
  ru: { areaServed: 'Сербия', moreTitle: 'Всё в <b>одном месте</b>' },
} satisfies L<unknown>;

export interface Service {
  /** srpska putanja strane */
  path: string;
  /** proc = numerisani koraci izrade, feat = kartice usluga */
  layout: 'proc' | 'feat';
  meta: L<Pick<SeoProps, 'title' | 'description' | 'ogTitle' | 'ogDescription' | 'image'>>;
  /** locality = addressLocality kad nije 'Novi Sad' */
  schema: L<{ name: string; serviceType: string; description: string; locality?: string }>;
  h1: L;
  lead: L;
  intro: L;
  items: { title: L; text: L }[];
  cta: L<{ title: string; text: string; call: string }>;
  /** linkovi ka stranama po zivotinji - postoje samo na srpskom */
  animals?: Partial<L<{ title: string; links: { href: string; label: string }[] }>>;
  /** naslov liste ostalih usluga kad odstupa od SERVICE_UI.moreTitle */
  moreTitle?: Partial<L>;
  /** ostale usluge (srpske putanje); nazivi se razlikuju od strane do strane */
  more: { href: string; label: L }[];
}

export const SERVICES = {
  terarijumi: {
    path: '/izrada-terarijuma.html',
    layout: 'proc',
    meta: {
      sr: {
        title: 'Izrada terarijuma po meri, Novi Sad | NS Reptiles',
        description: 'Izrada terarijuma po meri u Novom Sadu: stakleni terarijumi za agame, gekone i pitone, 40+ dezena folija, 3D pozadine i UVB rasveta. Rok 7 radnih dana.',
        ogTitle: 'Izrada terarijuma po meri | NS Reptiles',
        ogDescription: 'Ručno rađeni stakleni terarijumi po vašim merama — folije, 3D pozadine, rasveta i oprema. Novi Sad.',
        image: '/style/img/logo.jpg',
      },
      en: {
        title: 'Custom Glass Terrarium Builds in Novi Sad | NS Reptiles',
        description: 'Custom glass terrariums in Novi Sad for bearded dragons, geckos and pythons — 40+ film finishes, 3D backgrounds and UVB lighting. Ready in 7 working days.',
        ogTitle: 'Custom Terrarium Builds | NS Reptiles',
        ogDescription: 'Handcrafted glass terrariums built to your exact dimensions — decorative films, 3D backgrounds, lighting and full equipment. Novi Sad.',
      },
      ru: {
        title: 'Террариумы на заказ в Нови-Саде | NS Reptiles',
        description: 'Террариумы на заказ в Нови-Саде: стеклянные террариумы для агам, гекконов и питонов, более 40 видов плёнок, 3D-фоны и UVB-освещение. Срок — 7 рабочих дней.',
        ogTitle: 'Террариумы на заказ | NS Reptiles',
        ogDescription: 'Ручная работа — стеклянные террариумы по вашим размерам: плёнки, 3D-фоны, освещение и оборудование. Нови-Сад.',
      },
    },
    schema: {
      sr: {
        name: 'Izrada terarijuma po meri',
        serviceType: 'Izrada terarijuma po meri',
        description: 'Izrada terarijuma po meri u Novom Sadu. Stakleni terarijumi za agame, gekone i pitone, preko 40 dezena folija, 3D pozadine i UVB rasveta. Rok izrade 7 radnih dana.',
      },
      en: {
        name: 'Custom Terrarium Builds',
        serviceType: 'Custom Terrarium Manufacturing',
        description: 'Custom-built glass terrariums in Novi Sad. Handcrafted terrariums for bearded dragons, geckos and pythons — 40+ film finishes, 3D backgrounds and UVB lighting. Ready in 7 working days.',
      },
      ru: {
        name: 'Изготовление террариумов на заказ',
        serviceType: 'Изготовление террариумов на заказ',
        description: 'Изготовление террариумов на заказ в Нови-Саде. Стеклянные террариумы для агам, гекконов и питонов, более 40 видов плёнок, 3D-фоны и UVB-освещение. Срок изготовления 7 рабочих дней.',
      },
    },
    h1: {
      sr: 'Izrada terarijuma po meri',
      en: 'Custom Terrarium Builds',
      ru: 'Террариумы на заказ',
    },
    lead: {
      sr: 'Svaki terarijum izrađujemo ručno od stakla, po vašim merama i željama — sa folijom po izboru, 3D pozadinom i kompletnom opremom.',
      en: 'Every terrarium is handcrafted from glass, built to your exact dimensions and preferences — with the decorative film of your choice, a 3D background, and full equipment included.',
      ru: 'Каждый террариум мы изготавливаем вручную из стекла, по вашим размерам и пожеланиям — с выбранной плёнкой, 3D-фоном и полным комплектом оборудования.',
    },
    intro: {
      sr: 'Od prvog kontakta do preuzimanja vodimo vas kroz nekoliko jednostavnih koraka. Ne znate koja je optimalna veličina za vašeg ljubimca? <strong>Rado ćemo vam pomoći</strong> da napravite pravi izbor.',
      en: 'From your first inquiry to pick-up, we walk you through a few straightforward steps. Not sure what size is right for your animal? <strong>We\'re happy to help</strong> you make the right call.',
      ru: 'От первого контакта до получения заказа мы проведём вас через несколько простых шагов. Не знаете, какой оптимальный размер подойдёт вашему питомцу? <strong>Мы с радостью поможем</strong> вам сделать правильный выбор.',
    },
    items: [
      {
        title: {
          sr: 'Kontaktirajte nas',
          en: 'Get in touch',
          ru: 'Свяжитесь с нами',
        },
        text: {
          sr: 'Javite nam se telefonom, mejlom ili putem društvenih mreža i recite nam koje dimenzije terarijuma želite. Ukoliko niste sigurni koja je optimalna veličina za vašeg ljubimca, rado ćemo vam pomoći da napravite pravi izbor.',
          en: 'Reach us by phone, email or social media and tell us what dimensions you have in mind. If you\'re not sure what size suits your pet best, we\'ll gladly help you figure it out.',
          ru: 'Напишите нам по телефону, электронной почте или через социальные сети и сообщите, какие размеры террариума вас интересуют. Если вы не уверены, какой оптимальный размер подходит вашему питомцу, мы с удовольствием поможем вам сделать правильный выбор.',
        },
      },
      {
        title: {
          sr: 'Odaberite boju terarijuma',
          en: 'Choose your finish',
          ru: 'Выберите цвет террариума',
        },
        text: {
          sr: 'U ponudi je preko 40 različitih dezena folija tako da možete lako uklopiti terarijum sa ostatkom enterijera. Takođe, postoji mogućnost da terarijum bude obložen crnim lakobelom umesto folije.',
          en: 'With over 40 decorative film options available, you can easily match the terrarium to the rest of your interior. There\'s also the option of finishing the terrarium in black lacquer board instead of film.',
          ru: 'В ассортименте более 40 различных видов плёнок, так что вы легко сможете вписать террариум в интерьер вашего дома. Также возможно отделать террариум чёрным лакобелем вместо плёнки.',
        },
      },
      {
        title: {
          sr: 'Izaberite 3D pozadinu',
          en: 'Pick a 3D background',
          ru: 'Выберите 3D-фон',
        },
        text: {
          sr: 'Klasična folija sa slikom, fabrički model, 3D pozadina od stiropora, 3D pozadina od prirodnog siga kamena, ili pak bez pozadine — bira se po ukusu i želji kupca. Dodatno, mogu se uključiti i penjačke grane, skrovišta i ostali elementi.',
          en: 'A printed picture film, a factory panel, a 3D polystyrene background, a 3D natural rock stone background, or no background at all — the choice is entirely yours. Climbing branches, hides and other décor elements can be added as well.',
          ru: 'Классическая плёнка с рисунком, заводская модель, 3D-фон из пенопласта, 3D-фон из натурального камня-травертина или вообще без фона — выбор зависит от вкуса и желания покупателя. Дополнительно можно добавить ветки для лазания, укрытия и другие элементы декора.',
        },
      },
      {
        title: {
          sr: 'Rasveta i oprema',
          en: 'Lighting and equipment',
          ru: 'Освещение и оборудование',
        },
        text: {
          sr: 'Za zdrav život vašeg ljubimca najbitnije je pravilno podešena rasveta i temperatura. Pomoći ćemo vam da odaberete odgovarajuću UVB/UVA rasvetu, grejače, termostate, substrat i dekoracije. Sve to uračunato u jednu cenu.',
          en: 'Proper lighting and temperature are essential for your pet\'s wellbeing. We\'ll help you choose the right UVB/UVA lighting, heaters, thermostats, substrate and decorations — all included in one price.',
          ru: 'Для здоровой жизни вашего питомца важнее всего правильно настроенное освещение и температура. Мы поможем вам выбрать подходящее UVB/UVA освещение, нагреватели, термостаты, субстрат и декорации. Всё включено в одну цену.',
        },
      },
      {
        title: {
          sr: 'Kapara 30%',
          en: '30% deposit',
          ru: 'Задаток 30%',
        },
        text: {
          sr: 'Minimalni iznos kapare za početak izrade terarijuma je 30% od ukupne cene. Ostatak iznosa se plaća po završetku izrade, prilikom preuzimanja terarijuma.',
          en: 'A minimum deposit of 30% of the total price is required to start production. The remainder is due upon completion, when you collect the terrarium.',
          ru: 'Минимальная сумма задатка для начала изготовления террариума составляет 30% от общей стоимости. Остаток оплачивается после завершения изготовления, при получении террариума.',
        },
      },
      {
        title: {
          sr: 'Izrada — 7 radnih dana',
          en: 'Build time — 7 working days',
          ru: 'Срок изготовления — 7 рабочих дней',
        },
        text: {
          sr: 'Uobičajeni rok izrade terarijuma je 7 radnih dana. Za zahtevnije i veće projekte kao što su terarijumi za veliku vodenu agamu ili iguanu, rok izrade može biti i duži.',
          en: 'Standard production time is 7 working days. For more complex or larger builds, such as terrariums for a large water dragon or iguana, the lead time may be longer.',
          ru: 'Стандартный срок изготовления террариума — 7 рабочих дней. Для более сложных и крупных проектов, таких как террариумы для большой водной агамы или игуаны, срок может быть увеличен.',
        },
      },
      {
        title: {
          sr: 'Preuzimanje terarijuma',
          en: 'Collection',
          ru: 'Получение террариума',
        },
        text: {
          sr: 'Terarijum možete preuzeti lično u Novom Sadu, ili ga možemo poslati autobusom do vašeg grada. Troškove slanja snosi kupac. Za veće terarijume možemo organizovati i dostavu kombijem.',
          en: 'You can collect the terrarium in person in Novi Sad, or we can ship it by bus to your city — shipping costs are covered by the buyer. For larger terrariums, delivery by van can also be arranged.',
          ru: 'Террариум можно забрать лично в Нови-Саде, или мы можем отправить его автобусом в ваш город. Расходы на доставку несёт покупатель. Для крупных террариумов можно организовать доставку микроавтобусом.',
        },
      },
    ],
    cta: {
      sr: {
        title: 'Vaš terarijum <b>po meri</b>',
        text: 'Pošaljite nam dimenzije i vrstu životinje — izradićemo terarijum tačno po vašim potrebama, sa 3D pozadinom po želji.',
        call: 'Pozovi nas',
      },
      en: {
        title: 'Your terrarium, <b>built to order</b>',
        text: 'Send us your dimensions and the type of animal — we\'ll build a terrarium tailored to your exact needs, with the 3D background of your choice.',
        call: 'Call us',
      },
      ru: {
        title: 'Ваш террариум <b>на заказ</b>',
        text: 'Пришлите нам размеры и вид животного — мы изготовим террариум точно по вашим потребностям, с 3D-фоном по желанию.',
        call: 'Позвоните нам',
      },
    },
    animals: {
      sr: {
        title: 'Terarijum za <b>vašu životinju</b>',
        links: [
          { href: '/terarijumi/terarijum-za-bradatu-agamu.html', label: 'Terarijum za bradatu agamu' },
          { href: '/terarijumi/terarijum-za-leopard-gekona.html', label: 'Terarijum za leopard gekona' },
          { href: '/terarijumi/terarijum-za-loptastog-pitona.html', label: 'Terarijum za loptastog pitona' },
          { href: '/terarijumi/terarijum-za-kornjacu.html', label: 'Terarijum za kornjaču' },
        ],
      },
    },
    more: [
      { href: '/izrada-akvarijuma.html', label: { sr: 'Izrada akvarijuma', en: 'Custom aquariums', ru: 'Изготовление аквариумов' } },
      { href: '/izrada-vivarijuma.html', label: { sr: 'Izrada vivarijuma', en: 'Custom vivariums', ru: 'Изготовление виварий' } },
      { href: '/izrada-led-rasvete.html', label: { sr: 'Izrada LED rasvete', en: 'Custom LED lighting', ru: 'Изготовление LED-освещения' } },
      { href: '/odrzavanje-akvarijuma-terarijuma.html', label: { sr: 'Održavanje i uređenje', en: 'Maintenance & setup', ru: 'Обслуживание и оформление' } },
      { href: '/popravka-akvarijuma-terarijuma.html', label: { sr: 'Popravka i servis', en: 'Repairs & servicing', ru: 'Ремонт и сервис' } },
    ],
  },
  akvarijumi: {
    path: '/izrada-akvarijuma.html',
    layout: 'proc',
    meta: {
      sr: {
        title: 'Izrada akvarijuma po meri, Novi Sad | NS Reptiles',
        description: 'Izrada akvarijuma po meri u Novom Sadu: stakleni akvarijumi za ribice i kornjače, 40+ dezena folija, LED rasveta, filteri i 3D pozadine. Rok 7 radnih dana.',
        ogTitle: 'Izrada akvarijuma po meri | NS Reptiles',
        ogDescription: 'Ručno lepljeni stakleni akvarijumi po vašim merama — folije, LED rasveta, filteri i oprema. Novi Sad.',
        image: '/style/img/logo.jpg',
      },
      en: {
        title: 'Custom Aquariums — Made-to-Order Glass Tanks | NS Reptiles',
        description: 'Custom-built glass aquariums in Novi Sad for fish and turtles: 40+ vinyl wrap designs, LED lighting, filters and 3D backgrounds. Ready in 7 business days.',
        ogTitle: 'Custom Aquariums | NS Reptiles',
        ogDescription: 'Hand-sealed glass aquariums built to your exact dimensions — vinyl wraps, LED lighting, filters, and full equipment. Novi Sad.',
      },
      ru: {
        title: 'Аквариумы на заказ в Нови-Саде | NS Reptiles',
        description: 'Аквариумы на заказ в Нови-Саде: стеклянные аквариумы для рыб и черепах, более 40 видов плёнки, LED-освещение, фильтры и 3D-фоны. Срок — 7 рабочих дней.',
        ogTitle: 'Аквариумы на заказ | NS Reptiles',
        ogDescription: 'Стеклянные аквариумы ручной работы по вашим размерам — плёнка, LED-освещение, фильтры и оборудование. Нови-Сад.',
      },
    },
    schema: {
      sr: {
        name: 'Izrada akvarijuma po meri',
        serviceType: 'Izrada akvarijuma po meri',
        description: 'Izrada akvarijuma po meri u Novom Sadu. Stakleni akvarijumi za ribice i kornjače, preko 40 dezena folija, LED rasveta, filteri i 3D pozadine. Rok izrade 7 radnih dana.',
      },
      en: {
        name: 'Custom Aquarium Building',
        serviceType: 'Custom Aquarium Building',
        description: 'Custom-built glass aquariums in Novi Sad. Handcrafted tanks for fish and turtles, 40+ vinyl wrap designs, LED lighting, filters, and 3D backgrounds. Ready in 7 business days.',
      },
      ru: {
        name: 'Изготовление аквариумов на заказ',
        serviceType: 'Изготовление аквариумов на заказ',
        description: 'Изготовление аквариумов на заказ в Нови-Саде. Стеклянные аквариумы для рыб и черепах, более 40 видов плёнки, LED-освещение, фильтры и 3D-фоны. Срок изготовления — 7 рабочих дней.',
        locality: 'Нови-Сад',
      },
    },
    h1: {
      sr: 'Izrada akvarijuma po meri',
      en: 'Custom Aquariums',
      ru: 'Аквариумы на заказ',
    },
    lead: {
      sr: 'Svaki akvarijum izrađujemo ručno od stakla, po vašim merama i željama — sa folijom po izboru, LED rasvetom i kompletnom opremom.',
      en: 'Every aquarium we build is handcrafted from glass, made to your exact measurements and preferences — with your choice of vinyl wrap, LED lighting, and full equipment.',
      ru: 'Каждый аквариум изготавливается вручную из стекла по вашим размерам и пожеланиям — с плёнкой на выбор, LED-освещением и полным комплектом оборудования.',
    },
    intro: {
      sr: 'Od prvog kontakta do preuzimanja vodimo vas kroz nekoliko jednostavnih koraka. Niste sigurni koja je optimalna veličina za vaše ribice ili kornjače? <strong>Rado ćemo vam pomoći</strong> da napravite pravi izbor.',
      en: 'From the first contact to pick-up, we walk you through a few simple steps. Not sure what size is best for your fish or turtles? <strong>We\'re happy to help</strong> you make the right choice.',
      ru: 'От первого контакта до получения готового изделия мы проведём вас через несколько простых шагов. Не уверены, какой оптимальный размер подойдёт для ваших рыб или черепах? <strong>Мы с радостью поможем</strong> сделать правильный выбор.',
    },
    items: [
      {
        title: {
          sr: 'Kontaktirajte nas',
          en: 'Get in touch',
          ru: 'Свяжитесь с нами',
        },
        text: {
          sr: 'Javite nam se telefonom, mejlom ili putem društvenih mreža i recite nam koje dimenzije akvarijuma želite. Ukoliko niste sigurni koja je optimalna veličina za vaše ribice ili kornjače, rado ćemo vam pomoći da napravite pravi izbor.',
          en: 'Reach out by phone, email, or social media and let us know the dimensions you have in mind. If you\'re not sure what size works best for your fish or turtles, we\'ll be happy to guide you to the right choice.',
          ru: 'Напишите нам по телефону, электронной почте или через социальные сети и сообщите нужные размеры аквариума. Если не уверены, какой оптимальный размер подойдёт для ваших рыб или черепах, мы с удовольствием поможем сделать правильный выбор.',
        },
      },
      {
        title: {
          sr: 'Odaberite boju akvarijuma',
          en: 'Choose your wrap',
          ru: 'Выберите цвет аквариума',
        },
        text: {
          sr: 'U ponudi je preko 40 različitih dezena folija tako da možete lako uklopiti akvarijum sa ostatkom enterijera. Takođe, postoji mogućnost da akvarijum bude obložen crnim lakobelom umesto folije.',
          en: 'We offer over 40 different vinyl wrap designs, so you can easily match the aquarium to your interior. We can also apply a black lacquer finish instead of vinyl if you prefer a cleaner look.',
          ru: 'В нашем ассортименте более 40 различных видов плёнки, поэтому вы легко впишете аквариум в интерьер комнаты. Также возможно оформление аквариума чёрным лакобелем вместо плёнки.',
        },
      },
      {
        title: {
          sr: 'Izaberite 3D pozadinu',
          en: 'Pick a 3D background',
          ru: 'Выберите 3D-фон',
        },
        text: {
          sr: 'Klasična folija sa slikom, fabrički model, 3D pozadina od stiropora, 3D pozadina od prirodnog siga kamena, ili pak bez pozadine — bira se po ukusu i želji kupca.',
          en: 'Classic photo print, factory-style backdrop, 3D polystyrene background, natural stone 3D background, or no background at all — the choice is entirely yours.',
          ru: 'Классическая плёнка с рисунком, заводская модель, 3D-фон из пенопласта, 3D-фон из натурального камня сиг, или вовсе без фона — выбор зависит от вкуса и желания покупателя.',
        },
      },
      {
        title: {
          sr: 'Rasveta i oprema',
          en: 'Lighting & equipment',
          ru: 'Освещение и оборудование',
        },
        text: {
          sr: 'Nudimo LED rasvetu koja je energetski efikasna i dugotrajna. Možemo dodati dva režima rada — dnevni i noćni, prekidače na samom akvarijumu i mogućnost daljinskog upravljanja. Pomažemo u odabiru filtera, pumpe, grejača, substrata i dekoracije.',
          en: 'We offer energy-efficient, long-lasting LED lighting. You can add two lighting modes — day and night — with switches on the tank itself and optional remote control. We also help you choose the right filter, pump, heater, substrate, and decorations.',
          ru: 'Предлагаем LED-освещение, которое энергоэффективно и долговечно. Можем добавить два режима работы — дневной и ночной, выключатели на самом аквариуме и возможность дистанционного управления. Помогаем с выбором фильтра, насоса, обогревателя, субстрата и декора.',
        },
      },
      {
        title: {
          sr: 'Kapara 30%',
          en: '30% deposit',
          ru: 'Предоплата 30%',
        },
        text: {
          sr: 'Minimalni iznos kapare za početak izrade akvarijuma je 30% od ukupne cene. Ostatak iznosa se plaća po završetku izrade, prilikom preuzimanja akvarijuma.',
          en: 'A minimum deposit of 30% of the total price is required to start the build. The remaining balance is due upon completion, when you collect the aquarium.',
          ru: 'Минимальная сумма предоплаты для начала изготовления аквариума составляет 30% от общей стоимости. Остаток оплачивается по окончании изготовления при получении аквариума.',
        },
      },
      {
        title: {
          sr: 'Izrada — 7 radnih dana',
          en: 'Build time — 7 business days',
          ru: 'Изготовление — 7 рабочих дней',
        },
        text: {
          sr: 'Uobičajeni rok izrade akvarijuma je 7 radnih dana. Za zahtevnije i veće projekte rok izrade može biti i duži.',
          en: 'The standard lead time for an aquarium is 7 business days. For larger or more complex builds, the timeline may be longer.',
          ru: 'Стандартный срок изготовления аквариума составляет 7 рабочих дней. Для более сложных и крупных проектов срок изготовления может быть увеличен.',
        },
      },
      {
        title: {
          sr: 'Preuzimanje akvarijuma',
          en: 'Pick up your aquarium',
          ru: 'Получение аквариума',
        },
        text: {
          sr: 'Akvarijum možete preuzeti lično u Novom Sadu, ili ga možemo poslati autobusom do vašeg grada. Troškove slanja snosi kupac. Za veće akvarijume možemo organizovati i dostavu kombijem.',
          en: 'You can collect your aquarium in person in Novi Sad, or we can ship it by bus to your city — shipping costs are covered by the buyer. For larger tanks we can also arrange delivery by van.',
          ru: 'Аквариум можно забрать лично в Нови-Саде или отправить автобусом в ваш город. Расходы на доставку несёт покупатель. Для крупных аквариумов можем организовать доставку микроавтобусом.',
        },
      },
    ],
    cta: {
      sr: {
        title: 'Vaš akvarijum <b>po meri</b>',
        text: 'Pošaljite nam dimenzije i namenu — izradićemo akvarijum tačno po vašem prostoru, sa LED rasvetom po želji.',
        call: 'Pozovi nas',
      },
      en: {
        title: 'Your aquarium, <b>built to order</b>',
        text: 'Send us your dimensions and intended use — we\'ll build an aquarium that fits your space perfectly, with LED lighting of your choice.',
        call: 'Call us',
      },
      ru: {
        title: 'Ваш аквариум <b>на заказ</b>',
        text: 'Пришлите нам размеры и назначение — изготовим аквариум точно под ваше пространство с LED-освещением по вашему желанию.',
        call: 'Позвонить нам',
      },
    },
    animals: {
      sr: {
        title: 'Akvarijum za <b>vašu životinju</b>',
        links: [
          { href: '/akvarijumi/akvarijum-za-kornjacu.html', label: 'Akvarijum za kornjaču' },
        ],
      },
    },
    more: [
      { href: '/izrada-terarijuma.html', label: { sr: 'Izrada terarijuma', en: 'Custom terrariums', ru: 'Изготовление террариумов' } },
      { href: '/izrada-vivarijuma.html', label: { sr: 'Izrada vivarijuma', en: 'Custom vivariums', ru: 'Изготовление виварий' } },
      { href: '/izrada-led-rasvete.html', label: { sr: 'Izrada LED rasvete', en: 'Custom LED lighting', ru: 'Изготовление LED-освещения' } },
      { href: '/odrzavanje-akvarijuma-terarijuma.html', label: { sr: 'Održavanje i uređenje', en: 'Maintenance & setup', ru: 'Обслуживание и оформление' } },
      { href: '/popravka-akvarijuma-terarijuma.html', label: { sr: 'Popravka i servis', en: 'Repair & servicing', ru: 'Ремонт и сервис' } },
    ],
  },
  vivarijumi: {
    path: '/izrada-vivarijuma.html',
    layout: 'proc',
    meta: {
      sr: {
        title: 'Izrada vivarijuma po meri, Novi Sad | NS Reptiles',
        description: 'Izrada vivarijuma po meri u Novom Sadu: stakleni vivarijumi za tropske biljke, žabe i vodozemce, 40+ dezena folija i specijalna rasveta. Rok 7 radnih dana.',
        ogTitle: 'Izrada vivarijuma po meri | NS Reptiles',
        ogDescription: 'Ručno rađeni stakleni vivarijumi po vašim merama — rasveta punog spektra, sistem za vlažnost i oprema. Novi Sad.',
        image: '/style/img/logo.jpg',
      },
      en: {
        title: 'Custom Glass Vivarium Building in Novi Sad | NS Reptiles',
        description: 'Custom glass vivariums in Novi Sad: full-spectrum lighting, 40+ decorative foil options, humidity systems and a 7-business-day turnaround.',
        ogTitle: 'Custom Vivarium Building | NS Reptiles',
        ogDescription: 'Handcrafted glass vivariums built to your exact dimensions — full-spectrum lighting, humidity control, and complete equipment. Novi Sad.',
      },
      ru: {
        title: 'Виварии на заказ в Нови-Саде | NS Reptiles',
        description: 'Виварии на заказ в Нови-Саде: стеклянные виварии для тропических растений, лягушек и амфибий, более 40 видов плёнки, спецосвещение. Срок — 7 рабочих дней.',
        ogTitle: 'Изготовление вивариев на заказ | NS Reptiles',
        ogDescription: 'Ручная работа — стеклянные виварии по вашим размерам: освещение полного спектра, система увлажнения и оборудование. Нови-Сад.',
      },
    },
    schema: {
      sr: {
        name: 'Izrada vivarijuma po meri',
        serviceType: 'Izrada vivarijuma po meri',
        description: 'Izrada vivarijuma po meri u Novom Sadu. Stakleni vivarijumi za tropske biljke, žabe i vodozemce, preko 40 dezena folija, specijalna rasveta. Rok izrade 7 radnih dana.',
      },
      en: {
        name: 'Custom Vivarium Building',
        serviceType: 'Custom Vivarium Building',
        description: 'Custom glass vivariums built to your specifications in Novi Sad. Full-spectrum lighting, 40+ decorative foil options, humidity systems, and a 7-business-day turnaround.',
      },
      ru: {
        name: 'Изготовление вивариев на заказ',
        serviceType: 'Изготовление вивариев на заказ',
        description: 'Изготовление вивариев на заказ в Нови-Саде. Стеклянные виварии для тропических растений, лягушек и амфибий, свыше 40 видов плёнки, специальное освещение. Срок изготовления 7 рабочих дней.',
      },
    },
    h1: {
      sr: 'Izrada vivarijuma po meri',
      en: 'Custom vivarium building',
      ru: 'Изготовление вивариев на заказ',
    },
    lead: {
      sr: 'Svaki vivarijum izrađujemo ručno od stakla, po vašim merama i željama — sa rasvetom punog spektra za zdrav rast biljaka i kompletnom opremom.',
      en: 'Every vivarium is handcrafted from glass, built to your exact dimensions and preferences — with full-spectrum lighting for healthy plant growth and everything you need included.',
      ru: 'Каждый виварий мы изготавливаем вручную из стекла, по вашим размерам и пожеланиям — с освещением полного спектра для здорового роста растений и полным набором оборудования.',
    },
    intro: {
      sr: 'Od prvog kontakta do preuzimanja vodimo vas kroz nekoliko jednostavnih koraka. Niste sigurni koja je optimalna veličina za vaše biljke? <strong>Rado ćemo vam pomoći</strong> da napravite pravi izbor.',
      en: 'From the first contact to pick-up, we guide you through a few simple steps. Not sure what size works best for your plants? <strong>We\'re happy to help</strong> you make the right choice.',
      ru: 'От первого контакта до получения мы проведём вас через несколько простых шагов. Не уверены, какой размер оптимален для ваших растений? <strong>Мы с удовольствием поможем</strong> вам сделать правильный выбор.',
    },
    items: [
      {
        title: {
          sr: 'Kontaktirajte nas',
          en: 'Get in touch',
          ru: 'Свяжитесь с нами',
        },
        text: {
          sr: 'Javite nam se telefonom, mejlom ili putem društvenih mreža i recite nam koje dimenzije vivarijuma želite. Ukoliko niste sigurni koja je optimalna veličina za vaše biljke, rado ćemo vam pomoći da napravite pravi izbor.',
          en: 'Reach out by phone, email, or social media and let us know what dimensions you have in mind. If you\'re not sure what size suits your plants best, we\'ll gladly help you figure it out.',
          ru: 'Напишите нам по телефону, электронной почте или через социальные сети и укажите желаемые размеры виварий. Если вы не уверены, какой размер оптимален для ваших растений, мы с удовольствием поможем вам сделать правильный выбор.',
        },
      },
      {
        title: {
          sr: 'Odaberite boju vivarijuma',
          en: 'Choose your vivarium colour',
          ru: 'Выберите цвет виварий',
        },
        text: {
          sr: 'U ponudi je preko 40 različitih dezena folija tako da možete lako uklopiti vivarijum sa ostatkom enterijera. Takođe, postoji mogućnost da vivarijum bude obložen crnim lakobelom umesto folije.',
          en: 'We offer over 40 different decorative foil designs, so you can easily match the vivarium to the rest of your interior. There\'s also the option to have it finished in black lacobel glass instead of foil.',
          ru: 'В наличии свыше 40 различных видов плёнки, так что виварий легко впишется в любой интерьер. Также возможна облицовка виварий чёрным лакобелем вместо плёнки.',
        },
      },
      {
        title: {
          sr: 'Izaberite 3D pozadinu',
          en: 'Pick a 3D background',
          ru: 'Выберите 3D-фон',
        },
        text: {
          sr: 'Klasična folija sa slikom, fabrički model, 3D pozadina od stiropora, 3D pozadina od prirodnog siga kamena, ili pak bez pozadine — bira se po ukusu i želji kupca.',
          en: 'A printed foil, a factory model, a 3D styrofoam background, a 3D natural stone background, or no background at all — the choice is entirely yours.',
          ru: 'Классическая плёнка с рисунком, заводская модель, 3D-фон из пенопласта, 3D-фон из натурального камня сига или без фона — выбор определяется вкусом и желанием покупателя.',
        },
      },
      {
        title: {
          sr: 'Rasveta i oprema',
          en: 'Lighting and equipment',
          ru: 'Освещение и оборудование',
        },
        text: {
          sr: 'Nudimo idealnu rasvetu za vaš vivarijum koja pruža sve potrebne spektre svetlosti za rast i zdravlje biljaka — različite boje i nijanse (crvena, plava, zelena i bela). Pomažemo u odabiru grejača, termostata, filtera za vodu, substrata, termometara i higrometara.',
          en: 'We offer ideal lighting for your vivarium, covering all the spectral needs for healthy plant growth — available in various colours and shades (red, blue, green, and white). We also help you choose heaters, thermostats, water filters, substrate, thermometers, and hygrometers.',
          ru: 'Мы предлагаем идеальное освещение для вашего виварий, обеспечивающее все необходимые спектры света для роста и здоровья растений — различные цвета и оттенки (красный, синий, зелёный и белый). Помогаем с выбором нагревателя, термостата, водяного фильтра, субстрата, термометра и гигрометра.',
        },
      },
      {
        title: {
          sr: 'Kapara 30%',
          en: '30% deposit',
          ru: 'Предоплата 30%',
        },
        text: {
          sr: 'Minimalni iznos kapare za početak izrade vivarijuma je 30% od ukupne cene. Ostatak iznosa se plaća po završetku izrade, prilikom preuzimanja vivarijuma.',
          en: 'A minimum deposit of 30% of the total price is required to begin production. The remaining balance is paid upon completion, when you collect your vivarium.',
          ru: 'Минимальная сумма предоплаты для начала изготовления виварий составляет 30% от общей стоимости. Оставшаяся сумма оплачивается по завершении изготовления, при получении виварий.',
        },
      },
      {
        title: {
          sr: 'Izrada — 7 radnih dana',
          en: 'Production — 7 business days',
          ru: 'Изготовление — 7 рабочих дней',
        },
        text: {
          sr: 'Uobičajeni rok izrade vivarijuma je 7 radnih dana. Za zahtevnije i veće projekte rok izrade može biti i duži.',
          en: 'Standard build time is 7 business days. For more complex or larger projects, the timeline may be longer.',
          ru: 'Обычный срок изготовления виварий составляет 7 рабочих дней. Для более сложных и крупных проектов срок изготовления может быть дольше.',
        },
      },
      {
        title: {
          sr: 'Preuzimanje vivarijuma',
          en: 'Collecting your vivarium',
          ru: 'Получение виварий',
        },
        text: {
          sr: 'Vivarijum možete preuzeti lično u Novom Sadu, ili ga možemo poslati autobusom do vašeg grada. Troškove slanja snosi kupac. Za veće vivarijume možemo organizovati i dostavu kombijem.',
          en: 'You can pick up your vivarium in person in Novi Sad, or we can ship it by bus to your city — shipping costs are covered by the buyer. For larger builds, we can arrange delivery by van.',
          ru: 'Виварий можно забрать лично в Нови-Саде или мы можем отправить его автобусом в ваш город. Расходы на доставку несёт покупатель. Для крупных вивариев возможна организация доставки микроавтобусом.',
        },
      },
    ],
    cta: {
      sr: {
        title: 'Vaš vivarijum <b>po meri</b>',
        text: 'Pošaljite nam dimenzije i namenu — izradićemo vivarijum tačno po vašim potrebama, sa rasvetom punog spektra.',
        call: 'Pozovi nas',
      },
      en: {
        title: 'Your vivarium, <b>built to order</b>',
        text: 'Send us your dimensions and intended use — we\'ll build a vivarium exactly to your needs, complete with full-spectrum lighting.',
        call: 'Call us',
      },
      ru: {
        title: 'Ваш виварий <b>на заказ</b>',
        text: 'Пришлите нам размеры и назначение — мы изготовим виварий точно по вашим потребностям, с освещением полного спектра.',
        call: 'Позвонить нам',
      },
    },
    moreTitle: { ru: 'Всё <b>в одном месте</b>' },
    more: [
      { href: '/izrada-terarijuma.html', label: { sr: 'Izrada terarijuma', en: 'Custom terrariums', ru: 'Изготовление террариумов' } },
      { href: '/izrada-akvarijuma.html', label: { sr: 'Izrada akvarijuma', en: 'Custom aquariums', ru: 'Изготовление аквариумов' } },
      { href: '/izrada-led-rasvete.html', label: { sr: 'Izrada LED rasvete', en: 'Custom LED lighting', ru: 'Изготовление LED-освещения' } },
      { href: '/odrzavanje-akvarijuma-terarijuma.html', label: { sr: 'Održavanje i uređenje', en: 'Maintenance & setup', ru: 'Обслуживание и оформление' } },
      { href: '/popravka-akvarijuma-terarijuma.html', label: { sr: 'Popravka i servis', en: 'Repairs & servicing', ru: 'Ремонт и сервис' } },
    ],
  },
  led: {
    path: '/izrada-led-rasvete.html',
    layout: 'feat',
    meta: {
      sr: {
        title: 'Izrada LED rasvete za akvarijume i terarijume | NS Reptiles',
        description: 'LED rasveta po meri za akvarijume i terarijume. Različite dimenzije i boje, dnevni i noćni režim, daljinsko upravljanje, energetski efikasno. Novi Sad.',
        ogTitle: 'Izrada LED rasvete po meri | NS Reptiles',
        ogDescription: 'LED rasveta po meri za akvarijume i terarijume — boje, režimi rada, daljinsko upravljanje. Novi Sad.',
        image: '/style/img/logo.jpg',
      },
      en: {
        title: 'Custom LED Lighting for Aquariums & Terrariums | NS Reptiles',
        description: 'Custom-built LED lighting for aquariums and terrariums. Various sizes and colors, day/night modes, remote control. Energy efficient. Novi Sad, Serbia.',
        ogDescription: 'Custom LED lighting for aquariums and terrariums — choose your color, mode, and control method. Made to your exact measurements. Novi Sad.',
      },
      ru: {
        title: 'LED-освещение для аквариумов и террариумов | NS Reptiles',
        description: 'LED-освещение на заказ для аквариумов и террариумов: разные размеры и цвета, дневной и ночной режим, пульт ДУ, энергоэффективность. Нови-Сад.',
        ogTitle: 'Изготовление LED освещения на заказ | NS Reptiles',
        ogDescription: 'LED освещение на заказ для аквариумов и террариумов — цвета, режимы работы, дистанционное управление. Нови Сад.',
      },
    },
    schema: {
      sr: {
        name: 'Izrada LED rasvete',
        serviceType: 'Izrada LED rasvete',
        description: 'Izrada LED rasvete po meri za akvarijume i terarijume. Različite dimenzije i boje, dnevni i noćni režim, daljinsko upravljanje. Energetski efikasno. Novi Sad.',
      },
      en: {
        name: 'Custom LED Lighting',
        serviceType: 'Custom LED Lighting for Aquariums and Terrariums',
        description: 'Custom-built LED lighting for aquariums and terrariums. Various sizes and colors, day/night modes, remote control. Energy efficient. Novi Sad.',
      },
      ru: {
        name: 'Изготовление LED освещения',
        serviceType: 'Изготовление LED освещения',
        description: 'Изготовление LED освещения на заказ для аквариумов и террариумов. Различные размеры и цвета, дневной и ночной режим, дистанционное управление. Энергоэффективно. Нови Сад.',
        locality: 'Нови Сад',
      },
    },
    h1: {
      sr: 'Izrada LED rasvete',
      en: 'Custom LED Lighting',
      ru: 'Изготовление LED освещения',
    },
    lead: {
      sr: 'Izrađujemo LED rasvetu prilagođenu dimenzijama vašeg akvarijuma ili terarijuma. Birajte boju, režim rada i način upravljanja.',
      en: 'We build LED lighting tailored to the exact dimensions of your aquarium or terrarium. Choose your color, operating mode, and control method.',
      ru: 'Изготавливаем LED освещение, подобранное по размерам вашего аквариума или террариума. Выбирайте цвет, режим работы и способ управления.',
    },
    intro: {
      sr: 'LED rasveta troši znatno manje struje, daje jače i ravnomernije svetlo i ne zagreva vodu. Izrađujemo je <strong>po tačnim merama</strong> — od malih akvarijuma od 30 cm do velikih preko 2 metra.',
      en: 'LED lighting uses significantly less power, delivers stronger and more even light, and doesn\'t heat the water. We build it <strong>to your exact dimensions</strong> — from small 30 cm aquariums all the way to large builds over 2 metres.',
      ru: 'LED освещение потребляет значительно меньше электроэнергии, даёт более яркий и равномерный свет и не нагревает воду. Изготавливаем <strong>по точным меркам</strong> — от маленьких аквариумов 30 см до больших длиной более 2 метров.',
    },
    items: [
      {
        title: {
          sr: 'Različite dimenzije',
          en: 'Any size',
          ru: 'Различные размеры',
        },
        text: {
          sr: 'LED rasvetu izrađujemo po tačnim merama vašeg akvarijuma ili terarijuma. Bez obzira da li je u pitanju mali akvarijum od 30 cm ili veliki od preko 2 metra — prilagođavamo dužinu i broj LED traka za optimalno osvetljenje.',
          en: 'We build LED lighting to the precise measurements of your aquarium or terrarium. Whether it\'s a compact 30 cm tank or a large display over 2 metres — we adjust the length and number of LED strips to achieve optimal coverage.',
          ru: 'LED освещение изготавливаем по точным меркам вашего аквариума или террариума. Независимо от того, маленький ли это аквариум 30 см или большой длиной более 2 метров — подбираем длину и количество LED-лент для оптимального освещения.',
        },
      },
      {
        title: {
          sr: 'Izbor boja',
          en: 'Choice of colours',
          ru: 'Выбор цвета',
        },
        text: {
          sr: 'Bela (hladna i topla), plava, crvena, zelena ili RGB koja menja boje — birate vi. Kombinujemo više boja za prirodan efekat ili koristimo jednu boju za specifičan ambijent. Plava rasveta je idealna za noćni režim i ističe fluorescentne ribe.',
          en: 'White (cool and warm), blue, red, green, or RGB that cycles through colours — the choice is yours. We can combine multiple colours for a natural effect, or use a single colour to create a specific atmosphere. Blue lighting is ideal for night mode and makes fluorescent fish really pop.',
          ru: 'Белый (холодный и тёплый), синий, красный, зелёный или RGB с изменением цветов — выбираете вы. Комбинируем несколько цветов для естественного эффекта или используем один цвет для создания особой атмосферы. Синее освещение идеально для ночного режима и подчёркивает флуоресцентных рыб.',
        },
      },
      {
        title: {
          sr: 'Dnevni i noćni režim',
          en: 'Day and night mode',
          ru: 'Дневной и ночной режим',
        },
        text: {
          sr: 'Svaka LED rasveta može imati dva režima rada — dnevni sa jačim belim svetlom za aktivnost vaših životinja, i noćni sa slabijim plavim svetlom za simulaciju mesečine. Prebacivanje je jednostavno, jednim prekidačem.',
          en: 'Every LED unit can have two operating modes — a daytime mode with brighter white light to support your animals\' activity, and a night mode with softer blue light that simulates moonlight. Switching between them is simple, just one flip of a switch.',
          ru: 'Каждое LED освещение может иметь два режима работы — дневной с более ярким белым светом для активности ваших животных и ночной с более слабым синим светом для имитации лунного света. Переключение простое — одним выключателем.',
        },
      },
      {
        title: {
          sr: 'Daljinsko upravljanje',
          en: 'Remote control',
          ru: 'Дистанционное управление',
        },
        text: {
          sr: 'Opciono dodajemo daljinski upravljač za potpunu kontrolu rasvete. Menjajte boju, intenzitet i režim rada bez otvaranja poklopca. Praktično rešenje za akvarijume na teže dostupnim mestima.',
          en: 'We can optionally add a remote control for full command over your lighting. Change the colour, brightness, and mode without opening the lid — a practical solution for aquariums in hard-to-reach spots.',
          ru: 'Дополнительно добавляем пульт дистанционного управления для полного контроля освещения. Меняйте цвет, интенсивность и режим работы, не открывая крышку. Практичное решение для аквариумов в труднодоступных местах.',
        },
      },
      {
        title: {
          sr: 'Energetska efikasnost',
          en: 'Energy efficiency',
          ru: 'Энергоэффективность',
        },
        text: {
          sr: 'LED rasveta troši znatno manje struje od klasičnih sijalica i fluorescentnih cevi, a daje jače i ravnomernije svetlo. Dugotrajna je i ne zagreva vodu, što je posebno važno za tropske ribe i reptile.',
          en: 'LED lighting draws significantly less power than traditional bulbs and fluorescent tubes, while delivering stronger, more even light. It lasts longer and doesn\'t heat the water — which is especially important for tropical fish and reptiles.',
          ru: 'LED освещение потребляет значительно меньше электроэнергии по сравнению с обычными лампочками и люминесцентными трубками, а свет даёт более яркий и равномерный. Долговечно и не нагревает воду, что особенно важно для тропических рыб и рептилий.',
        },
      },
      {
        title: {
          sr: 'Ugradnja u postojeći akvarijum',
          en: 'Retrofit installation',
          ru: 'Установка в существующий аквариум',
        },
        text: {
          sr: 'LED rasvetu možemo ugraditi u bilo koji postojeći akvarijum ili terarijum. Prilagođavamo montažu vašem poklopcu, dodajemo prekidače na željeno mesto i povezujemo sve u jednu celinu. Zamenjujemo i staru, dotrajalu rasvetu.',
          en: 'We can install LED lighting into any existing aquarium or terrarium. We adapt the mounting to your lid, add switches wherever you need them, and connect everything into a single clean setup. We also replace old, worn-out lighting.',
          ru: 'LED освещение можем установить в любой существующий аквариум или террариум. Адаптируем монтаж к вашей крышке, добавляем выключатели в нужное место и объединяем всё в единую систему. Также заменяем старое, изношенное освещение.',
        },
      },
    ],
    cta: {
      sr: {
        title: 'LED rasveta <b>po vašoj meri</b>',
        text: 'Javite nam dimenzije i željenu boju — napravićemo LED rasvetu tačno po vašoj meri.',
        call: 'Pozovi nas',
      },
      en: {
        title: 'LED lighting <b>built for you</b>',
        text: 'Send us your dimensions and preferred colour — we\'ll put together LED lighting made exactly to your specifications.',
        call: 'Call us',
      },
      ru: {
        title: 'LED освещение <b>по вашим меркам</b>',
        text: 'Сообщите нам размеры и желаемый цвет — изготовим LED освещение точно по вашим меркам.',
        call: 'Позвонить нам',
      },
    },
    moreTitle: { ru: 'Всё <b>в одном месте</b>' },
    more: [
      { href: '/izrada-terarijuma.html', label: { sr: 'Izrada terarijuma', en: 'Custom Terrariums', ru: 'Изготовление террариумов' } },
      { href: '/izrada-akvarijuma.html', label: { sr: 'Izrada akvarijuma', en: 'Custom Aquariums', ru: 'Изготовление аквариумов' } },
      { href: '/izrada-vivarijuma.html', label: { sr: 'Izrada vivarijuma', en: 'Custom Vivariums', ru: 'Изготовление вивариумов' } },
      { href: '/odrzavanje-akvarijuma-terarijuma.html', label: { sr: 'Održavanje i uređenje', en: 'Maintenance & Setup', ru: 'Обслуживание и оформление' } },
      { href: '/popravka-akvarijuma-terarijuma.html', label: { sr: 'Popravka i servis', en: 'Repairs & Service', ru: 'Ремонт и сервис' } },
    ],
  },
  odrzavanje: {
    path: '/odrzavanje-akvarijuma-terarijuma.html',
    layout: 'feat',
    meta: {
      sr: {
        title: 'Održavanje akvarijuma i terarijuma, Novi Sad | NS Reptiles',
        description: 'Održavanje i uređenje akvarijuma i terarijuma u Novom Sadu. Čišćenje, zamena vode, podešavanje opreme i uređenje enterijera. Redovno ili jednokratno.',
        ogTitle: 'Održavanje i uređenje akvarijuma i terarijuma | NS Reptiles',
        ogDescription: 'Profesionalno čišćenje, uređenje i podešavanje opreme za akvarijume i terarijume. Redovno ili jednokratno. Novi Sad.',
        image: '/style/img/logo.jpg',
      },
      en: {
        title: 'Aquarium & Terrarium Maintenance | NS Reptiles, Novi Sad',
        description: 'Professional aquarium and terrarium maintenance in Novi Sad: cleaning, water changes, equipment setup and interior decoration. One-time or regular service.',
        ogTitle: 'Aquarium & Terrarium Maintenance | NS Reptiles',
        ogDescription: 'Professional cleaning, decoration, and equipment setup for aquariums and terrariums. One-time or regular. Novi Sad.',
      },
      ru: {
        title: 'Обслуживание аквариумов и террариумов | NS Reptiles',
        description: 'Обслуживание аквариумов и террариумов в Нови-Саде: чистка, замена воды, настройка оборудования и оформление интерьера. Разово или регулярно.',
        ogDescription: 'Профессиональная чистка, оформление и настройка оборудования для аквариумов и террариумов. Разово или регулярно. Нови-Сад.',
      },
    },
    schema: {
      sr: {
        name: 'Održavanje i uređenje akvarijuma i terarijuma',
        serviceType: 'Održavanje i uređenje akvarijuma i terarijuma',
        description: 'Održavanje i uređenje akvarijuma i terarijuma u Novom Sadu. Čišćenje, zamena vode, podešavanje opreme i uređenje enterijera. Redovno ili jednokratno.',
      },
      en: {
        name: 'Aquarium and Terrarium Maintenance',
        serviceType: 'Aquarium and Terrarium Maintenance',
        description: 'Professional aquarium and terrarium maintenance in Novi Sad. Cleaning, water changes, equipment setup, and interior decoration. One-time or regular service.',
      },
      ru: {
        name: 'Обслуживание и оформление аквариумов и террариумов',
        serviceType: 'Обслуживание и оформление аквариумов и террариумов',
        description: 'Профессиональное обслуживание и оформление аквариумов и террариумов в Нови-Саде. Чистка, замена воды, настройка оборудования и оформление интерьера. Разово или регулярно.',
      },
    },
    h1: {
      sr: 'Održavanje i uređenje akvarijuma i terarijuma',
      en: 'Aquarium & Terrarium Maintenance',
      ru: 'Обслуживание и оформление аквариумов и террариумов',
    },
    lead: {
      sr: 'Profesionalno održavanje i uređenje kako bi vaš akvarijum ili terarijum uvek izgledao savršeno, a životinje bile zdrave i zadovoljne.',
      en: 'Professional maintenance and decoration so your aquarium or terrarium always looks its best — and your animals stay healthy and happy.',
      ru: 'Профессиональное обслуживание и оформление, чтобы ваш аквариум или террариум всегда выглядел безупречно, а животные были здоровы и счастливы.',
    },
    intro: {
      sr: 'Nudimo <strong>jednokratne usluge</strong> čišćenja i uređenja, kao i dogovor za <strong>redovno održavanje</strong>. Kontaktirajte nas i dogovorićemo raspored i obim posla koji vam odgovara.',
      en: 'We offer <strong>one-time services</strong> for cleaning and decoration, as well as arrangements for <strong>regular maintenance</strong>. Get in touch and we\'ll work out a schedule and scope that suits you.',
      ru: 'Мы предлагаем <strong>разовые услуги</strong> чистки и оформления, а также договор на <strong>регулярное обслуживание</strong>. Свяжитесь с нами, и мы согласуем удобный для вас график и объём работ.',
    },
    items: [
      {
        title: {
          sr: 'Čišćenje akvarijuma',
          en: 'Aquarium Cleaning',
          ru: 'Чистка аквариума',
        },
        text: {
          sr: 'Redovno čišćenje je ključno za zdravlje ribica i kornjača. Vršimo delimičnu zamenu vode, čišćenje stakla od algi, usisavanje substrata, čišćenje filtera i proveru parametara vode. Preporučujemo održavanje jednom mesečno.',
          en: 'Regular cleaning is essential for the health of your fish and turtles. We perform partial water changes, algae removal from the glass, substrate vacuuming, filter cleaning, and water parameter checks. We recommend monthly maintenance.',
          ru: 'Регулярная чистка — залог здоровья рыбок и черепах. Мы проводим частичную замену воды, чистку стекла от водорослей, сифонирование грунта, промывку фильтра и проверку параметров воды. Рекомендуем обслуживание раз в месяц.',
        },
      },
      {
        title: {
          sr: 'Čišćenje terarijuma',
          en: 'Terrarium Cleaning',
          ru: 'Чистка террариума',
        },
        text: {
          sr: 'Terarijum zahteva redovno čišćenje kako bi reptil bio zdrav. Menjamo substrat, dezinfikujemo površine i proveravamo stanje opreme. Posebnu pažnju posvećujemo proveri temperature, vlažnosti i UVB rasvete.',
          en: 'A terrarium needs regular cleaning to keep your reptile healthy. We replace the substrate, disinfect surfaces, and inspect all equipment. We pay close attention to temperature, humidity, and UVB lighting conditions.',
          ru: 'Террариум требует регулярной уборки для здоровья рептилии. Мы меняем субстрат, дезинфицируем поверхности и проверяем состояние оборудования. Особое внимание уделяем контролю температуры, влажности и UVB-освещения.',
        },
      },
      {
        title: {
          sr: 'Uređenje akvarijuma',
          en: 'Aquarium Decoration',
          ru: 'Оформление аквариума',
        },
        text: {
          sr: 'Želite potpuno nov izgled? Postavljamo substrat, kamenje, drvo (Red Moor Wood), žive i veštačke biljke, 3D pozadine i dekoracije. Kreiramo prirodan, estetski prijatan izgled prilagođen vrsti riba ili kornjača.',
          en: 'Looking for a completely new look? We install substrate, rocks, driftwood (Red Moor Wood), live and artificial plants, 3D backgrounds, and decorations. We create a natural, visually appealing setup tailored to your fish or turtles.',
          ru: 'Хотите полностью обновить интерьер? Мы укладываем грунт, устанавливаем камни, коряги (Red Moor Wood), живые и искусственные растения, 3D-фоны и декорации. Создаём природный, эстетичный облик под конкретный вид рыб или черепах.',
        },
      },
      {
        title: {
          sr: 'Uređenje terarijuma',
          en: 'Terrarium Decoration',
          ru: 'Оформление террариума',
        },
        text: {
          sr: 'Pravimo funkcionalan i vizuelno atraktivan prostor za reptila. Postavljamo odgovarajući substrat, 3D pozadine od stiropora ili siga kamena, penjačke grane, skrovišta, posude za vodu i hranu — sve prema potrebama vrste.',
          en: 'We build a functional and visually attractive space for your reptile. We install the right substrate, 3D backgrounds made from polystyrene or tufa rock, climbing branches, hides, water and food dishes — all chosen according to the species\' needs.',
          ru: 'Создаём функциональное и визуально привлекательное пространство для рептилии. Устанавливаем подходящий субстрат, 3D-фоны из пенопласта или туфа, ветки для лазания, укрытия, поилки и кормушки — всё согласно потребностям вида.',
        },
      },
      {
        title: {
          sr: 'Podešavanje opreme',
          en: 'Equipment Setup',
          ru: 'Настройка оборудования',
        },
        text: {
          sr: 'Proveravamo i podešavamo kompletnu opremu — filtere, pumpe, grejače, termostate, LED i UVB/UVA rasvetu. Ako je nešto dotrajalo ili ne radi ispravno, predlažemo zamenu i pomažemo u odabiru odgovarajuće opreme.',
          en: 'We inspect and configure all equipment — filters, pumps, heaters, thermostats, LED and UVB/UVA lighting. If anything is worn out or not working correctly, we\'ll recommend a replacement and help you choose the right gear.',
          ru: 'Проверяем и настраиваем всё оборудование — фильтры, помпы, нагреватели, термостаты, LED и UVB/UVA-освещение. Если что-то износилось или работает неправильно, предлагаем замену и помогаем выбрать подходящее оборудование.',
        },
      },
      {
        title: {
          sr: 'Redovno održavanje',
          en: 'Regular Maintenance',
          ru: 'Регулярное обслуживание',
        },
        text: {
          sr: 'Nudimo jednokratne usluge održavanja i uređenja, kao i dogovor za redovno održavanje. Kontaktirajte nas i dogovorićemo se oko rasporeda i obima posla koji vam odgovara.',
          en: 'We offer both one-time maintenance and decoration services, as well as ongoing maintenance agreements. Contact us and we\'ll work out a schedule and level of service that fits your needs.',
          ru: 'Предлагаем разовые услуги обслуживания и оформления, а также договор на регулярное обслуживание. Свяжитесь с нами, и мы согласуем удобный для вас график и объём работ.',
        },
      },
    ],
    cta: {
      sr: {
        title: 'Zakažite <b>održavanje</b>',
        text: 'Javite nam se i dogovorićemo održavanje ili uređenje koje vam odgovara — jednokratno ili redovno.',
        call: 'Pozovi nas',
      },
      en: {
        title: 'Book <b>maintenance</b>',
        text: 'Get in touch and we\'ll arrange maintenance or decoration that works for you — one-time or on a regular basis.',
        call: 'Call us',
      },
      ru: {
        title: 'Запишитесь на <b>обслуживание</b>',
        text: 'Свяжитесь с нами, и мы согласуем обслуживание или оформление, удобное для вас — разово или на регулярной основе.',
        call: 'Позвонить нам',
      },
    },
    more: [
      { href: '/izrada-terarijuma.html', label: { sr: 'Izrada terarijuma', en: 'Terrarium Building', ru: 'Изготовление террариумов' } },
      { href: '/izrada-akvarijuma.html', label: { sr: 'Izrada akvarijuma', en: 'Aquarium Building', ru: 'Изготовление аквариумов' } },
      { href: '/izrada-vivarijuma.html', label: { sr: 'Izrada vivarijuma', en: 'Vivarium Building', ru: 'Изготовление вивариумов' } },
      { href: '/izrada-led-rasvete.html', label: { sr: 'Izrada LED rasvete', en: 'Custom LED Lighting', ru: 'Изготовление LED-освещения' } },
      { href: '/popravka-akvarijuma-terarijuma.html', label: { sr: 'Popravka i servis', en: 'Repair & Servicing', ru: 'Ремонт и сервис' } },
    ],
  },
  popravka: {
    path: '/popravka-akvarijuma-terarijuma.html',
    layout: 'feat',
    meta: {
      sr: {
        title: 'Popravka akvarijuma i terarijuma, Novi Sad | NS Reptiles',
        description: 'Popravka akvarijuma i terarijuma u Novom Sadu. Zamena stakla i silikona, popravka poklopca i okvira, zamena rasvete. Besplatna procena, rok 1-3 dana.',
        ogTitle: 'Popravka akvarijuma i terarijuma | NS Reptiles',
        ogDescription: 'Servis akvarijuma i terarijuma — zamena stakla i silikona, poklopac, okvir, rasveta. Besplatna procena. Novi Sad.',
        image: '/style/img/logo.jpg',
      },
      en: {
        title: 'Aquarium & Terrarium Repair Service | NS Reptiles, Novi Sad',
        description: 'Aquarium & terrarium repair in Novi Sad: glass and silicone replacement, lid and frame repair, lighting upgrades. Free estimate, most repairs in 1–3 days.',
        ogTitle: 'Aquarium & Terrarium Repair | NS Reptiles',
        ogDescription: 'Aquarium and terrarium repair service — glass, silicone, lid, frame, and lighting. Free estimate. Novi Sad, Serbia.',
      },
      ru: {
        title: 'Ремонт аквариумов и террариумов | NS Reptiles, Нови-Сад',
        description: 'Ремонт аквариумов и террариумов в Нови-Саде: замена стекла, силикона и освещения, ремонт крышки и рамы. Бесплатная оценка, большинство работ за 1–3 дня.',
        ogTitle: 'Ремонт аквариумов и террариумов | NS Reptiles',
        ogDescription: 'Сервис аквариумов и террариумов — замена стекла, силикона, крышки, рамы и освещения. Бесплатная оценка. Нови-Сад, Сербия.',
      },
    },
    schema: {
      sr: {
        name: 'Popravka akvarijuma i terarijuma',
        serviceType: 'Popravka akvarijuma i terarijuma',
        description: 'Popravka akvarijuma i terarijuma u Novom Sadu. Zamena stakla i silikona, popravka poklopca i okvira, zamena rasvete. Besplatna procena, popravka za 1-3 dana.',
      },
      en: {
        name: 'Aquarium and Terrarium Repair',
        serviceType: 'Aquarium and Terrarium Repair',
        description: 'Professional aquarium and terrarium repair in Novi Sad. Glass and silicone replacement, lid and frame repair, lighting upgrades. Free estimate, most repairs done in 1–3 business days.',
      },
      ru: {
        name: 'Ремонт аквариумов и террариумов',
        serviceType: 'Ремонт аквариумов и террариумов',
        description: 'Профессиональный ремонт аквариумов и террариумов в Нови-Саде. Замена стекла и силикона, ремонт крышки и рамы, замена освещения. Бесплатная оценка, большинство ремонтов за 1–3 рабочих дня.',
        locality: 'Нови-Сад',
      },
    },
    h1: {
      sr: 'Popravka akvarijuma i terarijuma',
      en: 'Aquarium & Terrarium Repair',
      ru: 'Ремонт аквариумов и террариумов',
    },
    lead: {
      sr: 'Vaš akvarijum ili terarijum ima oštećenje? Ne morate kupovati novi — popravljamo ga brzo i pouzdano.',
      en: 'Is your aquarium or terrarium damaged? You don\'t have to buy a new one — we fix it quickly and reliably.',
      ru: 'Ваш аквариум или террариум повреждён? Покупать новый необязательно — мы отремонтируем его быстро и надёжно.',
    },
    intro: {
      sr: 'Pošaljite nam slike oštećenja i dimenzije, a mi ćemo vam dati <strong>besplatnu procenu</strong> cene i roka. Većina popravki završava se u roku od <strong>1-3 radna dana</strong>.',
      en: 'Send us photos of the damage and the dimensions, and we\'ll give you a <strong>free estimate</strong> of the cost and turnaround. Most repairs are completed within <strong>1–3 business days</strong>.',
      ru: 'Пришлите нам фотографии повреждений и размеры, и мы дадим вам <strong>бесплатную оценку</strong> стоимости и сроков. Большинство ремонтов выполняется в течение <strong>1–3 рабочих дней</strong>.',
    },
    items: [
      {
        title: {
          sr: 'Zamena stakla',
          en: 'Glass Replacement',
          ru: 'Замена стекла',
        },
        text: {
          sr: 'Puklo ili naprsnulo staklo ne mora da znači kraj. Vršimo kompletnu zamenu oštećenog stakla novim, odgovarajuće debljine i kvaliteta, i vraćamo akvarijum u potpuno funkcionalno stanje.',
          en: 'A cracked or broken pane doesn\'t have to mean the end. We carry out a full replacement of the damaged glass with new glass of the appropriate thickness and quality, restoring your aquarium to fully working condition.',
          ru: 'Треснувшее или разбитое стекло — это ещё не конец. Мы полностью заменяем повреждённое стекло новым, подходящей толщины и качества, и возвращаем аквариум в полностью рабочее состояние.',
        },
      },
      {
        title: {
          sr: 'Zamena silikona',
          en: 'Silicone Replacement',
          ru: 'Замена силикона',
        },
        text: {
          sr: 'Curenje je čest problem, naročito kod starijih modela. Uklanjamo stari, istrošeni silikon i nanosimo novi, kvalitetan akvarijumski silikon koji je potpuno bezbedan za ribe, kornjače i reptile.',
          en: 'Leaks are a common issue, especially on older models. We remove the old, worn-out silicone and apply fresh, high-quality aquarium-grade sealant that is completely safe for fish, turtles, and reptiles.',
          ru: 'Течи — распространённая проблема, особенно у старых моделей. Мы удаляем старый изношенный силикон и наносим новый, качественный аквариумный герметик, абсолютно безопасный для рыб, черепах и рептилий.',
        },
      },
      {
        title: {
          sr: 'Popravka poklopca',
          en: 'Lid Repair',
          ru: 'Ремонт крышки',
        },
        text: {
          sr: 'Poklopac je bitan za bezbednost životinja i rad rasvete. Popravljamo oštećene poklopce, dodajemo otvore za kablove ili izrađujemo nove po meri. Radimo i nadogradnje — ugradnja filtera, dupli poklopac ili nova hauba.',
          en: 'The lid matters for your animals\' safety and for the lighting setup. We repair damaged lids, add cable cutouts, or build entirely new ones to order. We also handle upgrades — filter integration, double lids, or a new canopy.',
          ru: 'Крышка важна для безопасности животных и работы освещения. Мы ремонтируем повреждённые крышки, добавляем отверстия для кабелей или изготавливаем новые на заказ. Выполняем и модернизации — установку фильтра, двойную крышку или новый кожух.',
        },
      },
      {
        title: {
          sr: 'Popravka okvira',
          en: 'Frame Repair',
          ru: 'Ремонт рамы',
        },
        text: {
          sr: 'Oštećen okvir, iskrivljen ram ili odlepljena folija — sve to rešavamo. Popravljamo strukturu, zamenjujemo oštećene delove okvira i ponovo oblepljujemo folijom po vašem izboru iz ponude od preko 40 dezena.',
          en: 'Damaged frame, warped rim, or peeling wrap — we sort it all out. We repair the structure, replace damaged frame sections, and re-wrap with the vinyl of your choice from a selection of over 40 patterns.',
          ru: 'Повреждённая рама, покороблённый кант или отслоившаяся плёнка — всё это мы устраняем. Восстанавливаем конструкцию, заменяем повреждённые части рамы и заново оклеиваем плёнкой на ваш выбор из ассортимента более 40 рисунков.',
        },
      },
      {
        title: {
          sr: 'Zamena rasvete',
          en: 'Lighting Replacement',
          ru: 'Замена освещения',
        },
        text: {
          sr: 'Pregorela LED traka, neispravan prekidač ili dotrajala rasveta? Zamenjujemo staru rasvetu novom LED rasvetom sa dnevnim i noćnim režimom. Za terarijume menjamo i UVB/UVA sijalice neophodne za zdravlje reptila.',
          en: 'Burnt-out LED strip, faulty switch, or aging fixtures? We swap old lighting for new LED setups with day and night modes. For terrariums we also replace UVB/UVA bulbs essential for reptile health.',
          ru: 'Сгоревшая LED-лента, неисправный выключатель или устаревшее освещение? Заменяем старое освещение новым LED с дневным и ночным режимом. Для террариумов также меняем лампы UVB/UVA, необходимые для здоровья рептилий.',
        },
      },
      {
        title: {
          sr: 'Besplatna procena',
          en: 'Free Estimate',
          ru: 'Бесплатная оценка',
        },
        text: {
          sr: 'Kontaktirajte nas telefonom, mejlom ili preko društvenih mreža. Pošaljite slike oštećenja i dimenzije, a mi dajemo besplatnu procenu cene i roka. Većina popravki završava se u roku od 1-3 radna dana.',
          en: 'Reach out by phone, email, or social media. Send us photos of the damage and the dimensions, and we\'ll come back to you with a free estimate of the cost and timeline. Most repairs are done within 1–3 business days.',
          ru: 'Свяжитесь с нами по телефону, электронной почте или через социальные сети. Пришлите фотографии повреждений и размеры — мы дадим бесплатную оценку стоимости и сроков. Большинство ремонтов выполняется за 1–3 рабочих дня.',
        },
      },
    ],
    cta: {
      sr: {
        title: 'Besplatna <b>procena popravke</b>',
        text: 'Pošaljite nam slike oštećenja i dimenzije — dobićete besplatnu procenu cene i roka popravke.',
        call: 'Pozovi nas',
      },
      en: {
        title: 'Free <b>Repair Estimate</b>',
        text: 'Send us photos of the damage and the dimensions — we\'ll get back to you with a free estimate of the cost and timeline.',
        call: 'Call Us',
      },
      ru: {
        title: 'Бесплатная <b>оценка ремонта</b>',
        text: 'Пришлите нам фотографии повреждений и размеры — мы дадим бесплатную оценку стоимости и сроков ремонта.',
        call: 'Позвонить нам',
      },
    },
    more: [
      { href: '/izrada-terarijuma.html', label: { sr: 'Izrada terarijuma', en: 'Terrarium Building', ru: 'Изготовление террариумов' } },
      { href: '/izrada-akvarijuma.html', label: { sr: 'Izrada akvarijuma', en: 'Aquarium Building', ru: 'Изготовление аквариумов' } },
      { href: '/izrada-vivarijuma.html', label: { sr: 'Izrada vivarijuma', en: 'Vivarium Building', ru: 'Изготовление виварий' } },
      { href: '/izrada-led-rasvete.html', label: { sr: 'Izrada LED rasvete', en: 'LED Lighting Installation', ru: 'Монтаж LED освещения' } },
      { href: '/odrzavanje-akvarijuma-terarijuma.html', label: { sr: 'Održavanje i uređenje', en: 'Maintenance & Setup', ru: 'Обслуживание и оформление' } },
    ],
  },
} satisfies Record<string, Service>;

export type ServiceKey = keyof typeof SERVICES;
