// The shape of a product detail page. Every page follows the same story:
// tagline → problem → solution → how it works → modules → what you gain → how we start.
// Only the tagline, problem and gains are required, so a product with short copy still gets a complete page.

export type StartStepId = 'analysis' | 'setup' | 'support';

export interface TitledText {
  title: string;
  text: string;
}

export interface Gain {
  /** What is measured, e.g. "Document signing time". */
  label: string;
  /** The result, shown large, e.g. "3 days to 10 minutes". */
  value: string;
}

export interface ProductDetail {
  /** The one-line promise under the product name. */
  tagline: string;
  /** A short qualifier shown above the name, e.g. "Integrated with your accounting system". */
  kicker?: string;
  /** One or two paragraphs describing the everyday problem. */
  problem: string[];
  /** How COLAB solves it. */
  solution?: string[];
  /** A highlighted sentence that answers the main objection, e.g. "You keep your accounting software." */
  note?: string;
  /** The workflow in a few numbered steps. */
  steps?: TitledText[];
  /** The parts the product is built from, shown as cards. */
  modules?: TitledText[];
  gains: Gain[];
  /** Rewords individual "how we start" steps; any step left out uses the shared text from start.ts. */
  start?: Partial<Record<StartStepId, string>>;
  /** Overrides the closing call to action under "how we start". */
  closing?: string;
}
