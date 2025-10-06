"use client";

import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  /* height: 100vh; */
  /* background-color: orange; */
  color: black;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1e40af;
  margin-bottom: 1rem;

  @media (min-width: 640px) {
    font-size: 1.875rem;
  }
`;

export const SectionTitle = styled.h3`
  /* margin: 0 0 15px 0; */
  padding: 10px;
  background-color: #2c5aa0;
  color: white;
  text-align: center;
  border-radius: 4px;
  font-size: 1.1rem;
  width: 100%;

  @media (max-width: 768px) {
    /* display: none; */
  }
`;

// Desktop Table (7 columns) - shows on larger screens
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
  text-align: center;
`;

export const StyledTableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 12px;
  background-color: #f8f9fa;
  font-weight: bold;
  text-align: center;
`;

// Mobile Tables Container
export const MobileTableContainer = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;

// Individual Case Section for Mobile
export const MobileCaseSection = styled.div`
  margin-bottom: 30px;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fafafa;
  color: black;
`;

export const CaseTitle = styled.h3`
  margin: 0 0 15px 0;
  padding: 10px;
  background-color: #2c5aa0;
  color: white;
  text-align: center;
  border-radius: 4px;
  font-size: 1.1rem;
`;

// Mobile Table (2 columns) - for each case
export const MobileTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 0;
  color: black;
`;

export const MobileTableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 10px;
  background-color: #e9ecef;
  font-weight: bold;
  text-align: left;
  color: black;
`;

export const MobileTableCell = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
  color: black;

  &:first-child {
    font-weight: 500;
    background-color: #f0f0f0;
    width: 40%;
    color: black;
  }

  &:last-child {
    width: 60%;
    color: black;
  }
`;
