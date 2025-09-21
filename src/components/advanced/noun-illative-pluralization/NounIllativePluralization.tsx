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
} from "./NounIllativePluralization.styles";
import { IllativeAnalysis, IllativeRule } from "@/lib/types/advancedTypes";

// Data for illative case rules
const illativeRules: IllativeRule[] = [
  {
    name: "Basic Illative Formation",
    description:
      "For most words, add -Vn where V is the last vowel (vowel harmony applies)",
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
        notes:
          "The illative case indicates movement into something. Basic rule: add the last vowel + n.",
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
        notes:
          "Vowel harmony: a/ä words take -aan/-ään, o/u words take -oon/-öön",
      },
    ],
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
        notes:
          "Words ending in -e take -seen in singular and -siin in plural illative",
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
        notes: "The illative indicates physical movement into the machine",
      },
    ],
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
        notes: "Some -i words undergo consonant gradation in illative",
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
        notes: "Meri undergoes consonant gradation: meri → mereen",
      },
    ],
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
        notes: "Short illative form: maa → maahan (instead of maaan)",
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
        notes:
          "Tie undergoes consonant gradation and takes short form: tie → tiehen",
      },
    ],
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
        notes: "No consonant gradation in illative for kukka",
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
        notes:
          "No consonant gradation in illative singular, but plural shows gradation",
      },
    ],
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
        notes: "Suomi undergoes consonant gradation: suomi → suomeen",
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
        notes: "Vesi undergoes consonant gradation: vesi → veteen",
      },
    ],
  },
];

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
            rule: rule.name,
          },
          usage: [example.usage],
          examples: [example.example],
          translations: [example.translation],
          illativePluralExamples: [example.illativePluralExample],
          illativePluralTranslations: [example.illativePluralTranslation],
          notes: example.notes,
          isFinnishInput: true,
        };
      }
    }
  }

  return null;
};

const IllativeTutorial = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<IllativeAnalysis | null>(null);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const analyzeIllative = async (noun: string): Promise<void> => {
    setLoading(true);
    setError("");
    setSuccess("");

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
      const response = await fetch("/api/noun-illative-pluralization", {
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

      const data: IllativeAnalysis = await response.json();

      if (data) {
        setResult(data);
        setSuccess(`Illative forms found for "${noun}"`);
      } else {
        throw new Error("No illative data received from API");
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

    analyzeIllative(input.trim());
  };

  return (
    <Container>
      <Header>
        <Title>Finnish Illative Case Pluralization</Title>
        <Subtitle>
          Learn how to form and use the illative case in Finnish
        </Subtitle>
      </Header>

      <ContentContainer>
        <p>
          The illative case is one of the six locative cases in Finnish and
          indicates movement into or toward something. It answers the question
          &quot;mihin?&quot; (where to?) and is essential for expressing
          direction.
        </p>

        <UsageExplanation>
          <UsageTitle>When to Use the Illative Case:</UsageTitle>
          <UsageList>
            <UsageListItem>
              Movement into something (Menen taloon. - I go into the house.)
            </UsageListItem>
            <UsageListItem>
              Movement toward something (Kävelen kouluun. - I walk to school.)
            </UsageListItem>
            <UsageListItem>
              Figurative movement (Rakastuin häneen. - I fell in love with
              him/her.)
            </UsageListItem>
            <UsageListItem>
              Change of state (Jäädyin jääksi. - I froze into ice.)
            </UsageListItem>
            <UsageListItem>
              With certain verbs (uskoa johonkin - to believe in something)
            </UsageListItem>
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
                  <CardValue>
                    {example.singular} ({example.english})
                  </CardValue>
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
                    <ExampleSentence>
                      {example.illativePluralTranslation}
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
                    <ExampleSentence>
                      {example.illativePluralTranslation}
                    </ExampleSentence>
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
              Illative Results for &quot;{result.noun}&quot; ({result.english})
            </ResultTitle>

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
                <ul style={{ margin: 0, paddingLeft: "1rem" }}>
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
              <ResultLabel>Illative plural examples:</ResultLabel>
              <ResultValue>
                {result.illativePluralExamples.map((example, index) => (
                  <div key={index} style={{ marginBottom: "0.5rem" }}>
                    {example}
                    <ExampleSentence>
                      {result.illativePluralTranslations[index]}
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
    </Container>
  );
};

export default IllativeTutorial;
