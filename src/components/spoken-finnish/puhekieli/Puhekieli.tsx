'use client';

import React from 'react';
import styled from 'styled-components';
// import { breakpoints as bp } from '../../lib/utils/layout';

// export const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   padding: 10px;
//   height: 100%;
//   z-index: 99;
//   margin-top: 20px;

//   @media (min-width: ${bp.md}) {
//     padding: 20px 50px;
//   }
// `;
// export const StyledTable = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   border: 1px solid #ccc;
//   margin-top: 20px;
// `;

// export const StyledTableCell = styled.td`
//   border: 1px solid #ccc;
//   padding: 8px;
//   text-align: left;
// `;

// export const StyledTableHeader = styled.th`
//   border: 1px solid #ccc;
//   padding: 8px;
//   text-align: left;
//   background-color: #f2f2f2;
//   font-weight: bold;
// `;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const PronounSection = styled.div`
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fafafa;
`;

export const PronounTitle = styled.h2`
  color: #2c5aa0;
  margin: 0 0 10px 0;
  font-size: 1.5rem;
`;

export const PronounDescription = styled.p`
  color: #666;
  margin: 0 0 20px 0;
  font-style: italic;
  line-height: 1.5;
`;

// Desktop Table (3 columns) - shows on larger screens
export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledTableCell = styled.td`
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;

  &:first-child {
    font-weight: 500;
    background-color: #f8f9fa;
    width: 25%;
  }

  &:nth-child(2) {
    width: 37.5%;
  }

  &:last-child {
    width: 37.5%;
  }
`;

export const StyledTableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 12px;
  background-color: #2c5aa0;
  color: white;
  font-weight: bold;
  text-align: left;

  &:first-child {
    width: 25%;
  }

  &:nth-child(2) {
    width: 37.5%;
  }

  &:last-child {
    width: 37.5%;
  }
`;

// Mobile Tables Container
export const MobileTableContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin: 20px 0;

  @media (min-width: 769px) {
    display: none;
  }
`;

// Individual Case Section for Mobile
export const MobileCaseSection = styled.div`
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: white;
`;

export const CaseTitle = styled.h3`
  margin: 0 0 12px 0;
  padding: 8px;
  background-color: #2c5aa0;
  color: white;
  text-align: center;
  border-radius: 4px;
  font-size: 1rem;
`;

// Mobile Table (2 columns) - for each case
export const MobileTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const MobileTableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 10px;
  background-color: #e9ecef;
  font-weight: bold;
  text-align: left;
`;

export const MobileTableCell = styled.td`
  border: 1px solid #ddd;
  padding: 10px;

  &:first-child {
    font-weight: 500;
    background-color: #f0f0f0;
    width: 40%;
  }

  &:last-child {
    width: 60%;
  }
`;

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
