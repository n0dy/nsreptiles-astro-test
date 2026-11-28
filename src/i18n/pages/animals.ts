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
      'U <strong>NS Reptiles</strong> odgajivačnici radimo isključivo sa vrstama koje smo lično odgajili ili preuzeli od proverenih odgajivača. Za svaku vrstu pripremili smo detaljan vodič sa preporukama za opremu i negu, kako bi vaš novi ljubimac od prvog dana imao ispravne uslove. Posebno smo izdvojili <a href="/gekoni.html">gekone</a> i <a href="/zmije.html">zmije</a>.',
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
      'At <strong>NS Reptiles</strong> breeder, we work exclusively with species we have personally bred or sourced from trusted breeders. For each species, we have prepared a detailed guide with equipment and care recommendations, so your new pet has the right conditions from day one. We have separate pages for <a href="/en/geckos.html">geckos</a> and <a href="/en/snakes.html">snakes</a>.',
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
      'В питомнике <strong>NS Reptiles</strong> мы работаем исключительно с видами, которых лично вырастили или получили от проверенных заводчиков. Для каждого вида мы подготовили подробное руководство с рекомендациями по оборудованию и уходу, чтобы ваш новый питомец с первого дня имел правильные условия. Отдельные страницы посвящены <a href="/ru/geckos.html">гекконам</a> и <a href="/ru/snakes.html">змеям</a>.',
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
        href: '/zivotinje/bradataagama.html',
        img: '/style/img/reptili/bradata.webp',
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
        href: '/zivotinje/leopardgekon.html',
        img: '/style/img/reptili/leopard.webp',
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
        href: '/zivotinje/kineskavodenaagama.html',
        img: '/style/img/reptili/vodena.webp',
        latin: 'Physignathus cocincinus',
        name: { sr: 'Kineski vodeni zmaj', en: 'Chinese water dragon', ru: 'Китайский водяной дракон' },
        text: {
          sr: 'Umiljat i miran gušter koji se lako pripitomljava, izgledom podseća na iguanu. Zahteva prostran terarijum sa mnogo granja.',
          en: 'An affectionate and calm lizard that tames easily, resembling an iguana in appearance. Requires a spacious terrarium with plenty of branches.',
          ru: 'Ласковая и спокойная ящерица, которая легко приручается, внешне напоминает игуану. Требует просторный террариум с большим количеством веток.',
        },
      },
      {
        href: '/zivotinje/debelorepigekon.html',
        img: '/style/img/zivotinje/hemitheconyx-caudicinctus.webp',
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
        href: '/zivotinje/crestedgekon.html',
        img: '/style/img/zivotinje/rhacodactylus-ciliatus.webp',
        latin: 'Rhacodactylus ciliatus',
        name: { sr: 'Crested gekon', en: 'Crested gecko', ru: 'Реснитчатый геккон' },
        text: {
          sr: 'Popularan izbor zbog male veličine, atraktivnog izgleda i poslušne prirode. Noćna je životinja i ne traži grejnu lampu na sobnoj temperaturi.',
          en: "A popular choice due to its small size, attractive appearance and docile nature. It's nocturnal and doesn't need a heat lamp at room temperature.",
          ru: 'Популярный выбор благодаря небольшому размеру, привлекательной внешности и послушному характеру. Ведёт ночной образ жизни и не нуждается в обогревательной лампе при комнатной температуре.',
        },
      },
      {
        href: '/zivotinje/gargojlgekon.html',
        img: '/style/img/zivotinje/rhacodactylus-auriculatus.webp',
        latin: 'Rhacodactylus auriculatus',
        beginner: true,
        name: { sr: 'Gargojl gekon', en: 'Gargoyle gecko', ru: 'Геккон-гаргулья' },
        text: {
          sr: 'Gekon sa Nove Kaledonije, nazvan po ispupčenjima na glavi koja podsećaju na rogove. Naraste do oko 20 cm, aktivan je noću i živi 15-20 godina. Hrani se insektima i voćnom kašom, a na sobnoj temperaturi ne traži grejnu lampu.',
          en: 'A gecko from New Caledonia, named after the horn-like bumps on its head. Grows to about 20 cm, is active at night and lives 15-20 years. It eats insects and fruit-based gecko diet, and needs no heat lamp at room temperature.',
          ru: 'Геккон с Новой Каледонии, названный так из-за похожих на рожки выступов на голове. Вырастает примерно до 20 см, активен ночью и живёт 15-20 лет. Питается насекомыми и фруктовой смесью, при комнатной температуре не нуждается в обогревательной лампе.',
        },
      },
      {
        href: '/zivotinje/plavojezicniskink.html',
        img: '/style/img/zivotinje/tiliqua-scincoides.webp',
        latin: 'Tiliqua scincoides',
        beginner: true,
        name: { sr: 'Plavojezični skink', en: 'Blue-tongued skink', ru: 'Синеязыкий сцинк' },
        text: {
          sr: 'Australijski gušter prepoznatljiv po plavom jeziku kojim plaši neprijatelje. Naraste do 50-60 cm, miran je i lako se navikava na ruke, a hrani se povrćem, voćem i insektima.',
          en: 'An Australian lizard known for the blue tongue it flashes to scare off predators. Grows to 50-60 cm, is calm and gets used to handling easily, and eats vegetables, fruit and insects.',
          ru: 'Австралийская ящерица, известная синим языком, которым она отпугивает врагов. Вырастает до 50-60 см, спокойная и легко привыкает к рукам, питается овощами, фруктами и насекомыми.',
        },
      },
      {
        href: '/zivotinje/ogrlicastiguster.html',
        img: '/style/img/zivotinje/crotaphytus-collaris.webp',
        latin: 'Crotaphytus collaris',
        name: { sr: 'Ogrličasti gušter', en: 'Collared lizard', ru: 'Ошейниковая игуана' },
        text: {
          sr: 'Gušter sa stenovitih predela SAD i Meksika, nazvan po crnoj "ogrlici" oko vrata. Brz i aktivan - u bekstvu trči na zadnjim nogama. Traži prostran terarijum, jako grejno mesto i UVB svetlo, a hrani se insektima.',
          en: 'A lizard from the rocky regions of the USA and Mexico, named after the black "collar" around its neck. Fast and active - it runs on its hind legs when fleeing. Needs a spacious terrarium, a hot basking spot and UVB light, and feeds on insects.',
          ru: 'Ящерица из скалистых районов США и Мексики, названная по чёрному "ошейнику" на шее. Быстрая и активная - убегая, бежит на задних лапах. Нуждается в просторном террариуме, жарком месте для обогрева и UVB-освещении, питается насекомыми.',
        },
      },
      {
        href: '/zivotinje/snajderovskink.html',
        img: '/style/img/zivotinje/eumeces-schneiderii.webp',
        latin: 'Eumeces schneiderii',
        beginner: true,
        name: { sr: 'Šnajderov skink', en: "Schneider's skink", ru: 'Сцинк Шнейдера' },
        text: {
          sr: 'Skink iz suvih predela severne Afrike i Bliskog istoka, prepoznatljiv po narandžastim tačkama. Naraste do oko 40 cm, rado se ukopava u peskovitu podlogu i živi i do 20 godina. Miran je i hrani se uglavnom insektima.',
          en: 'A skink from the dry regions of North Africa and the Middle East, recognizable by its orange spots. Grows to about 40 cm, likes to burrow in sandy substrate and can live up to 20 years. Calm, it feeds mostly on insects.',
          ru: 'Сцинк из засушливых районов Северной Африки и Ближнего Востока, узнаваемый по оранжевым пятнам. Вырастает примерно до 40 см, любит зарываться в песчаный субстрат и может жить до 20 лет. Спокойный, питается в основном насекомыми.',
        },
      },
      {
        href: '/zivotinje/tuznigekon.html',
        img: '/style/img/zivotinje/lepidodactylus-lugubris.webp',
        latin: 'Lepidodactylus lugubris',
        beginner: true,
        name: { sr: 'Tužni gekon', en: 'Mourning gecko', ru: 'Траурный геккон' },
        text: {
          sr: 'Mali gekon (8-10 cm) sa ostrva jugoistočne Azije i Pacifika. Gotovo sve jedinke su ženke koje nose jaja bez mužjaka, pa se lako razmnožavaju i u terarijumu. Aktivan noću, voli biljni terarijum, a hrani se sitnim insektima i voćnom kašom.',
          en: 'A small gecko (8-10 cm) from the islands of Southeast Asia and the Pacific. Almost all individuals are females that lay eggs without males, so they breed easily in a terrarium. Active at night, it likes planted terrariums and eats small insects and fruit-based gecko diet.',
          ru: 'Маленький геккон (8-10 см) с островов Юго-Восточной Азии и Тихого океана. Почти все особи - самки, откладывающие яйца без самцов, поэтому легко размножаются и в террариуме. Активен ночью, любит террариумы с растениями, питается мелкими насекомыми и фруктовой смесью.',
        },
      },
      {
        href: '/zivotinje/elegantnigekon.html',
        img: '/style/img/zivotinje/stenodactylus-sthenodactylus.webp',
        latin: 'Stenodactylus sthenodactylus',
        name: { sr: 'Elegantni gekon', en: 'Elegant gecko', ru: 'Короткопалый геккон' },
        text: {
          sr: 'Sitni pustinjski gekon (do oko 10 cm) iz severne Afrike i Bliskog istoka, sa krupnim očima i tankim prstima bez lepljivih jastučića. Živi na zemlji, aktivan je noću i traži peskovitu podlogu i suv terarijum. Hrani se sitnim insektima.',
          en: 'A tiny desert gecko (up to about 10 cm) from North Africa and the Middle East, with large eyes and thin toes without sticky pads. It lives on the ground, is active at night and needs sandy substrate and a dry terrarium. Feeds on small insects.',
          ru: 'Маленький пустынный геккон (примерно до 10 см) из Северной Африки и Ближнего Востока, с крупными глазами и тонкими пальцами без липких подушечек. Живёт на земле, активен ночью, нуждается в песчаном субстрате и сухом террариуме. Питается мелкими насекомыми.',
        },
      },
    ],
  },
  {
    id: 'zmije',
    title: { sr: 'Zmije', en: 'Snakes', ru: 'Змеи' },
    animals: [
      {
        href: '/zivotinje/loptastipiton.html',
        img: '/style/img/reptili/piton.webp',
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
        href: '/zivotinje/kukuruznismuk.html',
        img: '/style/img/reptili/smuk.webp',
        latin: 'Pantherophis guttatus',
        beginner: true,
        name: { sr: 'Kukuruzni smuk', en: 'Corn snake', ru: 'Маисовый полоз' },
        text: {
          sr: 'Jedna od najpopularnijih vrsta kod nas. Traži jednostavan terarijum i uslove koje je lako obezbediti. Raste od 1.2 m do 1.6 m.',
          en: 'One of the most popular species. Requires a simple terrarium and conditions that are easy to provide. Grows from 1.2 m to 1.6 m.',
          ru: 'Один из самых популярных видов змей. Требует простой террариум и условия, которые легко обеспечить. Вырастает от 1,2 м до 1,6 м.',
        },
      },
      {
        href: '/zivotinje/hognozzmija.html',
        img: '/style/img/zivotinje/heterodon-nasicus.webp',
        latin: 'Heterodon nasicus',
        beginner: true,
        name: { sr: 'Zapadna hognoz zmija', en: 'Western hognose snake', ru: 'Западный свиноносый уж' },
        text: {
          sr: 'Mala zmija iz Severne Amerike sa podignutom njuškom kojom kopa po podlozi. Retko prelazi 60-90 cm i živi 15-20 godina. Kad se uplaši, širi vrat, sikće, a ponekad se pravi mrtva.',
          en: 'A small North American snake with an upturned snout it uses to dig through substrate. Rarely exceeds 60-90 cm and lives 15-20 years. When scared, it flattens its neck, hisses and sometimes plays dead.',
          ru: 'Небольшая змея из Северной Америки со вздёрнутым носом, которым она роется в субстрате. Редко превышает 60-90 см и живёт 15-20 лет. Испугавшись, раздувает шею, шипит, а иногда притворяется мёртвой.',
        },
      },
      {
        href: '/zivotinje/kraljevskazmija.html',
        img: '/style/img/zivotinje/lampropeltis-getula.webp',
        latin: 'Lampropeltis getula',
        beginner: true,
        name: { sr: 'Kraljevska zmija', en: 'Common kingsnake', ru: 'Королевская змея' },
        text: {
          sr: 'Severnoamerička zmija crne boje sa svetlim prstenovima, duga 90-150 cm. Ime je dobila jer u prirodi lovi i druge zmije, uključujući otrovne. Neotrovna je, lako se hrani glodarima i živi 15-20 godina.',
          en: 'A North American snake, black with light bands, 90-150 cm long. It got its name because in the wild it also hunts other snakes, including venomous ones. Non-venomous, it feeds readily on rodents and lives 15-20 years.',
          ru: 'Североамериканская змея чёрного цвета со светлыми кольцами, длиной 90-150 см. Название получила за то, что в природе охотится и на других змей, в том числе ядовитых. Неядовитая, охотно ест грызунов и живёт 15-20 лет.',
        },
      },
      {
        href: '/zivotinje/meksickacrnakraljevskazmija.html',
        img: '/style/img/zivotinje/lampropeltis-getula-nigrita.webp',
        latin: 'Lampropeltis getula nigrita',
        beginner: true,
        name: { sr: 'Meksička crna kraljevska zmija', en: 'Mexican black kingsnake', ru: 'Мексиканская чёрная королевская змея' },
        text: {
          sr: 'Potpuno crna kraljevska zmija sa sjajnim krljuštima, iz severozapadnog Meksika i Arizone. Naraste do oko 1-1.2 m, neotrovna je i laka za držanje, a hrani se glodarima.',
          en: 'A completely black kingsnake with glossy scales, from northwestern Mexico and Arizona. Grows to about 1-1.2 m, is non-venomous and easy to keep, and feeds on rodents.',
          ru: 'Полностью чёрная королевская змея с блестящей чешуёй из северо-западной Мексики и Аризоны. Вырастает примерно до 1-1,2 м, неядовитая и простая в содержании, питается грызунами.',
        },
      },
      {
        href: '/zivotinje/mlecnazmija.html',
        img: '/style/img/zivotinje/lampropeltis-triangulum.webp',
        latin: 'Lampropeltis triangulum',
        beginner: true,
        name: { sr: 'Mlečna zmija', en: 'Milk snake', ru: 'Молочная змея' },
        text: {
          sr: 'Neotrovna zmija iz Severne i Srednje Amerike čije crveno-crno-bele šare oponašaju otrovnu koralnu zmiju i tako plaše grabljivice. U zavisnosti od podvrste naraste 60-120 cm. Laka za držanje, hrani se glodarima.',
          en: 'A non-venomous snake from North and Central America whose red, black and white bands mimic the venomous coral snake to scare off predators. Depending on the subspecies it grows 60-120 cm. Easy to keep, it feeds on rodents.',
          ru: 'Неядовитая змея из Северной и Центральной Америки, чьи красно-чёрно-белые кольца подражают ядовитому коралловому аспиду и отпугивают хищников. В зависимости от подвида вырастает до 60-120 см. Проста в содержании, питается грызунами.',
        },
      },
      {
        href: '/zivotinje/tepihpiton.html',
        img: '/style/img/zivotinje/morelia-spilota.webp',
        latin: 'Morelia spilota',
        name: { sr: 'Tepih piton', en: 'Carpet python', ru: 'Ромбический питон' },
        text: {
          sr: 'Piton iz Australije i Nove Gvineje sa šarom koja podseća na tepih. Najčešće naraste 2-2.5 m, rado se penje i živi 20 i više godina. Neotrovan je i ubija davljenjem, a u terarijumu traži visinu i granje.',
          en: 'A python from Australia and New Guinea with a pattern that resembles a carpet. Usually grows to 2-2.5 m, likes to climb and lives 20+ years. Non-venomous, it kills by constriction and needs height and branches in its terrarium.',
          ru: 'Питон из Австралии и Новой Гвинеи с узором, напоминающим ковёр. Обычно вырастает до 2-2,5 м, любит лазать и живёт 20 лет и больше. Неядовитый, убивает удушением, в террариуме нуждается в высоте и ветках.',
        },
      },
    ],
  },
  {
    id: 'tarantule',
    title: { sr: 'Tarantule', en: 'Tarantulas', ru: 'Тарантулы' },
    animals: [
      {
        href: '/zivotinje/gvatemalskatigrastatarantula.html',
        img: '/style/img/tarantule/davus-pentaloris.webp',
        latin: 'Davus pentaloris',
        name: { sr: 'Gvatemalska tigrasta tarantula', en: 'Guatemalan tiger rump tarantula', ru: 'Гватемальский тигровый тарантул' },
        text: {
          sr: 'Mirna i pitoma tarantula idealna za početnike. Poznata po prelepim tigrasto-narandžastim oznakama na abdomenu.',
          en: 'A calm and docile tarantula ideal for beginners. Known for its beautiful tiger-orange markings on the abdomen.',
          ru: 'Спокойный и послушный тарантул, идеальный для начинающих. Известен красивыми тигрово-оранжевыми отметинами на брюшке.',
        },
      },
      {
        href: '/zivotinje/kubanskazlatnatarantula.html',
        img: '/style/img/tarantule/phormictopus-auratus.webp',
        latin: 'Phormictopus auratus',
        name: { sr: 'Kubanska zlatna tarantula', en: 'Cuban gold tarantula', ru: 'Кубинский золотой тарантул' },
        text: {
          sr: 'Atraktivna tarantula sa Kube poznata po zlatno-bronzanom sjaju. Aktivna vrsta sa impresivnim izgledom.',
          en: 'An attractive tarantula from Cuba known for its golden-bronze sheen. An active species with an impressive appearance.',
          ru: 'Привлекательный тарантул с Кубы, известный золотисто-бронзовым блеском. Активный вид с впечатляющей внешностью.',
        },
      },
      {
        href: '/zivotinje/brazilskabelonogatarantula.html',
        img: '/style/img/tarantule/acanthoscurria-geniculata.webp',
        latin: 'Acanthoscurria geniculata',
        name: { sr: 'Brazilska belonoga tarantula', en: 'Brazilian whiteknee tarantula', ru: 'Бразильский белоногий тарантул' },
        text: {
          sr: 'Impozantna tarantula sa belim prugama na nogama. Aktivna i brzorastuća vrsta, popularna među ljubiteljima.',
          en: 'An imposing tarantula with white stripes on its legs. An active and fast-growing species, popular among enthusiasts.',
          ru: 'Впечатляющий тарантул с белыми полосами на ногах. Активный и быстрорастущий вид, популярный среди любителей.',
        },
      },
      {
        href: '/zivotinje/meksickavatrenatarantula.html',
        img: '/style/img/tarantule/brachypelma-boehmei.webp',
        latin: 'Brachypelma boehmei',
        name: { sr: 'Meksička vatrena tarantula', en: 'Mexican fireleg tarantula', ru: 'Мексиканский огненный тарантул' },
        text: {
          sr: 'Prelepa tarantula sa jarko crveno-narandžastim nogama. Mirna vrsta, odlična za početnike.',
          en: 'A beautiful tarantula with bright red-orange legs. A calm species, great for beginners.',
          ru: 'Красивый тарантул с ярко красно-оранжевыми ногами. Спокойный вид, отлично подходит для начинающих.',
        },
      },
      {
        href: '/zivotinje/meksickacrvenatarantula.html',
        img: '/style/img/tarantule/brachypelma-emilia.webp',
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
  {
    id: 'vodozemci',
    title: { sr: 'Vodozemci', en: 'Amphibians', ru: 'Земноводные' },
    animals: [
      {
        href: '/zivotinje/pacmanzaba.html',
        img: '/style/img/zivotinje/ceratophrys.webp',
        latin: 'Ceratophrys sp.',
        name: { sr: 'Pacman žaba', en: 'Pacman frog', ru: 'Рогатка (пакман)' },
        text: {
          sr: 'Južnoamerička rogata žaba ogromnih usta koja vreba plen ukopana u vlažnu podlogu. Malo se kreće i živi 10 i više godina, ali nije za držanje u rukama jer ima osetljivu kožu i ume da ugrize.',
          en: 'A South American horned frog with a huge mouth that ambushes prey while buried in moist substrate. It moves little and lives 10+ years, but is not for handling - its skin is sensitive and it can bite.',
          ru: 'Южноамериканская рогатая лягушка с огромным ртом, которая подстерегает добычу, зарывшись во влажный субстрат. Мало двигается и живёт 10 лет и больше, но не для того, чтобы брать в руки - у неё чувствительная кожа и она может укусить.',
        },
      },
    ],
  },
  {
    id: 'beskicmenjaci',
    title: { sr: 'Beskičmenjaci', en: 'Invertebrates', ru: 'Беспозвоночные' },
    animals: [
      {
        href: '/zivotinje/dzinovskaafrickastonoga.html',
        img: '/style/img/zivotinje/archispirostreptus-gigas.webp',
        latin: 'Archispirostreptus gigas',
        beginner: true,
        name: { sr: 'Džinovska afrička stonoga', en: 'Giant African millipede', ru: 'Гигантская африканская многоножка' },
        text: {
          sr: 'Jedna od najvećih stonoga na svetu - naraste do oko 30 cm i živi 7-10 godina. Mirna i bezopasna, hrani se trulim lišćem, drvetom i povrćem, a traži dubok i vlažan supstrat.',
          en: 'One of the largest millipedes in the world - grows to about 30 cm and lives 7-10 years. Calm and harmless, it feeds on decaying leaves, wood and vegetables, and needs deep, moist substrate.',
          ru: 'Одна из самых крупных многоножек в мире - вырастает примерно до 30 см и живёт 7-10 лет. Спокойная и безобидная, питается опавшими листьями, древесиной и овощами, нуждается в глубоком влажном субстрате.',
        },
      },
      {
        href: '/zivotinje/azijskisumskiskorpion.html',
        img: '/style/img/zivotinje/heterometrus-petersii.webp',
        latin: 'Heterometrus petersii',
        name: { sr: 'Azijski šumski škorpion', en: 'Asian forest scorpion', ru: 'Азиатский лесной скорпион' },
        text: {
          sr: 'Krupan crni škorpion iz tropskih šuma jugoistočne Azije, dug oko 10 cm, sa snažnim kleštima. Otrov mu je blag, ali je odbrambeno nastrojen i nije za držanje u rukama. Traži vlažnu podlogu u kojoj kopa skrovišta i hrani se insektima.',
          en: 'A large black scorpion from the tropical forests of Southeast Asia, about 10 cm long, with powerful claws. Its venom is mild, but it is defensive and not for handling. Needs moist substrate to dig burrows in and feeds on insects.',
          ru: 'Крупный чёрный скорпион из тропических лесов Юго-Восточной Азии, длиной около 10 см, с мощными клешнями. Яд слабый, но он склонен защищаться и не для того, чтобы брать в руки. Нуждается во влажном субстрате для рытья нор, питается насекомыми.',
        },
      },
      {
        href: '/zivotinje/dzinovskiplaviskorpion.html',
        img: '/style/img/zivotinje/heterometrus-spinifer.webp',
        latin: 'Heterometrus spinifer',
        name: { sr: 'Džinovski plavi škorpion', en: 'Giant blue scorpion', ru: 'Гигантский синий скорпион' },
        text: {
          sr: 'Jedan od najvećih škorpiona na svetu - naraste do oko 12 cm, a pod svetlom mu oklop ima plavo-zeleni odsjaj. Živi u vlažnim šumama jugoistočne Azije. Otrov je blag, a za odbranu više koristi klešta nego žaoku.',
          en: 'One of the largest scorpions in the world - grows to about 12 cm, and its shell shows a blue-green sheen under light. Lives in the humid forests of Southeast Asia. Its venom is mild, and it relies on its claws more than its sting for defence.',
          ru: 'Один из крупнейших скорпионов в мире - вырастает примерно до 12 см, а под светом его панцирь отливает сине-зелёным. Обитает во влажных лесах Юго-Восточной Азии. Яд слабый, для защиты чаще использует клешни, чем жало.',
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
      sr: 'Životni vek varira po vrstama: leopard gekon 15-20 godina, bradata agama 10-15, loptasti piton 20-30, kukuruzni smuk 15-20, a kornjače mogu živeti 50+ godina. Pravilna nega i ishrana direktno utiču na dužinu života.',
      en: 'Lifespan varies by species: leopard gecko 15-20 years, bearded dragon 10-15, ball python 20-30, corn snake 15-20, and tortoises can live 50+ years. Proper care and diet directly affect lifespan.',
      ru: 'Продолжительность жизни зависит от вида: леопардовый геккон 15-20 лет, бородатая агама 10-15, королевский питон 20-30, маисовый полоз 15-20, а черепахи могут жить 50+ лет. Правильный уход и питание напрямую влияют на продолжительность жизни.',
    },
  },
];

// Strana /zmije.html: ista komponenta kao zivotinje, samo grupa zmija i svoj tekst
export const SNAKES_TEXT = {
  sr: {
    meta: {
      title: 'Zmije prodaja - loptasti piton i kukuruzni smuk | NS Reptiles',
      description:
        'Prodaja zmija iz domaćeg uzgoja u Novom Sadu: kukuruzni smuk od 6.000 din, loptasti piton od 12.000 din. Mirne zmije za početnike, starter kompleti i saveti.',
      ogDescription: 'Kukuruzni smuk i loptasti piton iz odgajivačnice NS Reptiles, Novi Sad.',
    },
    h1: 'Zmije na prodaju',
    lead: 'Kukuruzni smukovi i loptasti pitoni iz domaćeg uzgoja - mirne zmije, navikle na rukovanje, pogodne i za početnike.',
    intro:
      'U <strong>NS Reptiles</strong> odgajivačnici u Novom Sadu prodajemo dve vrste zmija koje preporučujemo i početnicima: <strong>kukuruznog smuka</strong> (od 6.000 din) i <strong>loptastog pitona</strong> (od 12.000 din). Obe su neotrovne, mirne i lake za držanje. Uz zmiju možete uzeti i starter komplet sa terarijumom i opremom, a za svaku vrstu imamo detaljan vodič za negu. Zmije se preuzimaju lično u Novom Sadu, uz dogovor za Beograd i okolinu.',
    faqTitle: 'Česta pitanja o <b>zmijama</b>',
  },
  en: {
    meta: {
      title: 'Snakes for Sale - Ball Python and Corn Snake | NS Reptiles',
      description:
        'Captive-bred snakes for sale in Novi Sad: corn snakes from 6,000 RSD, ball pythons from 12,000 RSD. Calm beginner snakes, starter kits and care advice.',
      ogDescription: 'Corn snakes and ball pythons from the NS Reptiles breeding facility, Novi Sad.',
    },
    h1: 'Snakes for sale',
    lead: 'Captive-bred corn snakes and ball pythons - calm snakes used to handling, suitable for beginners too.',
    intro:
      'At the <strong>NS Reptiles</strong> breeding facility in Novi Sad we sell two snake species we also recommend to beginners: the <strong>corn snake</strong> (from 6,000 RSD) and the <strong>ball python</strong> (from 12,000 RSD). Both are non-venomous, calm and easy to keep. You can take a starter kit with a terrarium and equipment along with the snake, and we have a detailed care guide for each species. Snakes are collected in person in Novi Sad, or by arrangement for Belgrade and the surrounding area.',
    faqTitle: 'Frequently asked questions about <b>snakes</b>',
  },
  ru: {
    meta: {
      title: 'Змеи на продажу: королевский питон, маисовый полоз | NS Reptiles',
      description:
        'Продажа змей домашнего разведения в Нови-Саде: маисовый полоз от 6 000 RSD, королевский питон от 12 000 RSD. Спокойные змеи для начинающих и стартовые наборы.',
      ogDescription: 'Маисовые полозы и королевские питоны из питомника NS Reptiles, Нови-Сад.',
    },
    h1: 'Змеи на продажу',
    lead: 'Маисовые полозы и королевские питоны домашнего разведения - спокойные, приученные к рукам змеи, подходящие и для начинающих.',
    intro:
      'В питомнике <strong>NS Reptiles</strong> в Нови-Саде мы продаём два вида змей, которые рекомендуем и начинающим: <strong>маисового полоза</strong> (от 6 000 RSD) и <strong>королевского питона</strong> (от 12 000 RSD). Обе змеи неядовитые, спокойные и простые в содержании. Вместе со змеёй можно взять стартовый набор с террариумом и оборудованием, а для каждого вида у нас есть подробное руководство по уходу. Змей забирают лично в Нови-Саде, по договорённости возможна передача в Белграде и окрестностях.',
    faqTitle: 'Частые вопросы о <b>змеях</b>',
  },
} satisfies L<unknown>;

export const SNAKES_FAQ: { q: L; a: L }[] = [
  {
    q: { sr: 'Koja zmija je najbolja za početnike?', en: 'Which snake is best for beginners?', ru: 'Какая змея лучше всего подходит начинающим?' },
    a: {
      sr: 'Kukuruzni smuk i loptasti piton. Obe vrste su neotrovne, mirne, dobro podnose rukovanje i ne traže komplikovanu opremu. Kukuruzni smuk je aktivniji i jeftiniji, loptasti piton je mirniji i krupniji.',
      en: 'The corn snake and the ball python. Both species are non-venomous, calm, tolerate handling well and do not need complicated equipment. The corn snake is more active and cheaper, the ball python is calmer and heavier-bodied.',
      ru: 'Маисовый полоз и королевский питон. Оба вида неядовиты, спокойны, хорошо переносят контакт с человеком и не требуют сложного оборудования. Маисовый полоз активнее и дешевле, королевский питон спокойнее и массивнее.',
    },
  },
  {
    q: { sr: 'Koliko košta zmija?', en: 'How much does a snake cost?', ru: 'Сколько стоит змея?' },
    a: {
      sr: 'Kukuruzni smukovi su od 6.000 din, a loptasti pitoni od 12.000 din. Cena zavisi od starosti i morfa (boje i šare). Dostupnost se menja sa leglima, pa nas pozovite za trenutnu ponudu.',
      en: 'Corn snakes start at 6,000 RSD and ball pythons at 12,000 RSD. The price depends on age and morph (colour and pattern). Availability changes with each clutch, so call us for the current offer.',
      ru: 'Маисовые полозы стоят от 6 000 RSD, королевские питоны - от 12 000 RSD. Цена зависит от возраста и морфы (окраса и рисунка). Наличие меняется с каждой кладкой, поэтому позвоните нам, чтобы узнать текущее предложение.',
    },
  },
  {
    q: { sr: 'Koliko dugo žive zmije?', en: 'How long do snakes live?', ru: 'Сколько живут змеи?' },
    a: {
      sr: 'Kukuruzni smuk živi 15-20 godina, a loptasti piton 20-30 godina. Zmija je dugoročna obaveza, pa to imajte u vidu pre kupovine.',
      en: 'A corn snake lives 15-20 years and a ball python 20-30 years. A snake is a long-term commitment, so keep that in mind before buying.',
      ru: 'Маисовый полоз живёт 15-20 лет, королевский питон - 20-30 лет. Змея - это долгосрочная ответственность, учитывайте это перед покупкой.',
    },
  },
  {
    q: { sr: 'Kako se preuzima zmija?', en: 'How do I collect a snake?', ru: 'Как забрать змею?' },
    a: {
      sr: 'Životinje možete preuzeti lično u Novom Sadu, a šaljemo ih i širom Srbije po dogovoru. Terarijum i opremu šaljemo kurirskom službom širom Srbije.',
      en: 'Animals can be collected in person in Novi Sad, and we also ship them across Serbia by arrangement. Terrariums and equipment are shipped by courier across Serbia.',
      ru: 'Животных можно забрать лично в Нови-Саде, также отправляем их по всей Сербии по договорённости. Террариум и оборудование отправляем курьерской службой по всей Сербии.',
    },
  },
];


// Strana /gekoni.html: pregled svih gekona u ponudi (upit "gekon" je dosad vodio samo na strane pojedinacnih vrsta)
export const GECKOS_TEXT = {
  sr: {
    meta: {
      title: 'Gekon: vrste, cena i nega - leopard, crested, debelorepi',
      description:
        'Gekoni iz domaćeg uzgoja u Novom Sadu: leopard gekon i crested gekon od 6.000 din, debelorepi gekon od 7.200 din. Koji gekon je za početnike i šta mu treba.',
      ogDescription: 'Leopard, crested i debelorepi gekon iz odgajivačnice NS Reptiles, Novi Sad.',
    },
    h1: 'Gekoni na prodaju',
    lead: 'Leopard, crested i debelorepi gekon iz domaćeg uzgoja - mali, mirni gušteri koji su dobar izbor i za prvog reptila.',
    intro:
      'Gekon je mali gušter koji se lako drži u stanu: ne traži veliki terarijum, miran je i brzo se navikne na rukovanje. U <strong>NS Reptiles</strong> odgajivačnici u Novom Sadu uzgajamo tri vrste: <strong>leopard gekona</strong> (od 6.000 din), <strong>crested gekona</strong> (od 6.000 din) i <strong>debelorepog gekona</strong> (od 7.200 din). Leopard i debelorepi gekon žive na tlu i jedu insekte, pa im odgovara horizontalni terarijum. Crested gekon se penje, pa mu treba vertikalni terarijum sa granama. Za svaku vrstu imamo vodič za negu, a uz gekona možete uzeti i terarijum sa opremom.',
    groupTitle: { sr: 'Gekoni', en: 'Geckos', ru: 'Гекконы' },
    faqTitle: 'Česta pitanja o <b>gekonima</b>',
  },
  en: {
    meta: {
      title: 'Geckos for Sale - Leopard, Crested, Fat-Tailed | NS Reptiles',
      description:
        'Captive-bred geckos in Novi Sad: leopard and crested geckos from 6,000 RSD, fat-tailed geckos from 7,200 RSD. Which gecko suits a beginner and what it needs.',
      ogDescription: 'Leopard, crested and fat-tailed geckos from the NS Reptiles breeding facility, Novi Sad.',
    },
    h1: 'Geckos for sale',
    lead: 'Captive-bred leopard, crested and fat-tailed geckos - small, calm lizards that also make a good first reptile.',
    intro:
      'A gecko is a small lizard that is easy to keep in a flat: it does not need a large terrarium, it is calm and it quickly gets used to handling. At the <strong>NS Reptiles</strong> breeding facility in Novi Sad we breed three species: the <strong>leopard gecko</strong> (from 6,000 RSD), the <strong>crested gecko</strong> (from 6,000 RSD) and the <strong>fat-tailed gecko</strong> (from 7,200 RSD). Leopard and fat-tailed geckos live on the ground and eat insects, so a horizontal terrarium suits them. The crested gecko climbs, so it needs a vertical terrarium with branches. We have a care guide for each species, and you can take a terrarium with equipment along with your gecko.',
    groupTitle: { sr: 'Gekoni', en: 'Geckos', ru: 'Гекконы' },
    faqTitle: 'Frequently asked questions about <b>geckos</b>',
  },
  ru: {
    meta: {
      title: 'Гекконы на продажу: леопардовый, реснитчатый | NS Reptiles',
      description:
        'Гекконы домашнего разведения в Нови-Саде: леопардовый и реснитчатый от 6 000 RSD, толстохвостый от 7 200 RSD. Какой геккон подойдёт начинающему.',
      ogDescription: 'Леопардовые, реснитчатые и толстохвостые гекконы из питомника NS Reptiles, Нови-Сад.',
    },
    h1: 'Гекконы на продажу',
    lead: 'Леопардовые, реснитчатые и толстохвостые гекконы домашнего разведения - небольшие спокойные ящерицы, подходящие и как первая рептилия.',
    intro:
      'Геккон - небольшая ящерица, которую легко содержать в квартире: ему не нужен большой террариум, он спокоен и быстро привыкает к рукам. В питомнике <strong>NS Reptiles</strong> в Нови-Саде мы разводим три вида: <strong>леопардового геккона</strong> (от 6 000 RSD), <strong>реснитчатого геккона</strong> (от 6 000 RSD) и <strong>толстохвостого геккона</strong> (от 7 200 RSD). Леопардовый и толстохвостый гекконы живут на земле и едят насекомых, поэтому им подходит горизонтальный террариум. Реснитчатый геккон лазает, и ему нужен вертикальный террариум с ветками. Для каждого вида у нас есть руководство по уходу, а вместе с гекконом можно взять террариум с оборудованием.',
    groupTitle: { sr: 'Gekoni', en: 'Geckos', ru: 'Гекконы' },
    faqTitle: 'Частые вопросы о <b>гекконах</b>',
  },
};

export const GECKOS_FAQ: { q: L; a: L }[] = [
  {
    q: { sr: 'Koji gekon je najbolji za početnike?', en: 'Which gecko is best for beginners?', ru: 'Какой геккон лучше всего подходит начинающим?' },
    a: {
      sr: 'Leopard gekon. Miran je, dobro podnosi rukovanje, jede insekte i dovoljan mu je horizontalni terarijum od oko 50x35x35 cm. Crested gekon je dobar izbor ako želite vrstu kojoj na sobnoj temperaturi ne treba grejna lampa.',
      en: 'The leopard gecko. It is calm, tolerates handling well, eats insects and a horizontal terrarium of about 50x35x35 cm is enough for it. The crested gecko is a good choice if you want a species that needs no heat lamp at room temperature.',
      ru: 'Леопардовый геккон. Он спокоен, хорошо переносит контакт с человеком, ест насекомых, и ему достаточно горизонтального террариума примерно 50x35x35 см. Реснитчатый геккон - хороший выбор, если нужен вид, которому при комнатной температуре не требуется обогревательная лампа.',
    },
  },
  {
    q: { sr: 'Koliko košta gekon?', en: 'How much does a gecko cost?', ru: 'Сколько стоит геккон?' },
    a: {
      sr: 'Leopard gekon i crested gekon su od 6.000 din, debelorepi gekon od 7.200 din. Cena zavisi od starosti i morfa (boje i šare). Starter komplet za leopard gekona, sa terarijumom 50x35x35, grejanjem i opremom, je 12.500 din.',
      en: 'Leopard and crested geckos start at 6,000 RSD and fat-tailed geckos at 7,200 RSD. The price depends on age and morph (colour and pattern). The leopard gecko starter kit, with a 50x35x35 terrarium, heating and equipment, is 12,500 RSD.',
      ru: 'Леопардовый и реснитчатый гекконы - от 6 000 RSD, толстохвостый - от 7 200 RSD. Цена зависит от возраста и морфы (окраса и рисунка). Стартовый набор для леопардового геккона с террариумом 50x35x35, обогревом и оборудованием стоит 12 500 RSD.',
    },
  },
  {
    q: { sr: 'Koliko dugo živi gekon?', en: 'How long does a gecko live?', ru: 'Сколько живёт геккон?' },
    a: {
      sr: 'Leopard gekon uz pravilnu negu živi 15-20 godina, a i ostale vrste koje uzgajamo žive duže od deset godina. Gekon je zato dugoročna obaveza, a ne ljubimac na par godina.',
      en: 'With proper care a leopard gecko lives 15-20 years, and the other species we breed also live more than ten years. A gecko is therefore a long-term commitment, not a pet for a couple of years.',
      ru: 'При правильном уходе леопардовый геккон живёт 15-20 лет, а другие виды, которые мы разводим, также живут более десяти лет. Поэтому геккон - это долгосрочная ответственность, а не питомец на пару лет.',
    },
  },
  {
    q: { sr: 'Kakav terarijum treba gekonu?', en: 'What terrarium does a gecko need?', ru: 'Какой террариум нужен геккону?' },
    a: {
      sr: 'Leopard i debelorepi gekon žive na tlu, pa im treba horizontalni terarijum sa toplom i hladnom stranom i skrovištima. Crested gekon se penje, pa mu treba vertikalni terarijum sa granama i biljkama. Terarijume za sve tri vrste izrađujemo i po meri.',
      en: 'Leopard and fat-tailed geckos live on the ground, so they need a horizontal terrarium with a warm side, a cool side and hides. The crested gecko climbs, so it needs a vertical terrarium with branches and plants. We also build custom terrariums for all three species.',
      ru: 'Леопардовый и толстохвостый гекконы живут на земле, поэтому им нужен горизонтальный террариум с тёплой и прохладной стороной и укрытиями. Реснитчатый геккон лазает, и ему нужен вертикальный террариум с ветками и растениями. Террариумы для всех трёх видов мы изготавливаем и на заказ.',
    },
  },
];
