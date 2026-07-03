# Prismonex

The marketing website for **Prismonex** (a brand of Prismonex Solutions LLC) — a technology company building
intelligent, reliable, and scalable systems: AI & software, cloud infrastructure,
IT services, and hardware, plus our own SaaS products.

> Intelligent infrastructure, built to scale.

## Tech stack

- **[Next.js 16](https://nextjs.org)** (App Router) + **React 19** + **TypeScript**
- **[Tailwind CSS v4](https://tailwindcss.com)** (CSS-first `@theme` config)
- Fully static — every page prerenders to HTML
- No runtime dependencies beyond the standard Next.js server
- Animations are pure CSS/SVG and respect `prefers-reduced-motion`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the local dev server |
| `npm run build` | Production build + TypeScript typecheck |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

There is no test suite; `npm run build` is the correctness gate — it typechecks
and statically prerenders every page.

## Project structure

```
src/
├─ app/                 # App Router pages (Home, About, Services, Products, Contact)
│  ├─ layout.tsx        # Root layout: nav + footer, metadata
│  ├─ globals.css       # Tailwind v4 theme (Prismonex brand system) + animations
│  └─ icon.svg          # Favicon
├─ components/          # Nav, Footer, Logo, ContactForm, animation helpers,
│  │                    # and the dark-hero visuals (HeroAI, HeroBackground, …)
│  └─ sections/         # Home page sections (Stats, WhyUs, Process, Clients, Faq, …)
└─ lib/
   └─ content.ts        # Single source of all site copy and data
```

**All copy and data live in `src/lib/content.ts`.** Editing services, clients,
FAQs, team members, or company details is a data change there — not a layout edit.

## Configuration

Copy the example env file and add your contact-form key to enable real submissions:

```bash
cp .env.local.example .env.local
```

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | [Web3Forms](https://web3forms.com) access key for the contact form. Without it, the form falls back to a prefilled `mailto:`. |

## Deployment

Deploys to [Vercel](https://vercel.com) (or any Next.js host) with no extra
configuration. Set `NEXT_PUBLIC_WEB3FORMS_KEY` in the host's environment to
activate real contact-form delivery.

---

© 2026 Prismonex Solutions LLC. All rights reserved.
