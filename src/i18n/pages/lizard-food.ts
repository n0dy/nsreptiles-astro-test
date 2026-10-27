import type { Locale } from '../../config/site';

type Link = (srPath: string, text: string) => string;

// Vrednosti sa <strong>/<a> se renderuju kao HTML - samo nas tekst, nikad korisnicki unos.
export const LIZARD_FOOD: Record<
  Locale,
  {
    meta: { title: string; description: string; keywords: string; ogTitle?: string; ogDescription: string };
    home: string;
    equipment: string;
    h1: string;
    intro: (link: Link) => string;
    typesTitle: string;
    types: [string, string];
    howTitle: string;
    how: string;
    catLabel: string;
    faqTitle: string;
    faq: { q: string; a: string }[];
  }
> = {
  sr: {
    meta: {
      title: 'Hrana za Guštere | Dubia, Lateralis, Brašnari - NS REPTILES',
      description:
        'Hrana za guštere - živa hrana za reptile: dubia žohari, fobasi, lateralis (turkestanski žohar) i brašnari (tenebrio) u više veličina. NS REPTILES Novi Sad.',
      keywords:
        'hrana za guštere, živa hrana za reptile, dubia žohari, dubie, fobasi, lateralis, turkestanski žohar, brašnari, tenebrio, insekti za guštere, hrana za bradatu agamu, hrana za leopard gekona',
      ogTitle: 'Hrana za Guštere | Dubia, Lateralis, Brašnari - NS REPTILES',
      ogDescription:
        'Živa hrana za guštere i reptile - dubia žohari, fobasi, lateralis i brašnari u više veličina. Sveža i uvek na stanju.',
    },
    home: 'Početna',
    equipment: 'Oprema',
    h1: 'Hrana za guštere',
    intro: (link) =>
      `Živa hrana je osnova ishrane većine guštera. U ponudi imamo sveže feeder insekte uzgojene za ishranu reptila - <strong>dubia žohare</strong>, <strong>fobase</strong>, <strong>lateralis (turkestanski žohar)</strong> i <strong>brašnare (tenebrio)</strong> u više veličina. Sve vrste su dostupne od najsitnijih nimfi za mladunce do odraslih jedinki za veće guštere, pa možete hraniti ${link('/zivotinje/bradata-agama.html', 'bradate agame')}, ${link('/zivotinje/leopard-gekon.html', 'leopard gekone')}, kameleone, tegue i ostale insektojede. Cene žive hrane počinju od <strong>400 din za 100 komada</strong>.`,
    typesTitle: 'Vrste žive hrane u ponudi',
    types: [
      '<strong>Dubia žohari</strong> su najpopularniji feeder insekt - imaju visok procenat proteina, malo hitina i lako su svarljivi. Ne cvrče, ne skaču, ne penju se po glatkim površinama i ne šire miris, pa su praktični za držanje. <strong>Fobasi</strong> su mekan i hranljiv žohar, odlična dopuna dubijama za raznovrsnost obroka.',
      '<strong>Lateralis</strong> ili turkestanski žohar je brz i sitniji insekt koji svojim kretanjem provocira lovni instinkt - idealan za kameleone, mlade gekone i guštere koji reaguju na pokret. <strong>Brašnari (tenebrio)</strong> su larve sa tvrđim hitinom i višim udelom masti, pa se daju kao poslastica i za popunjavanje kondicije, uz umerenu učestalost.',
    ],
    howTitle: 'Kako se hrani gušter',
    how: 'Živu hranu uvek pospite kalcijumom (a povremeno i multivitaminom) pre obroka. Pravilo veličine: insekt ne sme biti širi od razmaka između očiju guštera. Mladunci jedu češće i sitniji plen, dok odrasli jedu ređe i krupnije insekte. Za tačnu preporuku vrste i veličine za vašu životinju - pozovite nas.',
    catLabel: 'Živa hrana',
    faqTitle: 'Česta pitanja o ishrani guštera',
    faq: [
      { q: 'Čime da hranim guštera?', a: 'Većina guštera hrani se živim insektima. Dubia žohari su osnova ishrane jer imaju visok procenat proteina, malo hitina i lako su svarljivi. Uz njih se koriste fobasi, lateralis (turkestanski žohar) i brašnari kao raznovrsnost. Živu hranu treba posuti kalcijumom pre svakog obroka.' },
      { q: 'Koja je najbolja hrana za bradatu agamu?', a: 'Mlade bradate agame jedu velike količine insekata dnevno - dubia žohari i lateralis su idealni jer su meki i bogati proteinima. Odrasle agame jedu manje insekata i više povrća. Brašnari se daju umereno jer imaju tvrđi hitin.' },
      { q: 'Koje veličine insekata trebaju za mladunca guštera?', a: 'Pravilo je da insekt ne bude širi od razmaka između očiju guštera. Za mladunce koristite male dubia nimfe ili male lateralise. Kako gušter raste, prelazi se na srednje i velike insekte. Prevelik plen može izazvati probleme sa varenjem.' },
      { q: 'Zašto su dubia žohari bolji od cvrčaka?', a: 'Dubia žohari ne cvrče, ne skaču, ne penju se po glatkim površinama i ne šire neprijatan miris. Duže žive u terarijumu i imaju bolji odnos proteina i hitina od cvrčaka, pa su hranljiviji i praktičniji za držanje.' },
      { q: 'Kako se čuva živa hrana za guštere?', a: 'Dubia žohari i fobasi drže se na sobnoj temperaturi u ventiliranoj kutiji sa kartonskim ležištima i malo hrane (šargarepa, jabuka, žitarice). Brašnari se mogu držati u frižideru radi usporavanja razvoja. Lateralis zahteva topliji smeštaj jer je aktivniji.' },
    ],
  },
  en: {
    meta: {
      title: 'Lizard Food | Dubia, Lateralis, Mealworms - NS Reptiles',
      description:
        'Live food for lizards and reptiles: dubia roaches, superworms, lateralis (Turkestan roach) and mealworms (tenebrio) in several sizes. NS Reptiles Novi Sad.',
      keywords:
        'lizard food, live food for reptiles, dubia roaches, superworms, lateralis, Turkestan roach, mealworms, tenebrio, feeder insects for lizards, bearded dragon food, leopard gecko food',
      ogTitle: 'Lizard Food | Dubia Roaches, Lateralis, Mealworms - NS Reptiles',
      ogDescription:
        'Live food for lizards and reptiles - dubia roaches, superworms, lateralis and mealworms in several sizes. Fresh and always in stock.',
    },
    home: 'Home',
    equipment: 'Equipment',
    h1: 'Lizard food',
    intro: (link) =>
      `Live food is the foundation of most lizards' diet. We stock fresh feeder insects bred for feeding reptiles - <strong>dubia roaches</strong>, <strong>superworms</strong>, <strong>lateralis (Turkestan roach)</strong> and <strong>mealworms (tenebrio)</strong> in several sizes. All species are available from the tiniest nymphs for babies to adults for larger lizards, so you can feed ${link('/zivotinje/bradata-agama.html', 'bearded dragons')}, ${link('/zivotinje/leopard-gekon.html', 'leopard geckos')}, chameleons, tegus and other insectivores. Live food prices start at <strong>400 din per 100 pieces</strong>.`,
    typesTitle: 'Types of live food we offer',
    types: [
      "<strong>Dubia roaches</strong> are the most popular feeder insect - they are high in protein, low in chitin and easy to digest. They don't chirp, don't jump, can't climb smooth surfaces and don't smell, so they are practical to keep. <strong>Superworms</strong> are a soft and nutritious feeder, a great addition to dubias for a varied diet.",
      '<strong>Lateralis</strong>, or the Turkestan roach, is a fast, smaller insect whose movement triggers the hunting instinct - ideal for chameleons, young geckos and lizards that respond to motion. <strong>Mealworms (tenebrio)</strong> are larvae with a harder chitin and a higher fat content, so they are given as a treat and to build up condition, in moderation.',
    ],
    howTitle: 'How to feed a lizard',
    how: "Always dust live food with calcium (and occasionally a multivitamin) before feeding. The size rule: the insect must not be wider than the space between the lizard's eyes. Babies eat more often and smaller prey, while adults eat less often and larger insects. For an exact recommendation of the species and size for your animal - call us.",
    catLabel: 'Live food',
    faqTitle: 'Frequently asked questions about feeding lizards',
    faq: [
      { q: 'What should I feed my lizard?', a: 'Most lizards eat live insects. Dubia roaches are the staple of the diet because they are high in protein, low in chitin and easy to digest. Superworms, lateralis (Turkestan roach) and mealworms are used alongside them for variety. Live food should be dusted with calcium before every feeding.' },
      { q: 'What is the best food for a bearded dragon?', a: 'Young bearded dragons eat large amounts of insects every day - dubia roaches and lateralis are ideal because they are soft and rich in protein. Adult dragons eat fewer insects and more vegetables. Mealworms are given in moderation because they have a harder chitin.' },
      { q: 'What insect sizes does a baby lizard need?', a: "The rule is that the insect should not be wider than the space between the lizard's eyes. For babies, use small dubia nymphs or small lateralis. As the lizard grows, move on to medium and large insects. Prey that is too large can cause digestive problems." },
      { q: 'Why are dubia roaches better than crickets?', a: "Dubia roaches don't chirp, don't jump, can't climb smooth surfaces and don't give off an unpleasant smell. They live longer in the terrarium and have a better protein-to-chitin ratio than crickets, so they are more nutritious and more practical to keep." },
      { q: 'How do I store live food for lizards?', a: 'Dubia roaches and superworms are kept at room temperature in a ventilated box with egg-crate cardboard and a little food (carrot, apple, grains). Mealworms can be kept in the fridge to slow their development. Lateralis need warmer housing because they are more active.' },
    ],
  },
  ru: {
    meta: {
      title: 'Корм для ящериц: дубия, латералис, черви | NS Reptiles',
      description:
        'Живой корм для ящериц и рептилий: тараканы дубия, зофобасы, латералис и мучные черви в нескольких размерах. Свежий корм в наличии. NS Reptiles, Нови-Сад.',
      keywords:
        'корм для ящериц, живой корм для рептилий, тараканы дубия, зофобасы, латералис, туркменский таракан, мучные черви, тенебрио, насекомые для ящериц, корм для бородатой агамы, корм для леопардового геккона',
      ogDescription:
        'Живой корм для ящериц и рептилий — тараканы дубия, зофобасы, латералис и мучные черви разных размеров. Свежий и всегда в наличии.',
    },
    home: 'Главная',
    equipment: 'Оборудование',
    h1: 'Корм для ящериц',
    intro: (link) =>
      `Живой корм — основа рациона большинства ящериц. У нас есть свежие кормовые насекомые, выращенные для кормления рептилий, — <strong>мраморные тараканы дубия</strong>, <strong>зофобасы</strong>, <strong>латералис (туркменский таракан)</strong> и <strong>мучные черви (тенебрио)</strong> разных размеров. Все виды доступны от самых мелких нимф для детёнышей до взрослых особей для крупных ящериц, поэтому вы можете кормить ${link('/zivotinje/bradata-agama.html', 'бородатых агам')}, ${link('/zivotinje/leopard-gekon.html', 'леопардовых гекконов')}, хамелеонов, тегу и других насекомоядных. Цены на живой корм начинаются от <strong>400 din за 100 штук</strong>.`,
    typesTitle: 'Виды живого корма в наличии',
    types: [
      '<strong>Тараканы дубия</strong> — самое популярное кормовое насекомое: у них высокое содержание белка, мало хитина, и они легко усваиваются. Они не стрекочут, не прыгают, не лазают по гладким поверхностям и не пахнут, поэтому их удобно содержать. <strong>Зофобасы</strong> — мягкий и питательный корм, отличное дополнение к дубиям для разнообразия рациона.',
      '<strong>Латералис</strong>, или туркменский таракан, — быстрое и более мелкое насекомое, которое своим движением провоцирует охотничий инстинкт, — идеален для хамелеонов, молодых гекконов и ящериц, реагирующих на движение. <strong>Мучные черви (тенебрио)</strong> — личинки с более жёстким хитином и повышенным содержанием жира, поэтому их дают как лакомство и для набора кондиции, но не слишком часто.',
    ],
    howTitle: 'Как кормить ящерицу',
    how: 'Перед кормлением всегда обсыпайте живой корм кальцием (а иногда и мультивитаминами). Правило размера: насекомое не должно быть шире расстояния между глазами ящерицы. Детёныши едят чаще и более мелкую добычу, а взрослые едят реже и более крупных насекомых. Чтобы получить точную рекомендацию по виду и размеру корма для вашего животного, позвоните нам.',
    catLabel: 'Живой корм',
    faqTitle: 'Частые вопросы о кормлении ящериц',
    faq: [
      { q: 'Чем кормить ящерицу?', a: 'Большинство ящериц питается живыми насекомыми. Мраморные тараканы дубия — основа рациона: у них высокое содержание белка, мало хитина, и они легко усваиваются. Для разнообразия к ним добавляют зофобасов, латералисов (туркменских тараканов) и мучных червей. Живой корм перед каждым кормлением нужно обсыпать кальцием.' },
      { q: 'Какой корм лучше всего подходит для бородатой агамы?', a: 'Молодые бородатые агамы ежедневно съедают много насекомых — дубии и латералисы идеальны, так как они мягкие и богаты белком. Взрослые агамы едят меньше насекомых и больше овощей. Мучных червей дают умеренно, потому что у них более жёсткий хитин.' },
      { q: 'Насекомые какого размера нужны детёнышу ящерицы?', a: 'Правило такое: насекомое не должно быть шире расстояния между глазами ящерицы. Для детёнышей используйте маленьких нимф дубии или мелких латералисов. По мере роста ящерицы переходят на средних и крупных насекомых. Слишком крупная добыча может вызвать проблемы с пищеварением.' },
      { q: 'Почему тараканы дубия лучше сверчков?', a: 'Тараканы дубия не стрекочут, не прыгают, не лазают по гладким поверхностям и не издают неприятного запаха. Они дольше живут в террариуме и имеют лучшее соотношение белка и хитина, чем сверчки, поэтому они питательнее и удобнее в содержании.' },
      { q: 'Как хранить живой корм для ящериц?', a: 'Дубий и зофобасов держат при комнатной температуре в вентилируемом контейнере с картонными лотками и небольшим количеством корма (морковь, яблоко, злаки). Мучных червей можно хранить в холодильнике, чтобы замедлить их развитие. Латералисам нужно более тёплое содержание, так как они активнее.' },
    ],
  },
};
