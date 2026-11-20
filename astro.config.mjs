// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Without any environment variables the build targets the real domain at the root.
// SITE_URL and BASE_PATH exist for staging copies served elsewhere or from a sub-folder.
const site = process.env.SITE_URL ?? 'https://www.colab.com.tr';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  // Needed for canonical URLs, the language alternates in the head and the sitemap.
  site,
  base,
  // Writes sitemap-index.xml for search engines; robots.txt points to it.
  integrations: [sitemap()],
});
