# PROJECT_PLAN — CafeBattery (automotive premium, navy + orange)

## 1. Scope
Premium Persian RTL ecommerce landing for battery store «کافه باتری» as a
static single file (`index.html`). Visual language inspired by premium
automotive battery websites: midnight navy `#061426` + vivid orange `#FF6A00`
single accent. All shopping CTAs target the live shop (`https://cafebattery.com/`).

## 2. Structure
1. Dark navy header (logo+tagline / search / phone+track+login+cart / nav)
2. Cinematic hero (3 blended battery photos + headline + 2 CTAs + 3 benefits)
3. Floating smart finder card (use-case / car brand / model / year → shop)
4. Category grid (7 cards with real photos)
5. Industrial strip (warranty panel + 3 image cards)
6. Bestsellers (4 product cards + warranty promo card)
7. Trust bar (5 items), Brands (6), Articles (4), Newsletter, Footer

## 3. Design system
- Navy `#061426`, orange `#FF6A00`, bg `#F4F6F9`, ink `#101B29`
- Vazirmatn; Persian digits; radius 14–24px; subtle shadows + thin borders
- Product photos local in `img/` (Wikimedia Commons, verified); hero images
  blended via `multiply` + radial mask

## 4. Interactions
- Add-to-cart → header badge + toast; wishlist toggle + toast
- Finder/newsletter → toast feedback, real form targets
- No backend; front-end demo wired to live URLs

## 5. Validation
- Render QA headless Chrome: desktop 1440 full-page + mobile 500 — pass
- Static file → TS/ESLint/build N/A
