import type { Lang } from '../i18n/ui';
import type { Gain, StartStepId, TitledText } from './product-details/types';

// Copy for the consulting page and the consulting intro in the home page's services section.
// Source: Ahmet Paçacı's "COLAB web page.docx" (19.11.2026), section "Sadece Yazılım Değil, Danışmanlık Hizmeti de Veriyoruz".
// The topic list was lightly edited so every item reads as a question; "TEAİŞ" in the document is spelled TEİAŞ here.

export const consultingPaths: Record<Lang, string> = { tr: '/danismanlik/', en: '/consulting/' };

export interface ConsultingCopy {
  /** The page name, used in the breadcrumb, the email subject and the browser title. */
  name: string;
  kicker: string;
  title: string;
  /** The short pitch, shown under the title on the page and in the home page's services section. */
  lead: string;
  approachLabel: string;
  approach: string[];
  approachNote: string;
  stepsLabel: string;
  steps: TitledText[];
  topicsLabel: string;
  topics: string[];
  gains: Gain[];
  motto: string;
  start: Partial<Record<StartStepId, string>>;
  closing: string;
  /** The link from the home page to this page. */
  more: string;
}

export const consulting: Record<Lang, ConsultingCopy> = {
  tr: {
    name: 'Danışmanlık',
    kicker: 'Yazılım ve danışmanlık birlikte',
    title: 'Sadece yazılım değil, danışmanlık da veriyoruz.',
    lead: 'Programı verip gitmiyoruz. Sürecinizi inceliyoruz, nasıl daha hızlı çalışırsınız birlikte planlıyoruz, sonra sistemi ona göre kuruyoruz. Siz yalnız kalmıyorsunuz.',
    approachLabel: 'Önce sürecinizi anlıyoruz',
    approach: [
      'Her OSB aynı çalışmıyor. Her kurum aynı çalışmıyor. O yüzden hazır programı "al bunu kullan" diye vermiyoruz.',
      'Önce geliyoruz, sizinle oturuyoruz. Evrak nasıl yürüyor? İzin nasıl onaylanıyor? Borç nasıl takip ediliyor? Depo nasıl sayılıyor? Hepsini dinliyoruz.',
      'Sonra diyoruz ki: "Şurası tıkanıyor, şurayı şöyle yaparsak hızlanırsınız." Bunu birlikte düzeltiyoruz. Ardından COLAB\'ı bu düzeltilmiş sürece göre kuruyoruz.',
    ],
    approachNote: 'Yani size sadece program değil, "Nasıl daha iyi çalışırsınız?" sorusunun cevabını da veriyoruz.',
    stepsLabel: 'Nasıl yapıyoruz?',
    steps: [
      { title: 'Dinle', text: 'Geliyoruz, mevcut sürecinizi yerinde inceliyoruz.' },
      { title: 'Planla', text: 'Nerede tıkandığınızı, neyi sadeleştireceğimizi birlikte planlıyoruz.' },
      { title: 'Kur ve eğit', text: 'COLAB\'ı planlanan sürece göre kuruyor, ekibinizi eğitiyoruz. Sonrasında da yanınızdayız.' },
    ],
    topicsLabel: 'Nelerde danışmanlık veriyoruz?',
    topics: [
      'Evrak ve imza süreci nasıl hızlanır?',
      'Satınalma ve depo süreci nasıl sadeleşir?',
      'İzin, puantaj ve İK süreci nasıl telefona taşınır?',
      'Borç takibi, KEP ve tahsilat süreci nasıl otomatikleşir?',
      'Kalite belgeleri denetime nasıl hazır tutulur?',
      'Mevcut muhasebe ve diğer sistemlerle nasıl bağlanılır?',
      'Saha nasıl yönetilir ve takip edilir?',
      'Tedarikçi süreci nasıl verimli hale getirilir?',
      'Müşteri nasıl takip edilir?',
      'Müşteri sınıflaması nasıl yapılır?',
      'OSOS gibi takip sistemlerine nasıl entegre olunur?',
      'TEİAŞ, EPDK gibi kamu sayfalarından veri nasıl alınır?',
      'Raporlar nasıl hazırlanır?',
      'Sürece özgü iş planı nasıl yapılır?',
      'Yapay zekâ süreçlerinize nasıl entegre edilir?',
    ],
    gains: [
      { label: '"Programı aldık, kullanamadık" riski', value: 'Sıfır' },
      { label: 'Süreçleriniz', value: 'Daha hızlı, daha sade, daha ölçülebilir' },
      { label: 'Ekibiniz', value: 'Ne yapacağını biliyor, aksayanı kendisi görüyor' },
      { label: 'Yönetim', value: 'Her şeyin nasıl yürüdüğünü tek ekranda görüyor' },
    ],
    motto: 'Bizim işimiz program satmak değil, işinizi kolaylaştırmak. Program bunun için sadece bir araç.',
    start: {
      analysis: 'Ekibinizle görüşerek çalışma düzeninizi görüyoruz.',
      setup: 'Ekibinize uygulama kurmadan, linkle çalışan sistemi kuruyoruz.',
    },
    closing: 'Gelin, sizin kurumunuzda veya firmanızda da 2 günde analiz yapalım, sürecin nasıl canlı görüneceğini birlikte gösterelim.',
    more: 'Danışmanlık yaklaşımımız',
  },
  en: {
    name: 'Consulting',
    kicker: 'Software and consulting together',
    title: 'Not just software. Consulting too.',
    lead: 'We do not hand over the software and leave. We study your process, plan with you how to work faster, then set the system up around it. You are never on your own.',
    approachLabel: 'Your process comes first',
    approach: [
      'No two industrial zones work the same way, and no two companies do. So we never hand you a ready-made package and say "here, use this".',
      'First we come and sit down with you. How do documents move? How is leave approved? How are debts followed up? How is the warehouse counted? We listen to all of it.',
      'Then we tell you: "This is where things get stuck, and this is how you could speed it up." We fix it together, and only then do we set COLAB up around the improved process.',
    ],
    approachNote: 'So you get more than software. You also get an answer to "how could we work better?"',
    stepsLabel: 'How we work',
    steps: [
      { title: 'Listen', text: 'We come to you and look at your current process on site.' },
      { title: 'Plan', text: 'Together we work out where you get stuck and what to simplify.' },
      { title: 'Set up and train', text: 'We set COLAB up around the agreed process and train your team. And we stay with you afterwards.' },
    ],
    topicsLabel: 'What we advise on',
    topics: [
      'How can documents and signatures move faster?',
      'How can procurement and warehousing be simplified?',
      'How can leave, timesheets and HR move to the phone?',
      'How can debt tracking, KEP notices and collections be automated?',
      'How are quality documents kept audit-ready?',
      'How do you connect to your accounting and other systems?',
      'How is field work managed and tracked?',
      'How can the supplier process be made more efficient?',
      'How are customers followed up?',
      'How should customers be segmented?',
      'How do you integrate meter-reading systems such as OSOS?',
      'How do you pull data from public sources such as TEİAŞ and EPDK?',
      'How should reports be prepared?',
      'How do you build a work plan specific to a process?',
      'How can AI be built into your processes?',
    ],
    gains: [
      { label: 'Risk of "we bought it but never used it"', value: 'Zero' },
      { label: 'Your processes', value: 'Faster, simpler and measurable' },
      { label: 'Your team', value: 'Knows what to do and spots what is not working' },
      { label: 'Management', value: 'Sees how everything is going on one screen' },
    ],
    motto: 'Our job is not to sell software but to make your work easier. The software is just the tool.',
    start: {
      analysis: 'We talk to your team and see how you work today.',
      setup: 'We set up a system your team opens from a link, with no app to install.',
    },
    closing: 'Let us spend two days analysing your organisation and show you together what a live view of the process looks like.',
    more: 'Our approach to consulting',
  },
};
