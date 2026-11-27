import type { Locale } from '../config/site';

type Link = { href: string; label: string };

export type NavKey =
  | 'home' | 'about' | 'gallery' | 'animals'
  | 'terrariums' | 'aquariums' | 'equipment';

type NavData = {
  main: (Link & { key: NavKey })[];
  animalsSub: Link[];
  allAnimals: string;
  contact: Link;
  menu: string;
  footer: {
    about: string;
    quickTitle: string;
    quick: Link[];
    productsTitle: string;
    products: Link[];
    contactTitle: string;
    city: string;
    hoursTitle: string;
    hours: [string, string][];
    newsTitle: string;
    newsText: string;
    newsPlaceholder: string;
    newsButton: string;
    rights: string;
  };
};

const sub = (base: string, labels: [string, string, string]): Link[] => [
  { href: `${base}#cat-gusteri`, label: labels[0] },
  { href: base.replace(/(zivotinje|animals)\.html$/, (m) => (m.startsWith('z') ? 'zmije.html' : 'snakes.html')), label: labels[1] },
  { href: `${base}#cat-tarantule`, label: labels[2] },
];

export const NAV: Record<Locale, NavData> = {
  sr: {
    main: [
      { key: 'home', href: '/', label: 'Početna' },
      { key: 'about', href: '/onama.html', label: 'O nama' },
      { key: 'gallery', href: '/galerija.html', label: 'Galerija' },
      { key: 'animals', href: '/zivotinje.html', label: 'Životinje' },
      { key: 'terrariums', href: '/terarijumi.html', label: 'Terarijumi' },
      { key: 'aquariums', href: '/akvarijumi.html', label: 'Akvarijumi' },
      { key: 'equipment', href: '/oprema.html', label: 'Oprema' },
    ],
    animalsSub: sub('/zivotinje.html', ['Gušteri', 'Zmije', 'Tarantule']),
    allAnimals: 'Sve životinje',
    contact: { href: '/kontakt.html', label: 'Kontakt' },
    menu: 'Meni',
    footer: {
      about:
        'Odgajivačnica egzotičnih životinja u Novom Sadu. Vaš pouzdan partner za zdrave reptile i kvalitetnu opremu. Osnovani 2019, reptile uzgajamo više od 10 godina.',
      quickTitle: 'Brzi linkovi',
      quick: [
        { href: '/', label: 'Početna' },
        { href: '/onama.html', label: 'O nama' },
        { href: '/galerija.html', label: 'Galerija' },
        { href: '/zivotinje.html', label: 'Životinje' },
        { href: '/kontakt.html', label: 'Kontakt' },
        { href: '/dostava.html', label: 'Dostava' },
        { href: '/politika-privatnosti.html', label: 'Politika privatnosti' },
        { href: '/cesta-pitanja.html', label: 'Česta pitanja' },
      ],
      productsTitle: 'Proizvodi',
      products: [
        { href: '/terarijumi.html', label: 'Terarijumi' },
        { href: '/akvarijumi.html', label: 'Akvarijumi' },
        { href: '/oprema.html', label: 'Oprema' },
        { href: '/kompleti.html', label: 'Kompleti za početnike' },
        { href: '/akvarijumi-za-pocetnike.html', label: 'Akvarijumi za početnike' },
        { href: '/cenovnik.html', label: 'Cenovnik' },
        { href: '/3d-terarijum.html', label: '3D konfigurator' },
      ],
      contactTitle: 'Kontakt',
      city: 'Novi Sad, Srbija',
      hoursTitle: 'Radno vreme',
      hours: [['Svaki dan', '09:00–21:00']],
      newsTitle: 'Newsletter',
      newsText: 'Prijavi se za novosti i akcije.',
      newsPlaceholder: 'Vaš e-mail',
      newsButton: 'Prijavi se',
      rights: 'Sva prava zadržana.',
    },
  },
  en: {
    main: [
      { key: 'home', href: '/en/', label: 'Home' },
      { key: 'about', href: '/en/about.html', label: 'About Us' },
      { key: 'gallery', href: '/en/gallery.html', label: 'Gallery' },
      { key: 'animals', href: '/en/animals.html', label: 'Animals' },
      { key: 'terrariums', href: '/en/terrariums.html', label: 'Terrariums' },
      { key: 'aquariums', href: '/en/aquariums.html', label: 'Aquariums' },
      { key: 'equipment', href: '/en/equipment.html', label: 'Equipment' },
    ],
    animalsSub: sub('/en/animals.html', ['Lizards', 'Snakes', 'Tarantulas']),
    allAnimals: 'All animals',
    contact: { href: '/en/contact.html', label: 'Contact' },
    menu: 'Menu',
    footer: {
      about:
        'Exotic animal breeding facility in Novi Sad. Your reliable partner for healthy reptiles and quality equipment. Founded in 2019, breeding reptiles for over 10 years.',
      quickTitle: 'Quick Links',
      quick: [
        { href: '/en/', label: 'Home' },
        { href: '/en/about.html', label: 'About Us' },
        { href: '/en/gallery.html', label: 'Gallery' },
        { href: '/en/animals.html', label: 'Animals' },
        { href: '/en/contact.html', label: 'Contact' },
        { href: '/en/shipping.html', label: 'Shipping' },
        { href: '/en/privacy-policy.html', label: 'Privacy Policy' },
        { href: '/en/faq.html', label: 'FAQ' },
      ],
      productsTitle: 'Products',
      products: [
        { href: '/en/terrariums.html', label: 'Terrariums' },
        { href: '/en/aquariums.html', label: 'Aquariums' },
        { href: '/en/equipment.html', label: 'Equipment' },
        { href: '/en/starter-kits.html', label: 'Starter Kits' },
        { href: '/en/guides/beginner-aquariums.html', label: 'Beginner Aquariums' },
        { href: '/en/price-list.html', label: 'Price List' },
        { href: '/en/3d-terrarium.html', label: '3D Configurator' },
      ],
      contactTitle: 'Contact',
      city: 'Novi Sad, Serbia',
      hoursTitle: 'Working Hours',
      hours: [['Every day', '09:00–21:00']],
      newsTitle: 'Newsletter',
      newsText: 'Subscribe for news and special offers.',
      newsPlaceholder: 'Your e-mail',
      newsButton: 'Subscribe',
      rights: 'All rights reserved.',
    },
  },
  ru: {
    main: [
      { key: 'home', href: '/ru/', label: 'Главная' },
      { key: 'about', href: '/ru/about.html', label: 'О нас' },
      { key: 'gallery', href: '/ru/gallery.html', label: 'Галерея' },
      { key: 'animals', href: '/ru/animals.html', label: 'Животные' },
      { key: 'terrariums', href: '/ru/terrariums.html', label: 'Террариумы' },
      { key: 'aquariums', href: '/ru/aquariums.html', label: 'Аквариумы' },
      { key: 'equipment', href: '/ru/equipment.html', label: 'Оборудование' },
    ],
    animalsSub: sub('/ru/animals.html', ['Ящерицы', 'Змеи', 'Тарантулы']),
    allAnimals: 'Все животные',
    contact: { href: '/ru/contact.html', label: 'Контакт' },
    menu: 'Меню',
    footer: {
      about:
        'Питомник экзотических животных в Нови Саде. Ваш надёжный партнёр по здоровым рептилиям и качественному оборудованию. Основаны в 2019 году, разводим рептилий более 10 лет.',
      quickTitle: 'Быстрые ссылки',
      quick: [
        { href: '/ru/', label: 'Главная' },
        { href: '/ru/about.html', label: 'О нас' },
        { href: '/ru/gallery.html', label: 'Галерея' },
        { href: '/ru/animals.html', label: 'Животные' },
        { href: '/ru/contact.html', label: 'Контакт' },
        { href: '/ru/shipping.html', label: 'Доставка' },
        { href: '/ru/privacy-policy.html', label: 'Политика конфиденциальности' },
        { href: '/ru/faq.html', label: 'Часто задаваемые вопросы' },
      ],
      productsTitle: 'Продукция',
      products: [
        { href: '/ru/terrariums.html', label: 'Террариумы' },
        { href: '/ru/aquariums.html', label: 'Аквариумы' },
        { href: '/ru/equipment.html', label: 'Оборудование' },
        { href: '/ru/starter-kits.html', label: 'Наборы для начинающих' },
        { href: '/ru/guides/beginner-aquariums.html', label: 'Аквариумы для начинающих' },
        { href: '/ru/price-list.html', label: 'Прайс-лист' },
        { href: '/ru/3d-terrarium.html', label: '3D-конфигуратор' },
      ],
      contactTitle: 'Контакт',
      city: 'Нови Сад, Сербия',
      hoursTitle: 'Часы работы',
      hours: [['Ежедневно', '09:00–21:00']],
      newsTitle: 'Рассылка',
      newsText: 'Подпишитесь на новости и акции.',
      newsPlaceholder: 'Ваш e-mail',
      newsButton: 'Подписаться',
      rights: 'Все права защищены.',
    },
  },
};
