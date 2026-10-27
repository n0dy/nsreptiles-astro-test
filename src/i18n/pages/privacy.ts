import { SITE, type Locale } from '../../config/site';

interface Section {
  title: string;
  /** pasus ispred liste */
  text: string;
  items?: string[];
  /** pasus posle liste */
  after?: string;
}

const mail = `<a href="mailto:${SITE.email}">${SITE.email}</a>`;

// text/items su HTML (<strong>, link) - samo nas tekst, nikad korisnicki unos.
// Poslednja sekcija se prikazuje sa kontakt blokom (mail + telefon).
export const PRIVACY: Record<Locale, {
  meta: { title: string; description: string; image?: string; ogDescription: string };
  h1: string;
  lead: string;
  updated: string;
  sections: Section[];
}> = {
  sr: {
    meta: {
      title: 'Politika privatnosti | NS Reptiles',
      description:
        'Politika privatnosti NS Reptiles: koje lične podatke prikupljamo putem kontakt forme, kako ih koristimo i čuvamo, kolačići i vaša prava kao korisnika.',
      image: '/style/img/logo.jpg',
      ogDescription: 'Informacije o prikupljanju i obradi ličnih podataka, kolačićima i pravima korisnika.',
    },
    h1: 'Politika privatnosti',
    lead: 'Kako prikupljamo, koristimo i štitimo vaše lične podatke, i koja prava imate u vezi sa njima.',
    updated: 'Poslednje ažuriranje: 17.02.2026.',
    sections: [
      {
        title: 'Ko prikuplja podatke',
        text: `Vaše lične podatke prikuplja <strong>NS Reptiles</strong>, odgajivačnica egzotičnih životinja sa sedištem u Novom Sadu, Srbija. Za sva pitanja u vezi sa zaštitom podataka možete nas kontaktirati na ${mail}.`,
      },
      {
        title: 'Koji podaci se prikupljaju',
        text: 'Putem kontakt forme na našem sajtu prikupljamo sledeće podatke:',
        items: ['Ime i prezime', 'E-mail adresa', 'Sadržaj poruke', 'IP adresa (pri slanju kontakt forme)'],
      },
      {
        title: 'Svrha prikupljanja podataka',
        text: 'Vaše podatke koristimo isključivo u svrhu odgovora na vaš upit i dalje komunikacije vezane za naše proizvode i usluge. Podatke ne koristimo za marketing bez vaše izričite saglasnosti i ne delimo ih sa trećim stranama.',
      },
      {
        title: 'Gde se čuvaju podaci',
        text: 'Podaci prikupljeni putem kontakt forme čuvaju se na HubSpot platformi (cloud servis), koja primenjuje industrijsko-standardne mere zaštite podataka. Više informacija o HubSpot-ovoj politici privatnosti možete pronaći na njihovom sajtu.',
      },
      {
        title: 'Kolačići (Cookies)',
        text: 'Naš sajt koristi sledeće kolačiće i alate za praćenje:',
        items: [
          '<strong>Google Analytics</strong> - za analizu posećenosti sajta i ponašanja korisnika',
          '<strong>Google Tag Manager</strong> - za upravljanje skriptama i praćenje konverzija',
          '<strong>HubSpot tracking</strong> - za praćenje interakcija sa kontakt formom',
        ],
        after: 'Ovi alati mogu postavljati kolačiće u vašem pregledaču radi prikupljanja anonimizovanih podataka o korišćenju sajta.',
      },
      {
        title: 'Rok čuvanja podataka',
        text: 'Vaše lične podatke čuvamo dok postoji poslovna potreba za tim, odnosno do ispunjenja svrhe za koju su prikupljeni. Na vaš zahtev, podatke ćemo obrisati u najkraćem mogućem roku.',
      },
      {
        title: 'Vaša prava',
        text: 'U vezi sa vašim ličnim podacima, imate pravo na:',
        items: [
          '<strong>Pristup</strong> - da zahtevate uvid u podatke koje čuvamo o vama',
          '<strong>Ispravku</strong> - da zahtevate ispravku netačnih podataka',
          '<strong>Brisanje</strong> - da zahtevate brisanje vaših podataka',
          '<strong>Povlačenje saglasnosti</strong> - da u svakom trenutku povučete datu saglasnost za obradu podataka',
        ],
      },
      {
        title: 'Kontakt za zahteve',
        text: 'Za sva pitanja, zahteve i pritužbe u vezi sa zaštitom vaših ličnih podataka, možete nas kontaktirati:',
      },
    ],
  },
  en: {
    meta: {
      title: 'Privacy Policy | NS Reptiles',
      description:
        'NS Reptiles privacy policy: what personal data we collect through the contact form, how we use and store it, which cookies we use and your rights.',
      ogDescription: 'Information about the collection and processing of personal data, cookies and user rights.',
    },
    h1: 'Privacy Policy',
    lead: 'How we collect, use and protect your personal data, and what rights you have regarding them.',
    updated: 'Last updated: 17 February 2026',
    sections: [
      {
        title: 'Who collects the data',
        text: `Your personal data is collected by <strong>NS Reptiles</strong>, an exotic animal breeder based in Novi Sad, Serbia. For any questions regarding data protection, you can contact us at ${mail}.`,
      },
      {
        title: 'What data is collected',
        text: 'Through the contact form on our website, we collect the following data:',
        items: ['Full name', 'Email address', 'Message content', 'IP address (when submitting the contact form)'],
      },
      {
        title: 'Purpose of data collection',
        text: 'We use your data exclusively for the purpose of responding to your inquiry and further communication related to our products and services. We do not use your data for marketing without your explicit consent and do not share it with third parties.',
      },
      {
        title: 'Where data is stored',
        text: "Data collected through the contact form is stored on the HubSpot platform (cloud service), which applies industry-standard data protection measures. More information about HubSpot's privacy policy can be found on their website.",
      },
      {
        title: 'Cookies',
        text: 'Our website uses the following cookies and tracking tools:',
        items: [
          '<strong>Google Analytics</strong> - for analysing website traffic and user behaviour',
          '<strong>Google Tag Manager</strong> - for managing scripts and tracking conversions',
          '<strong>HubSpot tracking</strong> - for tracking interactions with the contact form',
        ],
        after: 'These tools may place cookies in your browser to collect anonymised data about website usage.',
      },
      {
        title: 'Data retention period',
        text: 'We retain your personal data as long as there is a business need, or until the purpose for which it was collected is fulfilled. Upon your request, we will delete your data as soon as possible.',
      },
      {
        title: 'Your rights',
        text: 'Regarding your personal data, you have the right to:',
        items: [
          '<strong>Access</strong> - request to see the data we hold about you',
          '<strong>Rectification</strong> - request correction of inaccurate data',
          '<strong>Erasure</strong> - request deletion of your data',
          '<strong>Withdrawal of consent</strong> - withdraw your consent for data processing at any time',
        ],
      },
      {
        title: 'Contact for requests',
        text: 'For all questions, requests and complaints regarding the protection of your personal data, you can contact us:',
      },
    ],
  },
  ru: {
    meta: {
      title: 'Политика конфиденциальности | NS Reptiles',
      description:
        'Политика конфиденциальности NS Reptiles: какие персональные данные собираем через контактную форму, как их используем и храним, файлы cookie и ваши права.',
      ogDescription: 'Информация о сборе и обработке персональных данных, файлах cookie и правах пользователей.',
    },
    h1: 'Политика конфиденциальности',
    lead: 'Как мы собираем, используем и защищаем ваши персональные данные, и какие права вы имеете в связи с ними.',
    updated: 'Последнее обновление: 17.02.2026.',
    sections: [
      {
        title: 'Кто собирает данные',
        text: `Ваши персональные данные собирает <strong>NS Reptiles</strong>, питомник экзотических животных с местонахождением в Нови Саде, Сербия. По всем вопросам, связанным с защитой данных, вы можете связаться с нами по адресу ${mail}.`,
      },
      {
        title: 'Какие данные собираются',
        text: 'Через контактную форму на нашем сайте мы собираем следующие данные:',
        items: ['Имя и фамилия', 'Адрес электронной почты', 'Содержание сообщения', 'IP-адрес (при отправке контактной формы)'],
      },
      {
        title: 'Цель сбора данных',
        text: 'Ваши данные используются исключительно для ответа на ваш запрос и дальнейшей коммуникации, связанной с нашими продуктами и услугами. Мы не используем данные для маркетинга без вашего явного согласия и не передаём их третьим лицам.',
      },
      {
        title: 'Где хранятся данные',
        text: 'Данные, собранные через контактную форму, хранятся на платформе HubSpot (облачный сервис), которая применяет стандартные отраслевые меры защиты данных. Более подробную информацию о политике конфиденциальности HubSpot вы можете найти на их сайте.',
      },
      {
        title: 'Файлы cookie (Cookies)',
        text: 'Наш сайт использует следующие файлы cookie и средства отслеживания:',
        items: [
          '<strong>Google Analytics</strong> - для анализа посещаемости сайта и поведения пользователей',
          '<strong>Google Tag Manager</strong> - для управления скриптами и отслеживания конверсий',
          '<strong>HubSpot tracking</strong> - для отслеживания взаимодействий с контактной формой',
        ],
        after: 'Эти инструменты могут устанавливать файлы cookie в вашем браузере для сбора анонимизированных данных об использовании сайта.',
      },
      {
        title: 'Срок хранения данных',
        text: 'Мы храним ваши персональные данные до тех пор, пока существует деловая необходимость, то есть до выполнения цели, для которой они были собраны. По вашему запросу мы удалим данные в кратчайшие сроки.',
      },
      {
        title: 'Ваши права',
        text: 'В отношении ваших персональных данных вы имеете право на:',
        items: [
          '<strong>Доступ</strong> - запросить ознакомление с данными, которые мы храним о вас',
          '<strong>Исправление</strong> - запросить исправление неточных данных',
          '<strong>Удаление</strong> - запросить удаление ваших данных',
          '<strong>Отзыв согласия</strong> - в любой момент отозвать данное согласие на обработку данных',
        ],
      },
      {
        title: 'Контакт для запросов',
        text: 'По всем вопросам, запросам и жалобам, связанным с защитой ваших персональных данных, вы можете связаться с нами:',
      },
    ],
  },
};
