"use client";

import React from "react";
import {
  Container,
  Title,
  ExplanationContent,
  CategorySection,
  CategoryHeader,
  CategoryDescription,
  InflectionTable,
  TableHeader,
  TableRow,
  PostpositionCell,
  InflectionCell,
  ExampleCell,
  NoteText,
  MobileTableContainer,
  MobileTableSection,
  MobileTableHeader,
  MobileTableRow,
  MobilePostpositionCell,
  MobileInflectionCell,
  MobileExampleCell,
} from "./PostpositionInflections.styles";

const PostpositionInflections = () => {
  const llaLläData = [
    {
      postposition: "Alapuolella",
      mihin: "alapuolelle",
      missä: "alapuolella",
      mistä: "alapuolelta",
      example: "Pöydän alapuolella",
    },
    {
      postposition: "Alla",
      mihin: "alle",
      missä: "alla",
      mistä: "alta",
      example: "Puun alla",
    },
    {
      postposition: "Keskellä",
      mihin: "keskelle",
      missä: "keskellä",
      mistä: "keskeltä",
      example: "Huoneen keskellä",
    },
    {
      postposition: "Lähellä",
      mihin: "lähelle",
      missä: "lähellä",
      mistä: "läheltä",
      example: "Kaupungin lähellä",
    },
    {
      postposition: "Oikealla",
      mihin: "oikealle",
      missä: "oikealla",
      mistä: "oikealta",
      example: "Kadun oikealla puolella",
    },
    {
      postposition: "Päällä",
      mihin: "päälle",
      missä: "päällä",
      mistä: "päältä",
      example: "Pöydän päällä",
    },
    {
      postposition: "Sisällä",
      mihin: "sisälle",
      missä: "sisällä",
      mistä: "sisältä",
      example: "Talon sisällä",
    },
    {
      postposition: "Sisäpuolella",
      mihin: "sisäpuolelle",
      missä: "sisäpuolella",
      mistä: "sisäpuolelta",
      example: "Laatikon sisäpuolella",
    },
    {
      postposition: "Ulkopuolella",
      mihin: "ulkopuolelle",
      missä: "ulkopuolella",
      mistä: "ulkopuolelta",
      example: "Rakennuksen ulkopuolella",
    },
    {
      postposition: "Vasemmalla",
      mihin: "vasemmalle",
      missä: "vasemmalla",
      mistä: "vasemmalta",
      example: "Tien vasemmalla puolella",
    },
    {
      postposition: "Vierellä",
      mihin: "vierelle",
      missä: "vierellä",
      mistä: "viereltä",
      example: "Ystävän vierellä",
    },
    {
      postposition: "Yläpuolella",
      mihin: "yläpuolelle",
      missä: "yläpuolella",
      mistä: "yläpuolelta",
      example: "Pilvien yläpuolella",
    },
    {
      postposition: "Yllä",
      mihin: "ylle",
      missä: "yllä",
      mistä: "yltä",
      example: "Katolla yllä",
    },
    {
      postposition: "Ympärillä",
      mihin: "ympärille",
      missä: "ympärillä",
      mistä: "ympäriltä",
      example: "Puiston ympärillä",
    },
  ];

  const ssaSsaData = [
    {
      postposition: "Alussa",
      mihin: "alkuun",
      missä: "alussa",
      mistä: "alusta",
      example: "Vuoden alussa",
    },
    {
      postposition: "Ääressä",
      mihin: "ääreen",
      missä: "ääressä",
      mistä: "äärestä",
      example: "Pöydän ääressä",
    },
    {
      postposition: "Edessä",
      mihin: "eteen",
      missä: "edessä",
      mistä: "edestä",
      example: "Talojen edessä",
    },
    {
      postposition: "Jäljessä",
      mihin: "jälkeen",
      missä: "jäljessä",
      mistä: "jäljestä",
      example: "Muiden jäljessä",
    },
    {
      postposition: "Lopussa",
      mihin: "loppuun",
      missä: "lopussa",
      mistä: "lopusta",
      example: "Kirjan lopussa",
    },
    {
      postposition: "Perässä",
      mihin: "perään",
      missä: "perässä",
      mistä: "perästä",
      example: "Joukon perässä",
    },
    {
      postposition: "Välissä",
      mihin: "väliin",
      missä: "välissä",
      mistä: "välistä",
      example: "Talojen välissä",
    },
    {
      postposition: "Vieressä",
      mihin: "viereen",
      missä: "vieressä",
      mistä: "vierestä",
      example: "Tuolin vieressä",
    },
  ];

  const naData = [
    {
      postposition: "Takana",
      mihin: "taakse",
      missä: "takana",
      mistä: "takaa",
      example: "Puun takana",
    },
    {
      postposition: "Luona",
      mihin: "luokse",
      missä: "luona",
      mistä: "luota",
      example: "Ystävän luona",
    },
    {
      postposition: "Kohdalla",
      mihin: "kohdalle",
      missä: "kohdalla",
      mistä: "kohdalta",
      example: "Aseman kohdalla",
    },
    {
      postposition: "Vierellä",
      mihin: "vierelle",
      missä: "vierellä",
      mistä: "viereltä",
      example: "Polun vierellä",
    },
  ];

  return (
    <Container>
      <Title>Postposition Inflections</Title>
      <ExplanationContent>
        Concrete and time related postpositions can often have inflections while
        other postpositions usually do not inflect. Postpositions that can
        inflect follow a pattern depending on their ending letters, such as
        -lla/-llä, -ssa/-ssä, or the irregular -na. The conjugated endings may
        feel reminiscent to grammatical locative cases.
      </ExplanationContent>

      {/* Postposition inflections ending in -lla/-llä */}
      <CategorySection>
        <CategoryHeader>
          Postposition Inflections Ending in -lla/-llä
        </CategoryHeader>
        <CategoryDescription>
          These postpositions follow the -lla/-llä pattern for inflection,
          changing to indicate direction (mihin), location (missä), or origin
          (mistä).
        </CategoryDescription>

        {/* Desktop Table */}
        <InflectionTable>
          <thead>
            <TableRow>
              <TableHeader>Postposition</TableHeader>
              <TableHeader>Mihin (to where)</TableHeader>
              <TableHeader>Missä (where)</TableHeader>
              <TableHeader>Mistä (from where)</TableHeader>
              <TableHeader>Example</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {llaLläData.map((item, index) => (
              <TableRow key={index}>
                <PostpositionCell>{item.postposition}</PostpositionCell>
                <InflectionCell>{item.mihin}</InflectionCell>
                <InflectionCell>{item.missä}</InflectionCell>
                <InflectionCell>{item.mistä}</InflectionCell>
                <ExampleCell>{item.example}</ExampleCell>
              </TableRow>
            ))}
          </tbody>
        </InflectionTable>

        {/* Mobile Table */}
        <MobileTableContainer>
          {llaLläData.map((item, index) => (
            <MobileTableSection key={index}>
              <MobileTableHeader>{item.postposition}</MobileTableHeader>
              <MobileTableRow>
                <MobilePostpositionCell>Mihin:</MobilePostpositionCell>
                <MobileInflectionCell>{item.mihin}</MobileInflectionCell>
              </MobileTableRow>
              <MobileTableRow>
                <MobilePostpositionCell>Missä:</MobilePostpositionCell>
                <MobileInflectionCell>{item.missä}</MobileInflectionCell>
              </MobileTableRow>
              <MobileTableRow>
                <MobilePostpositionCell>Mistä:</MobilePostpositionCell>
                <MobileInflectionCell>{item.mistä}</MobileInflectionCell>
              </MobileTableRow>
              <MobileTableRow>
                <MobilePostpositionCell>Example:</MobilePostpositionCell>
                <MobileExampleCell>{item.example}</MobileExampleCell>
              </MobileTableRow>
            </MobileTableSection>
          ))}
        </MobileTableContainer>
      </CategorySection>

      {/* Postposition inflections ending in -ssa/-ssä */}
      <CategorySection>
        <CategoryHeader>
          Postposition Inflections Ending in -ssa/-ssä
        </CategoryHeader>
        <CategoryDescription>
          These postpositions follow the -ssa/-ssä pattern for inflection, used
          for location and time expressions.
        </CategoryDescription>

        {/* Desktop Table */}
        <InflectionTable>
          <thead>
            <TableRow>
              <TableHeader>Postposition</TableHeader>
              <TableHeader>Mihin (to where)</TableHeader>
              <TableHeader>Missä (where)</TableHeader>
              <TableHeader>Mistä (from where)</TableHeader>
              <TableHeader>Example</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {ssaSsaData.map((item, index) => (
              <TableRow key={index}>
                <PostpositionCell>{item.postposition}</PostpositionCell>
                <InflectionCell>{item.mihin}</InflectionCell>
                <InflectionCell>{item.missä}</InflectionCell>
                <InflectionCell>{item.mistä}</InflectionCell>
                <ExampleCell>{item.example}</ExampleCell>
              </TableRow>
            ))}
          </tbody>
        </InflectionTable>

        {/* Mobile Table */}
        <MobileTableContainer>
          {ssaSsaData.map((item, index) => (
            <MobileTableSection key={index}>
              <MobileTableHeader>{item.postposition}</MobileTableHeader>
              <MobileTableRow>
                <MobilePostpositionCell>Mihin:</MobilePostpositionCell>
                <MobileInflectionCell>{item.mihin}</MobileInflectionCell>
              </MobileTableRow>
              <MobileTableRow>
                <MobilePostpositionCell>Missä:</MobilePostpositionCell>
                <MobileInflectionCell>{item.missä}</MobileInflectionCell>
              </MobileTableRow>
              <MobileTableRow>
                <MobilePostpositionCell>Mistä:</MobilePostpositionCell>
                <MobileInflectionCell>{item.mistä}</MobileInflectionCell>
              </MobileTableRow>
              <MobileTableRow>
                <MobilePostpositionCell>Example:</MobilePostpositionCell>
                <MobileExampleCell>{item.example}</MobileExampleCell>
              </MobileTableRow>
            </MobileTableSection>
          ))}
        </MobileTableContainer>
      </CategorySection>

      {/* Postposition inflections ending in -na */}
      <CategorySection>
        <CategoryHeader>Postposition Inflections Ending in -na</CategoryHeader>
        <CategoryDescription>
          Postpositions that end in -na are irregular. There are only a few of
          them, and they follow unique inflection patterns.
        </CategoryDescription>

        {/* Desktop Table */}
        <InflectionTable>
          <thead>
            <TableRow>
              <TableHeader>Postposition</TableHeader>
              <TableHeader>Mihin (to where)</TableHeader>
              <TableHeader>Missä (where)</TableHeader>
              <TableHeader>Mistä (from where)</TableHeader>
              <TableHeader>Example</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {naData.map((item, index) => (
              <TableRow key={index}>
                <PostpositionCell>{item.postposition}</PostpositionCell>
                <InflectionCell>{item.mihin}</InflectionCell>
                <InflectionCell>{item.missä}</InflectionCell>
                <InflectionCell>{item.mistä}</InflectionCell>
                <ExampleCell>{item.example}</ExampleCell>
              </TableRow>
            ))}
          </tbody>
        </InflectionTable>

        {/* Mobile Table */}
        <MobileTableContainer>
          {naData.map((item, index) => (
            <MobileTableSection key={index}>
              <MobileTableHeader>{item.postposition}</MobileTableHeader>
              <MobileTableRow>
                <MobilePostpositionCell>Mihin:</MobilePostpositionCell>
                <MobileInflectionCell>{item.mihin}</MobileInflectionCell>
              </MobileTableRow>
              <MobileTableRow>
                <MobilePostpositionCell>Missä:</MobilePostpositionCell>
                <MobileInflectionCell>{item.missä}</MobileInflectionCell>
              </MobileTableRow>
              <MobileTableRow>
                <MobilePostpositionCell>Mistä:</MobilePostpositionCell>
                <MobileInflectionCell>{item.mistä}</MobileInflectionCell>
              </MobileTableRow>
              <MobileTableRow>
                <MobilePostpositionCell>Example:</MobilePostpositionCell>
                <MobileExampleCell>{item.example}</MobileExampleCell>
              </MobileTableRow>
            </MobileTableSection>
          ))}
        </MobileTableContainer>
        <NoteText>
          These irregular -na ending postpositions have unique inflection
          patterns that don&apos;t follow the regular -lla/-llä or -ssa/-ssä
          rules.
        </NoteText>
      </CategorySection>

      {/* Usage Notes */}
      <CategorySection>
        <CategoryHeader>Usage Notes</CategoryHeader>
        <CategoryDescription>
          Understanding how to use these inflected forms correctly in sentences.
        </CategoryDescription>

        <NoteText>
          <strong>Mihin (Illative):</strong> Used when moving toward a location.
          Example: &quot;Menin talon taakse.&quot; (I went behind the house.)
        </NoteText>
        <NoteText>
          <strong>Missä (Inessive):</strong> Used when located in/at a place.
          Example: &quot;Olin talon takana.&quot; (I was behind the house.)
        </NoteText>
        <NoteText>
          <strong>Mistä (Elative):</strong> Used when moving away from a
          location. Example: &quot;Tulin talon takaa.&quot; (I came from behind
          the house.)
        </NoteText>
        <NoteText>
          The inflection patterns help express precise spatial and temporal
          relationships in Finnish.
        </NoteText>
      </CategorySection>
    </Container>
  );
};

export default PostpositionInflections;
