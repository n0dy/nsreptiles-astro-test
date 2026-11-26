import type { Locale } from '../../config/site';
import type { SearchType } from '../../lib/search-type';

export const SEARCH_PAGE: Record<
  Locale,
  {
    meta: { title: string; description: string };
    h1: string;
    all: string;
    more: string;
    count: { one: string; few: string; other: string };
    prompt: string;
    types: Record<SearchType, string>;
  }
> = {
  sr: {
    meta: { title: 'Pretraga | NS Reptiles', description: 'Pretraga proizvoda, životinja i vodiča na sajtu NS Reptiles.' },
    h1: 'Pretraga',
    all: 'Sve',
    more: 'Prikaži još',
    count: { one: 'rezultat', few: 'rezultata', other: 'rezultata' },
    prompt: 'Upišite šta tražite - terarijum, životinju, opremu…',
    types: { zivotinje: 'Životinje', kompleti: 'Kompleti', terarijumi: 'Terarijumi', akvarijumi: 'Akvarijumi', oprema: 'Oprema', vodici: 'Vodiči', strane: 'Ostalo' },
  },
  en: {
    meta: { title: 'Search | NS Reptiles', description: 'Search products, animals and guides on the NS Reptiles website.' },
    h1: 'Search',
    all: 'All',
    more: 'Show more',
    count: { one: 'result', few: 'results', other: 'results' },
    prompt: 'Type what you are looking for - a terrarium, an animal, equipment…',
    types: { zivotinje: 'Animals', kompleti: 'Starter kits', terarijumi: 'Terrariums', akvarijumi: 'Aquariums', oprema: 'Equipment', vodici: 'Guides', strane: 'Other' },
  },
  ru: {
    meta: { title: 'Поиск | NS Reptiles', description: 'Поиск товаров, животных и гайдов на сайте NS Reptiles.' },
    h1: 'Поиск',
    all: 'Все',
    more: 'Показать ещё',
    count: { one: 'результат', few: 'результата', other: 'результатов' },
    prompt: 'Введите, что вы ищете - террариум, животное, оборудование…',
    types: { zivotinje: 'Животные', kompleti: 'Наборы', terarijumi: 'Террариумы', akvarijumi: 'Аквариумы', oprema: 'Оборудование', vodici: 'Гайды', strane: 'Другое' },
  },
};
