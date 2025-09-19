'use client';
import React, { useState } from 'react';
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
} from './PerfectTense.styles';

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
    title: "Verb Type 1 (Perfect Tense)",
    description: "The most common verb type ending in two vowels",
    endings: ["-aa", "-ea", "-eä", "-ia", "-iä", "-oa", "-ua", "-yä", "-ää", "-öä"],
    examples: ["puhua (to speak)", "lukea (to read)", "istua (to sit)", "ymmärtää (to understand)", "odottaa (to wait)"],
    pattern: "Form the past participle by removing the final vowel and adding -nut/nyt. Then combine with the appropriate form of olla.",
    negativePattern: "Use the negative form of olla + the past participle (nut/nyt for singular, neet for plural).",
    conjugation: {
      puhua: {
        positive: ["Minä olen puhunut", "Sinä olet puhunut", "Hän on puhunut", "Me olemme puhuneet", "Te olette puhuneet", "He ovat puhuneet"],
        negative: ["Minä en ole puhunut", "Sinä et ole puhunut", "Hän ei ole puhunut", "Me emme ole puhuneet", "Te ette ole puhuneet", "He eivät ole puhuneet"]
      },
      lukea: {
        positive: ["Minä olen lukenut", "Sinä olet lukenut", "Hän on lukenut", "Me olemme lukeneet", "Te olette lukeneet", "He ovat lukeneet"],
        negative: ["Minä en ole lukenut", "Sinä et ole lukenut", "Hän ei ole lukenut", "Me emme ole lukeneet", "Te ette ole lukeneet", "He eivät ole lukeneet"]
      }
    }
  },
  {
    type: 2,
    title: "Verb Type 2 (Perfect Tense)",
    description: "Verbs ending in -da/-dä",
    endings: ["-da", "-dä"],
    examples: ["syödä (to eat)", "juoda (to drink)", "tehdä (to do/make)", "nähdä (to see)", "käydä (to visit)"],
    pattern: "Form the past participle by removing -da/-dä and adding -nut/nyt. Then combine with the appropriate form of olla.",
    negativePattern: "Use the negative form of olla + the past participle (nut/nyt for singular, neet for plural).",
    conjugation: {
      syödä: {
        positive: ["Minä olen syönyt", "Sinä olet syönyt", "Hän on syönyt", "Me olemme syöneet", "Te olette syöneet", "He ovat syöneet"],
        negative: ["Minä en ole syönyt", "Sinä et ole syönyt", "Hän ei ole syönyt", "Me emme ole syöneet", "Te ette ole syöneet", "He eivät ole syöneet"]
      },
      juoda: {
        positive: ["Minä olen juonut", "Sinä olet juonut", "Hän on juonut", "Me olemme juoneet", "Te olette juoneet", "He ovat juoneet"],
        negative: ["Minä en ole juonut", "Sinä et ole juonut", "Hän ei ole juonut", "Me emme ole juoneet", "Te ette ole juoneet", "He eivät ole juoneet"]
      }
    }
  },
  {
    type: 3,
    title: "Verb Type 3 (Perfect Tense)",
    description: "Verbs ending in -lla/-llä, -nna/-nnä, -rra/-rrä, -sta/-stä",
    endings: ["-lla", "-llä", "-nna", "-nnä", "-rra", "-rrä", "-sta", "-stä"],
    examples: ["tulla (to come)", "mennä (to go)", "purra (to bite)", "nousta (to rise)", "opiskella (to study)"],
    pattern: "Form the past participle by removing the last two letters and adding -lut/lyt or -nut/nyt. Then combine with the appropriate form of olla.",
    negativePattern: "Use the negative form of olla + the past participle (lut/lyt or nut/nyt for singular, leet or neet for plural).",
    conjugation: {
      tulla: {
        positive: ["Minä olen tullut", "Sinä olet tullut", "Hän on tullut", "Me olemme tulleet", "Te olette tulleet", "He ovat tulleet"],
        negative: ["Minä en ole tullut", "Sinä et ole tullut", "Hän ei ole tullut", "Me emme ole tulleet", "Te ette ole tulleet", "He eivät ole tulleet"]
      },
      mennä: {
        positive: ["Minä olen mennyt", "Sinä olet mennyt", "Hän on mennyt", "Me olemme menneet", "Te olette menneet", "He ovat menneet"],
        negative: ["Minä en ole mennyt", "Sinä et ole mennyt", "Hän ei ole mennyt", "Me emme ole menneet", "Te ette ole menneet", "He eivät ole menneet"]
      }
    }
  },
  {
    type: 4,
    title: "Verb Type 4 (Perfect Tense)",
    description: "Verbs ending in -ata/-ätä, -ota/-ötä, -uta/-ytä",
    endings: ["-ata", "-ätä", "-ota", "-ötä", "-uta", "-ytä"],
    examples: ["tavata (to meet)", "tarjota (to offer)", "haluta (to want)", "pelätä (to fear)", "arvata (to guess)"],
    pattern: "Form the past participle by removing -ta/-tä and adding -nnut/nnyt. Then combine with the appropriate form of olla.",
    negativePattern: "Use the negative form of olla + the past participle (nnut/nnyt for singular, nneet for plural).",
    conjugation: {
      tavata: {
        positive: ["Minä olen tavannut", "Sinä olet tavannut", "Hän on tavannut", "Me olemme tavanneet", "Te olette tavanneet", "He ovat tavanneet"],
        negative: ["Minä en ole tavannut", "Sinä et ole tavannut", "Hän ei ole tavannut", "Me emme ole tavanneet", "Te ette ole tavanneet", "He eivät ole tavanneet"]
      },
      haluta: {
        positive: ["Minä olen halunnut", "Sinä olet halunnut", "Hän on halunnut", "Me olemme halunneet", "Te olette halunneet", "He ovat halunneet"],
        negative: ["Minä en ole halunnut", "Sinä et ole halunnut", "Hän ei ole halunnut", "Me emme ole halunneet", "Te ette ole halunneet", "He eivät ole halunneet"]
      }
    }
  },
  {
    type: 5,
    title: "Verb Type 5 (Perfect Tense)",
    description: "Verbs ending in -ita/-itä",
    endings: ["-ita", "-itä"],
    examples: ["tarvita (to need)", "mainita (to mention)", "hävittää (to destroy)", "tunnistaa (to recognize)", "valita (to choose)"],
    pattern: "Form the past participle by removing -ta/-tä and adding -nnut/nnyt. Then combine with the appropriate form of olla.",
    negativePattern: "Use the negative form of olla + the past participle (nnut/nnyt for singular, nneet for plural).",
    conjugation: {
      tarvita: {
        positive: ["Minä olen tarvinnut", "Sinä olet tarvinnut", "Hän on tarvinnut", "Me olemme tarvinneet", "Te olette tarvinneet", "He ovat tarvinneet"],
        negative: ["Minä en ole tarvinnut", "Sinä et ole tarvinnut", "Hän ei ole tarvinnut", "Me emme ole tarvinneet", "Te ette ole tarvinneet", "He eivät ole tarvinneet"]
      },
      valita: {
        positive: ["Minä olen valinnut", "Sinä olet valinnut", "Hän on valinnut", "Me olemme valinneet", "Te olette valinneet", "He ovat valinneet"],
        negative: ["Minä en ole valinnut", "Sinä et ole valinnut", "Hän ei ole valinnut", "Me emme ole valinneet", "Te ette ole valinneet", "He eivät ole valinneet"]
      }
    }
  },
  {
    type: 6,
    title: "Verb Type 6 (Perfect Tense)",
    description: "Verbs ending in -eta/-etä",
    endings: ["-eta", "-etä"],
    examples: ["paeta (to flee)", "kiinnetä (to be attached)", "vanheta (to grow old)", "lämmetä (to warm up)", "kylmetä (to get cold)"],
    pattern: "Form the past participle by removing -ta/-tä and adding -nnut/nnyt. Then combine with the appropriate form of olla.",
    negativePattern: "Use the negative form of olla + the past participle (nnut/nnyt for singular, nneet for plural).",
    conjugation: {
      paeta: {
        positive: ["Minä olen paennut", "Sinä olet paennut", "Hän on paennut", "Me olemme pakenneet", "Te olette pakenneet", "He ovat pakenneet"],
        negative: ["Minä en ole paennut", "Sinä et ole paennut", "Hän ei ole paennut", "Me emme ole pakenneet", "Te ette ole pakenneet", "He eivät ole pakenneet"]
      },
      vanheta: {
        positive: ["Minä olen vanhennut", "Sinä olet vanhennut", "Hän on vanhennut", "Me olemme vanhenneet", "Te olette vanhenneet", "He ovat vanhenneet"],
        negative: ["Minä en ole vanhennut", "Sinä et ole vanhennut", "Hän ei ole vanhennut", "Me emme ole vanhenneet", "Te ette ole vanhenneet", "He eivät ole vanhenneet"]
      }
    }
  }
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
    { finnish: "Unohtaa", english: "to forget" }
  ],
  2: [
    { finnish: "Syödä", english: "to eat" },
    { finnish: "Juoda", english: "to drink" },
    { finnish: "Tehdä", english: "to do/make" },
    { finnish: "Nähdä", english: "to see" },
    { finnish: "Käydä", english: "to visit" },
    { finnish: "Saada", english: "to get" },
    { finnish: "Voida", english: "to be able to" }
  ],
  3: [
    { finnish: "Tulla", english: "to come" },
    { finnish: "Mennä", english: "to go" },
    { finnish: "Purra", english: "to bite" },
    { finnish: "Nousta", english: "to rise" },
    { finnish: "Opiskella", english: "to study" },
    { finnish: "Asennella", english: "to install" }
  ],
  4: [
    { finnish: "Tavata", english: "to meet" },
    { finnish: "Tarjota", english: "to offer" },
    { finnish: "Haluta", english: "to want" },
    { finnish: "Pelätä", english: "to fear" },
    { finnish: "Arvata", english: "to guess" }
  ],
  5: [
    { finnish: "Tarvita", english: "to need" },
    { finnish: "Mainita", english: "to mention" },
    { finnish: "Hävittää", english: "to destroy" },
    { finnish: "Tunnistaa", english: "to recognize" },
    { finnish: "Valita", english: "to choose" }
  ],
  6: [
    { finnish: "Paeta", english: "to flee" },
    { finnish: "Kiinnetä", english: "to be attached" },
    { finnish: "Vanheta", english: "to grow old" },
    { finnish: "Lämmetä", english: "to warm up" },
    { finnish: "Kylmetä", english: "to get cold" }
  ]
};

const PerfectTense = () => {
  const [activeVerbType, setActiveVerbType] = useState(1);
  const [activeExample, setActiveExample] = useState(0);

  // Find the current verb type with proper type safety
  const currentType = verbTypes.find(type => type.type === activeVerbType);
  
  // If currentType is undefined, show an error message
  if (!currentType) {
    return (
      <Container>
        <h2>Finnish Verb Types - Perfect Tense</h2>
        <div style={{ padding: '20px', backgroundColor: '#ffebee', borderRadius: '8px', textAlign: 'center' }}>
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
      <h2>Finnish Verb Types - Perfect Tense</h2>
      
      <div style={{ padding: '15px', backgroundColor: '#f0f9ff', borderRadius: '8px', marginBottom: '20px' }}>
        <p>
          The perfect tense in Finnish is formed with the auxiliary verb &ldquo;olla&ldquo; (to be) in the present tense 
          combined with the past participle (nut/nyt/neet) of the main verb. It describes completed actions 
          that have relevance to the present.
        </p>
      </div>

      <h3>Choose a Verb Type</h3>
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '10px', 
        margin: '15px 0',
        justifyContent: 'center'
      }}>
        {verbTypes.map(type => (
          <button
            key={type.type}
            onClick={() => {
              setActiveVerbType(type.type);
              setActiveExample(0);
            }}
            style={{
              padding: '10px 15px',
              backgroundColor: activeVerbType === type.type ? '#0066cc' : '#f0f0f0',
              color: activeVerbType === type.type ? 'white' : '#333',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              minWidth: '120px'
            }}
          >
            Type {type.type}
          </button>
        ))}
      </div>

      <h3>{currentType.title}</h3>
      <p>{currentType.description}</p>
      
      <div style={{ 
        padding: '15px', 
        backgroundColor: '#f0f9ff', 
        borderRadius: '8px',
        margin: '15px 0'
      }}>
        <h3>Endings</h3>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '10px',
          margin: '10px 0'
        }}>
          {currentType.endings.map((ending, index) => (
            <span key={index} style={{
              padding: '5px 10px',
              backgroundColor: '#ffd8a8',
              borderRadius: '15px',
              fontWeight: 'bold'
            }}>
              {ending}
            </span>
          ))}
        </div>
        
        <h3>Positive Form Pattern</h3>
        <p>{currentType.pattern}</p>
        
        <h3>Negative Form Pattern</h3>
        <p>{currentType.negativePattern}</p>
        
        <h3>Examples</h3>
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '10px',
          margin: '10px 0'
        }}>
          {currentType.examples.map((example, index) => (
            <span key={index} style={{
              padding: '5px 10px',
              backgroundColor: '#ffe0b3',
              borderRadius: '15px'
            }}>
              {example}
            </span>
          ))}
        </div>
      </div>

      <h3>Conjugation Examples</h3>
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '10px', 
        margin: '15px 0',
        justifyContent: 'center'
      }}>
        {exampleVerbs.map((verb, index) => (
          <button
            key={verb}
            onClick={() => setActiveExample(index)}
            style={{
              padding: '8px 12px',
              backgroundColor: activeExample === index ? '#0066cc' : '#e6f7ff',
              color: activeExample === index ? 'white' : '#006699',
              border: 'none',
              borderRadius: '15px',
              cursor: 'pointer'
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
              <StyledTableCell>
                {conjugation.split(' ')[0]}
              </StyledTableCell>
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
                  <MobileTableCell>{conjugation.split(' ')[0]}</MobileTableCell>
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
                  <MobileTableCell>{conjugation.split(' ')[0]}</MobileTableCell>
                  <MobileTableCell>{conjugation}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      <h3>Common Type {activeVerbType} Verbs</h3>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
        gap: '10px', 
        margin: '20px 0'
      }}>
        {commonVerbsByType[activeVerbType].map((verb, index) => (
          <div key={index} style={{
            padding: '10px',
            backgroundColor: index % 2 === 0 ? '#f0f9ff' : '#f0f9ff',
            borderRadius: '5px',
            textAlign: 'center'
          }}>
            <div style={{ fontWeight: 'bold', color: '#0066cc' }}>{verb.finnish}</div>
            <div>{verb.english}</div>
          </div>
        ))}
      </div>

      <div style={{ 
        marginTop: '30px', 
        padding: '15px', 
        backgroundColor: '#e6ffe6', 
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <h3>Remember This!</h3>
        <p>
          The perfect tense is formed with the present tense of &ldquo;olla&ldquo; (to be) + the past participle.
          The participle agrees with the subject in number (singular/plural).
        </p>
        <p style={{ marginTop: '10px', fontWeight: 'bold' }}>
          For the negative perfect tense, use the negative form of &ldquo;olla&ldquo; (en ole, et ole, ei ole, etc.) 
          + the appropriate participle form (nut/nyt for singular, neet for plural).
        </p>
      </div>
    </Container>
  );
};

export default PerfectTense;