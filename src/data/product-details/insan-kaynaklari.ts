import type { Lang } from '../../i18n/ui';
import type { ProductDetail } from './types';

// Source: Ahmet Paçacı's "COLAB web page.docx" (19.11.2026).

export const insanKaynaklari: Record<Lang, ProductDetail> = {
  tr: {
    tagline: 'İzin kağıdı aramak, puantaj için ay sonunu beklemek bitiyor.',
    problem: [
      'İK işi genelde şöyle yürür: Personel izin ister, kağıda yazar, amir aranır, kağıt kaybolur. Ay sonu gelince muhasebe "Puantaj nerede?" diye sorar, herkes Excel toplar.',
    ],
    solution: [
      'COLAB İK ile hepsi telefondan veya bilgisayardan yürür. Personel yıllık, ücretli ya da ücretsiz izin için telefondan talep açar. Amire anında bildirim düşer, amir tek tıkla onaylar ya da reddeder. İzin formu otomatik oluşur ve imzalı olarak arşive kalkar.',
      'Giriş-çıkış bilgileri personel giriş-çıkış cihazından otomatik gelir: kim kaçta geldi, kaçta çıktı, geç kaldı mı. Ay sonunda puantaj kendiliğinden hazırdır. Elle toplama, hata ve tartışma yok.',
    ],
    note: 'Personel izin için İK\'nın kapısında beklemez, amir de kağıt imzalamak için ofise dönmez. Herkes telefonundan veya bilgisayarından halleder.',
    steps: [
      { title: 'Talep et', text: 'Personel telefondan veya bilgisayardan yıllık, ücretli ya da ücretsiz izin talebi açar.' },
      { title: 'Onayla', text: 'Talep amire anında düşer. Tek tıkla onaylar, form otomatik oluşur.' },
      { title: 'Takip et', text: 'Kimin ne kadar izni kaldığı tek ekranda görünür.' },
      { title: 'Puantajı al', text: 'Ay sonunda puantaj otomatik oluşur, muhasebeye hazır gönderilir.' },
    ],
    gains: [
      { label: 'İzin onayı', value: 'Günlerden dakikalara' },
      { label: 'İzin formu', value: 'Otomatik oluşur, kaybolmaz' },
      { label: 'Puantaj hazırlama', value: '2 günden 5 dakikaya' },
      { label: '"Ben izinliydim" tartışması', value: 'Sıfır, hepsi kayıtlı' },
    ],
    start: { analysis: 'Ekibinizle görüşerek İK düzeninizi görüyoruz.', setup: 'Ekibinize uygulama kurmadan, linkle çalışan sistemi kuruyoruz.' },
    closing: 'Gelin, sizin kurumunuzda veya firmanızda da 2 günde analiz yapalım, sürecin nasıl canlı görüneceğini birlikte gösterelim.',
  },
  en: {
    tagline: 'No more chasing leave forms or waiting for month-end timesheets.',
    problem: [
      'HR usually works like this: someone wants a day off, writes it on paper, the manager has to be tracked down, and the form gets lost. At month-end accounting asks for the timesheet and everyone starts adding up spreadsheets.',
    ],
    solution: [
      "With COLAB HR it all happens on a phone or computer. Staff request annual, paid or unpaid leave from their phone. The manager is notified instantly and approves or rejects it in one tap. The leave form is created automatically and filed, signed, in the archive.",
      'Clock-in and clock-out times come straight from the time-recording device: who arrived when, who left when, who was late. At month-end the timesheet is ready on its own. No manual tallying, no errors, no arguments.',
    ],
    note: 'Nobody queues outside HR to ask for leave, and no manager has to come back to the office to sign a form.',
    steps: [
      { title: 'Request', text: 'Staff request annual, paid or unpaid leave from a phone or computer.' },
      { title: 'Approve', text: 'The manager gets it instantly and approves in one tap; the form is created automatically.' },
      { title: 'Track', text: 'Remaining leave for everyone is visible on one screen.' },
      { title: 'Get the timesheet', text: 'At month-end the timesheet is generated and ready for accounting.' },
    ],
    gains: [
      { label: 'Leave approval', value: 'Days to minutes' },
      { label: 'Leave forms', value: 'Created automatically, never lost' },
      { label: 'Timesheet preparation', value: '2 days to 5 minutes' },
      { label: '"I was on leave that day" disputes', value: 'Zero, it is all on record' },
    ],
    start: { analysis: 'We talk to your team and see how HR works today.', setup: 'We set up a system your team opens from a link, with no app to install.' },
    closing: 'Let us spend two days analysing your organisation and show you together what a live view of the process looks like.',
  },
};
