import type { Locale } from '../../config/site';

interface Item {
  title: string;
  text: string;
}

// Vrednosti sa <b>, <br> i <strong> se renderuju kao HTML - samo nas tekst, nikad korisnicki unos.
export const ABOUT: Record<Locale, {
  meta: { title: string; description: string; image?: string; ogDescription: string };
  h1: string;
  lead: string;
  imgAlt: string;
  storyTitle: string;
  storyTag: string;
  story: string[];
  timelineTitle: string;
  /** godine su u komponenti */
  timeline: Item[];
  valuesTitle: string;
  values: Item[];
  cta: { title: string; text: string; browse: string };
}> = {
  sr: {
    meta: {
      title: 'O nama - NS Reptiles | Odgajivačnica reptila, Novi Sad',
      description:
        'NS Reptiles - odgajivačnica egzotičnih životinja u Novom Sadu od 2019. Uzgoj reptila, izrada terarijuma i akvarijuma po meri, stručan savet i podrška.',
      image: '/style/img/gallery/2.jpg',
      ogDescription:
        'Upoznajte NS Reptiles - odgajivačnicu egzotičnih životinja u Novom Sadu. Uzgoj reptila i izrada terarijuma po meri od 2019.',
    },
    h1: 'Od hobija do<br><b>vodeće odgajivačnice</b>',
    lead: 'Već 10 godina pomažemo ljubiteljima egzotičnih životinja u Novom Sadu i širom Srbije da svojim ljubimcima pruže najbolji mogući dom.',
    imgAlt: 'Bradata agama - NS Reptiles',
    storyTitle: 'Strast koja je<br>prerasla u posao',
    storyTag: '„Sve je počelo iz ljubavi prema reptilima."',
    story: [
      '<strong>NS Reptiles</strong> je odgajivačnica egzotičnih životinja osnovana <strong>2019. godine</strong> u Novom Sadu, nakon mnogo godina ličnog hobija - držanja i uzgoja reptila. Ono što je počelo kao strast prema bradatim agamama i gekonima vremenom je preraslo u ozbiljan posao i zajednicu ljudi koji dele istu ljubav.',
      'Danas u ponudi imamo veliki broj različitih egzotičnih životinja, kao i opremu, hranu i dekoraciju - sve potrebno za zdrav i srećan život vašeg ljubimca. Pored toga, izrađujemo <strong>terarijume i akvarijume po meri</strong>, prilagođene konkretnoj vrsti, njenim potrebama i prostoru u kom će živeti.',
      'Verujemo da dobar dom za reptila nije samo staklena kutija - to je pažljivo osmišljen ekosistem. Zato uz svaku životinju ide i stručan savet, jer želimo da i vi i vaš ljubimac budete zadovoljni dugoročno.',
    ],
    timelineTitle: 'Kako smo <b>rasli</b>',
    timeline: [
      {
        title: 'Osnivanje',
        text: 'Dugogodišnji hobi prerastao je u biznis - počeli smo sa odgajanjem reptila i izgradnjom zajednice ljubitelja egzotičnih životinja.',
      },
      {
        title: 'Prva izrada terarijuma',
        text: 'Krenuli smo sa izradom terarijuma i akvarijuma po meri - svaki komad prilagođen potrebama životinje i prostoru kupca.',
      },
      {
        title: 'Širenje ponude',
        text: 'Proširili smo asortiman na opremu, hranu, dekoracije i akvaristiku. Sve na jednom mestu za vaše ljubimce.',
      },
      {
        title: '1000+ zadovoljnih kupaca',
        text: 'Stekli smo poverenje kupaca širom Srbije - preko 300 zdravih životinja i stotine izrađenih terarijuma i akvarijuma.',
      },
    ],
    valuesTitle: 'Ono u šta <b>verujemo</b>',
    values: [
      {
        title: 'Zdravlje na prvom mestu',
        text: 'Svaka životinja koju nudimo je pažljivo odgajana, zdrava i pitoma. Pre nego što ode u novi dom, prolazi kroz našu brigu i proveru - jer dobar start znači dug i srećan život. Vodimo računa o uslovima držanja, ishrani i adaptaciji, a vama prenosimo sve što treba da znate kako bi se vaš ljubimac od prvog dana osećao bezbedno i zbrinuto.',
      },
      {
        title: 'Izrada po meri',
        text: 'Ne verujemo u rešenja „jedna mera za sve". Terarijume i akvarijume pravimo prema vrsti, navikama životinje i prostoru u kom će živeti.',
      },
      {
        title: 'Poverenje kupaca',
        text: 'Zadovoljnih kupaca širom Srbije i odlične ocene - vaše poverenje je naša najveća referenca.',
      },
      {
        title: 'Savet u svakom koraku',
        text: 'Naš posao se ne završava prodajom. Tu smo za pitanja o ishrani i nezi - pre i posle kupovine.',
      },
      {
        title: 'Kvalitet bez kompromisa',
        text: 'Biramo proverenu opremu i materijale. Bolje jednom dobro nego dvaput jeftino - i za životinju i za vas. Od rasvete i grejača do dekoracije, preporučujemo samo ono što bismo i sami koristili, jer pouzdana oprema znači manje briga i zdraviju životinju na duže staze.',
      },
    ],
    cta: {
      title: 'Pronađite <b>savršenog ljubimca</b>',
      text: 'Bilo da tek krećete u svet reptila ili tražite terarijum po meri - tu smo da pomognemo. Javite nam se, rado ćemo vas posavetovati.',
      browse: 'Pogledaj ponudu',
    },
  },
  en: {
    meta: {
      title: 'About Us - NS Reptiles | Exotic Animal Breeder, Novi Sad',
      description:
        'NS Reptiles - exotic animal breeder in Novi Sad since 2019. Reptile breeding, custom-made terrariums and aquariums, expert advice and support.',
      ogDescription:
        'Meet NS Reptiles - an exotic animal breeder in Novi Sad. Reptile breeding and custom terrarium building since 2019.',
    },
    h1: 'From hobby to<br><b>leading breeder</b>',
    lead: "For over five years, we've been helping exotic animal lovers in Novi Sad and across Serbia provide the best possible home for their pets.",
    imgAlt: 'Bearded dragon - NS Reptiles',
    storyTitle: 'A passion that<br>grew into a business',
    storyTag: '"It all started from a love for reptiles."',
    story: [
      '<strong>NS Reptiles</strong> is an exotic animal breeder founded in <strong>2019</strong> in Novi Sad, after many years of personal hobby - keeping and breeding reptiles. What started as a passion for bearded dragons and geckos gradually grew into a serious business and a community of people who share the same love.',
      'Today we offer a wide range of different exotic animals, as well as equipment, food and decorations - everything needed for a healthy and happy life for your pet. In addition, we build <strong>custom terrariums and aquariums</strong>, tailored to the specific species, its needs and the space where it will live.',
      "We believe that a good home for a reptile is not just a glass box - it's a carefully designed ecosystem. That's why every animal comes with expert advice, because we want both you and your pet to be satisfied in the long run.",
    ],
    timelineTitle: 'How we <b>grew</b>',
    timeline: [
      {
        title: 'Founded',
        text: 'A long-time hobby grew into a business - we started breeding reptiles and building a community of exotic animal enthusiasts.',
      },
      {
        title: 'First terrarium builds',
        text: "We began building custom terrariums and aquariums - each piece tailored to the animal's needs and the customer's space.",
      },
      {
        title: 'Expanding our range',
        text: 'We expanded our assortment to include equipment, food, decorations and aquatics. Everything in one place for your pets.',
      },
      {
        title: '1000+ happy customers',
        text: "We've earned the trust of customers across Serbia - over 300 healthy animals and hundreds of terrariums and aquariums built.",
      },
    ],
    valuesTitle: 'What we <b>believe in</b>',
    values: [
      {
        title: 'Health comes first',
        text: 'Every animal we offer is carefully bred, healthy and tame. Before going to a new home, it goes through our care and checks - because a good start means a long and happy life. We pay attention to keeping conditions, diet and adaptation, and we pass on everything you need to know so your pet feels safe and cared for from day one.',
      },
      {
        title: 'Custom-made builds',
        text: `We don't believe in "one size fits all" solutions. We build terrariums and aquariums according to the species, the animal's habits and the space where it will live.`,
      },
      {
        title: 'Customer trust',
        text: 'Happy customers across Serbia and excellent reviews - your trust is our greatest reference.',
      },
      {
        title: 'Advice every step of the way',
        text: "Our job doesn't end with the sale. We're here for questions about diet and care - before and after purchase.",
      },
      {
        title: 'Quality without compromise',
        text: 'We choose proven equipment and materials. Better to get it right once than to go cheap twice - for both the animal and for you. From lighting and heaters to decorations, we only recommend what we would use ourselves, because reliable equipment means fewer worries and a healthier animal in the long run.',
      },
    ],
    cta: {
      title: 'Find your <b>perfect pet</b>',
      text: "Whether you're just starting out in the world of reptiles or looking for a custom terrarium - we're here to help. Get in touch, we'll be happy to advise you.",
      browse: 'Browse our offer',
    },
  },
  ru: {
    meta: {
      title: 'О нас - NS Reptiles | Питомник рептилий, Нови Сад',
      description:
        'NS Reptiles — питомник экзотических животных в Нови-Саде с 2019 года. Разведение рептилий, террариумы и аквариумы на заказ, экспертные советы и поддержка.',
      ogDescription:
        'Познакомьтесь с NS Reptiles - питомником экзотических животных в Нови Саде. Разведение рептилий и изготовление террариумов на заказ с 2019 года.',
    },
    h1: 'От хобби до<br><b>ведущего питомника</b>',
    lead: 'Уже более пяти лет мы помогаем любителям экзотических животных в Нови Саде и по всей Сербии обеспечить своим питомцам лучший возможный дом.',
    imgAlt: 'Бородатая агама - NS Reptiles',
    storyTitle: 'Увлечение, которое<br>переросло в бизнес',
    storyTag: '«Всё началось с любви к рептилиям.»',
    story: [
      '<strong>NS Reptiles</strong> - это питомник экзотических животных, основанный в <strong>2019 году</strong> в Нови Саде, после многих лет личного увлечения - содержания и разведения рептилий. То, что началось как страсть к бородатым агамам и гекконам, со временем переросло в серьёзный бизнес и сообщество людей, разделяющих ту же любовь.',
      'Сегодня мы предлагаем большой выбор различных экзотических животных, а также оборудование, корм и декорации - всё необходимое для здоровой и счастливой жизни вашего питомца. Кроме того, мы изготавливаем <strong>террариумы и аквариумы на заказ</strong>, адаптированные под конкретный вид, его потребности и пространство, в котором он будет жить.',
      'Мы убеждены, что хороший дом для рептилии - это не просто стеклянная коробка, а тщательно продуманная экосистема. Поэтому к каждому животному прилагается экспертная консультация, ведь мы хотим, чтобы и вы, и ваш питомец были довольны на долгие годы.',
    ],
    timelineTitle: 'Как мы <b>росли</b>',
    timeline: [
      {
        title: 'Основание',
        text: 'Многолетнее увлечение переросло в бизнес - мы начали с разведения рептилий и создания сообщества любителей экзотических животных.',
      },
      {
        title: 'Первый террариум на заказ',
        text: 'Мы начали изготавливать террариумы и аквариумы на заказ - каждое изделие адаптировано под потребности животного и пространство клиента.',
      },
      {
        title: 'Расширение ассортимента',
        text: 'Мы расширили ассортимент, добавив оборудование, корм, декорации и аквариумистику. Всё в одном месте для ваших питомцев.',
      },
      {
        title: '1000+ довольных клиентов',
        text: 'Мы завоевали доверие клиентов по всей Сербии - более 300 здоровых животных и сотни изготовленных террариумов и аквариумов.',
      },
    ],
    valuesTitle: 'Во что мы <b>верим</b>',
    values: [
      {
        title: 'Здоровье на первом месте',
        text: 'Каждое животное, которое мы предлагаем, тщательно выращено, здорово и приручено. Прежде чем отправиться в новый дом, оно проходит через нашу заботу и проверку - потому что хороший старт означает долгую и счастливую жизнь. Мы следим за условиями содержания, питанием и адаптацией, а вам передаём все знания, необходимые для того, чтобы ваш питомец с первого дня чувствовал себя в безопасности и был ухожен.',
      },
      {
        title: 'Изготовление на заказ',
        text: 'Мы не верим в решения «один размер для всех». Террариумы и аквариумы мы делаем с учётом вида, привычек животного и пространства, в котором оно будет жить.',
      },
      {
        title: 'Доверие клиентов',
        text: 'Довольные клиенты по всей Сербии и отличные отзывы - ваше доверие является нашей главной рекомендацией.',
      },
      {
        title: 'Совет на каждом шагу',
        text: 'Наша работа не заканчивается продажей. Мы всегда готовы ответить на вопросы о питании и уходе - до и после покупки.',
      },
      {
        title: 'Качество без компромиссов',
        text: 'Мы выбираем проверенное оборудование и материалы. Лучше один раз качественно, чем дважды дёшево - и для животного, и для вас. От освещения и обогревателей до декораций, мы рекомендуем только то, что использовали бы сами, потому что надёжное оборудование означает меньше забот и более здоровое животное в долгосрочной перспективе.',
      },
    ],
    cta: {
      title: 'Найдите <b>идеального питомца</b>',
      text: 'Независимо от того, только ли вы начинаете знакомство с миром рептилий или ищете террариум на заказ - мы здесь, чтобы помочь. Свяжитесь с нами, мы с удовольствием вас проконсультируем.',
      browse: 'Смотреть ассортимент',
    },
  },
};
