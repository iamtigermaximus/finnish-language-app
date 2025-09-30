"use client";

import { JSX, useState } from "react";
import {
  Container,
  Title,
  Subtitle,
  Button,
  ExerciseContainer,
  TextContainer,
  BlankInput,
  // OptionsContainer,
  // OptionButton,
  FeedbackContainer,
  HintText,
  ScoreContainer,
  DifficultySelector,
  TopicInput,
  InlineOptionsContainer,
  InlineOptionButton,
  SentenceContainer,
  Header,
  Form,
  FormLabel,
  InputContainer,
  ButtonContainer,
} from "./GrammarPractice.styles";

interface Blank {
  id: number;
  correctAnswer: string;
  options: string[];
  hint: string;
  grammarPoint: string;
}

interface GrammarExercise {
  title: string;
  text: string;
  blanks: Blank[];
  explanation: string;
  difficulty: string;
}

interface UserAnswers {
  [key: number]: string;
}

interface BlankStatus {
  [key: number]: "unanswered" | "correct" | "incorrect";
}

const GrammarPractice = () => {
  const [exercise, setExercise] = useState<GrammarExercise | null>(null);
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [blankStatus, setBlankStatus] = useState<BlankStatus>({});
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [difficulty, setDifficulty] = useState<
    "beginner" | "intermediate" | "advanced"
  >("intermediate");
  const [topic, setTopic] = useState("daily life");
  const [activeBlank, setActiveBlank] = useState<number | null>(null);

  const generateExercise = async () => {
    setLoading(true);
    setExercise(null);
    setUserAnswers({});
    setBlankStatus({});
    setShowResults(false);
    setScore(0);
    setActiveBlank(null);

    try {
      const response = await fetch("/api/grammar-practice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ difficulty, topic }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate exercise");
      }

      const data: GrammarExercise = await response.json();
      setExercise(data);

      // Initialize blank status
      const initialStatus: BlankStatus = {};
      data.blanks.forEach((blank) => {
        initialStatus[blank.id] = "unanswered";
      });
      setBlankStatus(initialStatus);
    } catch (error) {
      console.error("Error generating exercise:", error);
      alert("Failed to generate exercise. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerSelect = (blankId: number, answer: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [blankId]: answer,
    }));

    // Check if correct immediately for instant feedback
    const blank = exercise?.blanks.find((b) => b.id === blankId);
    if (blank) {
      const isCorrect = answer === blank.correctAnswer;
      setBlankStatus((prev) => ({
        ...prev,
        [blankId]: isCorrect ? "correct" : "incorrect",
      }));
    }

    setActiveBlank(null); // Close options after selection
  };

  const checkAllAnswers = () => {
    if (!exercise) return;

    let correctCount = 0;
    const newStatus: BlankStatus = {};

    exercise.blanks.forEach((blank) => {
      const userAnswer = userAnswers[blank.id];
      const isCorrect = userAnswer === blank.correctAnswer;
      newStatus[blank.id] = isCorrect ? "correct" : "incorrect";

      if (isCorrect) correctCount++;
    });

    setBlankStatus(newStatus);
    setScore(correctCount);
    setShowResults(true);
    setActiveBlank(null);
  };

  const resetExercise = () => {
    setUserAnswers({});
    setBlankStatus({});
    setShowResults(false);
    setScore(0);
    setActiveBlank(null);

    // Reinitialize blank status
    if (exercise) {
      const initialStatus: BlankStatus = {};
      exercise.blanks.forEach((blank) => {
        initialStatus[blank.id] = "unanswered";
      });
      setBlankStatus(initialStatus);
    }
  };

  const toggleBlankOptions = (blankId: number) => {
    if (showResults) return; // Don't allow changes when results are shown

    setActiveBlank(activeBlank === blankId ? null : blankId);
  };

  const renderTextWithBlanks = () => {
    if (!exercise) return null;

    // Split text into sentences for better mobile display
    const sentences = exercise.text.split(/(?<=[.!?])\s+/);
    const sentenceElements: JSX.Element[] = [];

    sentences.forEach((sentence, sentenceIndex) => {
      const sentenceBlanks = exercise.blanks.filter((blank) =>
        sentence.includes(`___blank${blank.id}___`)
      );

      if (sentenceBlanks.length === 0) {
        // Sentence without blanks
        sentenceElements.push(
          <SentenceContainer key={`sentence-${sentenceIndex}`}>
            {sentence}
          </SentenceContainer>
        );
        return;
      }

      let sentenceText = sentence;
      const sentenceParts: JSX.Element[] = [];

      sentenceBlanks.forEach((blank) => {
        const placeholder = `___blank${blank.id}___`;
        const parts = sentenceText.split(placeholder);

        if (parts.length > 1) {
          // Add text before blank
          if (parts[0]) {
            sentenceParts.push(
              <span key={`text-${blank.id}`}>{parts[0]}</span>
            );
          }

          // Add the blank with clickable options
          sentenceParts.push(
            <div
              key={`blank-container-${blank.id}`}
              style={{ display: "inline-block", position: "relative" }}
            >
              <BlankInput
                $status={blankStatus[blank.id]}
                $showResults={showResults}
                $clickable={!showResults}
                onClick={() => !showResults && toggleBlankOptions(blank.id)}
              >
                {showResults ? (
                  <span
                    style={{
                      color:
                        blankStatus[blank.id] === "correct" ? "green" : "red",
                      fontWeight: "bold",
                    }}
                  >
                    {blank.correctAnswer}
                  </span>
                ) : (
                  userAnswers[blank.id] || `___`
                )}
              </BlankInput>

              {/* Inline options that appear below the blank */}
              {activeBlank === blank.id && !showResults && (
                <InlineOptionsContainer>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "#666",
                      marginBottom: "0.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    Choose for blank {blank.id} ({blank.grammarPoint}):
                  </div>
                  {blank.options.map((option, optionIndex) => (
                    <InlineOptionButton
                      key={optionIndex}
                      $selected={userAnswers[blank.id] === option}
                      onClick={() => handleAnswerSelect(blank.id, option)}
                    >
                      {option}
                    </InlineOptionButton>
                  ))}
                </InlineOptionsContainer>
              )}
            </div>
          );

          sentenceText = parts.slice(1).join(placeholder);
        }
      });

      // Add remaining text after the last blank
      if (sentenceText) {
        sentenceParts.push(
          <span key={`final-${sentenceIndex}`}>{sentenceText}</span>
        );
      }

      sentenceElements.push(
        <SentenceContainer key={`sentence-${sentenceIndex}`}>
          {sentenceParts}
          {sentenceBlanks.map(
            (blank) =>
              blankStatus[blank.id] === "incorrect" &&
              !showResults && (
                <HintText key={`hint-${blank.id}`}>
                  💡 Hint for blank {blank.id}: {blank.hint}
                </HintText>
              )
          )}
        </SentenceContainer>
      );
    });

    return sentenceElements;
  };

  return (
    <Container>
      <Header>
        <Title>Finnish Grammar Practice</Title>
        <Subtitle>
          Practice cases, conjugations, and gradations with contextual exercises
        </Subtitle>
      </Header>
      {/* Controls */}
      <Form>
        <InputContainer>
          <div style={{ flex: 1 }}>
            <FormLabel>Difficulty:</FormLabel>
            <DifficultySelector
              value={difficulty}
              onChange={(e) =>
                setDifficulty(
                  e.target.value as "beginner" | "intermediate" | "advanced"
                )
              }
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </DifficultySelector>
          </div>

          <div style={{ flex: 1 }}>
            <FormLabel
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Topic:
            </FormLabel>
            <TopicInput
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g., daily life, travel, food..."
            />
          </div>
        </InputContainer>
        <ButtonContainer>
          <Button
            $primary
            onClick={generateExercise}
            disabled={loading}
            style={{ alignSelf: "flex-end" }}
          >
            {loading ? "Generating Exercise..." : "Generate New Exercise"}
          </Button>
        </ButtonContainer>
      </Form>

      {exercise && (
        <ExerciseContainer>
          <h2 style={{ color: "#2c5aa0", marginBottom: "1rem" }}>
            {exercise.title}
          </h2>

          {/* Exercise Text with Blanks */}
          <TextContainer>{renderTextWithBlanks()}</TextContainer>

          {/* Check Answers Button */}
          {!showResults && (
            <div style={{ marginTop: "2rem", textAlign: "center" }}>
              <Button
                $primary
                onClick={checkAllAnswers}
                disabled={
                  Object.keys(userAnswers).length !== exercise.blanks.length
                }
              >
                Check All Answers ({Object.keys(userAnswers).length}/
                {exercise.blanks.length})
              </Button>

              <div
                style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#666" }}
              >
                💡 Click on the blanks to see options
              </div>
            </div>
          )}

          {/* Results */}
          {showResults && (
            <FeedbackContainer>
              <ScoreContainer>
                <h3>
                  Results: {score}/{exercise.blanks.length} Correct
                </h3>
                <p
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color:
                      score === exercise.blanks.length ? "green" : "orange",
                  }}
                >
                  {score === exercise.blanks.length
                    ? "Excellent! 🎉"
                    : "Good effort! 💪"}
                </p>
              </ScoreContainer>

              <div style={{ marginTop: "1.5rem" }}>
                <h4>Explanation:</h4>
                <p>{exercise.explanation}</p>
              </div>

              <div style={{ marginTop: "1.5rem" }}>
                <h4>Detailed Feedback:</h4>
                {exercise.blanks.map((blank) => (
                  <div
                    key={blank.id}
                    style={{
                      marginBottom: "1rem",
                      padding: "1rem",
                      backgroundColor:
                        blankStatus[blank.id] === "correct"
                          ? "#e6f4ea"
                          : "#fce8e6",
                      borderRadius: "5px",
                    }}
                  >
                    <p>
                      <strong>Blank {blank.id}:</strong> {blank.correctAnswer}
                    </p>
                    <p>
                      <strong>Grammar Point:</strong> {blank.grammarPoint}
                    </p>
                    <p>
                      <strong>Rule:</strong> {blank.hint}
                    </p>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: "2rem",
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "center",
                }}
              >
                <Button $primary onClick={resetExercise}>
                  Try Again
                </Button>
                <Button onClick={generateExercise}>New Exercise</Button>
              </div>
            </FeedbackContainer>
          )}
        </ExerciseContainer>
      )}
    </Container>
  );
};

export default GrammarPractice;
