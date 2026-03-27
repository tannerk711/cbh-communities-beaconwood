# CLAUDE.md — Beaconwood Community Page Prototype
## Master Instructions for Claude Code

---

## Project Overview

Build a **production-quality prototype** of a community landing page for **Beaconwood at Eagle** by **CBH Homes** — Idaho's #1 homebuilder. This prototype will be handed to CBH's web developer as the definitive reference design for redesigning all community pages on cbhhomes.com.

The goal is to leapfrog competitors like Lennar and Toll Brothers with a page that is:
- **Visually premium** — feels like a luxury homebuilder, not a commodity builder
- **SEO-optimized** — structured to rank for "new homes Eagle Idaho" and related queries
- **Conversion-focused** — every section drives toward a tour booking or form submission
- **Reusable as a template** — designed so CBH can swap community-specific content for other communities

---

## Tech Stack

- **Framework:** Astro (latest stable)
- **Styling:** Tailwind CSS
- **Interactive components:** React islands (use `client:visible` for below-fold, `client:load` for lead form)
- **No other JS frameworks** — Astro + React islands only
- **Images:** WebP format, lazy loaded below fold
- **Fonts:** Load from Google Fonts — use `Fraunces` (display/headings) + `DM Sans` (body)
- **Icons:** Use inline SVGs or a lightweight icon library (Lucide or Heroicons)
- **Maps:** Google Maps embed (iframe) for location section

---

## Context Files — Read All of These

Before writing any code, read and internalize all files in the `/context/` directory:

1. `context/cbh-brand.md` — Brand identity, colors, tone, CTAs, legal language
2. `context/beaconwood-community.md` — All community data: location, pricing, amenities, sales team, directions
3. `context/designer-interiors.md` — The three colorway palettes (Cool / Neutral / Warm) with all finish details
4. `context/competitive-analysis.md` — What Lennar, Toll Brothers, Shea do well and where CBH can win
5. `context/seo-strategy.md` — Title tag, meta description, H1/H2 structure, schema markup, FAQ content
6. `context/page-sections-blueprint.md` — Section-by-section specifications for every component

The `page-sections-blueprint.md` is the primary build spec. Follow it exactly for structure and content. The other files are supporting context.

---

## Asset Files

The following image files are in `/src/assets/` and must be used in the Designer Interiors section:
- `colorway-cool.png` — Level 5 & 6 Cool interior selections board
- `colorway-neutral.png` — Level 5 & 6 Neutral interior selections board
- `colorway-warm.png` — Level 5 & 6 Warm interior selections board

For all other photography (hero, floor plans, lifestyle shots), use high-quality placeholder images from Unsplash that fit the context:
- Hero: modern suburban neighborhood, Idaho landscape, or luxury new construction exterior
- Floor plans: architectural floor plan style images or modern home interiors
- Lifestyle: Idaho outdoor scenes, family in new home, Eagle/Boise area

---

## Design Direction

**Aesthetic:** Refined luxury meets Idaho authenticity. Not cold/corporate — warm, aspirational, grounded. Think: the quality of Toll Brothers, the clarity of Lennar, but with a Pacific Northwest/Mountain West character that feels genuinely local.

**Color palette (Tailwind config):**
```js
'cbh-red': '#D0021B',      // Primary brand color, CTAs, accents
'cbh-dark': '#1A1A1A',     // Headings, nav
'cbh-slate': '#374151',    // Body text
'cbh-gray': '#9CA3AF',     // Secondary text, borders
'cbh-light': '#F9F8F6',    // Section backgrounds (warm off-white)
'cbh-white': '#FFFFFF',
```

**Typography:**
- `Fraunces` — display headings (H1, H2, hero text). Variable font, use weight 700. Has a warm, editorial quality.
- `DM Sans` — all body text, labels, CTAs. Clean, modern, highly legible.

**Spacing:** Generous. Sections should breathe. Minimum 80px vertical padding on sections, 120px on hero and key conversion sections.

**Buttons:**
- Primary: CBH red background, white text, rounded-md, px-8 py-4, font-semibold
- Secondary: white background, cbh-red border and text, same sizing
- Hover: slight darkening + subtle scale(1.02) transform

**Cards:** White background, subtle shadow (shadow-md), rounded-lg, hover lift effect

**Images:** Always use rounded-lg or rounded-xl, never hard square corners on photos

---

## Component Build Order

Build in this order — each section should be complete and polished before moving to the next:

1. `Layout.astro` — base layout with head, schema injection, font imports
2. `TopBar.astro` — sticky promo + phone bar
3. `Hero.astro` — full-bleed hero with H1 and CTAs
4. `PageNav.astro` — sticky in-page anchor navigation
5. `StatsStrip.astro` — 6-stat quick facts bar
6. `CommunityStory.astro` — narrative copy + community card
7. `FloorPlans.jsx` — React island, filterable home cards
8. `DesignerInteriors.jsx` — React island, tabbed colorway selector
9. `WhatsIncluded.astro` — icon grid of included features
10. `Amenities.astro` — community amenities list
11. `Location.astro` — proximity cards + Google Map embed
12. `BuilderTrust.astro` — CBH stats and differentiators
13. `LeadForm.jsx` — React island, multi-field contact form
14. `FAQ.astro` — CSS accordion with 9 Q&As
15. `SalesAgents.astro` — agent profile cards
16. `RelatedCommunities.astro` — 3 nearby community cards
17. `Footer.astro` — full footer with links and legal

---

## SEO Implementation

Apply all of the following (details in `seo-strategy.md`):

- `<title>`: "New Homes in Eagle, Idaho | Beaconwood by CBH Homes | From $694,990"
- `<meta name="description">`: Per seo-strategy.md
- `<meta property="og:*">` tags for social sharing
- H1 exactly: "New Homes in Eagle, Idaho — Beaconwood by CBH Homes"
- H2s: Follow the structure in seo-strategy.md exactly
- JSON-LD schema in `<head>`: LocalBusiness + FAQPage + BreadcrumbList (all in seo-strategy.md)
- All images have descriptive alt text
- Internal links: to cbhhomes.com, floor plan pages, tour scheduler, pre-qual tool

---

## Performance Rules

- Hero image: `loading="eager"`, `fetchpriority="high"`
- All other images: `loading="lazy"`
- React islands below fold: `client:visible`
- Lead form: `client:load`
- No unused CSS (Tailwind purge is automatic)
- Fonts loaded with `font-display: swap` to prevent layout shift
- Target Lighthouse score: 95+ performance

---

## Tone & Copy Guidelines

- Write in second person ("your home", "you'll love")
- Warm, confident, never salesy or pushy
- Idaho-proud — reference Eagle, Treasure Valley, Bogus Basin naturally
- Emphasize "no pressure" and ease of process (CBH brand value)
- Always include legal disclaimers where required (see cbh-brand.md)
- Placeholder copy should be clearly marked with [PLACEHOLDER] so CBH can update

---

## Reusability Notes (Template System)

As you build, add comments indicating which content is community-specific vs. template:

```astro
<!-- TEMPLATE: Update community name, price, city for each community -->
<!-- TEMPLATE: Update colorway images and finish data for each community -->
<!-- STATIC: CBH brand elements remain the same across all communities -->
```

The goal is that CBH's web developer can duplicate this project, swap out the tagged content, and launch a new community page in hours.

---

## Definition of Done

The prototype is complete when:
- [ ] All 17 components are built and assembled in index.astro
- [ ] Page renders correctly on desktop (1440px), tablet (768px), and mobile (375px)
- [ ] All 3 colorway tabs work in DesignerInteriors component
- [ ] Floor plan filter works in FloorPlans component
- [ ] Lead form has client-side validation and success state
- [ ] FAQ accordion opens/closes correctly
- [ ] Sticky TopBar and PageNav work on scroll
- [ ] All schema markup is present in <head>
- [ ] All images have alt text
- [ ] No console errors
- [ ] Lighthouse performance score 90+
