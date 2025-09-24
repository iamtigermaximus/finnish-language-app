"use client";

import { useState, FormEvent } from "react";
import {
  Container,
  ContentContainer,
  Header,
  Title,
  Subtitle,
  // UsageExplanation,
  // UsageTitle,
  // UsageList,
  // UsageListItem,
  PracticeContainer,
  PracticeTitle,
  Form,
  FormLabel,
  InputContainer,
  Input,
  Button,
  ResultContainer,
  ResultTitle,
  ResultItem,
  ResultLabel,
  ResultValue,
  ExampleSentence,
  ErrorMessage,
  SuccessMessage,
  LoadingContainer,
  RuleTitle,
  RuleDescription,
  ExampleCardsContainer,
  ExampleCard,
  CardRow,
  CardLabel,
  CardValue,
  ExampleTable,
  TableHeader,
  TableCell,
} from "./SentenceAnalyzer.styles";

type SentencePatternExample = {
  pattern: string;
  description: string;
  example: string;
  translation: string;
  suffixNotes: string;
};

type AnalyzerResponse = {
  corrected: string;
  translation: string;
  pattern: string;
  suggestion: string;
  correctionExplanation?: string;
  feedback?: {
    grammar?: string;
    spelling?: string;
    suffixes?: string;
  };
};

// --- Sentence patterns ---
const sentencePatterns: SentencePatternExample[] = [
  {
    pattern: "Minä syön omenan.",
    description: "Simple subject + verb + object",
    example: "Minä syön omenan.",
    translation: "I eat an apple.",
    suffixNotes: "Use -n for first person singular verb.",
  },
  {
    pattern: "Mies, joka asuu naapurissa, on opettaja.",
    description: "Relative clause with 'joka'",
    example: "Mies, joka asuu naapurissa, on opettaja.",
    translation: "The man who lives next door is a teacher.",
    suffixNotes: "Use 'joka' to refer to the subject of the relative clause.",
  },
  {
    pattern: "En tiedä, mitä hän tekee.",
    description: "Embedded question",
    example: "En tiedä, mitä hän tekee.",
    translation: "I don’t know what he/she is doing.",
    suffixNotes: "Use 'mitä' for embedded question objects.",
  },
  {
    pattern: "Jos sataa huomenna, otan sateenvarjon ja jään kotiin.",
    description: "Conditional sentence with multiple verbs",
    example: "Jos sataa huomenna, otan sateenvarjon ja jään kotiin.",
    translation: "If it rains tomorrow, I will take an umbrella and stay home.",
    suffixNotes: "Use conditional form for hypothetical or future actions.",
  },
  {
    pattern: "Kun saavuin kotiin, olin väsynyt.",
    description: "Time clause with 'kun'",
    example: "Kun saavuin kotiin, olin väsynyt.",
    translation: "When I arrived home, I was tired.",
    suffixNotes: "Use 'kun' + verb to indicate timing of actions.",
  },
  {
    pattern: "Opiskelen suomea, jotta voisin puhua sujuvasti.",
    description: "Purpose clause with 'jotta'",
    example: "Opiskelen suomea, jotta voisin puhua sujuvasti.",
    translation: "I study Finnish so that I can speak fluently.",
    suffixNotes: "Use 'jotta' + verb in subjunctive/conditional for purpose.",
  },
  {
    pattern: "Sain lapseni tekemään kotitehtävät.",
    description: "Causative sentence",
    example: "Sain lapseni tekemään kotitehtävät.",
    translation: "I made my child do the homework.",
    suffixNotes: "Use causative verb + infinitive form of the second verb.",
  },
  {
    pattern: "Päätös tehtiin hallituksen toimesta.",
    description: "Passive voice with agent",
    example: "Päätös tehtiin hallituksen toimesta.",
    translation: "The decision was made by the government.",
    suffixNotes: "Use passive verb + 'toimesta' to indicate the agent.",
  },
  {
    pattern: "Annoin ystävälleni kirjan ja kynän.",
    description: "Sentence with multiple objects",
    example: "Annoin ystävälleni kirjan ja kynän.",
    translation: "I gave my friend a book and a pen.",
    suffixNotes:
      "Use -lle for indirect objects; use nominative for counted direct objects.",
  },
  {
    pattern: "Hän sanoi, että hän tulee huomenna.",
    description: "Reported speech",
    example: "Hän sanoi, että hän tulee huomenna.",
    translation: "He/she said that he/she is coming tomorrow.",
    suffixNotes: "Use 'että' + indicative for reported statements.",
  },
  {
    pattern: "Se on hän, joka teki työn.",
    description: "Emphasis/focus sentence",
    example: "Se on hän, joka teki työn.",
    translation: "It is he who did the work.",
    suffixNotes: "Use 'se on' + relative clause for focus/emphasis.",
  },
  {
    pattern: "Kävin kaupassa, ostin leipää ja palasin kotiin.",
    description: "Compound sentence with multiple verbs",
    example: "Kävin kaupassa, ostin leipää ja palasin kotiin.",
    translation: "I went to the store, bought bread, and returned home.",
    suffixNotes:
      "Use past tense for sequential actions; place objects in correct cases.",
  },
  {
    pattern: "Vaikka olin väsynyt, menin kuntosalille.",
    description: "Concessive sentence using 'vaikka'",
    example: "Vaikka olin väsynyt, menin kuntosalille.",
    translation: "Even though I was tired, I went to the gym.",
    suffixNotes: "Use 'vaikka' + verb to indicate contrast between clauses.",
  },
];

const SentenceAnalyzer = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<AnalyzerResponse | null>(null);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setResult(null);

    if (!input.trim()) {
      setError("Please enter a sentence");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/sentence-analyzer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sentence: input.trim() }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Failed to analyze sentence");
      }

      const data: AnalyzerResponse = await res.json();
      setResult(data);
      setSuccess("Sentence analyzed successfully!");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      {/* Header */}
      <Header>
        <Title>Finnish Sentence Patterns & Analyzer</Title>
        <Subtitle>Learn patterns and test your own sentences</Subtitle>
      </Header>
      {/* Interactive sentence analyzer */}
      <PracticeContainer>
        <PracticeTitle>Analyze Your Sentence</PracticeTitle>
        <p>
          Enter a Finnish sentence to see corrections, translation, pattern, and
          suffix notes:
        </p>

        <Form onSubmit={handleSubmit}>
          <FormLabel htmlFor="sentence-input">Enter a sentence:</FormLabel>
          <InputContainer>
            <Input
              id="sentence-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., Minä syön omenan."
              disabled={loading}
            />
            <Button type="submit" $primary disabled={loading}>
              {loading ? "Analyzing..." : "Analyze"}
            </Button>
          </InputContainer>
        </Form>
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
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}

        {result && !loading && (
          <ResultContainer>
            <ResultTitle>Analysis Result</ResultTitle>

            <ResultItem>
              <ResultLabel>Corrected Sentence:</ResultLabel>
              <ResultValue>{result.corrected}</ResultValue>
            </ResultItem>

            <ResultItem>
              <ResultLabel>Translation:</ResultLabel>
              <ResultValue>{result.translation}</ResultValue>
            </ResultItem>

            <ResultItem>
              <ResultLabel>Detected Pattern:</ResultLabel>
              <ResultValue>{result.pattern}</ResultValue>
            </ResultItem>

            {result.correctionExplanation && (
              <ResultItem>
                <ResultLabel>Correction Explanation:</ResultLabel>
                <ResultValue>{result.correctionExplanation}</ResultValue>
              </ResultItem>
            )}

            {result.feedback && (
              <>
                {result.feedback.grammar && (
                  <ResultItem>
                    <ResultLabel>Grammar Feedback:</ResultLabel>
                    <ResultValue>{result.feedback.grammar}</ResultValue>
                  </ResultItem>
                )}
                {result.feedback.spelling && (
                  <ResultItem>
                    <ResultLabel>Spelling Feedback:</ResultLabel>
                    <ResultValue>{result.feedback.spelling}</ResultValue>
                  </ResultItem>
                )}
                {result.feedback.suffixes && (
                  <ResultItem>
                    <ResultLabel>Suffix Feedback:</ResultLabel>
                    <ResultValue>
                      <ExampleSentence>
                        {result.feedback.suffixes}
                      </ExampleSentence>
                    </ResultValue>
                  </ResultItem>
                )}
              </>
            )}

            {result.suggestion && (
              <ResultItem>
                <ResultLabel>Next Sentence Suggestion:</ResultLabel>
                <ResultValue>{result.suggestion}</ResultValue>
              </ResultItem>
            )}
          </ResultContainer>
        )}
      </PracticeContainer>

      {/* Static tutorial with sentence patterns */}
      <ContentContainer>
        <h3 style={{ padding: "10px 0", color: "#4b5563" }}>
          Finnish sentences follow common patterns that help understand grammar,
          word order, and suffix usage.
        </h3>

        {/* <UsageExplanation>
          <UsageTitle>Common Finnish Sentence Patterns:</UsageTitle>
          <UsageList>
            {sentencePatterns.map((pattern, idx) => (
              <UsageListItem key={idx}>
                <strong>{pattern.description}</strong>: {pattern.pattern}
              </UsageListItem>
            ))}
          </UsageList>
        </UsageExplanation> */}
      </ContentContainer>

      {sentencePatterns.map((pattern, index) => (
        <ContentContainer key={index}>
          <RuleTitle>{pattern.description}</RuleTitle>
          <RuleDescription>Pattern: {pattern.pattern}</RuleDescription>

          {/* Mobile Card View */}
          <ExampleCardsContainer>
            <ExampleCard>
              <CardRow>
                <CardLabel>Sentence:</CardLabel>
                <CardValue>{pattern.example}</CardValue>
              </CardRow>
              <CardRow>
                <CardLabel>Translation:</CardLabel>
                <CardValue>
                  <ExampleSentence>{pattern.translation}</ExampleSentence>
                </CardValue>
              </CardRow>
              <CardRow>
                <CardLabel>Suffix Notes:</CardLabel>
                <CardValue>{pattern.suffixNotes}</CardValue>
              </CardRow>
            </ExampleCard>
          </ExampleCardsContainer>

          {/* Desktop Table View */}
          <ExampleTable>
            <thead>
              <tr>
                <TableHeader>Sentence</TableHeader>
                <TableHeader>Translation</TableHeader>
                <TableHeader>Suffix Notes</TableHeader>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TableCell>{pattern.example}</TableCell>
                <TableCell>
                  <ExampleSentence>{pattern.translation}</ExampleSentence>
                </TableCell>
                <TableCell>{pattern.suffixNotes}</TableCell>
              </tr>
            </tbody>
          </ExampleTable>
        </ContentContainer>
      ))}
    </Container>
  );
};

export default SentenceAnalyzer;
