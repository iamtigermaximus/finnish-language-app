'use client'

import { useState, FormEvent } from 'react';
import styled from 'styled-components';

interface VerbalNounExample {
  verb: string;
  verbalNoun: string;
  english: string;
  type: string;
  usage: string;
  example: string;
  translation: string;
  notes: string;
}

interface VerbalNounRule {
  name: string;
  description: string;
  examples: VerbalNounExample[];
}

interface VerbalNounForms {
  verb: string;
  verbalNoun: string;
  rule: string;
}

interface VerbalNounAnalysis {
  verb: string;
  english: string;
  verbalNoun: VerbalNounForms;
  usage: string[];
  examples: string[];
  translations: string[];
  notes: string;
  isFinnishInput: boolean;
}

// Data for verbal noun rules
const verbalNounRules: VerbalNounRule[] = [
  {
    name: "-minen nouns (action nouns)",
    description: "Formed by adding -minen to the verb stem, indicating the action or process",
    examples: [
      {
        verb: "opiskella",
        verbalNoun: "opiskeleminen",
        english: "to study",
        type: "Action noun",
        usage: "General action or process",
        example: "Opiskeleminen on tärkeää.",
        translation: "Studying is important.",
        notes: "The most common type of verbal noun, formed by adding -minen to the verb stem"
      },
      {
        verb: "lukea",
        verbalNoun: "lukeminen",
        english: "to read",
        type: "Action noun",
        usage: "General action or process",
        example: "Lukeminen on hauskaa.",
        translation: "Reading is fun.",
        notes: "The verb stem + -minen form"
      }
    ]
  },
  {
    name: "-ma/-mä nouns (result nouns)",
    description: "Formed by adding -ma/-mä to the verb stem, indicating the result of an action",
    examples: [
      {
        verb: "tehdä",
        verbalNoun: "teos",
        english: "to do/make",
        type: "Result noun",
        usage: "Result or product of action",
        example: "Tämä on kaunis teos.",
        translation: "This is a beautiful work.",
        notes: "Indicates the result or product of the action"
      },
      {
        verb: "kirjoittaa",
        verbalNoun: "kirjoitus",
        english: "to write",
        type: "Result noun",
        usage: "Written product",
        example: "Hänen kirjoituksensa on mielenkiintoinen.",
        translation: "His/her writing is interesting.",
        notes: "Often indicates a physical or concrete result"
      }
    ]
  },
  {
    name: "-nta/-ntä nouns (action/result nouns)",
    description: "Formed by adding -nta/-ntä to the verb stem",
    examples: [
      {
        verb: "ostaa",
        verbalNoun: "ostos",
        english: "to buy",
        type: "Result noun",
        usage: "Result of buying",
        example: "Ostokset ovat pöydällä.",
        translation: "The purchases are on the table.",
        notes: "Often used for shopping items"
      },
      {
        verb: "myydä",
        verbalNoun: "myynti",
        english: "to sell",
        type: "Action noun",
        usage: "Action of selling",
        example: "Myynti on kasvanut.",
        translation: "Sales have grown.",
        notes: "Refers to the action or process of selling"
      }
    ]
  },
  {
    name: "-u/-y nouns (abstract nouns)",
    description: "Formed by adding -u/-y to the verb stem, indicating abstract concepts",
    examples: [
      {
        verb: "elää",
        verbalNoun: "elämä",
        english: "to live",
        type: "Abstract noun",
        usage: "Abstract concept",
        example: "Elämä on kaunista.",
        translation: "Life is beautiful.",
        notes: "Creates abstract nouns from verbs"
      },
      {
        verb: "ymmärtää",
        verbalNoun: "ymmärrys",
        english: "to understand",
        type: "Abstract noun",
        usage: "Abstract concept",
        example: "Ymmärrys on tärkeää.",
        translation: "Understanding is important.",
        notes: "Forms abstract concepts from verbs"
      }
    ]
  },
  {
    name: "-os/-ös nouns (result nouns)",
    description: "Formed by adding -os/-ös to the verb stem, indicating results or products",
    examples: [
      {
        verb: "vastata",
        verbalNoun: "vastaus",
        english: "to answer",
        type: "Result noun",
        usage: "Result of answering",
        example: "Vastaus on oikein.",
        translation: "The answer is correct.",
        notes: "Indicates the result or product of an action"
      },
      {
        verb: "ehdottaa",
        verbalNoun: "ehdotus",
        english: "to suggest",
        type: "Result noun",
        usage: "Result of suggesting",
        example: "Ehdotus hyväksyttiin.",
        translation: "The suggestion was accepted.",
        notes: "The result or product of the verbal action"
      }
    ]
  },
  {
    name: "-imus/-ymys nouns (abstract result nouns)",
    description: "Formed by adding -imus/-ymys to the verb stem",
    examples: [
      {
        verb: "tuntea",
        verbalNoun: "tunne",
        english: "to feel",
        type: "Abstract noun",
        usage: "Emotional state",
        example: "Tunne on voimakas.",
        translation: "The feeling is strong.",
        notes: "Creates abstract nouns related to emotions or states"
      },
      {
        verb: "ajatella",
        verbalNoun: "ajatus",
        english: "to think",
        type: "Abstract noun",
        usage: "Result of thinking",
        example: "Ajatus on mielenkiintoinen.",
        translation: "The thought is interesting.",
        notes: "The result or product of mental activity"
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

// Function to determine the verbal noun form based on rules
const getVerbalNounForm = (verb: string): VerbalNounAnalysis | null => {
  const lowerVerb = verb.toLowerCase();
  
  // Check each rule pattern
  for (const rule of verbalNounRules) {
    for (const example of rule.examples) {
      // Simple pattern matching based on verb
      if (lowerVerb === example.verb) {
        return {
          verb: example.verb,
          english: example.english,
          verbalNoun: {
            verb: example.verb,
            verbalNoun: example.verbalNoun,
            rule: rule.name
          },
          usage: [example.usage],
          examples: [example.example],
          translations: [example.translation],
          notes: example.notes,
          isFinnishInput: true
        };
      }
    }
  }
  
  return null;
};

const NounFormVerb = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<VerbalNounAnalysis | null>(null);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const analyzeVerbalNoun = async (verb: string): Promise<void> => {
    setLoading(true);
    setError('');
    setSuccess('');
    
    // First try our local rule-based approach
    const localResult = getVerbalNounForm(verb);
    if (localResult) {
      setResult(localResult);
      setSuccess(`Verbal noun found for "${verb}"`);
      setLoading(false);
      return;
    }
    
    // If local approach fails, try the API
    try {
      const response = await fetch('/api/noun-form-verb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ verb }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to analyze verb');
      }

      const data: VerbalNounAnalysis = await response.json();
      
      if (data) {
        setResult(data);
        setSuccess(`Verbal noun found for "${verb}"`);
      } else {
        throw new Error('No verbal noun data received from API');
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to analyze verb. Please try a different word.');
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
      setError('Please enter a verb');
      return;
    }
    
    analyzeVerbalNoun(input.trim());
  };

  return (
    <Container>
      <Header>
        <Title>Noun Form of Verbs</Title>
        <Subtitle>Learn how nouns are formed from verbs in Finnish</Subtitle>
      </Header>

      <ContentContainer>
        <p>
          Verbal nouns (nomina verbalia) are nouns derived from verbs. They allow us to talk about
          actions, processes, and results as if they were things or concepts.
        </p>
        
        <UsageExplanation>
          <UsageTitle>Types of Verbal Nouns in Finnish:</UsageTitle>
          <UsageList>
            <UsageListItem><strong>Action nouns (-minen)</strong>: Describe the action or process itself (opiskeleminen - studying)</UsageListItem>
            <UsageListItem><strong>Result nouns (-ma/-mä, -os/-ös)</strong>: Describe the result or product of an action (kirjoitus - writing, vastaus - answer)</UsageListItem>
            <UsageListItem><strong>Abstract nouns (-us/-ys, -uus/-yys)</strong>: Describe abstract concepts (elämä - life, ymmärrys - understanding)</UsageListItem>
            <UsageListItem><strong>Agent nouns (-ja/-jä)</strong>: Describe the person who performs the action (opettaja - teacher)</UsageListItem>
          </UsageList>
        </UsageExplanation>
      </ContentContainer>

      {verbalNounRules.map((rule, index) => (
        <ContentContainer key={index}>
          <RuleTitle>{rule.name}</RuleTitle>
          <RuleDescription>{rule.description}</RuleDescription>
          
          {/* Mobile Card View */}
          <ExampleCardsContainer>
            {rule.examples.map((example, idx) => (
              <ExampleCard key={idx}>
                <CardRow>
                  <CardLabel>Verb:</CardLabel>
                  <CardValue>{example.verb} ({example.english})</CardValue>
                </CardRow>
                <CardRow>
                  <CardLabel>Verbal Noun:</CardLabel>
                  <CardValue>{example.verbalNoun}</CardValue>
                </CardRow>
                <CardRow>
                  <CardLabel>Type:</CardLabel>
                  <CardValue>{example.type}</CardValue>
                </CardRow>
                <CardRow>
                  <CardLabel>Usage:</CardLabel>
                  <CardValue>{example.usage}</CardValue>
                </CardRow>
                <CardRow>
                  <CardLabel>Example:</CardLabel>
                  <CardValue>
                    {example.example}
                    <ExampleSentence>{example.translation}</ExampleSentence>
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
                <TableHeader>Verb (English)</TableHeader>
                <TableHeader>Verbal Noun</TableHeader>
                <TableHeader>Type</TableHeader>
                <TableHeader>Usage</TableHeader>
                <TableHeader>Example</TableHeader>
              </tr>
            </thead>
            <tbody>
              {rule.examples.map((example, idx) => (
                <tr key={idx}>
                  <TableCell>
                    {example.verb} ({example.english})
                  </TableCell>
                  <TableCell>{example.verbalNoun}</TableCell>
                  <TableCell>{example.type}</TableCell>
                  <TableCell>{example.usage}</TableCell>
                  <TableCell>
                    {example.example}
                    <ExampleSentence>{example.translation}</ExampleSentence>
                  </TableCell>
                </tr>
              ))}
            </tbody>
          </ExampleTable>
        </ContentContainer>
      ))}

      <PracticeContainer>
        <PracticeTitle>Practice Verbal Noun Formation</PracticeTitle>
        <p>Enter a Finnish verb to see its verbal noun forms:</p>
        
        <Form onSubmit={handleSubmit}>
          <FormLabel htmlFor="verb-input">
            Enter a Finnish verb:
          </FormLabel>
          <InputContainer>
            <Input
              id="verb-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., opiskella, lukea, tehdä"
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
            <ResultTitle>Verbal Noun Results for &quot;{result.verb}&quot; ({result.english})</ResultTitle>
            
            <ResultItem>
              <ResultLabel>Verbal noun:</ResultLabel>
              <ResultValue>{result.verbalNoun.verbalNoun}</ResultValue>
            </ResultItem>
            
            <ResultItem>
              <ResultLabel>Formation rule:</ResultLabel>
              <ResultValue>{result.verbalNoun.rule}</ResultValue>
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
              <ResultLabel>Example:</ResultLabel>
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
              <ResultLabel>Notes:</ResultLabel>
              <ResultValue>{result.notes}</ResultValue>
            </ResultItem>
          </ResultContainer>
        )}
      </PracticeContainer>
    </Container>
  );
};

export default NounFormVerb;