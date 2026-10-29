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
    cart: 'Korpa',
    toggleTheme: 'Promeni temu',
    breadcrumb: 'Putanja',
  },
  en: {
    tel: 'Tel',
    cart: 'Cart',
    toggleTheme: 'Toggle theme',
    breadcrumb: 'Breadcrumb',
  },
  ru: {
    tel: 'Тел',
    cart: 'Корзина',
    toggleTheme: 'Сменить тему',
    breadcrumb: 'Навигация',
  },
} as const satisfies Record<Locale, Record<string, string>>;
