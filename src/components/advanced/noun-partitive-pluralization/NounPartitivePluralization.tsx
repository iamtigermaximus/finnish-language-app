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
} from "./NounPartitivePluralization.styles";
import { PartitiveAnalysis, PartitiveRule } from "@/lib/types/advancedTypes";

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
        notes:
          "The partitive form is used when referring to an indefinite quantity.",
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
        notes:
          "The partitive is used with verbs of reading to indicate an ongoing activity.",
      },
    ],
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
        notes:
          "The partitive form indicates helping some aspects of the family.",
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
        notes: "The partitive indicates using the machine for some purpose.",
      },
    ],
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
        notes: "The partitive form indicates an indefinite quantity.",
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
        notes: "The partitive plural is used when referring to multiple seas.",
      },
    ],
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
        notes:
          "The partitive plural form undergoes consonant gradation (kukkia).",
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
        notes:
          "The partitive plural indicates selling an indefinite number of caps.",
      },
    ],
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
        notes:
          "With numbers, Finnish uses the partitive singular form but it translates to plural in English.",
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
        notes: "Numbers greater than one require the partitive case.",
      },
    ],
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
        notes: "Negative sentences always use the partitive case.",
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
        notes: "The partitive is used in negative existential sentences.",
      },
    ],
  },
];

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
            rule: rule.name,
          },
          usage: [example.usage],
          examples: [example.example],
          translations: [example.translation],
          partitivePluralExamples: [example.partitiveExample],
          partitivePluralTranslations: [example.partitiveTranslation],
          notes: example.notes,
          isFinnishInput: true,
        };
      }
    }
  }

  return null;
};

const NounPartitivePluralization = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<PartitiveAnalysis | null>(null);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const analyzePartitive = async (noun: string): Promise<void> => {
    setLoading(true);
    setError("");
    setSuccess("");

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
      const response = await fetch("/api/noun-partitive-pluralization", {
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

      const data: PartitiveAnalysis = await response.json();

      if (data) {
        setResult(data);
        setSuccess(`Partitive forms found for "${noun}"`);
      } else {
        throw new Error("No partitive data received from API");
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

    analyzePartitive(input.trim());
  };

  return (
    <Container>
      <Header>
        <Title>Finnish Partitive Case Pluralization</Title>
        <Subtitle>
          Learn how to form and use the partitive case in Finnish
        </Subtitle>
      </Header>
      <PracticeContainer>
        <PracticeTitle>Practice Partitive Formation</PracticeTitle>
        <p>Enter a Finnish or English noun to see its partitive form:</p>

        <Form onSubmit={handleSubmit}>
          <FormLabel htmlFor="noun-input">Enter a Finnish noun:</FormLabel>
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
              Partitive Results for &quot;{result.noun}&quot; ({result.english})
            </ResultTitle>

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
                <ul style={{ margin: 0, paddingLeft: "1rem" }}>
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
              <ResultLabel>Partitive plural examples:</ResultLabel>
              <ResultValue>
                {result.partitivePluralExamples.map((example, index) => (
                  <div key={index} style={{ marginBottom: "0.5rem" }}>
                    {example}
                    <ExampleSentence>
                      {result.partitivePluralTranslations[index]}
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
          The partitive case is one of the most important grammatical cases in
          Finnish. It is used to indicate partial objects, indefinite amounts,
          and in various other contexts.
        </h3>

        <UsageExplanation>
          <UsageTitle>When to Use the Partitive Case:</UsageTitle>
          <UsageList>
            <UsageListItem>
              With indefinite quantities (some water, a few books)
            </UsageListItem>
            <UsageListItem>
              With numbers greater than one (two apples, five houses)
            </UsageListItem>
            <UsageListItem>
              In negative sentences (I don&apos;t have money)
            </UsageListItem>
            <UsageListItem>
              With certain prepositions (without help, with friends)
            </UsageListItem>
            <UsageListItem>
              To express ongoing actions (I&apos;m reading a book)
            </UsageListItem>
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
                  <CardValue>
                    {example.singular} ({example.english})
                  </CardValue>
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
                    <ExampleSentence>
                      {example.partitiveTranslation}
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
                    <ExampleSentence>
                      {example.partitiveTranslation}
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

export default NounPartitivePluralization;
