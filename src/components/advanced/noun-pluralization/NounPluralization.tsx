'use client'

import { useState, FormEvent } from 'react';
import styled from 'styled-components';

interface NounPluralization {
  singular: string;
  singularStem: string;
  pluralStem: string;
  inessive: string;
  adessive: string;
  rule: string;
  english: string;
  exampleSentence: string;
  exampleTranslation: string;
}

interface PluralizationRule {
  name: string;
  description: string;
  examples: NounPluralization[];
}

// Data for noun pluralization rules
const pluralizationRules: PluralizationRule[] = [
  {
    name: "Basic i-addition",
    description: "For words ending in o, ö, u, y - simply add i",
    examples: [
      {
        singular: "koulu",
        singularStem: "koulu-",
        pluralStem: "koului-",
        inessive: "kouluissa",
        adessive: "kouluilla",
        rule: "o, ö, u, y pysyvät + i",
        english: "school",
        exampleSentence: "Kouluissa on paljon oppilaita.",
        exampleTranslation: "There are many students in the schools."
      },
      {
        singular: "talo",
        singularStem: "talo-",
        pluralStem: "taloi-",
        inessive: "taloissa",
        adessive: "taloilla",
        rule: "o, ö, u, y pysyvät + i",
        english: "house",
        exampleSentence: "Taloissa on kauniit puutarhat.",
        exampleTranslation: "The houses have beautiful gardens."
      },
      {
        singular: "sänky",
        singularStem: "sängy-",
        pluralStem: "sängyi-",
        inessive: "sängyissä",
        adessive: "sängyillä",
        rule: "o, ö, u, y pysyvät + i",
        english: "bed",
        exampleSentence: "Sängyissä on pehmeät tyynyt.",
        exampleTranslation: "The beds have soft pillows."
      }
    ]
  },
  {
    name: "Vowel removal + i",
    description: "For words ending in a, ä, e - remove the final vowel and add i",
    examples: [
      {
        singular: "juna",
        singularStem: "juna-",
        pluralStem: "juni-",
        inessive: "junissa",
        adessive: "junilla",
        rule: "a, ä, e otetaan pois + i",
        english: "train",
        exampleSentence: "Junissa on usein täyttä.",
        exampleTranslation: "The trains are often full."
      },
      {
        singular: "kylä",
        singularStem: "kylä-",
        pluralStem: "kyli-",
        inessive: "kylissä",
        adessive: "kylillä",
        rule: "a, ä, e otetaan pois + i",
        english: "village",
        exampleSentence: "Kylissä järjestetään kesäjuhlia.",
        exampleTranslation: "Summer festivals are organized in the villages."
      },
      {
        singular: "ovi",
        singularStem: "ove-",
        pluralStem: "ovi-",
        inessive: "ovissa",
        adessive: "ovilla",
        rule: "a, ä, e otetaan pois + i",
        english: "door",
        exampleSentence: "Ovissa on vahvat lukot.",
        exampleTranslation: "The doors have strong locks."
      }
    ]
  },
  {
    name: "a → oi transformation",
    description: "For two-syllable words with a, i or e in the first syllable",
    examples: [
      {
        singular: "kissa",
        singularStem: "kissa-",
        pluralStem: "kissoi-",
        inessive: "kissoissa",
        adessive: "kissoilla",
        rule: "a → oi (kaksi tavua, ensimmäinen tavu a, i tai e)",
        english: "cat",
        exampleSentence: "Kissoilla on terävät kynnet.",
        exampleTranslation: "The cats have sharp claws."
      },
      {
        singular: "herra",
        singularStem: "herra-",
        pluralStem: "herroi-",
        inessive: "herroissa",
        adessive: "herroilla",
        rule: "a → oi (kaksi tavua, ensimmäinen tavu a, i tai e)",
        english: "gentleman",
        exampleSentence: "Herroilla on hienot puvut.",
        exampleTranslation: "The gentlemen have fine suits."
      },
      {
        singular: "kana",
        singularStem: "kana-",
        pluralStem: "kanoi-",
        inessive: "kanoissa",
        adessive: "kanoilla",
        rule: "a → oi (kaksi tavua, ensimmäinen tavu a, i tai e)",
        english: "chicken",
        exampleSentence: "Kanoilla on siivet, mutta ne eivät lennä korkealle.",
        exampleTranslation: "Chickens have wings, but they don't fly high."
      }
    ]
  },
  {
    name: "Double vowel reduction",
    description: "For words with two vowels - remove the first vowel and add i",
    examples: [
      {
        singular: "puu",
        singularStem: "puu-",
        pluralStem: "pui-",
        inessive: "puissa",
        adessive: "puilla",
        rule: "2 vokaalia, otetaan ensimmäinen pois + i",
        english: "tree",
        exampleSentence: "Puissa pesii lintuja.",
        exampleTranslation: "Birds nest in the trees."
      },
      {
        singular: "työ",
        singularStem: "työ-",
        pluralStem: "töi-",
        inessive: "töissä",
        adessive: "töillä",
        rule: "2 vokaalia, otetaan ensimmäinen pois + i",
        english: "work",
        exampleSentence: "Töissä pitää olla ajoissa.",
        exampleTranslation: "You need to be on time at work."
      },
      {
        singular: "perhe",
        singularStem: "perhee-",
        pluralStem: "perhei-",
        inessive: "perheissä",
        adessive: "perheillä",
        rule: "2 vokaalia, otetaan ensimmäinen pois + i",
        english: "family",
        exampleSentence: "Perheillä on erilaisia traditioita.",
        exampleTranslation: "Families have different traditions."
      }
    ]
  },
  {
    name: "Loanwords with i → ei",
    description: "For loanwords ending in i, change to ei",
    examples: [
      {
        singular: "bussi",
        singularStem: "bussi-",
        pluralStem: "bussei-",
        inessive: "busseissa",
        adessive: "busseilla",
        rule: "i → ei (lainasanat)",
        english: "bus",
        exampleSentence: "Busseissa on ilmastointi.",
        exampleTranslation: "The buses have air conditioning."
      },
      {
        singular: "hotelli",
        singularStem: "hotelli-",
        pluralStem: "hotellei-",
        inessive: "hotelleissa",
        adessive: "hotelleilla",
        rule: "i → ei (lainasanat)",
        english: "hotel",
        exampleSentence: "Hotelleissa on uima-altaita.",
        exampleTranslation: "The hotels have swimming pools."
      },
      {
        singular: "pankki",
        singularStem: "panki-",
        pluralStem: "pankei-",
        inessive: "pankeissa",
        adessive: "pankeilla",
        rule: "i → ei (lainasanat)",
        english: "bank",
        exampleSentence: "Pankeissa on turvajärjestelmät.",
        exampleTranslation: "The banks have security systems."
      }
    ]
  },
  {
    name: "Special cases: si remains",
    description: "Words like käsi and uusi keep si in plural stem",
    examples: [
      {
        singular: "käsi",
        singularStem: "käde-",
        pluralStem: "käsi-",
        inessive: "käsissä",
        adessive: "käsillä",
        rule: "si → si",
        english: "hand",
        exampleSentence: "Käsissä on sormet.",
        exampleTranslation: "There are fingers on the hands."
      },
      {
        singular: "uusi",
        singularStem: "uude-",
        pluralStem: "uusi-",
        inessive: "uusissa",
        adessive: "uusilla",
        rule: "si → si",
        english: "new",
        exampleSentence: "Uusissa autoissa on monia ominaisuuksia.",
        exampleTranslation: "The new cars have many features."
      }
    ]
  },
  {
    name: "Long words with a/ä → oi/öi",
    description: "Words ending in la/lä, na/nä, ra/rä, ija/ijä remove a/ä and add oi/öi",
    examples: [
      {
        singular: "ravintola",
        singularStem: "ravintola-",
        pluralStem: "ravintoloi-",
        inessive: "ravintoloissa",
        adessive: "ravintoloilla",
        rule: "la/lä, na/nä, ra/rä, ija/ijä: otetaan a/ä pois + oi/öi",
        english: "restaurant",
        exampleSentence: "Ravintoloissa tarjoillaan herkullista ruokaa.",
        exampleTranslation: "Delicious food is served in the restaurants."
      },
      {
        singular: "porkkana",
        singularStem: "porkkana-",
        pluralStem: "porkkanoi-",
        inessive: "porkkanoissa",
        adessive: "porkkanoilla",
        rule: "la/lä, na/nä, ra/rä, ija/ijä: otetaan a/ä pois + oi/öi",
        english: "carrot",
        exampleSentence: "Porkkanoissa on paljon A-vitamiinia.",
        exampleTranslation: "Carrots contain a lot of vitamin A."
      },
      {
        singular: "opiskelija",
        singularStem: "opiskelija-",
        pluralStem: "opiskelijoi-",
        inessive: "opiskelijoissa",
        adessive: "opiskelijoilla",
        rule: "la/lä, na/nä, ra/rä, ija/ijä: otetaan a/ä pois + oi/öi",
        english: "student",
        exampleSentence: "Opiskelijoilla on paljon tenttejä.",
        exampleTranslation: "The students have many exams."
      }
    ]
  },
  {
    name: "Long words with a/ä → i",
    description: "Words ending in ma/mä, va/vä, aja/äjä remove a/ä and add i",
    examples: [
      {
        singular: "unelma",
        singularStem: "unelma-",
        pluralStem: "unelmi-",
        inessive: "unelmissa",
        adessive: "unelmilla",
        rule: "ma/mä, va/vä, aja/äjä: otetaan a/ä pois + i",
        english: "dream",
        exampleSentence: "Unelmissa kaikki on mahdollista.",
        exampleTranslation: "Everything is possible in dreams."
      },
      {
        singular: "mukava",
        singularStem: "mukava-",
        pluralStem: "mukavi-",
        inessive: "mukavissa",
        adessive: "mukavilla",
        rule: "ma/mä, va/vä, aja/äjä: otetaan a/ä pois + i",
        english: "nice",
        exampleSentence: "Mukavissa huoneissa on viihtyisä tunnelma.",
        exampleTranslation: "Nice rooms have a cozy atmosphere."
      },
      {
        singular: "opettaja",
        singularStem: "opettaja-",
        pluralStem: "opettaji-",
        inessive: "opettajissa",
        adessive: "opettajilla",
        rule: "ma/mä, va/vä, aja/äjä: otetaan a/ä pois + i",
        english: "teacher",
        exampleSentence: "Opettajilla on tärkeä tehtävä.",
        exampleTranslation: "Teachers have an important task."
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
const UsageExplanation = styled.div`
  background-color: #f0f9ff;
  border-left: 4px solid #0ea5e9;
  padding: 1rem;
  margin: 1.5rem 0;
  border-radius: 0.25rem;
`;

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

// Function to determine the plural stem based on rules
const getPluralStem = (singular: string): NounPluralization | null => {
  const lowerSingular = singular.toLowerCase();
  
  // Check each rule pattern
  for (const rule of pluralizationRules) {
    for (const example of rule.examples) {
      // Simple pattern matching based on endings
      if (lowerSingular.endsWith(example.singular.slice(-2))) {
        // Apply the same transformation as the example
        let pluralStem = "";
        
        if (rule.name === "Basic i-addition") {
          pluralStem = lowerSingular + "i";
        } else if (rule.name === "Vowel removal + i") {
          pluralStem = lowerSingular.slice(0, -1) + "i";
        } else if (rule.name === "a → oi transformation") {
          pluralStem = lowerSingular.slice(0, -1) + "oi";
        } else if (rule.name === "Double vowel reduction") {
          pluralStem = lowerSingular.slice(0, -1) + "i";
        } else if (rule.name === "Loanwords with i → ei") {
          pluralStem = lowerSingular.slice(0, -1) + "ei";
        } else if (rule.name === "Special cases: si remains") {
          pluralStem = lowerSingular;
        } else if (rule.name === "Long words with a/ä → oi/öi") {
          pluralStem = lowerSingular.slice(0, -1) + "oi";
        } else if (rule.name === "Long words with a/ä → i") {
          pluralStem = lowerSingular.slice(0, -1) + "i";
        }
        
        // Generate inessive and adessive forms
        const inessive = pluralStem + "ssa";
        const adessive = pluralStem + "lla";
        
        return {
          singular: lowerSingular,
          singularStem: lowerSingular + "-",
          pluralStem: pluralStem + "-",
          inessive,
          adessive,
          rule: rule.name,
          english: example.english,
          exampleSentence: example.exampleSentence,
          exampleTranslation: example.exampleTranslation
        };
      }
    }
  }
  
  return null;
};

// API response interface
interface ApiNounResponse {
  noun?: string;
  english?: string;
  pluralization?: NounPluralization;
  notes?: string;
  isFinnishInput?: boolean;
}

const NounPluralization= () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<NounPluralization | null>(null);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const analyzeNoun = async (noun: string): Promise<void> => {
    setLoading(true);
    setError('');
    setSuccess('');
    
    // First try our local rule-based approach
    const localResult = getPluralStem(noun);
    if (localResult) {
      setResult(localResult);
      setSuccess(`Plural stem found for "${noun}"`);
      setLoading(false);
      return;
    }
    
    // If local approach fails, try the API
    try {
      const response = await fetch('/api/noun-pluralization', {
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

      const data: ApiNounResponse = await response.json();
      
      if (data.pluralization) {
        setResult(data.pluralization);
        setSuccess(`Plural stem found for "${noun}"`);
      } else {
        throw new Error('No pluralization data received from API');
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
    
    analyzeNoun(input.trim());
  };

return (
  <Container>
    <Header>
      <Title>Finnish Noun Pluralization</Title>
      <Subtitle>Learn how to form plural stems and cases in Finnish</Subtitle>
    </Header>

    <ContentContainer>
    <UsageExplanation>
      <p>
        In Finnish, we need to find the plural stem before adding case suffixes. 
        To transform the singular stem into the plural stem, we typically add the letter &quot;i&quot;, 
        but there are several important rules to follow.
      </p>
      
      <p>
        The following diagrams show the transformation process:
        <br />
        <strong>Perusmuoto (Basic form) → Yksikön vartalo (Singular stem) → Monikon vartalo (Plural stem) → Monikon inessiivi (-ssa/ssä) or adessiivi (-lla/llä)</strong>
      </p>
      </UsageExplanation>
    </ContentContainer>

    {pluralizationRules.map((rule, index) => (
      <ContentContainer key={index}>
        <RuleTitle>{rule.name}</RuleTitle>
        <RuleDescription>{rule.description}</RuleDescription>
        
        {/* Mobile Card View */}
        <ExampleCardsContainer>
          {rule.examples.map((example, idx) => (
            <ExampleCard key={idx}>
              <CardRow>
                <CardLabel>Perusmuoto:</CardLabel>
                <CardValue>{example.singular}</CardValue>
              </CardRow>
              <CardRow>
                <CardLabel>English:</CardLabel>
                <CardValue>{example.english}</CardValue>
              </CardRow>
              <CardRow>
                <CardLabel>Yksikön vartalo:</CardLabel>
                <CardValue>{example.singularStem}</CardValue>
              </CardRow>
              <CardRow>
                <CardLabel>Monikon vartalo:</CardLabel>
                <CardValue>{example.pluralStem}</CardValue>
              </CardRow>
              <CardRow>
                <CardLabel>Monikon inessiivi/adessiivi:</CardLabel>
                <CardValue>{example.inessive}/{example.adessive}</CardValue>
              </CardRow>
              <CardRow>
                <CardLabel>Sääntö:</CardLabel>
                <CardValue>{example.rule}</CardValue>
              </CardRow>
              <CardRow>
                <CardLabel>Example:</CardLabel>
                <CardValue>
                  {example.exampleSentence}
                  <ExampleSentence>{example.exampleTranslation}</ExampleSentence>
                </CardValue>
              </CardRow>
            </ExampleCard>
          ))}
        </ExampleCardsContainer>
        
        {/* Desktop Table View */}
        <ExampleTable>
          <thead>
            <tr>
              <TableHeader>Perusmuoto (Basic form)</TableHeader>
              <TableHeader>English</TableHeader>
              <TableHeader>Yksikön vartalo (Singular stem)</TableHeader>
              <TableHeader>Monikon vartalo (Plural stem)</TableHeader>
              <TableHeader>Monikon inessiivi/adessiivi</TableHeader>
              <TableHeader>Sääntö (Rule)</TableHeader>
            </tr>
          </thead>
          <tbody>
            {rule.examples.map((example, idx) => (
              <tr key={idx}>
                <TableCell>
                  {example.singular}
                  <ExampleSentence>{example.exampleSentence}</ExampleSentence>
                  <ExampleSentence>{example.exampleTranslation}</ExampleSentence>
                </TableCell>
                <TableCell>{example.english}</TableCell>
                <TableCell>{example.singularStem}</TableCell>
                <TableCell>{example.pluralStem}</TableCell>
                <TableCell>{example.inessive}/{example.adessive}</TableCell>
                <TableCell>{example.rule}</TableCell>
              </tr>
            ))}
          </tbody>
        </ExampleTable>
      </ContentContainer>
    ))}

      <PracticeContainer>
        <PracticeTitle>Practice Plural Stem Formation</PracticeTitle>
        <p>Enter a Finnish noun to see its plural stem and case forms:</p>
        
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
              placeholder="e.g., kissa, talo, opettaja"
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
            <ResultTitle>Pluralization Results for &quot;{result.singular}&quot; ({result.english})</ResultTitle>
            
            <ResultItem>
              <ResultLabel>Singular stem:</ResultLabel>
              <ResultValue>{result.singularStem}</ResultValue>
            </ResultItem>
            
            <ResultItem>
              <ResultLabel>Plural stem:</ResultLabel>
              <ResultValue>{result.pluralStem}</ResultValue>
            </ResultItem>
            
            <ResultItem>
              <ResultLabel>Inessive plural (-ssa):</ResultLabel>
              <ResultValue>{result.inessive}</ResultValue>
            </ResultItem>
            
            <ResultItem>
              <ResultLabel>Adessive plural (-lla):</ResultLabel>
              <ResultValue>{result.adessive}</ResultValue>
            </ResultItem>
            
            <ResultItem>
              <ResultLabel>Rule applied:</ResultLabel>
              <ResultValue>{result.rule}</ResultValue>
            </ResultItem>

            {result.exampleSentence && (
              <>
                <ResultItem>
                  <ResultLabel>Example sentence:</ResultLabel>
                  <ResultValue>{result.exampleSentence}</ResultValue>
                </ResultItem>
                <ResultItem>
                  <ResultLabel>Translation:</ResultLabel>
                  <ResultValue>{result.exampleTranslation}</ResultValue>
                </ResultItem>
              </>
            )}
          </ResultContainer>
        )}
      </PracticeContainer>
    </Container>
  );
};

export default NounPluralization;