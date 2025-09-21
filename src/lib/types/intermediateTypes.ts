export interface CaseExplanation {
  case: string;
  usage: string;
  examples: string[];
  sentenceExamples: { finnish: string; english: string; explanation: string }[];
  whenToUse: string[];
  commonMistakes: string[];
}

export interface ConnectorWord {
  finnish: string;
  english: string;
  usage: string;
  examples: { finnish: string; english: string }[];
  placement: string;
  notes: string[];
  category: string;
}

export interface ConnectorCategory {
  name: string;
  description: string;
  words: ConnectorWord[];
}

export interface VerbConjugations {
  minä: string;
  sinä: string;
  hän: string;
  me: string;
  te: string;
  he: string;
}

export interface VerbTenses {
  present: VerbConjugations;
  past: VerbConjugations;
  negative: VerbConjugations;
  negativePast: VerbConjugations;
}

export interface VerbAnalysis {
  verb: string;
  english: string;
  tenses: VerbTenses;
  notes?: string;
  isFinnishInput?: boolean;
}

export interface ApiVerbResponse {
  verb?: string;
  english?: string;
  tenses?: VerbTenses;
  conjugations?: VerbConjugations;
  negative?: string;
  notes?: string;
  isFinnishInput?: boolean;
}
