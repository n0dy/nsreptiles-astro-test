# GA4 merenje

Property `properties/346163151` (NS REPTILES), `gtag.js` direktno iz `src/layouts/Base.astro`, bez GTM-a. Na buildu bez `SITE_INDEXABLE=true` je `window.gtag` prazna funkcija.

Kontakt i društvene mreže meri samo `src/scripts/main.js` (jedan slušalac za ceo sajt). Linkovi **nemaju** svoj `onclick` sa `gtag`; proizvod se daje preko `data-proizvod` na linku ili roditelju.

## Događaji

| Događaj | Parametri | Gde |
|---|---|---|
| `kontakt_click` | `metod` (telefon / whatsapp / viber / email), `mesto` (traka / plutajuce / footer / cta / strana), `proizvod` | svaki `tel:`, `wa.me`, `viber:`, `mailto:` link |
| `kontakt_kopiran` | `metod` (telefon / email) | kopiran broj ili e-mail |
| `forma_start` | — | prvi fokus u kontakt formi |
| `generate_lead` | `izvor` (3d / komplet / proizvod / direktno) | poslata kontakt forma |
| `social_click` | `mreza`, `mesto` | Instagram, Facebook, TikTok, YouTube linkovi |
| `upit_click` | `tip` | dugme „Pošalji upit“ na proizvodu |
| `korpa_click` | — | ikonica korpe |
| `newsletter_prijava` | — | prijava na newsletter |
| `search` | `search_term`, `rezultata` | pretraga |
| `konfigurator_start` | `tip` (terarijum / akvarijum) | 3D konfigurator: prva interakcija sa modelom (klik, prevlačenje, točkić) ili sa panelom - jednom po učitavanju strane, ne na samo učitavanje |
| `konfigurator_promena` | `tip`, `opcija` (dimenzije / izvedba / voda / poklopac / ventilacija / folija / silikon / pozadina / vrata / supstrat / dekoracija) | promena opcije u panelu - najviše jednom po vrsti opcije po strani; vrednosti iz linka i dugme „Vrati“ se ne broje |
| `konfigurator_rotacija` | `tip` | prvo okretanje ili zumiranje modela - jednom po strani |
| `konfigurator_deljenje` | `tip` | dugme za snimanje slike konfiguracije (jedino dugme za deljenje; link ka modelu je uvek u adresi) |
| `poruci_3d` | `tip`, `dimenzije` (npr. `60x40x40`, dužina × širina × visina u cm), `folija` (naziv dezena, npr. `03 Belo drvo`) | dugme „Poruči“ |
| `konfigurator_3d`, `slika_3d`, `ar_3d` | `tip` | stari događaji, ostaju zbog kontinuiteta izveštaja: prva izmena u panelu, snimak slike (isto što i `konfigurator_deljenje`), AR prikaz |
| `kalkulator_izracun` | — | kalkulator terarijuma |

Do 2026-11-28 su pozivi išli i kao `telefon_click` i sa `metod` vrednostima `poziv`, `poziv_cta`, `telefon_kalkulator`, `whatsapp_cta`, `whatsapp_kalkulator`. Stari podaci ostaju pod tim imenima.

## Ručno u GA4 (Admin)

- **Ključni događaji:** `kontakt_click`, `generate_lead`, `poruci_3d`.
- **Prilagođene dimenzije (event scope):** `metod`, `mesto`, `proizvod`, `izvor`, `tip`, `mreza`, `rezultata`, `opcija`, `dimenzije`, `folija`.
- **Enhanced measurement:** uključiti skrolovanje, odlazne klikove, preuzimanja fajlova (to se ne meri u kodu).
- **Exploration:** `kontakt_click` po `metod` × stranica (page path) × izvor saobraćaja; levak `forma_start` → `generate_lead`.
- **Levak 3D:** `konfigurator_start` → `konfigurator_promena` → `poruci_3d` → `generate_lead` (izvor 3d), po `tip`.

Meri se klik na broj, ne stvarni poziv ili poslata poruka na WhatsApp/Viber. Za stvarne pozive treba call tracking broj.
