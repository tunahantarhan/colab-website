import type { Lang } from '../../i18n/ui';
import type { ProductDetail } from './types';

// Source: Ahmet Paçacı's product copy (16.11.2026).

export const evrakTakibi: Record<Lang, ProductDetail> = {
  tr: {
    tagline: 'Evrak nerede, bilin.',
    problem: [
      'Kurumlara ve firmalara gelen evraklardan hangisinin cevap beklediğini, hangisinin takıldığını ve ne yapıldığını çoğu zaman kimse bilmez.',
    ],
    solution: [
      'COLAB Evrak Takibi ile her evrakın nerede olduğu canlı olarak görünür.',
      'Evrak sisteme düşer, ilgili personele atanır ve süresi başlar. Süresi geçen iş kırmızıya döner ve müdürün ekranına düşer. Kimse "Ben görmedim" diyemez.',
    ],
    steps: [
      { title: 'Kaydet', text: 'Gelen evrak sisteme düşer.' },
      { title: 'Ata', text: 'Evrak ilgili personele atanır ve süresi başlar.' },
      { title: 'Takip et', text: 'Her evrakın kimde olduğu ve ne durumda olduğu canlı görünür.' },
      { title: 'Uyar', text: 'Süresi geçen iş kırmızıya döner ve müdürün ekranına düşer.' },
    ],
    gains: [
      { label: '"Bu evrak bana gelmedi" bahanesi', value: 'Bitiyor' },
      { label: 'Kayıp evrak riski', value: 'Sıfır' },
    ],
  },
  en: {
    tagline: 'Know where every document is.',
    problem: [
      'Organisations receive documents every day, yet nobody can say which ones are waiting for a reply, which are stuck, or what has been done about them.',
    ],
    solution: [
      'With COLAB Document Tracking you can see live where every document is.',
      'A document enters the system, is assigned to the right person and its deadline starts running. Overdue items turn red and appear on the manager\'s screen. Nobody can say "I never saw it".',
    ],
    steps: [
      { title: 'Register', text: 'Incoming documents enter the system.' },
      { title: 'Assign', text: 'Each one is assigned to the right person and its deadline starts.' },
      { title: 'Track', text: 'You can see live who has each document and where it stands.' },
      { title: 'Alert', text: "Overdue items turn red and appear on the manager's screen." },
    ],
    gains: [
      { label: 'The "it never reached me" excuse', value: 'Gone' },
      { label: 'Risk of losing a document', value: 'Zero' },
    ],
  },
};
