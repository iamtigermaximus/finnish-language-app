"use client";

import { useState, FormEvent } from "react";
import {
  Container,
  ContentContainer,
  Header,
  Title,
  Subtitle,
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
} from "./QuestionBuilder.styles";

// --- Question categories ---
type QuestionCategory = {
  title: string;
  description: string;
  examples: { finnish: string; english: string }[];
  notes?: string;
};

const questionCategories: QuestionCategory[] = [
  {
    title: "Questions with a question word",
    description:
      "Interrogative sentences with kysymyssana (e.g., mitä, kuka, missä). These appear at the start of the sentence. Word order otherwise follows a normal sentence.",
    examples: [
      { finnish: "Mitä sinä teet?", english: "What are you doing?" },
      { finnish: "Kuka hän on?", english: "Who is he/she?" },
      { finnish: "Missä me asumme?", english: "Where do we live?" },
      { finnish: "Milloin te tulette?", english: "When are you coming?" },
      {
        finnish: "Mitä he haluavat syödä?",
        english: "What do they want to eat?",
      },
      { finnish: "Kenen auto tämä on?", english: "Whose car is this?" },
      { finnish: "Miksi hän myöhästyi?", english: "Why was he/she late?" },
    ],
  },
  {
    title: "Questions with the -ko/kö suffix (affirmative & negative)",
    description:
      "Yes/No questions are made with -ko/-kö. Attach it to the verb (or sometimes another word). Observe vowel harmony. Negative questions use 'ei' + -ko/-kö.",
    examples: [
      // affirmative
      { finnish: "Syönkö minä kotona?", english: "Do I eat at home?" },
      { finnish: "Syötkö sinä kotona?", english: "Do you eat at home?" },
      { finnish: "Syökö hän kotona?", english: "Does he/she eat at home?" },
      { finnish: "Syömmekö me kotona?", english: "Do we eat at home?" },
      { finnish: "Syötkö te kotona?", english: "Do you eat at home?" },
      { finnish: "Syövätkö he kotona?", english: "Do they eat at home?" },
      // negative
      { finnish: "Enkö minä tiedä oikein?", english: "Am I not right?" },
      { finnish: "Etkö sinä tiedä?", english: "Don’t you know?" },
      { finnish: "Eikö hän osaa uida?", english: "Can’t he/she swim?" },
      { finnish: "Emmekö me voi lähteä?", english: "Can’t we leave?" },
      {
        finnish: "Ettekö te tule juhliin?",
        english: "Aren’t you coming to the party?",
      },
      { finnish: "Eivätkö he kuuntele?", english: "Aren’t they listening?" },
    ],
    notes:
      "Remember vowel harmony: words with A, O, U take -ko; words without them take -kö. Negative verbs use 'ei' + -ko/-kö.",
  },
  {
    title: "Subordinate interrogative clauses",
    description:
      "Complex sentences with an embedded question (epäsuora kysymyslause). Use a question word or -ko/kö inside the subordinate clause.",
    examples: [
      {
        finnish: "Tiedätkö, missä minä olen?",
        english: "Do you know where I am?",
      },
      {
        finnish: "En tiedä, mitä sinä ajattelet.",
        english: "I don’t know what you are thinking.",
      },
      {
        finnish: "Hän kysyi, tuleeko hän mukaan.",
        english: "He/she asked if he/she is coming along.",
      },
      {
        finnish: "Emme ole varmoja, miksi he myöhästyivät.",
        english: "We are not sure why they were late.",
      },
    ],
  },
  {
    title: "Word order in question sentences",
    description:
      "Questions begin with a question word or a -ko/kö word. Word order otherwise follows affirmative sentences. Placement of 'on' changes nuance.",
    examples: [
      {
        finnish: "Missä auto on?",
        english: "Where is the car (a certain car I know about)?",
      },
      {
        finnish: "Missä on auto?",
        english: "Where is there a car (if one exists)?",
      },
      {
        finnish: "Millainen auto sinulla on?",
        english: "What kind of car do you have?",
      },
      {
        finnish: "Millainen on hyvä auto?",
        english: "What’s a good car like?",
      },
    ],
  },
  {
    title: "Spoken language questions",
    description:
      "In spoken Finnish, questions often simplify. Pronouns may be dropped, and -ko/-kö forms can shift. Pay attention to colloquial variants.",
    examples: [
      { finnish: "Tuutsä mukaan?", english: "Are you coming along?" },
      { finnish: "Onks tää sun?", english: "Is this yours?" },
      { finnish: "Tuletko sä?", english: "Are you coming?" },
      { finnish: "Ettekö tulleet?", english: "Haven’t you come?" },
      { finnish: "Onks se hyvä?", english: "Is it good?" },
    ],
  },
];

// --- Analyzer response type ---
type AnalyzerResponse = {
  corrected: string;
  translation: string;
  type: string;
  suggestion: string;
  explanation?: string;
};

const QuestionBuilder = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<AnalyzerResponse | null>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setResult(null);

    if (!input.trim()) {
      setError("Please enter a question.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/question-builder-helper", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sentence: input.trim() }),
      });

      if (!res.ok) throw new Error("Failed to analyze question");

      const data: AnalyzerResponse = await res.json();
      setResult(data);
      setSuccess("Question analyzed successfully!");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Header>
        <Title>Kysymyslause – Finnish Question Analyzer</Title>
        <Subtitle>
          Learn question types, analyze your own questions, and get corrections,
          translations, and suggestions.
        </Subtitle>
      </Header>

      <PracticeContainer>
        <PracticeTitle>Try Your Question</PracticeTitle>
        <Form onSubmit={handleAnalyze}>
          <FormLabel htmlFor="question-input">Enter a question:</FormLabel>
          <InputContainer>
            <Input
              id="question-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., Missä sinä asut?"
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
              <ResultLabel>Corrected Question:</ResultLabel>
              <ResultValue>{result.corrected}</ResultValue>
            </ResultItem>
            <ResultItem>
              <ResultLabel>Translation:</ResultLabel>
              <ResultValue>{result.translation}</ResultValue>
            </ResultItem>
            <ResultItem>
              <ResultLabel>Type:</ResultLabel>
              <ResultValue>{result.type}</ResultValue>
            </ResultItem>
            {result.explanation && (
              <ResultItem>
                <ResultLabel>Explanation:</ResultLabel>
                <ResultValue>{result.explanation}</ResultValue>
              </ResultItem>
            )}
            {result.suggestion && (
              <ResultItem>
                <ResultLabel>Next Practice:</ResultLabel>
                <ResultValue>{result.suggestion}</ResultValue>
              </ResultItem>
            )}
          </ResultContainer>
        )}
      </PracticeContainer>

      {questionCategories.map((cat, idx) => (
        <ContentContainer key={idx}>
          <RuleTitle>{cat.title}</RuleTitle>
          <RuleDescription>{cat.description}</RuleDescription>

          <ExampleCardsContainer>
            {cat.examples.map((ex, exIdx) => (
              <ExampleCard key={exIdx}>
                <CardRow>
                  <CardLabel>Finnish:</CardLabel>
                  <CardValue>{ex.finnish}</CardValue>
                </CardRow>
                <CardRow>
                  <CardLabel>English:</CardLabel>
                  <CardValue>
                    <ExampleSentence>{ex.english}</ExampleSentence>
                  </CardValue>
                </CardRow>
              </ExampleCard>
            ))}
          </ExampleCardsContainer>

          <ExampleTable>
            <thead>
              <tr>
                <TableHeader>Finnish</TableHeader>
                <TableHeader>English</TableHeader>
              </tr>
            </thead>
            <tbody>
              {cat.examples.map((ex, exIdx) => (
                <tr key={exIdx}>
                  <TableCell>{ex.finnish}</TableCell>
                  <TableCell>
                    <ExampleSentence>{ex.english}</ExampleSentence>
                  </TableCell>
                </tr>
              ))}
            </tbody>
          </ExampleTable>

          {cat.notes && (
            <p style={{ marginTop: "10px", color: "#555" }}>{cat.notes}</p>
          )}
        </ContentContainer>
      ))}
    </Container>
  );
};

export default QuestionBuilder;
