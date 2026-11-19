import type { Lang } from '../i18n/ui';
import type { TitledText } from './product-details/types';

// Copy for the About page. Source: Ahmet Paçacı's "COLAB web page.docx" (19.11.2026), section "Hakkımızda".

export const aboutPaths: Record<Lang, string> = { tr: '/hakkimizda/', en: '/about/' };

export interface AboutCopy {
  title: string;
  lead: string;
  storyLabel: string;
  story: string[];
  principlesLabel: string;
  principlesIntro: string;
  principles: string[];
  today: string;
  success: string;
  differenceLabel: string;
  differences: TitledText[];
  ctaTitle: string;
  ctaText: string;
}

export const about: Record<Lang, AboutCopy> = {
  tr: {
    title: 'İşi sahada öğrendik, sistemi ona göre yaptık.',
    lead: 'COLAB, masa başında yazılmış bir program değil.',
    storyLabel: 'Hikayemiz',
    story: [
      'Kurumları ve OSB\'leri gezdik. Yöneticilerin sahada olduğunu, evrakın masada beklediğini, deponun sayım günü karıştığını, ay sonu puantajın yetişmediğini yerinde gördük.',
    ],
    principlesLabel: 'İlkelerimiz',
    principlesIntro: 'O yüzden COLAB\'ı şöyle kurduk:',
    principles: [
      'Karmaşık değil, sade olsun.',
      'Bilgisayar gerektirmesin, her platformdan erişilebilsin.',
      'Mevcut sistemi bozmasın, ona bağlansın.',
      'Program verip gitmesin, danışmanlıkla birlikte yürüsün.',
    ],
    today:
      'Bugün OSB\'ler ve kurumlar COLAB ile evrakını, iznini, deposunu, satınalmasını, kalitesini, katılımcısını ve borcunu tek ekrandan yönetiyor.',
    success: 'Bizim için başarı, programın satılması değil. Herkesin "İşim rahatladı" demesi.',
    differenceLabel: 'Bizi farklı kılan',
    differences: [
      { title: 'Sahayı biliyoruz', text: 'OSB\'nin nasıl çalıştığını biliyoruz. O yüzden size uymayan hazır kalıp vermiyoruz.' },
      { title: 'Sade yapıyoruz', text: 'Personelinizin eğitim için günlerce uğraşmasına gerek yok. Açıyor, kullanıyor.' },
      { title: 'Yanınızdayız', text: 'Kurulumda da, sonrasında da. Aradığınızda karşınızda bir muhatap var.' },
    ],
    ctaTitle: 'Tanışalım mı?',
    ctaText: 'Kurumunuzda veya OSB\'nizde işler nasıl yürüyor, birlikte bakalım.',
  },
  en: {
    title: 'We learned the work in the field and built the system around it.',
    lead: 'COLAB is not software dreamed up behind a desk.',
    storyLabel: 'Our story',
    story: [
      'We visited organisations and industrial zones. We saw for ourselves that managers are out in the field while documents wait on desks, that the warehouse descends into chaos on stocktaking day, and that the monthly timesheet is always late.',
    ],
    principlesLabel: 'Our principles',
    principlesIntro: 'So we built COLAB to be:',
    principles: [
      'Simple, not complicated.',
      'Usable from any device, not tied to a computer.',
      'Connected to your existing systems, not a replacement for them.',
      'Delivered with consulting, not handed over and left behind.',
    ],
    today:
      'Today industrial zones and organisations use COLAB to manage documents, leave, warehouses, procurement, quality, members and receivables from a single screen.',
    success: 'For us, success is not selling software. It is everyone saying "my work got easier".',
    differenceLabel: 'What sets us apart',
    differences: [
      { title: 'We know the field', text: 'We know how industrial zones work, so we never force a template on you that does not fit.' },
      { title: 'We keep it simple', text: 'Your staff do not need days of training. They open it and use it.' },
      { title: 'We stay with you', text: 'During setup and long after. When you call, there is a real person on the other end.' },
    ],
    ctaTitle: 'Shall we meet?',
    ctaText: 'Let us look together at how things work in your organisation.',
  },
};
