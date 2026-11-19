import type { Lang } from '../../i18n/ui';
import type { ProductDetail } from './types';

// Source: Ahmet Paçacı's "COLAB web page.docx" (19.11.2026).

export const depoYonetimi: Record<Lang, ProductDetail> = {
  tr: {
    tagline: 'Depoda ve sahada hangi malzeme var, hangisi bitti, kim ne aldı. Tek ekranda görün.',
    problem: [
      'Kurum ve firmaların temel sorunlarından biri malzemenin olmaması değil, nerede olduğunun bilinmemesidir.',
      'Depodan alınan malzemenin kaydı unutulur, stokta var sanılan malzeme rafta çıkmaz, sayım zamanı 2-3 gün kaybedilir. Ana deponun yanında sahaya çıkan stokun nerede ve ne zaman kullanıldığı ise hiç bilinmez.',
    ],
    solution: [
      'COLAB Depo Yönetimi ile malzeme giriş ve çıkışları kolayca yapılır. Malzeme alındığında ana depodaki stok adedi otomatik düşer ve stok sahaya aktarılır.',
      'Stok kritik seviyeye gelince sistem otomatik uyarı verir, isterseniz siparişi de kendisi oluşturur. Sayım zamanı dosya karıştırmak ve "Malzeme nerede?" diye sormak bitiyor.',
    ],
    steps: [
      { title: 'Giriş yap', text: 'Malzeme depoya gelince barkodla veya ekrandan 1 dakikada girin. Stok güncellenir, bilgi muhasebeye otomatik aktarılır.' },
      { title: 'Çıkış ver', text: 'Kim, ne zaman, neyi, nerede kullanmak için aldı; çıkış anında kaydedilir ve muhasebeye aktarılır.' },
      { title: 'Uyarı al', text: 'Kritik seviyeye gelen malzeme için sistem uyarır, isterseniz sipariş oluşturur. "Malzeme bitmiş, haberimiz yok" olmaz.' },
      { title: 'Sayım yap', text: 'Depoyu gezerken malzemeleri işaretleyin, sistemle aradaki farkı otomatik alın.' },
    ],
    gains: [
      { label: 'Sayım süresi', value: 'Günlerden dakikalara' },
      { label: '"Malzeme nerede?" sorusu', value: 'Cevabı tek ekranda' },
      { label: 'Kayıp kaçak', value: 'Kim ne aldı, saatine kadar belli' },
      { label: 'Stokta bağlanan para', value: 'Fazla alım bitiyor' },
    ],
    start: { analysis: 'Depoyu sizinle birlikte geziyor, iş düzeninizi görüyoruz.', setup: 'Ekibinize uygulama kurmadan, linkle çalışan sistemi kuruyoruz.' },
    closing: 'Gelin, sizin kurumunuzda veya firmanızda da 2 günde analiz yapalım, deponuzun nasıl canlı görüneceğini birlikte gösterelim.',
  },
  en: {
    tagline: "What's in the warehouse and in the field, what has run out, who took what. See it on one screen.",
    problem: [
      "For most organisations the problem isn't missing materials, it's not knowing where they are.",
      'Withdrawals go unrecorded, items the system says are in stock are not on the shelf, and stocktaking eats two or three days. Stock taken out to the field is never tracked at all.',
    ],
    solution: [
      'COLAB Warehouse Management makes goods in and goods out simple. When materials are taken, the main warehouse count drops automatically and the stock moves to the field.',
      'When an item reaches its critical level, the system alerts you and can raise the order itself. No more digging through files at stocktaking or asking where things are.',
    ],
    steps: [
      { title: 'Book in', text: 'Book deliveries in within a minute by barcode or on screen. Stock updates and the entry flows to accounting.' },
      { title: 'Issue', text: 'Who took what, when and for which job is recorded at the moment of issue and passed to accounting.' },
      { title: 'Get alerts', text: 'Items at critical level trigger an alert and, if you want, an automatic order. No more surprises.' },
      { title: 'Count', text: 'Tick items off as you walk the warehouse and get the difference from the system automatically.' },
    ],
    gains: [
      { label: 'Stocktaking time', value: 'Days to minutes' },
      { label: '"Where is that item?"', value: 'Answered on one screen' },
      { label: 'Shrinkage', value: 'Who took what, to the hour' },
      { label: 'Cash tied up in stock', value: 'No more over-buying' },
    ],
    start: { analysis: 'We walk the warehouse with you and see how your work is organised.', setup: 'We set up a system your team opens from a link, with no app to install.' },
    closing: 'Let us spend two days analysing your organisation and show you together what a live view of your warehouse looks like.',
  },
};
