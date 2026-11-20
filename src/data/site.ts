import { type Lang, trAblative } from '../i18n/ui';

// Company facts that are the same in every language.
// When a CMS is added later, this is the file it should take over.

export const company = {
  // The registered trade name and MERSIS number, from the Istanbul trade registry record.
  // The brand name in the footer (brand.legalName) is a separate, longer form.
  tradeName: 'COLAB Bilişim Hizmetleri Limited Şirketi',
  mersis: '0211070547400012',
  // NOT CONFIRMED YET: management describes COLAB as a ten-year-old company, so 2016 is a stand-in.
  // Every "since ..." and "... years" on the site is derived from this one value.
  foundedYear: 2016,
  email: 'info@colab.com.tr',
  phone: '+90 549 686 26 00',
  // The tel: link needs the number without spaces.
  phoneHref: 'tel:+905496862600',
  // Shown on two lines in the footer and joined into one line in running text such as the KVKK notice.
  addressLines: ['Esentepe Mahallesi, Büyükdere Caddesi, No: 199', '(Levent 199 Yan Giriş), Şişli / İstanbul'],
  // The same address split into fields, for the structured data search engines read.
  postalAddress: {
    streetAddress: 'Esentepe Mahallesi, Büyükdere Caddesi, No: 199 (Levent 199 Yan Giriş)',
    addressLocality: 'Şişli',
    addressRegion: 'İstanbul',
    postalCode: '34330',
    addressCountry: 'TR',
  },
  linkedin: 'https://www.linkedin.com/company/colab-bilisim-ve-danismanlik-hizmetleri/',
};

/**
 * Screenshots are switched off until the product interface gets its planned redesign.
 * The frames and placeholders stay in the code, so setting this back to true brings them all back:
 * the home page hero, the featured product cards and the product page heroes.
 */
export const showScreenshots = false;

/** Full years since founding, so the "10 years" claim updates itself every January. */
export const yearsActive = new Date().getFullYear() - company.foundedYear;

/** The values every "since ..." sentence needs, ready to pass to the translator. */
export const foundingVars = {
  year: company.foundedYear,
  yearFrom: trAblative(company.foundedYear),
  years: yearsActive,
};

export interface Stat {
  /** The big figure. */
  value: string;
  label: Record<Lang, string>;
}

// The figures band under the hero and on the About page. Product, project and user counts come from management (20.11.2026).
// The product figure counts every product COLAB has, not just the ones listed on the site.
export const stats: Stat[] = [
  {
    value: `${yearsActive}+`,
    label: { tr: `yıllık deneyim, ${foundingVars.yearFrom} beri`, en: `years of experience, since ${company.foundedYear}` },
  },
  { value: '20+', label: { tr: 'kurumsal ürün', en: 'enterprise products' } },
  { value: '100+', label: { tr: 'tamamlanan proje', en: 'projects delivered' } },
  { value: '5000+', label: { tr: 'aktif kullanıcı', en: 'active users' } },
];
