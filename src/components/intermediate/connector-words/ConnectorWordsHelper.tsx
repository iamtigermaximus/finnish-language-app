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
} from "./ConnectorWordsHelper.styles";
import {
  ConnectorCategory,
  ConnectorWord,
} from "@/lib/types/intermediateTypes";

const ConnectorWordsHelper = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedWord, setSelectedWord] = useState<ConnectorWord | null>(null);
  const [userSentence, setUserSentence] = useState("");
  const [sentenceFeedback, setSentenceFeedback] = useState<{
    correct: string;
    explanation: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  // Categories of connector words with examples
  const categories: ConnectorCategory[] = [
    {
      name: "Conjunctions",
      description: "Words that connect clauses or sentences",
      words: [
        {
          finnish: "ja",
          english: "and",
          usage: "Connects similar ideas or items in a list",
          examples: [
            {
              finnish: "Ostan omenaa ja banaania.",
              english: "I buy an apple and a banana.",
            },
            {
              finnish: "Hän lukee kirjaa ja kuuntelee musiikkia.",
              english: "He reads a book and listens to music.",
            },
          ],
          placement: "Between the connected elements",
          notes: ['No comma needed before "ja" in Finnish unlike English'],
          category: "Conjunctions",
        },
        {
          finnish: "mutta",
          english: "but",
          usage: "Shows contrast between ideas",
          examples: [
            {
              finnish: "Hän yritti, mutta ei onnistunut.",
              english: "He tried but did not succeed.",
            },
            {
              finnish: "Pidän kahvista, mutta en juo sitä illalla.",
              english: "I like coffee but I don't drink it in the evening.",
            },
          ],
          placement: "Between contrasting clauses",
          notes: ["Often used with a comma before it in Finnish"],
          category: "Conjunctions",
        },
        {
          finnish: "tai",
          english: "or",
          usage: "Presents alternatives",
          examples: [
            {
              finnish: "Haluatko kahvia vai teetä?",
              english: "Do you want coffee or tea?",
            },
            {
              finnish: "Voimme mennä elokuviin tai kävellä puistossa.",
              english: "We can go to the movies or walk in the park.",
            },
          ],
          placement: "Between alternatives",
          notes: ['"Vai" is used in questions instead of "tai"'],
          category: "Conjunctions",
        },
        {
          finnish: "sillä",
          english: "because",
          usage: "Explains reason or cause",
          examples: [
            {
              finnish: "En lähtenyt ulos, sillä satoi vettä.",
              english: "I didn't go out because it was raining.",
            },
            {
              finnish: "Hän on onnellinen, sillä hän sai uuden työn.",
              english: "He is happy because he got a new job.",
            },
          ],
          placement: "Between cause and effect clauses",
          notes: ['More formal than "koska"'],
          category: "Conjunctions",
        },
        {
          finnish: "että",
          english: "that",
          usage:
            "Connects clauses, often after verbs of thinking, saying, or believing",
          examples: [
            {
              finnish: "Uskon, että Suomi on mahtava maa.",
              english: "I believe that Finland is a great country.",
            },
            {
              finnish: "Hän sanoi, että tulee myöhässä.",
              english: "He said that he will be late.",
            },
          ],
          placement: "Between clauses, often after a comma",
          notes: ["Used to introduce subordinate clauses"],
          category: "Conjunctions",
        },
        {
          finnish: "koska",
          english: "because",
          usage: "Explains reason or cause",
          examples: [
            {
              finnish: "En mene kouluun koska olen kipeä.",
              english: "I'm not going to school because I'm sick.",
            },
            {
              finnish: "Hän meni nukkumaan varhain koska oli väsynyt.",
              english: "He went to bed early because he was tired.",
            },
          ],
          placement: "Between cause and effect clauses",
          notes: ['Less formal than "sillä"'],
          category: "Conjunctions",
        },
        {
          finnish: "kun",
          english: "when",
          usage: "Indicates time or condition",
          examples: [
            {
              finnish: "Kun heräsin, aurinko paistoi.",
              english: "When I woke up, the sun was shining.",
            },
            {
              finnish: "Soita minulle kun olet valmis.",
              english: "Call me when you are ready.",
            },
          ],
          placement: "At the beginning of time clauses or between clauses",
          notes: ["Can be used for both past and future events"],
          category: "Conjunctions",
        },
        {
          finnish: "vaikka",
          english: "even though",
          usage: "Expresses contrast or concession",
          examples: [
            {
              finnish: "Hän tuli juhliin vaikka oli väsynyt.",
              english: "He came to the party even though he was tired.",
            },
            {
              finnish: "Pidän hänestä vaikka hän on joskus vaikea.",
              english: "I like him even though he is sometimes difficult.",
            },
          ],
          placement: "Between contrasting clauses",
          notes: ['Similar to "although" in English'],
          category: "Conjunctions",
        },
        {
          finnish: "vaan",
          english: "but / rather",
          usage: "Shows correction or contrast",
          examples: [
            {
              finnish: "En ole ruotsalainen vaan suomalainen.",
              english: "I'm not Swedish but Finnish.",
            },
            {
              finnish: "En halua kahvia vaan teetä.",
              english: "I don't want coffee but rather tea.",
            },
          ],
          placement: "Between contrasting elements",
          notes: ["Used to correct a previous statement"],
          category: "Conjunctions",
        },
        {
          finnish: "siksi",
          english: "therefore",
          usage: "Indicates conclusion or result",
          examples: [
            {
              finnish: "Sää on huono, siksi jäämme kotiin.",
              english: "The weather is bad, therefore we're staying home.",
            },
            {
              finnish: "Hän opiskeli kovasti, siksi hän läpäisi kokeen.",
              english: "He studied hard, therefore he passed the exam.",
            },
          ],
          placement: "Between cause and result clauses",
          notes: ["Often used with a comma before it"],
          category: "Conjunctions",
        },
        {
          finnish: "siksi, että",
          english: "because",
          usage: "Explains reason or cause (emphatic form)",
          examples: [
            {
              finnish: "Jäämme kotiin siksi, että sää on huono.",
              english: "We're staying home because the weather is bad.",
            },
            {
              finnish: "Hän itki siksi, että oli loukkaantunut.",
              english: "He cried because he was hurt.",
            },
          ],
          placement: "Between cause and effect clauses",
          notes: ['More emphatic than just "koska" or "sillä"'],
          category: "Conjunctions",
        },
      ],
    },
    {
      name: "Adverbs",
      description: "Words that modify verbs, adjectives, or other adverbs",
      words: [
        {
          finnish: "myös",
          english: "also",
          usage: "Adds information to what was already said",
          examples: [
            {
              finnish: "Pidän kahvista. Pidän myös teestä.",
              english: "I like coffee. I also like tea.",
            },
            {
              finnish: "Hän puhuu suomea ja ruotsia. Hän puhuu myös englantia.",
              english: "He speaks Finnish and Swedish. He also speaks English.",
            },
          ],
          placement: "Before the word it modifies",
          notes: ['Similar to "-kin" suffix but used as separate word'],
          category: "Adverbs",
        },
        {
          finnish: "vain",
          english: "only",
          usage: "Indicates limitation or restriction",
          examples: [
            {
              finnish: "Minulla on vain yksi kirja.",
              english: "I have only one book.",
            },
            {
              finnish: "Hän puhuu vain suomea.",
              english: "He speaks only Finnish.",
            },
          ],
          placement: "Before the word it modifies",
          notes: ['Can be replaced with "ainoastaan" in formal contexts'],
          category: "Adverbs",
        },
        {
          finnish: "jo",
          english: "already",
          usage: "Indicates that something happened earlier than expected",
          examples: [
            {
              finnish: "Hän on jo saapunut.",
              english: "He has already arrived.",
            },
            { finnish: "Olen jo syönyt.", english: "I have already eaten." },
          ],
          placement: "Before the verb",
          notes: ["Often used with perfect tense"],
          category: "Adverbs",
        },
        {
          finnish: "vielä",
          english: "still, yet",
          usage: "Indicates continuation or something not happened",
          examples: [
            {
              finnish: "Hän asuu vielä Helsingissä.",
              english: "He still lives in Helsinki.",
            },
            {
              finnish: "En ole vielä syönyt.",
              english: "I haven't eaten yet.",
            },
          ],
          placement: "Before the verb",
          notes: [
            '"Vielä" means "still" in positive sentences and "yet" in negative sentences',
          ],
          category: "Adverbs",
        },
        {
          finnish: "melko",
          english: "quite",
          usage: "Modifies adjectives or adverbs to indicate degree",
          examples: [
            {
              finnish: "Tämä kirja on melko mielenkiintoinen.",
              english: "This book is quite interesting.",
            },
            {
              finnish: "Hän puhuu melko nopeasti.",
              english: "He speaks quite quickly.",
            },
          ],
          placement: "Before the word it modifies",
          notes: ['Similar to "aika" or "varsin"'],
          category: "Adverbs",
        },
        {
          finnish: "tosi",
          english: "very",
          usage: "Intensifies adjectives or adverbs",
          examples: [
            {
              finnish: "Helsinki on tosi kaunis kaupunki kesällä.",
              english: "Helsinki is a very beautiful city in summer.",
            },
            {
              finnish: "Olen tosi väsynyt tänään.",
              english: "I'm very tired today.",
            },
          ],
          placement: "Before the word it modifies",
          notes: ['Informal version of "erittäin" or "hyvin"'],
          category: "Adverbs",
        },
        {
          finnish: "vähän",
          english: "a little / some",
          usage: "Indicates a small amount or degree",
          examples: [
            {
              finnish: "Otan vähän sokeria kahviini.",
              english: "I take a little sugar in my coffee.",
            },
            {
              finnish: "Puhun vähän suomea.",
              english: "I speak a little Finnish.",
            },
          ],
          placement: "Before the word it modifies",
          notes: ['Can also mean "a bit" or "somewhat"'],
          category: "Adverbs",
        },
      ],
    },
    {
      name: "Time Expressions",
      description: "Words that indicate when something happens",
      words: [
        {
          finnish: "nyt",
          english: "now",
          usage: "Refers to the present moment",
          examples: [
            {
              finnish: "Menemme nyt kotiin.",
              english: "We are going home now.",
            },
            {
              finnish: "Hän lukee nyt kirjaa.",
              english: "He is reading a book now.",
            },
          ],
          placement: "Usually at the beginning or end of sentence",
          notes: ['Can be emphasized with "juuri nyt" (right now)'],
          category: "Time Expressions",
        },
        {
          finnish: "usein",
          english: "often",
          usage: "Indicates frequent occurrence",
          examples: [
            { finnish: "Käyn usein uimassa.", english: "I often go swimming." },
            { finnish: "Hän matkustaa usein.", english: "He travels often." },
          ],
          placement: "Before the verb",
          notes: [
            'Similar to "yleensä" (usually) but indicates higher frequency',
          ],
          category: "Time Expressions",
        },
        {
          finnish: "joskus",
          english: "sometimes",
          usage: "Indicates occasional occurrence",
          examples: [
            {
              finnish: "Käyn joskus teatterissa.",
              english: "I sometimes go to the theater.",
            },
            {
              finnish: "Hän käy joskus Suomessa.",
              english: "He sometimes visits Finland.",
            },
          ],
          placement: "Before the verb",
          notes: ["Can be placed at beginning for emphasis"],
          category: "Time Expressions",
        },
        {
          finnish: "aina",
          english: "always",
          usage: "Indicates constant occurrence",
          examples: [
            { finnish: "Hän on aina iloinen.", english: "He is always happy." },
            {
              finnish: "Syön aina aamiaisella muroja.",
              english: "I always eat cereal for breakfast.",
            },
            {
              finnish: "Miksi olet aina myöhässä?",
              english: "Why are you always late?",
            },
          ],
          placement: "Before the verb",
          notes: ['Unlike English, "aina" comes before the verb in Finnish'],
          category: "Time Expressions",
        },
        {
          finnish: "harvoin",
          english: "rarely",
          usage: "Indicates infrequent occurrence",
          examples: [
            {
              finnish: "Käyn kaupungilla todella harvoin.",
              english: "I go to the city very rarely.",
            },
            {
              finnish: "Hän käy ulkomailla harvoin.",
              english: "He goes abroad rarely.",
            },
          ],
          placement: "Before the verb",
          notes: ['Opposite of "usein" (often)'],
          category: "Time Expressions",
        },
        {
          finnish: "yleensä",
          english: "usually",
          usage: "Indicates habitual or typical occurrence",
          examples: [
            {
              finnish: "Herään yleensä kello 7 aamulla.",
              english: "I usually wake up at 7 in the morning.",
            },
            {
              finnish: "Yleensä menen nukkumaan kello 11.",
              english: "I usually go to bed at 11 o'clock.",
            },
          ],
          placement: "Before the verb or at the beginning of the sentence",
          notes: ["Indicates what typically happens"],
          category: "Time Expressions",
        },
        {
          finnish: "ja sitten",
          english: "and then",
          usage: "Indicates sequence of events",
          examples: [
            {
              finnish: "Syön aamiaisen ja sitten luen sanomalehden.",
              english: "I eat breakfast and then read the newspaper.",
            },
            {
              finnish: "Käyn kaupungilla ja sitten menen kotiin.",
              english: "I go to the city and then go home.",
            },
          ],
          placement: "Between clauses describing sequential actions",
          notes: ['Similar to "sen jälkeen" (after that)'],
          category: "Time Expressions",
        },
      ],
    },
    {
      name: "Prepositions",
      description:
        "Words that show relationships between nouns/pronouns and other words",
      words: [
        {
          finnish: "kanssa",
          english: "with",
          usage: "Indicates accompaniment",
          examples: [
            {
              finnish: "Nainen kävelee ystävänsä kanssa.",
              english: "The woman is walking with her friend.",
            },
            {
              finnish: "Menen elokuviin ystävieni kanssa.",
              english: "I go to the movies with my friends.",
            },
          ],
          placement: "After the noun it modifies (requires genitive case)",
          notes: ["Takes the genitive case (-n ending)"],
          category: "Prepositions",
        },
      ],
    },
    {
      name: "Comparisons",
      description: "Words used to compare things",
      words: [
        {
          finnish: "kuin",
          english: "than / as / like",
          usage: "Used in comparisons",
          examples: [
            {
              finnish: "Hän on nopeampi kuin minä.",
              english: "He is faster than me.",
            },
            {
              finnish: "Se on yhtä kaunista kuin aina.",
              english: "It's as beautiful as always.",
            },
            {
              finnish: "Hän laulaa kuin ammattilainen.",
              english: "He sings like a professional.",
            },
          ],
          placement: "Between the compared elements",
          notes: ["Used with comparative adjectives"],
          category: "Comparisons",
        },
      ],
    },
  ];

  const allWords = categories.flatMap((category) => category.words);

  const checkSentence = async (word: ConnectorWord) => {
    setLoading(true);
    setError("");
    setSentenceFeedback(null);

    try {
      const response = await fetch("/api/check-connector", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sentence: userSentence,
          connector: word.finnish,
          english: word.english,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to check sentence");
      }

      const data = await response.json();
      setSentenceFeedback(data);
    } catch (error) {
      console.error("Error checking sentence:", error);
      setError("Failed to check sentence. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title>Essential Connector Words</Title>
      <Description>
        Master the small but crucial words that connect ideas and make your
        Finnish sound natural.
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
          <WordsTitle>Words</WordsTitle>
          <WordsContainer>
            {(selectedCategory === "all"
              ? allWords
              : categories.find((c) => c.name === selectedCategory)?.words || []
            ).map((word) => (
              <WordItem
                key={word.finnish}
                $selected={selectedWord?.finnish === word.finnish}
                onClick={() => {
                  setSelectedWord(word);
                  setSentenceFeedback(null);
                  setUserSentence("");
                }}
              >
                <WordHeader>
                  <WordName>
                    {word.finnish}
                    <WordEnglish>({word.english})</WordEnglish>
                  </WordName>
                  <WordCategory>{word.category}</WordCategory>
                </WordHeader>
                <WordUsage>{word.usage}</WordUsage>
              </WordItem>
            ))}
          </WordsContainer>
        </div>

        <div>
          <DetailsTitle>Details</DetailsTitle>
          {selectedWord ? (
            <DetailsContainer>
              <WordDetailHeader>
                <WordDetailName>
                  {selectedWord.finnish}{" "}
                  <span style={{ color: "#6b7280", fontWeight: "normal" }}>
                    ({selectedWord.english})
                  </span>
                </WordDetailName>
                <WordDetailCategory>{selectedWord.category}</WordDetailCategory>
              </WordDetailHeader>

              <WordDetails>
                <DetailText>
                  <strong>Usage:</strong> {selectedWord.usage}
                </DetailText>
                <DetailText>
                  <strong>Placement:</strong> {selectedWord.placement}
                </DetailText>

                <ExamplesContainer>
                  <strong>Examples:</strong>
                  {selectedWord.examples.map((example, index) => (
                    <ExampleItem key={index}>
                      <ExampleFinnish>{example.finnish}</ExampleFinnish>
                      <ExampleEnglish>{example.english}</ExampleEnglish>
                    </ExampleItem>
                  ))}
                </ExamplesContainer>

                <div>
                  <strong>Notes:</strong>
                  <NotesList>
                    {selectedWord.notes.map((note, index) => (
                      <li key={index}>{note}</li>
                    ))}
                  </NotesList>
                </div>
              </WordDetails>

              <PracticeContainer>
                <strong>
                  Practice using &quot;{selectedWord.finnish}&quot;:
                </strong>
                <PracticeInputContainer>
                  <PracticeInput
                    type="text"
                    value={userSentence}
                    onChange={(e) => setUserSentence(e.target.value)}
                    placeholder={`Write a sentence using ${selectedWord.finnish}`}
                  />
                  <PracticeButton
                    $primary
                    onClick={() => checkSentence(selectedWord)}
                    disabled={loading || !userSentence.trim()}
                  >
                    {loading ? "Checking..." : "Check"}
                  </PracticeButton>
                </PracticeInputContainer>

                {sentenceFeedback && (
                  <FeedbackContainer>
                    <FeedbackCorrect>Corrected sentence:</FeedbackCorrect>
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
              <p>Select a word to see details and practice using it</p>
            </EmptyState>
          )}
        </div>
      </ContentGrid>

      <TipContainer>
        <TipTitle>Why connector words matter</TipTitle>
        <TipText>
          While verbs and nouns form the core of your sentences, connector words
          like &quot;and&quot;, &quot;but&quot;, &quot;also&quot;, and
          &quot;sometimes&quot; are what make your speech flow naturally.
          Finnish learners often struggle with these small words because they
          work differently than in English.
        </TipText>
      </TipContainer>
    </Container>
  );
};
export default ConnectorWordsHelper;
