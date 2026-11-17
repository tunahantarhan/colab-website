import type { Lang } from '../../i18n/ui';
import type { ProductDetail } from './types';

// Source: Ahmet Paçacı's product copy (16.11.2026).

export const satinalma: Record<Lang, ProductDetail> = {
  tr: {
    kicker: 'Muhasebe sistemlerine entegre',
    tagline: 'Kim ne istedi, kim onayladı, ne kadar ödendi. Hepsi tek yerde.',
    problem: [
      'Kurum ve firmalarda satınalma hep aynı yerde tıkanır. Biri malzeme ister, onay kağıtla dolaşır, alım yapılır. Fatura muhasebeye bir hafta sonra gider ve orada bir kez daha işlenir.',
    ],
    solution: [
      'Personel sistemden talep açar ve belirlenen onay sırası otomatik başlar. Son onaydan sonra talep satınalmaya düşer, tedarikçi teklifleri toplanır ve onaylanır.',
      'Onaylanan teklif muhasebe sisteminde de otomatik olarak açılır. Fatura veya irsaliye girildiğinde muhasebe sistemine otomatik aktarılır. Aynı işi iki kez yapmak zorunda kalmazsınız.',
    ],
    note: "Mevcut muhasebe programınızı değiştirmiyoruz. COLAB'ı ona bağlıyoruz.",
    steps: [
      { title: 'Talep aç', text: 'Ofisten veya sahadan, telefon ya da bilgisayardan 1 dakikada talep oluşturun.' },
      { title: 'Onay ver', text: 'Onay sırası otomatik ilerler, yönetici telefondan veya bilgisayardan tek tıkla onaylar.' },
      { title: 'Teklif topla', text: 'Tedarikçi tekliflerini toplayın ve onayını tek tıkla alın.' },
      { title: 'Alımı yap', text: 'Onaylanan teklifin alımı yapılır; teklif ve sipariş tek yerde toplanır.' },
      { title: 'Muhasebeye aktar', text: 'İrsaliye veya fatura girilince muhasebe sistemine otomatik aktarılır, tekrar yazılmaz.' },
    ],
    modules: [
      {
        title: 'Satınalma',
        text: 'Kim ne istedi, kim onayladı, ne kadar alındı. Hepsi tek ekranda. "Bu alımı kim istedi?" sorusu bitiyor.',
      },
      {
        title: 'Depo',
        text: 'Depoda ne var, ne bitmek üzere, kim ne aldı. Canlı stok. Sayım zamanı dosya karıştırmıyorsunuz.',
      },
      {
        title: 'Muhasebe entegrasyonu',
        text: 'Mevcut muhasebe programınıza bağlanır. İrsaliye, fatura, ödeme ve kayıtlar otomatik eşleşir.',
      },
    ],
    gains: [
      { label: 'Onay süresi', value: 'Günlerden saatlere' },
      { label: 'Çift veri girişi', value: 'Sıfır' },
      { label: '"Bu fatura ödendi mi?" sorusu', value: 'Cevabı tek ekranda' },
      { label: 'Denetimde evrak arama', value: 'Bitiyor' },
    ],
  },
  en: {
    kicker: 'Integrated with your accounting system',
    tagline: 'Who asked for what, who approved it, how much was paid. All in one place.',
    problem: [
      'Procurement always gets stuck in the same place. Someone asks for materials, the approval goes round on paper, the purchase is made, and the invoice reaches accounting a week later, where it is keyed in all over again.',
    ],
    solution: [
      'Staff open a request in the system and the agreed approval chain starts automatically. After the final approval, the request moves to purchasing, where supplier quotes are collected and approved.',
      'The approved quote is opened in your accounting system automatically, and once the invoice or delivery note is entered, it is transferred there too. Nobody does the same work twice.',
    ],
    note: 'You keep your accounting software. We connect COLAB to it.',
    steps: [
      { title: 'Request', text: 'Raise a request in a minute from the office or the field, on a phone or a computer.' },
      { title: 'Approve', text: 'The approval chain runs automatically; managers approve in one tap on any device.' },
      { title: 'Collect quotes', text: 'Gather supplier quotes and get them approved in one tap.' },
      { title: 'Purchase', text: 'The approved quote is purchased, with quote and order kept together.' },
      { title: 'Post to accounting', text: 'Delivery notes and invoices flow into your accounting system automatically.' },
    ],
    modules: [
      {
        title: 'Procurement',
        text: 'Who asked for what, who approved it, how much was bought. All on one screen. No more "who ordered this?".',
      },
      {
        title: 'Warehouse',
        text: "What's in stock, what's running low, who took what. Live stock levels, so stocktaking no longer means digging through files.",
      },
      {
        title: 'Accounting integration',
        text: 'Connects to the accounting software you already use. Delivery notes, invoices, payments and records match up automatically.',
      },
    ],
    gains: [
      { label: 'Approval time', value: 'Days to hours' },
      { label: 'Duplicate data entry', value: 'Zero' },
      { label: '"Has this invoice been paid?"', value: 'Answered on one screen' },
      { label: 'Hunting for documents during audits', value: 'Gone' },
    ],
  },
};
