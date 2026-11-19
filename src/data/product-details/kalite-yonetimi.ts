import type { Lang } from '../../i18n/ui';
import type { ProductDetail } from './types';

// Source: Ahmet Paçacı's "COLAB web page.docx" (19.11.2026). In the document the "Yayınla" step carries the
// text about corrective actions; here publishing and tracking are two steps, each with its own sentence.

export const kaliteYonetimi: Record<Lang, ProductDetail> = {
  tr: {
    kicker: 'ISO 9001, 14001, 45001',
    tagline: 'ISO denetimi gelince dosya aramak bitiyor.',
    problem: [
      'Kurum ve firmalarda en büyük sıkıntılardan biri denetim haftasıdır. Denetçi "Şu prosedür nerede?" diye sorduğunda herkes klasörlerde prosedür ve doküman aramak zorunda kalır.',
    ],
    solution: [
      'Prosedür, talimat, form, belge. Hepsi tek yerde, güncel haliyle. Denetçi ne isterse 5 saniyede önünde.',
      'Prosedür değişince eski versiyon otomatik kalkar, yeni versiyon herkesin önüne düşer; eski versiyonlar da takip edilebilir. Kimin hangi belgeyi okuduğu, hangi eğitimi aldığı kayıt altındadır. Denetçi soruyor, siz tek tıkla gösteriyorsunuz.',
    ],
    note: 'Denetçi gelmeden önce denetimi kendiniz yaparsınız, eksik kalanları önceden görürsünüz.',
    steps: [
      { title: 'Yükle', text: 'Prosedür, talimat, form, belge. Tek yere yükleyin, versiyon otomatik oluşur.' },
      { title: 'Onayla', text: 'Yeni belgeler ve değişiklikler ilgili yöneticinin onayına düşer. Onaylanmadan yayınlanmaz.' },
      { title: 'Yayınla', text: 'Onaylanan belge yayınlanır, eski versiyon kalkar, yeni versiyon herkesin önüne düşer.' },
      { title: 'Takip et', text: 'Düzeltici faaliyet, iç denetim, eğitim. Kimde, ne durumda, tek ekranda.' },
    ],
    gains: [
      { label: 'Denetime hazırlık', value: 'Haftalardan 1 güne' },
      { label: 'Eski belge kullanma riski', value: 'Sıfır' },
      { label: '"Kim okudu?" sorusu', value: 'Tarihiyle kayıtlı' },
      { label: 'Düzeltici faaliyet takibi', value: 'Açık iş kalmaz' },
    ],
    start: { analysis: 'Ekibinizle görüşerek iş düzeninizi görüyoruz.', setup: 'Ekibinize uygulama kurmadan, linkle çalışan sistemi kuruyoruz.' },
    closing: 'Gelin, sizin kurumunuzda veya firmanızda da 2 günde analiz yapalım, sürecin nasıl canlı görüneceğini birlikte gösterelim.',
  },
  en: {
    kicker: 'ISO 9001, 14001, 45001',
    tagline: 'No more hunting for files when the ISO auditor arrives.',
    problem: [
      'Audit week is one of the most stressful times for any organisation. When the auditor asks "where is this procedure?", everyone starts digging through folders.',
    ],
    solution: [
      "Procedures, instructions, forms, certificates. All in one place, always the current version. Whatever the auditor asks for is in front of them in five seconds.",
      'When a procedure changes, the old version is withdrawn automatically and the new one reaches everyone, while earlier versions stay traceable. Who read which document and who completed which training is on record. The auditor asks, you show it in one click.',
    ],
    note: 'You audit yourself before the auditor arrives and see the gaps in advance.',
    steps: [
      { title: 'Upload', text: 'Procedures, instructions, forms, certificates. Upload them to one place; versions are created automatically.' },
      { title: 'Approve', text: 'New documents and changes go to the responsible manager. Nothing is published without approval.' },
      { title: 'Publish', text: 'Approved documents are published, the old version is withdrawn and the new one reaches everyone.' },
      { title: 'Track', text: 'Corrective actions, internal audits, training. Who has what and where it stands, on one screen.' },
    ],
    gains: [
      { label: 'Audit preparation', value: 'Weeks to one day' },
      { label: 'Risk of using an outdated document', value: 'Zero' },
      { label: '"Who has read this?"', value: 'Recorded with dates' },
      { label: 'Corrective action follow-up', value: 'Nothing left open' },
    ],
    start: { analysis: 'We talk to your team and see how your work is organised.', setup: 'We set up a system your team opens from a link, with no app to install.' },
    closing: 'Let us spend two days analysing your organisation and show you together what a live view of the process looks like.',
  },
};
