import type { Locale } from '../../config/site';

interface Item {
  title: string;
  text: string;
}

/** SR/EN/RU: siri raspored sa tri sekcije (rokovi, nacini, cena) */
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

/** stariji raspored (tri kartice sa listama + napomena); trenutno ga ne koristi nijedan jezik */
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
            ['Životinje', 'Po dogovoru'],
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
            text: 'U Novom Sadu i okolini moguća je lična dostava većih terarijuma, kao i lično preuzimanje po dogovoru. Životinje se preuzimaju lično u Novom Sadu ili ih šaljemo širom Srbije po dogovoru.',
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
    links: [
      { href: '/kontakt.html', label: 'Kontakt' },
      { href: '/terarijumi.html', label: 'Terarijumi' },
      { href: '/akvarijumi.html', label: 'Akvarijumi' },
      { href: '/oprema.html', label: 'Oprema' },
      { href: '/izrada-terarijuma.html', label: 'Izrada terarijuma' },
      { href: '/izrada-akvarijuma.html', label: 'Izrada akvarijuma' },
    ],
  },
  en: {
    meta: {
      title: 'Shipping — Terrarium and Aquarium Delivery | NS Reptiles',
      description:
        'Shipping information for NS Reptiles - delivery times, methods and costs for terrariums, aquariums and equipment across Serbia.',
    },
    h1: 'Shipping',
    lead: 'We carefully pack and ship your terrariums, aquariums and equipment - safely, on time and to your address, wherever you are in Serbia.',
    full: {
      when: {
        title: 'When <b>your order</b> arrives',
        lead: 'Delivery time depends on the type of product you order. Here are the approximate timeframes for each category.',
        byType: {
          title: 'By product type',
          rows: [
            ['Equipment, food and decorations', '1–3 days'],
            ['Terrariums and aquariums in stock', '2–5 days'],
            ['Custom build', '7–14 days'],
            ['Animals', 'By arrangement'],
          ],
        },
        cards: [
          {
            title: 'Fast dispatch',
            text: 'Most equipment and smaller items are sent on the next working day after the order is confirmed. Working days are Monday to Friday, excluding public holidays.',
          },
          {
            title: 'Custom build',
            text: 'For terrariums and aquariums built to your measurements, we agree the exact date individually, depending on the dimensions, materials and how busy the workshop is at the moment.',
          },
        ],
      },
      how: {
        title: 'How <b>we deliver</b>',
        lead: 'We adapt delivery to the product and the location, from standard parcels to fragile glass terrariums that need special handling.',
        methods: [
          { title: 'Courier service', text: 'Delivery to your address anywhere in Serbia. The standard option for equipment and smaller terrariums.' },
          { title: 'Bus delivery', text: 'For most of Serbia we also ship by bus, quickly and reliably to the nearest station.' },
          {
            title: 'Taxi to your address (Belgrade)',
            text: 'For Belgrade we also offer delivery by taxi straight to your address, for urgent or fragile shipments.',
          },
          {
            title: 'Pickup in person / delivery in Novi Sad',
            text: 'In Novi Sad and the surrounding area we can deliver larger terrariums in person, and pickup in person is possible by arrangement. Animals are picked up in person in Novi Sad or shipped across Serbia by arrangement.',
          },
        ],
      },
      cost: {
        title: 'How much <b>it costs</b>',
        lead: 'The price depends on the weight of the parcel, its dimensions and the location. For fragile glass products, transport is calculated separately.',
        price: {
          title: 'Standard equipment and smaller terrariums',
          text: 'For equipment, food, decorations and smaller terrariums the delivery price is fixed and affordable.',
          amount: '350–700',
          unit: 'RSD, depending on weight and location',
        },
        note: {
          title: 'Larger terrariums and aquariums',
          text: 'Because transporting glass products is specific, we calculate the price individually for each order. The delivery cost is covered by the buyer.',
        },
        cta: {
          title: 'Have a question about delivery?',
          text: 'Tell us the type of product and your location, and we will give you the exact timeframe and delivery price before you order.',
          wa: 'WhatsApp message',
          call: 'Call us',
        },
      },
    },
    links: [
      { href: '/kontakt.html', label: 'Contact' },
      { href: '/terarijumi.html', label: 'Terrariums' },
      { href: '/akvarijumi.html', label: 'Aquariums' },
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
    lead: 'Мы аккуратно упаковываем и отправляем ваши террариумы, аквариумы и оборудование - безопасно, вовремя и по вашему адресу, где бы в Сербии вы ни находились.',
    full: {
      when: {
        title: 'Когда придёт <b>ваш заказ</b>',
        lead: 'Срок доставки зависит от вида товара, который вы заказываете. Вот примерные сроки для каждой категории.',
        byType: {
          title: 'По виду товара',
          rows: [
            ['Оборудование, корм и декорации', '1–3 дня'],
            ['Террариумы и аквариумы в наличии', '2–5 дней'],
            ['Изготовление на заказ', '7–14 дней'],
            ['Животные', 'По договорённости'],
          ],
        },
        cards: [
          {
            title: 'Быстрая отправка',
            text: 'Большую часть оборудования и небольших товаров мы отправляем уже на следующий рабочий день после подтверждения заказа. Рабочие дни считаем с понедельника по пятницу, без праздников.',
          },
          {
            title: 'Изготовление на заказ',
            text: 'Для террариумов и аквариумов, сделанных по вашим размерам, точный срок мы согласуем индивидуально, в зависимости от размеров, материалов и текущей загруженности мастерской.',
          },
        ],
      },
      how: {
        title: 'Как <b>мы доставляем</b>',
        lead: 'Доставку мы подбираем под товар и место: от обычных посылок до хрупких стеклянных террариумов, которым нужно особое обращение.',
        methods: [
          { title: 'Курьерская служба', text: 'Доставка по адресу по всей Сербии. Стандартный вариант для оборудования и небольших террариумов.' },
          { title: 'Доставка автобусом', text: 'В большую часть Сербии мы отправляем и автобусами, быстро и надёжно до ближайшей станции.' },
          {
            title: 'Такси по адресу (Белград)',
            text: 'Для Белграда мы предлагаем и доставку на такси прямо по вашему адресу, для срочных или хрупких отправлений.',
          },
          {
            title: 'Самовывоз / доставка в Нови-Саде',
            text: 'В Нови-Саде и окрестностях возможна личная доставка крупных террариумов, а также самовывоз по договорённости. Животных забирают лично в Нови-Саде, или мы отправляем их по Сербии по договорённости.',
          },
        ],
      },
      cost: {
        title: 'Сколько <b>это стоит</b>',
        lead: 'Цена зависит от веса посылки, размеров и места доставки. Для хрупких стеклянных изделий транспорт рассчитывается отдельно.',
        price: {
          title: 'Стандартное оборудование и небольшие террариумы',
          text: 'Для оборудования, корма, декораций и небольших террариумов стоимость доставки фиксированная и доступная.',
          amount: '350–700',
          unit: 'дин, в зависимости от веса и места',
        },
        note: {
          title: 'Крупные террариумы и аквариумы',
          text: 'Из-за особенностей перевозки стеклянных изделий стоимость мы рассчитываем индивидуально для каждого заказа. Стоимость доставки оплачивает покупатель.',
        },
        cta: {
          title: 'Есть вопрос о доставке?',
          text: 'Сообщите нам вид товара и ваше местоположение, и мы назовём точный срок и стоимость доставки до того, как вы оформите заказ.',
          wa: 'Сообщение в WhatsApp',
          call: 'Позвоните нам',
        },
      },
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
