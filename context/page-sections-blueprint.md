# Page Sections Blueprint — Beaconwood Community Page
## CBH Homes | Astro + Tailwind + React Islands

---

## Architecture Overview

**Framework:** Astro (static-first)
**Styling:** Tailwind CSS
**Interactive components:** React islands (client:load or client:visible)
**Images:** WebP, served from /assets/, lazy loaded below fold
**Fonts:** [Choose distinctive pairing — NOT Inter/Roboto. Suggest: Fraunces or Playfair Display for display headings + DM Sans or Plus Jakarta Sans for body]
**Color palette:** Base off CBH red (#D0021B) with deep navy or charcoal as the premium contrast color, warm off-whites for backgrounds
**Deployment target:** Netlify or Vercel

---

## Section-by-Section Blueprint

---

### SECTION 0 — Sticky Top Bar
**Component:** `TopBar.astro`
**Type:** Static

**Content:**
- Left: Promo text — "🔒 Get Lucky — 3.49%* Rate Buydown | Limited Time"
- Right: Phone number with click-to-call — "(208) 391-5545"
- Background: CBH red (#D0021B), white text
- Behavior: Stays fixed at top of viewport on scroll
- Mobile: Collapses to just phone number + promo icon

---

### SECTION 1 — Hero
**Component:** `Hero.astro`
**Type:** Static (full-bleed image, no JS needed)

**Content:**
- Full-bleed background: Hero photo or rendering of Beaconwood (use placeholder if not available)
- Overlay: Dark gradient (bottom-heavy so text is legible)
- Eyebrow text: "CBH Homes | Eagle, Idaho"
- H1: "New Homes in Eagle, Idaho — Beaconwood"
- Subheading: "Move-in ready luxury homes from $694,990. Level 5 & 6 finishes. Scenic Bogus Basin views."
- Primary CTA button: "View Available Homes" → anchors to #floor-plans
- Secondary CTA button: "Book a Self-Guided Tour" → links to tour scheduler
- Bottom strip: 3 trust badges — "Idaho's #1 Builder" | "34 Years Experience" | "29,000+ Happy Homeowners"

**Design notes:**
- Hero should feel premium — large, confident, not cluttered
- Trust badges strip sits at very bottom of hero section, semi-transparent background
- Subtle parallax on hero image is nice if performant

---

### SECTION 2 — In-Page Anchor Navigation
**Component:** `PageNav.astro`
**Type:** Static with sticky behavior (CSS position: sticky)

**Content (tabs/links):**
- Overview
- Homes
- Interiors
- Amenities
- Location
- Contact

**Design notes:**
- Slim bar, ~48px tall
- Underline active section as user scrolls (use Intersection Observer via small inline script)
- On mobile: horizontal scroll, no wrapping
- Sits directly below hero, sticks to top when user scrolls past it
- Background: white with subtle drop shadow
- Active state: CBH red underline

---

### SECTION 3 — Quick Stats Strip
**Component:** `StatsStrip.astro`
**Type:** Static

**Content (6 stats):**
1. 🏠 "8 Homes Available" (update dynamically if possible)
2. 📐 "[X,XXX]–[X,XXX] sq ft" (confirm range)
3. 💰 "From $694,990"
4. 🏫 "West Ada School District"
5. 📍 "Eagle, Idaho"
6. 🔑 "Move-In Ready"

**Design notes:**
- Single horizontal row, evenly spaced
- Light background (off-white or very light gray)
- Each stat: icon + bold number/label + small descriptor
- Dividers between stats on desktop
- 2-column grid on mobile

---

### SECTION 4 — Community Story (Overview)
**Component:** `CommunityStory.astro`
**ID:** `#overview`
**Type:** Static

**Content:**
- H2: "Life in Beaconwood — Eagle, Idaho's Most Sought-After New Community"
- 3 paragraphs of lifestyle-forward narrative copy (write with SEO keywords woven naturally):
  - P1: The community itself — peaceful setting, natural beauty, Bogus Basin views, move-in ready
  - P2: Eagle, Idaho as a destination — small-town charm, vibrant downtown, outdoor recreation, top schools
  - P3: The CBH promise — quality, craftsmanship, 34 years, no-pressure experience

- Right column (on desktop): Community highlights card
  - Location: Eagle, Idaho
  - Price: From $694,990
  - Status: Now Selling
  - Builder: CBH Homes
  - School District: West Ada
  - Interior Level: Level 5 & 6
  - CTA: "Schedule a Tour"

**Design notes:**
- Two-column layout on desktop (prose left, card right)
- Single column on mobile
- Card has subtle shadow and border
- Prose uses generous line-height for readability

---

### SECTION 5 — Available Homes / Floor Plans
**Component:** `FloorPlans.jsx` (React island)
**ID:** `#homes`
**Type:** Interactive (client:visible)

**Content:**
- H2: "Available Homes at Beaconwood"
- Filter bar: All | [Bed counts] | [Sq ft ranges] — simple pill toggles
- Grid of home cards, each showing:
  - Home photo or rendering
  - Plan name
  - Square footage
  - Beds / Baths
  - Price
  - "Quick Move-In" badge if applicable
  - CTA: "View Details" button
- Below grid: "Don't see your perfect fit? More homes coming. Join the interest list →"

**Design notes:**
- 3-column grid on desktop, 2-col tablet, 1-col mobile
- Cards have hover state (subtle lift shadow)
- Filter pills use CBH red for active state
- Use placeholder cards if actual floor plan data not yet available
- Each card links to individual floor plan page on cbhhomes.com

---

### SECTION 6 — Designer Interiors
**Component:** `DesignerInteriors.jsx` (React island)
**ID:** `#interiors`
**Type:** Interactive (client:visible)

**Content:**
- H2: "Curated Designer Interiors — Choose Your Colorway"
- Subheading: "Every Beaconwood home comes finished with Level 5 & 6 designer selections. Choose from three expertly curated palettes — no upgrade fees, no design stress."
- Tab switcher: [Cool] [Neutral] [Warm] — default: Neutral
- Each tab displays:
  - Material board image (the uploaded PNG files)
  - Vibe descriptor: e.g., "Moody, modern, high-contrast" / "Timeless, organic, versatile" / "Light, airy, Scandinavian-influenced"
  - Clean breakdown table with two columns: Category | Selection
    - Cabinetry, Paint, Quartz Countertops, Kitchen Backsplash, Bath Backsplash, Flooring, Carpet, Tub/Fireplace Tile, Hardware, Kitchen Faucet, Bathroom Faucet
- Below tabs: "Want to see these finishes in person?"
- CTA: "Book a Self-Guided Tour →"
- Disclaimer: "All selections are subject to change without notice. Buyer to confirm selections at cabinet install date with a CBH Sales Specialist."

**Design notes:**
- Tabs should animate smoothly (fade transition)
- Material board image displayed large and crisp
- On desktop: image left (60%) + table right (40%)
- On mobile: image on top, table below
- Tab active state: CBH red underline or background
- This section is a major visual moment — give it breathing room

**Data source:** See `designer-interiors.md` for all finish names and colorway details

---

### SECTION 7 — What's Included
**Component:** `WhatsIncluded.astro`
**ID:** `#included`
**Type:** Static

**Content:**
- H2: "What's Included in Every Beaconwood Home"
- Subheading: "No surprise upgrade fees. Level 5 & 6 finishes are standard."
- Icon grid of included features (8–12 items):
  - 🪨 Quartz Countertops
  - 🚿 Designer Tile Bathrooms
  - 🪵 Luxury Vinyl Plank Flooring
  - 🍳 Stainless Steel Appliances (confirm with CBH)
  - 🏡 Smart Home Features (confirm with CBH)
  - ⚡ Energy-Efficient Construction (confirm with CBH)
  - 🔒 1-2-6 Builder Warranty
  - 🧱 Greyloch Cabinetry
  - 🪟 [Confirm window brand/type]
  - 🌡️ [Confirm HVAC details]
  - [Add more confirmed features from CBH]

**Design notes:**
- 3–4 column icon grid
- Each item: icon (SVG or emoji-style) + bold label + 1 line description
- Light background to visually separate from adjacent sections
- Optional: "Download Full Features List" PDF CTA (if CBH has this asset)

---

### SECTION 8 — Community Amenities
**Component:** `Amenities.astro`
**ID:** `#amenities`
**Type:** Static

**Content:**
- H2: "Life Outside Your Front Door"
- Two-column layout:
  - Left: Amenity highlights with icons
    - 🛝 Playground
    - 🚶 Walking Paths
    - 🌳 Common Area / Green Space
    - 🐾 Pet Waste Stations
    - 🏔️ Scenic Bogus Basin Views
  - Right: Lifestyle photography OR illustrated community map
- Below: "All proposed amenities are subject to change without notice."

---

### SECTION 9 — Location
**Component:** `Location.astro`
**ID:** `#location`
**Type:** Static

**Content:**
- H2: "Perfectly Placed in Eagle, Idaho"
- Proximity callout cards (icon + destination + drive time):
  - 🛍️ Eagle Road Shopping — ~5 min
  - ☕ Downtown Eagle — ~5 min
  - 🌊 Eagle Island State Park — ~10 min
  - 🏥 St. Luke's Medical Center — ~15 min
  - 🏙️ Downtown Boise — ~20 min
  - ⛷️ Bogus Basin — ~45 min
- Embedded Google Map centered on 43.71822, -116.423028
- Directions block: From I-84, take Exit 42...

**Design notes:**
- Proximity cards in a 3-column grid above the map
- Map should be full-width, ~400px tall
- Map has a custom marker pin (can use CBH red color)

---

### SECTION 10 — Builder Trust / Why CBH
**Component:** `BuilderTrust.astro`
**Type:** Static

**Content:**
- H2: "Idaho's #1 Builder — Built Different for 34 Years"
- 4 trust stats in a row:
  - #1 — Idaho's Top Builder
  - 34 — Years of Experience
  - 29,000+ — Happy Homeowners
  - 1-2-6 — Builder Warranty
- 2–3 sentences of brand story copy
- CBH differentiators:
  - Self-Guided Tours
  - Buy Online — Reserve with No Money Down
  - In-House Financing with Rate Buydowns
  - On the Block Saturdays
- CTA: "Learn More About CBH Homes →" → cbhhomes.com/about

---

### SECTION 11 — Lead Capture Form
**Component:** `LeadForm.jsx` (React island)
**ID:** `#contact`
**Type:** Interactive (client:load — above-the-fold consideration)

**Content:**
- H2: "Ready to Make Beaconwood Home?"
- Subheading: "Get in touch with our Eagle sales team. No pressure, just answers."
- Form fields:
  - First Name + Last Name (side by side)
  - Email
  - Phone Number
  - Move-in timeline (dropdown: ASAP / 3–6 months / 6–12 months / Just exploring)
  - Pre-qualified? (Yes / No / Not yet)
  - Message (optional)
  - SMS opt-in checkbox
  - Submit: "Send My Message"
- Below form: Two other paths
  - 📞 "Prefer to call? (208) 391-5545"
  - 🏠 "Not sure what you can afford? [Get Pre-Qualified →]"
- Legal: SMS opt-in disclosure per CBH standard

**Design notes:**
- Two-column layout on desktop: Form left, contact info + agent photos right
- Agent photos (Alexis + Nick) visible in this section as social proof
- Form background: slightly off-white or subtle texture
- Submit button: CBH red, full-width on mobile

---

### SECTION 12 — FAQ
**Component:** `FAQ.astro`
**ID:** `#faq`
**Type:** Static (accordion, CSS-only preferred for performance)

**Content:** See `seo-strategy.md` for all 9 FAQ Q&A pairs
**Schema:** FAQPage JSON-LD in `<head>`

**Design notes:**
- Clean accordion with + / – icon
- Each question is an H3
- Answer text is readable body copy, not bullets
- Open first FAQ by default

---

### SECTION 13 — Sales Agents
**Component:** `SalesAgents.astro`
**Type:** Static

**Content:**
- H2: "Meet Your Beaconwood Sales Team"
- Two agent cards side by side:
  - Alexis Roemer — photo, title, REALTOR® badge, "Learn More" link
  - Nick Hafner — photo, title, REALTOR® badge, "Learn More" link
- Phone: "(208) 391-5545"
- CTA: "Connect with a Sales Specialist"

---

### SECTION 14 — Related Communities
**Component:** `RelatedCommunities.astro`
**Type:** Static

**Content:**
- H2: "Explore More CBH Homes Communities"
- 3 community cards (nearest Eagle/Boise-area CBH communities)
- Each: photo, community name, city, price starting at, CTA
- Footer link: "View All Communities →" → cbhhomes.com/communities

---

### SECTION 15 — Footer
**Component:** `Footer.astro`
**Type:** Static

**Content:**
- CBH logo
- Community address
- Phone
- Navigation links: Homes | Communities | Rentals | About | Contact | Warranty | Privacy Policy | Terms
- Social icons
- Legal: Full CBH disclaimer block + RCE-923
- Copyright: © 2026 CBH Sales & Marketing, Inc.

---

## Component File Map

```
src/
├── layouts/
│   └── Layout.astro          # Base layout, head, schema injection
├── pages/
│   └── index.astro           # Page assembly — imports all components
├── components/
│   ├── TopBar.astro
│   ├── Hero.astro
│   ├── PageNav.astro
│   ├── StatsStrip.astro
│   ├── CommunityStory.astro
│   ├── FloorPlans.jsx         # React island
│   ├── DesignerInteriors.jsx  # React island
│   ├── WhatsIncluded.astro
│   ├── Amenities.astro
│   ├── Location.astro
│   ├── BuilderTrust.astro
│   ├── LeadForm.jsx           # React island
│   ├── FAQ.astro
│   ├── SalesAgents.astro
│   ├── RelatedCommunities.astro
│   └── Footer.astro
└── assets/
    ├── colorway-cool.png
    ├── colorway-neutral.png
    └── colorway-warm.png
```

---

## Design System Tokens (Tailwind config)

```js
// tailwind.config.mjs
theme: {
  extend: {
    colors: {
      'cbh-red': '#D0021B',
      'cbh-dark': '#1A1A1A',
      'cbh-gray': '#6B7280',
      'cbh-light': '#F9F8F6',
      'cbh-white': '#FFFFFF',
    },
    fontFamily: {
      // Suggested — confirm aesthetic direction:
      display: ['Fraunces', 'serif'],   // or Playfair Display
      body: ['DM Sans', 'sans-serif'],  // or Plus Jakarta Sans
    }
  }
}
```

---

## Performance Targets

- Lighthouse Performance: 95+
- LCP: < 2.0s
- CLS: < 0.05
- Hero image: WebP, 1920px wide max, < 200KB
- All below-fold images: lazy loaded
- React islands: `client:visible` unless form (use `client:load` for lead form)
- No layout shift from font loading (use `font-display: swap`)
