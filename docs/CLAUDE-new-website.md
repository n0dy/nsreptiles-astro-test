# CLAUDE.md - NS Reptiles

Uputstvo za rad na ovom projektu. Pročitaj pre nego što dodaješ ili menjaš bilo koji UI.

## O projektu
Statički sajt za **NS Reptiles** - odgajivačnica egzotičnih životinja i izrada terarijuma/akvarijuma po meri, Novi Sad. Jezik sadržaja: **srpski (latinica)**.

Struktura:
- `index.html` - početna strana (hero slider, kompleti, korpa-sidebar, footer)
- `korpa.html` - korpa/checkout (forma + sticky pregled porudžbine)
- `onama`, `kontakt`, `galerija`, `zivotinje`, `dostava`, `cesta-pitanja`, `cenovnik`, `kalkulator`, `politika-privatnosti`, `404` - ostale glavne strane
- `terarijumi.html`, `akvaristika.html`, `oprema.html` - listing strane proizvoda
- `izrada-*.html`, `odrzavanje-*.html`, `popravka-*.html` - strane usluga
- `zivotinje/` - pojedinačne strane životinja · `terarijumi/`, `akvarijumi/`, `akvaristika/` - vodiči
- `proizvodi/{terarijumi,akvarijumi,oprema}/` - product strane (putanje `../../`)
- `en/`, `ru/` - engleske i ruske verzije glavnih strana
- `assets/css/` - style.css (globalno) + po-tipu (proizvod.css, oprema.css...) · `assets/js/main.js`
- Status i plan strana: vidi `PAGES.md`

Nema build koraka, nema framework-a. Čist HTML + zajednički CSS u `assets/css/` + vanilla JS u `assets/js/main.js`. **Ne uvoditi React, Tailwind, bundlere ni npm** osim ako izričito ne zatražim.

Napomena o pismu: glavne strane koriste puna srpska slova, ali product strane u `proizvodi/` su pisane bez dijakritika (c/s/z umesto č/š/ž) - kod novih product strana prati postojeći šablon.

## Zlatno pravilo
**Prati postojeći stil.** Pre pisanja novog UI-ja, pogledaj kako je urađeno na postojećim stranama (hero, kartice kompleta, korpa, checkout) i koristi iste tokene, fontove i obrasce. Cilj je da nova strana izgleda kao da je oduvek bila deo sajta.

## Dizajn tokeni (CSS varijable - uvek koristi ove, ne hardkoduj boje)
```css
:root{
  --green:#4aa584;        /* primarna */
  --green-dark:#247658;   /* hover na primarnim dugmadima */
  --green-light:#6fc4a3;  /* aktivni/hover linkovi, akcenti */
  --dark:#282f34;         /* tamne sekcije, nav, hero overlay */
  --dark-2:#323a40;       /* footer */
  --silver:#dddddd;       /* borderi, ivice inputa */
  --bg:#f5f5f5;           /* svetla pozadina sekcija */
  --white:#ffffff;
  --ink:#282f34;          /* osnovni tekst */
  --ink-soft:#7a8088;     /* sekundarni/prigušeni tekst */
  --pattern:#eef0f0;      /* dekorativni dot pattern */
  --max:1240px;           /* maks. širina sadržaja */
}
```

## Tipografija
- Naslovi (h1–h4, dugmad, labele, „eyebrow"): **Oswald**, `font-weight:600`, najčešće `text-transform:uppercase`, blagi `letter-spacing`.
- Tekst/paragrafi: **Jost**, `font-weight:300–400`, `line-height:1.7`.
- Učitavaju se sa Google Fonts: `Jost` i `Oswald`, weights 300;400;500;600;700.

## Obrasci komponenti (kopiraj postojeće, ne izmišljaj nove)
- **Dugmad:** `.btn` + `.btn-primary` (zeleno popunjeno), `.btn-outline` (zeleni okvir), `.btn-light` (za tamne pozadine). Uppercase, Oswald, `letter-spacing:.12em`.
- **Sekcije:** `.section{padding:110px 0}`, wrapper `.wrap{max-width:var(--max);margin:0 auto;padding:0 28px}`.
- **Eyebrow** (mali zeleni nadnaslov iznad h2) + `.sec-title` sa dekorativnim dot patternom.
- **Kartice** (kit-card, best-card, .card): bela pozadina, suptilna senka `box-shadow:0 10px 30px -18px rgba(40,47,52,.3)`, hover podiže za `translateY(-6px)`.
- **Custom radio** (na checkout-u, klasa `.opt` + `.dot`): native input je sakriven, vizuelni krug `.dot` dobija zelen okvir + tačkicu kad je `.opt.sel`. Ne koristiti goli `accent-color`.
- **Aktivna nav stavka:** `.nav-links a.active` ima isti izgled kao `:hover` (boja `--green-light`).
- **Reveal animacija:** elementi sa klasom `.reveal` se pojavljuju na scroll preko IntersectionObserver-a - dodaj klasu i radi automatski.

## Estetika - šta DA
- Mnogo praznog prostora (velik vertikalni padding sekcija).
- Suptilne senke i prelazi (`transition:.2s–.3s`), nežni hover pomaci.
- Uppercase Oswald za sve što je „naslovno", Jost za telo teksta.
- Zaobljeni uglovi gde već postoje (npr. `.opt` border-radius:10px), inače oštre ivice na karticama - prati lokalni kontekst.

## Estetika - šta NE
- Bez generičnog „bootstrap" izgleda, bez plavih default linkova, bez teških bordera svuda.
- Bez emoji-ja u UI-ju.
- Bez hardkodovanih heks boja kad postoji odgovarajuća varijabla.
- Bez novih fontova ili biblioteka bez dogovora.

## Tehničke napomene
- **Korpa** živi u JS-u (niz `items` sa `{name, price, img, qty}`). Resetuje se na refresh (statički sajt). Ako treba trajnost, pitaj pre uvođenja localStorage/backenda.
- **Korpa-sidebar** se otvara zdesna nalevo (`transform:translateX(100%)` → `0`). Dugmad „U korpu" na karticama nose `data-name`, `data-price`, `data-img`.
- **Checkout** ima svoju kopiju dummy podataka - podaci se NE prenose automatski iz korpe sa početne (statički sajt). „Idi u korpu" u sidebaru vodi na `korpa.html`.
- **Sticky:** za `position:sticky` izbegavaj `overflow:hidden` na precima - koristi `overflow-x:clip` na `body`. Sticky stavljaj na kolonu (`align-self:start`), ne na unutrašnju karticu.
- **Cene:** format preko `n.toLocaleString('sr-RS')+' din'`.
- **Slike** se učitavaju sa `https://nsreptiles.net/style/img/...` - ne vide se bez interneta, to je očekivano.
- Promo kod (dummy): `REPTIL10` = 10% popusta.

## Brending / SEO
- Naziv firme: **NS Reptiles** (logo: NS REPT**I**LES, gde je „I" zeleno).
- Telefon: +381 69 330 1474 · Email: bata.dino00@gmail.com · Lokacija: Novi Sad.
- Drži ključne reči u tekstu: „egzotične životinje", „terarijumi po meri", „akvarijumi", „Novi Sad", „odgajivačnica".
- Svaka strana: jasan `<title>`, `meta description`, i Open Graph tagovi po uzoru na početnu.

## Radni tok koji volim
- Konkretne, postepene izmene; pokaži šta je promenjeno i zašto, kratko.
- Kad praviš novu stranu, recikliraj nav + footer + `:root` + osnovne stilove iz postojećih fajlova radi konzistentnosti.
- Posle izmena UI-ja, podseti me da otvorim stranu i pogledam pre nego što idemo dalje.