import type { Lang } from '../i18n/ui';

export interface Service {
  name: Record<Lang, string>;
  summary: Record<Lang, string>;
}

export const services: Service[] = [
  {
    name: { tr: 'Dijital Dönüşüm Danışmanlığı', en: 'Digital Transformation Consulting' },
    summary: {
      tr: 'Dijitalleşme seviyenizi ölçüyor, strateji ve yol haritanızı birlikte çiziyoruz.',
      en: 'We assess where you stand digitally and draw up the strategy and roadmap with you.',
    },
  },
  {
    name: { tr: 'Yazılım Geliştirme', en: 'Software Development' },
    summary: {
      tr: 'Kurumsal yazılımları geliştiriyor, mevcut sistemlerinizle entegre ediyor ve bakımını yapıyoruz.',
      en: 'We build enterprise software, integrate it with your existing systems and maintain it.',
    },
  },
  {
    name: { tr: 'Mobil Uygulama Geliştirme', en: 'Mobile App Development' },
    summary: {
      tr: 'İş ihtiyaçlarınıza uygun mobil uygulamalar tasarlıyor ve geliştiriyoruz.',
      en: 'We design and build mobile apps that fit the way your business works.',
    },
  },
  {
    name: { tr: 'Proje ve Süreç Yönetimi', en: 'Project and Process Management' },
    summary: {
      tr: 'Süreçlerinizi analiz ediyor, verimliliği artıracak iyileştirmeleri hayata geçiriyoruz.',
      en: 'We analyse your processes and put improvements in place that make them more efficient.',
    },
  },
  {
    name: { tr: 'İş Danışmanlığı', en: 'Business Consulting' },
    summary: {
      tr: 'İş hedeflerinizle uyumlu teknolojik çözümleri araştırıyor ve öneriyoruz.',
      en: 'We research and recommend technology that matches your business goals.',
    },
  },
  {
    name: { tr: 'Veri Yönetimi', en: 'Data Management' },
    summary: {
      tr: 'Kurumsal verilerinizi güvenilir ve verimli şekilde yönetmenizi sağlıyoruz.',
      en: 'We help you manage company data reliably and efficiently.',
    },
  },
];
