# Prismonex — Marketing Image Brief

Prompts + specs for generating on-brand marketing imagery (Midjourney, DALL·E 3,
Ideogram, Leonardo, Firefly, etc.). The site is already wired to accept these —
generate a file, drop it in the listed path, and it appears.

## How to use

1. Generate each image with the prompt below at the listed **aspect ratio**.
2. Export as **PNG** (or WebP), aim for ~1600×1000, keep each file **under ~400 KB**
   (compress at tinypng.com if needed — the site optimizes them further).
3. Save it at the exact **path** listed.
4. Tell me the file is in (or say "activate the images") — I set the path in
   `src/lib/content.ts` (Services/Products) or wire the section (Home/About),
   verify it renders, and ship it. *(Paths are left unset until the file exists so
   the live site never shows a broken image.)*

## Global style — put this in EVERY prompt (for a consistent set)

> **Style:** premium 3D render, technology brand hero visual, deep midnight-navy
> background (#0A0F2C), vivid gradient accents flowing cyan (#00CFFF) → royal blue
> (#1565FF) → electric purple (#6C2BFF) → magenta (#FF1FAF), soft volumetric glow,
> glassmorphism, subtle prism/refraction light beams, clean minimal composition,
> lots of negative space, studio lighting, high detail, sharp focus. No text, no
> letters, no logos, no watermark.

> **Negative / avoid:** text, words, letters, UI copy, watermark, logo, busy
> clutter, cheesy stock-photo look, people's faces, low quality, jpeg artifacts.

**Consistency tips:** generate the whole set in one session; reuse the **same seed**
and/or a **style reference** (Midjourney `--sref`) across all images so they look
like a family. Keep the navy background and the prism/spectrum motif in every one.
Landscape framing with the subject slightly right-of-center leaves room for text.

---

## 1. Services — 4 divisions  ·  1600×1000 (16:10)  ·  navy background

Wired ✓ — set `image` on each service in `content.ts` once files land.

**`public/services/ai-software-cloud.png`** — *AI, Software & Cloud*
> A glowing neural core of interconnected light nodes and flowing data streams
> merging with a translucent geometric cloud, circuit-etched glass facets refracting
> a rainbow prism beam. [+ Global style]

**`public/services/it-services.png`** — *IT Services*
> An abstract mesh of connected server nodes linked by glowing support pathways
> forming a protective shield-like lattice, dependable and calm, floating in dark
> space. [+ Global style]

**`public/services/hardware.png`** — *Hardware Sales*
> Sleek floating hardware — a thin laptop, a server rack, and a router — rendered
> in brushed metal and glass with spectrum edge-lighting, arranged as a clean
> product hero. [+ Global style]

**`public/services/saas.png`** — *SaaS Products*
> Floating glassmorphic dashboard panels and app cards stacked in 3D space,
> connected by beams of light, faint chart shapes (NO readable text), prism accents.
> [+ Global style]

---

## 2. Products — mockup  ·  1600×1000 (16:10)

Wired ✓ — set `image` on a product in `content.ts`.

**`public/products/platform.png`** — *SaaS platform hero*
> A modern analytics dashboard on a floating laptop with a companion phone, clean
> glassmorphic UI with abstract charts and cards in the brand palette, dark navy
> studio backdrop with spectrum glow, product hero shot. [+ Global style]

> ⚠️ **Caveat:** AI image tools render fake/garbled text in UI. Keep the UI
> abstract (no readable labels). Once the real product exists, replace this with an
> actual screenshot for authenticity.

---

## 3. Home section  ·  1600×1000 (16:10)  ·  (wire on request)

**`public/home/clarity.png`** — *"complexity → clarity" (Why Us / Process)*
> A single white light beam entering a floating glass prism and refracting into a
> clean spectrum fan of cyan-blue-purple-magenta across a dark navy field —
> clarity emerging from complexity, elegant and minimal. [+ Global style]

---

## 4. About  ·  1600×1000 (16:10)  ·  (wire on request)

**`public/about/vision.png`** — *mission / vision*
> An abstract constellation of glowing connected nodes rising along an upward
> trajectory into deep navy space, spectrum-gradient light, a sense of scale,
> ambition, and connected intelligence. [+ Global style]

---

## Optional: hero replacement

The home hero currently uses a custom animated SVG "AI core" (no image needed). If
you ever want a rendered hero instead, generate a **2400×1400** version of the
`clarity.png` concept — but the animated SVG is faster and already on-brand, so
this is optional.
