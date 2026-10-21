# PAGES.md - Plan i status strana novog sajta

Pregled strana sa starog sajta i njihov status na novom. Svaka nova strana: recikliraj nav + footer + `:root` tokene iz `index.html`, srpski (latinica), SEO meta + OG tagovi. EN/RU verzije u `en/` i `ru/` samo za glavne strane (proizvodi su samo SR - jezički meni vodi na EN/RU listing).

Poslednje ažuriranje: 2026-07-11

## Status glavnih strana

| Strana | SR | EN | RU |
|---|---|---|---|
| index.html | ✅ | ✅ | ✅ |
| onama.html | ✅ | ✅ | ✅ |
| kontakt.html | ✅ | ✅ | ✅ |
| galerija.html | ✅ | ✅ | ✅ |
| zivotinje.html | ✅ | ✅ | ✅ |
| dostava.html | ✅ | ✅ | ✅ |
| politika-privatnosti.html | ✅ | ✅ | ✅ |
| korpa.html | ✅ | ✅ | ✅ |
| cesta-pitanja.html | ✅ | ✅ | ✅ |
| 404.html | ✅ | ❌ | ❌ |
| cenovnik.html | ✅ | ❌ | ❌ |
| kalkulator.html | ✅ | ❌ | ❌ |

---

## Faza 1 - Usluge ✅ ZAVRŠENO (SR + EN + RU)

- [x] `izrada-terarijuma.html` (en/custom-terrariums, ru/custom-terrariums)
- [x] `izrada-akvarijuma.html` (en/custom-aquariums, ru/custom-aquariums)
- [x] `izrada-vivarijuma.html` (en/custom-vivariums, ru/custom-vivariums)
- [x] `izrada-led-rasvete.html` (en/led-lighting, ru/led-lighting)
- [x] `odrzavanje-akvarijuma-terarijuma.html` (en/maintenance, ru/maintenance)
- [x] `popravka-akvarijuma-terarijuma.html` (en/repair, ru/repair)

## Faza 2 - Kategorije proizvoda ✅ ZAVRŠENO (SR + EN + RU)

- [x] `terarijumi.html` (en/terrariums, ru/terrariums)
- [x] `akvaristika.html` (en/aquariums, ru/aquariums)
- [x] `oprema.html` (en/equipment, ru/equipment)

Napomena: sve cene su "Pozovite za cenu" / `data-price="0"`.

## Faza 3 - Pojedinačne strane životinja ✅ ZAVRŠENO (samo SR)

- [x] `zivotinje/bradataagama.html`
- [x] `zivotinje/crestedgekon.html`
- [x] `zivotinje/debelorepigekon.html`
- [x] `zivotinje/kineskavodenaagama.html`
- [x] `zivotinje/kukuruznismuk.html`
- [x] `zivotinje/leopardgekon.html`
- [x] `zivotinje/loptastipiton.html`

## Faza 4 - Vodiči ✅ ZAVRŠENO (samo SR)

- [x] `terarijumi/terarijum-za-bradatu-agamu.html`
- [x] `terarijumi/terarijum-za-kornjacu.html`
- [x] `terarijumi/terarijum-za-leopard-gekona.html`
- [x] `terarijumi/terarijum-za-loptastog-pitona.html`
- [x] `akvarijumi/akvarijum-za-kornjacu.html`
- [x] `akvarijumi-za-pocetnike.html` (u root-u)
- [x] `akvaristika/red-moor-wood.html`

## Faza 5 - Pomoćne strane ✅ ZAVRŠENO (samo SR)

- [x] `cesta-pitanja.html` (+ FAQPage schema, ima i EN/RU)
- [x] `cenovnik.html`
- [x] `kalkulator.html`
- [x] `404.html`

## Faza 6 - Product strane (U TOKU)

Odluka doneta: prebacuju se SVE product strane sa starog sajta. Listing strane
(`terarijumi.html`, `akvaristika.html`, `oprema.html`, `index.html`) već linkuju
ka svim product stranama - dok se ne prebace, ti linkovi su polomljeni.

Šablon: već prebačene strane u `proizvodi/` (pd-* layout, Product + BreadcrumbList
schema, op-card slični proizvodi, bez dijakritika u tekstu). Podaci o proizvodu
(dimenzije, materijal, ventilacija, opis) OBAVEZNO sa stare strane - ništa ne izmišljati.

| Kategorija | Staro | Prebačeno | Preostalo |
|---|---|---|---|
| proizvodi/terarijumi | 68 | 68 ✅ | 0 |
| proizvodi/akvarijumi | 24 | 24 ✅ | 0 |
| proizvodi/oprema | 60 | 0 | 60 (+1 nova: habistat-crested-gecko-diet-mango-80g) |

## Faza 7 - Odloženo / za odluku

- [ ] `3d.html` + `3d-pozadine.html` - 3D viewer sa AR (Three.js + Model-Viewer). Zavisi od odluke da li se 3D funkcionalnost zadržava.
- [ ] `blog.html` - blog folder je prazan i na starom sajtu; praviti tek kad bude sadržaja.
- [ ] `sitemap.xml` - generisati za novi sajt pre lansiranja (stari sitemap ne važi za novu strukturu).
- [ ] EN/RU verzije za: 404, cenovnik, kalkulator, strane životinja, vodiče - za odluku da li treba.
- [ ] `linkovi.html` - verovatno ne treba.

---

## Napomene za svaku novu stranu

1. Kopiraj nav + footer + strukturu sa postojeće strane istog tipa (product strane: `proizvodi/akvarijumi/akvarijum-100x40x50.html`)
2. `<title>` (< 60 char), unikatan `meta description` (< 155 char), OG tagovi
3. Canonical URL `https://nsreptiles.net/...` + hreflang gde postoje SR/EN/RU verzije
4. Schema.org po tipu strane (`Service`, `Product`, `FAQPage`, `BreadcrumbList`)
5. `.reveal` klasa za scroll animacije radi automatski
6. Ažurirati sitemap kad strana ode live
7. Posle izrade - otvoriti stranu i vizuelno proveriti pre nastavka
