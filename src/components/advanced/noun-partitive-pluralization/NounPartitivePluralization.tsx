'use client'

import { useState, FormEvent } from 'react';
import styled from 'styled-components';

interface PartitiveExample {
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

interface PartitiveRule {
  name: string;
  description: string;
  examples: PartitiveExample[];
}

interface PartitiveForms {
  singular: string;
  partitive: string;
  partitivePlural: string;
  rule: string;
}

interface PartitiveAnalysis {
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

// Data for partitive case rules
const partitiveRules: PartitiveRule[] = [
  {
    name: "Basic Partitive Formation",
    description: "For most words, add -a/-ä to the singular stem",
    examples: [
      {
        singular: "talo",
        partitive: "taloa",
        partitivePlural: "taloja",
        english: "house",
        usage: "Partial object",
        example: "Näen taloa.",
        translation: "I see a house (part of it).",
        partitiveExample: "Näen taloja kaupungissa.",
        partitiveTranslation: "I see houses in the city.",
        notes: "The partitive form is used when referring to an indefinite quantity."
      },
      {
        singular: "kirja",
        partitive: "kirjaa",
        partitivePlural: "kirjoja",
        english: "book",
        usage: "Reading activities",
        example: "Luen kirjaa.",
        translation: "I'm reading a book.",
        partitiveExample: "Luen kirjoja illalla.",
        partitiveTranslation: "I read books in the evening.",
        notes: "The partitive is used with verbs of reading to indicate an ongoing activity."
      }
    ]
  },
  {
    name: "Words ending in -e",
    description: "For words ending in -e, add -tta/-ttä",
    examples: [
      {
        singular: "perhe",
        partitive: "perhettä",
        partitivePlural: "perheitä",
        english: "family",
        usage: "Partial object",
        example: "Autan perhettä.",
        translation: "I'm helping the family.",
        partitiveExample: "Tunnen perheitä naapurustossa.",
        partitiveTranslation: "I know families in the neighborhood.",
        notes: "The partitive form indicates helping some aspects of the family."
      },
      {
        singular: "kone",
        partitive: "konetta",
        partitivePlural: "koneita",
        english: "machine",
        usage: "Using objects",
        example: "Käytän konetta.",
        translation: "I'm using a machine.",
        partitiveExample: "Korjaan koneita työssäni.",
        partitiveTranslation: "I repair machines in my work.",
        notes: "The partitive indicates using the machine for some purpose."
      }
    ]
  },
  {
    name: "Words ending in -i",
    description: "For words ending in -i, the formation varies",
    examples: [
      {
        singular: "kivi",
        partitive: "kiveä",
        partitivePlural: "kiviä",
        english: "stone",
        usage: "Partial object",
        example: "Nostan kiveä.",
        translation: "I'm lifting a stone.",
        partitiveExample: "Kerään kiviä rannalta.",
        partitiveTranslation: "I collect stones from the beach.",
        notes: "The partitive form indicates an indefinite quantity."
      },
      {
        singular: "meri",
        partitive: "merta",
        partitivePlural: "meriä",
        english: "sea",
        usage: "With numbers",
        example: "Näen merta.",
        translation: "I see the sea.",
        partitiveExample: "Matkustan meriä pitkin.",
        partitiveTranslation: "I travel across seas.",
        notes: "The partitive plural is used when referring to multiple seas."
      }
    ]
  },
  {
    name: "Consonant Gradation",
    description: "Some words undergo consonant gradation in partitive",
    examples: [
      {
        singular: "kukka",
        partitive: "kukkaa",
        partitivePlural: "kukkia",
        english: "flower",
        usage: "Partial object",
        example: "Katson kukkaa.",
        translation: "I'm looking at a flower.",
        partitiveExample: "Istutan kukkia puutarhassa.",
        partitiveTranslation: "I plant flowers in the garden.",
        notes: "The partitive plural form undergoes consonant gradation (kukkia)."
      },
      {
        singular: "lakki",
        partitive: "lakkia",
        partitivePlural: "lakkeja",
        english: "cap",
        usage: "Indefinite amount",
        example: "Ostan lakkia.",
        translation: "I'm buying a cap.",
        partitiveExample: "Myyn lakkeja torilla.",
        partitiveTranslation: "I sell caps at the market.",
        notes: "The partitive plural indicates selling an indefinite number of caps."
      }
    ]
  },
  {
    name: "Usage with Numbers",
    description: "Partitive is used with numbers greater than one",
    examples: [
      {
        singular: "omena",
        partitive: "omenaa",
        partitivePlural: "omenoita",
        english: "apple",
        usage: "With numbers",
        example: "Syön omenaa.",
        translation: "I'm eating an apple.",
        partitiveExample: "Ostan kolme omenaa.",
        partitiveTranslation: "I'm buying three apples.",
        notes: "With numbers, Finnish uses the partitive singular form but it translates to plural in English."
      },
      {
        singular: "koira",
        partitive: "koiraa",
        partitivePlural: "koiria",
        english: "dog",
        usage: "With numbers",
        example: "Pidän koiraa.",
        translation: "I like the dog.",
        partitiveExample: "Meillä on kaksi koiraa.",
        partitiveTranslation: "We have two dogs.",
        notes: "Numbers greater than one require the partitive case."
      }
    ]
  },
  {
    name: "Negative Sentences",
    description: "Partitive is used in negative sentences",
    examples: [
      {
        singular: "raha",
        partitive: "rahaa",
        partitivePlural: "rahoja",
        english: "money",
        usage: "Negative sentences",
        example: "Minulla on rahaa.",
        translation: "I have money.",
        partitiveExample: "Minulla ei ole rahaa.",
        partitiveTranslation: "I don't have money.",
        notes: "Negative sentences always use the partitive case."
      },
      {
        singular: "aika",
        partitive: "aikaa",
        partitivePlural: "aikoja",
        english: "time",
        usage: "Negative sentences",
        example: "Minulla on aikaa.",
        translation: "I have time.",
        partitiveExample: "Minulla ei ole aikaa.",
        partitiveTranslation: "I don't have time.",
        notes: "The partitive is used in negative existential sentences."
      }
    ]
  }
];

// Styled components
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  /* height: 100vh; */
  /* background-color: orange; */
  color: black;
  margin-bottom: 20px;
`;

const ContentContainer = styled.div`
  /* max-width: 56rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
  } */
`;

const Header = styled.header`
  margin-bottom: 1.5rem;

  @media (min-width: 640px) {
    margin-bottom: 2rem;
  }
`;

const Title = styled.h2`
  font-size: 1.375rem;
  font-weight: bold;
  color: #1e40af;
  margin-bottom: 0.75rem;

  @media (min-width: 640px) {
    font-size: 1.875rem;
    margin-bottom: 1rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #4b5563;

  @media (min-width: 640px) {
    font-size: 1.125rem;
  }
`;

// const RuleContainer = styled.div`
//   margin-bottom: 1.5rem;

//   @media (min-width: 640px) {
//     margin-bottom: 2rem;
//   }
// `;

const RuleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e40af;
  margin-bottom: 0.5rem;

  @media (min-width: 640px) {
    font-size: 1.25rem;
  }
`;

const RuleDescription = styled.p`
  color: #374151;
  margin-bottom: 1rem;
  font-size: 0.95rem;

  @media (min-width: 640px) {
    font-size: 1rem;
  }
`;

// Mobile card view for examples
const ExampleCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const ExampleCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e5e7eb;
`;

const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  padding: 0.25rem 0;
  border-bottom: 1px solid #e5e7eb;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

const CardLabel = styled.span`
  font-weight: 500;
  color: #374151;
  min-width: 120px;
`;

const CardValue = styled.span`
  color: #1d4ed8;
  text-align: right;
  flex: 1;
`;

// Desktop table view
const ExampleTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
  display: none;

  @media (min-width: 1024px) {
    display: table;
  }
`;

const TableHeader = styled.th`
  background-color: #e6f7ff;
  padding: 0.75rem;
  text-align: left;
  border: 1px solid #d1d5db;
  font-weight: 500;
`;

const TableCell = styled.td`
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  vertical-align: top;
`;

const ExampleSentence = styled.div`
  margin-top: 0.5rem;
  font-style: italic;
  color: #4b5563;
  font-size: 0.875rem;
`;

const PracticeContainer = styled.div`
  background-color: #f8f9fa;
  border-radius: 0.75rem;
  padding: 1rem;
  margin-top: 1.5rem;

  @media (min-width: 640px) {
    padding: 1.5rem;
    margin-top: 2rem;
  }
`;

const PracticeTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e40af;
  margin-bottom: 1rem;

  @media (min-width: 640px) {
    font-size: 1.25rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  font-size: 0.95rem;
  font-weight: 500;
  color: #374151;

  @media (min-width: 640px) {
    font-size: 1rem;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #e6f7ff;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }

  &:disabled {
    opacity: 0.5;
  }
`;

const Button = styled.button<{ $primary?: boolean }>`
  padding: 0.75rem 1.5rem;
  background-color: ${props => props.$primary ? '#0066cc' : '#e5e7eb'};
  color: ${props => props.$primary ? 'white' : '#374151'};
  font-weight: 500;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  white-space: nowrap;

  &:hover {
    background-color: ${props => props.$primary ? '#1d4ed8' : '#d1d5db'};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ResultContainer = styled.div`
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-top: 1.5rem;

  @media (min-width: 640px) {
    padding: 1.5rem;
  }
`;

const ResultTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e40af;
  margin-bottom: 1rem;

  @media (min-width: 640px) {
    font-size: 1.25rem;
  }
`;

const ResultItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e5e7eb;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const ResultLabel = styled.span`
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.25rem;

  @media (min-width: 640px) {
    margin-bottom: 0;
    min-width: 150px;
  }
`;

const ResultValue = styled.span`
  color: #1d4ed8;
  font-weight: 500;
  word-break: break-word;

  @media (min-width: 640px) {
    text-align: right;
    flex: 1;
  }
`;

const ErrorMessage = styled.div`
  padding: 1rem;
  margin-bottom: 1.5rem;
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 0.5rem;
  color: #dc2626;
`;

const SuccessMessage = styled.div`
  padding: 1rem;
  margin-bottom: 1.5rem;
  background-color: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 0.5rem;
  color: #15803d;
`;

const LoadingContainer = styled.div`
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (min-width: 640px) {
    padding: 2rem;
  }
`;

const UsageExplanation = styled.div`
  background-color: #f0f9ff;
  border-left: 4px solid #0ea5e9;
  padding: 1rem;
  margin: 1.5rem 0;
  border-radius: 0.25rem;
`;

const UsageTitle = styled.h4`
  font-weight: 600;
  color: #0369a1;
  margin-bottom: 0.5rem;
`;

const UsageList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  color: #374151;
`;

const UsageListItem = styled.li`
  margin-bottom: 0.5rem;
`;

// Function to determine the partitive form based on rules
const getPartitiveForm = (singular: string): PartitiveAnalysis | null => {
  const lowerSingular = singular.toLowerCase();
  
  // Check each rule pattern
  for (const rule of partitiveRules) {
    for (const example of rule.examples) {
      // Simple pattern matching based on endings
      if (lowerSingular.endsWith(example.singular.slice(-2))) {
        return {
          noun: example.singular,
          english: example.english,
          partitive: {
            singular: example.singular,
            partitive: example.partitive,
            partitivePlural: example.partitivePlural,
            rule: rule.name
          },
          usage: [example.usage],
          examples: [example.example],
          translations: [example.translation],
          partitivePluralExamples: [example.partitiveExample],
          partitivePluralTranslations: [example.partitiveTranslation],
          notes: example.notes,
          isFinnishInput: true
        };
      }
    }
  }
  
  return null;
};

const NounPartitivePluralization = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<PartitiveAnalysis | null>(null);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const analyzePartitive = async (noun: string): Promise<void> => {
    setLoading(true);
    setError('');
    setSuccess('');
    
    // First try our local rule-based approach
    const localResult = getPartitiveForm(noun);
    if (localResult) {
      setResult(localResult);
      setSuccess(`Partitive form found for "${noun}"`);
      setLoading(false);
      return;
    }
    
    // If local approach fails, try the API
    try {
      const response = await fetch('/api/noun-partitive-pluralization', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ noun }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to analyze noun');
      }

      const data: PartitiveAnalysis = await response.json();
      
      if (data) {
        setResult(data);
        setSuccess(`Partitive forms found for "${noun}"`);
      } else {
        throw new Error('No partitive data received from API');
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to analyze noun. Please try a different word.');
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    if (!input.trim()) {
      setError('Please enter a noun');
      return;
    }
    
    analyzePartitive(input.trim());
  };

  return (
    <Container>
      <Header>
        <Title>Finnish Partitive Case Pluralization</Title>
        <Subtitle>Learn how to form and use the partitive case in Finnish</Subtitle>
      </Header>

      <ContentContainer>
        <p>
          The partitive case is one of the most important grammatical cases in Finnish. 
          It is used to indicate partial objects, indefinite amounts, and in various other contexts.
        </p>
        
        <UsageExplanation>
          <UsageTitle>When to Use the Partitive Case:</UsageTitle>
          <UsageList>
            <UsageListItem>With indefinite quantities (some water, a few books)</UsageListItem>
            <UsageListItem>With numbers greater than one (two apples, five houses)</UsageListItem>
            <UsageListItem>In negative sentences (I don&apos;t have money)</UsageListItem>
            <UsageListItem>With certain prepositions (without help, with friends)</UsageListItem>
            <UsageListItem>To express ongoing actions (I&apos;m reading a book)</UsageListItem>
          </UsageList>
        </UsageExplanation>
      </ContentContainer>

      {partitiveRules.map((rule, index) => (
        <ContentContainer key={index}>
          <RuleTitle>{rule.name}</RuleTitle>
          <RuleDescription>{rule.description}</RuleDescription>
          
          {/* Mobile Card View */}
          <ExampleCardsContainer>
            {rule.examples.map((example, idx) => (
              <ExampleCard key={idx}>
                <CardRow>
                  <CardLabel>Noun:</CardLabel>
                  <CardValue>{example.singular} ({example.english})</CardValue>
                </CardRow>
                <CardRow>
                  <CardLabel>Partitive:</CardLabel>
                  <CardValue>{example.partitive}</CardValue>
                </CardRow>
                <CardRow>
                  <CardLabel>Partitive Plural:</CardLabel>
                  <CardValue>{example.partitivePlural}</CardValue>
                </CardRow>
                <CardRow>
                  <CardLabel>Usage:</CardLabel>
                  <CardValue>{example.usage}</CardValue>
                </CardRow>
                <CardRow>
                  <CardLabel>Example (singular):</CardLabel>
                  <CardValue>
                    {example.example}
                    <ExampleSentence>{example.translation}</ExampleSentence>
                  </CardValue>
                </CardRow>
                <CardRow>
                  <CardLabel>Example (plural):</CardLabel>
                  <CardValue>
                    {example.partitiveExample}
                    <ExampleSentence>{example.partitiveTranslation}</ExampleSentence>
                  </CardValue>
                </CardRow>
                <CardRow>
                  <CardLabel>Notes:</CardLabel>
                  <CardValue>{example.notes}</CardValue>
                </CardRow>
              </ExampleCard>
            ))}
          </ExampleCardsContainer>
          
          {/* Desktop Table View */}
          <ExampleTable>
            <thead>
              <tr>
                <TableHeader>Noun (English)</TableHeader>
                <TableHeader>Partitive</TableHeader>
                <TableHeader>Partitive Plural</TableHeader>
                <TableHeader>Usage</TableHeader>
                <TableHeader>Example (Singular)</TableHeader>
                <TableHeader>Example (Plural)</TableHeader>
              </tr>
            </thead>
            <tbody>
              {rule.examples.map((example, idx) => (
                <tr key={idx}>
                  <TableCell>
                    {example.singular} ({example.english})
                  </TableCell>
                  <TableCell>{example.partitive}</TableCell>
                  <TableCell>{example.partitivePlural}</TableCell>
                  <TableCell>{example.usage}</TableCell>
                  <TableCell>
                    {example.example}
                    <ExampleSentence>{example.translation}</ExampleSentence>
                  </TableCell>
                  <TableCell>
                    {example.partitiveExample}
                    <ExampleSentence>{example.partitiveTranslation}</ExampleSentence>
                  </TableCell>
                </tr>
              ))}
            </tbody>
          </ExampleTable>
        </ContentContainer>
      ))}

      <PracticeContainer>
        <PracticeTitle>Practice Partitive Formation</PracticeTitle>
        <p>Enter a Finnish or English noun to see its partitive form:</p>
        
        <Form onSubmit={handleSubmit}>
          <FormLabel htmlFor="noun-input">
            Enter a Finnish noun:
          </FormLabel>
          <InputContainer>
            <Input
              id="noun-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., talo, kirja, omena"
              disabled={loading}
            />
            <Button type="submit" $primary disabled={loading}>
              {loading ? 'Analyzing...' : 'Analyze'}
            </Button>
          </InputContainer>
        </Form>

        {error && (
          <ErrorMessage>
            {error}
          </ErrorMessage>
        )}

        {success && (
          <SuccessMessage>
            {success}
          </SuccessMessage>
        )}

        {loading && (
          <LoadingContainer>
            <div style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}>
              <div style={{ borderRadius: '9999px', backgroundColor: '#bfdbfe', height: '3rem', width: '3rem', marginBottom: '1rem', marginLeft: 'auto', marginRight: 'auto' }}></div>
              <div style={{ height: '1rem', backgroundColor: '#bfdbfe', borderRadius: '0.25rem', width: '75%', marginBottom: '0.5rem', marginLeft: 'auto', marginRight: 'auto' }}></div>
              <div style={{ height: '1rem', backgroundColor: '#bfdbfe', borderRadius: '0.25rem', width: '50%', marginLeft: 'auto', marginRight: 'auto' }}></div>
            </div>
          </LoadingContainer>
        )}

        {result && !loading && (
          <ResultContainer>
            <ResultTitle>Partitive Results for &quot;{result.noun}&quot; ({result.english})</ResultTitle>
            
            <ResultItem>
              <ResultLabel>Partitive singular:</ResultLabel>
              <ResultValue>{result.partitive.partitive}</ResultValue>
            </ResultItem>
            
            <ResultItem>
              <ResultLabel>Partitive plural:</ResultLabel>
              <ResultValue>{result.partitive.partitivePlural}</ResultValue>
            </ResultItem>
            
            <ResultItem>
              <ResultLabel>Formation rule:</ResultLabel>
              <ResultValue>{result.partitive.rule}</ResultValue>
            </ResultItem>
            
            <ResultItem>
              <ResultLabel>Common usage:</ResultLabel>
              <ResultValue>
                <ul style={{ margin: 0, paddingLeft: '1rem' }}>
                  {result.usage.map((use, index) => (
                    <li key={index}>{use}</li>
                  ))}
                </ul>
              </ResultValue>
            </ResultItem>
            
            <ResultItem>
              <ResultLabel>Partitive singular examples:</ResultLabel>
              <ResultValue>
                {result.examples.map((example, index) => (
                  <div key={index} style={{ marginBottom: '0.5rem' }}>
                    {example}
                    <ExampleSentence>{result.translations[index]}</ExampleSentence>
                  </div>
                ))}
              </ResultValue>
            </ResultItem>
            
            <ResultItem>
              <ResultLabel>Partitive plural examples:</ResultLabel>
              <ResultValue>
                {result.partitivePluralExamples.map((example, index) => (
                  <div key={index} style={{ marginBottom: '0.5rem' }}>
                    {example}
                    <ExampleSentence>{result.partitivePluralTranslations[index]}</ExampleSentence>
                  </div>
                ))}
              </ResultValue>
            </ResultItem>
            
            <ResultItem>
              <ResultLabel>Notes:</ResultLabel>
              <ResultValue>{result.notes}</ResultValue>
            </ResultItem>
          </ResultContainer>
        )}
      </PracticeContainer>
    </Container>
  );
};

export default NounPartitivePluralization;