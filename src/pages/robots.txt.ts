import type { APIRoute } from 'astro';
import { withBase } from '../i18n/ui';

// Lets every search engine crawl the site and tells them where the sitemap is.
// The GitHub Pages preview is kept out of search results by the noindex meta tag instead.
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL(withBase('/sitemap-index.xml'), site).href;
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
