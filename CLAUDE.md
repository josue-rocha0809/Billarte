# Billarte — Project Guide for Claude

## Business Context
**Billarte** is a billiard table and game equipment company based in **Zapopan, Jalisco, México**.
- Primary goal: get visitors to **contact via WhatsApp** (+52 33 3256-0059)
- No prices are shown — visitors request a quote
- Sells and ships nationwide (Mexico); local market is Guadalajara/Zapopan
- Brand name = Billar + Arte (billiards + art)
- Slogan: "El arte del juego, a tu medida"

## Tech Stack
- **React 19** + **Vite 6** (SPA)
- **React Router v7** — client-side routing
- **AOS** (Animate on Scroll)
- **react-modal** — product detail modal
- **react-icons** — WhatsApp, Instagram, TikTok icons
- Deployed on **Vercel** (`vercel.json` included)

## Commands
```bash
cd billarte        # project root
npm run dev        # start dev server (localhost:5173)
npm run build      # production build
npm run preview    # preview production build
```

## Folder Structure
```
billarte/
├── public/
│   ├── images/          # ALL product images (served as static files)
│   │   ├── pool/        # Mesas de billar (26 images)
│   │   ├── soccer/      # Futbolitos (13 images)
│   │   ├── pingpong/    # Ping pong (2 images)
│   │   ├── cards/       # Mesas de cartas (3 images)
│   │   ├── carom/       # Carambola (4 images)
│   │   ├── hockey/      # Hockey de aire (3 images)
│   │   └── extras/      # Accesorios (11 images)
│   ├── sitemap.xml
│   └── robots.txt
│
└── src/
    ├── components/
    │   ├── Navbar/      # Top navigation with hamburger menu
    │   ├── Footer/      # Footer with social links
    │   ├── Modal/       # Product detail modal with carousel
    │   └── Carousel/    # Hero carousel (Home page only)
    ├── pages/
    │   ├── Home.jsx     # Dashboard: Carousel + Categories + WhatsApp CTA
    │   ├── Billar.jsx   # Pool tables gallery
    │   ├── Futbolitos.jsx
    │   ├── PingPong.jsx
    │   ├── Cartas.jsx
    │   ├── Carambola.jsx
    │   ├── Hockey.jsx
    │   └── Extras.jsx
    ├── constants/       # Product data arrays (image paths, titles, descriptions)
    │   ├── poolTables.js
    │   ├── soccerTables.js
    │   ├── pingPongTables.js
    │   ├── cardsTables.js
    │   ├── karamboleTables.js
    │   ├── hockeyTables.js
    │   └── extrasTables.js
    └── styles/
        └── Gallery.css  # Shared gallery grid styles
```

## Routes
| Path | Component | Description |
|------|-----------|-------------|
| `/` | Home | Dashboard with carousel + categories |
| `/mesas-de-billar` | Billar | Pool tables gallery (26 products) |
| `/futbolitos` | Futbolitos | Soccer tables gallery |
| `/ping-pong` | PingPong | Ping pong tables gallery |
| `/mesas-cartas` | Cartas | Card tables gallery |
| `/carambola` | Carambola | Carom tables gallery |
| `/hockey` | Hockey | Air hockey tables gallery |
| `/extras` | Extras | Accessories gallery |

## Image Conventions
- All images are in `public/images/<category>/`
- Referenced as URL strings in constants files: `"/images/pool/alessia.png"`
- Gallery images use `loading="lazy" decoding="async"` (below fold)
- Carousel/hero images use `loading="eager" fetchpriority="high"` (above fold)
- Formats: PNG (most), JPEG for a few

## Adding a New Product
1. Add image to `public/images/<category>/`
2. Add entry to `src/constants/<categoryTables>.js`
3. If multiple images, use the `images: [{ image, description }]` format

## Design System
- **Primary color:** `#d4af37` (gold)
- **Background:** `#f8f6f3` (warm beige)
- **Dark:** `#1a1a1a`
- **Heading font:** Playfair Display (serif, 700)
- **Body font:** Poppins (400, 500, 600)
- **WhatsApp number:** `+52 33 3256-0059`

## SEO Notes
- `index.html` has full LocalBusiness schema, OpenGraph, Twitter Card
- `public/sitemap.xml` lists all 8 routes with priority/changefreq
- Each gallery page should have unique h1 and descriptive paragraphs
- Target keywords: "mesas de billar Guadalajara", "mesas de billar México", "futbolito de lujo"

## Known Issues / Notes
- `Home.jsx` uses `:has(.home-wrapper)` CSS selector for zero padding-top — requires modern browser (Chrome 105+, Firefox 121+)
- `react-modal` requires `Modal.setAppElement('#root')` for accessibility — currently uses `ariaHideApp={false}` as workaround
