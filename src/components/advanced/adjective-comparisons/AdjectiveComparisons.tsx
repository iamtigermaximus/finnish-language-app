"use client";
import React from "react";
import {
  CaseTitle,
  Container,
  MobileCaseSection,
  MobileTable,
  MobileTableCell,
  MobileTableContainer,
  MobileTableHeader,
  SectionTitle,
  StyledTable,
  StyledTableCell,
  StyledTableHeader,
  Title,
} from "./AdjectiveComparisons.styles";

const shortAdjectives = [
  {
    adjective: "Hauska",
    english: "Fun",
    stem: "Hausk-",
    comparative: "Hauskempi",
    superlative: "Hauskin",
  },
  {
    adjective: "Harmaa",
    english: "Gray",
    stem: "Harma-",
    comparative: "Harmaampi",
    superlative: "Harmain",
  },
  {
    adjective: "Nuuka",
    english: "Stingy",
    stem: "Nuu-",
    comparative: "Nuuempi",
    superlative: "Nuuin",
  },
  {
    adjective: "Paha",
    english: "Bad",
    stem: "Pah-",
    comparative: "Pahempi",
    superlative: "Pahin",
  },
  {
    adjective: "Vanha",
    english: "Old",
    stem: "Vanh-",
    comparative: "Vanhempi",
    superlative: "Vanhin",
  },
  {
    adjective: "Väärä",
    english: "Wrong",
    stem: "Vääre-",
    comparative: "Väärempi",
    superlative: "Väärein",
  },
  {
    adjective: "Pieni",
    english: "Small",
    stem: "Piene-",
    comparative: "Pienempi",
    superlative: "Pienin",
  },
  {
    adjective: "Suuri",
    english: "Big",
    stem: "Suure-",
    comparative: "Suurempi",
    superlative: "Suurin",
  },
  {
    adjective: "Uusi",
    english: "New",
    stem: "Uude-",
    comparative: "Uudempi",
    superlative: "Uusin",
  },
  {
    adjective: "Kaunis",
    english: "Beautiful",
    stem: "Kaunii-",
    comparative: "Kauniimpi",
    superlative: "Kauhein",
  },
];

const longAdjectives = [
  {
    adjective: "Mukava",
    english: "Nice",
    stem: "Muka-",
    comparative: "Mukavampi",
    superlative: "Mukavin",
  },
  {
    adjective: "Nopea",
    english: "Fast",
    stem: "Nope-",
    comparative: "Nopeampi",
    superlative: "Nopein",
  },
  {
    adjective: "Pyöreä",
    english: "Round",
    stem: "Pyöre-",
    comparative: "Pyöreämpi",
    superlative: "Pyörein",
  },
  {
    adjective: "Tukeva",
    english: "Sturdy",
    stem: "Tuke-",
    comparative: "Tukevampi",
    superlative: "Tukevin",
  },
  {
    adjective: "Vaalea",
    english: "Light",
    stem: "Vaale-",
    comparative: "Vaaleampi",
    superlative: "Vaalein",
  },
  {
    adjective: "Vihreä",
    english: "Green",
    stem: "Vihre-",
    comparative: "Vihreämpi",
    superlative: "Vihrein",
  },
  {
    adjective: "Korkea",
    english: "High",
    stem: "Korke-",
    comparative: "Korkeampi",
    superlative: "Korkein",
  },
  {
    adjective: "Matala",
    english: "Low",
    stem: "Mata-",
    comparative: "Matalampi",
    superlative: "Matalin",
  },
  {
    adjective: "Vaikea",
    english: "Difficult",
    stem: "Vaike-",
    comparative: "Vaikeampi",
    superlative: "Vaikein",
  },
  {
    adjective: "Helppo",
    english: "Easy",
    stem: "Helpo-",
    comparative: "Helpompi",
    superlative: "Helpoin",
  },
];

const eEndingAdjectives = [
  {
    adjective: "Ahne",
    english: "Greedy",
    stem: "Ahne",
    comparative: "Ahnempi",
    superlative: "Ahnein",
  },
  {
    adjective: "Terve",
    english: "Healthy",
    stem: "Terve",
    comparative: "Terveempi",
    superlative: "Tervein",
  },
  {
    adjective: "Tuore",
    english: "Fresh",
    stem: "Tuore",
    comparative: "Tuoreempi",
    superlative: "Tuorein",
  },
  {
    adjective: "Lämmin",
    english: "Warm",
    stem: "Lämpim-",
    comparative: "Lämpimämpi",
    superlative: "Lämpimin",
  },
  {
    adjective: "Vapaa",
    english: "Free",
    stem: "Vapa-",
    comparative: "Vapaampi",
    superlative: "Vapain",
  },
  {
    adjective: "Pimeä",
    english: "Dark",
    stem: "Pime-",
    comparative: "Pimeämpi",
    superlative: "Pimein",
  },
];

const nEndingAdjectives = [
  {
    adjective: "Avuton",
    english: "Helpless",
    stem: "Avutto-",
    comparative: "Avuttomampi",
    superlative: "Avuttomin",
  },
  {
    adjective: "Avoin",
    english: "Open",
    stem: "Avoi-",
    comparative: "Avoinempi",
    superlative: "Avoimin",
  },
  {
    adjective: "Hapan",
    english: "Sour",
    stem: "Happa-",
    comparative: "Happamampi",
    superlative: "Happamin",
  },
  {
    adjective: "Lämmin",
    english: "Warm",
    stem: "Lämpim-",
    comparative: "Lämpimämpi",
    superlative: "Lämpimin",
  },
  {
    adjective: "Onneton",
    english: "Unhappy",
    stem: "Onnetto-",
    comparative: "Onnettomampi",
    superlative: "Onnettomin",
  },
  {
    adjective: "Rikas",
    english: "Rich",
    stem: "Rikka-",
    comparative: "Rikkaampi",
    superlative: "Rikkain",
  },
];

const nenEndingAdjectives = [
  {
    adjective: "Iloinen",
    english: "Happy",
    stem: "Ilois-",
    comparative: "Iloisempi",
    superlative: "Iloisin",
  },
  {
    adjective: "Suomalainen",
    english: "Finnish",
    stem: "Suomalais-",
    comparative: "Suomalaisempi",
    superlative: "Suomalaisin",
  },
  {
    adjective: "Surullinen",
    english: "Sad",
    stem: "Surulli-",
    comparative: "Surullisempi",
    superlative: "Surullisin",
  },
  {
    adjective: "Tavallinen",
    english: "Ordinary",
    stem: "Tavallis-",
    comparative: "Tavallisempi",
    superlative: "Tavallisin",
  },
  {
    adjective: "Tuulinen",
    english: "Windy",
    stem: "Tuuli-",
    comparative: "Tuulisempi",
    superlative: "Tuulisin",
  },
  {
    adjective: "Väsynyt",
    english: "Tired",
    stem: "Väsyne-",
    comparative: "Väsyneempi",
    superlative: "Väsynein",
  },
  {
    adjective: "Kylläinen",
    english: "Full",
    stem: "Kylläi-",
    comparative: "Kylläisempi",
    superlative: "Kylläisin",
  },
  {
    adjective: "Nälkäinen",
    english: "Hungry",
    stem: "Nälkäi-",
    comparative: "Nälkäisempi",
    superlative: "Nälkäisin",
  },
];

const oyEndingAdjectives = [
  {
    adjective: "Huono",
    english: "Poor",
    stem: "Huono-",
    comparative: "Huonompi",
    superlative: "Huonoin",
  },
  {
    adjective: "Hölmö",
    english: "Silly",
    stem: "Hölmö-",
    comparative: "Hölmömpi",
    superlative: "Hölmöin",
  },
  {
    adjective: "Kesy",
    english: "Tame",
    stem: "Kesy-",
    comparative: "Kesympi",
    superlative: "Kesyin",
  },
  {
    adjective: "Pöhkö",
    english: "Foolish",
    stem: "Pöhkö-",
    comparative: "Pöhköempi",
    superlative: "Pöhköin",
  },
  {
    adjective: "Vino",
    english: "Crooked",
    stem: "Vino-",
    comparative: "Vinompi",
    superlative: "Vinoin",
  },
  {
    adjective: "Ujo",
    english: "Shy",
    stem: "Ujo-",
    comparative: "Ujompi",
    superlative: "Ujoin",
  },
  {
    adjective: "Tummа",
    english: "Dark",
    stem: "Tumma-",
    comparative: "Tummempi",
    superlative: "Tummin",
  },
  {
    adjective: "Vaalea",
    english: "Light",
    stem: "Vaalea-",
    comparative: "Vaaleampi",
    superlative: "Vaalein",
  },
];

const sEndingAdjectives = [
  {
    adjective: "Kallis",
    english: "Expensive",
    stem: "Kallii-",
    comparative: "Kalliimpi",
    superlative: "Kallein",
  },
  {
    adjective: "Puhdas",
    english: "Clean",
    stem: "Puhta-",
    comparative: "Puhtaampi",
    superlative: "Puhtain",
  },
  {
    adjective: "Rikas",
    english: "Rich",
    stem: "Rikka-",
    comparative: "Rikkaampi",
    superlative: "Rikkain",
  },
  {
    adjective: "Viisas",
    english: "Wise",
    stem: "Viisa-",
    comparative: "Viisaampi",
    superlative: "Viisain",
  },
  {
    adjective: "Värikäs",
    english: "Colorful",
    stem: "Värik-",
    comparative: "Värikkaampi",
    superlative: "Värikäin",
  },
  {
    adjective: "Laiskas",
    english: "Lazy",
    stem: "Laiska-",
    comparative: "Laiskamppi",
    superlative: "Laiskain",
  },
  {
    adjective: "Sairas",
    english: "Sick",
    stem: "Saira-",
    comparative: "Sairaampi",
    superlative: "Sairain",
  },
];

const utytEndingAdjectives = [
  {
    adjective: "Lyhyt",
    english: "Short",
    stem: "Lyhy-",
    comparative: "Lyhyempi",
    superlative: "Lyhyin",
  },
  {
    adjective: "Ohut",
    english: "Thin",
    stem: "Ohu-",
    comparative: "Ohuempi",
    superlative: "Ohuin",
  },
  {
    adjective: "Paksu",
    english: "Thick",
    stem: "Paksu-",
    comparative: "Paksumpi",
    superlative: "Paksuin",
  },
  {
    adjective: "Pitkä",
    english: "Long",
    stem: "Pitkä-",
    comparative: "Pidempi",
    superlative: "Pisin",
  },
  {
    adjective: "Leveä",
    english: "Wide",
    stem: "Leveä-",
    comparative: "Leveämpi",
    superlative: "Levein",
  },
  {
    adjective: "Kapea",
    english: "Narrow",
    stem: "Kapea-",
    comparative: "Kapeampi",
    superlative: "Kapein",
  },
];

const weakStemAdjectives = [
  {
    adjective: "Halpa",
    english: "Cheap",
    stem: "Halve-",
    comparative: "Halvempi",
    superlative: "Halvin",
  },
  {
    adjective: "Helppo",
    english: "Easy",
    stem: "Helpo-",
    comparative: "Helpompi",
    superlative: "Helpoin",
  },
  {
    adjective: "Märkä",
    english: "Wet",
    stem: "Märe-",
    comparative: "Märempi",
    superlative: "Märin",
  },
  {
    adjective: "Lämmin",
    english: "Warm",
    stem: "Lämpim-",
    comparative: "Lämpimämpi",
    superlative: "Lämpimin",
  },
  {
    adjective: "Kylmä",
    english: "Cold",
    stem: "Kylmä-",
    comparative: "Kylmempi",
    superlative: "Kylmin",
  },
  {
    adjective: "Kuuma",
    english: "Hot",
    stem: "Kuuma-",
    comparative: "Kuumempi",
    superlative: "Kuumin",
  },
];

const newFinnishAdjectives = [
  {
    adjective: "Kiltti",
    english: "Kind",
    stem: "Kilti-",
    comparative: "Kiltimpi",
    superlative: "Kiltein",
  },
  {
    adjective: "Siisti",
    english: "Neat",
    stem: "Siisti-",
    comparative: "Siistimpi",
    superlative: "Siistein",
  },
  {
    adjective: "Fiksu",
    english: "Smart",
    stem: "Fiksu-",
    comparative: "Fiksumpi",
    superlative: "Fiksuin",
  },
  {
    adjective: "Hauska",
    english: "Fun",
    stem: "Hauska-",
    comparative: "Hauskempi",
    superlative: "Hauskin",
  },
  {
    adjective: "Nopea",
    english: "Fast",
    stem: "Nopea-",
    comparative: "Nopeampi",
    superlative: "Nopein",
  },
];

const oldFinnishAdjectives = [
  {
    adjective: "Nuori",
    english: "Young",
    stem: "Nuore",
    comparative: "Nuorempi",
    superlative: "Nuorin",
  },
  {
    adjective: "Pieni",
    english: "Small",
    stem: "Piene",
    comparative: "Pienempi",
    superlative: "Pienin",
  },
  {
    adjective: "Suuri",
    english: "Big",
    stem: "Suure",
    comparative: "Suurempi",
    superlative: "Suurin",
  },
  {
    adjective: "Tyhmä",
    english: "Stupid",
    stem: "Tyhme",
    comparative: "Tyhmempi",
    superlative: "Tyhmin",
  },
  {
    adjective: "Uusi",
    english: "New",
    stem: "Uude",
    comparative: "Uudempi",
    superlative: "Uusin",
  },
  {
    adjective: "Vanha",
    english: "Old",
    stem: "Vanha",
    comparative: "Vanhempi",
    superlative: "Vanhin",
  },
];

const irregularAdjectives = [
  {
    adjective: "Hyvä",
    english: "Good",
    stem: "Pare-",
    comparative: "Parempi",
    superlative: "Paras",
  },
  {
    adjective: "Paha",
    english: "Bad",
    stem: "Pahe-",
    comparative: "Pahempi",
    superlative: "Pahin",
  },
  {
    adjective: "Paljon",
    english: "Much",
    stem: "Enem-",
    comparative: "Enemmän",
    superlative: "Eniten",
  },
  {
    adjective: "Vähän",
    english: "Little",
    stem: "Vähe-",
    comparative: "Vähemmän",
    superlative: "Vähiten",
  },
  {
    adjective: "Moni",
    english: "Many",
    stem: "Use-",
    comparative: "Useampi",
    superlative: "Usein",
  },
];

const AdjectiveComparisons = () => {
  return (
    <Container>
      <Title>Finnish Adjective Comparisons</Title>

      <div>
        <p style={{ padding: "10px 0" }}>
          Finnish adjectives change form to show comparison levels. The
          comparative form (like &quot;bigger&quot;) typically ends with{" "}
          <strong>-mpi</strong>, while the superlative (like
          &quot;biggest&quot;) ends with <strong>-in</strong>.
        </p>

        <p style={{ padding: "10px 0" }}>
          The formation depends on the adjective&apos;s syllable count, ending
          vowel, and whether it follows old or modern Finnish patterns. Most
          changes involve modifying the stem before adding the comparison
          endings.
        </p>
      </div>

      {/* Short Adjectives (-a/-ä ending, 2 syllables) */}
      <SectionTitle>Short Adjectives (2 syllables, ending -a/-ä)</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Stem</StyledTableHeader>
            <StyledTableHeader>Comparative</StyledTableHeader>
            <StyledTableHeader>Superlative</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {shortAdjectives.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.adjective}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.stem}</StyledTableCell>
              <StyledTableCell>{row.comparative}</StyledTableCell>
              <StyledTableCell>{row.superlative}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Short Adjectives (2 syllables, ending -a/-ä)</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Stem</MobileTableHeader>
                <MobileTableHeader>Comparative</MobileTableHeader>
                <MobileTableHeader>Superlative</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {shortAdjectives.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.adjective}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.stem}</MobileTableCell>
                  <MobileTableCell>{row.comparative}</MobileTableCell>
                  <MobileTableCell>{row.superlative}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Long Adjectives (-a/-ä ending, 3+ syllables) */}
      <SectionTitle>Long Adjectives (3+ syllables, ending -a/-ä)</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Stem</StyledTableHeader>
            <StyledTableHeader>Comparative</StyledTableHeader>
            <StyledTableHeader>Superlative</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {longAdjectives.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.adjective}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.stem}</StyledTableCell>
              <StyledTableCell>{row.comparative}</StyledTableCell>
              <StyledTableCell>{row.superlative}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Long Adjectives (3+ syllables, ending -a/-ä)</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Stem</MobileTableHeader>
                <MobileTableHeader>Comparative</MobileTableHeader>
                <MobileTableHeader>Superlative</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {longAdjectives.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.adjective}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.stem}</MobileTableCell>
                  <MobileTableCell>{row.comparative}</MobileTableCell>
                  <MobileTableCell>{row.superlative}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* -e Ending Adjectives */}
      <SectionTitle>Adjectives Ending with -e</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Stem</StyledTableHeader>
            <StyledTableHeader>Comparative</StyledTableHeader>
            <StyledTableHeader>Superlative</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {eEndingAdjectives.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.adjective}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.stem}</StyledTableCell>
              <StyledTableCell>{row.comparative}</StyledTableCell>
              <StyledTableCell>{row.superlative}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Adjectives Ending with -e</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Stem</MobileTableHeader>
                <MobileTableHeader>Comparative</MobileTableHeader>
                <MobileTableHeader>Superlative</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {eEndingAdjectives.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.adjective}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.stem}</MobileTableCell>
                  <MobileTableCell>{row.comparative}</MobileTableCell>
                  <MobileTableCell>{row.superlative}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* -n Ending Adjectives */}
      <SectionTitle>Adjectives Ending with -n</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Stem</StyledTableHeader>
            <StyledTableHeader>Comparative</StyledTableHeader>
            <StyledTableHeader>Superlative</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {nEndingAdjectives.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.adjective}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.stem}</StyledTableCell>
              <StyledTableCell>{row.comparative}</StyledTableCell>
              <StyledTableCell>{row.superlative}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Adjectives Ending with -n</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Stem</MobileTableHeader>
                <MobileTableHeader>Comparative</MobileTableHeader>
                <MobileTableHeader>Superlative</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {nEndingAdjectives.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.adjective}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.stem}</MobileTableCell>
                  <MobileTableCell>{row.comparative}</MobileTableCell>
                  <MobileTableCell>{row.superlative}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* -nen Ending Adjectives */}
      <SectionTitle>Adjectives Ending with -nen</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Stem</StyledTableHeader>
            <StyledTableHeader>Comparative</StyledTableHeader>
            <StyledTableHeader>Superlative</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {nenEndingAdjectives.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.adjective}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.stem}</StyledTableCell>
              <StyledTableCell>{row.comparative}</StyledTableCell>
              <StyledTableCell>{row.superlative}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Adjectives Ending with -nen</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Stem</MobileTableHeader>
                <MobileTableHeader>Comparative</MobileTableHeader>
                <MobileTableHeader>Superlative</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {nenEndingAdjectives.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.adjective}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.stem}</MobileTableCell>
                  <MobileTableCell>{row.comparative}</MobileTableCell>
                  <MobileTableCell>{row.superlative}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* -o/-ö or -u/-y Ending Adjectives */}
      <SectionTitle>Adjectives Ending with -o/-ö or -u/-y</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Stem</StyledTableHeader>
            <StyledTableHeader>Comparative</StyledTableHeader>
            <StyledTableHeader>Superlative</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {oyEndingAdjectives.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.adjective}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.stem}</StyledTableCell>
              <StyledTableCell>{row.comparative}</StyledTableCell>
              <StyledTableCell>{row.superlative}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Adjectives Ending with -o/-ö or -u/-y</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Stem</MobileTableHeader>
                <MobileTableHeader>Comparative</MobileTableHeader>
                <MobileTableHeader>Superlative</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {oyEndingAdjectives.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.adjective}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.stem}</MobileTableCell>
                  <MobileTableCell>{row.comparative}</MobileTableCell>
                  <MobileTableCell>{row.superlative}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* -s Ending Adjectives */}
      <SectionTitle>Adjectives Ending with -s</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Stem</StyledTableHeader>
            <StyledTableHeader>Comparative</StyledTableHeader>
            <StyledTableHeader>Superlative</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {sEndingAdjectives.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.adjective}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.stem}</StyledTableCell>
              <StyledTableCell>{row.comparative}</StyledTableCell>
              <StyledTableCell>{row.superlative}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Adjectives Ending with -s</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Stem</MobileTableHeader>
                <MobileTableHeader>Comparative</MobileTableHeader>
                <MobileTableHeader>Superlative</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {sEndingAdjectives.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.adjective}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.stem}</MobileTableCell>
                  <MobileTableCell>{row.comparative}</MobileTableCell>
                  <MobileTableCell>{row.superlative}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* -ut or -yt Ending Adjectives */}
      <SectionTitle>Adjectives Ending with -ut or -yt</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Stem</StyledTableHeader>
            <StyledTableHeader>Comparative</StyledTableHeader>
            <StyledTableHeader>Superlative</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {utytEndingAdjectives.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.adjective}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.stem}</StyledTableCell>
              <StyledTableCell>{row.comparative}</StyledTableCell>
              <StyledTableCell>{row.superlative}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Adjectives Ending with -ut or -yt</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Stem</MobileTableHeader>
                <MobileTableHeader>Comparative</MobileTableHeader>
                <MobileTableHeader>Superlative</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {utytEndingAdjectives.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.adjective}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.stem}</MobileTableCell>
                  <MobileTableCell>{row.comparative}</MobileTableCell>
                  <MobileTableCell>{row.superlative}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Weak Stem Adjectives */}
      <SectionTitle>Adjectives with Weak Stems</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Stem</StyledTableHeader>
            <StyledTableHeader>Comparative</StyledTableHeader>
            <StyledTableHeader>Superlative</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {weakStemAdjectives.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.adjective}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.stem}</StyledTableCell>
              <StyledTableCell>{row.comparative}</StyledTableCell>
              <StyledTableCell>{row.superlative}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Adjectives with Weak Stems</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Stem</MobileTableHeader>
                <MobileTableHeader>Comparative</MobileTableHeader>
                <MobileTableHeader>Superlative</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {weakStemAdjectives.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.adjective}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.stem}</MobileTableCell>
                  <MobileTableCell>{row.comparative}</MobileTableCell>
                  <MobileTableCell>{row.superlative}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* New Finnish Adjectives */}
      <SectionTitle>Modern Finnish Adjectives (ending -i)</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Stem</StyledTableHeader>
            <StyledTableHeader>Comparative</StyledTableHeader>
            <StyledTableHeader>Superlative</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {newFinnishAdjectives.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.adjective}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.stem}</StyledTableCell>
              <StyledTableCell>{row.comparative}</StyledTableCell>
              <StyledTableCell>{row.superlative}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Modern Finnish Adjectives (ending -i)</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Stem</MobileTableHeader>
                <MobileTableHeader>Comparative</MobileTableHeader>
                <MobileTableHeader>Superlative</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {newFinnishAdjectives.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.adjective}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.stem}</MobileTableCell>
                  <MobileTableCell>{row.comparative}</MobileTableCell>
                  <MobileTableCell>{row.superlative}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Old Finnish Adjectives */}
      <SectionTitle>Traditional Finnish Adjectives (ending -i)</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Stem</StyledTableHeader>
            <StyledTableHeader>Comparative</StyledTableHeader>
            <StyledTableHeader>Superlative</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {oldFinnishAdjectives.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.adjective}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.stem}</StyledTableCell>
              <StyledTableCell>{row.comparative}</StyledTableCell>
              <StyledTableCell>{row.superlative}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Traditional Finnish Adjectives (ending -i)</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Stem</MobileTableHeader>
                <MobileTableHeader>Comparative</MobileTableHeader>
                <MobileTableHeader>Superlative</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {oldFinnishAdjectives.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.adjective}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.stem}</MobileTableCell>
                  <MobileTableCell>{row.comparative}</MobileTableCell>
                  <MobileTableCell>{row.superlative}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>

      {/* Irregular Adjectives */}
      <SectionTitle>Irregular Adjectives</SectionTitle>
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Finnish</StyledTableHeader>
            <StyledTableHeader>English</StyledTableHeader>
            <StyledTableHeader>Stem</StyledTableHeader>
            <StyledTableHeader>Comparative</StyledTableHeader>
            <StyledTableHeader>Superlative</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {irregularAdjectives.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.adjective}</StyledTableCell>
              <StyledTableCell>{row.english}</StyledTableCell>
              <StyledTableCell>{row.stem}</StyledTableCell>
              <StyledTableCell>{row.comparative}</StyledTableCell>
              <StyledTableCell>{row.superlative}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      <MobileTableContainer>
        <MobileCaseSection>
          <CaseTitle>Irregular Adjectives</CaseTitle>
          <MobileTable>
            <thead>
              <tr>
                <MobileTableHeader>Finnish</MobileTableHeader>
                <MobileTableHeader>English</MobileTableHeader>
                <MobileTableHeader>Stem</MobileTableHeader>
                <MobileTableHeader>Comparative</MobileTableHeader>
                <MobileTableHeader>Superlative</MobileTableHeader>
              </tr>
            </thead>
            <tbody>
              {irregularAdjectives.map((row, index) => (
                <tr key={index}>
                  <MobileTableCell>{row.adjective}</MobileTableCell>
                  <MobileTableCell>{row.english}</MobileTableCell>
                  <MobileTableCell>{row.stem}</MobileTableCell>
                  <MobileTableCell>{row.comparative}</MobileTableCell>
                  <MobileTableCell>{row.superlative}</MobileTableCell>
                </tr>
              ))}
            </tbody>
          </MobileTable>
        </MobileCaseSection>
      </MobileTableContainer>
    </Container>
  );
};

export default AdjectiveComparisons;
