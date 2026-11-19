import type { Lang } from '../../i18n/ui';
import type { ProductDetail } from './types';

// Source: Ahmet Paçacı's "COLAB web page.docx" (19.11.2026), section "Mevcut Sistemlerinizle Tam Entegrasyon".
// The document's "Nasıl Çalışıyor?" list describes the building blocks, so it is shown as modules;
// "Nasıl kullanacaksınız?" becomes the steps. The document lists no measurable gains for this one.

export const entegrasyon: Record<Lang, ProductDetail> = {
  tr: {
    kicker: 'Mevcut sistemlerinizle tam entegrasyon',
    tagline: 'Kullandığınız programları değiştirmiyoruz. Onlara bağlanıyoruz.',
    problem: [
      'Kurumların ve OSB\'lerin en büyük korkusu şudur: "Yeni program alırsak eski program ne olacak? İki kere mi yazacağız?"',
      'Cevabımız net: Hayır, iki kere yazmayacaksınız.',
    ],
    solution: [
      'COLAB kullandığınız tüm sistemlere bağlanır. Siz işinizi COLAB\'da yaparsınız, bilgiler diğer sistemlere otomatik gider.',
      'Fatura COLAB\'da hesaplanır ve muhasebe sistemine otomatik düşer. Borcu olanı sistem takip eder, SMS ve e-posta ile hatırlatır, gerekirse KEP üzerinden resmi yazıyı gönderir. Siz kimseyi aramak zorunda kalmazsınız.',
    ],
    note: 'Eski sisteminizi bırakmayın. Biz COLAB\'ı onun üzerine bağlıyoruz. Siz işinize bakın, evrak işini sistem yapsın.',
    modules: [
      {
        title: 'Fatura hesaplama ve muhasebe aktarımı',
        text: 'Proje bedeli, kira, aidat, su, elektrik. Hangi fatura olursa COLAB\'da hesaplanır ve muhasebe programınıza otomatik aktarılır. Tekrar giriş yok, hata yok.',
      },
      {
        title: 'Borç takibi',
        text: 'Kimin ne kadar borcu var, kaç gündür ödenmemiş. Ödenmeyen borçları sistem izler, tek ekranda görürsünüz.',
      },
      {
        title: 'KEP üzerinden resmi yazı',
        text: 'Borç belli bir günü geçince sistem resmi yazıyı hazırlar ve KEP üzerinden gönderir. Yazı yasal olarak tebliğ edilmiş sayılır.',
      },
      {
        title: 'Tedarikçi ödemeleri',
        text: 'Tedarikçi ödemeleri muhasebe sisteminden alınır, ilgili bölümlerin onayından geçer ve tekrar muhasebe sistemine aktarılır.',
      },
    ],
    steps: [
      { title: 'Hesapla', text: 'Aidat, fatura, borç. Kesilecek tüm faturalar COLAB\'da hesaplanır.' },
      { title: 'Aktar', text: 'Muhasebe sisteminize otomatik düşer. Tekrar giriş yok.' },
      { title: 'Takip et', text: 'Ödenmeyen borçları sistem izler ve size listeler.' },
      { title: 'Hatırlat ve gönder', text: 'Önce SMS ve e-posta ile hatırlatır, sonra KEP ile resmi yazıyı gönderir.' },
    ],
    start: { analysis: 'Ekibinizle görüşerek çalışma düzeninizi ve kullandığınız sistemleri görüyoruz.', setup: 'COLAB\'ı mevcut sistemlerinize bağlıyor, ekibinize uygulama kurmadan linkle çalışır hale getiriyoruz.' },
    closing: 'Gelin, sizin kurumunuzda veya firmanızda da 2 günde analiz yapalım, sürecin nasıl canlı görüneceğini birlikte gösterelim.',
  },
  en: {
    kicker: 'Works with the systems you already have',
    tagline: "We don't replace the software you use. We connect to it.",
    problem: [
      'The biggest worry for any organisation is this: "If we buy new software, what happens to the old one? Will we have to enter everything twice?"',
      'Our answer is simple: no, you will not.',
    ],
    solution: [
      'COLAB connects to every system you use. You do your work in COLAB and the data flows to the other systems automatically.',
      'Invoices are calculated in COLAB and posted to your accounting system automatically. The system tracks who owes what, sends reminders by SMS and email and, if needed, sends the formal notice via KEP. You never have to chase anyone by phone.',
    ],
    note: "Keep your existing system. We connect COLAB on top of it, so you can focus on your work and let the system handle the paperwork.",
    modules: [
      {
        title: 'Invoicing and accounting transfer',
        text: 'Project fees, rent, dues, water, electricity. Whatever the invoice, it is calculated in COLAB and transferred to your accounting software. No re-keying, no errors.',
      },
      {
        title: 'Debt tracking',
        text: 'Who owes how much and for how many days. The system watches unpaid balances and shows them on one screen.',
      },
      {
        title: 'Formal notices via KEP',
        text: "Once a debt passes a set date, the system prepares the formal notice and sends it via KEP, Turkey's registered email service, where it counts as legally served.",
      },
      {
        title: 'Supplier payments',
        text: 'Supplier payments are taken from the accounting system, approved by the relevant departments and sent back to accounting.',
      },
    ],
    steps: [
      { title: 'Calculate', text: 'Dues, invoices, debts. Every invoice to be issued is calculated in COLAB.' },
      { title: 'Transfer', text: 'It lands in your accounting system automatically. No re-keying.' },
      { title: 'Track', text: 'The system watches unpaid balances and lists them for you.' },
      { title: 'Remind and notify', text: 'First a reminder by SMS and email, then the formal notice via KEP.' },
    ],
    start: { analysis: 'We talk to your team and look at how you work and which systems you use.', setup: 'We connect COLAB to your existing systems, ready to use from a link with no app to install.' },
    closing: 'Let us spend two days analysing your organisation and show you together what a live view of the process looks like.',
  },
};
