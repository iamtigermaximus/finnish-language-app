import React from 'react';
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
} from './DemonstrativePronouns.styles';

const tableData = [
  {
    case: 'Nominative',
    this: 'Tämä',
    that: 'Tuo',
    it: 'Se',
    these: 'Nämä',
    those: 'Nuo',
    they: 'Ne',
  },
  {
    case: 'Stem',
    this: 'Tä-',
    that: 'Tuo-',
    it: 'Si-',
    these: 'Näi-',
    those: 'Noi-',
    they: 'Nii-',
  },
  {
    case: 'Partitive',
    this: 'Tätä',
    that: 'Tuota',
    it: 'Sitä',
    these: 'Näitä',
    those: 'Noita',
    they: 'Niitä',
  },
  {
    case: 'Genitive',
    this: 'Tämän',
    that: 'Tuon',
    it: 'Sen',
    these: 'Näiden',
    those: 'Noiden',
    they: 'Niiden',
  },
  {
    case: 'Illative',
    this: 'Tähän',
    that: 'Tuohon',
    it: 'Siihen',
    these: 'Näihin',
    those: 'Noihin',
    they: 'Niihin',
  },
  {
    case: 'Inessive',
    this: 'Tässä',
    that: 'Tuossa',
    it: 'Siinä',
    these: 'Näissä',
    those: 'Noissa',
    they: 'Niissä',
  },
  {
    case: 'Elative',
    this: 'Tästä',
    that: 'Tuosta',
    it: 'Siitä',
    these: 'Näistä',
    those: 'Noista',
    they: 'Niistä',
  },
  {
    case: 'Allative',
    this: 'Tälle',
    that: 'Tuolle',
    it: 'Sille',
    these: 'Näille',
    those: 'Noille',
    they: 'Niille',
  },
  {
    case: 'Adessive',
    this: 'Tällä',
    that: 'Tuolla',
    it: 'Sillä',
    these: 'Näillä',
    those: 'Noilla',
    they: 'Niille',
  },
  {
    case: 'Ablative',
    this: 'Tältä',
    that: 'Tuolta',
    it: 'Siltä',
    these: 'Näiltä',
    those: 'Noilta',
    they: 'Niiltä',
  },
];

const DemonstrativePronouns = () => {
  return (
    <Container>
      <h2>Demonstrative Pronouns</h2>
      <div>
        <p style={{ padding: '10px 0' }}>
          Demonstrative pronouns are words used to point out specific people,
          objects, or places. In Finnish, they indicate proximity (near or far)
          and number (singular or plural).
        </p>
      </div>
      {/* Desktop Table (7 columns) - shows on larger screens */}
      <StyledTable>
        <thead>
          <tr>
            <StyledTableHeader>Case</StyledTableHeader>
            <StyledTableHeader>This</StyledTableHeader>
            <StyledTableHeader>That</StyledTableHeader>
            <StyledTableHeader>It</StyledTableHeader>
            <StyledTableHeader>These</StyledTableHeader>
            <StyledTableHeader>Those</StyledTableHeader>
            <StyledTableHeader>They</StyledTableHeader>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <StyledTableCell>{row.case}</StyledTableCell>
              <StyledTableCell>{row.this}</StyledTableCell>
              <StyledTableCell>{row.that}</StyledTableCell>
              <StyledTableCell>{row.it}</StyledTableCell>
              <StyledTableCell>{row.these}</StyledTableCell>
              <StyledTableCell>{row.those}</StyledTableCell>
              <StyledTableCell>{row.they}</StyledTableCell>
            </tr>
          ))}
        </tbody>
      </StyledTable>

      {/* Mobile Tables (2 columns) - Each case separated */}
      <MobileTableContainer>
        {tableData.map((row, index) => (
          <MobileCaseSection key={index}>
            <CaseTitle>{row.case} Case</CaseTitle>
            <MobileTable>
              <thead>
                <tr>
                  <MobileTableHeader>Pronoun</MobileTableHeader>
                  <MobileTableHeader>Finnish</MobileTableHeader>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <MobileTableCell>I</MobileTableCell>
                  <MobileTableCell>{row.this}</MobileTableCell>
                </tr>
                <tr>
                  <MobileTableCell>You</MobileTableCell>
                  <MobileTableCell>{row.that}</MobileTableCell>
                </tr>
                <tr>
                  <MobileTableCell>He/She</MobileTableCell>
                  <MobileTableCell>{row.it}</MobileTableCell>
                </tr>
                <tr>
                  <MobileTableCell>We</MobileTableCell>
                  <MobileTableCell>{row.these}</MobileTableCell>
                </tr>
                <tr>
                  <MobileTableCell>You (pl.)</MobileTableCell>
                  <MobileTableCell>{row.those}</MobileTableCell>
                </tr>
                <tr>
                  <MobileTableCell>They</MobileTableCell>
                  <MobileTableCell>{row.they}</MobileTableCell>
                </tr>
              </tbody>
            </MobileTable>
          </MobileCaseSection>
        ))}
      </MobileTableContainer>
    </Container>
  );
};

export default DemonstrativePronouns;
