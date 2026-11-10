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
- Product screenshots are grey boxes, and the project and user counts in the figures band show `[X]+`.
- The founding year (`foundedYear` in `src/data/site.ts`) is assumed to be 2016 until it is confirmed.
- Product detail pages, the About page, the contact form and the KVKK and cookie pages are not built yet, so their links point to `#`.
