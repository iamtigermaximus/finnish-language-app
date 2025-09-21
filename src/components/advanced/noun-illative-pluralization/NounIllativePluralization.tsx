'use client'

import { useState, FormEvent } from 'react';
import styled from 'styled-components';

interface IllativeExample {
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

interface IllativeRule {
  name: string;
  description: string;
  examples: IllativeExample[];
}

interface IllativeForms {
  singular: string;
  illative: string;
  illativePlural: string;
  rule: string;
}

interface IllativeAnalysis {
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

// Data for illative case rules
const illativeRules: IllativeRule[] = [
  {
    name: "Basic Illative Formation",
    description: "For most words, add -Vn where V is the last vowel (vowel harmony applies)",
    examples: [
      {
        singular: "talo",
        illative: "taloon",
        illativePlural: "taloihin",
        english: "house",
        usage: "Movement into",
        example: "Menen taloon.",
        translation: "I go into the house.",
        illativePluralExample: "Menen taloihin.",
        illativePluralTranslation: "I go into the houses.",
        notes: "The illative case indicates movement into something. Basic rule: add the last vowel + n."
      },
      {
        singular: "kirja",
        illative: "kirjaan",
        illativePlural: "kirjoihin",
        english: "book",
        usage: "Movement toward",
        example: "Katsen kirjaan.",
        translation: "I look into the book.",
        illativePluralExample: "Katsen kirjoihin.",
        illativePluralTranslation: "I look into the books.",
        notes: "Vowel harmony: a/ä words take -aan/-ään, o/u words take -oon/-öön"
      }
    ]
  },
  {
    name: "Words ending in -e",
    description: "For words ending in -e, add -seen or -siin",
    examples: [
      {
        singular: "perhe",
        illative: "perheeseen",
        illativePlural: "perheisiin",
        english: "family",
        usage: "Joining",
        example: "Liityn perheeseen.",
        translation: "I join the family.",
        illativePluralExample: "Liityn perheisiin.",
        illativePluralTranslation: "I join the families.",
        notes: "Words ending in -e take -seen in singular and -siin in plural illative"
      },
      {
        singular: "kone",
        illative: "koneeseen",
        illativePlural: "koneisiin",
        english: "machine",
        usage: "Movement into",
        example: "Työnnän laatikon koneeseen.",
        translation: "I push the box into the machine.",
        illativePluralExample: "Työnnän laatikot koneisiin.",
        illativePluralTranslation: "I push the boxes into the machines.",
        notes: "The illative indicates physical movement into the machine"
      }
    ]
  },
  {
    name: "Words ending in -i",
    description: "For words ending in -i, various patterns apply",
    examples: [
      {
        singular: "kivi",
        illative: "kiveen",
        illativePlural: "kiviin",
        english: "stone",
        usage: "Movement onto",
        example: "Heitän kiven kiveen.",
        translation: "I throw the stone onto (another) stone.",
        illativePluralExample: "Heitän kivet kiviin.",
        illativePluralTranslation: "I throw the stones onto the stones.",
        notes: "Some -i words undergo consonant gradation in illative"
      },
      {
        singular: "meri",
        illative: "mereen",
        illativePlural: "meriin",
        english: "sea",
        usage: "Movement into",
        example: "Uimme mereen.",
        translation: "We swam into the sea.",
        illativePluralExample: "Uimme meriin.",
        illativePluralTranslation: "We swam into the seas.",
        notes: "Meri undergoes consonant gradation: meri → mereen"
      }
    ]
  },
  {
    name: "Short forms (-hVn, -seen, -siin)",
    description: "Some words have shortened illative forms",
    examples: [
      {
        singular: "maa",
        illative: "maahan",
        illativePlural: "maihin",
        english: "land/earth",
        usage: "Movement onto",
        example: "Astun maahan.",
        translation: "I step onto the ground.",
        illativePluralExample: "Astun maihin.",
        illativePluralTranslation: "I step onto the lands.",
        notes: "Short illative form: maa → maahan (instead of maaan)"
      },
      {
        singular: "tie",
        illative: "tiehen",
        illativePlural: "teihin",
        english: "road",
        usage: "Movement onto",
        example: "Käännyin tiehen.",
        translation: "I turned onto the road.",
        illativePluralExample: "Käännyimme teihin.",
        illativePluralTranslation: "We turned onto the roads.",
        notes: "Tie undergoes consonant gradation and takes short form: tie → tiehen"
      }
    ]
  },
  {
    name: "Consonant Gradation in Illative",
    description: "Some words undergo consonant gradation in illative",
    examples: [
      {
        singular: "kukka",
        illative: "kukkaan",
        illativePlural: "kukkiin",
        english: "flower",
        usage: "Movement toward",
        example: "Kurkistan kukkaan.",
        translation: "I peek into the flower.",
        illativePluralExample: "Kurkistan kukkiin.",
        illativePluralTranslation: "I peek into the flowers.",
        notes: "No consonant gradation in illative for kukka"
      },
      {
        singular: "lakki",
        illative: "lakkiin",
        illativePlural: "lakkeihin",
        english: "cap",
        usage: "Putting on",
        example: "Puen lakkiin päähäni.",
        translation: "I put the cap on my head.",
        illativePluralExample: "Puen lakkeihin päähäni.",
        illativePluralTranslation: "I put the caps on my head.",
        notes: "No consonant gradation in illative singular, but plural shows gradation"
      }
    ]
  },
  {
    name: "Special cases and exceptions",
    description: "Words with irregular illative forms",
    examples: [
      {
        singular: "suomi",
        illative: "suomeen",
        illativePlural: "suomiin",
        english: "Finnish language",
        usage: "Learning/entering",
        example: "Opiskelen suomeen.",
        translation: "I study into Finnish (I'm learning Finnish).",
        illativePluralExample: "Opiskelen suomiin.",
        illativePluralTranslation: "I study into Finnish languages.",
        notes: "Suomi undergoes consonant gradation: suomi → suomeen"
      },
      {
        singular: "vesi",
        illative: "veteen",
        illativePlural: "vesiin",
        english: "water",
        usage: "Movement into",
        example: "Hyppään veteen.",
        translation: "I jump into the water.",
        illativePluralExample: "Hyppään vesiin.",
        illativePluralTranslation: "I jump into the waters.",
        notes: "Vesi undergoes consonant gradation: vesi → veteen"
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

// Function to determine the illative form based on rules
const getIllativeForm = (singular: string): IllativeAnalysis | null => {
  const lowerSingular = singular.toLowerCase();
  
  // Check each rule pattern
  for (const rule of illativeRules) {
    for (const example of rule.examples) {
      // Simple pattern matching based on endings
      if (lowerSingular.endsWith(example.singular.slice(-2))) {
        return {
          noun: example.singular,
          english: example.english,
          illative: {
            singular: example.singular,
            illative: example.illative,
            illativePlural: example.illativePlural,
            rule: rule.name
          },
          usage: [example.usage],
          examples: [example.example],
          translations: [example.translation],
          illativePluralExamples: [example.illativePluralExample],
          illativePluralTranslations: [example.illativePluralTranslation],
          notes: example.notes,
          isFinnishInput: true
        };
      }
    }
  }
  
  return null;
};

const IllativeTutorial = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<IllativeAnalysis | null>(null);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const analyzeIllative = async (noun: string): Promise<void> => {
    setLoading(true);
    setError('');
    setSuccess('');
    
    // First try our local rule-based approach
    const localResult = getIllativeForm(noun);
    if (localResult) {
      setResult(localResult);
      setSuccess(`Illative form found for "${noun}"`);
      setLoading(false);
      return;
    }
    
    // If local approach fails, try the API
    try {
      const response = await fetch('/api/noun-illative-pluralization', {
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

      const data: IllativeAnalysis = await response.json();
      
      if (data) {
        setResult(data);
        setSuccess(`Illative forms found for "${noun}"`);
      } else {
        throw new Error('No illative data received from API');
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
    
    analyzeIllative(input.trim());
  };

  return (
    <Container>
      <Header>
        <Title>Finnish Illative Case Pluralization</Title>
        <Subtitle>Learn how to form and use the illative case in Finnish</Subtitle>
      </Header>

      <ContentContainer>
        <p>
          The illative case is one of the six locative cases in Finnish and indicates movement into or toward something.
          It answers the question &quot;mihin?&quot; (where to?) and is essential for expressing direction.
        </p>
        
        <UsageExplanation>
          <UsageTitle>When to Use the Illative Case:</UsageTitle>
          <UsageList>
            <UsageListItem>Movement into something (Menen taloon. - I go into the house.)</UsageListItem>
            <UsageListItem>Movement toward something (Kävelen kouluun. - I walk to school.)</UsageListItem>
            <UsageListItem>Figurative movement (Rakastuin häneen. - I fell in love with him/her.)</UsageListItem>
            <UsageListItem>Change of state (Jäädyin jääksi. - I froze into ice.)</UsageListItem>
            <UsageListItem>With certain verbs (uskoa johonkin - to believe in something)</UsageListItem>
          </UsageList>
        </UsageExplanation>
      </ContentContainer>

      {illativeRules.map((rule, index) => (
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
                  <CardLabel>Illative:</CardLabel>
                  <CardValue>{example.illative}</CardValue>
                </CardRow>
                <CardRow>
                  <CardLabel>Illative Plural:</CardLabel>
                  <CardValue>{example.illativePlural}</CardValue>
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
                    {example.illativePluralExample}
                    <ExampleSentence>{example.illativePluralTranslation}</ExampleSentence>
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
                <TableHeader>Illative</TableHeader>
                <TableHeader>Illative Plural</TableHeader>
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
                  <TableCell>{example.illative}</TableCell>
                  <TableCell>{example.illativePlural}</TableCell>
                  <TableCell>{example.usage}</TableCell>
                  <TableCell>
                    {example.example}
                    <ExampleSentence>{example.translation}</ExampleSentence>
                  </TableCell>
                  <TableCell>
                    {example.illativePluralExample}
                    <ExampleSentence>{example.illativePluralTranslation}</ExampleSentence>
                  </TableCell>
                </tr>
              ))}
            </tbody>
          </ExampleTable>
        </ContentContainer>
      ))}

      <PracticeContainer>
        <PracticeTitle>Practice Illative Formation</PracticeTitle>
        <p>Enter a Finnish noun to see its illative form:</p>
        
        <Form onSubmit={handleSubmit}>
          <FormLabel htmlFor="noun-input">
            Enter a Finnish or English noun:
          </FormLabel>
          <InputContainer>
            <Input
              id="noun-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., talo, koulu, kirja"
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
            <ResultTitle>Illative Results for &quot;{result.noun}&quot; ({result.english})</ResultTitle>
            
            <ResultItem>
              <ResultLabel>Illative singular:</ResultLabel>
              <ResultValue>{result.illative.illative}</ResultValue>
            </ResultItem>
            
            <ResultItem>
              <ResultLabel>Illative plural:</ResultLabel>
              <ResultValue>{result.illative.illativePlural}</ResultValue>
            </ResultItem>
            
            <ResultItem>
              <ResultLabel>Formation rule:</ResultLabel>
              <ResultValue>{result.illative.rule}</ResultValue>
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
              <ResultLabel>Illative singular examples:</ResultLabel>
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
              <ResultLabel>Illative plural examples:</ResultLabel>
              <ResultValue>
                {result.illativePluralExamples.map((example, index) => (
                  <div key={index} style={{ marginBottom: '0.5rem' }}>
                    {example}
                    <ExampleSentence>{result.illativePluralTranslations[index]}</ExampleSentence>
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

export default IllativeTutorial;