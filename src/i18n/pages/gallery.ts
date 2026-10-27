import type { Locale } from '../../config/site';

interface Item {
  /** /style/img/gallery/<img>.jpg */
  img: number;
  size?: 'gal-big' | 'gal-tall' | 'gal-wide';
  /** filter grupa za main.js */
  cat: 'guster' | 'zmija';
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

// Raspored i potpisi se razlikuju po jeziku (tako su strane i objavljene)
export const GALLERY_ITEMS: Record<Locale, Item[]> = {
  sr: [
    { img: 2, size: 'gal-big', cat: 'guster', small: 'Gušter', name: 'Bradata agama' },
    { img: 1, cat: 'zmija', small: 'Zmija', name: 'Loptasti piton' },
    { img: 14, cat: 'guster', small: 'Gušter', name: 'Leopard gekon' },
    { img: 3, cat: 'guster', small: 'Gušter', name: 'Leopard gekon' },
    { img: 7, size: 'gal-tall', cat: 'zmija', small: 'Zmija', name: 'Loptasti piton' },
    { img: 4, cat: 'guster', small: 'Gušter', name: 'Bradata agama' },
    { img: 9, size: 'gal-wide', cat: 'zmija', small: 'Zmija', name: 'Kukuruzni smuk' },
    { img: 13, size: 'gal-big', cat: 'guster', small: 'Gušter', name: 'Vodena agama' },
    { img: 6, cat: 'guster', small: 'Gušter', name: 'Bradata agama' },
    { img: 5, size: 'gal-tall', cat: 'zmija', small: 'Zmija', name: 'Loptasti piton' },
    { img: 10, cat: 'guster', small: 'Gušter', name: 'Leopard gekon' },
    { img: 8, cat: 'guster', small: 'Gušter', name: 'Bradata agama' },
    { img: 12, size: 'gal-wide', cat: 'zmija', small: 'Zmija', name: 'Loptasti piton' },
    { img: 11, cat: 'guster', small: 'Gušter', name: 'Bradata agama' },
  ],
  en: [
    { img: 2, size: 'gal-tall', cat: 'guster', small: 'Lizard', name: 'Bearded Dragon' },
    { img: 13, size: 'gal-big', cat: 'guster', small: 'Lizard', name: 'Water Dragon' },
    { img: 3, cat: 'guster', small: 'Lizard', name: 'Leopard Gecko' },
    { img: 1, cat: 'zmija', small: 'Snake', name: 'Ball Python' },
    { img: 14, cat: 'guster', small: 'Lizard', name: 'Leopard Gecko' },
    { img: 9, size: 'gal-wide', cat: 'zmija', small: 'Snake', name: 'Corn Snake' },
    { img: 7, size: 'gal-tall', cat: 'zmija', small: 'Snake', name: 'Ball Python' },
    { img: 6, cat: 'guster', small: 'Lizard', name: 'Bearded Dragon' },
    { img: 10, cat: 'guster', small: 'Lizard', name: 'Leopard Gecko' },
    { img: 8, cat: 'guster', small: 'Lizard', name: 'Bearded Dragon' },
    { img: 4, size: 'gal-big', cat: 'guster', small: 'Lizard', name: 'Bearded Dragon' },
    { img: 5, cat: 'zmija', small: 'Snake', name: 'Corn Snake' },
    { img: 11, cat: 'guster', small: 'Lizard', name: 'Leopard Gecko' },
    { img: 12, size: 'gal-wide', cat: 'guster', small: 'Lizard', name: 'Water Dragon' },
  ],
  ru: [
    { img: 2, size: 'gal-big', cat: 'guster', small: 'Ящерица', name: 'Бородатая агама' },
    { img: 1, cat: 'zmija', small: 'Змея', name: 'Шаровидный питон' },
    { img: 14, cat: 'guster', small: 'Ящерица', name: 'Леопардовый геккон' },
    { img: 3, size: 'gal-tall', cat: 'guster', small: 'Ящерица', name: 'Леопардовый геккон' },
    { img: 4, cat: 'guster', small: 'Ящерица', name: 'Бородатая агама' },
    { img: 9, size: 'gal-wide', cat: 'zmija', small: 'Змея', name: 'Маисовый полоз' },
    { img: 5, cat: 'guster', small: 'Ящерица', name: 'Водяная агама' },
    { img: 6, cat: 'guster', small: 'Ящерица', name: 'Бородатая агама' },
    { img: 7, size: 'gal-tall', cat: 'zmija', small: 'Змея', name: 'Шаровидный питон' },
    { img: 8, cat: 'guster', small: 'Ящерица', name: 'Бородатая агама' },
    { img: 10, size: 'gal-big', cat: 'guster', small: 'Ящерица', name: 'Леопардовый геккон' },
    { img: 11, cat: 'zmija', small: 'Змея', name: 'Маисовый полоз' },
    { img: 12, cat: 'guster', small: 'Ящерица', name: 'Водяная агама' },
    { img: 13, size: 'gal-wide', cat: 'guster', small: 'Ящерица', name: 'Водяная агама' },
  ],
};
