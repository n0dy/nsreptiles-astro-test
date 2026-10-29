import type { Locale } from '../../config/site';

interface Cat {
  /** anchor #cat-<id> i data-target za pill */
  id: string;
  pill: string;
  title: string;
  items: { q: string; a: string }[];
}

// Vrednosti sa <b>/<a> se renderuju kao HTML - samo nas tekst, nikad korisnicki unos.
export const FAQ_PAGE: Record<
  Locale,
  {
    meta: { title: string; description: string; image?: string; ogTitle: string; ogDescription: string };
    h1: string;
    lead: string;
    intro: (contactHref: string) => string;
    count: Partial<Record<Intl.LDMLPluralRule, string>> & { other: string };
    cta: { title: string; text: string; call: string };
  }
> = {
  sr: {
    meta: {
      title: 'Česta pitanja - reptili, ishrana i oprema | NS Reptiles',
      description:
        'Odgovori na najčešća pitanja o reptilima, terarijumima i opremi. Ishrana, UVB osvetljenje, kalcijum, feeder insekti i nega gekona, agama i zmija.',
      image: '/style/img/logo.jpg',
      ogTitle: 'Česta pitanja o reptilima i opremi | NS Reptiles',
      ogDescription:
        'Sve što treba da znate o držanju reptila - ishrana, oprema, terarijumi, UVB osvetljenje i suplementi.',
    },
    h1: 'Česta pitanja',
    lead: 'Odgovori na pitanja koja najčešće dobijamo od kupaca i budućih vlasnika reptila - od izbora prvog ljubimca do ishrane i opreme.',
    intro: (href) =>
      `Sakupili smo odgovore na pitanja koja nam stižu svakodnevno. Ako ne pronađete odgovor na vaše pitanje, <strong><a href="${href}" style="color: var(--green-ink)">kontaktirajte nas</a></strong> - rado ćemo pomoći oko izbora životinje, terarijuma ili opreme.`,
    count: { one: 'pitanje', few: 'pitanja', other: 'pitanja' },
    cta: {
      title: 'Pitajte nas <b>direktno</b>',
      text: 'Javite nam se - rado ćemo odgovoriti na svako pitanje o životinjama, terarijumima i opremi.',
      call: 'Pozovi nas',
    },
  },
  en: {
    meta: {
      title: 'FAQ - Reptiles, Feeding & Equipment | NS Reptiles',
      description:
        'Answers to common questions about reptiles, terrariums and equipment: feeding, UVB lighting, calcium, feeder insects, care for geckos, dragons and snakes.',
      ogTitle: 'FAQ - Reptiles and Equipment | NS Reptiles',
      ogDescription:
        'Everything you need to know about keeping reptiles - feeding, equipment, terrariums, UVB lighting and supplements.',
    },
    h1: 'Frequently Asked Questions',
    lead: 'Answers to the questions we receive most often from customers and prospective reptile owners - from choosing your first pet to feeding and equipment.',
    intro: (href) =>
      `We've gathered answers to the questions that come in every day. If you can't find the answer you're looking for, <strong><a href="${href}" style="color: var(--green-ink)">contact us</a></strong> - we're happy to help you choose an animal, terrarium, or equipment.`,
    count: { one: 'question', other: 'questions' },
    cta: {
      title: 'Ask us <b>directly</b>',
      text: "Get in touch - we're happy to answer any question about animals, terrariums, and equipment.",
      call: 'Call us',
    },
  },
  ru: {
    meta: {
      title: 'Частые вопросы о рептилиях и оборудовании | NS Reptiles',
      description:
        'Ответы на частые вопросы о рептилиях, террариумах и оборудовании: питание, UVB-освещение, кальций, кормовые насекомые, уход за гекконами, агамами и змеями.',
      ogTitle: 'Часто задаваемые вопросы о рептилиях | NS Reptiles',
      ogDescription:
        'Всё, что нужно знать о содержании рептилий — питание, оборудование, террариумы, UVB-освещение и добавки.',
    },
    h1: 'Часто задаваемые вопросы',
    lead: 'Ответы на вопросы, которые мы чаще всего получаем от покупателей и будущих владельцев рептилий — от выбора первого питомца до питания и оборудования.',
    intro: (href) =>
      `Мы собрали ответы на вопросы, которые получаем каждый день. Если вы не нашли ответ на свой вопрос, <strong><a href="${href}" style="color: var(--green-ink)">свяжитесь с нами</a></strong> — мы с радостью поможем с выбором животного, террариума или оборудования.`,
    count: { one: 'вопрос', few: 'вопроса', many: 'вопросов', other: 'вопроса' },
    cta: {
      title: 'Спросите нас <b>напрямую</b>',
      text: 'Свяжитесь с нами — мы с удовольствием ответим на любой вопрос о животных, террариумах и оборудовании.',
      call: 'Позвонить нам',
    },
  },
};

// Iz istih pitanja se pravi i FAQPage JSON-LD, da vidljiv tekst i schema ne mogu da se razidju
export const FAQ_CATS: Record<Locale, Cat[]> = {
  sr: [
    {
      id: 'ljubimci',
      pill: 'Reptili kao ljubimci',
      title: 'Reptili kao <b>kućni ljubimci</b>',
      items: [
        { q: 'Koji reptil je najbolji za početnike?', a: 'Leopard gekon i bradata agama su najčešći izbor za prve vlasnike reptila. Leopard gekon je miran, jede insekte i ne zahteva prevelik terarijum. Bradata agama je društvenija i jede i biljnu i životinjsku hranu. Crested gekon je takođe odličan - hrani se gotovom mešavinom i ne treba mu grejna lampa na sobnoj temperaturi. Pre kupovine uvek se raspitajte o konkretnim zahtevima vrste - veličina terarijuma, temperatura, vlažnost i ishrana razlikuju se od životinje do životinje.' },
        { q: 'Koliko je komplikovano držanje reptila?', a: 'Manje nego što većina misli. Kada se jednom postavi terarijum sa odgovarajućom temperaturom, UVB osvetljenjem i vlažnošću, svakodnevna briga svodi se na hranjenje, svežu vodu i proveru uslova. Nema šetanja, nema buke, nema dlaka po stanu. Potrebno je održavati čistoću terarijuma i periodično proveravati da oprema radi ispravno.' },
        { q: 'Da li se reptili naviknu na kontakt sa vlasnikom?', a: 'Reptili ne pokazuju naklonost kao psi ili mačke, ali se naviknu na prisustvo i rukovanje. Bradate agame su poznate po tome što tolerišu i uživaju u kontaktu sa čovekom. Gekoni postaju mirni kad ih redovno uzimate u ruke. Ključ je strpljenje i nežan pristup od mladog uzrasta - nikad ih ne hvatajte naglo odozgo jer to imitira grabljivicu.' },
      ],
    },
    {
      id: 'ishrana',
      pill: 'Ishrana',
      title: 'Ishrana <b>reptila</b>',
      items: [
        { q: 'Koliko često treba hraniti reptile?', a: 'Zavisi od vrste i uzrasta. Mladunci većine vrsta jedu svakodnevno jer brzo rastu. Odrasli leopard gekoni jedu svaki drugi dan, bradate agame svakodnevno (kombinacija salate i insekata), a loptasti pitoni jednom u 7–14 dana. Praktično pravilo: ponudite onoliko hrane koliko životinja može da pojede za 10–15 minuta, pa uklonite ostatak.' },
        { q: 'Da li svi reptili jedu insekte?', a: 'Ne. Postoje tri tipa ishrane kod reptila: insektivori jedu samo insekte (leopard gekoni, dnevni gekoni), omnivori jedu insekte i biljnu hranu (bradate agame, plavi jezičasti skinkovi), a herbivori jedu samo biljke (kopnene kornjače, iguane). Bitno je znati potrebe konkretne vrste pre kupovine kako biste obezbedili pravilnu ishranu od prvog dana.' },
        { q: 'Kako odrediti pravu veličinu hrane za reptila?', a: 'Osnovno pravilo - insekt ne sme biti veći od razmaka između očiju vašeg reptila. Prevelika hrana može izazvati probleme sa varenjem. Kod nas u ponudi dubia i fobasi dolaze u tri veličine (S, M, L) tako da lako birate prema uzrastu vaše životinje.' },
        { q: 'Živa ili sušena hrana - šta je bolje za reptile?', a: 'Živa hrana je uvek prvi izbor. Pokret insekta stimuliše lovački instinkt reptila, podstiče aktivnost i prirodno ponašanje. Živi insekti imaju i više vlage i hranljivih materija od sušenih. Sušeni insekti služe kao dopuna ili rezerva kada živa hrana nije dostupna, ali ne bi trebalo da budu osnova ishrane.' },
        { q: 'Da li je dovoljno davati samo jednu vrstu insekta?', a: 'Tehnički može, ali ne bi trebalo. Raznovrsna ishrana - kombinacija dubia bubašvaba, cvrčaka, lateralisa i fobasa - obezbeđuje bolji balans proteina, masti, kalcijuma i vlage. Monotona ishrana jednom vrstom insekta može dovesti do nutritivnih deficita tokom vremena.' },
      ],
    },
    {
      id: 'insekti',
      pill: 'Feeder insekti',
      title: 'Insekti - <b>hrana za reptile</b>',
      items: [
        { q: 'Koje insekte koristiti za hranjenje reptila?', a: 'Najpopularniji feeder insekti su dubia bubašvabe, cvrčci, lateralisi (red runner), fobasi i brašnari. Dubia bubašvabe su prvi izbor za većinu vlasnika jer imaju visok procenat proteina, malo masti i mekši oklop koji je lak za varenje. Najbolji rezultati se postižu kombinovanjem više vrsta za potpun nutritivni profil.' },
        { q: 'Da li dubia bubašvabe mogu da povrede reptila?', a: 'Ne, potpuno su bezbedne. Dubia bubašvabe ne grizu i ne napadaju životinje, što ih čini jednim od najsigurnijih feeder insekata. Za razliku od cvrčaka koji mogu grickati reptila tokom noći, dubia se mirno kriju i čekaju da budu pojedene.' },
        { q: 'Jesu li fobasi dobra hrana za reptile?', a: 'Fobasi su bogati proteinima i većina reptila ih obožava, ali imaju više masti u poređenju sa dubia bubašvabama. Zato se preporučuju kao dopunska hrana ili povremena poslastica, ne kao jedini izvor ishrane. Kombinujte ih sa dubia i cvrčcima za uravnotežen obrok.' },
        { q: 'Šta je gut loading i zašto je bitan?', a: 'Gut loading je hranjenje insekata kvalitetnom hranom 24–48 sati pre nego što ih date reptilu. Insekti koji su jeli povrće, voće ili specijalnu hranu prenose znatno više hranljivih materija vašem ljubimcu. Razlika u kvalitetu ishrane je značajna - insekt koji je gladovao nema šta da ponudi osim praznih kalorija.' },
        { q: 'Kako pravilno čuvati feeder insekte?', a: 'Insekti se drže u dobro provetrenim plastičnim kutijama. Za dubia bubašvabe optimalna temperatura je 25–30°C. Obezbedite im hranu (povrće, voće ili specijalna hrana za insekte), skrovišta od kartonskih uložaka za jaja i izvor vlage. Pravilnim čuvanjem insekti ostaju zdravi i nutritivno kvalitetni nedeljama.' },
      ],
    },
    {
      id: 'oprema',
      pill: 'Oprema i uslovi',
      title: 'Oprema i <b>uslovi u terarijumu</b>',
      items: [
        { q: 'Zašto je UVB osvetljenje neophodno za reptile?', a: 'UVB svetlo omogućava reptilima da u koži sintetišu vitamin D3, neophodan za apsorpciju kalcijuma iz hrane. Bez UVB osvetljenja reptili razvijaju metaboličku bolest kostiju - deformitete, slabost i ozbiljne zdravstvene probleme koji mogu biti fatalni. Pustinjskim vrstama (bradate agame) treba 10–12% UVB lampa, šumskim (crested gekoni) 5–7%. Lampe se menjaju na svakih 6–12 meseci jer UVB emitovanje slabi.' },
        { q: 'Da li insekte treba posipati kalcijumom pre hranjenja?', a: 'Da, suplementacija je obavezna. Kalcijum bez D3 koristi se svakodnevno - pospe se po insektima neposredno pre hranjenja (tzv. dusting). Vitaminski preparat ili kalcijum sa D3 daje se 2–3 puta nedeljno. Bez suplementacije reptili ne dobijaju dovoljno kalcijuma čak ni uz pravilnu ishranu.' },
        { q: 'Da li reptilima treba voda u terarijumu?', a: 'Da. Većina reptila treba posudu sa svežom vodom koja se menja svakodnevno. Neke arborealne vrste poput crested gekona i kameleona uzimaju vlagu lizanjem kapljica sa lišća i zidova terarijuma - njima je pored posude potrebno i redovno orošavanje. Vodene kornjače žive u vodi, pa im treba ter-akvarijum sa vodenim delom.' },
      ],
    },
  ],
  en: [
    {
      id: 'pets',
      pill: 'Reptiles as pets',
      title: 'Reptiles as <b>pets</b>',
      items: [
        { q: 'Which reptile is best for beginners?', a: 'The leopard gecko and bearded dragon are the most popular choices for first-time reptile owners. The leopard gecko is calm, eats insects, and doesn\'t need a very large terrarium. The bearded dragon is more social and eats both plant and animal food. The crested gecko is also an excellent option - it feeds on a ready-made meal replacement mix and doesn\'t need a heat lamp at room temperature. Before buying, always ask about the specific requirements of the species - terrarium size, temperature, humidity, and diet vary from animal to animal.' },
        { q: 'How complicated is it to keep reptiles?', a: 'Less complicated than most people think. Once the terrarium is set up with the right temperature, UVB lighting, and humidity, day-to-day care comes down to feeding, fresh water, and checking the conditions. No walks, no noise, no fur on the furniture. You do need to keep the terrarium clean and periodically check that the equipment is working properly.' },
        { q: 'Do reptiles get used to contact with their owner?', a: 'Reptiles don\'t show affection the way dogs or cats do, but they do get used to a person\'s presence and handling. Bearded dragons are well known for tolerating and even enjoying human contact. Geckos become calm when handled regularly. The key is patience and a gentle approach from a young age - never grab them quickly from above, as that mimics a predator.' },
      ],
    },
    {
      id: 'feeding',
      pill: 'Feeding',
      title: 'Feeding <b>reptiles</b>',
      items: [
        { q: 'How often should reptiles be fed?', a: 'It depends on the species and age. Juveniles of most species eat daily because they grow quickly. Adult leopard geckos eat every other day, bearded dragons eat daily (a combination of salad and insects), and ball pythons eat once every 7-14 days. A practical rule: offer as much food as the animal can eat in 10-15 minutes, then remove any leftovers.' },
        { q: 'Do all reptiles eat insects?', a: 'No. There are three types of diet among reptiles: insectivores eat only insects (leopard geckos, day geckos), omnivores eat insects and plant food (bearded dragons, blue-tongued skinks), and herbivores eat only plants (tortoises, iguanas). It\'s important to know the requirements of the specific species before buying so you can provide the right diet from day one.' },
        { q: 'How do I determine the right prey size for my reptile?', a: 'The basic rule: the insect should be no larger than the space between your reptile\'s eyes. Prey that is too large can cause digestive problems. Our dubias and phoenix worms come in three sizes (S, M, L), so you can easily choose based on your animal\'s age.' },
        { q: 'Live or dried food - which is better for reptiles?', a: 'Live food is always the first choice. The movement of an insect triggers the reptile\'s hunting instinct, encourages activity, and promotes natural behaviour. Live insects also contain more moisture and nutrients than dried ones. Dried insects serve as a supplement or backup when live food isn\'t available, but shouldn\'t be the foundation of the diet.' },
        { q: 'Is it enough to feed only one type of insect?', a: 'Technically possible, but not recommended. A varied diet - a mix of dubia roaches, crickets, lateralis, and phoenix worms - provides a better balance of protein, fat, calcium, and moisture. Feeding a single insect species over time can lead to nutritional deficiencies.' },
      ],
    },
    {
      id: 'insects',
      pill: 'Feeder insects',
      title: 'Insects - <b>reptile food</b>',
      items: [
        { q: 'Which insects should I use to feed reptiles?', a: 'The most popular feeder insects are dubia roaches, crickets, lateralis (red runners), phoenix worms, and mealworms. Dubia roaches are the top choice for most keepers because they have a high protein content, low fat, and a softer shell that is easy to digest. The best results come from combining several species for a complete nutritional profile.' },
        { q: 'Can dubia roaches harm my reptile?', a: 'No, they are completely safe. Dubia roaches do not bite and do not attack animals, making them one of the safest feeder insects available. Unlike crickets, which can nibble on a reptile overnight, dubias simply hide quietly and wait to be eaten.' },
        { q: 'Are phoenix worms a good food for reptiles?', a: 'Phoenix worms are protein-rich and most reptiles love them, but they are higher in fat compared to dubia roaches. For that reason they are best used as a supplementary food or an occasional treat rather than the sole food source. Combine them with dubias and crickets for a balanced meal.' },
        { q: 'What is gut loading and why does it matter?', a: 'Gut loading means feeding the insects high-quality food for 24-48 hours before offering them to your reptile. Insects that have eaten vegetables, fruit, or a specialised gut-load diet pass significantly more nutrients to your pet. The difference in nutritional quality is real - a starved insect has nothing to offer but empty calories.' },
        { q: 'How do I store feeder insects properly?', a: 'Insects are kept in well-ventilated plastic containers. For dubia roaches the optimal temperature is 25-30 °C. Provide food (vegetables, fruit, or a specialised insect diet), hiding spots made from egg-crate cardboard, and a source of moisture. With proper storage, insects stay healthy and nutritionally valuable for weeks.' },
      ],
    },
    {
      id: 'equipment',
      pill: 'Equipment & conditions',
      title: 'Equipment and <b>terrarium conditions</b>',
      items: [
        { q: 'Why is UVB lighting essential for reptiles?', a: 'UVB light allows reptiles to synthesise vitamin D3 in their skin, which is essential for absorbing calcium from food. Without UVB lighting, reptiles develop metabolic bone disease - deformities, weakness, and serious health problems that can be fatal. Desert species such as bearded dragons need a 10-12% UVB bulb; forest species such as crested geckos need 5-7%. Bulbs should be replaced every 6-12 months because UVB output fades before the bulb burns out.' },
        { q: 'Do insects need to be dusted with calcium before feeding?', a: 'Yes, supplementation is mandatory. Calcium without D3 is used daily - sprinkle it over the insects immediately before feeding (this is known as dusting). A vitamin supplement or calcium with D3 is given 2-3 times a week. Without supplementation, reptiles don\'t get enough calcium even on a proper diet.' },
        { q: 'Do reptiles need water in the terrarium?', a: 'Yes. Most reptiles need a dish of fresh water in the terrarium, changed daily. Some arboreal species such as crested geckos and chameleons take moisture by licking droplets from leaves and the terrarium walls - alongside a water dish, they also need regular misting. Aquatic turtles live in water and need a tank with a proper water section.' },
      ],
    },
  ],
  ru: [
    {
      id: 'ljubimci',
      pill: 'Рептилии как питомцы',
      title: 'Рептилии как <b>домашние питомцы</b>',
      items: [
        { q: 'Какая рептилия лучше всего подходит для начинающих?', a: 'Леопардовый геккон и бородатая агама — наиболее распространённый выбор для первых владельцев рептилий. Леопардовый геккон спокоен, питается насекомыми и не требует большого террариума. Бородатая агама более общительна и ест как растительную, так и животную пищу. Ресничный геккон тоже отличный вариант — питается готовой смесью и не нуждается в греющей лампе при комнатной температуре. Перед покупкой всегда уточняйте конкретные требования вида — размер террариума, температура, влажность и питание различаются у каждого животного.' },
        { q: 'Насколько сложно содержать рептилий?', a: 'Проще, чем думает большинство. Когда террариум один раз настроен с подходящей температурой, UVB-освещением и влажностью, ежедневный уход сводится к кормлению, свежей воде и проверке условий. Никаких прогулок, никакого шума, никакой шерсти в квартире. Нужно поддерживать чистоту террариума и периодически проверять работу оборудования.' },
        { q: 'Привыкают ли рептилии к контакту с хозяином?', a: 'Рептилии не проявляют привязанности как собаки или кошки, но привыкают к присутствию человека и к тому, что их берут в руки. Бородатые агамы известны тем, что терпят и даже получают удовольствие от контакта с человеком. Гекконы становятся спокойнее при регулярном обращении. Ключ — терпение и мягкий подход с молодого возраста — никогда не хватайте их резко сверху, так как это имитирует движение хищника.' },
      ],
    },
    {
      id: 'ishrana',
      pill: 'Питание',
      title: 'Питание <b>рептилий</b>',
      items: [
        { q: 'Как часто нужно кормить рептилий?', a: 'Зависит от вида и возраста. Молодые особи большинства видов едят ежедневно, поскольку быстро растут. Взрослые леопардовые гекконы едят через день, бородатые агамы — ежедневно (сочетание салата и насекомых), а шаровидные питоны — раз в 7–14 дней. Практическое правило: предложите столько пищи, сколько животное может съесть за 10–15 минут, затем уберите остатки.' },
        { q: 'Все ли рептилии едят насекомых?', a: 'Нет. Существует три типа питания у рептилий: инсективоры едят только насекомых (леопардовые гекконы, дневные гекконы), омниворы едят насекомых и растительную пищу (бородатые агамы, синеязычные сцинки), а травоядные едят только растения (сухопутные черепахи, игуаны). Важно знать потребности конкретного вида перед покупкой, чтобы обеспечить правильное питание с первого дня.' },
        { q: 'Как определить правильный размер корма для рептилии?', a: 'Основное правило — насекомое не должно быть крупнее расстояния между глазами вашей рептилии. Слишком крупный корм может вызвать проблемы с пищеварением. У нас в ассортименте дубии и фобии продаются в трёх размерах (S, M, L), так что вы легко подберёте нужный по возрасту вашего животного.' },
        { q: 'Живой или сушёный корм — что лучше для рептилий?', a: 'Живой корм всегда предпочтительнее. Движение насекомого стимулирует охотничий инстинкт рептилии, поддерживает активность и естественное поведение. Живые насекомые также содержат больше влаги и питательных веществ, чем сушёные. Сушёные насекомые могут использоваться как дополнение или резерв, когда живой корм недоступен, но не должны быть основой рациона.' },
        { q: 'Достаточно ли давать только один вид насекомых?', a: 'Технически можно, но не рекомендуется. Разнообразный рацион — сочетание тараканов-дубий, сверчков, латералисов и фобий — обеспечивает лучший баланс белков, жиров, кальция и влаги. Монотонное питание одним видом насекомых со временем может привести к дефициту питательных веществ.' },
      ],
    },
    {
      id: 'insekti',
      pill: 'Кормовые насекомые',
      title: 'Насекомые — <b>корм для рептилий</b>',
      items: [
        { q: 'Какие насекомые используются для кормления рептилий?', a: 'Наиболее популярные кормовые насекомые — тараканы-дубии, сверчки, латералисы (red runner), фобии и мучные черви. Тараканы-дубии — первый выбор для большинства владельцев, поскольку содержат высокий процент белка, мало жира и имеют мягкий хитин, который легко переваривается. Лучших результатов можно добиться, сочетая несколько видов для полноценного питательного профиля.' },
        { q: 'Могут ли тараканы-дубии навредить рептилии?', a: 'Нет, они абсолютно безопасны. Тараканы-дубии не кусаются и не нападают на животных, что делает их одним из самых безопасных кормовых насекомых. В отличие от сверчков, которые могут грызть рептилию ночью, дубии спокойно прячутся и ждут, когда их съедят.' },
        { q: 'Являются ли фобии хорошим кормом для рептилий?', a: 'Фобии богаты белком, и большинство рептилий их обожает, но они содержат больше жира по сравнению с тараканами-дубиями. Поэтому их рекомендуют как дополнительный корм или периодическое лакомство, а не как единственный источник питания. Комбинируйте их с дубиями и сверчками для сбалансированного рациона.' },
        { q: 'Что такое gut loading и почему он важен?', a: 'Gut loading — это кормление насекомых качественной едой за 24–48 часов до того, как дать их рептилии. Насекомые, которые ели овощи, фрукты или специальный корм, передают значительно больше питательных веществ вашему питомцу. Разница в качестве питания существенная — насекомое, которое голодало, не имеет ничего предложить, кроме пустых калорий.' },
        { q: 'Как правильно хранить кормовых насекомых?', a: 'Насекомых содержат в хорошо вентилируемых пластиковых контейнерах. Для тараканов-дубий оптимальная температура — 25–30°C. Обеспечьте им корм (овощи, фрукты или специальный корм для насекомых), укрытия из картонных лотков для яиц и источник влаги. При правильном хранении насекомые остаются здоровыми и питательно ценными в течение нескольких недель.' },
      ],
    },
    {
      id: 'oprema',
      pill: 'Оборудование и условия',
      title: 'Оборудование и <b>условия в террариуме</b>',
      items: [
        { q: 'Почему UVB-освещение необходимо для рептилий?', a: 'UVB-свет позволяет рептилиям синтезировать в коже витамин D3, необходимый для усвоения кальция из пищи. Без UVB-освещения у рептилий развивается метаболическая болезнь костей — деформации, слабость и серьёзные проблемы со здоровьем, которые могут быть смертельными. Пустынным видам (бородатые агамы) нужна лампа с 10–12% UVB, лесным (ресничные гекконы) — 5–7%. Лампы меняют каждые 6–12 месяцев, так как интенсивность UVB-излучения снижается.' },
        { q: 'Нужно ли посыпать насекомых кальцием перед кормлением?', a: 'Да, добавки обязательны. Кальций без D3 используется ежедневно — им посыпают насекомых непосредственно перед кормлением (так называемый dusting). Витаминный препарат или кальций с D3 дают 2–3 раза в неделю. Без добавок рептилии не получают достаточно кальция даже при правильном питании.' },
        { q: 'Нужна ли рептилиям вода в террариуме?', a: 'Да. Большинству рептилий нужна миска со свежей водой, которую меняют ежедневно. Некоторые древесные виды, такие как ресничные гекконы и хамелеоны, получают влагу, слизывая капли с листьев и стенок террариума — помимо миски им нужно регулярное опрыскивание. Водные черепахи живут в воде, поэтому им нужен тер-аквариум с водной частью.' },
      ],
    },
  ],
};
