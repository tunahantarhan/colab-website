import type { Lang } from '../i18n/ui';
import type { ProductDetail } from './product-details/types';
import { eImza } from './product-details/e-imza';
import { evrakTakibi } from './product-details/evrak-takibi';
import { dijitalArsiv } from './product-details/dijital-arsiv';
import { satinalma } from './product-details/satinalma';
import { sahaYonetimi } from './product-details/saha-yonetimi';
import { depoYonetimi } from './product-details/depo-yonetimi';
import { insanKaynaklari } from './product-details/insan-kaynaklari';
import { kaliteYonetimi } from './product-details/kalite-yonetimi';
import { crm } from './product-details/crm';
import { entegrasyon } from './product-details/entegrasyon';

export interface Product {
  /** The URL segment of the product detail page, e.g. /urunler/e-imza/ and /en/products/e-imza/. */
  slug: string;
  /**
   * Flagship products get a large card with a screenshot on the home page; the rest go into the numbered list.
   * Kept to a few so the section stays short now that almost every product has a page.
   */
  featured?: boolean;
  name: Record<Lang, string>;
  summary: Record<Lang, string>;
  /** The long-form copy for the detail page. Products without it are listed but have no page or link. */
  detail?: Record<Lang, ProductDetail>;
}

// The order here is the order on the page, featured products first so the cards sit above the list.
export const products: Product[] = [
  {
    slug: 'e-imza',
    featured: true,
    name: { tr: 'Kolay Elektronik İmza', en: 'Easy E-Signature' },
    summary: {
      tr: 'Evrakı gönderin, yönetici telefonundan tek tıkla imzalasın; KEP ile iletilsin.',
      en: 'Send the document, let the manager sign it on their phone in one tap, and deliver it via KEP.',
    },
    detail: eImza,
  },
  {
    slug: 'satinalma',
    featured: true,
    name: { tr: 'Satınalma ve Tedarik Zinciri', en: 'Procurement and Supply Chain' },
    summary: {
      tr: 'Talepten onaya, tekliften muhasebeye kadar satınalma tek yerde.',
      en: 'Procurement in one place, from request and approval to quotes and accounting.',
    },
    detail: satinalma,
  },
  {
    slug: 'saha-yonetimi',
    featured: true,
    name: { tr: 'Saha Yönetimi', en: 'Field Operations' },
    summary: {
      tr: 'Arıza bildirilir, ekip atanır, iş fotoğrafla kapanır; hepsi ofisten canlı görünür.',
      en: 'Faults are reported, crews assigned and jobs closed with a photo, all visible live from the office.',
    },
    detail: sahaYonetimi,
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
    slug: 'depo-yonetimi',
    name: { tr: 'Depo Yönetimi', en: 'Warehouse Management' },
    summary: {
      tr: 'Depoda ve sahada ne var, ne bitti, kim ne aldı; canlı stok ve otomatik uyarı.',
      en: 'Live stock in the warehouse and the field, with automatic low-stock alerts.',
    },
    detail: depoYonetimi,
  },
  {
    slug: 'insan-kaynaklari',
    name: { tr: 'İnsan Kaynakları ve Puantaj', en: 'HR and Timesheets' },
    summary: {
      tr: 'Telefondan izin talebi ve onayı, ay sonunda kendiliğinden hazırlanan puantaj.',
      en: 'Leave requested and approved on the phone, timesheets that prepare themselves.',
    },
    detail: insanKaynaklari,
  },
  {
    slug: 'kalite-yonetimi',
    name: { tr: 'Kalite Yönetimi', en: 'Quality Management' },
    summary: {
      tr: 'ISO belgeleri tek yerde ve güncel; denetçi ne isterse 5 saniyede önünde.',
      en: 'ISO documents in one place and always current, ready for the auditor in seconds.',
    },
    detail: kaliteYonetimi,
  },
  {
    slug: 'crm',
    name: { tr: 'Müşteri ve Katılımcı Yönetimi (CRM)', en: 'Customer and Member Management (CRM)' },
    summary: {
      tr: 'OSB\'de katılımcı, kurumda müşteri; her görüşme, söz ve ödeme tek kartta.',
      en: 'Members in an industrial zone, customers in a company: every call, promise and payment on one card.',
    },
    detail: crm,
  },
  {
    slug: 'entegrasyon',
    name: { tr: 'Faturalama ve Sistem Entegrasyonu', en: 'Billing and System Integration' },
    summary: {
      tr: 'Mevcut muhasebe programınıza bağlanır; fatura, borç takibi ve KEP ile resmi yazı.',
      en: 'Connects to your accounting software for invoicing, debt tracking and formal notices via KEP.',
    },
    detail: entegrasyon,
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
