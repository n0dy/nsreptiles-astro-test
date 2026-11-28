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
  schema: L<{ name: string; serviceType: string; description: string }>;
  h1: L;
  lead: L;
  intro: L;
  items: { title: L; text: L }[];
  cta: L<{ title: string; text: string; call: string }>;
  /** linkovi ka stranama po zivotinji - postoje samo na srpskom */
  animals?: Partial<L<{ title: string; links: { href: string; label: string; img: string; contain?: boolean }[] }>>;
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
        description: 'Izrada terarijuma po meri u Novom Sadu: stakleni terarijumi za agame, gekone i pitone, 34 dezena folija, 3D pozadine i UVB rasveta. Rok 7–14 dana.',
        ogTitle: 'Izrada terarijuma po meri | NS Reptiles',
        ogDescription: 'Ručno rađeni stakleni terarijumi po vašim merama - folije, 3D pozadine, rasveta i oprema. Novi Sad.',
        image: '/style/img/logo.jpg',
      },
      en: {
        title: 'Custom Glass Terrarium Builds in Novi Sad | NS Reptiles',
        description: 'Custom glass terrariums in Novi Sad for bearded dragons, geckos and pythons - 34 film finishes, 3D backgrounds and UVB lighting. Ready in 7–14 days.',
        ogTitle: 'Custom Terrarium Builds | NS Reptiles',
        ogDescription: 'Handcrafted glass terrariums built to your exact dimensions - decorative films, 3D backgrounds, lighting and full equipment. Novi Sad.',
      },
      ru: {
        title: 'Террариумы на заказ в Нови-Саде | NS Reptiles',
        description: 'Террариумы на заказ в Нови-Саде: стеклянные террариумы для агам, гекконов и питонов, 34 вида плёнок, 3D-фоны и UVB-освещение. Срок - 7–14 дней.',
        ogTitle: 'Террариумы на заказ | NS Reptiles',
        ogDescription: 'Ручная работа - стеклянные террариумы по вашим размерам: плёнки, 3D-фоны, освещение и оборудование. Нови-Сад.',
      },
    },
    schema: {
      sr: {
        name: 'Izrada terarijuma po meri',
        serviceType: 'Izrada terarijuma po meri',
        description: 'Izrada terarijuma po meri u Novom Sadu. Stakleni terarijumi za agame, gekone i pitone, 34 dezena folija, 3D pozadine i UVB rasveta. Rok izrade 7–14 dana.',
      },
      en: {
        name: 'Custom Terrarium Builds',
        serviceType: 'Custom Terrarium Manufacturing',
        description: 'Custom-built glass terrariums in Novi Sad. Handcrafted terrariums for bearded dragons, geckos and pythons - 34 film finishes, 3D backgrounds and UVB lighting. Ready in 7–14 days.',
      },
      ru: {
        name: 'Изготовление террариумов на заказ',
        serviceType: 'Изготовление террариумов на заказ',
        description: 'Изготовление террариумов на заказ в Нови-Саде. Стеклянные террариумы для агам, гекконов и питонов, 34 вида плёнок, 3D-фоны и UVB-освещение. Срок изготовления 7–14 дней.',
      },
    },
    h1: {
      sr: 'Izrada terarijuma po meri',
      en: 'Custom Terrarium Builds',
      ru: 'Террариумы на заказ',
    },
    lead: {
      sr: 'Svaki terarijum izrađujemo ručno od stakla, po vašim merama i željama - sa folijom po izboru, 3D pozadinom i kompletnom opremom.',
      en: 'Every terrarium is handcrafted from glass, built to your exact dimensions and preferences - with the decorative film of your choice, a 3D background, and full equipment included.',
      ru: 'Каждый террариум мы изготавливаем вручную из стекла, по вашим размерам и пожеланиям - с выбранной плёнкой, 3D-фоном и полным комплектом оборудования.',
    },
    intro: {
      sr: 'Staklene terarijume pravimo ručno u Novom Sadu, po merama koje nam pošaljete: dužina od 30 do 200 cm, širina od 25 do 100 cm i visina od 25 do 150 cm. Za vrste koje žive na tlu pravimo horizontalne terarijume, a za one koje se penju vertikalne. Odrasloj bradatoj agami treba oko 100x50x50 cm, a leopard gekonu oko 50x35x35 cm. Ne znate koja je veličina prava za vašeg ljubimca? <strong>Rado ćemo vam pomoći</strong> da izaberete.<br><br>Terarijum možete i sami da složite u <a href="/3d-terarijum.html" style="text-decoration: underline">3D konfiguratoru</a>: zadate mere, izaberete dezen folije i pozadinu, pogledate model u 3D prikazu, a na telefonu i u proširenoj stvarnosti (AR), pa nam dugmetom „Poruči terarijum“ pošaljete parametre. Kako se konfigurator koristi piše u <a href="/3d-uputstvo.html" style="text-decoration: underline">uputstvu</a>. Cena zavisi od dimenzija, debljine stakla i opreme, a ponudu šaljemo kada dobijemo mere. NS Reptiles postoji od 2019. godine, a reptile odgajamo duže od 10 godina.',
      en: 'We build glass terrariums by hand in Novi Sad, to the measurements you send us: 30 to 200 cm long, 25 to 100 cm wide and 25 to 150 cm high. Ground-dwelling species get a horizontal terrarium, climbers a vertical one. An adult bearded dragon needs about 100x50x50 cm, a leopard gecko about 50x35x35 cm. Not sure what size is right for your animal? <strong>We\'re happy to help</strong> you choose.<br><br>You can also put the terrarium together yourself in the <a href="/en/3d-terrarium.html" style="text-decoration: underline">3D configurator</a>: set the dimensions, pick the film design and the background, look at the model in 3D, and in augmented reality (AR) on a phone, then send us the parameters with the “Order this terrarium” button. The <a href="/en/3d-guide.html" style="text-decoration: underline">guide</a> explains how the configurator works. The price depends on the dimensions, glass thickness and equipment, and we send a quote once we have your measurements. NS Reptiles was founded in 2019, and we have been breeding reptiles for over 10 years.',
      ru: 'Стеклянные террариумы мы делаем вручную в Нови-Саде по размерам, которые вы нам пришлёте: длина от 30 до 200 см, ширина от 25 до 100 см, высота от 25 до 150 см. Для наземных видов делаем горизонтальные террариумы, для лазающих вертикальные. Взрослой бородатой агаме нужно около 100x50x50 см, леопардовому геккону около 50x35x35 см. Не знаете, какой размер подойдёт вашему питомцу? <strong>Мы с радостью поможем</strong> выбрать.<br><br>Террариум можно собрать и самостоятельно в <a href="/ru/3d-terrarium.html" style="text-decoration: underline">3D-конфигураторе</a>: задайте размеры, выберите декор плёнки и фон, посмотрите модель в 3D, а на телефоне и в дополненной реальности (AR), и отправьте нам параметры кнопкой «Заказать террариум». Как пользоваться конфигуратором, описано в <a href="/ru/3d-guide.html" style="text-decoration: underline">инструкции</a>. Цена зависит от размеров, толщины стекла и оборудования, а предложение мы отправляем, когда получим размеры. NS Reptiles работает с 2019 года, а рептилий мы разводим более 10 лет.',
    },
    items: [
      {
        title: {
          sr: 'Kontaktirajte nas',
          en: 'Get in touch',
          ru: 'Свяжитесь с нами',
        },
        text: {
          sr: 'Javite nam se telefonom, mejlom ili putem društvenih mreža i recite koje dimenzije terarijuma želite i za koju životinju. Radimo dužine od 30 do 200 cm, širine od 25 do 100 cm i visine od 25 do 150 cm. Ako niste sigurni koja veličina odgovara vašem ljubimcu, predložićemo je: horizontalni terarijum za vrste koje žive na tlu, vertikalni za one koje se penju. Kada dobijemo mere, šaljemo vam ponudu.',
          en: 'Reach us by phone, email or social media and tell us what dimensions you have in mind and which animal the terrarium is for. We build lengths from 30 to 200 cm, widths from 25 to 100 cm and heights from 25 to 150 cm. If you\'re not sure what size suits your pet, we\'ll suggest one: a horizontal terrarium for ground dwellers, a vertical one for climbers. Once we have the measurements, we send you a quote.',
          ru: 'Свяжитесь с нами по телефону, электронной почте или через социальные сети и сообщите, какие размеры террариума вам нужны и для какого животного. Мы делаем длину от 30 до 200 см, ширину от 25 до 100 см и высоту от 25 до 150 см. Если вы не уверены, какой размер подойдёт вашему питомцу, мы его предложим: горизонтальный террариум для наземных видов, вертикальный для лазающих. Получив размеры, мы отправим вам предложение.',
        },
      },
      {
        title: {
          sr: 'Odaberite boju terarijuma',
          en: 'Choose your finish',
          ru: 'Выберите цвет террариума',
        },
        text: {
          sr: 'Spoljašnje strane terarijuma oblažemo dekorativnom folijom koju birate među 34 dezena, pa terarijum lako uklopite sa ostatkom enterijera. Umesto folije terarijum može biti obložen crnim lakobelom. Kako izabrani dezen izgleda na vašim merama možete da vidite u 3D konfiguratoru pre nego što poručite.',
          en: 'The outside of the terrarium is covered in a decorative film that you choose from 34 designs, so it is easy to match the terrarium to the rest of your interior. Instead of film, the terrarium can be finished in black lacquer board. You can see how the design you picked looks on your dimensions in the 3D configurator before you order.',
          ru: 'Наружные стороны террариума мы оклеиваем декоративной плёнкой, которую вы выбираете из 34 декоров, поэтому террариум легко вписать в интерьер. Вместо плёнки террариум можно отделать чёрным лакобелем. Как выбранный декор выглядит на ваших размерах, можно посмотреть в 3D-конфигураторе до заказа.',
        },
      },
      {
        title: {
          sr: 'Izaberite 3D pozadinu',
          en: 'Pick a 3D background',
          ru: 'Выберите 3D-фон',
        },
        text: {
          sr: 'Pozadina može biti klasična folija sa slikom, fabrički model, 3D pozadina od prirodnog siga kamena ili naša ručno rađena 3D pozadina: stiropor rezbarimo tako da dobije oblik stene ili kore drveta. Terarijum može da ostane i bez pozadine. Po želji dodajemo podlogu i dekoraciju, na primer grane za penjanje i skrovišta.',
          en: 'The background can be a printed picture film, a factory panel, a 3D background made of natural rock, or our hand-made 3D background: we carve polystyrene into the shape of rock or tree bark. The terrarium can also stay without a background. On request we add substrate and décor, such as climbing branches and hides.',
          ru: 'Фоном может быть классическая плёнка с рисунком, заводская модель, 3D-фон из натурального камня или наш 3D-фон ручной работы: мы вырезаем пенопласт так, чтобы он принял форму скалы или коры дерева. Террариум можно оставить и без фона. По желанию добавляем грунт и декор, например ветки для лазания и укрытия.',
        },
      },
      {
        title: {
          sr: 'Rasveta i oprema',
          en: 'Lighting and equipment',
          ru: 'Освещение и оборудование',
        },
        text: {
          sr: 'Za zdravlje reptila najvažnije su pravilno podešena rasveta i temperatura. Pomoći ćemo vam da prema vrsti koju držite odaberete odgovarajuću UVB/UVA rasvetu, grejače, termostate, podlogu i dekoracije. Sve to može da uđe u jednu cenu, zajedno sa terarijumom, tako da opremu ne morate da tražite na više mesta.',
          en: 'Proper lighting and temperature matter most for a reptile\'s health. We\'ll help you choose the right UVB/UVA lighting, heaters, thermostats, substrate and decorations for the species you keep. All of it can go into one price together with the terrarium, so you don\'t have to look for equipment in several places.',
          ru: 'Для здоровья рептилии важнее всего правильно подобранные освещение и температура. Мы поможем выбрать подходящее UVB/UVA-освещение, обогреватели, термостаты, грунт и декорации под тот вид, который вы содержите. Всё это можно включить в одну цену вместе с террариумом, чтобы вам не пришлось искать оборудование в разных местах.',
        },
      },
      {
        title: {
          sr: 'Kapara 30%',
          en: '30% deposit',
          ru: 'Задаток 30%',
        },
        text: {
          sr: 'Izradu počinjemo kada uplatite kaparu od najmanje 30% ukupne cene. Kaparu uplaćujete tek kada se dogovorimo oko mera, dezena, pozadine i opreme i kada dobijete ponudu. Ostatak iznosa plaćate po završetku izrade, prilikom preuzimanja terarijuma.',
          en: 'We start the build once you pay a deposit of at least 30% of the total price. You pay the deposit only after we have agreed on the dimensions, film design, background and equipment and you have received the quote. The remainder is due when the build is finished, on collection of the terrarium.',
          ru: 'Мы начинаем изготовление после внесения задатка не менее 30% от общей стоимости. Задаток вы вносите только после того, как мы согласуем размеры, декор, фон и оборудование и вы получите предложение. Остаток оплачивается по завершении изготовления, при получении террариума.',
        },
      },
      {
        title: {
          sr: 'Izrada - 7–14 dana',
          en: 'Build time - 7–14 days',
          ru: 'Срок изготовления - 7–14 дней',
        },
        text: {
          sr: 'Terarijum sastavljamo ručno od stakla. Prednja stakla su klizna, ventilacija ide kroz otvore sa mrežicom, a tip poklopca dogovaramo sa vama. Uobičajeni rok izrade je 7–14 dana. Za veće i zahtevnije projekte, kao što su terarijumi za veliku vodenu agamu ili iguanu, rok može biti i duži.',
          en: 'The terrarium is assembled by hand from glass. The front panes slide, ventilation goes through mesh-covered openings, and we agree the type of lid with you. Standard build time is 7–14 days. For larger or more complex builds, such as terrariums for a large water dragon or iguana, it may take longer.',
          ru: 'Террариум мы собираем вручную из стекла. Передние стёкла раздвижные, вентиляция идёт через отверстия с сеткой, а тип крышки мы согласуем с вами. Обычный срок изготовления 7–14 дней. Для более крупных и сложных проектов, например террариумов для большой водяной агамы или игуаны, срок может быть больше.',
        },
      },
      {
        title: {
          sr: 'Preuzimanje terarijuma',
          en: 'Collection',
          ru: 'Получение террариума',
        },
        text: {
          sr: 'Terarijum možete preuzeti lično u Novom Sadu ili vam ga šaljemo kurirskom službom, autobusom ili kombijem bilo gde u Srbiji. Način slanja biramo prema veličini: za veće terarijume organizujemo dostavu kombijem. Troškove slanja snosi kupac.',
          en: 'You can collect the terrarium in person in Novi Sad, or we send it by courier, bus or van anywhere in Serbia. The shipping method depends on the size: for larger terrariums we arrange delivery by van. Shipping costs are covered by the buyer.',
          ru: 'Террариум можно забрать лично в Нови-Саде, или мы отправим его курьерской службой, автобусом или фургоном в любую точку Сербии. Способ доставки выбираем по размеру: для крупных террариумов организуем доставку фургоном. Расходы на доставку несёт покупатель.',
        },
      },
    ],
    cta: {
      sr: {
        title: 'Vaš terarijum <b>po meri</b>',
        text: 'Pošaljite nam dimenzije i vrstu životinje - izradićemo terarijum tačno po vašim potrebama, sa 3D pozadinom po želji.',
        call: 'Pozovi nas',
      },
      en: {
        title: 'Your terrarium, <b>built to order</b>',
        text: 'Send us your dimensions and the type of animal - we\'ll build a terrarium tailored to your exact needs, with the 3D background of your choice.',
        call: 'Call us',
      },
      ru: {
        title: 'Ваш террариум <b>на заказ</b>',
        text: 'Пришлите нам размеры и вид животного - мы изготовим террариум точно по вашим потребностям, с 3D-фоном по желанию.',
        call: 'Позвоните нам',
      },
    },
    animals: {
      sr: {
        title: 'Terarijum za <b>vašu životinju</b>',
        links: [
          { href: '/terarijumi/terarijum-za-bradatu-agamu.html', label: 'Terarijum za bradatu agamu', img: '/style/img/reptili/bradata.webp' },
          { href: '/terarijumi/terarijum-za-leopard-gekona.html', label: 'Terarijum za leopard gekona', img: '/style/img/reptili/leopard.webp' },
          { href: '/terarijumi/terarijum-za-loptastog-pitona.html', label: 'Terarijum za loptastog pitona', img: '/style/img/reptili/piton.webp' },
          { href: '/terarijumi/terarijum-za-kornjacu.html', label: 'Terarijum za kornjaču', img: '/style/img/terrariums/ta-50x35x45x25-zuto-drvo-web.webp', contain: true },
        ],
      },
      en: {
        title: 'A terrarium for <b>your animal</b>',
        links: [
          { href: '/terarijumi/terarijum-za-bradatu-agamu.html', label: 'Bearded dragon terrarium', img: '/style/img/reptili/bradata.webp' },
          { href: '/terarijumi/terarijum-za-leopard-gekona.html', label: 'Leopard gecko terrarium', img: '/style/img/reptili/leopard.webp' },
          { href: '/terarijumi/terarijum-za-loptastog-pitona.html', label: 'Ball python terrarium', img: '/style/img/reptili/piton.webp' },
          { href: '/terarijumi/terarijum-za-kornjacu.html', label: 'Turtle terrarium', img: '/style/img/terrariums/ta-50x35x45x25-zuto-drvo-web.webp', contain: true },
        ],
      },
      ru: {
        title: 'Террариум для <b>вашего животного</b>',
        links: [
          { href: '/terarijumi/terarijum-za-bradatu-agamu.html', label: 'Террариум для бородатой агамы', img: '/style/img/reptili/bradata.webp' },
          { href: '/terarijumi/terarijum-za-leopard-gekona.html', label: 'Террариум для леопардового геккона', img: '/style/img/reptili/leopard.webp' },
          { href: '/terarijumi/terarijum-za-loptastog-pitona.html', label: 'Террариум для королевского питона', img: '/style/img/reptili/piton.webp' },
          { href: '/terarijumi/terarijum-za-kornjacu.html', label: 'Террариум для черепахи', img: '/style/img/terrariums/ta-50x35x45x25-zuto-drvo-web.webp', contain: true },
        ],
      },
    },
    more: [
      { href: '/3d-terarijum.html', label: { sr: 'Složi terarijum u 3D', en: 'Build it in 3D', ru: 'Соберите в 3D' } },
      { href: '/3d-uputstvo.html', label: { sr: 'Uputstvo za 3D konfigurator', en: '3D configurator guide', ru: 'Инструкция к 3D-конфигуратору' } },
      { href: '/cenovnik.html', label: { sr: 'Cenovnik', en: 'Price list', ru: 'Прайс-лист' } },
      { href: '/izrada-akvarijuma.html', label: { sr: 'Izrada akvarijuma', en: 'Custom aquariums', ru: 'Изготовление аквариумов' } },
      { href: '/izrada-vivarijuma.html', label: { sr: 'Izrada vivarijuma', en: 'Custom vivariums', ru: 'Изготовление вивариумов' } },
      { href: '/izrada-led-rasvete.html', label: { sr: 'Izrada LED rasvete', en: 'Custom LED lighting', ru: 'Изготовление LED-освещения' } },
      { href: '/izrada-postolja.html', label: { sr: 'Postolja i police', en: 'Stands & cabinets', ru: 'Подставки и тумбы' } },
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
        description: 'Izrada akvarijuma po meri u Novom Sadu: stakleni akvarijumi za ribice i kornjače, 34 dezena folija, LED rasveta, filteri i 3D pozadine. Rok 7–14 dana.',
        ogTitle: 'Izrada akvarijuma po meri | NS Reptiles',
        ogDescription: 'Ručno lepljeni stakleni akvarijumi po vašim merama - folije, LED rasveta, filteri i oprema. Novi Sad.',
        image: '/style/img/logo.jpg',
      },
      en: {
        title: 'Custom Aquariums - Made-to-Order Glass Tanks | NS Reptiles',
        description: 'Custom-built glass aquariums in Novi Sad for fish and turtles: 34 vinyl wrap designs, LED lighting, filters and 3D backgrounds. Ready in 7–14 days.',
        ogTitle: 'Custom Aquariums | NS Reptiles',
        ogDescription: 'Hand-sealed glass aquariums built to your exact dimensions - vinyl wraps, LED lighting, filters, and full equipment. Novi Sad.',
      },
      ru: {
        title: 'Аквариумы на заказ в Нови-Саде | NS Reptiles',
        description: 'Аквариумы на заказ в Нови-Саде: стеклянные аквариумы для рыб и черепах, 34 вида плёнки, LED-освещение, фильтры и 3D-фоны. Срок - 7–14 дней.',
        ogTitle: 'Аквариумы на заказ | NS Reptiles',
        ogDescription: 'Стеклянные аквариумы ручной работы по вашим размерам - плёнка, LED-освещение, фильтры и оборудование. Нови-Сад.',
      },
    },
    schema: {
      sr: {
        name: 'Izrada akvarijuma po meri',
        serviceType: 'Izrada akvarijuma po meri',
        description: 'Izrada akvarijuma po meri u Novom Sadu. Stakleni akvarijumi za ribice i kornjače, 34 dezena folija, LED rasveta, filteri i 3D pozadine. Rok izrade 7–14 dana.',
      },
      en: {
        name: 'Custom Aquarium Building',
        serviceType: 'Custom Aquarium Building',
        description: 'Custom-built glass aquariums in Novi Sad. Handcrafted tanks for fish and turtles, 34 vinyl wrap designs, LED lighting, filters, and 3D backgrounds. Ready in 7–14 days.',
      },
      ru: {
        name: 'Изготовление аквариумов на заказ',
        serviceType: 'Изготовление аквариумов на заказ',
        description: 'Изготовление аквариумов на заказ в Нови-Саде. Стеклянные аквариумы для рыб и черепах, 34 вида плёнки, LED-освещение, фильтры и 3D-фоны. Срок изготовления - 7–14 дней.',
      },
    },
    h1: {
      sr: 'Izrada akvarijuma po meri',
      en: 'Custom Aquariums',
      ru: 'Аквариумы на заказ',
    },
    lead: {
      sr: 'Svaki akvarijum izrađujemo ručno od stakla, po vašim merama i željama - sa folijom po izboru, LED rasvetom i kompletnom opremom.',
      en: 'Every aquarium we build is handcrafted from glass, made to your exact measurements and preferences - with your choice of vinyl wrap, LED lighting, and full equipment.',
      ru: 'Каждый аквариум изготавливается вручную из стекла по вашим размерам и пожеланиям - с плёнкой на выбор, LED-освещением и полным комплектом оборудования.',
    },
    intro: {
      sr: 'Staklene akvarijume pravimo ručno u Novom Sadu, po merama vašeg prostora: dužina od 20 do 200 cm, širina od 15 do 100 cm i visina od 15 do 120 cm. Debljinu stakla biramo prema zapremini i visini akvarijuma, a u radionici imamo staklo od 4, 6, 8, 10 i 12 mm. Uz akvarijum možemo da napravimo pokrovno staklo, ugrađenu komoru za filter, 3D pozadinu i LED rasvetu. Niste sigurni koja je veličina prava za vaše ribice ili kornjače? <strong>Rado ćemo vam pomoći</strong> da izaberete.<br><br>Akvarijum možete i sami da složite u <a href="/3d-akvarijum.html" style="text-decoration: underline">3D konfiguratoru</a>: zadate mere, pogledate model u 3D prikazu, a na telefonu i u proširenoj stvarnosti (AR), pa nam dugmetom „Poruči akvarijum“ pošaljete parametre. Kako se konfigurator koristi piše u <a href="/3d-uputstvo.html" style="text-decoration: underline">uputstvu</a>. Cena zavisi od dimenzija, debljine stakla i opreme, a ponudu šaljemo kada dobijemo mere. Pre poručivanja proverite i gde će akvarijum stajati: pun akvarijum teži oko 1 kg po litru vode, plus težina stakla, pa mu treba ravna i čvrsta podloga.',
      en: 'We build glass aquariums by hand in Novi Sad, to fit your space: 20 to 200 cm long, 15 to 100 cm wide and 15 to 120 cm high. Glass thickness is chosen by the volume and height of the tank, and the workshop stocks 4, 6, 8, 10 and 12 mm glass. With the aquarium we can make a cover glass, a built-in filter chamber, a 3D background and LED lighting. Not sure what size is best for your fish or turtles? <strong>We\'re happy to help</strong> you choose.<br><br>You can also put the aquarium together yourself in the <a href="/en/3d-aquarium.html" style="text-decoration: underline">3D configurator</a>: set the dimensions, look at the model in 3D, and in augmented reality (AR) on a phone, then send us the parameters with the “Order this aquarium” button. The <a href="/en/3d-guide.html" style="text-decoration: underline">guide</a> explains how the configurator works. The price depends on the dimensions, glass thickness and equipment, and we send a quote once we have your measurements. Before ordering, check where the aquarium will stand: a full tank weighs about 1 kg per litre of water plus the weight of the glass, so it needs a flat, solid stand.',
      ru: 'Стеклянные аквариумы мы делаем вручную в Нови-Саде по размерам вашего помещения: длина от 20 до 200 см, ширина от 15 до 100 см, высота от 15 до 120 см. Толщину стекла подбираем по объёму и высоте аквариума, в мастерской есть стекло 4, 6, 8, 10 и 12 мм. К аквариуму можем сделать покровное стекло, встроенный отсек для фильтра, 3D-фон и LED-освещение. Не уверены, какой размер подойдёт вашим рыбам или черепахам? <strong>Мы с радостью поможем</strong> выбрать.<br><br>Аквариум можно собрать и самостоятельно в <a href="/ru/3d-aquarium.html" style="text-decoration: underline">3D-конфигураторе</a>: задайте размеры, посмотрите модель в 3D, а на телефоне и в дополненной реальности (AR), и отправьте нам параметры кнопкой «Заказать аквариум». Как пользоваться конфигуратором, описано в <a href="/ru/3d-guide.html" style="text-decoration: underline">инструкции</a>. Цена зависит от размеров, толщины стекла и оборудования, а предложение мы отправляем, когда получим размеры. Перед заказом проверьте, где будет стоять аквариум: полный аквариум весит около 1 кг на литр воды плюс вес стекла, поэтому ему нужна ровная и прочная опора.',
    },
    items: [
      {
        title: {
          sr: 'Kontaktirajte nas',
          en: 'Get in touch',
          ru: 'Свяжитесь с нами',
        },
        text: {
          sr: 'Javite nam se telefonom, mejlom ili putem društvenih mreža i recite koje dimenzije akvarijuma želite i šta planirate da držite u njemu. Radimo dužine od 20 do 200 cm, širine od 15 do 100 cm i visine od 15 do 120 cm. Ako niste sigurni koja veličina odgovara vašim ribicama ili kornjačama, predložićemo je. Kada dobijemo mere, šaljemo vam ponudu.',
          en: 'Reach out by phone, email or social media and tell us the dimensions you have in mind and what you plan to keep in the tank. We build lengths from 20 to 200 cm, widths from 15 to 100 cm and heights from 15 to 120 cm. If you\'re not sure what size works for your fish or turtles, we\'ll suggest one. Once we have the measurements, we send you a quote.',
          ru: 'Свяжитесь с нами по телефону, электронной почте или через социальные сети и сообщите, какие размеры аквариума вам нужны и кого вы планируете в нём содержать. Мы делаем длину от 20 до 200 см, ширину от 15 до 100 см и высоту от 15 до 120 см. Если вы не уверены, какой размер подойдёт вашим рыбам или черепахам, мы его предложим. Получив размеры, мы отправим вам предложение.',
        },
      },
      {
        title: {
          sr: 'Odaberite boju akvarijuma',
          en: 'Choose your wrap',
          ru: 'Выберите цвет аквариума',
        },
        text: {
          sr: 'Spoljašnje strane akvarijuma oblažemo dekorativnom folijom koju birate među 34 dezena, pa akvarijum lako uklopite sa ostatkom enterijera. Umesto folije akvarijum može biti obložen crnim lakobelom.',
          en: 'The outside of the aquarium is covered in a vinyl wrap that you choose from 34 designs, so it is easy to match the tank to your interior. Instead of vinyl, the aquarium can be finished in black lacquered glass.',
          ru: 'Наружные стороны аквариума мы оклеиваем декоративной плёнкой, которую вы выбираете из 34 декоров, поэтому аквариум легко вписать в интерьер. Вместо плёнки аквариум можно отделать чёрным лакобелем.',
        },
      },
      {
        title: {
          sr: 'Izaberite 3D pozadinu',
          en: 'Pick a 3D background',
          ru: 'Выберите 3D-фон',
        },
        text: {
          sr: 'Pozadina može biti klasična folija sa slikom, fabrički model, 3D pozadina od stiropora ili 3D pozadina od prirodnog siga kamena. Akvarijum može da ostane i bez pozadine, sa providnim zadnjim staklom. Pozadinu je najlakše ugraditi tokom izrade, zato je izaberite pre nego što počnemo.',
          en: 'The background can be a classic photo print, a factory-made panel, a 3D polystyrene background or a 3D background made of natural stone. The aquarium can also stay without a background, with a clear back pane. A background is easiest to fit during the build, so choose it before we start.',
          ru: 'Фоном может быть классическая плёнка с рисунком, заводская модель, 3D-фон из пенопласта или 3D-фон из натурального камня. Аквариум можно оставить и без фона, с прозрачным задним стеклом. Фон проще всего установить во время изготовления, поэтому выберите его до начала работы.',
        },
      },
      {
        title: {
          sr: 'Rasveta i oprema',
          en: 'Lighting & equipment',
          ru: 'Освещение и оборудование',
        },
        text: {
          sr: 'Nudimo LED rasvetu koja je energetski efikasna i dugotrajna, sa dnevnim i noćnim režimom, prekidačima na samom akvarijumu i mogućnošću daljinskog upravljanja. U akvarijum možemo da ugradimo komoru za filter i da napravimo pokrovno staklo. Pomažemo i u odabiru filtera, pumpe, grejača, podloge i dekoracije.',
          en: 'We offer energy-efficient, long-lasting LED lighting with day and night modes, switches on the tank itself and optional remote control. We can build a filter chamber into the aquarium and make a cover glass for it. We also help you choose the filter, pump, heater, substrate and decorations.',
          ru: 'Мы предлагаем энергоэффективное и долговечное LED-освещение с дневным и ночным режимами, выключателями на самом аквариуме и возможностью дистанционного управления. В аквариум можем встроить отсек для фильтра и сделать покровное стекло. Помогаем и с выбором фильтра, помпы, обогревателя, грунта и декора.',
        },
      },
      {
        title: {
          sr: 'Kapara 30%',
          en: '30% deposit',
          ru: 'Предоплата 30%',
        },
        text: {
          sr: 'Izradu počinjemo kada uplatite kaparu od najmanje 30% ukupne cene. Kaparu uplaćujete tek kada se dogovorimo oko mera, debljine stakla i opreme i kada dobijete ponudu. Ostatak iznosa plaćate po završetku izrade, prilikom preuzimanja akvarijuma.',
          en: 'We start the build once you pay a deposit of at least 30% of the total price. You pay the deposit only after we have agreed on the dimensions, glass thickness and equipment and you have received the quote. The remaining balance is due when the build is finished, on collection of the aquarium.',
          ru: 'Мы начинаем изготовление после внесения предоплаты не менее 30% от общей стоимости. Предоплату вы вносите только после того, как мы согласуем размеры, толщину стекла и оборудование и вы получите предложение. Остаток оплачивается по завершении изготовления, при получении аквариума.',
        },
      },
      {
        title: {
          sr: 'Izrada - 7–14 dana',
          en: 'Build time - 7–14 days',
          ru: 'Изготовление - 7–14 дней',
        },
        text: {
          sr: 'Akvarijum lepimo ručno, od stakla čiju debljinu biramo prema zapremini i visini; na stanju imamo staklo od 4, 6, 8, 10 i 12 mm. Uobičajeni rok izrade je 7–14 dana. Za veće i zahtevnije projekte rok može biti i duži.',
          en: 'The aquarium is glued by hand from glass whose thickness we choose by volume and height; we stock 4, 6, 8, 10 and 12 mm glass. The standard build time is 7–14 days. For larger or more complex builds it may take longer.',
          ru: 'Аквариум мы клеим вручную из стекла, толщину которого подбираем по объёму и высоте; в наличии есть стекло 4, 6, 8, 10 и 12 мм. Обычный срок изготовления 7–14 дней. Для более крупных и сложных проектов срок может быть больше.',
        },
      },
      {
        title: {
          sr: 'Preuzimanje akvarijuma',
          en: 'Pick up your aquarium',
          ru: 'Получение аквариума',
        },
        text: {
          sr: 'Akvarijum možete preuzeti lično u Novom Sadu ili vam ga šaljemo kurirskom službom, autobusom ili kombijem bilo gde u Srbiji; za veće akvarijume organizujemo dostavu kombijem. Troškove slanja snosi kupac. Pre nego što akvarijum stigne pripremite ravnu i čvrstu podlogu, jer pun akvarijum teži oko 1 kg po litru vode, plus težina stakla.',
          en: 'You can collect the aquarium in person in Novi Sad, or we send it by courier, bus or van anywhere in Serbia; for larger tanks we arrange delivery by van. Shipping costs are covered by the buyer. Before the aquarium arrives, prepare a flat, solid stand, because a full tank weighs about 1 kg per litre of water plus the weight of the glass.',
          ru: 'Аквариум можно забрать лично в Нови-Саде, или мы отправим его курьерской службой, автобусом или фургоном в любую точку Сербии; для крупных аквариумов организуем доставку фургоном. Расходы на доставку несёт покупатель. До прибытия аквариума подготовьте ровную и прочную опору, потому что полный аквариум весит около 1 кг на литр воды плюс вес стекла.',
        },
      },
    ],
    cta: {
      sr: {
        title: 'Vaš akvarijum <b>po meri</b>',
        text: 'Pošaljite nam dimenzije i namenu - izradićemo akvarijum tačno po vašem prostoru, sa LED rasvetom po želji.',
        call: 'Pozovi nas',
      },
      en: {
        title: 'Your aquarium, <b>built to order</b>',
        text: 'Send us your dimensions and intended use - we\'ll build an aquarium that fits your space perfectly, with LED lighting of your choice.',
        call: 'Call us',
      },
      ru: {
        title: 'Ваш аквариум <b>на заказ</b>',
        text: 'Пришлите нам размеры и назначение - изготовим аквариум точно под ваше пространство с LED-освещением по вашему желанию.',
        call: 'Позвоните нам',
      },
    },
    animals: {
      sr: {
        title: 'Akvarijum za <b>vašu životinju</b>',
        links: [
          { href: '/akvarijumi/akvarijum-za-kornjacu.html', label: 'Akvarijum za kornjaču', img: '/style/img/terrariums/ta-50x35x45x25-zuto-drvo-web.webp', contain: true },
        ],
      },
      en: {
        title: 'An aquarium for <b>your animal</b>',
        links: [{ href: '/akvarijumi/akvarijum-za-kornjacu.html', label: 'Turtle aquarium', img: '/style/img/terrariums/ta-50x35x45x25-zuto-drvo-web.webp', contain: true }],
      },
      ru: {
        title: 'Аквариум для <b>вашего животного</b>',
        links: [{ href: '/akvarijumi/akvarijum-za-kornjacu.html', label: 'Аквариум для черепахи', img: '/style/img/terrariums/ta-50x35x45x25-zuto-drvo-web.webp', contain: true }],
      },
    },
    more: [
      { href: '/3d-akvarijum.html', label: { sr: 'Složi akvarijum u 3D', en: 'Build it in 3D', ru: 'Соберите в 3D' } },
      { href: '/3d-uputstvo.html', label: { sr: 'Uputstvo za 3D konfigurator', en: '3D configurator guide', ru: 'Инструкция к 3D-конфигуратору' } },
      { href: '/cenovnik.html', label: { sr: 'Cenovnik', en: 'Price list', ru: 'Прайс-лист' } },
      { href: '/izrada-terarijuma.html', label: { sr: 'Izrada terarijuma', en: 'Custom terrariums', ru: 'Изготовление террариумов' } },
      { href: '/izrada-vivarijuma.html', label: { sr: 'Izrada vivarijuma', en: 'Custom vivariums', ru: 'Изготовление вивариумов' } },
      { href: '/izrada-led-rasvete.html', label: { sr: 'Izrada LED rasvete', en: 'Custom LED lighting', ru: 'Изготовление LED-освещения' } },
      { href: '/izrada-postolja.html', label: { sr: 'Postolja i police', en: 'Stands & cabinets', ru: 'Подставки и тумбы' } },
      { href: '/odrzavanje-akvarijuma-terarijuma.html', label: { sr: 'Održavanje i uređenje', en: 'Maintenance & setup', ru: 'Обслуживание и оформление' } },
      { href: '/popravka-akvarijuma-terarijuma.html', label: { sr: 'Popravka i servis', en: 'Repairs & servicing', ru: 'Ремонт и сервис' } },
    ],
  },
  vivarijumi: {
    path: '/izrada-vivarijuma.html',
    layout: 'proc',
    meta: {
      sr: {
        title: 'Izrada vivarijuma po meri, Novi Sad | NS Reptiles',
        description: 'Izrada vivarijuma po meri u Novom Sadu: stakleni vivarijumi za tropske biljke, žabe i vodozemce, 34 dezena folija i specijalna rasveta. Rok 7–14 dana.',
        ogTitle: 'Izrada vivarijuma po meri | NS Reptiles',
        ogDescription: 'Ručno rađeni stakleni vivarijumi po vašim merama - rasveta punog spektra, sistem za vlažnost i oprema. Novi Sad.',
        image: '/style/img/logo.jpg',
      },
      en: {
        title: 'Custom Glass Vivarium Building in Novi Sad | NS Reptiles',
        description: 'Custom glass vivariums in Novi Sad: full-spectrum lighting, 34 decorative foil options, humidity systems. Ready in 7–14 days.',
        ogTitle: 'Custom Vivarium Building | NS Reptiles',
        ogDescription: 'Handcrafted glass vivariums built to your exact dimensions - full-spectrum lighting, humidity control, and complete equipment. Novi Sad.',
      },
      ru: {
        title: 'Виварии на заказ в Нови-Саде | NS Reptiles',
        description: 'Виварии на заказ в Нови-Саде: стеклянные виварии для тропических растений, лягушек и амфибий, 34 вида плёнки, спецосвещение. Срок - 7–14 дней.',
        ogTitle: 'Изготовление вивариев на заказ | NS Reptiles',
        ogDescription: 'Ручная работа - стеклянные виварии по вашим размерам: освещение полного спектра, система увлажнения и оборудование. Нови-Сад.',
      },
    },
    schema: {
      sr: {
        name: 'Izrada vivarijuma po meri',
        serviceType: 'Izrada vivarijuma po meri',
        description: 'Izrada vivarijuma po meri u Novom Sadu. Stakleni vivarijumi za tropske biljke, žabe i vodozemce, 34 dezena folija, specijalna rasveta. Rok izrade 7–14 dana.',
      },
      en: {
        name: 'Custom Vivarium Building',
        serviceType: 'Custom Vivarium Building',
        description: 'Custom glass vivariums built to your specifications in Novi Sad. Full-spectrum lighting, 34 decorative foil options, humidity systems. Ready in 7–14 days.',
      },
      ru: {
        name: 'Изготовление вивариев на заказ',
        serviceType: 'Изготовление вивариев на заказ',
        description: 'Изготовление вивариев на заказ в Нови-Саде. Стеклянные виварии для тропических растений, лягушек и амфибий, 34 вида плёнки, специальное освещение. Срок изготовления 7–14 дней.',
      },
    },
    h1: {
      sr: 'Izrada vivarijuma po meri',
      en: 'Custom vivarium building',
      ru: 'Изготовление вивариев на заказ',
    },
    lead: {
      sr: 'Svaki vivarijum izrađujemo ručno od stakla, po vašim merama i željama - sa rasvetom punog spektra za zdrav rast biljaka i kompletnom opremom.',
      en: 'Every vivarium is handcrafted from glass, built to your exact dimensions and preferences - with full-spectrum lighting for healthy plant growth and everything you need included.',
      ru: 'Каждый виварий мы изготавливаем вручную из стекла, по вашим размерам и пожеланиям - с освещением полного спектра для здорового роста растений и полным набором оборудования.',
    },
    intro: {
      sr: 'Vivarijum je zatvoren stakleni prostor za tropske biljke, žabe, vodozemce ili male reptile, u kome se održavaju vlažnost i temperatura. Pravimo ih ručno od stakla u Novom Sadu, po vašim merama, a po želji i kao paludarijum sa kopnenim i vodenim delom. Niste sigurni koja je veličina prava za vaše biljke? <strong>Rado ćemo vam pomoći</strong> da izaberete.<br><br>Vivarijum nema svoj 3D konfigurator, ali mere i dezen folije možete da isprobate u <a href="/3d-terarijum.html" style="text-decoration: underline">3D konfiguratoru terarijuma</a> i da nam pošaljete parametre, uz napomenu da želite vivarijum. Kako se konfigurator koristi piše u <a href="/3d-uputstvo.html" style="text-decoration: underline">uputstvu</a>. Cena zavisi od dimenzija, debljine stakla i opreme, a ponudu šaljemo kada dobijemo mere. Kapara je 30%, izrada traje 7–14 dana, a gotov vivarijum preuzimate lično u Novom Sadu ili vam ga šaljemo kurirskom službom, autobusom ili kombijem bilo gde u Srbiji.',
      en: 'A vivarium is an enclosed glass space for tropical plants, frogs, amphibians or small reptiles, in which humidity and temperature are kept under control. We build them by hand from glass in Novi Sad, to your measurements, and on request as a paludarium with a land section and a water section. Not sure what size works best for your plants? <strong>We\'re happy to help</strong> you choose.<br><br>The vivarium does not have its own 3D configurator, but you can try out the dimensions and the foil design in the <a href="/en/3d-terrarium.html" style="text-decoration: underline">terrarium 3D configurator</a> and send us the parameters with a note that you want a vivarium. The <a href="/en/3d-guide.html" style="text-decoration: underline">guide</a> explains how the configurator works. The price depends on the dimensions, glass thickness and equipment, and we send a quote once we have your measurements. The deposit is 30%, the build takes 7–14 days, and you collect the finished vivarium in person in Novi Sad or we send it by courier, bus or van anywhere in Serbia.',
      ru: 'Виварий - это закрытое стеклянное пространство для тропических растений, лягушек, амфибий или небольших рептилий, в котором поддерживаются влажность и температура. Мы делаем их вручную из стекла в Нови-Саде по вашим размерам, а по желанию и как палюдариум с сухопутной и водной частями. Не уверены, какой размер подойдёт вашим растениям? <strong>Мы с радостью поможем</strong> выбрать.<br><br>У вивария нет своего 3D-конфигуратора, но размеры и декор плёнки можно примерить в <a href="/ru/3d-terrarium.html" style="text-decoration: underline">3D-конфигураторе террариума</a> и отправить нам параметры с пометкой, что вам нужен виварий. Как пользоваться конфигуратором, описано в <a href="/ru/3d-guide.html" style="text-decoration: underline">инструкции</a>. Цена зависит от размеров, толщины стекла и оборудования, а предложение мы отправляем, когда получим размеры. Предоплата составляет 30%, изготовление занимает 7–14 дней, а готовый виварий вы забираете лично в Нови-Саде или мы отправляем его курьерской службой, автобусом или фургоном в любую точку Сербии.',
    },
    items: [
      {
        title: {
          sr: 'Kontaktirajte nas',
          en: 'Get in touch',
          ru: 'Свяжитесь с нами',
        },
        text: {
          sr: 'Javite nam se telefonom, mejlom ili putem društvenih mreža i recite koje dimenzije vivarijuma želite i šta planirate da držite u njemu: samo biljke, žabe, vodozemce ili male reptile. Recite i da li želite vodeni deo. Ako niste sigurni koja veličina odgovara, predložićemo je. Kada dobijemo mere, šaljemo vam ponudu.',
          en: 'Reach out by phone, email or social media and tell us the dimensions you have in mind and what you plan to keep in the vivarium: plants only, frogs, amphibians or small reptiles. Tell us as well whether you want a water section. If you\'re not sure what size fits, we\'ll suggest one. Once we have the measurements, we send you a quote.',
          ru: 'Свяжитесь с нами по телефону, электронной почте или через социальные сети и сообщите, какие размеры вивария вам нужны и что вы планируете в нём содержать: только растения, лягушек, амфибий или небольших рептилий. Скажите также, нужна ли водная часть. Если вы не уверены, какой размер подойдёт, мы его предложим. Получив размеры, мы отправим вам предложение.',
        },
      },
      {
        title: {
          sr: 'Odaberite boju vivarijuma',
          en: 'Choose your vivarium colour',
          ru: 'Выберите цвет виварий',
        },
        text: {
          sr: 'Spoljašnje strane vivarijuma oblažemo dekorativnom folijom koju birate među 34 dezena, pa vivarijum lako uklopite sa ostatkom enterijera. Umesto folije vivarijum može biti obložen crnim lakobelom.',
          en: 'The outside of the vivarium is covered in a decorative foil that you choose from 34 designs, so it is easy to match the vivarium to the rest of your interior. Instead of foil, it can be finished in black lacobel glass.',
          ru: 'Наружные стороны вивария мы оклеиваем декоративной плёнкой, которую вы выбираете из 34 декоров, поэтому виварий легко вписать в интерьер. Вместо плёнки виварий можно отделать чёрным лакобелем.',
        },
      },
      {
        title: {
          sr: 'Izaberite 3D pozadinu',
          en: 'Pick a 3D background',
          ru: 'Выберите 3D-фон',
        },
        text: {
          sr: 'Pozadina može biti klasična folija sa slikom, fabrički model, 3D pozadina od prirodnog siga kamena ili naša ručno rađena 3D pozadina: stiropor rezbarimo tako da dobije oblik stene ili kore drveta. Vivarijum može da ostane i bez pozadine.',
          en: 'The background can be a printed foil, a factory model, a 3D background made of natural stone, or our hand-made 3D background: we carve styrofoam into the shape of rock or tree bark. The vivarium can also stay without a background.',
          ru: 'Фоном может быть классическая плёнка с рисунком, заводская модель, 3D-фон из натурального камня или наш 3D-фон ручной работы: мы вырезаем пенопласт так, чтобы он принял форму скалы или коры дерева. Виварий можно оставить и без фона.',
        },
      },
      {
        title: {
          sr: 'Rasveta i oprema',
          en: 'Lighting and equipment',
          ru: 'Освещение и оборудование',
        },
        text: {
          sr: 'Za vivarijum nudimo rasvetu koja pokriva spektre svetlosti potrebne za rast i zdravlje biljaka, u različitim bojama i nijansama (crvena, plava, zelena i bela). Pomažemo i u odabiru grejača, termostata, filtera za vodu i podloge, kao i termometra i higrometra kojima pratite temperaturu i vlažnost.',
          en: 'For the vivarium we offer lighting that covers the light spectrums plants need for growth and health, in various colours and shades (red, blue, green and white). We also help you choose heaters, thermostats, water filters and substrate, as well as the thermometer and hygrometer you use to keep an eye on temperature and humidity.',
          ru: 'Для вивария мы предлагаем освещение, которое даёт спектры света, необходимые для роста и здоровья растений, в разных цветах и оттенках (красный, синий, зелёный и белый). Помогаем и с выбором обогревателя, термостата, водяного фильтра и грунта, а также термометра и гигрометра, по которым вы следите за температурой и влажностью.',
        },
      },
      {
        title: {
          sr: 'Kapara 30%',
          en: '30% deposit',
          ru: 'Предоплата 30%',
        },
        text: {
          sr: 'Izradu počinjemo kada uplatite kaparu od najmanje 30% ukupne cene. Kaparu uplaćujete tek kada se dogovorimo oko mera, pozadine, rasvete i opreme i kada dobijete ponudu. Ostatak iznosa plaćate po završetku izrade, prilikom preuzimanja vivarijuma.',
          en: 'We start the build once you pay a deposit of at least 30% of the total price. You pay the deposit only after we have agreed on the dimensions, background, lighting and equipment and you have received the quote. The remaining balance is due when the build is finished, on collection of the vivarium.',
          ru: 'Мы начинаем изготовление после внесения предоплаты не менее 30% от общей стоимости. Предоплату вы вносите только после того, как мы согласуем размеры, фон, освещение и оборудование и вы получите предложение. Остаток оплачивается по завершении изготовления, при получении вивария.',
        },
      },
      {
        title: {
          sr: 'Izrada - 7–14 dana',
          en: 'Production - 7–14 days',
          ru: 'Изготовление - 7–14 дней',
        },
        text: {
          sr: 'Vivarijum sastavljamo ručno od stakla; u radionici imamo staklo od 4, 6, 8, 10 i 12 mm, a debljinu biramo prema veličini vivarijuma. Uobičajeni rok izrade je 7–14 dana. Za veće i zahtevnije projekte rok može biti i duži.',
          en: 'The vivarium is assembled by hand from glass; the workshop stocks 4, 6, 8, 10 and 12 mm glass, and we choose the thickness by the size of the vivarium. Standard build time is 7–14 days. For larger or more complex projects it may take longer.',
          ru: 'Виварий мы собираем вручную из стекла; в мастерской есть стекло 4, 6, 8, 10 и 12 мм, а толщину подбираем по размеру вивария. Обычный срок изготовления 7–14 дней. Для более крупных и сложных проектов срок может быть больше.',
        },
      },
      {
        title: {
          sr: 'Preuzimanje vivarijuma',
          en: 'Collecting your vivarium',
          ru: 'Получение виварий',
        },
        text: {
          sr: 'Vivarijum možete preuzeti lično u Novom Sadu ili vam ga šaljemo kurirskom službom, autobusom ili kombijem bilo gde u Srbiji. Način slanja biramo prema veličini: za veće vivarijume organizujemo dostavu kombijem. Troškove slanja snosi kupac.',
          en: 'You can collect the vivarium in person in Novi Sad, or we send it by courier, bus or van anywhere in Serbia. The shipping method depends on the size: for larger builds we arrange delivery by van. Shipping costs are covered by the buyer.',
          ru: 'Виварий можно забрать лично в Нови-Саде, или мы отправим его курьерской службой, автобусом или фургоном в любую точку Сербии. Способ доставки выбираем по размеру: для крупных вивариев организуем доставку фургоном. Расходы на доставку несёт покупатель.',
        },
      },
    ],
    cta: {
      sr: {
        title: 'Vaš vivarijum <b>po meri</b>',
        text: 'Pošaljite nam dimenzije i namenu - izradićemo vivarijum tačno po vašim potrebama, sa rasvetom punog spektra.',
        call: 'Pozovi nas',
      },
      en: {
        title: 'Your vivarium, <b>built to order</b>',
        text: 'Send us your dimensions and intended use - we\'ll build a vivarium exactly to your needs, complete with full-spectrum lighting.',
        call: 'Call us',
      },
      ru: {
        title: 'Ваш виварий <b>на заказ</b>',
        text: 'Пришлите нам размеры и назначение - мы изготовим виварий точно по вашим потребностям, с освещением полного спектра.',
        call: 'Позвоните нам',
      },
    },
    more: [
      { href: '/izrada-terarijuma.html', label: { sr: 'Izrada terarijuma', en: 'Custom terrariums', ru: 'Изготовление террариумов' } },
      { href: '/izrada-akvarijuma.html', label: { sr: 'Izrada akvarijuma', en: 'Custom aquariums', ru: 'Изготовление аквариумов' } },
      { href: '/izrada-led-rasvete.html', label: { sr: 'Izrada LED rasvete', en: 'Custom LED lighting', ru: 'Изготовление LED-освещения' } },
      { href: '/izrada-postolja.html', label: { sr: 'Postolja i police', en: 'Stands & cabinets', ru: 'Подставки и тумбы' } },
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
        ogDescription: 'LED rasveta po meri za akvarijume i terarijume - boje, režimi rada, daljinsko upravljanje. Novi Sad.',
        image: '/style/img/logo.jpg',
      },
      en: {
        title: 'Custom LED Lighting for Aquariums & Terrariums | NS Reptiles',
        description: 'Custom-built LED lighting for aquariums and terrariums. Various sizes and colors, day/night modes, remote control. Energy efficient. Novi Sad, Serbia.',
        ogDescription: 'Custom LED lighting for aquariums and terrariums - choose your color, mode, and control method. Made to your exact measurements. Novi Sad.',
      },
      ru: {
        title: 'LED-освещение для аквариумов и террариумов | NS Reptiles',
        description: 'LED-освещение на заказ для аквариумов и террариумов: разные размеры и цвета, дневной и ночной режим, пульт ДУ, энергоэффективность. Нови-Сад.',
        ogTitle: 'Изготовление LED освещения на заказ | NS Reptiles',
        ogDescription: 'LED освещение на заказ для аквариумов и террариумов - цвета, режимы работы, дистанционное управление. Нови Сад.',
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
      sr: 'LED rasveta troši znatno manje struje, daje jače i ravnomernije svetlo i ne zagreva vodu. Izrađujemo je <strong>po tačnim merama</strong> - od malih akvarijuma od 30 cm do velikih preko 2 metra.',
      en: 'LED lighting uses significantly less power, delivers stronger and more even light, and doesn\'t heat the water. We build it <strong>to your exact dimensions</strong> - from small 30 cm aquariums all the way to large builds over 2 metres.',
      ru: 'LED освещение потребляет значительно меньше электроэнергии, даёт более яркий и равномерный свет и не нагревает воду. Изготавливаем <strong>по точным меркам</strong> - от маленьких аквариумов 30 см до больших длиной более 2 метров.',
    },
    items: [
      {
        title: {
          sr: 'Različite dimenzije',
          en: 'Any size',
          ru: 'Различные размеры',
        },
        text: {
          sr: 'LED rasvetu izrađujemo po tačnim merama vašeg akvarijuma ili terarijuma. Bez obzira da li je u pitanju mali akvarijum od 30 cm ili veliki od preko 2 metra - prilagođavamo dužinu i broj LED traka za optimalno osvetljenje.',
          en: 'We build LED lighting to the precise measurements of your aquarium or terrarium. Whether it\'s a compact 30 cm tank or a large display over 2 metres - we adjust the length and number of LED strips to achieve optimal coverage.',
          ru: 'LED освещение изготавливаем по точным меркам вашего аквариума или террариума. Независимо от того, маленький ли это аквариум 30 см или большой длиной более 2 метров - подбираем длину и количество LED-лент для оптимального освещения.',
        },
      },
      {
        title: {
          sr: 'Izbor boja',
          en: 'Choice of colours',
          ru: 'Выбор цвета',
        },
        text: {
          sr: 'Bela (hladna i topla), plava, crvena, zelena ili RGB koja menja boje - birate vi. Kombinujemo više boja za prirodan efekat ili koristimo jednu boju za specifičan ambijent. Plava rasveta je idealna za noćni režim i ističe fluorescentne ribe.',
          en: 'White (cool and warm), blue, red, green, or RGB that cycles through colours - the choice is yours. We can combine multiple colours for a natural effect, or use a single colour to create a specific atmosphere. Blue lighting is ideal for night mode and makes fluorescent fish really pop.',
          ru: 'Белый (холодный и тёплый), синий, красный, зелёный или RGB с изменением цветов - выбираете вы. Комбинируем несколько цветов для естественного эффекта или используем один цвет для создания особой атмосферы. Синее освещение идеально для ночного режима и подчёркивает флуоресцентных рыб.',
        },
      },
      {
        title: {
          sr: 'Dnevni i noćni režim',
          en: 'Day and night mode',
          ru: 'Дневной и ночной режим',
        },
        text: {
          sr: 'Svaka LED rasveta može imati dva režima rada - dnevni sa jačim belim svetlom za aktivnost vaših životinja, i noćni sa slabijim plavim svetlom za simulaciju mesečine. Prebacivanje je jednostavno, jednim prekidačem.',
          en: 'Every LED unit can have two operating modes - a daytime mode with brighter white light to support your animals\' activity, and a night mode with softer blue light that simulates moonlight. Switching between them is simple, just one flip of a switch.',
          ru: 'Каждое LED освещение может иметь два режима работы - дневной с более ярким белым светом для активности ваших животных и ночной с более слабым синим светом для имитации лунного света. Переключение простое - одним выключателем.',
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
          en: 'We can optionally add a remote control for full command over your lighting. Change the colour, brightness, and mode without opening the lid - a practical solution for aquariums in hard-to-reach spots.',
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
          en: 'LED lighting draws significantly less power than traditional bulbs and fluorescent tubes, while delivering stronger, more even light. It lasts longer and doesn\'t heat the water - which is especially important for tropical fish and reptiles.',
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
        text: 'Javite nam dimenzije i željenu boju - napravićemo LED rasvetu tačno po vašoj meri.',
        call: 'Pozovi nas',
      },
      en: {
        title: 'LED lighting <b>built for you</b>',
        text: 'Send us your dimensions and preferred colour - we\'ll put together LED lighting made exactly to your specifications.',
        call: 'Call us',
      },
      ru: {
        title: 'LED освещение <b>по вашим меркам</b>',
        text: 'Сообщите нам размеры и желаемый цвет - изготовим LED освещение точно по вашим меркам.',
        call: 'Позвоните нам',
      },
    },
    more: [
      { href: '/izrada-terarijuma.html', label: { sr: 'Izrada terarijuma', en: 'Custom terrariums', ru: 'Изготовление террариумов' } },
      { href: '/izrada-akvarijuma.html', label: { sr: 'Izrada akvarijuma', en: 'Custom aquariums', ru: 'Изготовление аквариумов' } },
      { href: '/izrada-vivarijuma.html', label: { sr: 'Izrada vivarijuma', en: 'Custom vivariums', ru: 'Изготовление вивариумов' } },
      { href: '/odrzavanje-akvarijuma-terarijuma.html', label: { sr: 'Održavanje i uređenje', en: 'Maintenance & setup', ru: 'Обслуживание и оформление' } },
      { href: '/popravka-akvarijuma-terarijuma.html', label: { sr: 'Popravka i servis', en: 'Repairs & servicing', ru: 'Ремонт и сервис' } },
      { href: '/izrada-postolja.html', label: { sr: 'Postolja i police', en: 'Stands & cabinets', ru: 'Подставки и тумбы' } },
    ],
  },
  postolja: {
    path: '/izrada-postolja.html',
    layout: 'feat',
    meta: {
      sr: {
        title: 'Izrada postolja i polica za akvarijume i terarijume | NS Reptiles',
        description: 'Metalna (čelična) postolja i police sa ormarićem za akvarijume i terarijume, po meri. Nosivost prema težini akvarijuma, police za više terarijuma. Novi Sad.',
        ogTitle: 'Postolja i police po meri | NS Reptiles',
        ogDescription: 'Čelična postolja i police sa ormarićem za akvarijume i terarijume, izrađene tačno po meri. Novi Sad.',
        image: '/style/img/logo.jpg',
      },
      en: {
        title: 'Custom Aquarium & Terrarium Stands and Cabinets | NS Reptiles',
        description: 'Custom steel stands and cabinet stands for aquariums and terrariums. Built for the weight of your tank, multi-level racks for terrariums. Novi Sad, Serbia.',
        ogDescription: 'Steel stands and cabinet stands for aquariums and terrariums, built to your exact size. Novi Sad.',
      },
      ru: {
        title: 'Подставки и тумбы для аквариумов и террариумов | NS Reptiles',
        description: 'Металлические подставки и тумбы для аквариумов и террариумов на заказ. Расчёт под вес аквариума, стеллажи для нескольких террариумов. Нови-Сад.',
        ogTitle: 'Подставки и тумбы на заказ | NS Reptiles',
        ogDescription: 'Стальные подставки и тумбы для аквариумов и террариумов точно по вашим размерам. Нови-Сад.',
      },
    },
    schema: {
      sr: {
        name: 'Izrada postolja i polica',
        serviceType: 'Izrada postolja za akvarijume i terarijume',
        description: 'Izrada metalnih (čeličnih) postolja i polica sa ormarićem za akvarijume i terarijume po meri, sa nosivošću prema težini akvarijuma. Novi Sad.',
      },
      en: {
        name: 'Custom Stands and Cabinets',
        serviceType: 'Custom aquarium and terrarium stands',
        description: 'Custom steel stands and cabinet stands for aquariums and terrariums, built for the weight of the tank. Novi Sad.',
      },
      ru: {
        name: 'Изготовление подставок и тумб',
        serviceType: 'Изготовление подставок для аквариумов и террариумов',
        description: 'Изготовление металлических подставок и тумб для аквариумов и террариумов на заказ, с расчётом под вес аквариума. Нови-Сад.',
      },
    },
    h1: {
      sr: 'Izrada postolja i polica',
      en: 'Custom Stands and Cabinets',
      ru: 'Изготовление подставок и тумб',
    },
    lead: {
      sr: 'Metalna postolja i police sa ormarićem za akvarijume i terarijume, izrađeni tačno po meri vašeg akvarijuma ili terarijuma.',
      en: 'Metal stands and cabinet stands for aquariums and terrariums, built to the exact size of your tank.',
      ru: 'Металлические подставки и тумбы для аквариумов и террариумов, изготовленные точно по размеру вашего аквариума или террариума.',
    },
    intro: {
      sr: 'Akvarijum od 100 litara sa staklom, peskom i dekoracijom teži preko 120 kg, a obična komoda nije pravljena za takav teret. Zato postolja i police izrađujemo <strong>po meri i prema težini</strong> akvarijuma ili terarijuma koji na njima stoji. Primer gotove police: <a href="/proizvodi/oprema/polica-za-akvarijum-100x30x80.html">polica za akvarijum 100x30x80 cm</a>.',
      en: 'A 100-litre aquarium with glass, sand and decoration weighs over 120 kg, and an ordinary sideboard is not made for that kind of load. That is why we build stands and cabinets <strong>to size and for the weight</strong> of the aquarium or terrarium that sits on them. An example of a ready-made cabinet: <a href="/en/products/equipment/aquarium-cabinet-stand-100x30x80.html">aquarium cabinet stand 100x30x80 cm</a>.',
      ru: 'Аквариум на 100 литров со стеклом, грунтом и декором весит больше 120 кг, а обычный комод не рассчитан на такую нагрузку. Поэтому подставки и тумбы мы изготавливаем <strong>по размеру и с расчётом на вес</strong> аквариума или террариума. Пример готовой тумбы: <a href="/ru/products/equipment/aquarium-cabinet-stand-100x30x80.html">тумба для аквариума 100x30x80 см</a>.',
    },
    items: [
      {
        title: { sr: 'Metalna postolja', en: 'Metal stands', ru: 'Металлические подставки' },
        text: {
          sr: 'Čelična postolja od kutijastih profila, zavarena u jednu krutu celinu. Ne ugibaju se i ne klimaju ni pod velikim akvarijumima, a zauzimaju malo prostora. Boju biramo zajedno sa vama, da se uklopi u prostoriju.',
          en: 'Steel stands made from box-section tubing, welded into one rigid frame. They do not sag or wobble even under large aquariums and take up little space. We choose the colour together with you to suit the room.',
          ru: 'Стальные подставки из профильной трубы, сваренные в единую жёсткую раму. Не прогибаются и не шатаются даже под большими аквариумами и занимают мало места. Цвет выбираем вместе с вами под интерьер.',
        },
      },
      {
        title: { sr: 'Police sa ormarićem', en: 'Cabinet stands', ru: 'Тумбы со шкафчиком' },
        text: {
          sr: 'Zatvorena polica sa vratima nosi akvarijum ili terarijum, a ispod krije spoljni filter, CO2 bocu, hranu i pribor. Kablovi i creva prolaze kroz otvore na zadnjoj strani, pa se sa prednje strane vidi samo uredan nameštaj.',
          en: 'A closed cabinet with doors carries the aquarium or terrarium and hides the external filter, CO2 bottle, food and tools underneath. Cables and hoses run through openings at the back, so from the front you only see a tidy piece of furniture.',
          ru: 'Закрытая тумба с дверцами держит аквариум или террариум и прячет внешний фильтр, баллон CO2, корм и инструменты. Кабели и шланги проходят через отверстия сзади, поэтому спереди видна только аккуратная мебель.',
        },
      },
      {
        title: { sr: 'Tačno po meri', en: 'Exactly to size', ru: 'Точно по размеру' },
        text: {
          sr: 'Gornja površina je iste mere kao dno akvarijuma, tako da staklo naleže celom površinom i nijedan deo ne visi preko ivice. Visinu prilagođavamo prostoru i tome da li akvarijum gledate sedeći ili stojeći.',
          en: 'The top matches the base of the aquarium, so the glass is supported over its whole surface and nothing overhangs the edge. We adjust the height to the room and to whether you view the tank sitting or standing.',
          ru: 'Верх совпадает с размером дна аквариума, поэтому стекло опирается всей площадью и ничего не свисает за край. Высоту подбираем под помещение и под то, смотрите ли вы на аквариум сидя или стоя.',
        },
      },
      {
        title: { sr: 'Nosivost prema akvarijumu', en: 'Built for the load', ru: 'Расчёт под нагрузку' },
        text: {
          sr: 'Pre izrade računamo težinu: oko kilogram po litru vode, plus staklo, pesak, kamenje i dekoracija. Za duže i teže akvarijume dodajemo srednje noge i jače profile, da se opterećenje ravnomerno rasporedi na pod.',
          en: 'Before building we work out the weight: about a kilogram per litre of water, plus glass, sand, rocks and decoration. For longer and heavier tanks we add middle legs and heavier tubing so the load is spread evenly across the floor.',
          ru: 'Перед изготовлением считаем вес: около килограмма на литр воды плюс стекло, грунт, камни и декор. Для длинных и тяжёлых аквариумов добавляем средние ножки и более мощный профиль, чтобы нагрузка равномерно распределялась на пол.',
        },
      },
      {
        title: { sr: 'Police za više terarijuma', en: 'Racks for several terrariums', ru: 'Стеллажи для нескольких террариумов' },
        text: {
          sr: 'Ako držite više životinja, pravimo police na više nivoa na koje terarijumi staju jedan iznad drugog. Razmak između nivoa ostavljamo za rasvetu i ventilaciju, a ceo stalak zauzima površinu jednog terarijuma.',
          en: 'If you keep several animals, we build multi-level racks where terrariums sit one above the other. We leave room between levels for lighting and ventilation, and the whole rack takes up the floor space of a single terrarium.',
          ru: 'Если у вас несколько животных, делаем многоуровневые стеллажи, где террариумы стоят один над другим. Между уровнями оставляем место для освещения и вентиляции, а весь стеллаж занимает площадь одного террариума.',
        },
      },
      {
        title: { sr: 'Uz akvarijum ili terarijum', en: 'Together with your tank', ru: 'Вместе с аквариумом или террариумом' },
        text: {
          sr: 'Postolje možemo da izradimo zajedno sa akvarijumom ili terarijumom po meri, pa mere, boja i otvori za kablove odgovaraju od početka. Pravimo ga i za akvarijum koji već imate - dovoljno je da nam pošaljete njegove mere.',
          en: 'We can build the stand together with a custom aquarium or terrarium, so the size, colour and cable openings match from the start. We also make stands for a tank you already have - just send us its dimensions.',
          ru: 'Подставку можем изготовить вместе с аквариумом или террариумом на заказ, чтобы размеры, цвет и отверстия для кабелей совпадали с самого начала. Делаем её и для уже имеющегося аквариума - достаточно прислать его размеры.',
        },
      },
    ],
    cta: {
      sr: {
        title: 'Postolje <b>po vašoj meri</b>',
        text: 'Pošaljite nam mere akvarijuma ili terarijuma i gde će stajati - predložićemo postolje ili policu i javiti cenu.',
        call: 'Pozovi nas',
      },
      en: {
        title: 'A stand <b>built for you</b>',
        text: 'Send us the size of your aquarium or terrarium and where it will stand - we will suggest a stand or cabinet and give you a price.',
        call: 'Call us',
      },
      ru: {
        title: 'Подставка <b>по вашим меркам</b>',
        text: 'Пришлите нам размеры аквариума или террариума и место, где он будет стоять, - предложим подставку или тумбу и назовём цену.',
        call: 'Позвоните нам',
      },
    },
    more: [
      { href: '/izrada-akvarijuma.html', label: { sr: 'Izrada akvarijuma', en: 'Custom aquariums', ru: 'Изготовление аквариумов' } },
      { href: '/izrada-terarijuma.html', label: { sr: 'Izrada terarijuma', en: 'Custom terrariums', ru: 'Изготовление террариумов' } },
      { href: '/izrada-led-rasvete.html', label: { sr: 'Izrada LED rasvete', en: 'Custom LED lighting', ru: 'Изготовление LED-освещения' } },
      { href: '/oprema.html', label: { sr: 'Oprema', en: 'Equipment', ru: 'Оборудование' } },
      { href: '/popravka-akvarijuma-terarijuma.html', label: { sr: 'Popravka i servis', en: 'Repairs & servicing', ru: 'Ремонт и сервис' } },
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
      en: 'Professional maintenance and decoration so your aquarium or terrarium always looks its best - and your animals stay healthy and happy.',
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
          ru: 'Регулярная чистка - залог здоровья рыбок и черепах. Мы проводим частичную замену воды, чистку стекла от водорослей, сифонирование грунта, промывку фильтра и проверку параметров воды. Рекомендуем обслуживание раз в месяц.',
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
          sr: 'Pravimo funkcionalan i vizuelno atraktivan prostor za reptila. Postavljamo odgovarajući substrat, 3D pozadine od stiropora ili siga kamena, penjačke grane, skrovišta, posude za vodu i hranu - sve prema potrebama vrste.',
          en: 'We build a functional and visually attractive space for your reptile. We install the right substrate, 3D backgrounds made from polystyrene or tufa rock, climbing branches, hides, water and food dishes - all chosen according to the species\' needs.',
          ru: 'Создаём функциональное и визуально привлекательное пространство для рептилии. Устанавливаем подходящий субстрат, 3D-фоны из пенопласта или туфа, ветки для лазания, укрытия, поилки и кормушки - всё согласно потребностям вида.',
        },
      },
      {
        title: {
          sr: 'Podešavanje opreme',
          en: 'Equipment Setup',
          ru: 'Настройка оборудования',
        },
        text: {
          sr: 'Proveravamo i podešavamo kompletnu opremu - filtere, pumpe, grejače, termostate, LED i UVB/UVA rasvetu. Ako je nešto dotrajalo ili ne radi ispravno, predlažemo zamenu i pomažemo u odabiru odgovarajuće opreme.',
          en: 'We inspect and configure all equipment - filters, pumps, heaters, thermostats, LED and UVB/UVA lighting. If anything is worn out or not working correctly, we\'ll recommend a replacement and help you choose the right gear.',
          ru: 'Проверяем и настраиваем всё оборудование - фильтры, помпы, нагреватели, термостаты, LED и UVB/UVA-освещение. Если что-то износилось или работает неправильно, предлагаем замену и помогаем выбрать подходящее оборудование.',
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
        text: 'Javite nam se i dogovorićemo održavanje ili uređenje koje vam odgovara - jednokratno ili redovno.',
        call: 'Pozovi nas',
      },
      en: {
        title: 'Book <b>maintenance</b>',
        text: 'Get in touch and we\'ll arrange maintenance or decoration that works for you - one-time or on a regular basis.',
        call: 'Call us',
      },
      ru: {
        title: 'Запишитесь на <b>обслуживание</b>',
        text: 'Свяжитесь с нами, и мы согласуем обслуживание или оформление, удобное для вас - разово или на регулярной основе.',
        call: 'Позвоните нам',
      },
    },
    more: [
      { href: '/izrada-terarijuma.html', label: { sr: 'Izrada terarijuma', en: 'Custom terrariums', ru: 'Изготовление террариумов' } },
      { href: '/izrada-akvarijuma.html', label: { sr: 'Izrada akvarijuma', en: 'Custom aquariums', ru: 'Изготовление аквариумов' } },
      { href: '/izrada-vivarijuma.html', label: { sr: 'Izrada vivarijuma', en: 'Custom vivariums', ru: 'Изготовление вивариумов' } },
      { href: '/izrada-led-rasvete.html', label: { sr: 'Izrada LED rasvete', en: 'Custom LED lighting', ru: 'Изготовление LED-освещения' } },
      { href: '/izrada-postolja.html', label: { sr: 'Postolja i police', en: 'Stands & cabinets', ru: 'Подставки и тумбы' } },
      { href: '/popravka-akvarijuma-terarijuma.html', label: { sr: 'Popravka i servis', en: 'Repairs & servicing', ru: 'Ремонт и сервис' } },
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
        ogDescription: 'Servis akvarijuma i terarijuma - zamena stakla i silikona, poklopac, okvir, rasveta. Besplatna procena. Novi Sad.',
        image: '/style/img/logo.jpg',
      },
      en: {
        title: 'Aquarium & Terrarium Repair Service | NS Reptiles, Novi Sad',
        description: 'Aquarium & terrarium repair in Novi Sad: glass and silicone replacement, lid and frame repair, lighting upgrades. Free estimate, most repairs in 1–3 days.',
        ogTitle: 'Aquarium & Terrarium Repair | NS Reptiles',
        ogDescription: 'Aquarium and terrarium repair service - glass, silicone, lid, frame, and lighting. Free estimate. Novi Sad, Serbia.',
      },
      ru: {
        title: 'Ремонт аквариумов и террариумов | NS Reptiles, Нови-Сад',
        description: 'Ремонт аквариумов и террариумов в Нови-Саде: замена стекла, силикона и освещения, ремонт крышки и рамы. Бесплатная оценка, большинство работ за 1–3 дня.',
        ogTitle: 'Ремонт аквариумов и террариумов | NS Reptiles',
        ogDescription: 'Сервис аквариумов и террариумов - замена стекла, силикона, крышки, рамы и освещения. Бесплатная оценка. Нови-Сад, Сербия.',
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
      },
    },
    h1: {
      sr: 'Popravka akvarijuma i terarijuma',
      en: 'Aquarium & Terrarium Repair',
      ru: 'Ремонт аквариумов и террариумов',
    },
    lead: {
      sr: 'Vaš akvarijum ili terarijum ima oštećenje? Ne morate kupovati novi - popravljamo ga brzo i pouzdano.',
      en: 'Is your aquarium or terrarium damaged? You don\'t have to buy a new one - we fix it quickly and reliably.',
      ru: 'Ваш аквариум или террариум повреждён? Покупать новый необязательно - мы отремонтируем его быстро и надёжно.',
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
          ru: 'Треснувшее или разбитое стекло - это ещё не конец. Мы полностью заменяем повреждённое стекло новым, подходящей толщины и качества, и возвращаем аквариум в полностью рабочее состояние.',
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
          ru: 'Течи - распространённая проблема, особенно у старых моделей. Мы удаляем старый изношенный силикон и наносим новый, качественный аквариумный герметик, абсолютно безопасный для рыб, черепах и рептилий.',
        },
      },
      {
        title: {
          sr: 'Popravka poklopca',
          en: 'Lid Repair',
          ru: 'Ремонт крышки',
        },
        text: {
          sr: 'Poklopac je bitan za bezbednost životinja i rad rasvete. Popravljamo oštećene poklopce, dodajemo otvore za kablove ili izrađujemo nove po meri. Radimo i nadogradnje - ugradnja filtera, dupli poklopac ili nova hauba.',
          en: 'The lid matters for your animals\' safety and for the lighting setup. We repair damaged lids, add cable cutouts, or build entirely new ones to order. We also handle upgrades - filter integration, double lids, or a new canopy.',
          ru: 'Крышка важна для безопасности животных и работы освещения. Мы ремонтируем повреждённые крышки, добавляем отверстия для кабелей или изготавливаем новые на заказ. Выполняем и модернизации - установку фильтра, двойную крышку или новый кожух.',
        },
      },
      {
        title: {
          sr: 'Popravka okvira',
          en: 'Frame Repair',
          ru: 'Ремонт рамы',
        },
        text: {
          sr: 'Oštećen okvir, iskrivljen ram ili odlepljena folija - sve to rešavamo. Popravljamo strukturu, zamenjujemo oštećene delove okvira i ponovo oblepljujemo folijom po vašem izboru iz ponude od 34 dezena.',
          en: 'Damaged frame, warped rim, or peeling wrap - we sort it all out. We repair the structure, replace damaged frame sections, and re-wrap with the vinyl of your choice from a selection of 34 patterns.',
          ru: 'Повреждённая рама, покороблённый кант или отслоившаяся плёнка - всё это мы устраняем. Восстанавливаем конструкцию, заменяем повреждённые части рамы и заново оклеиваем плёнкой на ваш выбор из ассортимента 34 рисунка.',
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
          ru: 'Свяжитесь с нами по телефону, электронной почте или через социальные сети. Пришлите фотографии повреждений и размеры - мы дадим бесплатную оценку стоимости и сроков. Большинство ремонтов выполняется за 1–3 рабочих дня.',
        },
      },
    ],
    cta: {
      sr: {
        title: 'Besplatna <b>procena popravke</b>',
        text: 'Pošaljite nam slike oštećenja i dimenzije - dobićete besplatnu procenu cene i roka popravke.',
        call: 'Pozovi nas',
      },
      en: {
        title: 'Free <b>Repair Estimate</b>',
        text: 'Send us photos of the damage and the dimensions - we\'ll get back to you with a free estimate of the cost and timeline.',
        call: 'Call us',
      },
      ru: {
        title: 'Бесплатная <b>оценка ремонта</b>',
        text: 'Пришлите нам фотографии повреждений и размеры - мы дадим бесплатную оценку стоимости и сроков ремонта.',
        call: 'Позвоните нам',
      },
    },
    more: [
      { href: '/izrada-terarijuma.html', label: { sr: 'Izrada terarijuma', en: 'Custom terrariums', ru: 'Изготовление террариумов' } },
      { href: '/izrada-akvarijuma.html', label: { sr: 'Izrada akvarijuma', en: 'Custom aquariums', ru: 'Изготовление аквариумов' } },
      { href: '/izrada-vivarijuma.html', label: { sr: 'Izrada vivarijuma', en: 'Custom vivariums', ru: 'Изготовление вивариумов' } },
      { href: '/izrada-led-rasvete.html', label: { sr: 'Izrada LED rasvete', en: 'Custom LED lighting', ru: 'Изготовление LED-освещения' } },
      { href: '/izrada-postolja.html', label: { sr: 'Postolja i police', en: 'Stands & cabinets', ru: 'Подставки и тумбы' } },
      { href: '/odrzavanje-akvarijuma-terarijuma.html', label: { sr: 'Održavanje i uređenje', en: 'Maintenance & setup', ru: 'Обслуживание и оформление' } },
    ],
  },
} satisfies Record<string, Service>;

export type ServiceKey = keyof typeof SERVICES;
