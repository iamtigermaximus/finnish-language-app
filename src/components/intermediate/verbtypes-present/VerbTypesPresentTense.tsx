"use client";
import React, { FormEvent, useState } from "react";
import {
  Button,
  CaseTitle,
  Container,
  ContentContainer,
  ErrorMessage,
  Form,
  FormLabel,
  Header,
  Input,
  InputContainer,
  LoadingContainer,
  MobileCaseSection,
  MobileTable,
  MobileTableCell,
  MobileTableContainer,
  MobileTableHeader,
  ResultContainer,
  ResultHeader,
  ResultSubtitle,
  ResultTitle,
  StyledTable,
  StyledTableCell,
  StyledTableHeader,
  Subtitle,
  Title,
} from "./VerbTypesPresentTense.styles";
import { UsageExplanation } from "@/components/advanced/noun-pluralization/NounPluralization.styles";

interface VerbConjugationWithExample {
  form: string;
  example: string;
}

interface VerbTenses {
  present: VerbConjugationWithExample[];
  negative: VerbConjugationWithExample[];
}

interface ApiVerbAnalysis {
  verb: string;
  english: string;
  type: string;
  rules: string;
  tenses: {
    present: Record<string, VerbConjugationWithExample>;
    negative: Record<string, VerbConjugationWithExample>;
  };
  notes: string;
  isFinnishInput: boolean;
}

// Define TypeScript interfaces for our data structures
interface VerbConjugation {
  positive: string[];
  negative: string[];
}

interface VerbType {
  type: number;
  title: string;
  description: string;
  endings: string[];
  examples: string[];
  pattern: string;
  conjugation: {
    [key: string]: VerbConjugation;
  };
}

interface CommonVerb {
  finnish: string;
  english: string;
}

interface CommonVerbsByType {
  [key: number]: CommonVerb[];
}

// Verb data defined outside the component
const verbTypes: VerbType[] = [
  {
    type: 1,
    title: "Verb Type 1",
    description: "The most common verb type ending in two vowels",
    endings: [
      "-aa",
      "-ea",
      "-eä",
      "-ia",
      "-iä",
      "-oa",
      "-ua",
      "-yä",
      "-ää",
      "-öä",
    ],
    examples: [
      "puhua (to speak)",
      "lukea (to read)",
      "istua (to sit)",
      "ymmärtää (to understand)",
      "odottaa (to wait)",
    ],
    pattern:
      "These verbs have both weak and strong stems. Consonant gradation happens in weak stems.",
    conjugation: {
      puhua: {
        positive: [
          "Minä puhun",
          "Sinä puhut",
          "Hän puhuu",
          "Me puhumme",
          "Te puhutte",
          "He puhuvat",
        ],
        negative: [
          "Minä en puhu",
          "Sinä et puhu",
          "Hän ei puhu",
          "Me emme puhu",
          "Te ette puhu",
          "He eivät puhu",
        ],
      },
      lukea: {
        positive: [
          "Minä luen",
          "Sinä luet",
          "Hän lukee",
          "Me luemme",
          "Te luette",
          "He lukevat",
        ],
        negative: [
          "Minä en lue",
          "Sinä et lue",
          "Hän ei lue",
          "Me emme lue",
          "Te ette lue",
          "He eivät lue",
        ],
      },
    },
  },
  {
    type: 2,
    title: "Verb Type 2",
    description: "Verbs ending in -da/-dä",
    endings: ["-da", "-dä"],
    examples: [
      "syödä (to eat)",
      "juoda (to drink)",
      "tehdä (to do/make)",
      "nähdä (to see)",
      "käydä (to visit)",
    ],
    pattern: "Remove -da/-dä to get the stem. No consonant gradation occurs.",
    conjugation: {
      syödä: {
        positive: [
          "Minä syön",
          "Sinä syöt",
          "Hän syö",
          "Me syömme",
          "Te syötte",
          "He syövät",
        ],
        negative: [
          "Minä en syö",
          "Sinä et syö",
          "Hän ei syö",
          "Me emme syö",
          "Te ette syö",
          "He eivät syö",
        ],
      },
      juoda: {
        positive: [
          "Minä juon",
          "Sinä juot",
          "Hän juo",
          "Me juomme",
          "Te juotte",
          "He juovat",
        ],
        negative: [
          "Minä en juo",
          "Sinä et juo",
          "Hän ei juo",
          "Me emme juo",
          "Te ette juo",
          "He eivät juo",
        ],
      },
    },
  },
  {
    type: 3,
    title: "Verb Type 3",
    description: "Verbs ending in -lla/-llä, -nna/-nnä, -rra/-rrä, -sta/-stä",
    endings: ["-lla", "-llä", "-nna", "-nnä", "-rra", "-rrä", "-sta", "-stä"],
    examples: [
      "tulla (to come)",
      "mennä (to go)",
      "purra (to bite)",
      "nousta (to rise)",
      "opiskella (to study)",
    ],
    pattern:
      "Remove the last two letters to get the stem. Consonant gradation may occur.",
    conjugation: {
      tulla: {
        positive: [
          "Minä tulen",
          "Sinä tulet",
          "Hän tulee",
          "Me tulemme",
          "Te tulette",
          "He tulevat",
        ],
        negative: [
          "Minä en tule",
          "Sinä et tule",
          "Hän ei tule",
          "Me emme tule",
          "Te ette tule",
          "He eivät tule",
        ],
      },
      mennä: {
        positive: [
          "Minä menen",
          "Sinä menet",
          "Hän menee",
          "Me menemme",
          "Te menette",
          "He menevät",
        ],
        negative: [
          "Minä en mene",
          "Sinä et mene",
          "Hän ei mene",
          "Me emme mene",
          "Te ette mene",
          "He eivät mene",
        ],
      },
    },
  },
  {
    type: 4,
    title: "Verb Type 4",
    description: "Verbs ending in -ata/-ätä, -ota/-ötä, -uta/-ytä",
    endings: ["-ata", "-ätä", "-ota", "-ötä", "-uta", "-ytä"],
    examples: [
      "tavata (to meet)",
      "tarjota (to offer)",
      "haluta (to want)",
      "pelätä (to fear)",
      "arvata (to guess)",
    ],
    pattern:
      "Remove -ta/-tä to get the stem. Consonant gradation often occurs.",
    conjugation: {
      tavata: {
        positive: [
          "Minä tapaan",
          "Sinä tapaat",
          "Hän tapaa",
          "Me tapaamme",
          "Te tapaatte",
          "He tapaavat",
        ],
        negative: [
          "Minä en tapaa",
          "Sinä et tapaa",
          "Hän ei tapaa",
          "Me emme tapaa",
          "Te ette tapaa",
          "He eivät tapaa",
        ],
      },
      haluta: {
        positive: [
          "Minä haluan",
          "Sinä haluat",
          "Hän haluaa",
          "Me haluamme",
          "Te haluatte",
          "He haluavat",
        ],
        negative: [
          "Minä en halua",
          "Sinä et halua",
          "Hän ei halua",
          "Me emme halua",
          "Te ette halua",
          "He eivät halua",
        ],
      },
    },
  },
  {
    type: 5,
    title: "Verb Type 5",
    description: "Verbs ending in -ita/-itä",
    endings: ["-ita", "-itä"],
    examples: [
      "tarvita (to need)",
      "mainita (to mention)",
      "hävittää (to destroy)",
      "tunnistaa (to recognize)",
      "valita (to choose)",
    ],
    pattern: "Remove -ta/-tä and add -tse- before personal endings.",
    conjugation: {
      tarvita: {
        positive: [
          "Minä tarvitsen",
          "Sinä tarvitset",
          "Hän tarvitsee",
          "Me tarvitsemme",
          "Te tarvitsette",
          "He tarvitsevat",
        ],
        negative: [
          "Minä en tarvitse",
          "Sinä et tarvitse",
          "Hän ei tarvitse",
          "Me emme tarvitse",
          "Te ette tarvitse",
          "He eivät tarvitse",
        ],
      },
      valita: {
        positive: [
          "Minä valitsen",
          "Sinä valitset",
          "Hän valitsee",
          "Me valitsemme",
          "Te valitsette",
          "He valitsevat",
        ],
        negative: [
          "Minä en valitse",
          "Sinä et valitse",
          "Hän ei valitse",
          "Me emme valitse",
          "Te ette valitse",
          "He eivät valitse",
        ],
      },
    },
  },
  {
    type: 6,
    title: "Verb Type 6",
    description: "Verbs ending in -eta/-etä",
    endings: ["-eta", "-etä"],
    examples: [
      "paeta (to flee)",
      "kiinnetä (to be attached)",
      "vanheta (to grow old)",
      "lämmetä (to warm up)",
      "kylmetä (to get cold)",
    ],
    pattern: "Remove -ta/-tä and add -ne- before personal endings.",
    conjugation: {
      paeta: {
        positive: [
          "Minä pakenen",
          "Sinä pakenet",
          "Hän pakenee",
          "Me pakenemme",
          "Te pakenette",
          "He pakenevat",
        ],
        negative: [
          "Minä en pakene",
          "Sinä et pakene",
          "Hän ei pakene",
          "Me emme pakene",
          "Te ette pakene",
          "He eivät pakene",
        ],
      },
      vanheta: {
        positive: [
          "Minä vanhenen",
          "Sinä vanhenet",
          "Hän vanhenee",
          "Me vanhenemme",
          "Te vanhenette",
          "He vanhenevat",
        ],
        negative: [
          "Minä en vanhene",
          "Sinä et vanhene",
          "Hän ei vanhene",
          "Me emme vanhene",
          "Te ette vanhene",
          "He eivät vanhene",
        ],
      },
    },
  },
];

const commonVerbsByType: CommonVerbsByType = {
  1: [
    { finnish: "Ajaa", english: "to drive" },
    { finnish: "Antaa", english: "to give" },
    { finnish: "Asua", english: "to live" },
    { finnish: "Auttaa", english: "to help" },
    { finnish: "Etsiä", english: "to search" },
    { finnish: "Itkeä", english: "to cry" },
    { finnish: "Katsoa", english: "to watch" },
    { finnish: "Kirjoittaa", english: "to write" },
    { finnish: "Kysyä", english: "to ask" },
    { finnish: "Lähteä", english: "to leave" },
    { finnish: "Maksaa", english: "to cost/pay" },
    { finnish: "Muistaa", english: "to remember" },
    { finnish: "Ostaa", english: "to buy" },
    { finnish: "Ottaa", english: "to take" },
    { finnish: "Sanoa", english: "to say" },
    { finnish: "Soittaa", english: "to call/play" },
    { finnish: "Tietää", english: "to know" },
    { finnish: "Unohtaa", english: "to forget" },
  ],
  2: [
    { finnish: "Syödä", english: "to eat" },
    { finnish: "Juoda", english: "to drink" },
    { finnish: "Tehdä", english: "to do/make" },
    { finnish: "Nähdä", english: "to see" },
    { finnish: "Käydä", english: "to visit" },
    { finnish: "Saada", english: "to get" },
    { finnish: "Voida", english: "to be able to" },
  ],
  3: [
    { finnish: "Tulla", english: "to come" },
    { finnish: "Mennä", english: "to go" },
    { finnish: "Purra", english: "to bite" },
    { finnish: "Nousta", english: "to rise" },
    { finnish: "Opiskella", english: "to study" },
    { finnish: "Asennella", english: "to install" },
  ],
  4: [
    { finnish: "Tavata", english: "to meet" },
    { finnish: "Tarjota", english: "to offer" },
    { finnish: "Haluta", english: "to want" },
    { finnish: "Pelätä", english: "to fear" },
    { finnish: "Arvata", english: "to guess" },
  ],
  5: [
    { finnish: "Tarvita", english: "to need" },
    { finnish: "Mainita", english: "to mention" },
    { finnish: "Hävittää", english: "to destroy" },
    { finnish: "Tunnistaa", english: "to recognize" },
    { finnish: "Valita", english: "to choose" },
  ],
  6: [
    { finnish: "Paeta", english: "to flee" },
    { finnish: "Kiinnetä", english: "to be attached" },
    { finnish: "Vanheta", english: "to grow old" },
    { finnish: "Lämmetä", english: "to warm up" },
    { finnish: "Kylmetä", english: "to get cold" },
  ],
};

const VerbTypesPresentTense = () => {
  const [activeVerbType, setActiveVerbType] = useState(1);
  const [activeExample, setActiveExample] = useState(0);

  const [apiResult, setApiResult] = useState<ApiVerbAnalysis | null>(null);
  const [inputVerb, setInputVerb] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchVerbAnalysis = async (verb: string) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/verb-type-checker", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ verb }),
      });
      if (!response.ok) throw new Error("Failed to fetch verb data");
      const data: ApiVerbAnalysis = await response.json();
      setApiResult(data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Error fetching verb analysis");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputVerb.trim()) fetchVerbAnalysis(inputVerb.trim());
  };

  // Helper to render conjugation tables from API result
  const renderConjugationTable = (tense: "present" | "negative") => {
    if (!apiResult) return null;
    const tenseData = apiResult.tenses[tense];
    return Object.entries(tenseData).map(([pronoun, data]) => (
      <tr key={pronoun}>
        <StyledTableCell>{pronoun}</StyledTableCell>
        <StyledTableCell>{data.form}</StyledTableCell>
        <StyledTableCell>{data.example}</StyledTableCell>
      </tr>
    ));
  };

  // Find the current verb type with proper type safety
  const currentType = verbTypes.find((type) => type.type === activeVerbType);

  // If currentType is undefined, show an error message
  if (!currentType) {
    return (
      <Container>
        <h2>Finnish Verb Types</h2>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#ffebee",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <p>Error: Verb type not found. Please select a valid verb type.</p>
        </div>
      </Container>
    );
  }

  const exampleVerbs = Object.keys(currentType.conjugation);
  const currentVerb = exampleVerbs[activeExample];
  const positiveConjugations = currentType.conjugation[currentVerb].positive;
  const negativeConjugations = currentType.conjugation[currentVerb].negative;

  return (
    <Container>
      <ContentContainer>
        <Header>
          <Title>Finnish Verb Types - Present Tense</Title>
          <Subtitle>Learn verb forms, tenses, and usage examples</Subtitle>
        </Header>
        {/* Input Form for API verbs */}
        <Form
          onSubmit={handleSubmit}
          style={{ margin: "15px 0", textAlign: "center" }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <FormLabel htmlFor="verb-input">
              Enter a verb in Finnish or English:
            </FormLabel>
            <InputContainer>
              <Input
                type="text"
                placeholder="e.g., 'olla' or 'to be'"
                value={inputVerb}
                onChange={(e) => setInputVerb(e.target.value)}
                // style={{
                //   padding: "8px 12px",
                //   width: "250px",
                //   borderRadius: "5px",
                //   marginRight: "10px",
                // }}
                disabled={loading}
              />
              <Button
                type="submit"
                $primary
                disabled={loading || !inputVerb.trim()}
              >
                {loading ? "Analyzing..." : "Analyze"}
              </Button>
            </InputContainer>
          </div>
        </Form>

        {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
        {error && <ErrorMessage>{error}</ErrorMessage>}

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

        {apiResult && !loading && (
          <ResultContainer>
            <ResultHeader>
              <ResultTitle>{apiResult.verb}</ResultTitle>
              <ResultSubtitle>({apiResult.english})</ResultSubtitle>
              <p>
                <strong>Type:</strong> {apiResult.type} — {apiResult.rules}
              </p>
              {apiResult.notes && (
                <p>
                  <strong>Notes:</strong> {apiResult.notes}
                </p>
              )}
            </ResultHeader>
            {/* Desktop Table */}
            <StyledTable>
              <thead>
                <tr>
                  <StyledTableHeader>Person</StyledTableHeader>
                  <StyledTableHeader>Form</StyledTableHeader>
                  <StyledTableHeader>Example</StyledTableHeader>
                </tr>
              </thead>
              <tbody>{renderConjugationTable("present")}</tbody>
            </StyledTable>

            <StyledTable style={{ marginTop: "20px" }}>
              <thead>
                <tr>
                  <StyledTableHeader>Person</StyledTableHeader>
                  <StyledTableHeader>Form</StyledTableHeader>
                  <StyledTableHeader>Example</StyledTableHeader>
                </tr>
              </thead>
              <tbody>{renderConjugationTable("negative")}</tbody>
            </StyledTable>

            {/* Mobile Tables */}
            <MobileTableContainer>
              {["present", "negative"].map((tense) => (
                <MobileCaseSection key={tense}>
                  <CaseTitle>
                    {tense === "present" ? "Present" : "Negative"} Conjugation
                  </CaseTitle>
                  <MobileTable>
                    <thead>
                      <tr>
                        <MobileTableHeader>Person</MobileTableHeader>
                        <MobileTableHeader>Form</MobileTableHeader>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(
                        apiResult.tenses[tense as "present" | "negative"]
                      ).map(([pronoun, data]) => (
                        <tr key={pronoun}>
                          <MobileTableCell>{pronoun}</MobileTableCell>
                          <MobileTableCell>{data.form}</MobileTableCell>
                        </tr>
                      ))}
                    </tbody>
                  </MobileTable>
                </MobileCaseSection>
              ))}
            </MobileTableContainer>
          </ResultContainer>
        )}
      </ContentContainer>
      <ContentContainer>
        <UsageExplanation>
          <p>
            Finnish verbs are divided into six types based on their endings and
            how they conjugate. Each type follows specific patterns that help
            you conjugate them correctly.
          </p>
        </UsageExplanation>
      </ContentContainer>

      <h3>Choose a Verb Type</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          margin: "15px 0",
          justifyContent: "center",
        }}
      >
        {verbTypes.map((type) => (
          <button
            key={type.type}
            onClick={() => {
              setActiveVerbType(type.type);
              setActiveExample(0);
            }}
            style={{
              padding: "10px 15px",
              backgroundColor:
                activeVerbType === type.type ? "#0066cc" : "#f0f0f0",
              color: activeVerbType === type.type ? "white" : "#333",
              border: "none",
              borderRadius: "20px",
              cursor: "pointer",
              transition: "all 0.3s",
              minWidth: "120px",
            }}
          >
            Type {type.type}
          </button>
        ))}
      </div>

      <h3>{currentType.title}</h3>
      <p>{currentType.description}</p>

      <div
        style={{
          padding: "15px",
          backgroundColor: "#f0f9ff",
          borderRadius: "8px",
          margin: "15px 0",
        }}
      >
        <h3>Endings</h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            margin: "10px 0",
          }}
        >
          {currentType.endings.map((ending, index) => (
            <span
              key={index}
              style={{
                padding: "5px 10px",
                backgroundColor: "#ffd8a8",
                borderRadius: "15px",
                fontWeight: "bold",
              }}
            >
              {ending}
            </span>
          ))}
        </div>

        <h3>Pattern</h3>
        <p>{currentType.pattern}</p>

        <h3>Examples</h3>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            margin: "10px 0",
          }}
        >
          {currentType.examples.map((example, index) => (
            <span
              key={index}
              style={{
                padding: "5px 10px",
                backgroundColor: "#ffe0b3",
                borderRadius: "15px",
              }}
            >
              {example}
            </span>
          ))}
        </div>
      </div>

      <h3>Conjugation Examples</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          margin: "15px 0",
          justifyContent: "center",
        }}
      >
        {exampleVerbs.map((verb, index) => (
          <button
            key={verb}
            onClick={() => setActiveExample(index)}
            style={{
              padding: "8px 12px",
              backgroundColor: activeExample === index ? "#0066cc" : "#f0f0f0",
              color: activeExample === index ? "white" : "#006699",
              border: "none",
              borderRadius: "15px",
              cursor: "pointer",
            }}
          >
            {verb}
          </button>
        ))}
      </div>

      {/* Desktop Conjugation Table */}
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Person</StyledTableHeader>
            <StyledTableHeader>Positive Form</StyledTableHeader>
            <StyledTableHeader>Negative Form</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {positiveConjugations.map((conjugation, index) => (
            <tr key={index}>
              <StyledTableCell>{conjugation.split(" ")[0]}</StyledTableCell>
              <StyledTableCell>{conjugation}</StyledTableCell>
              <StyledTableCell>{negativeConjugations[index]}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      {/* Mobile Conjugation Table */}
      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>{currentVerb} Conjugation (Positive)</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Person</MobileTableHeader>
                <MobileTableHeader>Form</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {positiveConjugations.map((conjugation, index) => (
                <tr key={index}>
                  <MobileTableCell>{conjugation.split(" ")[0]}</MobileTableCell>
                  <MobileTableCell>{conjugation}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>

        <MobileCaseSection>
          <CaseTitle>{currentVerb} Conjugation (Negative)</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Person</MobileTableHeader>
                <MobileTableHeader>Form</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {negativeConjugations.map((conjugation, index) => (
                <tr key={index}>
                  <MobileTableCell>{conjugation.split(" ")[0]}</MobileTableCell>
                  <MobileTableCell>{conjugation}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      <h3>Common Type {activeVerbType} Verbs</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "10px",
          margin: "20px 0",
        }}
      >
        {commonVerbsByType[activeVerbType].map((verb, index) => (
          <div
            key={index}
            style={{
              padding: "10px",
              backgroundColor: index % 2 === 0 ? "#f0f9ff" : "#f0f9ff",
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            <div style={{ fontWeight: "bold", color: "#0066cc" }}>
              {verb.finnish}
            </div>
            <div>{verb.english}</div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "30px",
          padding: "15px",
          backgroundColor: "#e6ffe6",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        <h3>Remember This!</h3>
        <p>
          Each verb type follows specific patterns. With practice, you&apos;ll
          recognize these patterns and conjugate Finnish verbs correctly!
        </p>
      </div>
    </Container>
  );
};

export default VerbTypesPresentTense;
