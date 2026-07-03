# Brand assets

Master brand art and design source files. **Not** used by the build — the site
renders its own crisp SVG mark (`src/components/Logo.tsx`) and favicon
(`src/app/icon.svg`), both recreated from this artwork.

- **`logo.png`** — the full marketing lockup: the "P" prism mark + `Prismonex`
  wordmark + tagline "Transforming Complexity into Clarity Through Connected
  Intelligence". Use for social profiles, decks, and other fixed-image contexts.

## Brand system (source of truth: `src/app/globals.css`)

- **Midnight Navy** `#0A0F2C` — headings, nav, footer, logo wordmark
- **Royal Blue** `#1565FF` (hover `#0F55E8`) — buttons, links, icons
- **Cyan** `#00CFFF` · **Electric Purple** `#6C2BFF` · **Magenta** `#FF1FAF` — accents
- **Gradient** — `linear-gradient(135deg, #00CFFF, #1565FF, #6C2BFF, #FF1FAF)`;
  reserved for the hero headline and logo marks only.

**Name:** customer-facing brand is **Prismonex**; the legal entity **Prismonex
Solutions LLC** appears only in legal signatures (footer copyright, contracts,
invoices).
