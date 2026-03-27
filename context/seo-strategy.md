# SEO Strategy — Beaconwood at Eagle
## CBH Homes Community Page

---

## Target Keywords

### Primary (highest intent, target in H1, title tag, meta)
- `new homes Eagle Idaho`
- `new construction homes Eagle ID`
- `homes for sale Eagle Idaho`

### Secondary (use in H2s, body copy, alt text)
- `CBH Homes Beaconwood`
- `Beaconwood Eagle Idaho`
- `luxury homes Eagle Idaho`
- `new construction Eagle Idaho 2025`
- `move-in ready homes Eagle ID`
- `CBH Homes Eagle Idaho`

### Long-tail / FAQ targets (use in FAQ section, answer naturally)
- `how much do new homes cost in Eagle Idaho`
- `CBH Homes Beaconwood floor plans`
- `new homes near Eagle Idaho schools`
- `new construction homes West Ada School District`
- `homes for sale Eagle Idaho under 800k`
- `CBH Homes self guided tour`
- `new homes Eagle Idaho with views`
- `what's included in CBH Homes`
- `CBH Homes warranty`
- `Eagle Idaho HOA communities`

---

## On-Page SEO Elements

### Title Tag
```
New Homes in Eagle, Idaho | Beaconwood by CBH Homes | From $694,990
```
*(~65 characters — within limit)*

### Meta Description
```
Discover Beaconwood — luxury move-in ready homes in Eagle, Idaho by CBH Homes, Idaho's #1 Builder. Prices from $694,990. Designer interiors, Level 5 & 6 finishes, scenic Bogus Basin views. Schedule your self-guided tour today.
```
*(~230 characters — slightly long, trim if needed)*

### H1 (one per page, above the fold)
```
New Homes in Eagle, Idaho — Beaconwood by CBH Homes
```

### H2 Structure (section headings — these are crawled heavily)
1. `New Construction Homes from $694,990 in Eagle, ID`
2. `Why Eagle, Idaho? Life in One of the Treasure Valley's Best Cities`
3. `Available Homes & Floor Plans at Beaconwood`
4. `Curated Designer Interiors — Choose Your Colorway`
5. `What's Included in Every Beaconwood Home`
6. `Community Amenities & Location`
7. `Why Build with CBH Homes?`
8. `Frequently Asked Questions About Beaconwood`

---

## Schema Markup (JSON-LD)

### 1. LocalBusiness Schema
```json
{
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Beaconwood by CBH Homes",
  "description": "Luxury new construction homes in Eagle, Idaho by CBH Homes.",
  "url": "https://cbhhomes.com/communities/eagle/beaconwood/",
  "telephone": "(208) 391-5545",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "5459 W Yarnell St",
    "addressLocality": "Eagle",
    "addressRegion": "ID",
    "postalCode": "83616",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.71822,
    "longitude": -116.423028
  },
  "openingHours": "Sa 13:00-16:00",
  "priceRange": "$$$"
}
```

### 2. FAQPage Schema
Apply to the FAQ section. Each Q&A pair gets:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much do homes at Beaconwood cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Homes at Beaconwood start at $694,990..."
      }
    }
  ]
}
```

### 3. BreadcrumbList Schema
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "CBH Homes", "item": "https://cbhhomes.com" },
    { "@type": "ListItem", "position": 2, "name": "Communities", "item": "https://cbhhomes.com/communities/" },
    { "@type": "ListItem", "position": 3, "name": "Eagle", "item": "https://cbhhomes.com/communities/eagle/" },
    { "@type": "ListItem", "position": 4, "name": "Beaconwood", "item": "https://cbhhomes.com/communities/eagle/beaconwood/" }
  ]
}
```

---

## FAQ Content (SEO-optimized Q&As)

These should live in the FAQ section with FAQPage schema. Written to match natural search queries.

**Q: How much do homes at Beaconwood cost?**
A: Homes at Beaconwood by CBH Homes start at $694,990. All homes are move-in ready with Level 5 & 6 designer finishes included. Contact our sales team at (208) 391-5545 for current availability and pricing.

**Q: What floor plans are available at Beaconwood?**
A: Beaconwood offers [X] floor plans ranging from [X] to [X] square feet. Each plan features open-concept layouts, [beds/baths range], and is finished with CBH's Level 5 & 6 interior selections. View all available homes above or schedule a self-guided tour to walk through in person.

**Q: What's included in a CBH Homes at Beaconwood?**
A: Every Beaconwood home includes Level 5 & 6 designer finishes — quartz countertops, Greyloch cabinetry, luxury vinyl plank flooring, premium tile backsplashes, and coordinated hardware and fixtures. Buyers choose from three designer colorways: Cool, Neutral, or Warm.

**Q: What school district serves Beaconwood?**
A: Beaconwood is located within the West Ada School District, consistently rated among the top school districts in Idaho. [Confirm specific schools serving this address with CBH.]

**Q: Can I schedule a self-guided tour of Beaconwood?**
A: Yes! CBH Homes offers self-guided tours — you select a time online and receive your entry code. No appointment necessary and no pressure. Visit our Tour Now page or call (208) 391-5545 to get started.

**Q: Is there an HOA at Beaconwood?**
A: Yes, Beaconwood has a homeowners association managed by AMPM (ampmyhoa.com). Contact our sales team for current HOA fee information.

**Q: What financing options are available at Beaconwood?**
A: CBH Homes works with Team Mandi at Premier Mortgage Resources (NMLS #1169) to offer competitive financing including rate buydown programs. Ask about current promotions — limited-time rate buydowns may be available. Visit cbhhomes.com/home-loan-helper or call (208) 391-5545.

**Q: How far is Beaconwood from downtown Boise?**
A: Beaconwood is located in Eagle, Idaho, approximately 20 minutes from downtown Boise and 5 minutes from Eagle's vibrant downtown area. The community offers easy access to I-84 via Ten Mile Road.

**Q: What is CBH Homes' warranty?**
A: CBH Homes provides a 1-2-6 warranty: 1 year on workmanship, 2 years on mechanical systems, and 6 years on structural components. [Confirm exact terms with CBH.]

---

## Technical SEO Checklist (for developer)

- [ ] Canonical URL set to community page URL
- [ ] OG tags (og:title, og:description, og:image) for social sharing
- [ ] Twitter Card meta tags
- [ ] All images use descriptive alt text (e.g. "New homes in Eagle Idaho - Beaconwood by CBH Homes")
- [ ] Images served as WebP format
- [ ] Images lazy-loaded below the fold
- [ ] Google Maps embed has title attribute
- [ ] Internal links to: CBH homepage, Communities page, Floor plan pages, Tour Now, Pre-qual
- [ ] No broken links
- [ ] Sitemap includes this URL
- [ ] robots.txt allows crawling
- [ ] Core Web Vitals: LCP < 2.5s, CLS < 0.1, FID < 100ms
- [ ] Mobile-first responsive design
- [ ] Structured data validated at schema.org/validator

---

## Content Notes for Copy

- Use "Eagle, Idaho" naturally throughout (not just "Eagle") — geo-specificity helps
- Mention "Treasure Valley" — regional term buyers use
- Reference "West Ada School District" by name
- Use "new construction" and "move-in ready" — high-intent buyer language
- Mention "Bogus Basin" for local flavor and differentiation
- Avoid keyword stuffing — write for humans first, Google second
- Target 1,200–1,800 words of readable body copy total across all sections
