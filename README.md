# ANLOSSA GROUP — Hospitality & Cafe Digital Systems

Ultra-premium, Apple/Tesla-inspired agency site for **ANLOSSA GROUP**. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS and Framer Motion.

**Palette:** Obsidian `#050505` · White `#FFFFFF` / `#F5F5F7` · Saffron `#FACC15`
**Type:** Syne 800 (`-0.04em` display tracking) · Plus Jakarta Sans · Space Grotesk tabular numerals (self-hosted via Fontsource — no Google Fonts network dependency)

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start
```

## Sections

| # | Section | File |
|---|---------|------|
| — | Sticky nav + mobile sheet | `components/nav.tsx` |
| 1 | Tesla-style 200vh sticky 3D phone stage (scroll-linked `rotateX` / `rotateY`, `translateZ` telemetry callouts) | `components/phone-stage.tsx` |
| 2 | Apple-style bento grid with 3D tilt cards (3 engines) | `components/bento.tsx` |
| 3 | 3D tilt + flip showcase card for the live **el Sabroso Cafe™** prototype | `components/showcase.tsx` |
| 4 | Commission Saver calculator (20–400 orders · ₹250 AOV · 22% cut) | `components/calculator.tsx` |
| 5 | Gold / Platinum / Black Voliud pricing + ₹0 advance trust banner | `components/pricing.tsx` |
| 6 | 3-field quick-launch form, WhatsApp deep link, footer | `components/lead-footer.tsx` |

## Component-library patterns (adapted in-repo, no runtime dependency)

- **VengeanceUI** → magnetic spring buttons (`magnetic-button.tsx`), 3D perspective tilt with glare (`tilt-card.tsx`), rotating border-beam highlight (`border-beam.tsx`).
- **Skiper UI** (skiper-style motion language) → scroll-triggered blur/rise reveals and word-by-word kinetic typography (`kinetic-text.tsx`).

## Customise

- WhatsApp number and demo URL: `lib/constants.ts` (`WHATSAPP_NUMBER`, `DEMO_URL`).
- Tier copy + deep links: `array` at the top of `components/pricing.tsx`.
- Colors / fonts / keyframes: `tailwind.config.ts` + `app/globals.css`.

## Performance notes

- All motion is `transform`/`opacity` only, GPU-hinted (`.gpu`), with springs on scroll progress for a smooth 60fps feel.
- `prefers-reduced-motion` disables animation globally.
- Mobile hero uses a fixed-size device mockup scaled by CSS transform so the UI never clips; heavy callouts are desktop-only.
