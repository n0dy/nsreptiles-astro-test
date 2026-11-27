import type { Locale } from '../../config/site';

interface Section {
  id: string;
  /** 0 = samo terarijum, 1 = samo akvarijum (indeks u `tags`); bez oznake = vazi za oba */
  tag?: 0 | 1;
  title: string;
  lead: string;
  /** ime snimka u public/style/img/3d/uputstvo/<lang>/ (pravi ih scripts/3d-guide-shots.mjs) */
  shot: string;
  alt: string;
  /** [kontrola, sta radi] */
  items: [string, string][];
}

// title je HTML (<b> za zeleni deo) - samo nas tekst, nikad korisnicki unos.
export const GUIDE_3D: Record<Locale, {
  meta: { title: string; description: string };
  h1: string;
  lead: string;
  tags: [string, string];
  toc: string;
  sections: Section[];
  ar: { title: string; lead: string; alt: string; steps: string[]; note: string };
  send: { title: string; text: string; contact: string };
  ctas: [string, string];
  /** [oznaka, napomena] - stoji u konfiguratorima, na pocetnoj i ovde dok je 3D u razvoju */
  beta: [string, string];
  /** natpis linka ka ovoj strani (pocetna, konfiguratori) */
  link: string;
}> = {
  sr: {
    meta: {
      title: 'Uputstvo za 3D konfigurator terarijuma i akvarijuma | NS Reptiles',
      description:
        'Kako se koristi 3D konfigurator: mere, vrata, poklopac, ventilacija, voda i filter, folije, pozadine i dekoracija, pregled u prostoru (AR) i slanje linka.',
    },
    h1: 'Uputstvo za 3D konfigurator',
    lead: 'Šta znači koje dugme i koja opcija u konfiguratoru terarijuma i akvarijuma, korak po korak i sa slikama.',
    tags: ['Terarijum', 'Akvarijum'],
    toc: 'Na ovoj strani',
    sections: [
      {
        id: 'prikaz',
        title: 'Prikaz i <b>dugmad</b>',
        lead: 'Levo je 3D model, desno su podešavanja (na telefonu ispod modela). Svaka izmena se odmah vidi na modelu.',
        shot: 'terarijum-pregled',
        alt: '3D prikaz terarijuma sa dugmadima u uglovima',
        items: [
          ['Okretanje i zum', 'Vuci mišem ili prstom da okreneš model. Točkić miša ili štipanje sa dva prsta približava i udaljava, a desni klik pomera prikaz.'],
          ['Poklopac (gore levo)', 'Otvara i zatvara poklopac da vidiš unutrašnjost odozgo.'],
          ['Pomoć (gore desno)', 'Kratak podsetnik šta koje dugme radi.'],
          ['Slikaj (fotoaparat)', 'Preuzima sliku trenutnog prikaza na tvoj uređaj.'],
          ['Pogledaj u prostoru (zeleno dugme)', 'Postavlja model u tvoju sobu kroz kameru. Vidi se samo na telefonu i tabletu.'],
          ['Terarijum / Akvarijum', 'Prebacuje na drugi konfigurator. Svaki ima svoja podešavanja.'],
          ['Resetuj (kružna strelica)', 'Pojavi se čim nešto promeniš i vraća sve na početne vrednosti.'],
        ],
      },
      {
        id: 'mere-terarijum',
        tag: 0,
        title: 'Mere i <b>prednja strana</b>',
        lead: 'Tab „Mere“ u konfiguratoru terarijuma.',
        shot: 'terarijum-box',
        alt: 'Tab Mere u konfiguratoru terarijuma',
        items: [
          ['Dimenzije', 'Klikni na broj i upiši dužinu, širinu i visinu u centimetrima. Dužina 30–200, širina 25–100, visina 25–150 cm.'],
          ['Otvaranje', '„Klizna vrata“ su dva klizna stakla napred. „Poklopac“ znači fiksno prednje staklo, a terarijum se otvara odozgo.'],
          ['Visina lajsni napred', 'Lajsne su trake sa folijom iznad i ispod vrata. „Standardna“ je naša uobičajena visina, a „Po meri“ otvara polje gde upisuješ visinu u milimetrima (30–400).'],
          ['Donja folija', 'Nudi se kad je otvaranje odozgo: biraš da li donji deo prednje strane ima foliju.'],
          ['Vrata', 'Klizači otvaraju levo i desno staklo na modelu. Služe samo za prikaz, ne menjaju izradu.'],
        ],
      },
      {
        id: 'mere-akvarijum',
        tag: 1,
        title: 'Mere, <b>litraža i staklo</b>',
        lead: 'Tab „Mere“ u konfiguratoru akvarijuma.',
        shot: 'akvarijum-box',
        alt: 'Tab Mere u konfiguratoru akvarijuma',
        items: [
          ['Dimenzije', 'Klikni na broj i upiši dužinu, širinu i visinu u centimetrima. Dužina 20–200, širina 15–100, visina 15–120 cm.'],
          ['Staklo', 'Debljina stakla koju račun predlaže za upisane mere.'],
          ['Ukupno', 'Zapremina celog akvarijuma u litrima.'],
          ['Vode', 'Koliko vode stvarno staje pri izabranom nivou vode. Ako postoji komora filtera, ispod piše koliko je litara u njoj.'],
          ['Upozorenje o staklu', 'Ako mere traže staklo deblje od 12 mm, pojavi se napomena da su potrebna ojačanja ili niži nivo vode.'],
          ['Donja folija', 'Traka folije pri dnu akvarijuma: sa njom ili bez nje.'],
        ],
      },
      {
        id: 'voda-filter',
        tag: 1,
        title: 'Voda i <b>filter</b>',
        lead: 'Tab „Voda i filter“ postoji samo kod akvarijuma.',
        shot: 'akvarijum-water',
        alt: 'Tab Voda i filter u konfiguratoru akvarijuma',
        items: [
          ['Voda', '„Pun vode“ prikazuje akvarijum sa vodom, „Prazan“ bez nje.'],
          ['Nivo ispod ivice', 'Koliko milimetara je voda ispod gornje ivice stakla. Menja i količinu vode na tabu „Mere“.'],
          ['Filter', 'Položaj ugrađene komore filtera: bez nje, levo, desno, duž cele zadnje strane ili na levoj odnosno desnoj polovini zadnje strane.'],
          ['Širina komore filtera', 'Pojavi se kad izabereš filter. Upisuje se u milimetrima (50–400).'],
          ['Folija na filteru', 'Pojavi se kad izabereš filter: folija sakriva komoru spolja.'],
        ],
      },
      {
        id: 'poklopac-terarijum',
        tag: 0,
        title: 'Poklopac <b>terarijuma</b>',
        lead: 'Tab „Poklopac“ u konfiguratoru terarijuma.',
        shot: 'terarijum-lid',
        alt: 'Tab Poklopac u konfiguratoru terarijuma',
        items: [
          ['Iz jednog dela', 'Ceo poklopac je jedan komad.'],
          ['Iz dva dela', 'Zadnji deo je sa mrežicom, prednji je stakleni. Posle ovog izbora pojave se još tri opcije.'],
          ['Prednji deo poklopca', 'Sa folijom ili bez nje (providno staklo).'],
          ['Širina prednjeg dela', 'Upisuje se u milimetrima (50–1000).'],
          ['Drška na prednjem delu', 'Nudi se kod kliznih vrata. Kad se terarijum otvara odozgo, drška je uvek tu.'],
        ],
      },
      {
        id: 'poklopac-akvarijum',
        tag: 1,
        title: 'Pokrivno <b>staklo</b>',
        lead: 'Tab „Poklopac“ u konfiguratoru akvarijuma.',
        shot: 'akvarijum-lid',
        alt: 'Tab Poklopac u konfiguratoru akvarijuma',
        items: [
          ['Pokrivno staklo', 'Bez poklopca, sa jednim pokrivnim staklom ili sa duplim poklopcem.'],
          ['Folija na poklopcu', 'Pojavi se kad akvarijum ima poklopac: folija preko pokrivnog stakla ili providno staklo.'],
        ],
      },
      {
        id: 'ventilacija',
        tag: 0,
        title: '<b>Ventilacija</b>',
        lead: 'Tab „Ventilacija“ postoji samo kod terarijuma.',
        shot: 'terarijum-vent',
        alt: 'Tab Ventilacija u konfiguratoru terarijuma',
        items: [
          ['Ventilacija gore', '„Mrežica“ je metalna mrežica u poklopcu. „Plastični ventilatori“ su okrugli plastični otvori; tada upisuješ koliko ih ide po dužini (1–8) i po širini (1–4).'],
          ['Ventilacija sa strane', 'Bez nje ili plastični ventilatori na bočnim stranama; tada upisuješ broj komada po strani (1–6).'],
          ['Boja ventilatora', 'Crna ili bela. Nudi se kad su izabrani plastični ventilatori.'],
          ['Koliko ih staje', 'Ako upišeš više ventilatora nego što staje na izabrane mere, model prikaže samo onoliko koliko može da stane.'],
        ],
      },
      {
        id: 'izgled',
        title: 'Izgled: <b>folija, silikon, pozadina</b>',
        lead: 'Tab „Izgled“ je isti za terarijum i akvarijum.',
        shot: 'terarijum-foil',
        alt: 'Tab Izgled sa dezenima folije, bojom silikona i pozadinama',
        items: [
          ['Dezen folije', 'Klikni na kvadratić da promeniš dekorativnu foliju. Ispod piše broj i naziv izabranog dezena, isti kao u našem katalogu, pa ga možeš navesti pri poručivanju.'],
          ['Boja silikona', 'Crna ili providna. Vidi se na spojevima stakla.'],
          ['Pozadina', 'Prvi kvadratić je bez pozadine, drugi je crna pozadina, a ostalo su naše 3D pozadine sa reljefom.'],
        ],
      },
      {
        id: 'dekoracija',
        title: 'Dekoracija i <b>supstrat</b>',
        lead: 'Tab „Dekoracija“ je isti za terarijum i akvarijum.',
        shot: 'terarijum-decor',
        alt: 'Tab Dekoracija sa supstratom i dodatom dekoracijom',
        items: [
          ['Supstrat', 'Bez supstrata, pesak ili treset. Kad izabereš supstrat, pojavi se klizač za visinu sloja (2–10 cm).'],
          ['Iz naše ponude', 'Klik na predmet ga dodaje u model. Isti predmet možeš dodati više puta.'],
          ['Dodati predmeti', 'Lista svega što si dodao. Klik na stavku je bira, a na modelu oko nje se pojavi zeleni prsten.'],
          ['Pomeranje i okretanje', 'Prevuci predmet na modelu da ga pomeriš, a zeleni prsten da ga okreneš. Ugao možeš podesiti i klizačem „Ugao“.'],
          ['Ukloni', 'Briše izabrani predmet. Na računaru radi i taster Delete.'],
        ],
      },
    ],
    ar: {
      title: 'Pogledaj u <b>svom prostoru</b> (AR)',
      lead: 'Na telefonu ili tabletu možeš da postaviš složeni terarijum ili akvarijum na svoju komodu ili pod i vidiš ga u stvarnoj veličini.',
      alt: '3D konfigurator na telefonu sa zelenim dugmetom Pogledaj u prostoru',
      steps: [
        'Otvori konfigurator na telefonu ili tabletu.',
        'Složi model: mere, folija, pozadina, dekoracija.',
        'Dodirni zeleno dugme sa kockom u dnu prikaza. Pojavi se nekoliko sekundi posle prvog dodira ekrana, dok se model pripremi.',
        'Dozvoli pristup kameri i polako pomeraj telefon iznad poda ili stola dok se model ne pojavi.',
        'Jednim prstom ga pomeraj, a sa dva prsta okreći.',
      ],
      note: 'Dugme se ne prikazuje na računaru ni na uređajima koji ne podržavaju AR. Ako posle izmene u konfiguratoru vidiš staru verziju, sačekaj par sekundi i dodirni dugme ponovo.',
    },
    send: {
      title: 'Pošalji nam <b>šta si složio</b>',
      text: 'Dugme „Poruči terarijum“ odnosno „Poruči akvarijum“ na dnu podešavanja otvara kontakt formu u kojoj su već upisani svi parametri i link ka tvom modelu: dodaj ime i e-mail i pošalji. Link možeš i sam da kopiraš iz adrese u pretraživaču, jer se ona menja sa svakom izmenom i čuva sve što si podesio.',
      contact: 'Kontakt',
    },
    ctas: ['Složi terarijum', 'Složi akvarijum'],
    beta: ['Beta', '3D model je još u fazi razvoja.'],
    link: 'Kako se koristi 3D konfigurator?',
  },
  en: {
    meta: {
      title: '3D Configurator Guide: Terrariums and Aquariums | NS Reptiles',
      description:
        'How to use the 3D configurator: dimensions, doors, lid, ventilation, water and filter, foils, backgrounds and decor, AR view and sending us the link.',
    },
    h1: '3D configurator guide',
    lead: 'What each button and option does in the terrarium and aquarium configurator, step by step and with screenshots.',
    tags: ['Terrarium', 'Aquarium'],
    toc: 'On this page',
    sections: [
      {
        id: 'view',
        title: 'The view and <b>its buttons</b>',
        lead: 'The 3D model is on the left and the settings are on the right (below the model on a phone). Every change shows on the model straight away.',
        shot: 'terarijum-pregled',
        alt: '3D view of a terrarium with buttons in the corners',
        items: [
          ['Rotate and zoom', 'Drag with the mouse or a finger to rotate the model. The mouse wheel or a two-finger pinch zooms, and a right-click drag pans the view.'],
          ['Lid (top left)', 'Opens and closes the lid so you can look inside from above.'],
          ['Help (top right)', 'A short reminder of what each button does.'],
          ['Screenshot (camera)', 'Downloads a picture of the current view to your device.'],
          ['View in your space (green button)', 'Places the model in your room through the camera. Shown on phones and tablets only.'],
          ['Terrarium / Aquarium', 'Switches to the other configurator. Each keeps its own settings.'],
          ['Reset (circular arrow)', 'Appears as soon as you change something and restores the starting values.'],
        ],
      },
      {
        id: 'size-terrarium',
        tag: 0,
        title: 'Size and <b>front</b>',
        lead: 'The “Size” tab in the terrarium configurator.',
        shot: 'terarijum-box',
        alt: 'Size tab in the terrarium configurator',
        items: [
          ['Dimensions', 'Click a number and type the length, width and height in centimetres. Length 30–200, width 25–100, height 25–150 cm.'],
          ['Opening', '“Sliding doors” means two sliding glass panes at the front. “Lid” means a fixed front glass, and the terrarium opens from the top.'],
          ['Front strip height', 'The strips are the foil-covered bands above and below the doors. “Standard” is our usual height; “Custom” opens a field for the height in millimetres (30–400).'],
          ['Bottom foil', 'Offered when the terrarium opens from the top: choose whether the lower part of the front has foil.'],
          ['Doors', 'The sliders open the left and right glass on the model. They are for viewing only and do not change the build.'],
        ],
      },
      {
        id: 'size-aquarium',
        tag: 1,
        title: 'Size, <b>volume and glass</b>',
        lead: 'The “Size” tab in the aquarium configurator.',
        shot: 'akvarijum-box',
        alt: 'Size tab in the aquarium configurator',
        items: [
          ['Dimensions', 'Click a number and type the length, width and height in centimetres. Length 20–200, width 15–100, height 15–120 cm.'],
          ['Glass', 'The glass thickness the calculation suggests for those dimensions.'],
          ['Total', 'The volume of the whole aquarium in litres.'],
          ['Water', 'How much water it actually holds at the chosen water level. If there is a filter chamber, a line below says how many litres are in it.'],
          ['Glass warning', 'If the dimensions call for glass thicker than 12 mm, a note says bracing or a lower water level is needed.'],
          ['Bottom foil', 'A strip of foil along the bottom of the aquarium: with or without.'],
        ],
      },
      {
        id: 'water-filter',
        tag: 1,
        title: 'Water and <b>filter</b>',
        lead: 'The “Water & filter” tab exists for aquariums only.',
        shot: 'akvarijum-water',
        alt: 'Water and filter tab in the aquarium configurator',
        items: [
          ['Water', '“Filled” shows the aquarium with water, “Empty” without.'],
          ['Level below the rim', 'How many millimetres the water sits below the top edge of the glass. It also changes the water volume on the “Size” tab.'],
          ['Filter', 'Position of the built-in filter chamber: none, left, right, along the full back, or on the left or right half of the back.'],
          ['Filter chamber width', 'Appears once you choose a filter. Entered in millimetres (50–400).'],
          ['Foil on the filter', 'Appears once you choose a filter: foil hides the chamber from the outside.'],
        ],
      },
      {
        id: 'lid-terrarium',
        tag: 0,
        title: 'Terrarium <b>lid</b>',
        lead: 'The “Lid” tab in the terrarium configurator.',
        shot: 'terarijum-lid',
        alt: 'Lid tab in the terrarium configurator',
        items: [
          ['One piece', 'The whole lid is a single piece.'],
          ['Two pieces', 'The back piece has mesh and the front piece is glass. Three more options appear after you choose this.'],
          ['Front lid piece', 'With foil or without (clear glass).'],
          ['Front piece depth', 'Entered in millimetres (50–1000).'],
          ['Handle on the front piece', 'Offered with sliding doors. When the terrarium opens from the top, the handle is always there.'],
        ],
      },
      {
        id: 'lid-aquarium',
        tag: 1,
        title: 'Cover <b>glass</b>',
        lead: 'The “Lid” tab in the aquarium configurator.',
        shot: 'akvarijum-lid',
        alt: 'Lid tab in the aquarium configurator',
        items: [
          ['Cover glass', 'No cover, a single cover glass, or a double cover.'],
          ['Foil on the cover', 'Appears when the aquarium has a cover: foil over the cover glass, or clear glass.'],
        ],
      },
      {
        id: 'vents',
        tag: 0,
        title: '<b>Ventilation</b>',
        lead: 'The “Vents” tab exists for terrariums only.',
        shot: 'terarijum-vent',
        alt: 'Vents tab in the terrarium configurator',
        items: [
          ['Top ventilation', '“Mesh” is a metal mesh in the lid. “Plastic vents” are round plastic openings; you then enter how many go along the length (1–8) and along the width (1–4).'],
          ['Side ventilation', 'None, or plastic vents on the side panels; you then enter the number per side (1–6).'],
          ['Vent colour', 'Black or white. Offered when plastic vents are selected.'],
          ['How many fit', 'If you enter more vents than fit the chosen dimensions, the model shows only as many as fit.'],
        ],
      },
      {
        id: 'finish',
        title: 'Finish: <b>foil, silicone, background</b>',
        lead: 'The “Finish” tab is the same for terrariums and aquariums.',
        shot: 'terarijum-foil',
        alt: 'Finish tab with foil patterns, silicone colour and backgrounds',
        items: [
          ['Foil pattern', 'Click a swatch to change the decorative foil. The number and name of the selected pattern are shown below; they match our catalogue, so you can quote them when ordering.'],
          ['Silicone colour', 'Black or clear. It shows on the glass joints.'],
          ['Background', 'The first swatch is no background, the second is a black background, and the rest are our 3D relief backgrounds.'],
        ],
      },
      {
        id: 'decor',
        title: 'Decoration and <b>substrate</b>',
        lead: 'The “Decoration” tab is the same for terrariums and aquariums.',
        shot: 'terarijum-decor',
        alt: 'Decoration tab with substrate and an added decoration',
        items: [
          ['Substrate', 'None, sand or peat. Once you choose a substrate, a slider for the layer depth appears (2–10 cm).'],
          ['From our range', 'Click an item to add it to the model. You can add the same item more than once.'],
          ['Added items', 'A list of everything you have added. Click an entry to select it; a green ring appears around it on the model.'],
          ['Move and rotate', 'Drag the item on the model to move it, and drag the green ring to rotate it. You can also set the angle with the “Angle” slider.'],
          ['Remove', 'Deletes the selected item. On a computer the Delete key works too.'],
        ],
      },
    ],
    ar: {
      title: 'View it in <b>your own space</b> (AR)',
      lead: 'On a phone or tablet you can place the terrarium or aquarium you built on your own cabinet or floor and see it at real size.',
      alt: '3D configurator on a phone with the green View in your space button',
      steps: [
        'Open the configurator on a phone or tablet.',
        'Build the model: dimensions, foil, background, decoration.',
        'Tap the green cube button at the bottom of the view. It appears a few seconds after you first touch the screen, while the model is prepared.',
        'Allow camera access and slowly move the phone over the floor or a table until the model appears.',
        'Move it with one finger and rotate it with two.',
      ],
      note: 'The button is not shown on a computer or on devices that do not support AR. If you see an older version after changing something, wait a couple of seconds and tap the button again.',
    },
    send: {
      title: 'Send us <b>what you built</b>',
      text: 'The “Order this terrarium” or “Order this aquarium” button at the bottom of the settings opens the contact form with all parameters and a link to your model already filled in: add your name and e-mail and send it. You can also copy the link yourself from the browser address bar, because it changes with every edit and stores everything you set.',
      contact: 'Contact',
    },
    ctas: ['Build a terrarium', 'Build an aquarium'],
    beta: ['Beta', 'The 3D model is still in development.'],
    link: 'How does the 3D configurator work?',
  },
  ru: {
    meta: {
      title: 'Инструкция к 3D-конфигуратору террариумов | NS Reptiles',
      description:
        'Как пользоваться 3D-конфигуратором: размеры, дверцы, крышка, вентиляция, вода и фильтр, плёнки, фоны и декор, просмотр в AR и отправка ссылки.',
    },
    h1: 'Инструкция к 3D-конфигуратору',
    lead: 'Что означает каждая кнопка и опция в конфигураторе террариума и аквариума: по шагам и со снимками экрана.',
    tags: ['Террариум', 'Аквариум'],
    toc: 'На этой странице',
    sections: [
      {
        id: 'view',
        title: 'Просмотр и <b>кнопки</b>',
        lead: 'Слева 3D-модель, справа настройки (на телефоне они под моделью). Каждое изменение сразу видно на модели.',
        shot: 'terarijum-pregled',
        alt: '3D-вид террариума с кнопками по углам',
        items: [
          ['Вращение и масштаб', 'Тяните мышью или пальцем, чтобы повернуть модель. Колесо мыши или щипок двумя пальцами меняет масштаб, правая кнопка мыши сдвигает вид.'],
          ['Крышка (слева вверху)', 'Открывает и закрывает крышку, чтобы заглянуть внутрь сверху.'],
          ['Помощь (справа вверху)', 'Краткая подсказка, что делает каждая кнопка.'],
          ['Снимок (фотоаппарат)', 'Скачивает изображение текущего вида на ваше устройство.'],
          ['Посмотреть в комнате (зелёная кнопка)', 'Ставит модель в вашу комнату через камеру. Видна только на телефоне и планшете.'],
          ['Террариум / Аквариум', 'Переключает на другой конфигуратор. У каждого свои настройки.'],
          ['Сбросить (круговая стрелка)', 'Появляется, как только вы что-то изменили, и возвращает исходные значения.'],
        ],
      },
      {
        id: 'size-terrarium',
        tag: 0,
        title: 'Размеры и <b>передняя сторона</b>',
        lead: 'Вкладка «Размеры» в конфигураторе террариума.',
        shot: 'terarijum-box',
        alt: 'Вкладка «Размеры» в конфигураторе террариума',
        items: [
          ['Размеры', 'Нажмите на число и введите длину, ширину и высоту в сантиметрах. Длина 30–200, ширина 25–100, высота 25–150 см.'],
          ['Открывание', '«Раздвижные дверцы» — два раздвижных стекла спереди. «Крышка» — переднее стекло глухое, террариум открывается сверху.'],
          ['Высота планок спереди', 'Планки — полосы с плёнкой над дверцами и под ними. «Стандартная» — наша обычная высота, «Своя» открывает поле для высоты в миллиметрах (30–400).'],
          ['Нижняя плёнка', 'Предлагается, когда террариум открывается сверху: выбираете, будет ли плёнка на нижней части передней стороны.'],
          ['Дверцы', 'Ползунки открывают левое и правое стекло на модели. Они только для просмотра и не меняют изготовление.'],
        ],
      },
      {
        id: 'size-aquarium',
        tag: 1,
        title: 'Размеры, <b>литраж и стекло</b>',
        lead: 'Вкладка «Размеры» в конфигураторе аквариума.',
        shot: 'akvarijum-box',
        alt: 'Вкладка «Размеры» в конфигураторе аквариума',
        items: [
          ['Размеры', 'Нажмите на число и введите длину, ширину и высоту в сантиметрах. Длина 20–200, ширина 15–100, высота 15–120 см.'],
          ['Стекло', 'Толщина стекла, которую расчёт предлагает для этих размеров.'],
          ['Всего', 'Объём всего аквариума в литрах.'],
          ['Воды', 'Сколько воды реально помещается при выбранном уровне. Если есть отсек фильтра, ниже указано, сколько литров в нём.'],
          ['Предупреждение о стекле', 'Если размеры требуют стекло толще 12 мм, появляется примечание, что нужны стяжки или более низкий уровень воды.'],
          ['Нижняя плёнка', 'Полоса плёнки у дна аквариума: с ней или без неё.'],
        ],
      },
      {
        id: 'water-filter',
        tag: 1,
        title: 'Вода и <b>фильтр</b>',
        lead: 'Вкладка «Вода и фильтр» есть только у аквариума.',
        shot: 'akvarijum-water',
        alt: 'Вкладка «Вода и фильтр» в конфигураторе аквариума',
        items: [
          ['Вода', '«С водой» показывает аквариум с водой, «Пустой» — без неё.'],
          ['Уровень ниже края', 'На сколько миллиметров вода ниже верхнего края стекла. Меняет и количество воды на вкладке «Размеры».'],
          ['Фильтр', 'Положение встроенного отсека фильтра: нет, слева, справа, вдоль всей задней стенки либо на левой или правой половине задней стенки.'],
          ['Ширина отсека фильтра', 'Появляется, когда выбран фильтр. Вводится в миллиметрах (50–400).'],
          ['Плёнка на фильтре', 'Появляется, когда выбран фильтр: плёнка скрывает отсек снаружи.'],
        ],
      },
      {
        id: 'lid-terrarium',
        tag: 0,
        title: 'Крышка <b>террариума</b>',
        lead: 'Вкладка «Крышка» в конфигураторе террариума.',
        shot: 'terarijum-lid',
        alt: 'Вкладка «Крышка» в конфигураторе террариума',
        items: [
          ['Цельная', 'Вся крышка из одной части.'],
          ['Из двух частей', 'Задняя часть с сеткой, передняя стеклянная. После этого выбора появляются ещё три опции.'],
          ['Передняя часть крышки', 'С плёнкой или без неё (прозрачное стекло).'],
          ['Ширина передней части', 'Вводится в миллиметрах (50–1000).'],
          ['Ручка на передней части', 'Предлагается при раздвижных дверцах. Когда террариум открывается сверху, ручка есть всегда.'],
        ],
      },
      {
        id: 'lid-aquarium',
        tag: 1,
        title: 'Покровное <b>стекло</b>',
        lead: 'Вкладка «Крышка» в конфигураторе аквариума.',
        shot: 'akvarijum-lid',
        alt: 'Вкладка «Крышка» в конфигураторе аквариума',
        items: [
          ['Покровное стекло', 'Без крышки, с одним покровным стеклом или с двойной крышкой.'],
          ['Плёнка на крышке', 'Появляется, когда у аквариума есть крышка: плёнка поверх покровного стекла или прозрачное стекло.'],
        ],
      },
      {
        id: 'vents',
        tag: 0,
        title: '<b>Вентиляция</b>',
        lead: 'Вкладка «Вентиляция» есть только у террариума.',
        shot: 'terarijum-vent',
        alt: 'Вкладка «Вентиляция» в конфигураторе террариума',
        items: [
          ['Вентиляция сверху', '«Сетка» — металлическая сетка в крышке. «Пластиковые вентиляторы» — круглые пластиковые отверстия; тогда вы вводите, сколько их по длине (1–8) и по ширине (1–4).'],
          ['Вентиляция сбоку', 'Нет или пластиковые вентиляторы на боковых стенках; тогда вы вводите количество на сторону (1–6).'],
          ['Цвет вентиляторов', 'Чёрный или белый. Предлагается, когда выбраны пластиковые вентиляторы.'],
          ['Сколько помещается', 'Если ввести больше вентиляторов, чем помещается при выбранных размерах, модель покажет только столько, сколько помещается.'],
        ],
      },
      {
        id: 'finish',
        title: 'Отделка: <b>плёнка, силикон, фон</b>',
        lead: 'Вкладка «Отделка» одинакова для террариума и аквариума.',
        shot: 'terarijum-foil',
        alt: 'Вкладка «Отделка» с декорами плёнки, цветом силикона и фонами',
        items: [
          ['Декор плёнки', 'Нажмите на квадрат, чтобы сменить декоративную плёнку. Ниже показаны номер и название выбранного декора; они совпадают с нашим каталогом, их можно назвать при заказе.'],
          ['Цвет силикона', 'Чёрный или прозрачный. Виден на стыках стекла.'],
          ['Фон', 'Первый квадрат — без фона, второй — чёрный фон, остальные — наши рельефные 3D-фоны.'],
        ],
      },
      {
        id: 'decor',
        title: 'Декор и <b>субстрат</b>',
        lead: 'Вкладка «Декор» одинакова для террариума и аквариума.',
        shot: 'terarijum-decor',
        alt: 'Вкладка «Декор» с субстратом и добавленным декором',
        items: [
          ['Субстрат', 'Без субстрата, песок или торф. Когда субстрат выбран, появляется ползунок высоты слоя (2–10 см).'],
          ['Из нашего ассортимента', 'Нажатие на предмет добавляет его в модель. Один и тот же предмет можно добавить несколько раз.'],
          ['Добавленные предметы', 'Список всего, что вы добавили. Нажатие на строку выбирает предмет, и на модели вокруг него появляется зелёное кольцо.'],
          ['Перемещение и поворот', 'Перетащите предмет на модели, чтобы переместить его, а зелёное кольцо — чтобы повернуть. Угол можно задать и ползунком «Угол».'],
          ['Убрать', 'Удаляет выбранный предмет. На компьютере работает и клавиша Delete.'],
        ],
      },
    ],
    ar: {
      title: 'Посмотрите <b>у себя в комнате</b> (AR)',
      lead: 'На телефоне или планшете собранный террариум или аквариум можно поставить на свою тумбу или пол и увидеть в реальном размере.',
      alt: '3D-конфигуратор на телефоне с зелёной кнопкой «Посмотреть в комнате»',
      steps: [
        'Откройте конфигуратор на телефоне или планшете.',
        'Соберите модель: размеры, плёнка, фон, декор.',
        'Нажмите зелёную кнопку с кубом внизу просмотра. Она появляется через несколько секунд после первого касания экрана, пока готовится модель.',
        'Разрешите доступ к камере и медленно водите телефоном над полом или столом, пока модель не появится.',
        'Перемещайте её одним пальцем, а поворачивайте двумя.',
      ],
      note: 'Кнопка не показывается на компьютере и на устройствах без поддержки AR. Если после изменения вы видите старую версию, подождите пару секунд и нажмите кнопку снова.',
    },
    send: {
      title: 'Пришлите нам <b>то, что собрали</b>',
      text: 'Кнопка «Заказать террариум» или «Заказать аквариум» внизу настроек открывает форму обратной связи, где уже указаны все параметры и ссылка на вашу модель: добавьте имя и e-mail и отправьте. Ссылку можно скопировать и самостоятельно из адресной строки браузера: она меняется с каждым изменением и хранит все ваши настройки.',
      contact: 'Контакты',
    },
    ctas: ['Собрать террариум', 'Собрать аквариум'],
    beta: ['Бета', '3D-модель ещё в разработке.'],
    link: 'Как пользоваться 3D-конфигуратором?',
  },
};
