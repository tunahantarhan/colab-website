import { type Lang, trAblative } from '../i18n/ui';

// Company facts that are the same in every language.
// When a CMS is added later, this is the file it should take over.

export const company = {
  // NOT CONFIRMED YET: management describes COLAB as a ten-year-old company, so 2016 is a stand-in.
  // Every "since ..." and "... years" on the site is derived from this one value.
  foundedYear: 2016,
  email: 'info@colab.com.tr',
  phone: '+90 549 686 26 00',
  // The tel: link needs the number without spaces.
  phoneHref: 'tel:+905496862600',
  addressLines: ['Veko Giz Plaza No:83, Meydan Sk.', 'Maslak, Sarıyer / İstanbul'],
  linkedin: 'https://www.linkedin.com/company/colab-bilisim-ve-danismanlik-hizmetleri/',
};

/** Full years since founding, so the "10 years" claim updates itself every January. */
export const yearsActive = new Date().getFullYear() - company.foundedYear;

/** The values every "since ..." sentence needs, ready to pass to the translator. */
export const foundingVars = {
  year: company.foundedYear,
  yearFrom: trAblative(company.foundedYear),
  years: yearsActive,
};

export interface Stat {
  /** The big figure. Values in square brackets are placeholders we still need real numbers for. */
  value: string;
  label: Record<Lang, string>;
}

// The figures band under the hero. Only the first two are known facts; the rest wait for numbers from management.
export const stats: Stat[] = [
  {
    value: `${yearsActive}+`,
    label: { tr: `yıllık deneyim, ${foundingVars.yearFrom} beri`, en: `years of experience, since ${company.foundedYear}` },
  },
  { value: '10', label: { tr: 'kurumsal ürün', en: 'enterprise products' } },
  { value: '[X]+', label: { tr: 'tamamlanan proje', en: 'projects delivered' } },
  { value: '[X]+', label: { tr: 'aktif kullanıcı', en: 'active users' } },
];
