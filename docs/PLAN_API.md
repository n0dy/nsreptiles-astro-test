# PLAN: Pricing API (AWS)

## Cilj

Centralizovane cene proizvoda na AWS-u. Klijent fetchuje cene pri prvom posetu, kešira u localStorage 7 dana. React admin panel za CRUD + istorija cena.

---

## Arhitektura

```
┌─────────────┐     GET /prices      ┌──────────────┐     Scan      ┌──────────────┐
│  Browser JS  │ ──────────────────► │  API Gateway  │ ──────────► │  DynamoDB     │
│  (klijent)   │ ◄────────────────── │  + Lambda     │ ◄────────── │  prices       │
└─────────────┘     JSON response    │  (Node.js)    │              │  price-history│
       │                              └──────────────┘              └──────────────┘
       ▼                                    ▲
  localStorage                              │ PUT/DELETE + API key
  (TTL 7 dana)                        ┌──────────────┐
                                       │ React Admin   │
                                       │ (zasebna app) │
                                       └──────────────┘
```

## Odluke

- **Slug** = ime fajla bez `.html` (npr. `terarijum-11x15x20-3d`)
- **Lambda runtime:** Node.js
- **Admin UI:** srpski jezik, React aplikacija
- **Istorija cena:** čuva se svaka promena cene sa timestamp-om

---

## DynamoDB tabele

### Tabela: `nsreptiles-prices`

| Polje       | Tip     | Opis                                           |
|-------------|---------|-------------------------------------------------|
| `slug`      | String  | Partition key. Npr. `terarijum-11x15x20-3d`    |
| `price`     | Number  | Cena u dinarima (bez decimala)                 |
| `inStock`   | Boolean | Da li je dostupan                              |
| `updatedAt` | String  | ISO 8601 timestamp poslednje izmene            |

### Tabela: `nsreptiles-price-history`

| Polje       | Tip    | Opis                                            |
|-------------|--------|-------------------------------------------------|
| `slug`      | String | Partition key                                   |
| `changedAt` | String | Sort key. ISO 8601 timestamp                   |
| `oldPrice`  | Number | Prethodna cena                                 |
| `newPrice`  | Number | Nova cena                                      |

~200 stavki u prices, istorija raste polako. Free tier pokriva sve.

---

## API endpointi

### Javni (CORS: `https://nsreptiles.net`)

| Metod | Putanja   | Opis            | Auth |
|-------|-----------|-----------------|------|
| GET   | `/prices` | Sve cene (Scan) | Nema |

### Admin (API key u `x-api-key` header-u)

| Metod  | Putanja                      | Opis                        | Auth    |
|--------|-------------------------------|-----------------------------|---------|
| GET    | `/admin/prices`              | Sve cene + updatedAt        | API key |
| PUT    | `/admin/prices`              | Dodaj/izmeni proizvod       | API key |
| DELETE | `/admin/prices/{slug}`       | Obriši proizvod             | API key |
| GET    | `/admin/prices/{slug}/history` | Istorija cena za proizvod | API key |

### PUT body primer

```json
{
  "slug": "terarijum-30x30x30",
  "price": 8500,
  "inStock": true
}
```

Lambda pri PUT-u automatski:
1. Čita trenutnu cenu iz `nsreptiles-prices`
2. Ako se cena promenila → upisuje red u `nsreptiles-price-history`
3. Ažurira `nsreptiles-prices` sa novom cenom i `updatedAt`

### GET /prices response

```json
[
  { "slug": "terarijum-30x30x30", "price": 8500, "inStock": true },
  { "slug": "akvarijum-60x30x35", "price": 12000, "inStock": false }
]
```

### GET /admin/prices/{slug}/history response

```json
[
  { "changedAt": "2026-06-01T14:30:00Z", "oldPrice": 7500, "newPrice": 8500 },
  { "changedAt": "2026-03-15T10:00:00Z", "oldPrice": 7000, "newPrice": 7500 }
]
```

---

## Security

- **GET /prices** - CORS ograničen na `https://nsreptiles.net`. Bez auth.
- **Admin endpointi** - API key kroz API Gateway Usage Plan.
- **Rate limiting** - 100 req/s na GET, 10 req/s na admin.
- **React admin** - API key se unosi pri "loginu", čuva u sessionStorage.

---

## Klijentski JS (`js/prices.js`)

```
1. Proveri localStorage('nsreptiles_prices')
2. Ako postoji I timestamp < 7 dana → koristi keš
3. Ako ne → fetch GET /prices → sačuvaj u localStorage sa timestamp-om
4. Popuni cene na stranici po slug-u (data-slug atribut na elementima)
5. Ako fetch fails → prikaži "Pozovite za cenu" (graceful fallback)
6. Ako inStock === false → prikaži "Nije dostupno" umesto cene
```

### HTML integracija

```html
<span class="price" data-slug="terarijum-30x30x30">Učitavanje...</span>
```

### localStorage struktura

```json
{
  "timestamp": 1717500000000,
  "prices": [
    { "slug": "terarijum-30x30x30", "price": 8500, "inStock": true }
  ]
}
```

---

## React Admin panel

Zasebna React aplikacija (Vite + React), hostovana na S3 + CloudFront ili Vercel.

### Stranice

1. **Login** - unos API key-a (sessionStorage)
2. **Proizvodi** - tabela svih proizvoda
   - Kolone: slug, cena, status (dostupan/nedostupan), poslednja izmena
   - Inline edit cene i statusa
   - Pretraga i filtriranje
   - Dugme za dodavanje novog proizvoda
3. **Istorija cena** - klik na proizvod otvara istoriju
   - Tabela promena (datum, stara cena, nova cena)
   - Mini grafikon cene kroz vreme (opciono)

### Tech stack (admin)

- React 18+ (Vite)
- React Router
- Tabela: TanStack Table ili prosta custom tabela
- HTTP: fetch ili axios
- UI: može i bez UI lib-a, ali ako hoćeš brzo - Ant Design ili shadcn/ui
- Grafikon istorije: Recharts (opciono)

---

## Koraci implementacije

### Faza 1: AWS infrastruktura

1. Kreirati DynamoDB tabelu `nsreptiles-prices` (PK: `slug`)
2. Kreirati DynamoDB tabelu `nsreptiles-price-history` (PK: `slug`, SK: `changedAt`)
3. Kreirati Lambda funkciju (Node.js 20, handler za sve rute)
4. Podesiti API Gateway - rute, CORS, API key, Usage Plan, rate limiting
5. Testirati sa curl-om

### Faza 2: Migracija podataka

6. Skripta za izvlačenje cena iz postojećih HTML stranica
7. Batch import u DynamoDB (BatchWriteItem)
8. Verifikovati da slug-ovi odgovaraju file name-ovima

### Faza 3: Klijentski JS

9. Napisati `js/prices.js` (fetch + localStorage + fallback)
10. Dodati `data-slug` atribute na product stranicama
11. Ukloniti hardkodovane cene
12. Testirati

### Faza 4: React Admin panel

13. Init Vite + React projekat (`admin/`)
14. Login stranica (API key → sessionStorage)
15. Tabela proizvoda sa CRUD operacijama
16. Stranica istorije cena po proizvodu
17. Deploy na S3/CloudFront ili Vercel

---

## Struktura fajlova

```
new_website/
├── js/
│   └── prices.js            ← klijentski fetch + localStorage
├── admin/                    ← React app (zasebna)
│   ├── src/
│   │   ├── App.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Products.jsx
│   │   │   └── PriceHistory.jsx
│   │   ├── api/
│   │   │   └── prices.js    ← API pozivi
│   │   └── components/
│   │       ├── ProductTable.jsx
│   │       └── HistoryChart.jsx
│   ├── package.json
│   └── vite.config.js
└── lambda/                   ← AWS Lambda source
    ├── index.mjs
    ├── routes/
    │   ├── getPublicPrices.mjs
    │   ├── adminGetPrices.mjs
    │   ├── adminPutPrice.mjs
    │   ├── adminDeletePrice.mjs
    │   └── adminGetHistory.mjs
    └── package.json
```

---

## Troškovi (procena)

| Servis      | Mesečno                                          |
|-------------|--------------------------------------------------|
| DynamoDB    | $0 (free tier: 25GB, 25 RCU/WCU)               |
| Lambda      | $0 (free tier: 1M poziva)                       |
| API Gateway | $0 prvih 12 meseci, posle ~$1/mesečno           |
| S3/CF admin | $0.50–1 (minimalan saobraćaj)                   |
| **Ukupno**  | **~$0–2/mesečno**                                |
