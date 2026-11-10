import type { Lang } from '../i18n/ui';

export interface Product {
  /** Used later as the URL segment of the product detail page, e.g. /urunler/e-imza. */
  slug: string;
  /** Featured products get a card with a screenshot on the home page; the rest go into the numbered list. */
  featured: boolean;
  name: Record<Lang, string>;
  summary: Record<Lang, string>;
}

// The order here is the order on the page. Only the first three have detailed copy on the old site,
// which is why they are the featured ones for now.
export const products: Product[] = [
  {
    slug: 'e-imza',
    featured: true,
    name: { tr: 'Kolay Elektronik İmza', en: 'Easy E-Signature' },
    summary: {
      tr: 'Belgeyi hazırlayın, onaya gönderin, e-imzalayın ve KEP ile iletin.',
      en: 'Prepare a document, route it for approval, e-sign it and send it via registered e-mail (KEP).',
    },
  },
  {
    slug: 'dijital-arsiv',
    featured: true,
    name: { tr: 'Dijital Arşiv', en: 'Digital Archive' },
    summary: {
      tr: 'Tüm belgeler tek platformda; arama, tarihçe ve yetkilendirme.',
      en: 'Every document on one platform, with search, history and access control.',
    },
  },
  {
    slug: 'satinalma',
    featured: true,
    name: { tr: 'Satınalma ve Tedarik Zinciri', en: 'Procurement and Supply Chain' },
    summary: {
      tr: 'Talepten siparişe, tedarikçi teklifleri dahil uçtan uca satınalma.',
      en: 'End-to-end procurement from request to order, supplier quotes included.',
    },
  },
  {
    slug: 'osb-surec-yonetimi',
    featured: false,
    name: { tr: 'OSB İş ve Süreç Yönetimi', en: 'OIZ Business and Process Management' },
    summary: {
      tr: 'Organize sanayi bölgeleri için iş ve süreç yönetimi.',
      en: 'Business and process management for organised industrial zones.',
    },
  },
  {
    slug: 'insan-kaynaklari',
    featured: false,
    name: { tr: 'İnsan Kaynakları', en: 'Human Resources' },
    summary: { tr: 'Personel süreçleri tek yerde.', en: 'All personnel processes in one place.' },
  },
  {
    slug: 'depo-yonetimi',
    featured: false,
    name: { tr: 'Depo Yönetimi', en: 'Warehouse Management' },
    summary: { tr: 'Stok ve depo hareketleri anlık.', en: 'Stock and warehouse movements in real time.' },
  },
  {
    slug: 'crm',
    featured: false,
    name: { tr: 'CRM', en: 'CRM' },
    summary: { tr: 'Müşteri ilişkileri ve satış takibi.', en: 'Customer relationships and sales tracking.' },
  },
  {
    slug: 'is-yonetimi',
    featured: false,
    name: { tr: 'İş Yönetimi', en: 'Work Management' },
    summary: { tr: 'Görev ve süreç takibi.', en: 'Task and process tracking.' },
  },
  {
    slug: 'kalite-yonetimi',
    featured: false,
    name: { tr: 'Kalite Yönetimi', en: 'Quality Management' },
    summary: { tr: 'Kalite süreçleri ve denetim takibi.', en: 'Quality processes and audit tracking.' },
  },
  {
    slug: 'performans-yonetimi',
    featured: false,
    name: { tr: 'Performans Yönetimi', en: 'Performance Management' },
    summary: { tr: 'Hedef ve performans değerlendirme.', en: 'Goals and performance reviews.' },
  },
];
