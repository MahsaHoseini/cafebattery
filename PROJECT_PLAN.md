# PROJECT_PLAN — CafeBattery Homepage (from-scratch editorial marketplace)

## 1. Scope
Complete from-scratch redesign of the CafeBattery homepage as a static,
single-file RTL Persian page (`index.html`). Search-first product-discovery
experience, not a marketing landing. All shopping links target the live shop
(`https://cafebattery.com/` search/category routes + `?s=` queries). No backend,
no build step, no dependencies.

## 2. Homepage IA (final)
A. Minimal Header (logo / nav / account+cart + mobile scroll nav)
B. Search-first Introduction («باتری مناسب را پیدا کنید.» + big search + 5 real popular-search links)
C. Product Discovery («محصولات منتخب», 8 real products, hairline divider grid)
D. Smart Category Navigation (horizontal text nav → live `?s=` search routes)
E. Featured Collection («برای ساخت پک باتری», asymmetric editorial + 3 items)
F. Battery Finder (3 paths: device / type / spec → live search links; NO fake engine)
G. Spec Education (Voltage / Capacity / Chemistry / Size, one line each)
H. Comparison table (3 real 3.7V cells × real specs/prices; YITH-style compare not faked)
I. Brand Stories (Maxcell / Varta / Toshiba / Eveready index, photo-verified brands)
J. Editorial (2 real site posts + real pack-building video series; nothing invented)
K. Trust (single quiet line) + Minimal Footer (4 link groups + contact/legal)

## 3. Design system
- Palette: Ink `#17212B`, BG `#F5F5F2`, Surface `#fff`, Muted `#687078`,
  Accent `#0E8F87` (sparse), Highlight `#D9A441` (rare) ≈ 80/15/5
- Font: Vazirmatn + Tahoma; Persian numerals; type-led hierarchy
- Radius 8/12px; thin warm-gray borders `#E6E3DC`; one shared ProductCard
  (IMAGE / BRAND / NAME / SPEC / AVAILABILITY / PRICE / ACTION)
- No gradients, glass, blobs, pills, sliders, promo banners

## 4. Content honesty (enforced)
- Prices/titles from the live shop snapshot; brands photo-verified
  (Toshiba coin, Varta packs, Eveready charger, Maxcell cell)
- No ratings, reviews, stats, old-price discounts, scarcity claims, fake articles
- Availability shown as neutral in-stock default only

## 5. Interactions (subtle only)
- Add-to-cart → header badge + toast; wishlist toggle + toast (`aria-pressed`)
- Finder path/chip selection → builds a REAL `?s=` search URL
- Focus-visible on all interactive elements

## 6. Responsive (verified via headless Chrome screenshots)
- 1440: 4-col discovery, 1200px centered measure, asymmetric collection
- 1024: same grid, comfortable measure
- 768: 2-col grids, scroll nav, stacked collection
- 390-class: DOCSW probe = 485/500 → zero overflow; compact header,
  full-width search, 2-col grids, stacked finder/compare (row labels collapse)

## 7. Accessibility
Landmarks (header/nav/footer), real buttons/links, labeled search + icon
buttons, Persian alt text, keyboard-operable finder, visible focus, RTL order,
comparison uses table roles.

## 8. Validation
- Static single file → TypeScript / ESLint / build: N/A (no toolchain)
- Render QA: 1440 full-page + 1024/768/500 + DOM width probe — all pass
- Regression: no backend surface; all CTAs point at existing live routes

## 9. Limitations
- Cart/wishlist are front-end feedback demos (badge + toast), wired to live URLs
- Prices are a snapshot and may drift vs the live shop
- Google Fonts needs network; photos local in `img/`
