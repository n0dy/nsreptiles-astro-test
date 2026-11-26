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
    search: 'Pretraga',
    searchPlaceholder: 'Pretraži proizvode, životinje, vodiče…',
    searchEmpty: 'Nema rezultata za',
    searchError: 'Pretraga trenutno nije dostupna.',
    close: 'Zatvori',
  },
  en: {
    tel: 'Tel',
    cart: 'Cart',
    toggleTheme: 'Toggle theme',
    breadcrumb: 'Breadcrumb',
    search: 'Search',
    searchPlaceholder: 'Search products, animals, guides…',
    searchEmpty: 'No results for',
    searchError: 'Search is currently unavailable.',
    close: 'Close',
  },
  ru: {
    tel: 'Тел',
    cart: 'Корзина',
    toggleTheme: 'Сменить тему',
    breadcrumb: 'Навигация',
    search: 'Поиск',
    searchPlaceholder: 'Искать товары, животных, гайды…',
    searchEmpty: 'Ничего не найдено по запросу',
    searchError: 'Поиск сейчас недоступен.',
    close: 'Закрыть',
  },
} as const satisfies Record<Locale, Record<string, string>>;
