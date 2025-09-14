'use client';

import React from 'react';
import {
  Container,
  StyledTable,
  StyledTableCell,
  StyledTableHeader,
  MobileTableContainer,
  MobileCaseSection,
  MobileTable,
  // MobileTableHeader,
  MobileTableCell,
  CaseTitle,
  PronounSection,
  PronounTitle,
  PronounDescription,
} from './Puhekieli.styles';

const Puhekieli = () => {
  const pronounsData = [
    {
      pronoun: 'Minä (I)',
      description: '',
      cases: [
        { case: 'Nominative', written: 'Minä', spoken: 'Mä, mää, mie' },
        { case: 'Partitive', written: 'Minua', spoken: 'Mua' },
        { case: 'Genitive', written: 'Minun', spoken: 'Mun' },
        { case: 'Accusative', written: 'Minut', spoken: 'Mut' },
        { case: 'Illative', written: 'Minuun', spoken: 'Muhun' },
        { case: 'Innessive', written: 'Minussa', spoken: 'Mussa' },
        { case: 'Elative', written: 'Minusta', spoken: 'Musta' },
        { case: 'Allative', written: 'Minulle', spoken: 'Mulle' },
        { case: 'Adessive', written: 'Minulla', spoken: 'Mulla' },
        { case: 'Ablative', written: 'Minulta', spoken: 'Multa' },
      ],
    },
    {
      pronoun: 'Sinä (You)',
      description: '',
      cases: [
        { case: 'Nominative', written: 'Sinä', spoken: 'Sä, sää, sie' },
        { case: 'Partitive', written: 'Sinua', spoken: 'Sua' },
        { case: 'Genitive', written: 'Sinun', spoken: 'Sun' },
        { case: 'Accusative', written: 'Sinut', spoken: 'Sut' },
        { case: 'Illative', written: 'Sinuun', spoken: 'Suhun' },
        { case: 'Innessive', written: 'Sinussa', spoken: 'Sussa' },
        { case: 'Elative', written: 'Sinusta', spoken: 'Susta' },
        { case: 'Allative', written: 'Sinulle', spoken: 'Sulle' },
        { case: 'Adessive', written: 'Sinulla', spoken: 'Sulla' },
        { case: 'Ablative', written: 'Sinulta', spoken: 'Sulta' },
      ],
    },
    {
      pronoun: 'Hän (He/She)',
      description: '',
      cases: [
        { case: 'Nominative', written: 'Hän', spoken: 'Se' },
        { case: 'Partitive', written: 'Häntä', spoken: 'Sitä' },
        { case: 'Genitive', written: 'Hänen', spoken: 'Sen' },
        { case: 'Accusative', written: 'Hänet', spoken: 'Sen' },
        { case: 'Illative', written: 'Häneen', spoken: 'Siihen' },
        { case: 'Innessive', written: 'Hänessä', spoken: 'Siinä' },
        { case: 'Elative', written: 'Hänestä', spoken: 'Siitä' },
        { case: 'Allative', written: 'Hänelle', spoken: 'Sille' },
        { case: 'Adessive', written: 'Hänellä', spoken: 'Sillä' },
        { case: 'Ablative', written: 'Häneltä', spoken: 'Siltä' },
      ],
    },
    {
      pronoun: 'Me (We)',
      description: '',
      cases: [
        { case: 'Nominative', written: 'Me', spoken: '‐' },
        { case: 'Partitive', written: 'Meitä', spoken: 'Meit' },
        { case: 'Genitive', written: 'Meidän', spoken: 'Meijän' },
        { case: 'Accusative', written: 'Meidät', spoken: 'Meijät' },
        { case: 'Illative', written: 'Meihin', spoken: 'Meihi' },
        { case: 'Innessive', written: 'Meissä', spoken: 'Meis' },
        { case: 'Elative', written: 'Meistä', spoken: 'Meist' },
        { case: 'Allative', written: 'Meille', spoken: '‐' },
        { case: 'Adessive', written: 'Meillä', spoken: 'Meil' },
        { case: 'Ablative', written: 'Meiltä', spoken: 'Meilt' },
      ],
    },
    {
      pronoun: 'Te (You plural)',
      description: '',
      cases: [
        { case: 'Nominative', written: 'Te', spoken: '‐' },
        { case: 'Partitive', written: 'Teitä', spoken: 'Teit' },
        { case: 'Genitive', written: 'Teidän', spoken: 'Teijän' },
        { case: 'Accusative', written: 'Teidät', spoken: 'Teijät' },
        { case: 'Illative', written: 'Teihin', spoken: 'Teihi' },
        { case: 'Innessive', written: 'Teissä', spoken: 'Teis' },
        { case: 'Elative', written: 'Teistä', spoken: 'Teist' },
        { case: 'Allative', written: 'Teille', spoken: '‐' },
        { case: 'Adessive', written: 'Teillä', spoken: 'Teil' },
        { case: 'Ablative', written: 'Teiltä', spoken: 'Teilt' },
      ],
    },
    {
      pronoun: 'He (They)',
      description: '',
      cases: [
        { case: 'Nominative', written: 'He', spoken: 'Ne' },
        { case: 'Partitive', written: 'Heitä', spoken: 'Niitä' },
        { case: 'Genitive', written: 'Heidän', spoken: 'Niiden' },
        { case: 'Accusative', written: 'Heidät', spoken: 'Ne' },
        { case: 'Illative', written: 'Heihin', spoken: 'Niihin' },
        { case: 'Innessive', written: 'Heissä', spoken: 'Niis' },
        { case: 'Elative', written: 'Heistä', spoken: 'Niistä' },
        { case: 'Allative', written: 'Heille', spoken: 'Niille' },
        { case: 'Adessive', written: 'Heillä', spoken: 'Niil' },
        { case: 'Ablative', written: 'Heiltä', spoken: 'Niilt' },
      ],
    },
  ];

  return (
    <Container>
      <h2>Pronouns in spoken Finnish</h2>
      <div>
        <p style={{ padding: '10px 0' }}>
          In everyday conversations, Finns often use shorter and simpler
          pronouns than the ones you learn in textbooks. This makes speech
          faster and more natural. The main changes happen with minä, sinä, hän,
          and he.
        </p>
        <p style={{ padding: '10px 0' }}>
          Understanding these spoken forms is important because you will hear
          them all the time in real life. They make Finnish sound much more
          relaxed and natural.
        </p>
      </div>

      {pronounsData.map((pronoun, pronounIndex) => (
        <PronounSection key={pronounIndex}>
          <PronounTitle>{pronoun.pronoun}</PronounTitle>
          {pronoun.description && (
            <PronounDescription>{pronoun.description}</PronounDescription>
          )}

          {/* Desktop Table (3 columns) */}
          <StyledTable>
            <thead>
              <tr>
                <StyledTableHeader>Case</StyledTableHeader>
                <StyledTableHeader>Written Pronoun</StyledTableHeader>
                <StyledTableHeader>Spoken Pronoun</StyledTableHeader>
              </tr>
            </thead>
            <tbody>
              {pronoun.cases.map((caseData, caseIndex) => (
                <tr key={caseIndex}>
                  <StyledTableCell>{caseData.case}</StyledTableCell>
                  <StyledTableCell>{caseData.written}</StyledTableCell>
                  <StyledTableCell>{caseData.spoken}</StyledTableCell>
                </tr>
              ))}
            </tbody>
          </StyledTable>

          {/* Mobile Tables (2 columns) - Each case separated */}
          <MobileTableContainer>
            {pronoun.cases.map((caseData, caseIndex) => (
              <MobileCaseSection key={caseIndex}>
                <CaseTitle>{caseData.case}</CaseTitle>
                <MobileTable>
                  <tbody>
                    <tr>
                      <MobileTableCell>Written:</MobileTableCell>
                      <MobileTableCell>{caseData.written}</MobileTableCell>
                    </tr>
                    <tr>
                      <MobileTableCell>Spoken:</MobileTableCell>
                      <MobileTableCell>{caseData.spoken}</MobileTableCell>
                    </tr>
                  </tbody>
                </MobileTable>
              </MobileCaseSection>
            ))}
          </MobileTableContainer>
        </PronounSection>
      ))}
    </Container>
  );
};

export default Puhekieli;
