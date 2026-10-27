import { SITE, whatsappLink, type Locale } from '../../config/site';

interface Item {
  title: string;
  text: string;
}

/** SR: siri raspored sa tri sekcije (rokovi, nacini, cena) */
interface Full {
  when: { title: string; lead: string; byType: { title: string; rows: [string, string][] }; cards: Item[] };
  how: { title: string; lead: string; methods: Item[] };
  cost: {
    title: string;
    lead: string;
    price: Item & { amount: string; unit: string };
    note: Item;
    cta: Item & { wa: string; call: string };
  };
}

/** EN/RU: tri kartice sa listama + napomena */
interface Short {
  cards: { title: string; items: string[]; note?: string }[];
  contact: string;
}

// title (osim kartica), items, note i contact su HTML - samo nas tekst, nikad korisnicki unos.
export const SHIPPING: Record<Locale, {
  meta: { title: string; description: string; image?: string; ogTitle?: string; ogDescription?: string };
  h1: string;
  lead: string;
  /** srpske putanje (prevode se) + natpis */
  links: { href: string; label: string }[];
} & ({ full: Full; short?: never } | { short: Short; full?: never })> = {
  sr: {
    meta: {
      title: 'Dostava terarijuma i akvarijuma širom Srbije | NS Reptiles',
      description:
        'Informacije o dostavi terarijuma, akvarijuma i opreme. Rokovi isporuke 1–5 dana, kurirska dostava širom Srbije, bezbedno pakovanje staklenih proizvoda.',
      image: '/style/img/logo.jpg',
      ogTitle: 'Dostava terarijuma i akvarijuma | NS Reptiles',
      ogDescription: 'Rokovi isporuke 1–5 dana, kurirska dostava širom Srbije, bezbedno pakovanje staklenih proizvoda.',
    },
    h1: 'Dostava širom Srbije',
    lead: 'Pažljivo pakujemo i šaljemo vaše terarijume, akvarijume i opremu - bezbedno, na vreme i do vaše adrese, ma gde u Srbiji bili.',
    full: {
      when: {
        title: 'Kada stiže <b>vaša porudžbina</b>',
        lead: 'Vreme isporuke zavisi od vrste proizvoda koji poručujete. Evo okvirnih rokova za svaku kategoriju.',
        byType: {
          title: 'Po vrsti proizvoda',
          rows: [
            ['Oprema, hrana i dekoracije', '1–3 dana'],
            ['Terarijumi i akvarijumi sa stanja', '2–5 dana'],
            ['Izrada po meri', '7–14 dana'],
            ['Životinje', 'Lično'],
          ],
        },
        cards: [
          {
            title: 'Brza isporuka',
            text: 'Većinu opreme i manjih artikala šaljemo već narednog radnog dana od potvrde porudžbine. Radne dane računamo od ponedeljka do petka, bez praznika.',
          },
          {
            title: 'Izrada po meri',
            text: 'Za terarijume i akvarijume rađene po vašim merama, tačan rok dogovaramo individualno - u zavisnosti od dimenzija, materijala i trenutne zauzetosti radionice.',
          },
        ],
      },
      how: {
        title: 'Kako <b>dostavljamo</b>',
        lead: 'Dostavu prilagođavamo proizvodu i lokaciji - od standardnih paketa do krhkih staklenih terarijuma kojima treba poseban tretman.',
        methods: [
          { title: 'Kurirska služba', text: 'Dostava na adresu širom cele Srbije. Standardna opcija za opremu i manje terarijume.' },
          { title: 'Autobuska dostava', text: 'Za veći deo Srbije šaljemo i autobusima - brzo i pouzdano do najbliže stanice.' },
          {
            title: 'Taksi na adresu (Beograd)',
            text: 'Za Beograd nudimo i dostavu taksijem direktno na vašu adresu, za hitne ili krhke pošiljke.',
          },
          {
            title: 'Lično preuzimanje / dostava u NS',
            text: 'U Novom Sadu i okolini moguća je lična dostava većih terarijuma, kao i lično preuzimanje po dogovoru.',
          },
        ],
      },
      cost: {
        title: 'Koliko <b>košta</b>',
        lead: 'Cena zavisi od težine paketa, dimenzija i lokacije. Za krhke staklene proizvode transport računamo posebno.',
        price: {
          title: 'Standardna oprema i manji terarijumi',
          text: 'Za opremu, hranu, dekoracije i manje terarijume cena dostave je fiksna i pristupačna.',
          amount: '350–700',
          unit: 'din, zavisno od težine i lokacije',
        },
        note: {
          title: 'Veći terarijumi i akvarijumi',
          text: 'Zbog specifičnosti transporta staklenih proizvoda, cenu računamo individualno za svaku porudžbinu. Cenu dostave snosi kupac.',
        },
        cta: {
          title: 'Imate pitanje o dostavi?',
          text: 'Javite nam vrstu proizvoda i vašu lokaciju, pa ćemo vam dati tačan rok i cenu dostave pre nego što poručite.',
          wa: 'WhatsApp poruka',
          call: 'Pozovi nas',
        },
      },
    },
    // "Izrada terarijuma/akvarijuma" na SR vode na kataloske strane - zateceno stanje, ne menjamo URL-ove
    links: [
      { href: '/kontakt.html', label: 'Kontakt' },
      { href: '/terarijumi.html', label: 'Terarijumi' },
      { href: '/akvarijumi.html', label: 'Akvarijumi' },
      { href: '/oprema.html', label: 'Oprema' },
      { href: '/terarijumi.html', label: 'Izrada terarijuma' },
      { href: '/akvarijumi.html', label: 'Izrada akvarijuma' },
    ],
  },
  en: {
    meta: {
      title: 'Shipping — Terrarium and Aquarium Delivery | NS Reptiles',
      description:
        'Shipping information for NS Reptiles - delivery times, methods and costs for terrariums, aquariums and equipment across Serbia.',
    },
    h1: 'Shipping',
    lead: 'Everything you need to know about delivery of our products - timeframes, shipping methods and costs across Serbia.',
    short: {
      cards: [
        {
          title: 'Delivery Timeframes',
          items: [
            '<b>Equipment, food &amp; decorations:</b> 1–3 business days',
            '<b>Terrariums &amp; aquariums in stock:</b> 2–5 business days',
            '<b>Custom orders:</b> timeframe agreed individually (typically 7–14 days)',
            '<b>Animals:</b> delivery only via personal pickup or arrangement',
          ],
        },
        {
          title: 'Shipping Methods',
          items: [
            '<b>Courier service:</b> across all of Serbia',
            '<b>Personal delivery:</b> Novi Sad and surrounding area',
            '<b>Bus transport:</b> to most cities in Serbia',
            '<b>Taxi delivery:</b> to Belgrade addresses',
          ],
        },
        {
          title: 'Shipping Costs',
          items: [
            '<b>Standard equipment:</b> 350–700 RSD',
            '<b>Terrariums &amp; aquariums:</b> calculated individually based on dimensions',
            '<b>Personal pickup:</b> free (Novi Sad)',
          ],
          note: '<b>Note:</b> Shipping costs are covered by the buyer.',
        },
      ],
      contact: `For any shipping questions, contact us at <b>${SITE.phoneDisplay}</b> or via <a href="${whatsappLink()}" style="color: var(--green-ink); font-weight: 500">WhatsApp</a>.`,
    },
    links: [
      { href: '/kontakt.html', label: 'Contact' },
      { href: '/terarijumi.html', label: 'Terrariums' },
      { href: '/akvarijumi.html', label: 'Aquatics' },
      { href: '/oprema.html', label: 'Equipment' },
      { href: '/izrada-terarijuma.html', label: 'Custom Terrariums' },
      { href: '/izrada-akvarijuma.html', label: 'Custom Aquariums' },
    ],
  },
  ru: {
    meta: {
      title: 'Доставка террариумов и аквариумов по Сербии | NS Reptiles',
      description:
        'Информация о доставке NS Reptiles - сроки, способы и стоимость доставки террариумов, аквариумов и оборудования по всей Сербии.',
    },
    h1: 'Доставка',
    lead: 'Всё, что нужно знать о доставке нашей продукции - сроки, способы и стоимость доставки по всей Сербии.',
    short: {
      cards: [
        {
          title: 'Сроки доставки',
          items: [
            '<b>Оборудование, корм и декорации:</b> 1–3 рабочих дня',
            '<b>Террариумы и аквариумы в наличии:</b> 2–5 рабочих дней',
            '<b>Изготовление на заказ:</b> срок обговаривается индивидуально (обычно 7–14 дней)',
            '<b>Животные:</b> только самовывоз или по договорённости',
          ],
        },
        {
          title: 'Способы доставки',
          items: [
            '<b>Курьерская служба:</b> по всей территории Сербии',
            '<b>Личная доставка:</b> Нови Сад и окрестности',
            '<b>Автобусный транспорт:</b> в большинство городов Сербии',
            '<b>Такси-доставка:</b> по адресу в Белграде',
          ],
        },
        {
          title: 'Стоимость доставки',
          items: [
            '<b>Стандартное оборудование:</b> 350–700 дин',
            '<b>Террариумы и аквариумы:</b> рассчитывается индивидуально в зависимости от размеров',
            '<b>Самовывоз:</b> бесплатно (Нови Сад)',
          ],
          note: '<b>Примечание:</b> Стоимость доставки оплачивает покупатель.',
        },
      ],
      contact: `По всем вопросам доставки свяжитесь с нами по телефону <b>${SITE.phoneDisplay}</b> или через <a href="${whatsappLink()}" style="color: var(--green-ink); font-weight: 500">WhatsApp</a>.`,
    },
    links: [
      { href: '/kontakt.html', label: 'Контакт' },
      { href: '/terarijumi.html', label: 'Террариумы' },
      { href: '/akvarijumi.html', label: 'Аквариумы' },
      { href: '/oprema.html', label: 'Оборудование' },
      { href: '/izrada-terarijuma.html', label: 'Изготовление террариумов' },
      { href: '/izrada-akvarijuma.html', label: 'Изготовление аквариумов' },
    ],
  },
};
