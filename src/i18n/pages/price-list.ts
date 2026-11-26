import type { Locale } from '../../config/site';

type L<T = string> = Record<Locale, T>;

interface Cat {
  title: L;
  /** oblici reci za broj redova, po Intl.PluralRules kategoriji */
  unit: L<Partial<Record<Intl.LDMLPluralRule, string>>>;
  /** kategorija proizvoda iz content/products */
  key: 'terarijumi' | 'akvarijumi' | 'oprema';
}

// Vrednosti sa <strong> se renderuju kao HTML - samo nas tekst, nikad korisnicki unos.
export const PRICE_LIST: L<{
  meta: { title: string; description: string; keywords?: string; ogTitle: string; ogDescription: string };
  home: string;
  crumb: string;
  h1: string;
  lead: string;
  note: string;
  /** separator hiljada u ceni */
  thousands: string;
  callForPrice: string;
  ctaText: string;
}> = {
  sr: {
    meta: {
      title: 'Cenovnik terarijuma i akvarijuma | NS Reptiles',
      description:
        'Kompletna lista proizvoda sa cenama — terarijumi, akvarijumi i oprema za reptile. NS Reptiles, Novi Sad. Za tačnu ponudu pozovite ili pišite.',
      ogTitle: 'Cenovnik | NS Reptiles, Novi Sad',
      ogDescription: 'Terarijumi, akvarijumi i oprema za reptile — pogledajte kompletnu ponudu NS Reptiles iz Novog Sada.',
    },
    home: 'Početna',
    crumb: 'Cenovnik',
    h1: 'Cenovnik',
    lead: 'Terarijumi, akvarijumi i oprema izrađeni po vašim merama. Većina cena se formira individualno — za tačnu ponudu javite nam se pre porudžbine.',
    note: 'Cene su <strong>informativnog karaktera</strong>. Za tačnu ponudu po vašim merama i željama, slobodno nas kontaktirajte telefonom ili putem WhatsApp-a — odgovaramo brzo.',
    thousands: '.',
    callForPrice: 'Pozovite za cenu',
    ctaText:
      'Većina cena se formira na osnovu vaših dimenzija i opcija — <strong>pozovite nas i odmah dobijate procenu</strong>. Radimo terarijume i akvarijume po meri za sve vrste egzotičnih životinja. Dostava širom Srbije.',
  },
  en: {
    meta: {
      title: 'Terrarium & Aquarium Price List | NS Reptiles',
      description:
        'Full product list with prices — terrariums, aquariums and reptile equipment. NS Reptiles, Novi Sad. Call or message us for an exact quote.',
      keywords: 'terrarium price list, aquarium prices, custom glass terrarium price, reptile equipment prices, NS Reptiles',
      ogTitle: 'Price List | NS Reptiles, Novi Sad',
      ogDescription: 'Terrariums, aquariums and reptile equipment — see the full NS Reptiles range from Novi Sad.',
    },
    home: 'Home',
    crumb: 'Price list',
    h1: 'Price List',
    lead: 'Terrariums, aquariums and equipment made to your measurements. Most prices are set individually — contact us for an exact quote before ordering.',
    note: 'Prices are <strong>for information only</strong>. For an exact quote based on your measurements and wishes, feel free to contact us by phone or WhatsApp — we reply quickly.',
    thousands: ',',
    callForPrice: 'Price on request',
    ctaText:
      'Most prices are based on your dimensions and options — <strong>call us and get an estimate right away</strong>. We make custom terrariums and aquariums for all kinds of exotic animals. Delivery across Serbia.',
  },
  ru: {
    meta: {
      title: 'Цены на террариумы и аквариумы | NS Reptiles',
      description:
        'Полный список товаров с ценами — террариумы, аквариумы и оборудование для рептилий. NS Reptiles, Нови-Сад. Для точной цены позвоните или напишите.',
      keywords:
        'цены на террариумы, прайс-лист террариумов, цены на аквариумы, террариум на заказ Нови-Сад, аквариум на заказ, оборудование для рептилий, NS Reptiles',
      ogTitle: 'Прайс-лист | NS Reptiles, Нови-Сад',
      ogDescription: 'Террариумы, аквариумы и оборудование для рептилий — посмотрите полный ассортимент NS Reptiles из Нови-Сада.',
    },
    home: 'Главная',
    crumb: 'Прайс-лист',
    h1: 'Прайс-лист',
    lead: 'Террариумы, аквариумы и оборудование, изготовленные по вашим размерам. Большинство цен рассчитывается индивидуально — для точного предложения свяжитесь с нами до оформления заказа.',
    note: 'Цены носят <strong>ознакомительный характер</strong>. Для точного предложения по вашим размерам и пожеланиям свяжитесь с нами по телефону или в WhatsApp — мы быстро отвечаем.',
    thousands: ' ',
    callForPrice: 'Цена по запросу',
    ctaText:
      'Большинство цен рассчитывается исходя из ваших размеров и опций — <strong>позвоните нам и сразу получите оценку</strong>. Мы делаем террариумы и аквариумы на заказ для всех видов экзотических животных. Доставка по всей Сербии.',
  },
};

export const PRICE_CATS: Cat[] = [
  {
    key: 'terarijumi',
    title: { sr: 'Terarijumi', en: 'Terrariums', ru: 'Террариумы' },
    unit: { sr: { one: 'model', few: 'modela', other: 'modela' }, en: { one: 'model', other: 'models' }, ru: { one: 'модель', few: 'модели', many: 'моделей', other: 'модели' } },
  },
  {
    key: 'akvarijumi',
    title: { sr: 'Akvarijumi', en: 'Aquariums', ru: 'Аквариумы' },
    unit: { sr: { one: 'model', few: 'modela', other: 'modela' }, en: { one: 'model', other: 'models' }, ru: { one: 'модель', few: 'модели', many: 'моделей', other: 'модели' } },
  },
  {
    key: 'oprema',
    title: { sr: 'Oprema', en: 'Equipment', ru: 'Оборудование' },
    unit: { sr: { one: 'artikal', few: 'artikla', other: 'artikala' }, en: { one: 'item', other: 'items' }, ru: { one: 'товар', few: 'товара', many: 'товаров', other: 'товара' } },
  },
];
