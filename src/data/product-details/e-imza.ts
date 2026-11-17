import type { Lang } from '../../i18n/ui';
import type { ProductDetail } from './types';

// Source: Ahmet Paçacı's product copy (16.11.2026). E-signature, document tracking and the archive were written
// as one block with shared gains; each page keeps the gains that belong to it.

export const eImza: Record<Lang, ProductDetail> = {
  tr: {
    tagline: 'İmza için kimseyi beklemeyin. Evrakı gönderin, telefondan imzalansın.',
    problem: ['Kurumlarda ve firmalarda en çok zaman imzada kaybolur. COLAB E-İmza ile bu zaman kaybına son veriyoruz.'],
    solution: [
      'Evrak sistemde oluşur, imza sırasına girer ve yöneticinin telefonuna düşer. Yönetici ister ofiste, ister sahada, ister evde olsun, tek tıkla imzalar.',
      'İmzalanan evrak otomatik olarak arşive kalkar, ilgilisine bildirim gider ve KEP üzerinden gönderimi yapılır.',
    ],
    steps: [
      { title: 'Oluştur', text: 'Evrak sistemde hazırlanır ve imza sırasına girer.' },
      { title: 'İmzala', text: 'Sırası gelen yöneticinin telefonuna düşer, tek tıkla imzalanır.' },
      { title: 'Arşivle', text: 'İmzalanan evrak otomatik olarak arşive kalkar.' },
      { title: 'Gönder', text: 'İlgilisine bildirim gider, evrak KEP üzerinden iletilir.' },
    ],
    gains: [
      { label: 'Evrak imza süresi', value: '3 günden 10 dakikaya' },
      { label: 'Kayıp evrak riski', value: 'Sıfır' },
    ],
  },
  en: {
    tagline: "Don't wait on anyone for a signature. Send the document and get it signed on a phone.",
    problem: [
      'In most organisations, signatures are where the time goes. COLAB E-Signature puts an end to that wait.',
    ],
    solution: [
      "The document is created in the system, joins the signing queue and lands on the manager's phone. Whether they are in the office, out in the field or at home, they sign it in one tap.",
      'Signed documents are archived automatically, the people concerned are notified, and the document is sent via KEP, the Turkish registered e-mail service.',
    ],
    steps: [
      { title: 'Create', text: 'The document is prepared in the system and joins the signing queue.' },
      { title: 'Sign', text: 'It reaches the next manager in line on their phone and is signed in one tap.' },
      { title: 'Archive', text: 'The signed document is filed in the archive automatically.' },
      { title: 'Send', text: 'Everyone concerned is notified and the document goes out via KEP.' },
    ],
    gains: [
      { label: 'Time to sign a document', value: '3 days to 10 minutes' },
      { label: 'Risk of losing a document', value: 'Zero' },
    ],
  },
};
