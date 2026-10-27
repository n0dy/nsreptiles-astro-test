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
    lead: 'Rotirajte, zumirajte i prilagodite boje terarijuma. Otvorite vrata i poklopac, izaberite teksturu drveta, a na telefonu ga pogledajte u svom prostoru kroz AR.',
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
    helpTexture: { title: 'Tekstura', text: 'Biraj između 5 boja drveta: trešnja, mahagonij, belo drvo, tamni hrast i bambus.' },
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
    // stringovi koje koristi module skripta (stize kao JSON)
    js: {
      woods: ['Trešnja', 'Mahagonij', 'Belo drvo', 'Tamni hrast', 'Bambus'],
      dims: ['Dužina', 'Širina', 'Visina'],
      unit: 'cm',
      loadingPct: 'Učitavanje: ',
      loadError: 'Greška pri učitavanju modela.',
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
    lead: "Rotate, zoom and customize the terrarium's colors. Open the doors and the lid, choose a wood texture, and on your phone see it in your own space with AR.",
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
    helpTexture: { title: 'Texture', text: 'Choose from 5 wood colors: cherry, mahogany, white wood, dark oak and bamboo.' },
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
    js: {
      woods: ['Cherry', 'Mahogany', 'White wood', 'Dark oak', 'Bamboo'],
      dims: ['Length', 'Width', 'Height'],
      unit: 'cm',
      loadingPct: 'Loading: ',
      loadError: 'Error loading the model.',
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
    lead: 'Вращайте, приближайте и меняйте цвет террариума. Открывайте дверцы и крышку, выбирайте текстуру дерева, а на телефоне посмотрите его у себя в комнате через AR.',
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
    helpTexture: { title: 'Текстура', text: 'Выбирайте из 5 цветов дерева: вишня, махагон, белое дерево, тёмный дуб и бамбук.' },
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
    js: {
      woods: ['Вишня', 'Махагон', 'Белое дерево', 'Тёмный дуб', 'Бамбук'],
      dims: ['Длина', 'Ширина', 'Высота'],
      unit: 'см',
      loadingPct: 'Загрузка: ',
      loadError: 'Ошибка при загрузке модели.',
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
    js: { woods: string[]; dims: string[]; unit: string; loadingPct: string; loadError: string; download: string };
    [k: string]: unknown;
  }
>;
