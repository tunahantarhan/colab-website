import type { Lang } from '../i18n/ui';
import type { ProductDetail } from './product-details/types';
import { eImza } from './product-details/e-imza';
import { evrakTakibi } from './product-details/evrak-takibi';
import { dijitalArsiv } from './product-details/dijital-arsiv';
import { satinalma } from './product-details/satinalma';
import { sahaYonetimi } from './product-details/saha-yonetimi';

export interface Product {
  /** The URL segment of the product detail page, e.g. /urunler/e-imza/ and /en/products/e-imza/. */
  slug: string;
  name: Record<Lang, string>;
  summary: Record<Lang, string>;
  /**
   * The long-form copy for the detail page. Only products with this filled in get a page and a card with a
   * screenshot on the home page; the rest stay in the numbered list until their copy arrives.
   */
  detail?: Record<Lang, ProductDetail>;
}

// The order here is the order on the page. Products with detail pages come first so the cards sit above the list.
export const products: Product[] = [
  {
    slug: 'e-imza',
    name: { tr: 'Kolay Elektronik İmza', en: 'Easy E-Signature' },
    summary: {
      tr: 'Evrakı gönderin, yönetici telefonundan tek tıkla imzalasın; KEP ile iletilsin.',
      en: 'Send the document, let the manager sign it on their phone in one tap, and deliver it via KEP.',
    },
    detail: eImza,
  },
  {
    slug: 'evrak-takibi',
    name: { tr: 'Evrak Takibi', en: 'Document Tracking' },
    summary: {
      tr: 'Her evrakın kimde olduğu ve süresinin ne zaman dolduğu canlı olarak görünür.',
      en: 'See live who has each document and when its deadline runs out.',
    },
    detail: evrakTakibi,
  },
  {
    slug: 'dijital-arsiv',
    name: { tr: 'Dijital Arşiv', en: 'Digital Archive' },
    summary: {
      tr: 'Aradığınız evrakı konusuna veya kurumuna göre saniyeler içinde bulun.',
      en: 'Find any document by subject or organisation in seconds.',
    },
    detail: dijitalArsiv,
  },
  {
    slug: 'satinalma',
    name: { tr: 'Satınalma ve Tedarik Zinciri', en: 'Procurement and Supply Chain' },
    summary: {
      tr: 'Talepten onaya, tekliften muhasebeye kadar satınalma tek yerde.',
      en: 'Procurement in one place, from request and approval to quotes and accounting.',
    },
    detail: satinalma,
  },
  {
    slug: 'saha-yonetimi',
    name: { tr: 'Saha Yönetimi', en: 'Field Operations' },
    summary: {
      tr: 'Arıza bildirilir, ekip atanır, iş fotoğrafla kapanır; hepsi ofisten canlı görünür.',
      en: 'Faults are reported, crews assigned and jobs closed with a photo, all visible live from the office.',
    },
    detail: sahaYonetimi,
  },
  {
    slug: 'insan-kaynaklari',
    name: { tr: 'İnsan Kaynakları', en: 'Human Resources' },
    summary: { tr: 'Personel süreçleri tek yerde.', en: 'All personnel processes in one place.' },
  },
  {
    slug: 'depo-yonetimi',
    name: { tr: 'Depo Yönetimi', en: 'Warehouse Management' },
    summary: { tr: 'Stok ve depo hareketleri anlık.', en: 'Stock and warehouse movements in real time.' },
  },
  {
    slug: 'crm',
    name: { tr: 'CRM', en: 'CRM' },
    summary: { tr: 'Müşteri ilişkileri ve satış takibi.', en: 'Customer relationships and sales tracking.' },
  },
  {
    slug: 'kalite-yonetimi',
    name: { tr: 'Kalite Yönetimi', en: 'Quality Management' },
    summary: { tr: 'Kalite süreçleri ve denetim takibi.', en: 'Quality processes and audit tracking.' },
  },
  {
    slug: 'performans-yonetimi',
    name: { tr: 'Performans Yönetimi', en: 'Performance Management' },
    summary: { tr: 'Hedef ve performans değerlendirme.', en: 'Goals and performance reviews.' },
  },
];

/** Products that have a detail page, in page order. */
export const detailedProducts = products.filter(
  (p): p is Product & { detail: Record<Lang, ProductDetail> } => p.detail !== undefined,
);

/**
 * The detail page path without the language prefix. Turkish and English use different folder names,
 * so pass the result to localePath() to get a full link.
 */
export function productPath(lang: Lang, slug: string): string {
  return lang === 'tr' ? `/urunler/${slug}/` : `/products/${slug}/`;
}

/** Both language versions of a product page, for the language switch and the hreflang links. */
export function productPaths(slug: string): Record<Lang, string> {
  return { tr: productPath('tr', slug), en: productPath('en', slug) };
}
