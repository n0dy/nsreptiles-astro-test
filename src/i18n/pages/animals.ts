import type { Locale } from '../../config/site';

type L<T = string> = Record<Locale, T>;

// Vrednosti sa <b>/<strong> se renderuju kao HTML - samo nas tekst, nikad korisnicki unos.
export const ANIMALS_TEXT = {
  sr: {
    meta: {
      title: 'Egzotične životinje - reptili na prodaju | NS Reptiles',
      description:
        'Zdravi reptili na prodaju - bradate agame, leopard gekoni, loptasti pitoni, kukuruzni smukovi i tarantule. Odgajivačnica NS Reptiles, Novi Sad.',
      ogDescription: 'Zdrave bradate agame, gekoni, pitoni i tarantule iz odgajivačnice NS Reptiles, Novi Sad.',
    },
    h1: 'Egzotične životinje',
    lead: 'Zdravi, pravilno hranjeni reptili spremni za novi dom - odgajani kod nas ili preuzeti od proverenih odgajivača iz Srbije i regiona.',
    intro:
      'U <strong>NS Reptiles</strong> odgajivačnici radimo isključivo sa vrstama koje smo lično odgajili ili preuzeli od proverenih odgajivača. Za svaku vrstu pripremili smo detaljan vodič sa preporukama za opremu i negu, kako bi vaš novi ljubimac od prvog dana imao ispravne uslove.',
    beginner: 'Za početnike',
    view: 'Pogledaj vrstu',
    species: { one: 'vrsta', few: 'vrste', other: 'vrsta' },
    starter: {
      title: 'Kompletni starter paketi',
      text: 'Uz svaku životinju nudimo i gotov starter paket - terarijum, rasvetu, grejanje, podlogu i dekoraciju, sve prilagođeno konkretnoj vrsti. Idealno ako tek krećeš.',
      cta: 'Pogledaj komplete',
    },
    faqTitle: 'Sve o <b>reptilima</b>',
    cta: {
      title: 'Pronađite svog <b>ljubimca</b>',
      text: 'Javite nam koja vas vrsta zanima - rado ćemo vas posavetovati o nezi, opremi i dostupnosti.',
      call: 'Pozovi nas',
    },
  },
  en: {
    meta: {
      title: 'Exotic Animals - Reptiles for Sale | NS Reptiles, Novi Sad',
      description:
        'Healthy reptiles for sale - bearded dragons, leopard geckos, ball pythons, corn snakes and tarantulas. NS Reptiles breeder, Novi Sad.',
      ogDescription: 'Healthy bearded dragons, geckos, pythons and tarantulas from NS Reptiles breeder, Novi Sad.',
    },
    h1: 'Exotic animals',
    lead: 'Healthy, properly fed reptiles ready for a new home - bred by us or sourced from trusted breeders in Serbia and the region.',
    intro:
      'At <strong>NS Reptiles</strong> breeder, we work exclusively with species we have personally bred or sourced from trusted breeders. For each species, we have prepared a detailed guide with equipment and care recommendations, so your new pet has the right conditions from day one.',
    beginner: 'For beginners',
    view: 'View species',
    species: { one: 'species', other: 'species' },
    starter: {
      title: 'Complete starter kits',
      text: "With every animal, we also offer ready-made starter kits - terrarium, lighting, heating, substrate and decoration, all tailored to the specific species. Ideal if you're just starting out.",
      cta: 'Browse kits',
    },
    faqTitle: 'All about <b>reptiles</b>',
    cta: {
      title: 'Find your <b>perfect pet</b>',
      text: "Let us know which species you're interested in - we'll be happy to advise you on care, equipment and availability.",
      call: 'Call us',
    },
  },
  ru: {
    meta: {
      title: 'Экзотические животные - рептилии на продажу | NS Reptiles',
      description:
        'Здоровые рептилии на продажу - бородатые агамы, леопардовые гекконы, королевские питоны, маисовые полозы и тарантулы. Питомник NS Reptiles, Нови Сад.',
      ogDescription: 'Здоровые бородатые агамы, гекконы, питоны и тарантулы из питомника NS Reptiles, Нови Сад.',
    },
    h1: 'Экзотические животные',
    lead: 'Здоровые, правильно выкормленные рептилии, готовые к новому дому - выращенные у нас или полученные от проверенных заводчиков из Сербии и региона.',
    intro:
      'В питомнике <strong>NS Reptiles</strong> мы работаем исключительно с видами, которых лично вырастили или получили от проверенных заводчиков. Для каждого вида мы подготовили подробное руководство с рекомендациями по оборудованию и уходу, чтобы ваш новый питомец с первого дня имел правильные условия.',
    beginner: 'Для начинающих',
    view: 'Подробнее о виде',
    species: { one: 'вид', few: 'вида', many: 'видов', other: 'вида' },
    starter: {
      title: 'Полные стартовые наборы',
      text: 'К каждому животному мы предлагаем готовый стартовый набор - террариум, освещение, обогрев, подложку и декорации, всё адаптировано под конкретный вид. Идеально, если вы только начинаете.',
      cta: 'Смотреть наборы',
    },
    faqTitle: 'Всё о <b>рептилиях</b>',
    cta: {
      title: 'Найдите своего <b>питомца</b>',
      text: 'Напишите нам, какой вид вас интересует - мы с удовольствием проконсультируем вас по уходу, оборудованию и наличию.',
      call: 'Позвонить нам',
    },
  },
} satisfies L<unknown>;

export interface Animal {
  /** srpska putanja strane vrste; bez nje kartica nije link */
  href?: string;
  img: string;
  latin: string;
  beginner?: boolean;
  name: L;
  text: L;
}

export const ANIMAL_GROUPS: { id: string; title: L; animals: Animal[] }[] = [
  {
    id: 'gusteri',
    title: { sr: 'Gušteri', en: 'Lizards', ru: 'Ящерицы' },
    animals: [
      {
        href: '/zivotinje/bradata-agama.html',
        img: '/style/img/gallery/2.jpg',
        latin: 'Pogona vitticeps',
        beginner: true,
        name: { sr: 'Bradata agama', en: 'Bearded dragon', ru: 'Бородатая агама' },
        text: {
          sr: 'Jedna od najpopularnijih vrsta guštera kod nas i izuzetno pogodna za početnike. Inteligentne i izrazito prijateljski nastrojene prema ljudima.',
          en: 'One of the most popular lizard species and extremely suitable for beginners. Intelligent and remarkably friendly towards people.',
          ru: 'Одна из самых популярных ящериц и отличный выбор для начинающих. Умные и очень дружелюбные по отношению к людям.',
        },
      },
      {
        href: '/zivotinje/leopard-gekon.html',
        img: '/style/img/gallery/3.jpg',
        latin: 'Eublepharis macularius',
        beginner: true,
        name: { sr: 'Leopard gekon', en: 'Leopard gecko', ru: 'Леопардовый геккон' },
        text: {
          sr: 'Najčešća vrsta gekona na našim prostorima i idealan ljubimac za početnike. Lak za održavanje, miran i retko kada ujeda.',
          en: 'The most common gecko species in our region and an ideal pet for beginners. Easy to maintain, calm and rarely bites.',
          ru: 'Самый распространённый вид геккона и идеальный питомец для начинающих. Прост в содержании, спокойный и редко кусается.',
        },
      },
      {
        href: '/zivotinje/kineska-vodena-agama.html',
        img: '/style/img/gallery/13.jpg',
        latin: 'Physignathus cocincinus',
        name: { sr: 'Kineski vodeni zmaj', en: 'Chinese water dragon', ru: 'Китайский водяной дракон' },
        text: {
          sr: 'Umiljat i miran gušter koji se lako pripitomljava, izgledom podseća na iguanu. Zahteva prostran terarijum sa mnogo granja.',
          en: 'An affectionate and calm lizard that tames easily, resembling an iguana in appearance. Requires a spacious terrarium with plenty of branches.',
          ru: 'Ласковая и спокойная ящерица, которая легко приручается, внешне напоминает игуану. Требует просторный террариум с большим количеством веток.',
        },
      },
      {
        href: '/zivotinje/debelorepi-gekon.html',
        img: '/style/img/gallery/10.jpg',
        latin: 'Hemitheconyx caudicinctus',
        beginner: true,
        name: { sr: 'Debelorepi gekon', en: 'African fat-tailed gecko', ru: 'Толстохвостый геккон' },
        text: {
          sr: 'Nisu toliko popularni kao leopard gekoni, ali su podjednako dobar izbor za početnike. Ostaju relativno mali i ne zahtevaju zahtevnu negu.',
          en: "Not as popular as leopard geckos, but an equally good choice for beginners. They stay relatively small and don't require demanding care.",
          ru: 'Не так популярны, как леопардовые гекконы, но одинаково хороший выбор для начинающих. Остаются относительно маленькими и не требуют сложного ухода.',
        },
      },
      {
        href: '/zivotinje/crested-gekon.html',
        img: '/style/img/gallery/14.jpg',
        latin: 'Rhacodactylus ciliatus',
        name: { sr: 'Crested gekon', en: 'Crested gecko', ru: 'Реснитчатый геккон' },
        text: {
          sr: 'Popularan izbor zbog male veličine, atraktivnog izgleda i poslušne prirode. Noćna je životinja i ne traži grejnu lampu na sobnoj temperaturi.',
          en: "A popular choice due to its small size, attractive appearance and docile nature. It's nocturnal and doesn't need a heat lamp at room temperature.",
          ru: 'Популярный выбор благодаря небольшому размеру, привлекательной внешности и послушному характеру. Ведёт ночной образ жизни и не нуждается в обогревательной лампе при комнатной температуре.',
        },
      },
    ],
  },
  {
    id: 'zmije',
    title: { sr: 'Zmije', en: 'Snakes', ru: 'Змеи' },
    animals: [
      {
        href: '/zivotinje/loptasti-piton.html',
        img: '/style/img/gallery/7.jpg',
        latin: 'Python regius',
        beginner: true,
        name: { sr: 'Loptasti piton', en: 'Ball python', ru: 'Королевский питон' },
        text: {
          sr: 'Odličan izbor za početnike među vlasnicima zmija. Obično narastu do 150 cm, prilično su poslušni i laki za rukovanje.',
          en: 'An excellent choice for beginners among snake owners. They usually grow up to 150 cm, are quite docile and easy to handle.',
          ru: 'Отличный выбор для начинающих владельцев змей. Обычно вырастают до 150 см, довольно послушны и легки в обращении.',
        },
      },
      {
        href: '/zivotinje/kukuruzni-smuk.html',
        img: '/style/img/gallery/9.jpg',
        latin: 'Pantherophis guttatus',
        beginner: true,
        name: { sr: 'Kukuruzni smuk', en: 'Corn snake', ru: 'Маисовый полоз' },
        text: {
          sr: 'Jedna od najpopularnijih vrsta kod nas. Traži jednostavan terarijum i uslove koje je lako obezbediti. Raste od 1.2 m do 1.6 m.',
          en: 'One of the most popular species. Requires a simple terrarium and conditions that are easy to provide. Grows from 1.2 m to 1.6 m.',
          ru: 'Один из самых популярных видов змей. Требует простой террариум и условия, которые легко обеспечить. Вырастает от 1,2 м до 1,6 м.',
        },
      },
    ],
  },
  {
    id: 'tarantule',
    title: { sr: 'Tarantule', en: 'Tarantulas', ru: 'Тарантулы' },
    animals: [
      {
        img: '/style/img/tarantule/davus-pentaloris.png',
        latin: 'Davus pentaloris',
        name: { sr: 'Gvatemalska tigrasta tarantula', en: 'Guatemalan tiger rump tarantula', ru: 'Гватемальский тигровый тарантул' },
        text: {
          sr: 'Mirna i pitoma tarantula idealna za početnike. Poznata po prelepim tigrasto-narandžastim oznakama na abdomenu.',
          en: 'A calm and docile tarantula ideal for beginners. Known for its beautiful tiger-orange markings on the abdomen.',
          ru: 'Спокойный и послушный тарантул, идеальный для начинающих. Известен красивыми тигрово-оранжевыми отметинами на брюшке.',
        },
      },
      {
        img: '/style/img/tarantule/phormictopus-auratus.png',
        latin: 'Phormictopus auratus',
        name: { sr: 'Kubanska zlatna tarantula', en: 'Cuban gold tarantula', ru: 'Кубинский золотой тарантул' },
        text: {
          sr: 'Atraktivna tarantula sa Kube poznata po zlatno-bronzanom sjaju. Aktivna vrsta sa impresivnim izgledom.',
          en: 'An attractive tarantula from Cuba known for its golden-bronze sheen. An active species with an impressive appearance.',
          ru: 'Привлекательный тарантул с Кубы, известный золотисто-бронзовым блеском. Активный вид с впечатляющей внешностью.',
        },
      },
      {
        img: '/style/img/tarantule/acanthoscurria-geniculata.png',
        latin: 'Acanthoscurria geniculata',
        name: { sr: 'Brazilska belonoga tarantula', en: 'Brazilian whiteknee tarantula', ru: 'Бразильский белоногий тарантул' },
        text: {
          sr: 'Impozantna tarantula sa belim prugama na nogama. Aktivna i brzorastuća vrsta, popularna među ljubiteljima.',
          en: 'An imposing tarantula with white stripes on its legs. An active and fast-growing species, popular among enthusiasts.',
          ru: 'Впечатляющий тарантул с белыми полосами на ногах. Активный и быстрорастущий вид, популярный среди любителей.',
        },
      },
      {
        img: '/style/img/tarantule/brachypelma-boehmei.png',
        latin: 'Brachypelma boehmei',
        name: { sr: 'Meksička vatrena tarantula', en: 'Mexican fireleg tarantula', ru: 'Мексиканский огненный тарантул' },
        text: {
          sr: 'Prelepa tarantula sa jarko crveno-narandžastim nogama. Mirna vrsta, odlična za početnike.',
          en: 'A beautiful tarantula with bright red-orange legs. A calm species, great for beginners.',
          ru: 'Красивый тарантул с ярко красно-оранжевыми ногами. Спокойный вид, отлично подходит для начинающих.',
        },
      },
      {
        img: '/style/img/tarantule/brachypelma-emilia.png',
        latin: 'Brachypelma emilia',
        name: { sr: 'Meksička crvena tarantula', en: 'Mexican redleg tarantula', ru: 'Мексиканский красный тарантул' },
        text: {
          sr: 'Klasična meksička tarantula sa prepoznatljivim crno-crvenim šarama. Mirna i dugovečna vrsta.',
          en: 'A classic Mexican tarantula with distinctive black and red patterns. A calm and long-lived species.',
          ru: 'Классический мексиканский тарантул с узнаваемыми чёрно-красными узорами. Спокойный и долгоживущий вид.',
        },
      },
    ],
  },
];

export const ANIMALS_FAQ: { q: L; a: L }[] = [
  {
    q: {
      sr: 'Da li su reptili dobri ljubimci za početnike?',
      en: 'Are reptiles good pets for beginners?',
      ru: 'Подходят ли рептилии для начинающих?',
    },
    a: {
      sr: 'Da, mnogi reptili su odlični za početnike. Leopard gekoni, crested gekoni i bradate agame su među najlakšim za držanje. Zahtevaju manje svakodnevne pažnje od pasa ili mačaka, ali traže pravilnu opremu - terarijum odgovarajuće veličine, grejanje, UVB osvetljenje i odgovarajuću ishranu.',
      en: 'Yes, many reptiles are excellent for beginners. Leopard geckos, crested geckos and bearded dragons are among the easiest to keep. They require less daily attention than dogs or cats, but do need proper equipment - a terrarium of appropriate size, heating, UVB lighting and a suitable diet.',
      ru: 'Да, многие рептилии отлично подходят для начинающих. Леопардовые гекконы, реснитчатые гекконы и бородатые агамы - одни из самых простых в содержании. Они требуют меньше ежедневного внимания, чем собаки или кошки, но нуждаются в правильном оборудовании - террариуме подходящего размера, обогреве, UVB-освещении и соответствующем питании.',
    },
  },
  {
    q: {
      sr: 'Koliko često treba hraniti reptile?',
      en: 'How often should reptiles be fed?',
      ru: 'Как часто нужно кормить рептилий?',
    },
    a: {
      sr: 'Mladunci se generalno hrane svakodnevno, a odrasle jedinke 2-4 puta nedeljno, zavisno od vrste. Bradate agame jedu svaki dan (salatu i insekte), loptasti pitoni jednom u 7-14 dana, a leopard gekoni svaki drugi dan. Hranu uvek posipajte kalcijumom.',
      en: 'Juveniles are generally fed daily, while adults eat 2-4 times a week depending on the species. Bearded dragons eat every day (salad and insects), ball pythons once every 7-14 days, and leopard geckos every other day. Always dust food with calcium.',
      ru: 'Молодые особи обычно кормятся ежедневно, а взрослые - 2-4 раза в неделю, в зависимости от вида. Бородатые агамы едят каждый день (салат и насекомых), королевские питоны - раз в 7-14 дней, а леопардовые гекконы - через день. Корм всегда посыпайте кальцием.',
    },
  },
  {
    q: {
      sr: 'Da li se reptili vezuju za vlasnika?',
      en: 'Do reptiles bond with their owners?',
      ru: 'Привязываются ли рептилии к хозяину?',
    },
    a: {
      sr: 'Reptili ne ispoljavaju emocije poput sisara, ali se naviknu na kontakt sa vlasnikom i postaju mirni pri rukovanju. Bradate agame su posebno poznate po toleranciji i uživanju u kontaktu. Redovno nežno rukovanje od mladog uzrasta pomaže.',
      en: "Reptiles don't express emotions like mammals, but they do get used to contact with their owner and become calm during handling. Bearded dragons are particularly known for their tolerance and enjoyment of contact. Regular gentle handling from a young age helps.",
      ru: 'Рептилии не проявляют эмоции так, как млекопитающие, но привыкают к контакту с хозяином и становятся спокойными при обращении. Бородатые агамы особенно известны своей терпимостью и удовольствием от контакта. Регулярное бережное обращение с раннего возраста помогает.',
    },
  },
  {
    q: { sr: 'Koji je najbolji prvi reptil?', en: 'What is the best first reptile?', ru: 'Какая лучшая первая рептилия?' },
    a: {
      sr: 'Leopard gekon - miran, jede insekte, živi 15-20 godina. Bradata agama - društvena, svaštojed, odlična za porodice. Crested gekon - ne treba mu grejna lampa na sobnoj temperaturi i hrani se gotovom mešavinom.',
      en: "Leopard gecko - calm, eats insects, lives 15-20 years. Bearded dragon - social, omnivore, great for families. Crested gecko - doesn't need a heat lamp at room temperature and feeds on a ready-made mix.",
      ru: 'Леопардовый геккон - спокойный, ест насекомых, живёт 15-20 лет. Бородатая агама - общительная, всеядная, отлично подходит для семей. Реснитчатый геккон - не нуждается в обогревательной лампе при комнатной температуре и питается готовой смесью.',
    },
  },
  {
    q: { sr: 'Koliko žive reptili?', en: 'How long do reptiles live?', ru: 'Сколько живут рептилии?' },
    a: {
      sr: 'Životni vek varira po vrstama: leopard gekon 15-20 godina, bradata agama 8-12, loptasti piton 20-30, kukuruzni smuk 15-20, a kornjače mogu živeti 50+ godina. Pravilna nega i ishrana direktno utiču na dužinu života.',
      en: 'Lifespan varies by species: leopard gecko 15-20 years, bearded dragon 8-12, ball python 20-30, corn snake 15-20, and tortoises can live 50+ years. Proper care and diet directly affect lifespan.',
      ru: 'Продолжительность жизни зависит от вида: леопардовый геккон 15-20 лет, бородатая агама 8-12, королевский питон 20-30, маисовый полоз 15-20, а черепахи могут жить 50+ лет. Правильный уход и питание напрямую влияют на продолжительность жизни.',
    },
  },
];
