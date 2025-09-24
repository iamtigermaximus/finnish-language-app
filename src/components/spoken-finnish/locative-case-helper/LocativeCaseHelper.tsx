"use client";

"use client";

import { useState } from "react";
import {
  Container,
  ContentGrid,
  Description,
  DetailsContainer,
  DetailsTitle,
  DetailText,
  EmptyState,
  ErrorMessage,
  ExampleEnglish,
  ExampleFinnish,
  ExampleItem,
  ExamplesContainer,
  FeedbackContainer,
  FeedbackCorrect,
  FeedbackExplanation,
  FilterButton,
  FilterButtonsContainer,
  FilterLabel,
  NotesList,
  PracticeButton,
  PracticeContainer,
  PracticeInput,
  PracticeInputContainer,
  TipContainer,
  TipText,
  TipTitle,
  Title,
  WordCategory,
  WordDetailCategory,
  WordDetailHeader,
  WordDetailName,
  WordDetails,
  WordEnglish,
  WordHeader,
  WordItem,
  WordName,
  WordsContainer,
  WordsTitle,
  WordUsage,
} from "./LocativeCaseHelper.styles";

export type LocativeCase = {
  name: string;
  endings: string[];
  usage: string;
  examples: { finnish: string; english: string }[];
  notes: string[];
  category: string;
};

const LocativeCaseHelper = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedCase, setSelectedCase] = useState<LocativeCase | null>(null);
  const [userSentence, setUserSentence] = useState("");
  const [sentenceFeedback, setSentenceFeedback] = useState<{
    correct: string;
    explanation: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  // Categories of locative cases
  const categories = [
    {
      name: "Internal",
      description: "Cases showing being inside or movement in/out",
      cases: [
        {
          name: "Inessive",
          endings: ["ssa", "ssä"],
          usage: "Indicates being inside something (in, at, on).",
          examples: [
            { finnish: "Asun Helsingissä.", english: "I live in Helsinki." },
            {
              finnish: "Kirja on laukussa.",
              english: "The book is in the bag.",
            },
          ],
          notes: ["Used for static location inside or within."],
          category: "Internal",
        },
        {
          name: "Elative",
          endings: ["sta", "stä"],
          usage: "Indicates movement out of something (out of, from within).",
          examples: [
            { finnish: "Tulen koulusta.", english: "I come from school." },
            {
              finnish: "Otamme kirjan laukusta.",
              english: "We take the book out of the bag.",
            },
          ],
          notes: ["Often corresponds to English 'from'."],
          category: "Internal",
        },
        {
          name: "Illative",
          endings: ["an", "en", "in", "on", "un", "yn", "hVn", "seen"], // simplified
          usage: "Indicates movement into something (into, onto, to).",
          examples: [
            { finnish: "Menen kouluun.", english: "I go to school." },
            {
              finnish: "Laitan kirjan laukkuun.",
              english: "I put the book into the bag.",
            },
          ],
          notes: ["Illative has multiple forms depending on word type."],
          category: "Internal",
        },
      ],
    },
    {
      name: "External",
      description: "Cases showing being on top of or movement onto/off",
      cases: [
        {
          name: "Adessive",
          endings: ["lla", "llä"],
          usage: "Indicates being on top of or at something (on, at, with).",
          examples: [
            {
              finnish: "Kirja on pöydällä.",
              english: "The book is on the table.",
            },
            { finnish: "Olen asemalla.", english: "I am at the station." },
          ],
          notes: ["Also used for possession (Minulla on...)."],
          category: "External",
        },
        {
          name: "Ablative",
          endings: ["lta", "ltä"],
          usage:
            "Indicates movement away from a surface or from someone (from, off).",
          examples: [
            {
              finnish: "Otan kirjan pöydältä.",
              english: "I take the book off the table.",
            },
            {
              finnish: "Saan lahjan ystävältä.",
              english: "I get a gift from a friend.",
            },
          ],
          notes: ["Used for motion away from surfaces or persons."],
          category: "External",
        },
        {
          name: "Allative",
          endings: ["lle"],
          usage:
            "Indicates movement onto something or towards someone (onto, to).",
          examples: [
            {
              finnish: "Laitan kirjan pöydälle.",
              english: "I put the book onto the table.",
            },
            { finnish: "Menen ystävälle.", english: "I go to my friend." },
          ],
          notes: ["Also used for giving something to someone."],
          category: "External",
        },
      ],
    },
  ];

  const allCases = categories.flatMap((category) => category.cases);

  const checkSentence = async (locCase: LocativeCase) => {
    setLoading(true);
    setError("");
    setSentenceFeedback(null);

    try {
      const response = await fetch("/api/locative-case-helper", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sentence: userSentence,
          locative: locCase.name,
          endings: locCase.endings,
        }),
      });

      if (!response.ok) throw new Error("Failed to check sentence");

      const data = await response.json();
      setSentenceFeedback(data);
    } catch (err) {
      console.error("Error checking sentence:", err);
      setError("Failed to check sentence. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title>Finnish Locative Cases</Title>
      <Description>
        Finnish uses locative cases to express location, direction, and
        movement. Learn the six main locative cases with explanations and
        examples.
      </Description>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <div>
        <FilterLabel>Filter by category:</FilterLabel>
        <FilterButtonsContainer>
          <FilterButton
            $active={selectedCategory === "all"}
            onClick={() => setSelectedCategory("all")}
          >
            All
          </FilterButton>
          {categories.map((category) => (
            <FilterButton
              key={category.name}
              $active={selectedCategory === category.name}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name}
            </FilterButton>
          ))}
        </FilterButtonsContainer>
      </div>

      <ContentGrid>
        <div>
          <WordsTitle>Cases</WordsTitle>
          <WordsContainer>
            {(selectedCategory === "all"
              ? allCases
              : categories.find((c) => c.name === selectedCategory)?.cases || []
            ).map((locCase) => (
              <WordItem
                key={locCase.name}
                $selected={selectedCase?.name === locCase.name}
                onClick={() => {
                  setSelectedCase(locCase);
                  setSentenceFeedback(null);
                  setUserSentence("");
                }}
              >
                <WordHeader>
                  <WordName>
                    {locCase.name}
                    <WordEnglish>({locCase.endings.join(", ")})</WordEnglish>
                  </WordName>
                  <WordCategory>{locCase.category}</WordCategory>
                </WordHeader>
                <WordUsage>{locCase.usage}</WordUsage>
              </WordItem>
            ))}
          </WordsContainer>
        </div>

        <div>
          <DetailsTitle>Details</DetailsTitle>
          {selectedCase ? (
            <DetailsContainer>
              <WordDetailHeader>
                <WordDetailName>
                  {selectedCase.name}{" "}
                  <span style={{ color: "#6b7280", fontWeight: "normal" }}>
                    ({selectedCase.endings.join(", ")})
                  </span>
                </WordDetailName>
                <WordDetailCategory>{selectedCase.category}</WordDetailCategory>
              </WordDetailHeader>

              <WordDetails>
                <DetailText>
                  <strong>Usage:</strong> {selectedCase.usage}
                </DetailText>

                <ExamplesContainer>
                  <strong>Examples:</strong>
                  {selectedCase.examples.map((example, index) => (
                    <ExampleItem key={index}>
                      <ExampleFinnish>{example.finnish}</ExampleFinnish>
                      <ExampleEnglish>{example.english}</ExampleEnglish>
                    </ExampleItem>
                  ))}
                </ExamplesContainer>

                <div>
                  <strong>Notes:</strong>
                  <NotesList>
                    {selectedCase.notes.map((note, index) => (
                      <li key={index}>{note}</li>
                    ))}
                  </NotesList>
                </div>
              </WordDetails>

              <PracticeContainer>
                <strong>Practice using &quot;{selectedCase.name}&quot;:</strong>
                <PracticeInputContainer>
                  <PracticeInput
                    type="text"
                    value={userSentence}
                    onChange={(e) => setUserSentence(e.target.value)}
                    placeholder={`Write a sentence using ${selectedCase.name}`}
                  />
                  <PracticeButton
                    $primary
                    onClick={() => checkSentence(selectedCase)}
                    disabled={loading || !userSentence.trim()}
                  >
                    {loading ? "Checking..." : "Check"}
                  </PracticeButton>
                </PracticeInputContainer>

                {sentenceFeedback && (
                  <FeedbackContainer>
                    <FeedbackCorrect>Feedback:</FeedbackCorrect>
                    <p>{sentenceFeedback.correct}</p>
                    <FeedbackExplanation>
                      {sentenceFeedback.explanation}
                    </FeedbackExplanation>
                  </FeedbackContainer>
                )}
              </PracticeContainer>
            </DetailsContainer>
          ) : (
            <EmptyState>
              <p>Select a case to see details and practice using it</p>
            </EmptyState>
          )}
        </div>
      </ContentGrid>

      <TipContainer>
        <TipTitle>Why locative cases matter</TipTitle>
        <TipText>
          Locative cases are essential for expressing place, movement, and
          direction in Finnish. Instead of prepositions like in English, Finnish
          uses case endings. Mastering these will make your Finnish much more
          natural!
        </TipText>
      </TipContainer>
    </Container>
  );
};
export default LocativeCaseHelper;
