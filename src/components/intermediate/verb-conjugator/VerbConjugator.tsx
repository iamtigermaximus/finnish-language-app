// app/page.tsx
'use client'

import { useState, FormEvent } from 'react';
import styled from 'styled-components';

interface VerbConjugations {
  minä: string;
  sinä: string;
  hän: string;
  me: string;
  te: string;
  he: string;
}

interface VerbTenses {
  present: VerbConjugations;
  past: VerbConjugations;
  negative: VerbConjugations;
  negativePast: VerbConjugations;
}

interface VerbAnalysis {
  verb: string;
  english: string;
  tenses: VerbTenses;
  notes?: string;
  isFinnishInput?: boolean;
}

// Fallback data for common verbs
const fallbackData: Record<string, VerbAnalysis> = {
  olla: {
    verb: "olla",
    english: "to be",
    tenses: {
      present: {
        minä: "olen",
        sinä: "olet",
        hän: "on",
        me: "olemme",
        te: "olette",
        he: "ovat"
      },
      past: {
        minä: "olin",
        sinä: "olit",
        hän: "oli",
        me: "olimme",
        te: "olitte",
        he: "olivat"
      },
      negative: {
        minä: "en ole",
        sinä: "et ole",
        hän: "ei ole",
        me: "emme ole",
        te: "ette ole",
        he: "eivät ole"
      },
      negativePast: {
        minä: "en ollut",
        sinä: "et ollut",
        hän: "ei ollut",
        me: "emme olleet",
        te: "ette olleet",
        he: "eivät olleet"
      }
    },
    notes: "The verb 'olla' is irregular and is one of the most important verbs in Finnish.",
    isFinnishInput: true
  },
  tehdä: {
    verb: "tehdä",
    english: "to do/make",
    tenses: {
      present: {
        minä: "teen",
        sinä: "teet",
        hän: "tekee",
        me: "teemme",
        te: "teette",
        he: "tekevät"
      },
      past: {
        minä: "tein",
        sinä: "teit",
        hän: "teki",
        me: "teimme",
        te: "teitte",
        he: "tekivät"
      },
      negative: {
        minä: "en tee",
        sinä: "et tee",
        hän: "ei tee",
        me: "emme tee",
        te: "ette tee",
        he: "eivät tee"
      },
      negativePast: {
        minä: "en tehnyt",
        sinä: "et tehnyt",
        hän: "ei tehnyt",
        me: "emme tehneet",
        te: "ette tehneet",
        he: "eivät tehneet"
      }
    },
    notes: "The verb 'tehdä' is irregular and changes stem in some forms.",
    isFinnishInput: true
  },
  mennä: {
    verb: "mennä",
    english: "to go",
    tenses: {
      present: {
        minä: "menen",
        sinä: "menet",
        hän: "menee",
        me: "menemme",
        te: "menette",
        he: "menevät"
      },
      past: {
        minä: "menin",
        sinä: "menit",
        hän: "meni",
        me: "menimme",
        te: "menitte",
        he: "menivät"
      },
      negative: {
        minä: "en mene",
        sinä: "et mene",
        hän: "ei mene",
        me: "emme mene",
        te: "ette mene",
        he: "eivät mene"
      },
      negativePast: {
        minä: "en mennyt",
        sinä: "et mennyt",
        hän: "ei mennyt",
        me: "emme menneet",
        te: "ette menneet",
        he: "eivät menneet"
      }
    },
    notes: "The verb 'mennä' is type III verb with consonant gradation.",
    isFinnishInput: true
  },
  tulla: {
    verb: "tulla",
    english: "to come",
    tenses: {
      present: {
        minä: "tulen",
        sinä: "tulet",
        hän: "tulee",
        me: "tulemme",
        te: "tulette",
        he: "tulevat"
      },
      past: {
        minä: "tulin",
        sinä: "tulit",
        hän: "tuli",
        me: "tulimme",
        te: "tulitte",
        he: "tulivat"
      },
      negative: {
        minä: "en tule",
        sinä: "et tule",
        hän: "ei tule",
        me: "emme tule",
        te: "ette tule",
        he: "eivät tule"
      },
      negativePast: {
        minä: "en tullut",
        sinä: "et tullut",
        hän: "ei tullut",
        me: "emme tulleet",
        te: "ette tulleet",
        he: "eivät tulleet"
      }
    },
    notes: "The verb 'tulla' is a type I verb.",
    isFinnishInput: true
  }
};

// Styled components
const Container = styled.div`
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`

const ContentContainer = styled.div`
  max-width: 56rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

const Header = styled.header`
  /* text-align: center; */
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1e40af;
  margin-bottom: 1rem;

  @media (min-width: 640px) {
    font-size: 1.875rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
`;

const Form = styled.form`
  margin-bottom: 2rem;
`;

const FormLabel = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: #374151;
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

const ErrorMessage = styled.div`
  padding: 1rem;
  margin-bottom: 1.5rem;
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 0.5rem;
  color: #dc2626;
`;

const LoadingContainer = styled.div`
  padding: 2rem;
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ResultContainer = styled.div`
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 1.5rem;
`;

const ResultHeader = styled.div`
  padding: 1.5rem;
  background-color: #1d4ed8;
  color: white;
`;

const ResultTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

const ResultSubtitle = styled.p`
  color: #bfdbfe;
`;

const ResultMeta = styled.p`
  color: #93c5fd;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const ResultContent = styled.div`
  padding: 1.5rem;
`;

const TenseButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TenseTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1rem;
`;

const ConjugationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ConjugationItem = styled.div`
  background-color: #f9fafb;
  padding: 1rem;
  border-radius: 0.5rem;
`;

const Pronoun = styled.span`
  font-weight: 500;
  color: #374151;
`;

const Conjugation = styled.span`
  margin-left: 0.5rem;
  color: #1d4ed8;
  font-weight: 500;
`;

const NotesContainer = styled.div`
  background-color: #fffbeb;
  padding: 1rem;
  border-left: 4px solid #f59e0b;
  border-radius: 0.25rem;
  margin-top: 1.5rem;
`;

const NotesTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
`;

const NotesText = styled.p`
  color: #374151;
`;

const WelcomeContainer = styled.div`
  background-color: #f8f9fa;
  border-radius: 0.75rem;
  /* box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); */
  padding: 1.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const WelcomeText = styled.p`
  color: #6b7280;
`;

const ExamplesContainer = styled.div`
  background-color: #DBE9FE;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 1.5rem;
  text-align: left;
`;

const ExamplesTitle = styled.h4`
  font-weight: 500;
  color: #1e40af;
  margin-bottom: 0.5rem;
`;

const ExamplesList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  color: #2563eb;
`;

// Interface for API response data that might come in different formats
interface ApiVerbResponse {
  verb?: string;
  english?: string;
  tenses?: VerbTenses;
  conjugations?: VerbConjugations;
  negative?: string;
  notes?: string;
  isFinnishInput?: boolean;
}

export default function VerbConjugator() {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<VerbAnalysis | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [activeTense, setActiveTense] = useState<string>('present');

  const analyzeVerb = async (verb: string): Promise<void> => {
    setLoading(true);
    setError('');
    
    // Check if we have fallback data for this verb
    const lowerVerb = verb.toLowerCase();
    if (fallbackData[lowerVerb]) {
      setResult(fallbackData[lowerVerb]);
      setLoading(false);
      return;
    }
    
    try {
      const response = await fetch('/api/analyze-verb', {
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

      const data: ApiVerbResponse = await response.json();
      
      // Transform the data if it comes in a different format
      const transformedData = transformVerbData(data, verb);
      setResult(transformedData);
      setActiveTense('present');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to analyze verb. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Function to transform data from various formats to our expected format
  const transformVerbData = (data: ApiVerbResponse, originalVerb: string): VerbAnalysis => {
    // If data already has the expected format, return it as is
    if (data.tenses && data.tenses.present && data.tenses.past && 
        data.tenses.negative && data.tenses.negativePast) {
      return data as VerbAnalysis;
    }
    
    // If data has the old format with just conjugations and negative, create full tenses
    if (data.conjugations && data.negative) {
      return {
        verb: data.verb || originalVerb,
        english: data.english || `to ${originalVerb}`,
        tenses: {
          present: data.conjugations,
          past: generatePastTense(data.conjugations),
          negative: generateNegativePresent(data.negative),
          negativePast: generateNegativePast(data.negative)
        },
        notes: data.notes,
        isFinnishInput: data.isFinnishInput
      };
    }
    
    // If we can't transform, use a fallback
    return fallbackData.olla;
  };

  // Helper functions to generate missing tenses
  const generatePastTense = (present: VerbConjugations): VerbConjugations => {
    // Simple rule-based past tense generation
    const baseForm = Object.values(present)[0]; // Get first conjugation to extract stem
    
    // Very basic past tense generation rules for Finnish
    // This is a simplified approach and won't work for all verbs
    let pastSuffix = "i";
    if (baseForm.endsWith('da') || baseForm.endsWith('dä')) {
      pastSuffix = "si";
    }
    
    return {
      minä: `${baseForm.replace(/[aä]?$/, '')}${pastSuffix}n`,
      sinä: `${baseForm.replace(/[aä]?$/, '')}${pastSuffix}t`,
      hän: `${baseForm.replace(/[aä]?$/, '')}${pastSuffix}`,
      me: `${baseForm.replace(/[aä]?$/, '')}${pastSuffix}mme`,
      te: `${baseForm.replace(/[aä]?$/, '')}${pastSuffix}tte`,
      he: `${baseForm.replace(/[aä]?$/, '')}${pastSuffix}vät`
    };
  };

  const generateNegativePresent = (negative: string): VerbConjugations => {
    // Extract the verb stem from negative form
    const verbStem = negative.replace('ei ', '');
    return {
      minä: `en ${verbStem}`,
      sinä: `et ${verbStem}`,
      hän: `ei ${verbStem}`,
      me: `emme ${verbStem}`,
      te: `ette ${verbStem}`,
      he: `eivät ${verbStem}`
    };
  };

  const generateNegativePast = (negative: string): VerbConjugations => {
    // Extract the verb stem and add past tense marker
    const verbStem = negative.replace('ei ', '');
    // Simple rule for creating negative past - this is simplified
    let pastForm = verbStem;
    if (verbStem.endsWith('a') || verbStem.endsWith('ä')) {
      pastForm = verbStem + 'nut';
    } else if (verbStem.endsWith('da') || verbStem.endsWith('dä')) {
      pastForm = verbStem.replace(/da|dä$/, 'nnut');
    } else {
      pastForm = verbStem + 'nyt';
    }
    
    return {
      minä: `en ${pastForm}`,
      sinä: `et ${pastForm}`,
      hän: `ei ${pastForm}`,
      me: `emme ${pastForm.replace(/nut|nyt$/, 'neet')}`,
      te: `ette ${pastForm.replace(/nut|nyt$/, 'neet')}`,
      he: `eivät ${pastForm.replace(/nut|nyt$/, 'neet')}`
    };
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (input.trim()) {
      analyzeVerb(input.trim());
    }
  };

  const renderTenseButton = (tense: string, label: string) => (
    <Button
      key={tense}
      onClick={() => setActiveTense(tense)}
      $primary={activeTense === tense}
    >
      {label}
    </Button>
  );

  const renderConjugationTable = (conjugations: VerbConjugations) => (
    <ConjugationGrid>
      {Object.entries(conjugations).map(([pronoun, conjugation]) => (
        <ConjugationItem key={pronoun}>
          <Pronoun>{pronoun}:</Pronoun>
          <Conjugation>{conjugation}</Conjugation>
        </ConjugationItem>
      ))}
    </ConjugationGrid>
  );

  return (
    <Container>
      <ContentContainer>
        <Header>
          <Title>Verb Conjugator</Title>
          <Subtitle>Learn verb forms, tenses, and usage examples</Subtitle>
        </Header>

        <main>
          <Form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <FormLabel htmlFor="verb-input">
                Enter a verb in Finnish or English:
              </FormLabel>
              <InputContainer>
                <Input
                  id="verb-input"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="e.g., 'olla' or 'to be'"
                  disabled={loading}
                />
                <Button
                  type="submit"
                  $primary
                  disabled={loading || !input.trim()}
                >
                  {loading ? 'Analyzing...' : 'Analyze'}
                </Button>
              </InputContainer>
            </div>
          </Form>

          {error && (
            <ErrorMessage>
              {error}
            </ErrorMessage>
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
              <ResultHeader>
                <ResultTitle>{result.verb}</ResultTitle>
                <ResultSubtitle>{result.english}</ResultSubtitle>
                {result.isFinnishInput !== undefined && (
                  <ResultMeta>
                    {result.isFinnishInput ? 'Finnish input' : 'English input'}
                  </ResultMeta>
                )}
              </ResultHeader>
              
              <ResultContent>
                <TenseButtonsContainer>
                  {renderTenseButton('present', 'Present')}
                  {renderTenseButton('past', 'Past')}
                  {renderTenseButton('negative', 'Negative')}
                  {renderTenseButton('negativePast', 'Negative Past')}
                </TenseButtonsContainer>

                <TenseTitle>
                  {activeTense === 'present' && 'Present Tense'}
                  {activeTense === 'past' && 'Past Tense'}
                  {activeTense === 'negative' && 'Negative Present'}
                  {activeTense === 'negativePast' && 'Negative Past'}
                </TenseTitle>
                
                {renderConjugationTable(result.tenses[activeTense as keyof VerbTenses])}
                
                {result.notes && (
                  <>
                    <NotesTitle>Notes</NotesTitle>
                    <NotesContainer>
                      <NotesText>{result.notes}</NotesText>
                    </NotesContainer>
                  </>
                )}
              </ResultContent>
            </ResultContainer>
          )}

          {!result && !loading && (
            <WelcomeContainer>
              <WelcomeText>
                Enter a Finnish or English verb to see its translation, conjugations, and negative form.
              </WelcomeText>
              <ExamplesContainer>
                <ExamplesTitle>Try these examples:</ExamplesTitle>
                <ExamplesList>
                  <li>olla (to be)</li>
                  <li>tehdä (to do)</li>
                  <li>mennä (to go)</li>
                  <li>tulla (to come)</li>
                </ExamplesList>
              </ExamplesContainer>
            </WelcomeContainer>
          )}
        </main>

    
      </ContentContainer>
    </Container>
  );
}