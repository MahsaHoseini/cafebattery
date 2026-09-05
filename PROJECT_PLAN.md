# PROJECT_PLAN — CafeBattery multi-page shop (full, self-contained)

## Status: COMPLETE

## 1. Scope
Full Persian RTL battery ecommerce built from **real data pulled from the live
cafebattery.com WooCommerce REST API** (430 products, 259 categories), fully
self-contained — no redirect to the real site, images served locally.

## 2. Architecture (multi-page, vanilla)
- `index.html` — landing (hero, finder, 14 category tiles, 4 bestsellers, trust, brand, newsletter, footer)
- `products.html` — product listing with side filters (category, brand, price range, stock, search, sort) + pagination
- `categories.html` — 260 category cards → filtered listing
- `product/p-<id>.html` — 430 generated detail pages (image, price, specs, description, related, add-to-cart)
- `data/products.js` — `PRODUCTS` + `CATS` arrays (real names/prices/stock/ratings/images)
- `assets/site.css` + `assets/site.js` — shared design system + cart/wishlist logic
- `img/p/*.jpg` — 408 downloaded real product images (700px, locally served); `noimg.svg` fallback

## 3. Data provenance (honest)
Names, prices (IRT), stock, ratings, review counts, categories and images come
straight from the live store. Templates/CTAs (car/industrial copy) replaced.
Contact info (phone/address/email) from the original page.

## 4. Functionality
- Cart: localStorage, drawer UI, qty +/-/remove, total, mock order code
- Wishlist: localStorage hearts across all pages
- Search/filter listing: URL params (cat/brand/min/max/stock/sort/q/page); "view all" everywhere internal
- Finder on landing → builds real filter URL

## 5. Internal navigation (no external shop links)
All product/category/view-all/hero CTAs → `products.html`, `categories.html`,
or `product/p-<id>.html`. Canonical/detail-ref external refs stripped.

## 6. Validation
- Headless Chrome DOM dumps: landing=14 tiles+4 bestsellers, shop=24 cards,
  categories=260 cards, 0 external cafebattery.com refs in landing
- Detail page: internal rel links + local images only, no external refs
- Static files → TS/ESLint/build N/A; no test toolchain added

## 7. Limitations
- Ratings sparse in source (most products have none); cards show them only when present
- Cart/checkout is front-end demo (no backend), creates a mock order number
- Prices are a snapshot of the API at build time