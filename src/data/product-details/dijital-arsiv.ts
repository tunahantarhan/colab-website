import type { Lang } from '../../i18n/ui';
import type { ProductDetail } from './types';

// Source: Ahmet Paçacı's product copy (16.11.2026), where this product is called "E-Arşiv".
// The site keeps "Dijital Arşiv" for now because "e-Arşiv" is also the name of the e-invoice archive
// in Turkey; the final name is an open question.

export const dijitalArsiv: Record<Lang, ProductDetail> = {
  tr: {
    tagline: 'Dosya aramakla uğraşmayın, aradığınız evrakı saniyeler içinde bulun.',
    problem: [
      'Kurumlara ve firmalara gelen evraklar arasında geçmiş bir kaydı aramak çok zaman alır. Burada sorun personelinizde değil, sisteminizdedir.',
    ],
    solution: [
      'Aradığınız evrakı tek sayfada, konusuna ya da kurum veya firmasına göre arar ve saniyesinde bulursunuz. Bulduğunuz kayıtta ne istendiğini ve ne cevap verildiğini de hemen görürsünüz.',
      'Kaydın fiziksel dokümanına ihtiyaç duyarsanız, dokümanın nerede durduğu bilgisine de kolayca ulaşırsınız.',
    ],
    steps: [
      { title: 'Ara', text: 'Konuya, kuruma veya firmaya göre tek sayfadan arayın.' },
      { title: 'Bul', text: 'Kayıt saniyeler içinde karşınıza gelir.' },
      { title: 'Gör', text: 'Ne istendiğini ve ne cevap verildiğini aynı ekranda görün.' },
      { title: 'Ulaş', text: 'Fiziksel doküman gerekirse nerede durduğunu öğrenin.' },
    ],
    gains: [
      { label: 'Evrak bulma süresi', value: '1 saatten 5 saniyeye' },
      { label: 'Kayıp evrak riski', value: 'Sıfır' },
    ],
  },
  en: {
    tagline: 'Stop digging through files. Find the document you need in seconds.',
    problem: [
      'Looking for an old record among everything an organisation receives takes far too long. The problem is not your staff, it is your system.',
    ],
    solution: [
      "Search a single page by subject, organisation or company and find the document instantly. The record also shows what was asked and how it was answered.",
      'If you need the paper original, you can see straight away where it is kept.',
    ],
    steps: [
      { title: 'Search', text: 'Search one page by subject, organisation or company.' },
      { title: 'Find', text: 'The record comes up in seconds.' },
      { title: 'Review', text: 'See what was asked and how it was answered on the same screen.' },
      { title: 'Locate', text: 'If you need the paper original, see where it is kept.' },
    ],
    gains: [
      { label: 'Time to find a document', value: '1 hour to 5 seconds' },
      { label: 'Risk of losing a document', value: 'Zero' },
    ],
  },
};
