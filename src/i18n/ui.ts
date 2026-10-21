import type { Locale } from '../config/site';

export const LANG_NAMES: Record<Locale, string> = {
  sr: 'Srpski',
  en: 'English',
  ru: 'Русский',
};

export const HOME: Record<Locale, string> = { sr: '/', en: '/en/', ru: '/ru/' };

export const UI = {
  sr: {
    tel: 'Tel',
    toggleTheme: 'Promeni temu',
    cart: 'Korpa',
    close: 'Zatvori',
    total: 'Ukupno',
    goToCart: 'Idi u korpu',
    continueShopping: 'Nastavi kupovinu',
    cartUrl: '/korpa.html',
    breadcrumb: 'Putanja',
  },
  en: {
    tel: 'Tel',
    toggleTheme: 'Toggle theme',
    cart: 'Cart',
    close: 'Close',
    total: 'Total',
    goToCart: 'Go to cart',
    continueShopping: 'Continue shopping',
    cartUrl: '/en/cart.html',
    breadcrumb: 'Breadcrumb',
  },
  ru: {
    tel: 'Тел',
    toggleTheme: 'Сменить тему',
    cart: 'Корзина',
    close: 'Закрыть',
    total: 'Итого',
    goToCart: 'Перейти в корзину',
    continueShopping: 'Продолжить покупки',
    cartUrl: '/ru/cart.html',
    breadcrumb: 'Навигация',
  },
} as const satisfies Record<Locale, Record<string, string>>;
