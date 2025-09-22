"use client";

import { VerbalNounAnalysis, VerbalNounRule } from "@/lib/types/advancedTypes";
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
} from "./NounFormVerb.styles";

// Data for verbal noun rules
const verbalNounRules: VerbalNounRule[] = [
  {
    name: "-minen nouns (action nouns)",
    description:
      "Formed by adding -minen to the verb stem, indicating the action or process",
    examples: [
      {
        verb: "opiskella",
        verbalNoun: "opiskeleminen",
        english: "to study",
        type: "Action noun",
        usage: "General action or process",
        example: "Opiskeleminen on tärkeää.",
        translation: "Studying is important.",
        notes:
          "The most common type of verbal noun, formed by adding -minen to the verb stem",
      },
      {
        verb: "lukea",
        verbalNoun: "lukeminen",
        english: "to read",
        type: "Action noun",
        usage: "General action or process",
        example: "Lukeminen on hauskaa.",
        translation: "Reading is fun.",
        notes: "The verb stem + -minen form",
      },
    ],
  },
  {
    name: "-ma/-mä nouns (result nouns)",
    description:
      "Formed by adding -ma/-mä to the verb stem, indicating the result of an action",
    examples: [
      {
        verb: "tehdä",
        verbalNoun: "teos",
        english: "to do/make",
        type: "Result noun",
        usage: "Result or product of action",
        example: "Tämä on kaunis teos.",
        translation: "This is a beautiful work.",
        notes: "Indicates the result or product of the action",
      },
      {
        verb: "kirjoittaa",
        verbalNoun: "kirjoitus",
        english: "to write",
        type: "Result noun",
        usage: "Written product",
        example: "Hänen kirjoituksensa on mielenkiintoinen.",
        translation: "His/her writing is interesting.",
        notes: "Often indicates a physical or concrete result",
      },
    ],
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
        notes: "Often used for shopping items",
      },
      {
        verb: "myydä",
        verbalNoun: "myynti",
        english: "to sell",
        type: "Action noun",
        usage: "Action of selling",
        example: "Myynti on kasvanut.",
        translation: "Sales have grown.",
        notes: "Refers to the action or process of selling",
      },
    ],
  },
  {
    name: "-u/-y nouns (abstract nouns)",
    description:
      "Formed by adding -u/-y to the verb stem, indicating abstract concepts",
    examples: [
      {
        verb: "elää",
        verbalNoun: "elämä",
        english: "to live",
        type: "Abstract noun",
        usage: "Abstract concept",
        example: "Elämä on kaunista.",
        translation: "Life is beautiful.",
        notes: "Creates abstract nouns from verbs",
      },
      {
        verb: "ymmärtää",
        verbalNoun: "ymmärrys",
        english: "to understand",
        type: "Abstract noun",
        usage: "Abstract concept",
        example: "Ymmärrys on tärkeää.",
        translation: "Understanding is important.",
        notes: "Forms abstract concepts from verbs",
      },
    ],
  },
  {
    name: "-os/-ös nouns (result nouns)",
    description:
      "Formed by adding -os/-ös to the verb stem, indicating results or products",
    examples: [
      {
        verb: "vastata",
        verbalNoun: "vastaus",
        english: "to answer",
        type: "Result noun",
        usage: "Result of answering",
        example: "Vastaus on oikein.",
        translation: "The answer is correct.",
        notes: "Indicates the result or product of an action",
      },
      {
        verb: "ehdottaa",
        verbalNoun: "ehdotus",
        english: "to suggest",
        type: "Result noun",
        usage: "Result of suggesting",
        example: "Ehdotus hyväksyttiin.",
        translation: "The suggestion was accepted.",
        notes: "The result or product of the verbal action",
      },
    ],
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
        notes: "Creates abstract nouns related to emotions or states",
      },
      {
        verb: "ajatella",
        verbalNoun: "ajatus",
        english: "to think",
        type: "Abstract noun",
        usage: "Result of thinking",
        example: "Ajatus on mielenkiintoinen.",
        translation: "The thought is interesting.",
        notes: "The result or product of mental activity",
      },
    ],
  },
];

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
            rule: rule.name,
          },
          usage: [example.usage],
          examples: [example.example],
          translations: [example.translation],
          notes: example.notes,
          isFinnishInput: true,
        };
      }
    }
  }

  return null;
};

const NounFormVerb = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<VerbalNounAnalysis | null>(null);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const analyzeVerbalNoun = async (verb: string): Promise<void> => {
    setLoading(true);
    setError("");
    setSuccess("");

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
      const response = await fetch("/api/noun-form-verb", {
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

      const data: VerbalNounAnalysis = await response.json();

      if (data) {
        setResult(data);
        setSuccess(`Verbal noun found for "${verb}"`);
      } else {
        throw new Error("No verbal noun data received from API");
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

    analyzeVerbalNoun(input.trim());
  };

  return (
    <Container>
      <Header>
        <Title>Noun Form of Verbs</Title>
        <Subtitle>Learn how nouns are formed from verbs in Finnish</Subtitle>
      </Header>
      <PracticeContainer>
        <PracticeTitle>Practice Verbal Noun Formation</PracticeTitle>
        <p>Enter a Finnish verb to see its verbal noun forms:</p>

        <Form onSubmit={handleSubmit}>
          <FormLabel htmlFor="verb-input">Enter a Finnish verb:</FormLabel>
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
              Verbal Noun Results for &quot;{result.verb}&quot; (
              {result.english})
            </ResultTitle>

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
                <ul style={{ margin: 0, paddingLeft: "1rem" }}>
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
          Verbal nouns are nouns derived from verbs. They allow us to talk about
          actions, processes, and results as if they were things or concepts.
        </h3>

        <UsageExplanation>
          <UsageTitle>Types of Verbal Nouns in Finnish:</UsageTitle>
          <UsageList>
            <UsageListItem>
              <strong>Action nouns (-minen)</strong>: Describe the action or
              process itself (opiskeleminen - studying)
            </UsageListItem>
            <UsageListItem>
              <strong>Result nouns (-ma/-mä, -os/-ös)</strong>: Describe the
              result or product of an action (kirjoitus - writing, vastaus -
              answer)
            </UsageListItem>
            <UsageListItem>
              <strong>Abstract nouns (-us/-ys, -uus/-yys)</strong>: Describe
              abstract concepts (elämä - life, ymmärrys - understanding)
            </UsageListItem>
            <UsageListItem>
              <strong>Agent nouns (-ja/-jä)</strong>: Describe the person who
              performs the action (opettaja - teacher)
            </UsageListItem>
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
                  <CardValue>
                    {example.verb} ({example.english})
                  </CardValue>
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
    </Container>
  );
};

export default NounFormVerb;
