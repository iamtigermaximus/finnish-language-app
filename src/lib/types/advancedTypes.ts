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

export interface GenitiveExample {
  singular: string;
  genitive: string;
  genitivePlural: string;
  english: string;
  usage: string;
  example: string;
  translation: string;
  genitivePluralExample: string;
  genitivePluralTranslation: string;
  notes: string;
}

export interface GenitiveRule {
  name: string;
  description: string;
  examples: GenitiveExample[];
}

export interface GenitiveForms {
  singular: string;
  genitive: string;
  genitivePlural: string;
  rule: string;
}

export interface GenitiveAnalysis {
  noun: string;
  english: string;
  genitive: GenitiveForms;
  usage: string[];
  examples: string[];
  translations: string[];
  genitivePluralExamples: string[];
  genitivePluralTranslations: string[];
  notes: string;
  isFinnishInput: boolean;
}

export interface IllativeExample {
  singular: string;
  illative: string;
  illativePlural: string;
  english: string;
  usage: string;
  example: string;
  translation: string;
  illativePluralExample: string;
  illativePluralTranslation: string;
  notes: string;
}

export interface IllativeRule {
  name: string;
  description: string;
  examples: IllativeExample[];
}

export interface IllativeForms {
  singular: string;
  illative: string;
  illativePlural: string;
  rule: string;
}

export interface IllativeAnalysis {
  noun: string;
  english: string;
  illative: IllativeForms;
  usage: string[];
  examples: string[];
  translations: string[];
  illativePluralExamples: string[];
  illativePluralTranslations: string[];
  notes: string;
  isFinnishInput: boolean;
}

export interface PartitiveExample {
  singular: string;
  partitive: string;
  partitivePlural: string;
  english: string;
  usage: string;
  example: string;
  translation: string;
  partitiveExample: string;
  partitiveTranslation: string;
  notes: string;
}

export interface PartitiveRule {
  name: string;
  description: string;
  examples: PartitiveExample[];
}

export interface PartitiveForms {
  singular: string;
  partitive: string;
  partitivePlural: string;
  rule: string;
}

export interface PartitiveAnalysis {
  noun: string;
  english: string;
  partitive: PartitiveForms;
  usage: string[];
  examples: string[];
  translations: string[];
  partitivePluralExamples: string[];
  partitivePluralTranslations: string[];
  notes: string;
  isFinnishInput: boolean;
}
