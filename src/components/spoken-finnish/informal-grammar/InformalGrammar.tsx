// components/InformalGrammar.tsx
'use client';

import { useState, FormEvent } from 'react';
import styled from 'styled-components';

// Interfaces
interface GrammarExample {
  informal: string;
  formal: string;
  english: string;
  usage: string;
  notes?: string;
}

interface GrammarRule {
  name: string;
  description: string;
  examples: GrammarExample[];
}

interface GrammarAnalysis {
  input: string;
  informal: string;
  formal: string;
  english: string;
  rule: string;
  notes: string;
  isFinnishInput: boolean;
}

// Example rules with multiple examples
const grammarRules: GrammarRule[] = [
  {
    name: "Informal Pronouns",
    description: "Common informal pronouns vs. formal forms",
    examples: [
      { informal: "sä", formal: "sinä", english: "you (singular)", usage: "Casual speech" },
      { informal: "mei", formal: "me", english: "we", usage: "Casual speech" },
      { informal: "tei", formal: "te", english: "you (plural)", usage: "Casual speech" },
      { informal: "se", formal: "hän", english: "he/she", usage: "Casual third person" },
      { informal: "ne", formal: "he", english: "they", usage: "Casual third person plural" },
    ],
  },
  {
    name: "Informal Verb Contractions",
    description: "Common spoken verb contractions",
    examples: [
      { informal: "oot", formal: "olet", english: "are", usage: "Casual 'to be' with 'sä'" },
      { informal: "tiiä", formal: "tiedä", english: "know", usage: "Casual spoken contraction" },
      { informal: "mennään", formal: "mennään", english: "let's go", usage: "Friendly suggestion" },
      { informal: "kato", formal: "katso", english: "look", usage: "Casual command" },
      { informal: "ei mee", formal: "ei mene", english: "it won't", usage: "Informal negation" },
      { informal: "tulee", formal: "tulee", english: "comes", usage: "Informal spoken" },
      { informal: "tui", formal: "tule", english: "come", usage: "Dialectal/informal" },
    ],
  },
  {
    name: "Negation (Informal)",
    description: "Spoken contractions of negation",
    examples: [
      { informal: "en tiiä", formal: "en tiedä", english: "I don't know", usage: "Casual spoken" },
      { informal: "ei oo", formal: "ei ole", english: "isn't / isn't it", usage: "Informal 'to be' negation" },
      { informal: "ei nää", formal: "ei näe", english: "can't see", usage: "Informal spoken" },
      { informal: "ei tuu", formal: "ei tule", english: "won't come", usage: "Casual negation" },
      { informal: "ei jaksa", formal: "ei jaksa", english: "can't be bothered", usage: "Casual expression" },
    ],
  },
  {
    name: "Casual Questions & Expressions",
    description: "Everyday casual phrases and shortened questions",
    examples: [
      { informal: "mitä sä?", formal: "mitä sinä teet?", english: "what are you doing?", usage: "Casual spoken" },
      { informal: "joo", formal: "kyllä", english: "yes", usage: "Short affirmation" },
      { informal: "ei joo", formal: "ei", english: "no", usage: "Casual negation" },
      { informal: "ei mitään", formal: "ei mitään", english: "it's nothing / no problem", usage: "Same as formal, casual tone" },
      { informal: "kato!", formal: "katso!", english: "look!", usage: "Casual command" },
      { informal: "moikka", formal: "hei", english: "hi / bye", usage: "Casual greeting/farewell" },
      { informal: "terve!", formal: "hei!", english: "hi!", usage: "Friendly greeting" },
    ],
  },
  {
    name: "Informal Verbal Patterns",
    description: "Dropping endings or combining words",
    examples: [
      { informal: "et tiiä", formal: "et tiedä", english: "you don't know", usage: "Negation contraction" },
      { informal: "mä meen", formal: "minä menen", english: "I'm going", usage: "Pronoun + verb contraction" },
      { informal: "sä tuut?", formal: "sinä tulet?", english: "are you coming?", usage: "Casual spoken question" },
      { informal: "jääks", formal: "jääkö?", english: "shall we stay?", usage: "Casual contraction of auxiliary verbs" },
      { informal: "menoo", formal: "menee", english: "goes", usage: "Informal elongated vowels" },
      { informal: "mikä meininki?", formal: "mikä on tilanne?", english: "what's up?", usage: "Casual inquiry" },
    ],
  },
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
// const UsageExplanation = styled.div`
//   background-color: #f0f9ff;
//   border-left: 4px solid #0ea5e9;
//   padding: 1rem;
//   margin: 1.5rem 0;
//   border-radius: 0.25rem;
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

// const ExampleSentence = styled.div`
//   margin-top: 0.5rem;
//   font-style: italic;
//   color: #4b5563;
//   font-size: 0.875rem;
// `;

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

// const RuleContainer = styled.div`
//   margin-bottom: 1.5rem;

//   @media (min-width: 640px) {
//     margin-bottom: 2rem;
//   }
// `;

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

// Main component
const InformalGrammar = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<GrammarAnalysis | null>(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const analyzeGrammar = async (verb: string) => {
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/informal-grammar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input: verb }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to analyze');
      }

      const data: GrammarAnalysis = await response.json();
      setResult(data);
      setSuccess(`Informal grammar info found for "${verb}"`);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to analyze verb');
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) {
      setError('Please enter a verb or phrase');
      return;
    }
    analyzeGrammar(input.trim());
  };

  return (
    <Container>
      <Header>
        <Title>Finnish Informal Grammar</Title>
        <Subtitle>Learn common informal forms, spoken contractions, and casual expressions</Subtitle>
      </Header>

      {grammarRules.map((rule, idx) => (
        <ContentContainer key={idx}>
          <RuleTitle>{rule.name}</RuleTitle>
          <RuleDescription>{rule.description}</RuleDescription>
                {/* Mobile Card View */}
          <ExampleCardsContainer>
            {rule.examples.map((example, idx) => (
              <ExampleCard key={idx}>
                <CardRow>
                  <CardLabel>Informal:</CardLabel>
                  <CardValue>{example.informal} ({example.english})</CardValue>
                </CardRow>
                <CardRow>
                  <CardLabel>Formal:</CardLabel>
                  <CardValue>{example.formal}</CardValue>
                </CardRow>
                <CardRow>
                  <CardLabel>English:</CardLabel>
                  <CardValue>{example.english}</CardValue>
                </CardRow>
                <CardRow>
                  <CardLabel>Usage:</CardLabel>
                  <CardValue>{example.usage}</CardValue>
                </CardRow>
                <CardRow>
                  <CardLabel>Notes:</CardLabel>
                  <CardValue>{example.notes}</CardValue>
                </CardRow>
              </ExampleCard>
            ))}
          </ExampleCardsContainer>
          <ExampleTable>
            <thead>
              <tr>
                <TableHeader>Informal</TableHeader>
                <TableHeader>Formal (Kirjakieli)</TableHeader>
                <TableHeader>English</TableHeader>
                <TableHeader>Usage</TableHeader>
                <TableHeader>Notes</TableHeader>
              </tr>
            </thead>
            <tbody>
              {rule.examples.map((ex, i) => (
                <tr key={i}>
                  <TableCell>{ex.informal}</TableCell>
                  <TableCell>{ex.formal}</TableCell>
                  <TableCell>{ex.english}</TableCell>
                  <TableCell>{ex.usage}</TableCell>
                  <TableCell>{ex.notes || '-'}</TableCell>
                </tr>
              ))}
            </tbody>
          </ExampleTable>
        </ContentContainer>
      ))}

      <PracticeContainer>
        <PracticeTitle>Practice Informal Grammar</PracticeTitle>
        <Form onSubmit={handleSubmit}>
          <FormLabel htmlFor="input">Enter a Finnish verb or phrase:</FormLabel>
          <InputContainer>
            <Input
              id="input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., sä oot, tiiä, ei mee"
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
            <ResultTitle>Analysis for &quot;{result.input}&quot;</ResultTitle>
            <ResultItem>
              <ResultLabel>Informal Form:</ResultLabel>
              <ResultValue>{result.informal}</ResultValue>
            </ResultItem>
            <ResultItem>
              <ResultLabel>Formal (Kirjakieli):</ResultLabel>
              <ResultValue>{result.formal}</ResultValue>
            </ResultItem>
            <ResultItem>
              <ResultLabel>English:</ResultLabel>
              <ResultValue>{result.english}</ResultValue>
            </ResultItem>
            <ResultItem>
              <ResultLabel>Rule:</ResultLabel>
              <ResultValue>{result.rule}</ResultValue>
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

export default InformalGrammar;
