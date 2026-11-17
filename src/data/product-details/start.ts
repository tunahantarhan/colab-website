import type { Lang } from '../../i18n/ui';
import type { StartStepId } from './types';

// "How we start" is the same promise on every product page: two days of analysis, fifteen days of setup,
// round-the-clock support. Products can reword a step (see ProductDetail.start) but the figures stay the same.

export interface StartStep {
  id: StartStepId;
  /** The big figure; English writes round-the-clock as 24/7, Turkish as 7/24. */
  value: Record<Lang, string>;
  title: Record<Lang, string>;
  text: Record<Lang, string>;
}

export const startSteps: StartStep[] = [
  {
    id: 'analysis',
    value: { tr: '2', en: '2' },
    title: { tr: 'günde analiz', en: 'days of analysis' },
    text: {
      tr: 'Kurumunuza veya firmanıza geliyor, işinizi dinliyoruz.',
      en: 'We come to your organisation and listen to how you work.',
    },
  },
  {
    id: 'setup',
    value: { tr: '15', en: '15' },
    title: { tr: 'günde kurulum', en: 'days to set up' },
    text: {
      tr: 'Sistemi sizin istek ve ihtiyaçlarınıza göre kuruyoruz.',
      en: 'We set the system up around your needs and requests.',
    },
  },
  {
    id: 'support',
    value: { tr: '7/24', en: '24/7' },
    title: { tr: 'destek', en: 'support' },
    text: {
      tr: 'Kurulumdan sonra da her zaman yanınızdayız.',
      en: 'We stay with you around the clock after go-live.',
    },
  },
];

export const startClosing: Record<Lang, string> = {
  tr: 'Gelin, sizin kurumunuzda veya firmanızda da 2 günde analiz yapalım, ne kadar hızlanacağınızı birlikte görelim.',
  en: "Let us spend two days analysing your organisation and see together how much faster you could work.",
};
