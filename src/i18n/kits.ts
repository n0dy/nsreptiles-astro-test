import type { Locale } from '../config/site';

type L<T = string> = Record<Locale, T>;

export const KIT_UI = {
  sr: { badge: 'Akcija', more: 'Pogledaj više', locale: 'sr-RS' },
  en: { badge: 'Sale', more: 'View more', locale: 'en-US' },
  ru: { badge: 'Акция', more: 'Подробнее', locale: 'ru-RU' },
} satisfies L<unknown>;

export interface Kit {
  /** srpska putanja strane kompleta */
  href: string;
  img: string;
  /** din */
  price: number;
  name: L;
  incl: L<string[]>;
}

export const KITS: Kit[] = [
  {
    href: '/kompleti/bradata-agama.html',
    img: '/assets/img/bradata-agama.jpg',
    price: 25800,
    name: { sr: 'Bradata agama', en: 'Bearded dragon', ru: 'Бородатая агама' },
    incl: {
      sr: ['Terarijum 100×45×45 +3D', 'UVB/UVA rasveta', 'Pesak, vitamini', 'Hrana za mesec'],
      en: ['100×45×45 terrarium +3D', 'UVB/UVA lighting', 'Sand, vitamins', 'Food for a month'],
      ru: ['Террариум 100×45×45 +3D', 'UVB/UVA-освещение', 'Песок, витамины', 'Корм на месяц'],
    },
  },
  {
    href: '/kompleti/leopard-gekon.html',
    img: '/assets/img/leopard-gekon.jpg',
    price: 12500,
    name: { sr: 'Leopard gekon', en: 'Leopard gecko', ru: 'Леопардовый геккон' },
    incl: {
      sr: ['Terarijum 50×35×35', 'Folija grejač, skrovište', 'Treset, posuda', 'Hrana + vitamini'],
      en: ['50×35×35 terrarium', 'Heating pad, hideout', 'Peat, water dish', 'Food + vitamins'],
      ru: ['Террариум 50×35×35', 'Плёнка обогрев, укрытие', 'Торф, ёмкость', 'Корм + витамины'],
    },
  },
  {
    href: '/kompleti/kukuruzni-smuk.html',
    img: '/assets/img/kukuruzni-smuk.jpg',
    price: 12500,
    name: { sr: 'Kukuruzni smuk', en: 'Corn snake', ru: 'Маисовый полоз' },
    incl: {
      sr: ['Terarijum 50×35×35', 'Kokosov treset', 'Posuda za vodu', 'Pećina'],
      en: ['50×35×35 terrarium', 'Coconut peat', 'Water dish', 'Cave hideout'],
      ru: ['Террариум 50×35×35', 'Кокосовый торф', 'Ёмкость для воды', 'Пещера'],
    },
  },
  {
    href: '/kompleti/skorpija.html',
    img: '/assets/img/skorpija.jpg',
    price: 8500,
    name: { sr: 'Škorpija', en: 'Scorpion', ru: 'Скорпион' },
    incl: {
      sr: ['Heterometrus petersii', 'Terarijum 40×25×30', 'Kokosov treset', '3 veličine'],
      en: ['Heterometrus petersii', '40×25×30 terrarium', 'Coconut peat', '3 sizes available'],
      ru: ['Heterometrus petersii', 'Террариум 40×25×30', 'Кокосовый торф', '3 размера'],
    },
  },
  {
    href: '/kompleti/tarantula.html',
    img: '/assets/img/tarantula.jpg',
    price: 3000,
    name: { sr: 'Tarantula', en: 'Tarantula', ru: 'Тарантул' },
    incl: {
      sr: ['Terarijum 11×15×20 +3D', 'Kokosov treset', '~10 vrsta', 'Za prvog pauka'],
      en: ['11×15×20 terrarium +3D', 'Coconut peat', '~10 species', 'Perfect first spider'],
      ru: ['Террариум 11×15×20 +3D', 'Кокосовый торф', '~10 видов', 'Для первого паука'],
    },
  },
];
