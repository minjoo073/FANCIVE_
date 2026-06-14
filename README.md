# FANCIVE — Portfolio

🌐 **Live site → [fancive.vercel.app](https://fancive.vercel.app)**

A lifestyle fashion brand inspired by vintage boudoir aesthetics and quiet luxury.

Single-page editorial portfolio built as a 1920×11573 design canvas that scales uniformly to any viewport ≤ 1920px (desktop / 1440 / tablet).

---

## Stack

- **Framework**: Next.js 16 (Turbopack) + React 19 + TypeScript
- **Styling**: Tailwind v4 with `@theme inline` design tokens (ink ramp, paper)
- **Fonts**: Switzer Variable (`next/font/local`) + Pretendard Variable (CDN)
- **Animation**: GSAP 3.15 core + IntersectionObserver patterns + CSS transitions

## Structure

```
src/app/
├── layout.tsx              Root layout, metadata, font setup
├── page.tsx                Single-page canvas with 7 sections
├── globals.css             Tokens, canvas scaling, all animation rules
└── _components/
    ├── CanvasScale.tsx     Viewport → --canvas-scale CSS var (rAF throttled)
    ├── RevealOnScroll.tsx  IO → .reveal-in toggle for fade-up
    ├── HeroAnimation.tsx   GSAP timeline for opening stagger
    ├── HeadlineSplit.tsx   Word-by-word slide-up reveal for headlines
    ├── CollectionParallax  Scroll-linked Y offsets on 9 collection images
    ├── ImageMaskReveal.tsx Section image clip-path wipe on viewport entry
    └── CustomCursor.tsx    Ring cursor with lerp 0.18
```

## Sections

1. **Hero** — PORTFOLIO label, project meta, autoplay video, FANCIVE wordmark
2. **01. PROJECT OVERVIEW** — brand statement
3. **02. THE QUESTION** — "What Makes Elegance Memorable?"
4. **03. CONCEPT DEVELOPMENT** — A Lasting Atmosphere + keyword diagram
5. **04. VISUAL IDENTITY** — A Quiet Expression of Elegance (2-screen layout)
6. **05. WEBSITE DESIGN** — From Mood to Interface + Main/Sub mockups + Collection grid
7. **Closing** — credits, brand strategy / period / outcome columns, THANK YOU

## Interactions

| Layer | Effect |
|---|---|
| Page load | Hero opening stagger (PORTFOLIO → meta → video → wordmark, 120ms stagger) |
| Page load | Wordmark left→right clip-path sweep + infinite opacity breath (yoyo, 7s cycle) |
| Scroll entry | Text wrapper fade-up (`opacity 0→1, y 12→0`, 700ms ease-out) — 17 targets |
| Scroll entry | Headline word-by-word slide-up — 4 English headlines |
| Scroll entry | Section image darkroom wipe (`clip-path bottom→top`, 1s ease-in-out) — 6 images |
| Scroll | Collection grid multi-speed parallax — 9 images, ±20px design-space |
| Mouse | Ring cursor, lerp 0.18, expands on hover targets |
| Hover | Content images grayscale lift (`scale 1.012`, `grayscale 10%→2%`, 700ms) |
| Section transition | Website ↔ Closing background mask fades for seamless blend |

## Accessibility

- `prefers-reduced-motion: reduce` — all transitions/animations bypassed
- `(hover: hover) and (pointer: fine)` — cursor + hover effects restricted to desktop
- `lang="en"` on English copy for accurate screen reader pronunciation
- Section `id` attributes for anchor sharing

## Run

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve production build
```

## Design

Figma source — file `fNIyCdPfcvIEisn802Urk8`, frame `Desktop - 19`. Anima plugin exported initial absolute-positioned layout, which was then refactored into a token-driven, animated React canvas.

---

*Designed & Published — 박민주, May 2026*
