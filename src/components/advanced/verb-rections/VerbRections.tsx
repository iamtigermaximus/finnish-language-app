// components/RectionsPractice.tsx
"use client";

import { useState, FormEvent } from "react";
import {
  Button,
  CardLabel,
  CardRow,
  CardValue,
  Container,
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
} from "./VerbRections.styles";
import { RectionAnalysis, RectionRule } from "@/lib/types/advancedTypes";

// Sample rection rules with more examples and explanations
const rectionRules: RectionRule[] = [
  {
    name: "Partitive (+ P)",
    description:
      "Verbs that require the partitive object. Often used for incomplete actions, emotions, or things that can’t be counted.",
    examples: [
      {
        verb: "odottaa",
        case: "P (Partitive)",
        english: "to wait for",
        usage: "Waiting for something",
        example: "Odotan bussia.",
        translation: "I am waiting for the bus.",
        notes: "Partitive is used with incomplete actions.",
      },
      {
        verb: "rakastaa",
        case: "P (Partitive)",
        english: "to love",
        usage: "Emotional feeling",
        example: "Rakastan sinua.",
        translation: "I love you.",
        notes: "Partitive expresses a feeling that is ongoing or incomplete.",
      },
      {
        verb: "syödä",
        case: "P (Partitive)",
        english: "to eat (some of something)",
        usage: "Partial action",
        example: "Syön omenaa.",
        translation: "I am eating an apple.",
        notes:
          "Partitive is used because you are eating part of the object, not the whole.",
      },
    ],
  },
  {
    name: "Mihin (Movement towards)",
    description:
      "Verbs indicating movement or direction towards a place. Use the illative case.",
    examples: [
      {
        verb: "mennä",
        case: "Mihin",
        english: "to go to",
        usage: "Movement towards",
        example: "Menen kouluun.",
        translation: "I am going to school.",
        notes: "Illative case indicates the destination.",
      },
      {
        verb: "jäädä",
        case: "Mihin",
        english: "to stay at",
        usage: "Remaining somewhere",
        example: "Saara jäi luokkaan opiskelemaan.",
        translation: "Saara stayed in the classroom to study.",
        notes: "Illative shows the final place of the action.",
      },
      {
        verb: "suuntautua",
        case: "Mihin",
        english: "to head towards",
        usage: "Movement towards",
        example: "Suuntasin kohti kaupunkia.",
        translation: "I headed towards the city.",
        notes: "Mihin expresses the goal of the movement.",
      },
    ],
  },
  {
    name: "Mistä (Movement from / source)",
    description:
      "Verbs indicating movement or origin from a place, or the topic of discussion. Use the elative case.",
    examples: [
      {
        verb: "tulla",
        case: "Mistä",
        english: "to come from",
        usage: "Origin from a place",
        example: "Tulen keskustasta.",
        translation: "I come from the city center.",
        notes: "Elative case shows the starting point of movement.",
      },
      {
        verb: "puhua",
        case: "Mistä",
        english: "to speak about",
        usage: "Talking about a topic",
        example: "Me puhuimme tästä asiasta jo eilen.",
        translation: "We spoke about this matter yesterday.",
        notes: "Mistä indicates the topic of discussion.",
      },
      {
        verb: "riippua",
        case: "Mistä",
        english: "to depend on",
        usage: "Conditional dependence",
        example: "Se riippuu säästä.",
        translation: "It depends on the weather.",
        notes: "Shows what something depends on.",
      },
    ],
  },
  {
    name: "Missä (Location)",
    description:
      "Verbs indicating location where something happens. Use the inessive case.",
    examples: [
      {
        verb: "viihtyä",
        case: "Missä",
        english: "to feel comfortable in",
        usage: "Feeling comfortable somewhere",
        example: "Viihdyn hyvin uudessa työpaikassani.",
        translation: "I feel comfortable at my new workplace.",
        notes: "Inessive shows the location of the action.",
      },
      {
        verb: "asua",
        case: "Missä",
        english: "to live",
        usage: "Living somewhere",
        example: "Asutko kerrostalossa vai omakotitalossa?",
        translation: "Do you live in an apartment or a house?",
        notes: "Indicates location of residence.",
      },
      {
        verb: "käydä",
        case: "Missä",
        english: "to visit",
        usage: "Visiting somewhere",
        example: "Kävimme saunassa perjantaina.",
        translation: "We visited the sauna on Friday.",
        notes: "Use Missä to indicate the place visited.",
      },
    ],
  },
  {
    name: "Miltä (Sense verbs)",
    description:
      "Verbs related to senses and perception; describe appearance, feeling, taste, smell, etc.",
    examples: [
      {
        verb: "näyttää",
        case: "Miltä",
        english: "to look (like)",
        usage: "Appearance",
        example: "Tehtävä näyttää vaikealta.",
        translation: "The exercise looks difficult.",
        notes: "Use Miltä with verbs like näyttää, kuulostaa, maistua.",
      },
      {
        verb: "tuntua",
        case: "Miltä",
        english: "to feel (like)",
        usage: "Physical sensation",
        example: "Tämä pyyhe tuntuu märältä.",
        translation: "This towel feels wet.",
        notes: "Express tactile sensations with Miltä.",
      },
      {
        verb: "maistua",
        case: "Miltä",
        english: "to taste (like)",
        usage: "Taste",
        example: "Tämä ruoka maistuu hyvältä.",
        translation: "This food tastes good.",
        notes: "Use Miltä to express taste.",
      },
    ],
  },
];

const VerbRections = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<RectionAnalysis | null>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeRection = async (verb: string) => {
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/verb-rections", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ verb }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to analyze verb");
      }

      const data: RectionAnalysis = await response.json();
      setResult(data);
      setSuccess(`Rection info found for "${verb}"`);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to analyze verb");
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) {
      setError("Please enter a verb");
      return;
    }
    analyzeRection(input.trim());
  };

  return (
    <Container>
      <Header>
        <Title>Finnish Verb Rections (Rektiot)</Title>
        <Subtitle>
          Learn the correct case to use with different Finnish verbs
        </Subtitle>
      </Header>

      <div>
        <p>
          In Finnish, verbs determine the case of their objects. There are no
          strict rules; you often have to memorize which case goes with which
          verb.
        </p>
      </div>

      {rectionRules.map((rule, idx) => (
        <RuleContainer key={idx}>
          <RuleTitle>{rule.name}</RuleTitle>
          <RuleDescription>{rule.description}</RuleDescription>
          {/* Mobile Card View */}
          <ExampleCardsContainer>
            {rule.examples.map((example, idx) => (
              <ExampleCard key={idx}>
                <CardRow>
                  <CardLabel>Verb:</CardLabel>
                  <CardValue>{example.verb}</CardValue>
                </CardRow>
                <CardRow>
                  <CardLabel>Case:</CardLabel>
                  <CardValue>{example.case}</CardValue>
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
                  <CardLabel>Example:</CardLabel>
                  <CardValue>{example.example}</CardValue>
                </CardRow>
              </ExampleCard>
            ))}
          </ExampleCardsContainer>
          <ExampleTable>
            <thead>
              <tr>
                <TableHeader>Verb</TableHeader>
                <TableHeader>Case</TableHeader>
                <TableHeader>English</TableHeader>
                <TableHeader>Usage</TableHeader>
                <TableHeader>Example</TableHeader>
              </tr>
            </thead>
            <tbody>
              {rule.examples.map((ex, i) => (
                <tr key={i}>
                  <TableCell>{ex.verb}</TableCell>
                  <TableCell>{ex.case}</TableCell>
                  <TableCell>{ex.english}</TableCell>
                  <TableCell>{ex.usage}</TableCell>
                  <TableCell>
                    {ex.example}
                    <ExampleSentence>{ex.translation}</ExampleSentence>
                  </TableCell>
                </tr>
              ))}
            </tbody>
          </ExampleTable>
        </RuleContainer>
      ))}

      <PracticeContainer>
        <PracticeTitle>Practice Rections</PracticeTitle>
        <Form onSubmit={handleSubmit}>
          <FormLabel htmlFor="verb-input">Enter a Finnish verb:</FormLabel>
          <InputContainer>
            <Input
              id="verb-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., tykätä, tulla, viihtyä"
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
              Rection Result for &quot;{result.verb}&quot;
            </ResultTitle>
            <ResultItem>
              <ResultLabel>Required case:</ResultLabel>
              <ResultValue>{result.rection.case}</ResultValue>
            </ResultItem>
            <ResultItem>
              <ResultLabel>Rule:</ResultLabel>
              <ResultValue>{result.rection.rule}</ResultValue>
            </ResultItem>
            <ResultItem>
              <ResultLabel>Examples:</ResultLabel>
              <ResultValue>
                {result.examples.map((ex, i) => (
                  <div key={i}>
                    {ex}
                    <ExampleSentence>{result.translations[i]}</ExampleSentence>
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

export default VerbRections;
