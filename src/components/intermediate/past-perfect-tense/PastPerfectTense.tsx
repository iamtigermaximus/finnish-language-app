"use client";
import React, { useState } from "react";
import {
  CaseTitle,
  Container,
  MobileCaseSection,
  MobileTable,
  MobileTableCell,
  MobileTableContainer,
  MobileTableHeader,
  StyledTable,
  StyledTableCell,
  StyledTableHeader,
  Title,
} from "./PastPerfectTense.styles";

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
  negativePattern: string;
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
    title: "Verb Type 1 (Past Perfect Tense)",
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
      "Form the past participle by removing the final vowel and adding -nut/nyt. Then combine with the past tense of olla.",
    negativePattern:
      "Use the negative past form of olla + the past participle (nut/nyt for singular, neet for plural).",
    conjugation: {
      puhua: {
        positive: [
          "Minä olin puhunut",
          "Sinä olit puhunut",
          "Hän oli puhunut",
          "Me olimme puhuneet",
          "Te olitte puhuneet",
          "He olivat puhuneet",
        ],
        negative: [
          "Minä en ollut puhunut",
          "Sinä et ollut puhunut",
          "Hän ei ollut puhunut",
          "Me emme olleet puhuneet",
          "Te ette olleet puhuneet",
          "He eivät olleet puhuneet",
        ],
      },
      lukea: {
        positive: [
          "Minä olin lukenut",
          "Sinä olit lukenut",
          "Hän oli lukenut",
          "Me olimme lukeneet",
          "Te olitte lukeneet",
          "He olivat lukeneet",
        ],
        negative: [
          "Minä en ollut lukenut",
          "Sinä et ollut lukenut",
          "Hän ei ollut lukenut",
          "Me emme olleet lukeneet",
          "Te ette olleet lukeneet",
          "He eivät olleet lukeneet",
        ],
      },
    },
  },
  {
    type: 2,
    title: "Verb Type 2 (Past Perfect Tense)",
    description: "Verbs ending in -da/-dä",
    endings: ["-da", "-dä"],
    examples: [
      "syödä (to eat)",
      "juoda (to drink)",
      "tehdä (to do/make)",
      "nähdä (to see)",
      "käydä (to visit)",
    ],
    pattern:
      "Form the past participle by removing -da/-dä and adding -nut/nyt. Then combine with the past tense of olla.",
    negativePattern:
      "Use the negative past form of olla + the past participle (nut/nyt for singular, neet for plural).",
    conjugation: {
      syödä: {
        positive: [
          "Minä olin syönyt",
          "Sinä olit syönyt",
          "Hän oli syönyt",
          "Me olimme syöneet",
          "Te olitte syöneet",
          "He olivat syöneet",
        ],
        negative: [
          "Minä en ollut syönyt",
          "Sinä et ollut syönyt",
          "Hän ei ollut syönyt",
          "Me emme olleet syöneet",
          "Te ette olleet syöneet",
          "He eivät olleet syöneet",
        ],
      },
      juoda: {
        positive: [
          "Minä olin juonut",
          "Sinä olit juonut",
          "Hän oli juonut",
          "Me olimme juoneet",
          "Te olitte juoneet",
          "He olivat juoneet",
        ],
        negative: [
          "Minä en ollut juonut",
          "Sinä et ollut juonut",
          "Hän ei ollut juonut",
          "Me emme olleet juoneet",
          "Te ette olleet juoneet",
          "He eivät olleet juoneet",
        ],
      },
    },
  },
  {
    type: 3,
    title: "Verb Type 3 (Past Perfect Tense)",
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
      "Form the past participle by removing the last two letters and adding -lut/lyt or -nut/nyt. Then combine with the past tense of olla.",
    negativePattern:
      "Use the negative past form of olla + the past participle (lut/lyt or nut/nyt for singular, leet or neet for plural).",
    conjugation: {
      tulla: {
        positive: [
          "Minä olin tullut",
          "Sinä olit tullut",
          "Hän oli tullut",
          "Me olimme tulleet",
          "Te olitte tulleet",
          "He olivat tulleet",
        ],
        negative: [
          "Minä en ollut tullut",
          "Sinä et ollut tullut",
          "Hän ei ollut tullut",
          "Me emme olleet tulleet",
          "Te ette olleet tulleet",
          "He eivät olleet tulleet",
        ],
      },
      mennä: {
        positive: [
          "Minä olin mennyt",
          "Sinä olit mennyt",
          "Hän oli mennyt",
          "Me olimme menneet",
          "Te olitte menneet",
          "He olivat menneet",
        ],
        negative: [
          "Minä en ollut mennyt",
          "Sinä et ollut mennyt",
          "Hän ei ollut mennyt",
          "Me emme olleet menneet",
          "Te ette olleet menneet",
          "He eivät olleet menneet",
        ],
      },
    },
  },
  {
    type: 4,
    title: "Verb Type 4 (Past Perfect Tense)",
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
      "Form the past participle by removing -ta/-tä and adding -nnut/nnyt. Then combine with the past tense of olla.",
    negativePattern:
      "Use the negative past form of olla + the past participle (nnut/nnyt for singular, nneet for plural).",
    conjugation: {
      tavata: {
        positive: [
          "Minä olin tavannut",
          "Sinä olit tavannut",
          "Hän oli tavannut",
          "Me olimme tavanneet",
          "Te olitte tavanneet",
          "He olivat tavanneet",
        ],
        negative: [
          "Minä en ollut tavannut",
          "Sinä et ollut tavannut",
          "Hän ei ollut tavannut",
          "Me emme olleet tavanneet",
          "Te ette olleet tavanneet",
          "He eivät olleet tavanneet",
        ],
      },
      haluta: {
        positive: [
          "Minä olin halunnut",
          "Sinä olit halunnut",
          "Hän oli halunnut",
          "Me olimme halunneet",
          "Te olitte halunneet",
          "He olivat halunneet",
        ],
        negative: [
          "Minä en ollut halunnut",
          "Sinä et ollut halunnut",
          "Hän ei ollut halunnut",
          "Me emme olleet halunneet",
          "Te ette olleet halunneet",
          "He eivät olleet halunneet",
        ],
      },
    },
  },
  {
    type: 5,
    title: "Verb Type 5 (Past Perfect Tense)",
    description: "Verbs ending in -ita/-itä",
    endings: ["-ita", "-itä"],
    examples: [
      "tarvita (to need)",
      "mainita (to mention)",
      "hävittää (to destroy)",
      "tunnistaa (to recognize)",
      "valita (to choose)",
    ],
    pattern:
      "Form the past participle by removing -ta/-tä and adding -nnut/nnyt. Then combine with the past tense of olla.",
    negativePattern:
      "Use the negative past form of olla + the past participle (nnut/nnyt for singular, nneet for plural).",
    conjugation: {
      tarvita: {
        positive: [
          "Minä olin tarvinnut",
          "Sinä olit tarvinnut",
          "Hän oli tarvinnut",
          "Me olimme tarvinneet",
          "Te olitte tarvinneet",
          "He olivat tarvinneet",
        ],
        negative: [
          "Minä en ollut tarvinnut",
          "Sinä et ollut tarvinnut",
          "Hän ei ollut tarvinnut",
          "Me emme olleet tarvinneet",
          "Te ette olleet tarvinneet",
          "He eivät olleet tarvinneet",
        ],
      },
      valita: {
        positive: [
          "Minä olin valinnut",
          "Sinä olit valinnut",
          "Hän oli valinnut",
          "Me olimme valinneet",
          "Te olitte valinneet",
          "He olivat valinneet",
        ],
        negative: [
          "Minä en ollut valinnut",
          "Sinä et ollut valinnut",
          "Hän ei ollut valinnut",
          "Me emme olleet valinneet",
          "Te ette olleet valinneet",
          "He eivät olleet valinneet",
        ],
      },
    },
  },
  {
    type: 6,
    title: "Verb Type 6 (Past Perfect Tense)",
    description: "Verbs ending in -eta/-etä",
    endings: ["-eta", "-etä"],
    examples: [
      "paeta (to flee)",
      "kiinnetä (to be attached)",
      "vanheta (to grow old)",
      "lämmetä (to warm up)",
      "kylmetä (to get cold)",
    ],
    pattern:
      "Form the past participle by removing -ta/-tä and adding -nnut/nnyt. Then combine with the past tense of olla.",
    negativePattern:
      "Use the negative past form of olla + the past participle (nnut/nnyt for singular, nneet for plural).",
    conjugation: {
      paeta: {
        positive: [
          "Minä olin paennut",
          "Sinä olit paennut",
          "Hän oli paennut",
          "Me olimme pakenneet",
          "Te olitte pakenneet",
          "He olivat pakenneet",
        ],
        negative: [
          "Minä en ollut paennut",
          "Sinä et ollut paennut",
          "Hän ei ollut paennut",
          "Me emme olleet pakenneet",
          "Te ette olleet pakenneet",
          "He eivät olleet pakenneet",
        ],
      },
      vanheta: {
        positive: [
          "Minä olin vanhennut",
          "Sinä olit vanhennut",
          "Hän oli vanhennut",
          "Me olimme vanhenneet",
          "Te olitte vanhenneet",
          "He olivat vanhenneet",
        ],
        negative: [
          "Minä en ollut vanhennut",
          "Sinä et ollut vanhennut",
          "Hän ei ollut vanhennut",
          "Me emme olleet vanhenneet",
          "Te ette olleet vanhenneet",
          "He eivät olleet vanhenneet",
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

const PastPerfectTense = () => {
  const [activeVerbType, setActiveVerbType] = useState(1);
  const [activeExample, setActiveExample] = useState(0);

  // Find the current verb type with proper type safety
  const currentType = verbTypes.find((type) => type.type === activeVerbType);

  // If currentType is undefined, show an error message
  if (!currentType) {
    return (
      <Container>
        <h1>Finnish Verb Types - Past Perfect Tense</h1>
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
      <Title>Finnish Verb Types - Past Perfect Tense</Title>

      <div
        style={{
          padding: "15px",
          backgroundColor: "#f0f9ff",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <p>
          The past perfect tense in Finnish (pluskvamperfekti) is formed with
          the past tense of the auxiliary verb &quot;olla&quot; (to be) combined
          with the past participle (nut/nyt/neet) of the main verb. It describes
          actions that were completed before another past action.
        </p>
      </div>

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
                backgroundColor: "#ffe0b3",
                borderRadius: "15px",
                fontWeight: "bold",
              }}
            >
              {ending}
            </span>
          ))}
        </div>

        <h3>Positive Form Pattern</h3>
        <p>{currentType.pattern}</p>

        <h3>Negative Form Pattern</h3>
        <p>{currentType.negativePattern}</p>

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
              backgroundColor: activeExample === index ? "#0066cc" : "#e6f7ff",
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
          The past perfect tense is formed with the past tense of
          &quot;olla&quot; (to be) + the past participle. It describes actions
          that were completed before another past action or time in the past.
        </p>
        <p style={{ marginTop: "10px", fontWeight: "bold" }}>
          For the negative past perfect tense, use the negative past form of
          &quot;olla&quot; (en ollut, et ollut, ei ollut, etc.) + the
          appropriate participle form (nut/nyt for singular, neet for plural).
        </p>
        <p style={{ marginTop: "10px", fontStyle: "italic" }}>
          Example: &quot;Minä olin jo syönyt, kun sinä tulit&quot; (I had
          already eaten when you came)
        </p>
      </div>
    </Container>
  );
};

export default PastPerfectTense;
