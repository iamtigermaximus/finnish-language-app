'use client';

import styled from 'styled-components';
import { breakpoints as bp } from '../../lib/utils/layout';

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
