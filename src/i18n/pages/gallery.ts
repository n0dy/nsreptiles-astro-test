import type { Locale } from '../../config/site';

interface Item {
  /** /style/img/gallery/nova/<img>.webp */
  img: string;
  size?: 'gal-big' | 'gal-tall' | 'gal-wide';
  /** object-position kad crop odseče glavu */
  pos?: string;
  /** filter grupa za main.js */
  cat: 'guster' | 'zmija' | 'ostalo';
  small: string;
  name: string;
}

export const GALLERY: Record<
  Locale,
  {
    meta: { title: string; description: string; image?: string };
    h1: string;
    lead: string;
    lb: { close: string; prev: string; next: string };
  }
> = {
  sr: {
    meta: {
      title: 'Galerija terarijuma i reptila, Novi Sad | NS Reptiles',
      image: '/style/img/gallery/1.jpg',
      description:
        'Pogledajte galeriju NS Reptiles - slike terarijuma, akvarijuma, reptila i egzotičnih životinja. Inspiracija za vaš budući terarijum.',
    },
    h1: 'Naš svet egzotike',
    lead: 'Slike naših reptila, terarijuma i akvarijuma. Pregledajte radove i pronađite inspiraciju za svoj budući dom za ljubimca.',
    lb: { close: 'Zatvori', prev: 'Prethodna', next: 'Sledeća' },
  },
  en: {
    meta: {
      title: 'Gallery — Terrarium and Reptile Photos | NS Reptiles',
      description:
        'Browse the NS Reptiles gallery - photos of terrariums, aquariums, reptiles and exotic animals. Inspiration for your future terrarium.',
    },
    h1: 'Our World of Exotics',
    lead: 'Photos of our reptiles, terrariums and aquariums. Browse our work and find inspiration for your future pet home.',
    lb: { close: 'Close', prev: 'Previous', next: 'Next' },
  },
  ru: {
    meta: {
      title: 'Галерея террариумов и рептилий, Нови-Сад | NS Reptiles',
      description:
        'Галерея NS Reptiles - фото террариумов, аквариумов, рептилий и экзотических животных. Вдохновение для вашего будущего террариума.',
    },
    h1: 'Наш мир экзотики',
    lead: 'Фотографии наших рептилий, террариумов и аквариумов. Просмотрите наши работы и найдите вдохновение для будущего дома вашего питомца.',
    lb: { close: 'Закрыть', prev: 'Предыдущая', next: 'Следующая' },
  },
};

type Kind = 'agama' | 'leopard' | 'crested' | 'debelorepi' | 'vodena' | 'piton' | 'smuk' | 'skorpion';

const KINDS: Record<Kind, { cat: Item['cat']; name: Record<Locale, string> }> = {
  agama: { cat: 'guster', name: { sr: 'Bradata agama', en: 'Bearded Dragon', ru: 'Бородатая агама' } },
  leopard: { cat: 'guster', name: { sr: 'Leopard gekon', en: 'Leopard Gecko', ru: 'Леопардовый геккон' } },
  crested: { cat: 'guster', name: { sr: 'Crested gekon', en: 'Crested Gecko', ru: 'Реснитчатый геккон' } },
  debelorepi: { cat: 'guster', name: { sr: 'Debelorepi gekon', en: 'African Fat-tailed Gecko', ru: 'Толстохвостый геккон' } },
  vodena: { cat: 'guster', name: { sr: 'Vodena agama', en: 'Water Dragon', ru: 'Водяная агама' } },
  piton: { cat: 'zmija', name: { sr: 'Loptasti piton', en: 'Ball Python', ru: 'Королевский питон' } },
  smuk: { cat: 'zmija', name: { sr: 'Kukuruzni smuk', en: 'Corn Snake', ru: 'Маисовый полоз' } },
  skorpion: { cat: 'ostalo', name: { sr: 'Škorpion', en: 'Scorpion', ru: 'Скорпион' } },
};

const SMALL: Record<Item['cat'], Record<Locale, string>> = {
  guster: { sr: 'Gušter', en: 'Lizard', ru: 'Ящерица' },
  zmija: { sr: 'Zmija', en: 'Snake', ru: 'Змея' },
  ostalo: { sr: 'Beskičmenjak', en: 'Invertebrate', ru: 'Беспозвоночное' },
};

const LAYOUT: { img: string; kind: Kind; size?: Item['size']; pos?: string }[] = [
  { img: 'bradata-agama-1', kind: 'agama', size: 'gal-big' },
  { img: 'loptasti-piton-1', kind: 'piton' },
  { img: 'leopard-gekon-1', kind: 'leopard' },
  { img: 'debelorepi-gekon', kind: 'debelorepi', size: 'gal-wide' },
  { img: 'kukuruzni-smuk', kind: 'smuk' },
  { img: 'crested-gekon', kind: 'crested', pos: 'right' },
  { img: 'skorpion-1', kind: 'skorpion', size: 'gal-big' },
  { img: 'bradata-agama-2', kind: 'agama', pos: 'right' },
  { img: 'leopard-gekon-2', kind: 'leopard' },
  { img: 'loptasti-piton-2', kind: 'piton', size: 'gal-wide' },
  { img: 'vodena-agama', kind: 'vodena' },
  { img: 'bradata-agama-3', kind: 'agama' },
  { img: 'leopard-gekon-3', kind: 'leopard', size: 'gal-big' },
  { img: 'piton', kind: 'piton' },
  { img: 'bradata-agama-4', kind: 'agama' },
  { img: 'skorpion-2', kind: 'skorpion', size: 'gal-wide' },
  { img: 'loptasti-piton-3', kind: 'piton', size: 'gal-wide' },
  { img: 'bradata-agama-5', kind: 'agama', size: 'gal-wide' },
];

const itemsFor = (lang: Locale): Item[] =>
  LAYOUT.map(({ img, kind, size, pos }) => {
    const { cat, name } = KINDS[kind];
    return { img, size, pos, cat, small: SMALL[cat][lang], name: name[lang] };
  });

export const GALLERY_ITEMS: Record<Locale, Item[]> = { sr: itemsFor('sr'), en: itemsFor('en'), ru: itemsFor('ru') };
