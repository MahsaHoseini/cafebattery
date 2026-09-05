# PROJECT_PLAN — CafeBattery Homepage Redesign (static landing)

## 1. Scope
Complete UI/UX redesign of the CafeBattery homepage as a static, single-file
RTL Persian landing (`index.html`), preserving business data, external routes
(all CTAs point to `https://cafebattery.com/`) and contact data. No backend,
no build step, no dependencies.

## 2. Homepage structure (final IA)
1. Header (sticky white: logo, nav, search, account, cart + mobile burger menu)
2. Hero («انرژی مطمئن، برای هر کاربرد» + checklist + framed visual)
3. Quick Actions (پیگیری سفارش / انتخاب باتری / مشاوره / راهنمای خرید)
4. Main Categories (6 large cards + view-all)
5. Shop by Use Case (6 cards: خودرو، برق اضطراری، خورشیدی، پزشکی، دوربین و امنیت، دیجیتال)
6. Best Sellers (4-col grid, shared ProductCard)
7. Battery Finder (3-step guided selector → category/guide links; no fake engine)
8. Featured Brand (Maxcell spotlight, restrained light panel + 3 product rows)
9. New Products (same ProductCard system, 4 items)
10. Articles (2 real site posts, graceful — no invented articles)
11. Trust row + light consultation CTA + FAQ accordion
12. Footer (5 columns + payline + legal)

## 3. Design system
- Palette: Primary `#123B5D`, Accent `#19A7A8` (dark `#128489`), Highlight
  `#F4B942` (sparse), BG `#F7F9FB`, Surface `#fff`, Ink `#17212B`,
  Muted `#6B7785`, Borders `#E5EAF0`, Success `#16A34A`, Danger `#D92D20`
- Font: Vazirmatn (Google Fonts) + Tahoma fallback; Persian numerals in UI
- Radius: 10px buttons, 12px cards, 16–20px large panels (no pills, no blobs)
- Borders > shadows; single shared ProductCard/ArticleCard/Trust styles
- No gradients, no glassmorphism, no decorative blobs/rays

## 4. Components (all in index.html, styles co-located per section)
Header, Search, Nav (desktop + mobile), Button (p/o), CategoryCard, UseCaseCard,
ProductCard (image/brand/name/spec/availability/price/discount/wishlist/add),
FinderStep, BrandPanel, ArticleCard, TrustItem, ConsultCTA, FAQ, Footer, Toast.

## 5. Interactions
- Add-to-cart → header badge counter + toast + button feedback
- Wishlist toggle → toast + `aria-pressed`
- Finder: device → info → recommendation (category/guide link), restart
- FAQ accordion (one open), mobile burger menu
- Focus-visible outlines on all interactive elements

## 6. Content honesty rules (enforced)
- No fake stats, reviews, ratings, or articles
- Prices/names from the real shop; ratings removed from cards
- Articles section renders only real site posts (2)

## 7. Responsive
- Desktop 1440: 12-col grid feel (4-col products, 3-col cats/usecase)
- Tablet 768: 2–3 col, simplified nav (burger ≤1100px)
- Mobile 390: stacked hero, full-width search, 2-col products/cats, sticky call bar
- Verified: 1440 / 500 (≈mobile) / 390-class via headless Chrome screenshots

## 8. Accessibility
Semantic landmarks (header/nav/main implied sections/footer), real buttons/links
(no clickable divs), labels on search/icon buttons, alt text (Persian) on all
images, keyboard-operable accordion/finder/menu, visible focus, RTL reading order.

## 9. Validation
- Static single file: TypeScript/ESLint/build N/A (no toolchain)
- Render verified with headless Chrome (desktop full-page + mobile)
- No backend → no regression surface; all links target live site routes

## 10. Limitations
- Product/finder actions are front-end demos wired to live-site URLs
- Product data is a snapshot of real shop listings (prices may drift)
- Fonts/images: Google Fonts requires network; photos are local in `img/`
