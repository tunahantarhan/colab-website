// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The production domain and path come from the environment so the same code can be deployed in two places:
// the real domain at the root, and the GitHub Pages preview under /colab-website.
// Without any variables set, the build targets the real domain.
const site = process.env.SITE_URL ?? 'https://www.colab.com.tr';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  // Needed for canonical URLs, the language alternates in the head and the sitemap.
  site,
  base,
  // Writes sitemap-index.xml for search engines; robots.txt points to it.
  integrations: [sitemap()],
});
