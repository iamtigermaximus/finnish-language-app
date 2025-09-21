export interface ConditionalExample {
  verb: string;
  conditional: string;
  english: string;
  type: string;
  usage: string;
  example: string;
  translation: string;
  negative: string;
  negativeExample: string;
  negativeTranslation: string;
  notes: string;
}

export interface ConditionalRule {
  name: string;
  description: string;
  examples: ConditionalExample[];
}

export interface ConditionalForms {
  verb: string;
  conditional: string;
  rule: string;
  negative: string;
}

export interface ConditionalAnalysis {
  verb: string;
  english: string;
  conditional: ConditionalForms;
  usage: string[];
  examples: string[];
  translations: string[];
  notes: string;
  isFinnishInput: boolean;
}

export interface VerbalNounExample {
  verb: string;
  verbalNoun: string;
  english: string;
  type: string;
  usage: string;
  example: string;
  translation: string;
  notes: string;
}

export interface VerbalNounRule {
  name: string;
  description: string;
  examples: VerbalNounExample[];
}

export interface VerbalNounForms {
  verb: string;
  verbalNoun: string;
  rule: string;
}

export interface VerbalNounAnalysis {
  verb: string;
  english: string;
  verbalNoun: VerbalNounForms;
  usage: string[];
  examples: string[];
  translations: string[];
  notes: string;
  isFinnishInput: boolean;
}
