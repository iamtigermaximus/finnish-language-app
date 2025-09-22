"use client";

import { useState, FormEvent } from "react";
import {
  Button,
  CardLabel,
  CardRow,
  CardValue,
  Container,
  ContentContainer,
  ErrorMessage,
  ExampleCard,
  ExampleCardsContainer,
  ExampleSentence,
  ExampleTable,
  Form,
  FormLabel,
  Header,
  Input,
  InputContainer,
  LoadingContainer,
  PracticeContainer,
  PracticeTitle,
  ResultContainer,
  ResultItem,
  ResultLabel,
  ResultTitle,
  ResultValue,
  RuleDescription,
  RuleTitle,
  Subtitle,
  SuccessMessage,
  TableCell,
  TableHeader,
  Title,
  UsageExplanation,
  UsageList,
  UsageListItem,
  UsageTitle,
} from "./NounGenetivePluralization.styles";
import { GenitiveAnalysis, GenitiveRule } from "@/lib/types/advancedTypes";

// Data for genitive case rules
const genitiveRules: GenitiveRule[] = [
  {
    name: "Basic Genitive Plural Formation",
    description: "For most words, add -en to the plural stem",
    examples: [
      {
        singular: "talo",
        genitive: "talon",
        genitivePlural: "talojen",
        english: "house",
        usage: "Possession",
        example: "Talon ovi on sininen.",
        translation: "The house's door is blue.",
        genitivePluralExample: "Talojen ovet ovat sinisiä.",
        genitivePluralTranslation: "The houses' doors are blue.",
        notes: "The genitive plural indicates possession by multiple owners.",
      },
      {
        singular: "kirja",
        genitive: "kirjan",
        genitivePlural: "kirjojen",
        english: "book",
        usage: "Relationship",
        example: "Kirjan kansi on vahva.",
        translation: "The book's cover is strong.",
        genitivePluralExample: "Kirjojen kannet ovat vahvoja.",
        genitivePluralTranslation: "The books' covers are strong.",
        notes:
          "The genitive plural shows relationship between multiple books and their covers.",
      },
    ],
  },
  {
    name: "Words ending in -i",
    description: "For words ending in -i, often add -den or -tten",
    examples: [
      {
        singular: "kivi",
        genitive: "kiven",
        genitivePlural: "kivien",
        english: "stone",
        usage: "Composition",
        example: "Kiven paino on suuri.",
        translation: "The stone's weight is great.",
        genitivePluralExample: "Kivien painot vaihtelevat.",
        genitivePluralTranslation: "The stones' weights vary.",
        notes:
          "The genitive plural indicates characteristics of multiple stones.",
      },
      {
        singular: "meri",
        genitive: "meren",
        genitivePlural: "merien",
        english: "sea",
        usage: "Geographical features",
        example: "Meren syvyys on suuri.",
        translation: "The sea's depth is great.",
        genitivePluralExample: "Merien syvyydet ovat erilaisia.",
        genitivePluralTranslation: "The seas' depths are different.",
        notes: "The genitive plural describes properties of multiple seas.",
      },
    ],
  },
  {
    name: "Words ending in -e",
    description: "For words ending in -e, add -den or -iden",
    examples: [
      {
        singular: "perhe",
        genitive: "perheen",
        genitivePlural: "perheiden",
        english: "family",
        usage: "Family relationships",
        example: "Perheen isä työskentelee.",
        translation: "The family's father works.",
        genitivePluralExample: "Perheiden isät työskentelevät.",
        genitivePluralTranslation: "The families' fathers work.",
        notes:
          "The genitive plural indicates relationships within multiple families.",
      },
      {
        singular: "kone",
        genitive: "koneen",
        genitivePlural: "koneiden",
        english: "machine",
        usage: "Ownership",
        example: "Koneen omistaja on tyytyväinen.",
        translation: "The machine's owner is satisfied.",
        genitivePluralExample: "Koneiden omistajat ovat tyytyväisiä.",
        genitivePluralTranslation: "The machines' owners are satisfied.",
        notes: "The genitive plural shows ownership of multiple machines.",
      },
    ],
  },
  {
    name: "Consonant Gradation in Genitive",
    description: "Some words undergo consonant gradation in genitive",
    examples: [
      {
        singular: "kukka",
        genitive: "kukan",
        genitivePlural: "kukkien",
        english: "flower",
        usage: "Characteristics",
        example: "Kukan väri on kaunis.",
        translation: "The flower's color is beautiful.",
        genitivePluralExample: "Kukkien värit ovat kauniita.",
        genitivePluralTranslation: "The flowers' colors are beautiful.",
        notes: "The genitive plural describes properties of multiple flowers.",
      },
      {
        singular: "lakki",
        genitive: "lakin",
        genitivePlural: "lakkien",
        english: "cap",
        usage: "Ownership",
        example: "Lakin hintaa alennettiin.",
        translation: "The cap's price was reduced.",
        genitivePluralExample: "Lakkien hintoja alennettiin.",
        genitivePluralTranslation: "The caps' prices were reduced.",
        notes: "The genitive plural indicates prices of multiple caps.",
      },
    ],
  },
  {
    name: "Special Cases: -ien ending",
    description: "Some words use -ien ending for genitive plural",
    examples: [
      {
        singular: "omena",
        genitive: "omenan",
        genitivePlural: "omenien",
        english: "apple",
        usage: "Origin",
        example: "Omenan alkuperä on tiedossa.",
        translation: "The apple's origin is known.",
        genitivePluralExample: "Omenien alkuperät ovat tiedossa.",
        genitivePluralTranslation: "The apples' origins are known.",
        notes: "The genitive plural indicates the origins of multiple apples.",
      },
      {
        singular: "koira",
        genitive: "koiran",
        genitivePlural: "koirien",
        english: "dog",
        usage: "Ownership",
        example: "Koiran nimi on Musti.",
        translation: "The dog's name is Musti.",
        genitivePluralExample: "Koirien nimet ovat erilaisia.",
        genitivePluralTranslation: "The dogs' names are different.",
        notes: "The genitive plural shows names of multiple dogs.",
      },
    ],
  },
  {
    name: "Words with -ten ending",
    description: "Some words use -ten ending for genitive plural",
    examples: [
      {
        singular: "raha",
        genitive: "rahan",
        genitivePlural: "rahojen",
        english: "money",
        usage: "Amount",
        example: "Rahan määrä riittää.",
        translation: "The amount of money is sufficient.",
        genitivePluralExample: "Rahojen määrät vaihtelevat.",
        genitivePluralTranslation: "The amounts of money vary.",
        notes: "The genitive plural indicates amounts of multiple money sums.",
      },
      {
        singular: "aika",
        genitive: "ajan",
        genitivePlural: "aikojen",
        english: "time",
        usage: "Duration",
        example: "Ajan kuluessa asiat muuttuvat.",
        translation: "As time passes, things change.",
        genitivePluralExample: "Aikojen kuluessa kaikki muuttuu.",
        genitivePluralTranslation: "As times pass, everything changes.",
        notes:
          "The genitive plural is used in temporal expressions with multiple time periods.",
      },
    ],
  },
];

// Function to determine the genitive form based on rules
const getGenitiveForm = (singular: string): GenitiveAnalysis | null => {
  const lowerSingular = singular.toLowerCase();

  // Check each rule pattern
  for (const rule of genitiveRules) {
    for (const example of rule.examples) {
      // Simple pattern matching based on endings
      if (lowerSingular.endsWith(example.singular.slice(-2))) {
        return {
          noun: example.singular,
          english: example.english,
          genitive: {
            singular: example.singular,
            genitive: example.genitive,
            genitivePlural: example.genitivePlural,
            rule: rule.name,
          },
          usage: [example.usage],
          examples: [example.example],
          translations: [example.translation],
          genitivePluralExamples: [example.genitivePluralExample],
          genitivePluralTranslations: [example.genitivePluralTranslation],
          notes: example.notes,
          isFinnishInput: true,
        };
      }
    }
  }

  return null;
};

const NounGenitivePluralization = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<GenitiveAnalysis | null>(null);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const analyzeGenitive = async (noun: string): Promise<void> => {
    setLoading(true);
    setError("");
    setSuccess("");

    // First try our local rule-based approach
    const localResult = getGenitiveForm(noun);
    if (localResult) {
      setResult(localResult);
      setSuccess(`Genitive form found for "${noun}"`);
      setLoading(false);
      return;
    }

    // If local approach fails, try the API
    try {
      const response = await fetch("/api/noun-genetive-pluralization", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ noun }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to analyze noun");
      }

      const data: GenitiveAnalysis = await response.json();

      if (data) {
        setResult(data);
        setSuccess(`Genitive forms found for "${noun}"`);
      } else {
        throw new Error("No genitive data received from API");
      }
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to analyze noun. Please try a different word."
      );
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!input.trim()) {
      setError("Please enter a noun");
      return;
    }

    analyzeGenitive(input.trim());
  };

  return (
    <Container>
      <Header>
        <Title>Finnish Genitive Case Pluralization</Title>
        <Subtitle>
          Learn how to form and use the genitive case in Finnish
        </Subtitle>
      </Header>
      <PracticeContainer>
        <PracticeTitle>Practice Genitive Formation</PracticeTitle>
        <p>Enter a Finnish noun to see its genitive form:</p>

        <Form onSubmit={handleSubmit}>
          <FormLabel htmlFor="noun-input">Enter a Finnish noun:</FormLabel>
          <InputContainer>
            <Input
              id="noun-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., talo, kirja, koira"
              disabled={loading}
            />
            <Button type="submit" $primary disabled={loading}>
              {loading ? "Analyzing..." : "Analyze"}
            </Button>
          </InputContainer>
        </Form>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        {success && <SuccessMessage>{success}</SuccessMessage>}

        {loading && (
          <LoadingContainer>
            <div
              style={{
                animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
              }}
            >
              <div
                style={{
                  borderRadius: "9999px",
                  backgroundColor: "#bfdbfe",
                  height: "3rem",
                  width: "3rem",
                  marginBottom: "1rem",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              ></div>
              <div
                style={{
                  height: "1rem",
                  backgroundColor: "#bfdbfe",
                  borderRadius: "0.25rem",
                  width: "75%",
                  marginBottom: "0.5rem",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              ></div>
              <div
                style={{
                  height: "1rem",
                  backgroundColor: "#bfdbfe",
                  borderRadius: "0.25rem",
                  width: "50%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              ></div>
            </div>
          </LoadingContainer>
        )}

        {result && !loading && (
          <ResultContainer>
            <ResultTitle>
              Genitive Results for &quot;{result.noun}&quot; ({result.english})
            </ResultTitle>

            <ResultItem>
              <ResultLabel>Genitive singular:</ResultLabel>
              <ResultValue>{result.genitive.genitive}</ResultValue>
            </ResultItem>

            <ResultItem>
              <ResultLabel>Genitive plural:</ResultLabel>
              <ResultValue>{result.genitive.genitivePlural}</ResultValue>
            </ResultItem>

            <ResultItem>
              <ResultLabel>Formation rule:</ResultLabel>
              <ResultValue>{result.genitive.rule}</ResultValue>
            </ResultItem>

            <ResultItem>
              <ResultLabel>Common usage:</ResultLabel>
              <ResultValue>
                <ul style={{ margin: 0, paddingLeft: "1rem" }}>
                  {result.usage.map((use, index) => (
                    <li key={index}>{use}</li>
                  ))}
                </ul>
              </ResultValue>
            </ResultItem>

            <ResultItem>
              <ResultLabel>Genitive singular examples:</ResultLabel>
              <ResultValue>
                {result.examples.map((example, index) => (
                  <div key={index} style={{ marginBottom: "0.5rem" }}>
                    {example}
                    <ExampleSentence>
                      {result.translations[index]}
                    </ExampleSentence>
                  </div>
                ))}
              </ResultValue>
            </ResultItem>

            <ResultItem>
              <ResultLabel>Genitive plural examples:</ResultLabel>
              <ResultValue>
                {result.genitivePluralExamples.map((example, index) => (
                  <div key={index} style={{ marginBottom: "0.5rem" }}>
                    {example}
                    <ExampleSentence>
                      {result.genitivePluralTranslations[index]}
                    </ExampleSentence>
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
      <ContentContainer>
        <h3 style={{ padding: "10px 0", color: "#4b5563" }}>
          The genitive case is used to indicate possession, relationship, or
          association in Finnish. It answers the question &quot;kenen?&quot;
          (whose?) and is one of the most frequently used cases.
        </h3>

        <UsageExplanation>
          <UsageTitle>When to Use the Genitive Case:</UsageTitle>
          <UsageList>
            <UsageListItem>
              Possession (the dog&apos;s house → koiran talo)
            </UsageListItem>
            <UsageListItem>
              Relationships (the book&apos;s cover → kirjan kansi)
            </UsageListItem>
            <UsageListItem>
              With certain postpositions (takia, vuoksi, etc.)
            </UsageListItem>
            <UsageListItem>
              In compound nouns (kirjastonhoitaja - library caretaker)
            </UsageListItem>
            <UsageListItem>
              To express quantity (litra maitoa - a liter of milk)
            </UsageListItem>
          </UsageList>
        </UsageExplanation>
      </ContentContainer>

      {genitiveRules.map((rule, index) => (
        <ContentContainer key={index}>
          <RuleTitle>{rule.name}</RuleTitle>
          <RuleDescription>{rule.description}</RuleDescription>

          {/* Mobile Card View */}
          <ExampleCardsContainer>
            {rule.examples.map((example, idx) => (
              <ExampleCard key={idx}>
                <CardRow>
                  <CardLabel>Noun:</CardLabel>
                  <CardValue>
                    {example.singular} ({example.english})
                  </CardValue>
                </CardRow>
                <CardRow>
                  <CardLabel>Genitive:</CardLabel>
                  <CardValue>{example.genitive}</CardValue>
                </CardRow>
                <CardRow>
                  <CardLabel>Genitive Plural:</CardLabel>
                  <CardValue>{example.genitivePlural}</CardValue>
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
                    {example.genitivePluralExample}
                    <ExampleSentence>
                      {example.genitivePluralTranslation}
                    </ExampleSentence>
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
                <TableHeader>Genitive</TableHeader>
                <TableHeader>Genitive Plural</TableHeader>
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
                  <TableCell>{example.genitive}</TableCell>
                  <TableCell>{example.genitivePlural}</TableCell>
                  <TableCell>{example.usage}</TableCell>
                  <TableCell>
                    {example.example}
                    <ExampleSentence>{example.translation}</ExampleSentence>
                  </TableCell>
                  <TableCell>
                    {example.genitivePluralExample}
                    <ExampleSentence>
                      {example.genitivePluralTranslation}
                    </ExampleSentence>
                  </TableCell>
                </tr>
              ))}
            </tbody>
          </ExampleTable>
        </ContentContainer>
      ))}
    </Container>
  );
};

export default NounGenitivePluralization;
