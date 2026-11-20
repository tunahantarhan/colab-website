# COLAB website

The corporate website of COLAB Bilişim ve Danışmanlık Hizmetleri, built with [Astro](https://astro.build).
Turkish is served at `/`, English at `/en/`.

## Getting started

```sh
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the production build locally
```

## Deployment

Every push to `main` publishes a preview to GitHub Pages through `.github/workflows/deploy.yml`:
https://tunahantarhan.github.io/colab-website/

The preview build sets three environment variables. Leave them unset to build for the real domain.

| Variable | Preview value | Purpose |
|---|---|---|
| `SITE_URL` | `https://tunahantarhan.github.io` | Origin used for canonical and hreflang URLs |
| `BASE_PATH` | `/colab-website` | Sub-folder the site is served from |
| `PUBLIC_NOINDEX` | `true` | Keeps search engines from indexing the preview |

### Going live on Doruk Net

The real site is static files on the existing Apache hosting, which also runs the company email. Only the web root changes; DNS and mail settings stay as they are.

1. Back up the old WordPress site (files and database) from the hosting panel. The panel is Plesk, so the web root is `httpdocs`.
2. Run `npm run build` with none of the variables above set.
3. Empty the web root (`public_html` or `httpdocs`) and upload the contents of `dist/`, including the hidden `.htaccess`.
4. In the panel, issue a Let's Encrypt certificate for both `colab.com.tr` and `www.colab.com.tr`.
5. Once `https://` works on both names, switch on the panel's "force HTTPS" option (or the commented block in `public/.htaccess`).

### Search engines

- `sitemap-index.xml` is generated at build time by `@astrojs/sitemap`; `robots.txt` (`src/pages/robots.txt.ts`) points to it.
- The home pages carry Organization and WebSite structured data (`src/layouts/BaseLayout.astro`), which Google uses for the site name and logo in results.
- Favicons in `public/` were rendered from `favicon.svg`; `og-image.png` is the preview image for shared links. Regenerate them if the logo changes.

## Where things live

| Path | What it holds |
|---|---|
| `src/i18n/ui.ts` | All interface copy in both languages, plus the section anchor ids |
| `src/data/` | Company facts, products and services. A CMS will take these over later |
| `src/styles/global.css` | Colour, type and spacing tokens and the shared layout helpers |
| `src/components/` | Header, footer, logo and the home page sections under `home/` |
| `src/pages/` | Routes. `index.astro` is Turkish, `en/index.astro` is English |

## Still placeholders

- The logo is the PNG from the old site (`src/assets/brand/colab-logo.png`); replace it with an SVG when one is available.
- Screenshots are switched off (`showScreenshots` in `src/data/site.ts`) until the product interface is redesigned. Setting it to `true` brings back the frames on the home page hero, the featured product cards and the product pages.
- The founding year (`foundedYear` in `src/data/site.ts`) is assumed to be 2016 until it is confirmed.
- Only products with copy in `src/data/product-details/` have a detail page (`/urunler/<slug>/`, `/en/products/<slug>/`); the others are listed without a link. The English product copy is a first translation and needs review.
- The KVKK notice (`src/data/legal/kvkk.ts`) is the text management approved on 20.11.2026. If the site gets a form, analytics or anything else that collects data, the notice must be updated.
- There is no cookie policy because the site sets no cookies. Adding analytics, embeds or anything else that sets cookies requires a cookie policy page and, for non-essential cookies, a consent banner.
