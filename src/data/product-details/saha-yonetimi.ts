import type { Lang } from '../../i18n/ui';
import type { ProductDetail } from './types';

// Source: Ahmet Paçacı's product copy (16.11.2026). On 17.11.2026 he merged the old site's
// "OSB İş ve Süreç Yönetimi" and "İş Yönetimi" into this product, as they are the same system.

export const sahaYonetimi: Record<Lang, ProductDetail> = {
  tr: {
    tagline: 'Sahada ne oluyor, ofisten canlı görün.',
    problem: [
      'Sahada sorun çıktığında haber iki saat sonra geliyor. Ekip sahaya gidiyor ama ne yaptığı belli değil. "Arızam ne oldu?" soruları cevapsız kalıyor.',
      'Sorun ekipte değil, kopuk iletişimde.',
    ],
    solution: ['Arıza bildirilir, ekip atanır, iş fotoğrafla kapanır. "Ekip nerede?" diye telefonla sormak bitiyor.'],
    steps: [
      { title: 'Bildir', text: 'Sahadaki sorun yazılı ve fotoğraflı olarak bildirilir, konum otomatik eklenir.' },
      { title: 'Ata', text: 'Görev otomatik olarak ilgili ekibe gider. İşin kimde olduğu anında belli olur.' },
      { title: 'Yap', text: 'Ekip işi sahada başlatır, bitince fotoğrafla kapatır. Yapılan iş kanıtlı ve takip edilebilir olur.' },
      { title: 'Gör', text: 'Tüm işler ve durumları anlık takip edilir. Bekleyen iş gözden kaçmaz.' },
    ],
    modules: [
      { title: 'Arıza takibi', text: 'Hangi arıza ne zaman açıldı, kime atandı, kaç saatte kapandı. Hepsi tek ekranda.' },
      { title: 'Ekip takibi', text: 'Kim sahada, hangi işte, ne kadar sürdü. Telefonla aramadan görebilirsiniz.' },
      { title: 'Bakım planı', text: 'Düzenli yapılması gereken işler otomatik hatırlatılır. "Unuttuk" olmaz.' },
    ],
    gains: [
      { label: 'Arızaya müdahale süresi', value: 'Saatlerden dakikalara' },
      { label: '"Ekip nerede?" telefonu', value: 'Sıfır' },
      { label: 'İşin tamamlanması ve geri bildirim', value: 'Aynı gün' },
      { label: 'İşin fotoğraflı kanıtı', value: 'Otomatik arşivde' },
    ],
    start: {
      analysis: 'Sahayı sizinle birlikte geziyor, iş düzeninizi görüyoruz.',
      setup: 'Ekibinize uygulama kurmadan, linkle çalışan sistemi kuruyoruz.',
    },
    closing: 'Gelin, sizin kurumunuzda veya firmanızda da 2 günde analiz yapalım, sahanın nasıl canlı görüneceğini birlikte gösterelim.',
  },
  en: {
    tagline: 'See what is happening in the field, live from the office.',
    problem: [
      'When something goes wrong in the field, the news arrives two hours later. The crew heads out, but nobody knows what they did. Customers asking "what happened to my fault report?" get no answer.',
      'The problem is not the crew, it is the broken communication.',
    ],
    solution: ['A fault is reported, a crew is assigned, the job is closed with a photo. No more phoning around to ask where the crew is.'],
    steps: [
      { title: 'Report', text: 'Problems in the field are reported in writing with photos, and the location is added automatically.' },
      { title: 'Assign', text: 'The job goes to the right crew automatically, so it is always clear who has it.' },
      { title: 'Do', text: 'The crew starts the job on site and closes it with a photo, so the work is documented and traceable.' },
      { title: 'Monitor', text: 'Every job and its status can be followed live. Nothing waiting slips through.' },
    ],
    modules: [
      { title: 'Fault tracking', text: 'Which fault was opened when, who got it and how many hours it took to close. All on one screen.' },
      { title: 'Crew tracking', text: 'Who is in the field, on which job and for how long, without a single phone call.' },
      { title: 'Maintenance plan', text: 'Recurring work is scheduled with automatic reminders, so nothing is forgotten.' },
    ],
    gains: [
      { label: 'Response time to faults', value: 'Hours to minutes' },
      { label: '"Where is the crew?" calls', value: 'Zero' },
      { label: 'Completion and feedback', value: 'Same day' },
      { label: 'Photo proof of every job', value: 'Archived automatically' },
    ],
    start: {
      analysis: 'We walk the site with you and see how your work is organised.',
      setup: 'We set up a system your crews open from a link, with no app to install.',
    },
    closing: 'Let us spend two days analysing your organisation and show you together what a live view of the field looks like.',
  },
};
