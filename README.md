# Sample Dealer Homepage — Next.js + Tailwind CSS

Demo used-car dealership homepage ("Apex Motors", Milton Keynes) built by **Velix Web Studio**, converted from the original static HTML version into a modern **Next.js (App Router) + Tailwind CSS v4** project.

## Tech stack
- **Next.js 15** (App Router, TypeScript)
- **React 19**
- **Tailwind CSS v4** (via `@tailwindcss/postcss`)
- `next/font` (Barlow + Barlow Condensed), `next/image`

## Run it
```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build
npm start
```

## What's inside
- `app/page.tsx` — page composition + shared filter/reserve state
- `components/Header.tsx` — sticky header with live open/closed status (Europe/London)
- `components/Hero.tsx` — hero stock search (make / budget / fuel) wired to the stock grid
- `components/StockSection.tsx` — filterable stock grid (Cars / SUVs / Vans / Under £20k) with per-car finance examples
- `components/FinanceCalculator.tsx` — slider calculator using real annuity maths at 9.9% APR (`lib/finance.ts`)
- `components/ReserveModal.tsx` — £99 reserve flow with 48-hour hold confirmation and WhatsApp hand-off
- `components/Sections.tsx` — trust strip, 4-step buying guide, part-exchange valuation form, reviews, opening hours, Velix call-to-action, footer
- `components/StickyBar.tsx` — mobile sticky Call / WhatsApp bar
- `data/cars.ts` — stock, reviews, dealer details and opening hours in one editable file
- `public/images/` — demo vehicle photos

The dealership, stock, prices and reviews are illustrative examples for demonstration.

Built by Velix Web Studio — https://velixweb.vercel.app
