// All interface copy lives here so both languages stay in sync.
// Long-form content such as products and services lives under src/data instead.

export const languages = { tr: 'Türkçe', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'tr';

export const ui = {
  tr: {
    'meta.title': 'COLAB | Kurumsal Yazılım ve Dijital Dönüşüm',
    'meta.description':
      'Satınalmadan e-imzaya, insan kaynaklarından dijital arşive; kurumlar ve organize sanayi bölgeleri için uyarlanabilir yazılımlar ve danışmanlık.',
    'brand.legalName': 'COLAB Bilişim ve Danışmanlık Hizmetleri',

    'nav.products': 'Ürünler',
    'nav.services': 'Hizmetler',
    'nav.about': 'Hakkımızda',
    'nav.contact': 'İletişim',
    'nav.menu': 'Menü',
    'nav.close': 'Menüyü kapat',
    'nav.switchLang': 'English',
    'cta.demo': 'Demo talep et',
    'skip': 'İçeriğe geç',

    'hero.eyebrow': '{yearFrom} beri kurumsal yazılım ve dijital dönüşüm',
    'hero.title': 'İş süreçlerinizi tek platformda yönetin',
    'hero.lead':
      'Satınalmadan e-imzaya, insan kaynaklarından dijital arşive; kurumların ve organize sanayi bölgelerinin ihtiyacına göre geliştirilen hazır ve uyarlanabilir yazılımlar.',
    'hero.primary': 'Ürünleri inceleyin',
    'hero.secondary': 'Görüşme planlayın',
    'hero.screenshot': 'OSB İş ve Süreç Yönetimi paneli ekran görüntüsü',

    'stats.title': 'Rakamlarla COLAB',

    'products.label': 'Ürünler',
    'products.title': 'Kurumunuza göre uyarlanan on uygulama.',
    'products.lead': 'Hepsi mobil uyumlu, birbiriyle entegre çalışır.',
    'products.screenshot': 'Ekran görüntüsü',

    'services.label': 'Hizmetler',
    'services.title': 'Analizden canlıya alıma kadar yanınızdayız.',

    'about.label': 'Hakkımızda',
    'about.statement':
      '{yearFrom} bu yana, {years} yıldır firmaların dijitalleşmesine katkı sağlıyoruz. Bugün hedefimiz, yapay zekâ çalışmalarıyla bir Ar-Ge merkezi olmak.',
    'about.body':
      'Kurum içi süreçleri birbirine entegre ederken müşterileri, tedarikçileri ve bayileri de aynı sisteme dahil eden çözümler geliştiriyoruz.',
    'about.values': 'Müşteri odaklı|Dinamik|Yenilikçi|Araştırmacı',
    'about.more': 'Hikayemizi okuyun',

    'contact.label': 'İletişim',
    'contact.lead': 'İhtiyacınızı dinleyelim, size uygun ürünü veya çözümü birlikte belirleyelim.',

    'footer.pages': 'Sayfalar',
    'footer.address': 'Adres',
    'footer.kvkk': 'KVKK Aydınlatma Metni',
    'footer.cookies': 'Çerez Politikası',
  },
  en: {
    'meta.title': 'COLAB | Enterprise software and digital transformation',
    'meta.description':
      'From procurement to e-signature, HR to digital archiving: adaptable software and consulting for companies and organised industrial zones.',
    'brand.legalName': 'COLAB IT and Consulting Services',

    'nav.products': 'Products',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.close': 'Close menu',
    'nav.switchLang': 'Türkçe',
    'cta.demo': 'Request a demo',
    'skip': 'Skip to content',

    'hero.eyebrow': 'Enterprise software and digital transformation since {year}',
    'hero.title': 'Run your business processes on one platform',
    'hero.lead':
      'From procurement to e-signature, HR to digital archiving: ready-to-use, adaptable software built for companies and organised industrial zones.',
    'hero.primary': 'Explore products',
    'hero.secondary': 'Book a meeting',
    'hero.screenshot': 'Screenshot of the OIZ Business and Process Management dashboard',

    'stats.title': 'COLAB in numbers',

    'products.label': 'Products',
    'products.title': 'Ten applications tailored to your organisation.',
    'products.lead': 'All of them work on mobile and integrate with each other.',
    'products.screenshot': 'Screenshot',

    'services.label': 'Services',
    'services.title': 'With you from analysis to go-live.',

    'about.label': 'About us',
    'about.statement':
      'For {years} years, since {year}, we have been helping companies go digital. Today our goal is to become an R&D centre through our work in artificial intelligence.',
    'about.body':
      'We build solutions that connect internal processes and bring customers, suppliers and dealers into the same system.',
    'about.values': 'Customer-focused|Dynamic|Innovative|Research-driven',
    'about.more': 'Read our story',

    'contact.label': 'Contact',
    'contact.lead': "Tell us what you need and we'll find the right product or solution together.",

    'footer.pages': 'Pages',
    'footer.address': 'Address',
    'footer.kvkk': 'Privacy Notice',
    'footer.cookies': 'Cookie Policy',
  },
} as const;

export type UiKey = keyof (typeof ui)['tr'];

// Anchor ids of the home page sections, localised so the URL reads naturally (e.g. /#urunler vs /en/#products).
export const sectionIds = {
  tr: { products: 'urunler', services: 'hizmetler', about: 'hakkimizda', contact: 'iletisim' },
  en: { products: 'products', services: 'services', about: 'about', contact: 'contact' },
} as const satisfies Record<Lang, Record<string, string>>;

/**
 * Returns a translator bound to one language, falling back to Turkish if a key is missing.
 * Strings may contain placeholders such as {year}; pass their values as the second argument.
 */
export function useTranslations(lang: Lang) {
  return (key: UiKey, vars: Record<string, string | number> = {}): string => {
    const text: string = ui[lang][key] ?? ui[defaultLang][key];
    return text.replace(/\{(\w+)\}/g, (match, name: string) => (name in vars ? String(vars[name]) : match));
  };
}

/**
 * Adds the Turkish ablative suffix to a year, e.g. 2016 → "2016'dan", 2015 → "2015'ten", 2020 → "2020'den".
 * The suffix follows how the number is spoken, so it depends on the last non-zero part of the year.
 */
export function trAblative(n: number): string {
  const ones = ['', 'den', 'den', 'ten', 'ten', 'ten', 'dan', 'den', 'den', 'dan'];
  const tens = ['', 'dan', 'den', 'dan', 'tan', 'den', 'tan', 'ten', 'den', 'dan'];
  let suffix = ones[n % 10];
  if (!suffix) suffix = tens[Math.floor(n / 10) % 10];
  // Round hundreds and thousands ("yüz", "bin") both take "-den".
  if (!suffix) suffix = 'den';
  return `${n}'${suffix}`;
}

/**
 * Prefixes a root-relative path with the site's base path, so links keep working
 * when the site is served from a sub-folder such as the GitHub Pages preview.
 */
export function withBase(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}

/** Builds a path for the given language. Turkish lives at the root, English under /en. */
export function localePath(lang: Lang, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return withBase(lang === defaultLang ? clean : `/${lang}${clean === '/' ? '/' : clean}`);
}
