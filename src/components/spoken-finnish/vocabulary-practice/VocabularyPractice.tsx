"use client";

import { useState } from "react";
import {
  Button,
  Container,
  Subtitle,
  Title,
} from "./VocabularyPractice.styles";

type VocabWord = {
  word: string;
  type: string;
  tense?: string;
  pronoun?: string;
  translation: string;
  example: string;
  example_translation: string; // NEW FIELD
  options?: string[];
};

const VocabularyPractice = () => {
  const [words, setWords] = useState<VocabWord[]>([]);
  const [answeredWords, setAnsweredWords] = useState<Set<string>>(new Set());
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchWords = async () => {
    setLoading(true);
    setFeedback("");
    setAnsweredWords(new Set());
    setWords([]);

    try {
      const res = await fetch("/api/vocabulary-practice", {
        // Fixed URL to match API route
        method: "POST",
        headers: {
          "Cache-Control": "no-cache",
        },
      });
      if (!res.ok) throw new Error("Failed to fetch words");
      const data: VocabWord[] = await res.json();

      const wordsWithOptions = data.map((word) => ({
        ...word,
        options: generateOptions(data, word.translation),
      }));

      setWords(wordsWithOptions);
      setFeedback(`Loaded ${data.length} new words! Start practicing.`);
    } catch (err) {
      setFeedback(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  const generateOptions = (allWords: VocabWord[], correctAnswer: string) => {
    const allTranslations = allWords.map((w) => w.translation);
    const uniqueTranslations = [...new Set(allTranslations)];

    const wrongAnswers = uniqueTranslations
      .filter((trans) => trans !== correctAnswer)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const options = [...wrongAnswers, correctAnswer];
    return options.sort(() => Math.random() - 0.5);
  };

  const checkAnswer = (word: VocabWord, guess: string) => {
    const isCorrect = guess === word.translation;
    setFeedback(
      isCorrect
        ? `✅ Correct! "${word.word}" means "${word.translation}"`
        : `❌ Incorrect. Try again!`
    );

    if (isCorrect) {
      setAnsweredWords((prev) => new Set(prev).add(word.word));
    }
  };

  const showAnswer = (word: VocabWord) => {
    setFeedback(`💡 "${word.word}" = "${word.translation}"`);
    setAnsweredWords((prev) => new Set(prev).add(word.word));
  };

  const isAnswered = (word: string) => answeredWords.has(word);

  return (
    <Container>
      <Title>Finnish Vocabulary Practice</Title>
      <Subtitle>
        Test your knowledge - details will appear after you answer!
      </Subtitle>

      <Button $primary onClick={fetchWords} disabled={loading}>
        {loading ? "Loading New Words..." : "Get New Words"}
      </Button>

      {feedback && (
        <div
          style={{
            marginTop: "15px",
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: feedback.includes("✅")
              ? "#e6f4ea"
              : feedback.includes("❌")
              ? "#fce8e6"
              : "#e8f4fd",
            border: feedback.includes("✅")
              ? "1px solid #34a853"
              : feedback.includes("❌")
              ? "1px solid #ea4335"
              : "1px solid #1a73e8",
          }}
        >
          {feedback}
        </div>
      )}

      <div style={{ marginTop: "30px" }}>
        {words.map((w, idx) => (
          <div
            key={idx}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              marginBottom: "20px",
              backgroundColor: isAnswered(w.word) ? "#f8f9fa" : "white",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            {/* Question Section - Always visible */}
            <div style={{ marginBottom: "15px" }}>
              <h3
                style={{
                  color: "#2c5aa0",
                  marginBottom: "10px",
                  fontSize: "24px",
                }}
              >
                {w.word}
              </h3>
              <p style={{ fontStyle: "italic", color: "#666" }}>
                &quot;{w.example}&quot;
              </p>
            </div>

            {/* Answer Section - Changes based on state */}
            {!isAnswered(w.word) ? (
              <div>
                <p style={{ fontWeight: "bold", marginBottom: "15px" }}>
                  What does this word mean?
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                    marginBottom: "10px",
                  }}
                >
                  {w.options?.map((option, optIdx) => (
                    <button
                      key={optIdx}
                      onClick={() => checkAnswer(w, option)}
                      style={{
                        padding: "8px 16px",
                        borderRadius: "5px",
                        border: "1px solid #ddd",
                        backgroundColor: "white",
                        cursor: "pointer",
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => showAnswer(w)}
                  style={{
                    padding: "5px 12px",
                    fontSize: "14px",
                    color: "#666",
                    border: "1px solid #ccc",
                    backgroundColor: "transparent",
                  }}
                >
                  Show answer
                </button>
              </div>
            ) : (
              /* Answer Revealed Section - Shows details after answering */
              <div
                style={{
                  padding: "15px",
                  backgroundColor: "#e6f4ea",
                  borderRadius: "5px",
                  border: "1px solid #34a853",
                }}
              >
                <h4 style={{ color: "#0d652d", marginBottom: "10px" }}>
                  Word Details:
                </h4>

                <p>
                  <strong>Type:</strong> {w.type}
                </p>

                {/* Show tense and pronoun for verbs */}
                {w.type === "verb" && (
                  <>
                    {w.tense && (
                      <p>
                        <strong>Tense:</strong> {w.tense}
                      </p>
                    )}
                    {w.pronoun && (
                      <p>
                        <strong>Pronoun:</strong> {w.pronoun}
                      </p>
                    )}
                  </>
                )}

                <p>
                  <strong>Translation:</strong> {w.translation}
                </p>
                <p>
                  <strong>Example:</strong> &quot;{w.example}&quot;
                </p>

                {/* NEW: English translation of the example */}
                <p
                  style={{
                    fontStyle: "italic",
                    color: "#555",
                    marginTop: "5px",
                  }}
                >
                  <strong>Example meaning:</strong> &quot;
                  {w.example_translation}&quot;
                </p>

                {/* Visual badges for quick reference */}
                {w.type === "verb" && (
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      marginTop: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    {w.tense && (
                      <span
                        style={{
                          backgroundColor: "#0d652d",
                          color: "white",
                          padding: "4px 8px",
                          borderRadius: "12px",
                          fontSize: "12px",
                        }}
                      >
                        {w.tense} tense
                      </span>
                    )}
                    {w.pronoun && (
                      <span
                        style={{
                          backgroundColor: "#2c5aa0",
                          color: "white",
                          padding: "4px 8px",
                          borderRadius: "12px",
                          fontSize: "12px",
                        }}
                      >
                        {w.pronoun} form
                      </span>
                    )}
                  </div>
                )}

                <button
                  onClick={() =>
                    setAnsweredWords((prev) => {
                      const newSet = new Set(prev);
                      newSet.delete(w.word);
                      return newSet;
                    })
                  }
                  style={{
                    marginTop: "10px",
                    padding: "5px 12px",
                    fontSize: "14px",
                  }}
                >
                  Hide details
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {words.length > 0 && (
        <div style={{ textAlign: "center", marginTop: "20px", color: "#666" }}>
          Progress: {answeredWords.size} / {words.length} words learned
        </div>
      )}
    </Container>
  );
};

export default VocabularyPractice;
