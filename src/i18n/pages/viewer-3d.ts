import type { Locale } from '../../config/site';

interface HelpItem {
  title: string;
  text: string;
}

export const VIEWER_3D = {
  sr: {
    meta: {
      title: '3D Pregled Terarijuma - NS Reptiles | Novi Sad',
      description:
        '3D pregled terarijuma - rotirajte, zumirajte i prilagodite boje. Pogledajte terarijum u svom prostoru kroz AR. NS Reptiles Novi Sad.',
    },
    h1: '3D Pregled Terarijuma',
    lead: 'Zadajte dimenzije, izaberite izvedbu, boju folije i 3D pozadinu, pa dodajte supstrat i dekoraciju iz naše ponude. Na telefonu terarijum možete da pogledate u svom prostoru kroz AR.',
    loading: 'Učitavanje 3D modela...',
    hintTouch: 'Vuci za rotaciju • Pinch za zoom',
    hintDesktop: 'Vuci za rotaciju • Scroll za zoom • Desni klik za pomeranje',
    lid: 'Poklopac',
    help: 'Pomoć',
    helpTitle: 'Kako koristiti 3D pregled',
    helpShot: { title: 'Slikaj', text: 'Napravi screenshot trenutnog prikaza i preuzmi kao sliku.' },
    helpAr: { title: 'Pogledaj u prostoru (AR)', text: 'Postavi terarijum u svoj prostor kroz kameru telefona. Dostupno samo na mobilnom.' },
    helpDoors: { title: 'Vrata', text: 'Pomeri slidere da otvoriš levo i desno klizno staklo terarijuma.' },
    helpLid: { title: 'Poklopac', text: 'Klikni dugme gore levo da otvoriš ili zatvoriš poklopac terarijuma.' },
    helpTexture: { title: 'Tekstura', text: 'Izaberi jednu od 12 boja drveta za dekorativnu foliju.' },
    close: 'Zatvori',
    modelAlt: '3D model terarijuma',
    shot: 'Slikaj i preuzmi',
    ar: 'Pogledaj u prostoru',
    reset: 'Resetuj',
    doors: 'Vrata',
    leftGlass: 'Levo staklo',
    rightGlass: 'Desno staklo',
    texture: 'Tekstura',
    dimensions: 'Dimenzije',
    build: 'Izvedba',
    background: 'Pozadina',
    decor: 'Dekoracija',
    substrate: 'Supstrat',
    substrateDepth: 'Visina supstrata',
    substrateDepthAria: 'Visina supstrata u cm',
    fromOffer: 'Iz naše ponude',
    remove: 'Ukloni',
    removeTitle: 'Ukloni (Delete)',
    angle: 'Ugao',
    angleAria: 'Ugao dekoracije u stepenima',
    decorHint: 'Prevuci dekoraciju da je pomeriš, a zeleni prsten oko nje da je okreneš.',
    // stringovi koje koristi module skripta (stize kao JSON)
    js: {
      woods: ['Trešnja', 'Mahagonij', 'Belo drvo', 'Tamni hrast', 'Bambus', 'Espreso orah', 'Dimljeni hrast', 'Javor', 'Orah', 'Jasen', 'Venge', 'Sivi hrast'],
      dims: ['Dužina', 'Širina', 'Visina'],
      unit: 'cm',
      inUnit: ' u cm',
      build: {
        open: ['Otvaranje', 'Klizna vrata', 'Poklopac'],
        topVent: ['Ventilacija gore', 'Mrežica', 'Plastični ventilatori'],
        sideVent: ['Ventilacija sa strane', 'Bez', 'Plastični ventilatori'],
      },
      bgNone: 'Bez pozadine',
      bgBlack: 'Crna pozadina',
      bgRelief: 'Pozadina',
      substrates: ['Bez supstrata', 'Pesak', 'Treset'],
      decor: ['Posuda godovi drveta', 'Skrivalica pećina'],
      download: 'terarijum-3d-pregled.png',
    },
  },
  en: {
    meta: {
      title: '3D Terrarium Viewer with AR | NS Reptiles, Novi Sad',
      description:
        'Interactive 3D terrarium viewer: rotate, zoom and customize the colors. See the terrarium in your own space with AR. NS Reptiles, Novi Sad.',
      keywords: '3D terrarium viewer, terrarium AR, custom glass terrarium, terrarium configurator, NS Reptiles',
    },
    h1: '3D Terrarium Viewer',
    lead: 'Set the dimensions, choose the build, foil color and 3D background, then add substrate and decorations from our range. On your phone you can see the terrarium in your own space with AR.',
    loading: 'Loading 3D model...',
    hintTouch: 'Drag to rotate • Pinch to zoom',
    hintDesktop: 'Drag to rotate • Scroll to zoom • Right-click to pan',
    lid: 'Lid',
    help: 'Help',
    helpTitle: 'How to use the 3D viewer',
    helpShot: { title: 'Screenshot', text: 'Take a screenshot of the current view and download it as an image.' },
    helpAr: { title: 'View in your space (AR)', text: 'Place the terrarium in your own space using your phone camera. Available on mobile only.' },
    helpDoors: { title: 'Doors', text: 'Move the sliders to open the left and right sliding glass doors of the terrarium.' },
    helpLid: { title: 'Lid', text: 'Click the button in the top left to open or close the terrarium lid.' },
    helpTexture: { title: 'Texture', text: 'Choose one of 12 wood colors for the decorative foil.' },
    close: 'Close',
    modelAlt: '3D terrarium model',
    shot: 'Screenshot and download',
    ar: 'View in your space',
    reset: 'Reset',
    doors: 'Doors',
    leftGlass: 'Left glass',
    rightGlass: 'Right glass',
    texture: 'Texture',
    dimensions: 'Dimensions',
    build: 'Build',
    background: 'Background',
    decor: 'Decoration',
    substrate: 'Substrate',
    substrateDepth: 'Substrate depth',
    substrateDepthAria: 'Substrate depth in cm',
    fromOffer: 'From our range',
    remove: 'Remove',
    removeTitle: 'Remove (Delete)',
    angle: 'Angle',
    angleAria: 'Decoration angle in degrees',
    decorHint: 'Drag a decoration to move it, and drag the green ring around it to rotate it.',
    js: {
      woods: ['Cherry', 'Mahogany', 'White wood', 'Dark oak', 'Bamboo', 'Espresso walnut', 'Smoked oak', 'Maple', 'Walnut', 'Ash', 'Wenge', 'Grey oak'],
      dims: ['Length', 'Width', 'Height'],
      unit: 'cm',
      inUnit: ' in cm',
      build: {
        open: ['Opening', 'Sliding doors', 'Lid'],
        topVent: ['Top ventilation', 'Mesh', 'Plastic vents'],
        sideVent: ['Side ventilation', 'None', 'Plastic vents'],
      },
      bgNone: 'No background',
      bgBlack: 'Black background',
      bgRelief: 'Background',
      substrates: ['No substrate', 'Sand', 'Peat'],
      decor: ['Tree ring dish', 'Cave hide'],
      download: 'terrarium-3d-view.png',
    },
  },
  ru: {
    meta: {
      title: '3D-просмотр террариума — NS Reptiles | Нови-Сад',
      description:
        '3D-просмотр террариума: вращайте, приближайте и меняйте цвет. Посмотрите террариум у себя дома через AR. NS Reptiles, Нови-Сад.',
      keywords:
        '3D террариум, 3D-просмотр террариума, террариум AR, конфигуратор террариума, террариум на заказ Нови-Сад, NS Reptiles',
    },
    h1: '3D-просмотр террариума',
    lead: 'Задайте размеры, выберите исполнение, цвет плёнки и 3D-фон, затем добавьте субстрат и декор из нашего ассортимента. На телефоне террариум можно посмотреть у себя в комнате через AR.',
    loading: 'Загрузка 3D-модели...',
    hintTouch: 'Проведите для вращения • Щипок для масштаба',
    hintDesktop: 'Тяните для вращения • Колесо для масштаба • Правый клик для перемещения',
    lid: 'Крышка',
    help: 'Помощь',
    helpTitle: 'Как пользоваться 3D-просмотром',
    helpShot: { title: 'Снимок', text: 'Сделайте снимок текущего вида и скачайте его как изображение.' },
    helpAr: { title: 'Посмотреть в комнате (AR)', text: 'Разместите террариум у себя в комнате через камеру телефона. Доступно только на мобильных устройствах.' },
    helpDoors: { title: 'Дверцы', text: 'Двигайте ползунки, чтобы открыть левое и правое раздвижное стекло террариума.' },
    helpLid: { title: 'Крышка', text: 'Нажмите кнопку слева вверху, чтобы открыть или закрыть крышку террариума.' },
    helpTexture: { title: 'Текстура', text: 'Выберите один из 12 цветов дерева для декоративной плёнки.' },
    close: 'Закрыть',
    modelAlt: '3D-модель террариума',
    shot: 'Сделать снимок и скачать',
    ar: 'Посмотреть в комнате',
    reset: 'Сбросить',
    doors: 'Дверцы',
    leftGlass: 'Левое стекло',
    rightGlass: 'Правое стекло',
    texture: 'Текстура',
    dimensions: 'Размеры',
    build: 'Исполнение',
    background: 'Фон',
    decor: 'Декор',
    substrate: 'Субстрат',
    substrateDepth: 'Высота субстрата',
    substrateDepthAria: 'Высота субстрата в см',
    fromOffer: 'Из нашего ассортимента',
    remove: 'Убрать',
    removeTitle: 'Убрать (Delete)',
    angle: 'Угол',
    angleAria: 'Угол декора в градусах',
    decorHint: 'Перетащите декор, чтобы переместить его, а зелёное кольцо вокруг него — чтобы повернуть.',
    js: {
      woods: ['Вишня', 'Махагон', 'Белое дерево', 'Тёмный дуб', 'Бамбук', 'Орех эспрессо', 'Копчёный дуб', 'Клён', 'Орех', 'Ясень', 'Венге', 'Серый дуб'],
      dims: ['Длина', 'Ширина', 'Высота'],
      unit: 'см',
      inUnit: ' в см',
      build: {
        open: ['Открывание', 'Раздвижные дверцы', 'Крышка'],
        topVent: ['Вентиляция сверху', 'Сетка', 'Пластиковые вентиляторы'],
        sideVent: ['Вентиляция сбоку', 'Нет', 'Пластиковые вентиляторы'],
      },
      bgNone: 'Без фона',
      bgBlack: 'Чёрный фон',
      bgRelief: 'Фон',
      substrates: ['Без субстрата', 'Песок', 'Торф'],
      decor: ['Миска с годовыми кольцами', 'Укрытие пещера'],
      download: 'terarijum-3d-pregled.png',
    },
  },
} satisfies Record<
  Locale,
  {
    meta: { title: string; description: string; keywords?: string };
    helpShot: HelpItem;
    helpAr: HelpItem;
    helpDoors: HelpItem;
    helpLid: HelpItem;
    helpTexture: HelpItem;
    js: {
      woods: string[];
      dims: string[];
      unit: string;
      inUnit: string;
      build: Record<'open' | 'topVent' | 'sideVent', string[]>;
      bgNone: string;
      bgBlack: string;
      bgRelief: string;
      substrates: string[];
      decor: string[];
      download: string;
    };
    [k: string]: unknown;
  }
>;
