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
  RuleContainer,
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
} from "./ConditionalTense.styles";
import {
  ConditionalAnalysis,
  ConditionalRule,
} from "@/lib/types/advancedTypes";

// Data for conditional tense rules
const conditionalRules: ConditionalRule[] = [
  {
    name: "Type 1: a/ä/o/ö/u/y stay + isi",
    description:
      "For verbs ending in a, ä, o, ö, u, y - keep the vowel and add -isi",
    examples: [
      {
        verb: "puhua",
        conditional: "puhuisi",
        english: "to speak",
        type: "Type 1",
        usage: "Polite requests",
        example: "Puhuisitko hitaammin?",
        translation: "Would you speak more slowly?",
        negative: "ei puhuisi",
        negativeExample: "En puhuisi noin.",
        negativeTranslation: "I wouldn't speak like that.",
        notes: "The final -a remains before adding -isi",
      },
      {
        verb: "antaa",
        conditional: "antaisi",
        english: "to give",
        type: "Type 1",
        usage: "Hypothetical giving",
        example: "Antaisitko minulle vähän rahaa?",
        translation: "Would you give me some money?",
        negative: "ei antaisi",
        negativeExample: "Hän ei antaisi rahaa tuntemattomille.",
        negativeTranslation: "He wouldn't give money to strangers.",
        notes: "The final -a remains before adding -isi",
      },
    ],
  },
  {
    name: "Type 2: e/i are removed + isi",
    description: "For verbs ending in e or i - remove the vowel and add -isi",
    examples: [
      {
        verb: "lukea",
        conditional: "lukisi",
        english: "to read",
        type: "Type 2",
        usage: "Hypothetical reading",
        example: "Lukisitko tämän kirjan?",
        translation: "Would you read this book?",
        negative: "ei lukisi",
        negativeExample: "En lukisi tuota kirjaa.",
        negativeTranslation: "I wouldn't read that book.",
        notes: "The -e is removed before adding -isi",
      },
      {
        verb: "tuntea",
        conditional: "tuntisi",
        english: "to feel",
        type: "Type 2",
        usage: "Hypothetical feelings",
        example: "Tuntisitko olosi mukavaksi?",
        translation: "Would you feel comfortable?",
        negative: "ei tuntisi",
        negativeExample: "En tuntisi niin.",
        negativeTranslation: "I wouldn't feel that way.",
        notes: "The -e is removed before adding -isi",
      },
    ],
  },
  {
    name: "Type 3: Double vowels - remove first vowel + isi",
    description:
      "For verbs with two identical vowels - remove one and add -isi",
    examples: [
      {
        verb: "syödä",
        conditional: "söisi",
        english: "to eat",
        type: "Type 3",
        usage: "Polite offers",
        example: "Söisitko vielä vähän?",
        translation: "Would you eat a little more?",
        negative: "ei söisi",
        negativeExample: "En söisi tuota ruokaa.",
        negativeTranslation: "I wouldn't eat that food.",
        notes: "Double vowel reduction: yö → ö",
      },
      {
        verb: "juoda",
        conditional: "joisi",
        english: "to drink",
        type: "Type 3",
        usage: "Hypothetical drinking",
        example: "Joisitko olutta?",
        translation: "Would you drink beer?",
        negative: "ei joisi",
        negativeExample: "En joisi ennen ajamista.",
        negativeTranslation: "I wouldn't drink before driving.",
        notes: "Double vowel reduction: uo → o",
      },
    ],
  },
  {
    name: "Type 4: vi + si",
    description: "For specific verbs like 'voida' - special formation",
    examples: [
      {
        verb: "voida",
        conditional: "voisi",
        english: "to be able to",
        type: "Type 4",
        usage: "Polite requests",
        example: "Voisitko auttaa minua?",
        translation: "Could you help me?",
        negative: "ei voisi",
        negativeExample: "En voisi tehdä sitä.",
        negativeTranslation: "I couldn't do that.",
        notes: "Irregular formation: voida → voisi",
      },
    ],
  },
  {
    name: "Type 5: Two different vowels + isi",
    description: "For verbs with two different vowels - keep both and add -isi",
    examples: [
      {
        verb: "haluta",
        conditional: "haluaisi",
        english: "to want",
        type: "Type 5",
        usage: "Polite desires",
        example: "Haluaisitko lähteä kanssani?",
        translation: "Would you like to come with me?",
        negative: "ei haluaisi",
        negativeExample: "En haluaisi mennä sinne.",
        negativeTranslation: "I wouldn't want to go there.",
        notes: "Two different vowels (a and u) so we add -isi directly",
      },
      {
        verb: "tietää",
        conditional: "tietäisi",
        english: "to know",
        type: "Type 5",
        usage: "Polite inquiries",
        example: "Tietäisitkö vastauksen?",
        translation: "Would you know the answer?",
        negative: "ei tietäisi",
        negativeExample: "En tietäisi mitä tehdä.",
        negativeTranslation: "I wouldn't know what to do.",
        notes: "Two different vowels (e and ä) so we add -isi directly",
      },
    ],
  },
];

const ConditionalTense = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<ConditionalAnalysis | null>(null);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const analyzeConditional = async (verb: string): Promise<void> => {
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/conditional-tense", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ verb }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to analyze verb");
      }

      const data: ConditionalAnalysis = await response.json();

      if (data) {
        setResult(data);
        setSuccess(`Conditional form found for "${verb}"`);
      } else {
        throw new Error("No conditional data received from API");
      }
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to analyze verb. Please try a different word."
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
      setError("Please enter a verb");
      return;
    }

    analyzeConditional(input.trim());
  };

  return (
    <Container>
      <Header>
        <Title>Finnish Conditional Tense (Konditionaali)</Title>
        <Subtitle>
          Learn how to form and use the conditional mood in Finnish
        </Subtitle>
      </Header>

      <PracticeContainer>
        <PracticeTitle>Practice Conditional Formation</PracticeTitle>
        <p>Enter a Finnish verb to see its conditional form:</p>

        <Form onSubmit={handleSubmit}>
          <FormLabel htmlFor="verb-input">Enter a Finnish verb:</FormLabel>
          <InputContainer>
            <Input
              id="verb-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., puhua, lukea, voida"
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
              Conditional Results for &quot;{result.verb}&quot; (
              {result.english})
            </ResultTitle>

            <ResultItem>
              <ResultLabel>Conditional form:</ResultLabel>
              <ResultValue>{result.conditional.conditional}</ResultValue>
            </ResultItem>

            <ResultItem>
              <ResultLabel>Negative form:</ResultLabel>
              <ResultValue>{result.conditional.negative}</ResultValue>
            </ResultItem>

            <ResultItem>
              <ResultLabel>Formation rule:</ResultLabel>
              <ResultValue>{result.conditional.rule}</ResultValue>
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
              <ResultLabel>Examples:</ResultLabel>
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
              <ResultLabel>Notes:</ResultLabel>
              <ResultValue>{result.notes}</ResultValue>
            </ResultItem>
          </ResultContainer>
        )}
      </PracticeContainer>

      <ContentContainer>
        <h3 style={{ padding: "10px 0", color: "#4b5563" }}>
          The conditional mood is used to express hypothetical situations,
          polite requests, and actions that would happen under certain
          conditions.
        </h3>

        <UsageExplanation>
          <UsageTitle>When to Use the Conditional:</UsageTitle>
          <UsageList>
            <UsageListItem>
              <strong>Hypothetical situations</strong>: &quot;I would go if I
              had time&quot;
            </UsageListItem>
            <UsageListItem>
              <strong>Polite requests</strong>: &quot;Would you help me?&quot;
            </UsageListItem>
            <UsageListItem>
              <strong>Wishes and desires</strong>: &quot;I would like to
              travel&quot;
            </UsageListItem>
            <UsageListItem>
              <strong>Conditional statements</strong>: &quot;If it rained, we
              would stay inside&quot;
            </UsageListItem>
          </UsageList>
        </UsageExplanation>
      </ContentContainer>

      {conditionalRules.map((rule, index) => (
        <RuleContainer key={index}>
          <RuleTitle>{rule.name}</RuleTitle>
          <RuleDescription>{rule.description}</RuleDescription>

          {/* Mobile Card View */}
          <ExampleCardsContainer>
            {rule.examples.map((example, idx) => (
              <ExampleCard key={idx}>
                <CardRow>
                  <CardLabel>Verb (English):</CardLabel>
                  <CardValue>{example.english}</CardValue>
                </CardRow>
                <CardRow>
                  <CardLabel>Conditional:</CardLabel>
                  <CardValue>{example.conditional}</CardValue>
                </CardRow>
                <CardRow>
                  <CardLabel>Negative:</CardLabel>
                  <CardValue>{example.negative}</CardValue>
                </CardRow>
                <CardRow>
                  <CardLabel>Usage:</CardLabel>
                  <CardValue>{example.usage}</CardValue>
                </CardRow>
                <CardRow>
                  <CardLabel>Example:</CardLabel>
                  <CardValue>{example.example}</CardValue>
                </CardRow>
                <CardRow>
                  <CardLabel>Negative Example:</CardLabel>
                  <CardValue>
                    {example.negative}
                    <ExampleSentence>{example.negativeExample}</ExampleSentence>
                  </CardValue>
                </CardRow>
              </ExampleCard>
            ))}
          </ExampleCardsContainer>

          <ExampleTable>
            <thead>
              <tr>
                <TableHeader>Verb (English)</TableHeader>
                <TableHeader>Conditional</TableHeader>
                <TableHeader>Negative</TableHeader>
                <TableHeader>Usage</TableHeader>
                <TableHeader>Example</TableHeader>
                <TableHeader>Negative Example</TableHeader>
              </tr>
            </thead>
            <tbody>
              {rule.examples.map((example, idx) => (
                <tr key={idx}>
                  <TableCell>
                    {example.verb} ({example.english})
                  </TableCell>
                  <TableCell>{example.conditional}</TableCell>
                  <TableCell>{example.negative}</TableCell>
                  <TableCell>{example.usage}</TableCell>
                  <TableCell>
                    {example.example}
                    <ExampleSentence>{example.translation}</ExampleSentence>
                  </TableCell>
                  <TableCell>
                    {example.negativeExample}
                    <ExampleSentence>
                      {example.negativeTranslation}
                    </ExampleSentence>
                  </TableCell>
                </tr>
              ))}
            </tbody>
          </ExampleTable>
        </RuleContainer>
      ))}
    </Container>
  );
};

export default ConditionalTense;
