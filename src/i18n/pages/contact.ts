import type { Locale } from '../../config/site';

interface ContactText {
  meta: { title: string; description: string; image?: string; ogTitle: string; ogDescription: string };
  h1: string;
  lead: string;
  infoTitle: string;
  infoText: string;
  phone: string;
  location: string;
  locationValue: string;
  formTitle: string;
  formText: string;
  name: string;
  namePh: string;
  emailPh: string;
  phoneLabel: string;
  message: string;
  messagePh: string;
  /** {privacy} se menja linkom ka politici privatnosti */
  consent: string;
  privacy: string;
  submit: string;
  successTitle: string;
  successText: string;
  /** samo SR ima mapu */
  mapTitle?: string;
  /** poruke za inline skriptu; {x} = naziv kompleta/proizvoda */
  js: {
    prefillKit: string;
    prefillProduct: string;
    required: string;
    badEmail: string;
    consent: string;
    sending: string;
    phone: string;
    error: string;
  };
}

export const CONTACT: Record<Locale, ContactText> = {
  sr: {
    meta: {
      title: 'Kontakt | Telefon i adresa - NS Reptiles, Novi Sad',
      description:
        'Kontaktirajte NS Reptiles - odgajivačnicu reptila u Novom Sadu. Telefon +381 69 330 1474. Naručite terarijume, akvarijume ili reptile.',
      image: '/style/img/logo.jpg',
      ogTitle: 'Kontakt - NS Reptiles, Novi Sad',
      ogDescription: 'Kontaktirajte NS Reptiles za narudžbine terarijuma, akvarijuma i reptila. Novi Sad, Srbija.',
    },
    h1: 'Javite <b>nam se</b>',
    lead: 'Imate pitanje o životinji, terarijumu po meri ili dostavi? Pišite nam ili pozovite - odgovaramo brzo.',
    infoTitle: 'Tu smo <b>za vas</b>',
    infoText:
      'Najbrži odgovor dobićete preko WhatsApp-a ili Viber-a. Slobodno pišite i mejlom ili nas pozovite u toku radnog vremena.',
    phone: 'Telefon',
    location: 'Lokacija',
    locationValue: 'Novi Sad, Srbija',
    formTitle: 'Pošaljite poruku',
    formText: 'Popunite formu i javićemo vam se na e-mail u najkraćem roku.',
    name: 'Ime i prezime',
    namePh: 'Petar Petrović',
    emailPh: 'petar@email.com',
    phoneLabel: 'Telefon (opciono)',
    message: 'Poruka',
    messagePh: 'O čemu želite da nas pitate?',
    consent: 'Slažem se sa {privacy} i obradom mojih podataka u svrhu odgovora na upit.',
    privacy: 'Politikom privatnosti',
    submit: 'Pošalji poruku',
    successTitle: 'Uspešno poslato!',
    successText: 'Hvala na poruci. Proverite vaš e-mail za odgovor.',
    mapTitle: 'NS Reptiles na Google mapi - Novi Sad',
    js: {
      prefillKit:
        'Poštovani,\n\nzanima me komplet za početnike "{x}". Molim vas za više informacija o dostupnosti i preuzimanju.\n\nHvala!',
      prefillProduct: 'Poštovani,\n\nzanima me "{x}". Molim vas za više informacija o ceni i dostupnosti.\n\nHvala!',
      required: 'Molimo popunite ime, e-mail i poruku.',
      badEmail: 'Unesite ispravnu e-mail adresu.',
      consent: 'Potrebno je da prihvatite Politiku privatnosti.',
      sending: 'Slanje...',
      phone: 'Telefon',
      error: 'Došlo je do greške. Molimo pokušajte ponovo.',
    },
  },
  en: {
    meta: {
      title: 'Contact | Phone and Address - NS Reptiles, Novi Sad',
      description:
        'Contact NS Reptiles - exotic animal breeder in Novi Sad. Phone +381 69 330 1474. Order terrariums, aquariums or reptiles.',
      ogTitle: 'Contact - NS Reptiles, Novi Sad',
      ogDescription: 'Contact NS Reptiles for terrarium, aquarium and reptile orders. Novi Sad, Serbia.',
    },
    h1: 'Get <b>in touch</b>',
    lead: 'Have a question about an animal, custom terrarium or delivery? Write to us or call - we respond quickly.',
    infoTitle: 'We are here <b>for you</b>',
    infoText: 'The fastest response is via WhatsApp or Viber. Feel free to also write by email or call us during working hours.',
    phone: 'Phone',
    location: 'Location',
    locationValue: 'Novi Sad, Serbia',
    formTitle: 'Send a message',
    formText: 'Fill out the form and we will get back to you by email as soon as possible.',
    name: 'Full name',
    namePh: 'John Smith',
    emailPh: 'john@email.com',
    phoneLabel: 'Phone (optional)',
    message: 'Message',
    messagePh: 'What would you like to ask us about?',
    consent: 'I agree to the {privacy} and the processing of my data for the purpose of responding to my inquiry.',
    privacy: 'Privacy Policy',
    submit: 'Send message',
    successTitle: 'Successfully sent!',
    successText: 'Thank you for your message. Check your email for a reply.',
    js: {
      prefillKit:
        'Hello,\n\nI am interested in the starter kit "{x}". Please send me more information about availability and pickup.\n\nThank you!',
      prefillProduct: 'Hello,\n\nI am interested in "{x}". Please send me more information about price and availability.\n\nThank you!',
      required: 'Please fill in your name, email and message.',
      badEmail: 'Please enter a valid email address.',
      consent: 'You must accept the Privacy Policy.',
      sending: 'Sending...',
      phone: 'Phone',
      error: 'Something went wrong. Please try again.',
    },
  },
  ru: {
    meta: {
      title: 'Контакт | Телефон и адрес - NS Reptiles, Нови Сад',
      description:
        'Свяжитесь с NS Reptiles - питомником рептилий в Нови Саде. Телефон +381 69 330 1474. Заказывайте террариумы, аквариумы или рептилий.',
      ogTitle: 'Контакт - NS Reptiles, Нови Сад',
      ogDescription: 'Свяжитесь с NS Reptiles для заказа террариумов, аквариумов и рептилий. Нови Сад, Сербия.',
    },
    h1: 'Свяжитесь <b>с нами</b>',
    lead: 'У вас вопрос о животном, террариуме на заказ или доставке? Напишите нам или позвоните - мы отвечаем быстро.',
    infoTitle: 'Мы <b>на связи</b>',
    infoText:
      'Самый быстрый ответ вы получите через WhatsApp или Viber. Также можете написать на электронную почту или позвонить нам в рабочее время.',
    phone: 'Телефон',
    location: 'Местоположение',
    locationValue: 'Нови Сад, Сербия',
    formTitle: 'Отправьте сообщение',
    formText: 'Заполните форму, и мы ответим вам на e-mail в кратчайшие сроки.',
    name: 'Имя и фамилия',
    namePh: 'Иван Иванов',
    emailPh: 'ivan@email.com',
    phoneLabel: 'Телефон (необязательно)',
    message: 'Сообщение',
    messagePh: 'О чём вы хотите нас спросить?',
    consent: 'Я соглашаюсь с {privacy} и обработкой моих данных для ответа на запрос.',
    privacy: 'Политикой конфиденциальности',
    submit: 'Отправить сообщение',
    successTitle: 'Успешно отправлено!',
    successText: 'Спасибо за сообщение. Проверьте вашу электронную почту для ответа.',
    js: {
      prefillKit:
        'Здравствуйте!\n\nМеня интересует набор для начинающих «{x}». Пожалуйста, сообщите о наличии и получении.\n\nСпасибо!',
      prefillProduct: 'Здравствуйте!\n\nМеня интересует «{x}». Пожалуйста, сообщите цену и наличие.\n\nСпасибо!',
      required: 'Пожалуйста, заполните имя, e-mail и сообщение.',
      badEmail: 'Введите корректный адрес электронной почты.',
      consent: 'Необходимо принять Политику конфиденциальности.',
      sending: 'Отправка...',
      phone: 'Телефон',
      error: 'Произошла ошибка. Пожалуйста, попробуйте снова.',
    },
  },
};
