import type { Lang } from '../../i18n/ui';
import type { ProductDetail } from './types';

// Source: Ahmet Paçacı's "COLAB web page.docx" (19.11.2026).
// The same system serves industrial zones (members and tenants) and companies (customers); only the wording changes.

export const crm: Record<Lang, ProductDetail> = {
  tr: {
    kicker: 'OSB\'ler ve kurumlar için',
    tagline: 'Kim aradı, ne istedi, ne söz verildi, kime ne zaman dönülecek. Artık kimsenin aklında değil, sistemde.',
    problem: [
      'Müşteriyle ya da katılımcıyla ilgili bilgi çoğu zaman bir personelin aklında durur. O personel değişince ilişki de, verilen sözler de kaybolur.',
    ],
    solution: [
      'OSB iseniz müşteriniz değil, katılımcınız ve sanayiciniz var. Parsel sahibi kim, kiracısı kim, aidatını ödedi mi, ne talep etti, ne zaman aradı. Hepsi katılımcı kartında.',
      'Kurum iseniz müşteriniz var. Ne istedi, teklif ne oldu, görüşme ne zaman yapıldı, kime ne söz verildi. Hepsi müşteri kartında.',
    ],
    note: 'Sistem aynı, isim kurumunuza göre değişir: OSB\'de katılımcı, kurumda müşteri. Kimse unutulmaz, hiçbir iş havada kalmaz.',
    steps: [
      { title: 'Kartı aç', text: 'OSB\'de katılımcı kartı, kurumda müşteri kartı. Tüm bilgi tek kartta.' },
      { title: 'Görüşmeyi kaydet', text: 'Telefon, ziyaret, toplantı. 1 dakikada kaydedin, ne konuşulduğu unutulmaz.' },
      { title: 'Görev ata', text: '"Şu parsele bakılacak" ya da "Teklif gönderilecek". Kime atandıysa ona düşer.' },
      { title: 'Hatırlatma al', text: 'Söz verilen gün gelince sistem hatırlatır. "Unuttuk" olmaz.' },
    ],
    gains: [
      { label: '"O işi şu personel biliyordu"', value: 'Sıfır, hepsi kayıtta' },
      { label: 'Arama geçmişi', value: 'Kim, ne zaman, ne konuşuldu belli' },
      { label: 'Verilen sözler', value: 'Sistem hatırlatır' },
      { label: 'Geçmiş fatura ve ödemeler', value: 'Katılımcı veya müşteri bazında' },
    ],
    start: { analysis: 'Ekibinizle görüşerek çalışma düzeninizi görüyoruz.', setup: 'Ekibinize uygulama kurmadan, linkle çalışan sistemi kuruyoruz.' },
    closing: 'Gelin, sizin kurumunuzda veya firmanızda da 2 günde analiz yapalım, sürecin nasıl canlı görüneceğini birlikte gösterelim.',
  },
  en: {
    kicker: 'For industrial zones and companies',
    tagline: "Who called, what they wanted, what was promised, who to get back to and when. It lives in the system, not in someone's head.",
    problem: [
      "What you know about a customer or member often lives in one employee's head. When that person leaves, the relationship and every promise made go with them.",
    ],
    solution: [
      "If you run an industrial zone, you don't have customers, you have members and manufacturers. Who owns the plot, who rents it, whether the dues are paid, what they asked for, when they called. It is all on the member card.",
      'If you are a company, you have customers. What they asked for, what happened to the quote, when you last met, what was promised. It is all on the customer card.',
    ],
    note: 'One system, named the way your organisation works: members in an industrial zone, customers in a company. Nobody is forgotten and nothing is left hanging.',
    steps: [
      { title: 'Open the card', text: 'A member card in an industrial zone, a customer card in a company. Everything on one card.' },
      { title: 'Log the conversation', text: 'Calls, visits, meetings. Log them in a minute so nothing said is forgotten.' },
      { title: 'Assign a task', text: '"Check that plot" or "send the quote". It lands with whoever it is assigned to.' },
      { title: 'Get reminders', text: 'When a promised date comes round, the system reminds you.' },
    ],
    gains: [
      { label: '"Only one person knew about that"', value: 'Never again, it is all on record' },
      { label: 'Call history', value: 'Who, when and what was said' },
      { label: 'Promises', value: 'The system reminds you' },
      { label: 'Past invoices and payments', value: 'Per member or customer' },
    ],
    start: { analysis: 'We talk to your team and see how you work today.', setup: 'We set up a system your team opens from a link, with no app to install.' },
    closing: 'Let us spend two days analysing your organisation and show you together what a live view of the process looks like.',
  },
};
