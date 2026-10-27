import type { Locale } from '../../config/site';

export const NOT_FOUND: Record<Locale, {
  meta: { title: string; description: string };
  h1: string;
  text: string;
  /** srpske putanje + natpis dugmeta */
  links: { href: string; label: string }[];
}> = {
  sr: {
    meta: {
      title: '404 — Stranica nije pronađena | NS Reptiles',
      description:
        'Stranica koju tražite je premeštena, obrisana ili nikad nije postojala. Pratite linkove ka početnoj, životinjama, terarijumima ili kontaktu.',
    },
    h1: 'Stranica nije pronađena',
    text: 'Stranica koju tražite je premeštena, obrisana ili nikad nije postojala. Koristite linkove ispod da pronađete ono što vam treba.',
    links: [
      { href: '/', label: 'Početna' },
      { href: '/zivotinje.html', label: 'Životinje' },
      { href: '/terarijumi.html', label: 'Terarijumi' },
      { href: '/kontakt.html', label: 'Kontakt' },
    ],
  },
  en: {
    meta: {
      title: '404 — Page Not Found | NS Reptiles',
      description:
        'The page you are looking for has been moved, deleted or never existed. Follow the links to the home page, animals, terrariums or contact.',
    },
    h1: 'Page not found',
    text: 'The page you are looking for has been moved, deleted or never existed. Use the links below to find what you need.',
    links: [
      { href: '/', label: 'Home' },
      { href: '/zivotinje.html', label: 'Animals' },
      { href: '/terarijumi.html', label: 'Terrariums' },
      { href: '/kontakt.html', label: 'Contact' },
    ],
  },
  ru: {
    meta: {
      title: '404 — Страница не найдена | NS Reptiles',
      description:
        'Страница, которую вы ищете, перемещена, удалена или никогда не существовала. Перейдите на главную, к животным, террариумам или контактам.',
    },
    h1: 'Страница не найдена',
    text: 'Страница, которую вы ищете, перемещена, удалена или никогда не существовала. Воспользуйтесь ссылками ниже, чтобы найти то, что вам нужно.',
    links: [
      { href: '/', label: 'Главная' },
      { href: '/zivotinje.html', label: 'Животные' },
      { href: '/terarijumi.html', label: 'Террариумы' },
      { href: '/kontakt.html', label: 'Контакты' },
    ],
  },
};
