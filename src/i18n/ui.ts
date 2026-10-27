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
    breadcrumb: 'Putanja',
  },
  en: {
    tel: 'Tel',
    toggleTheme: 'Toggle theme',
    breadcrumb: 'Breadcrumb',
  },
  ru: {
    tel: 'Тел',
    toggleTheme: 'Сменить тему',
    breadcrumb: 'Навигация',
  },
} as const satisfies Record<Locale, Record<string, string>>;
