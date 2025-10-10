"use client";

import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  color: black;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1e40af;
  margin-bottom: 1rem;

  @media (min-width: 640px) {
    font-size: 1.875rem;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    text-align: center;
  }
`;

export const SectionTitle = styled.h3`
  margin: 0 0 15px 0;
  padding: 10px;
  background-color: #2c5aa0;
  color: white;
  text-align: center;
  border-radius: 4px;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    /* display: block;
    font-size: 1rem;
    padding: 8px;
    margin: 20px 0 10px 0; */
    display: none;
  }
`;

// Desktop Table - shows on larger screens
export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 0.85rem;
  }
`;

export const StyledTableCell = styled.td`
  border: 1px solid #ddd;
  padding: 12px;
  text-align: center;
  word-wrap: break-word;
  max-width: 200px;

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 8px;
    max-width: 150px;
  }
`;

export const StyledTableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 12px;
  background-color: #f8f9fa;
  font-weight: bold;
  text-align: center;
  word-wrap: break-word;
  max-width: 200px;

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 8px;
    max-width: 150px;
  }
`;

// Mobile Tables Container
export const MobileTableContainer = styled.div`
  @media (min-width: 769px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: block;
    width: 100%;
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

  @media (max-width: 480px) {
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const CaseTitle = styled.h3`
  margin: 0 0 15px 0;
  padding: 10px;
  background-color: #2c5aa0;
  color: white;
  text-align: center;
  border-radius: 4px;
  font-size: 1.1rem;

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 8px;
    margin-bottom: 10px;
  }
`;

// Mobile Table - optimized for mobile without scrolling
export const MobileTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 0;
  color: black;
  font-size: 0.85rem;
  table-layout: fixed; /* Ensures equal column distribution */

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const MobileTableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 10px 8px;
  background-color: #e9ecef;
  font-weight: bold;
  text-align: center;
  color: black;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 480px) {
    padding: 8px 4px;
    font-size: 0.75rem;
  }

  @media (max-width: 360px) {
    padding: 6px 3px;
    font-size: 0.7rem;
  }
`;

export const MobileTableCell = styled.td`
  border: 1px solid #ddd;
  padding: 10px 8px;
  color: black;
  text-align: center;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 480px) {
    padding: 8px 4px;
    font-size: 0.75rem;
  }

  @media (max-width: 360px) {
    padding: 6px 3px;
    font-size: 0.7rem;
  }

  &:first-child {
    font-weight: 500;
    background-color: #f0f0f0;
  }
`;

// For tables with many columns, use this optimized version
export const CompactMobileTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 0;
  color: black;
  font-size: 0.75rem;
  table-layout: fixed;

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }

  @media (max-width: 360px) {
    font-size: 0.65rem;
  }
`;

export const CompactMobileTableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px 4px;
  background-color: #e9ecef;
  font-weight: bold;
  text-align: center;
  color: black;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;

  @media (max-width: 360px) {
    padding: 6px 3px;
  }
`;

export const CompactMobileTableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px 4px;
  color: black;
  text-align: center;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;

  @media (max-width: 360px) {
    padding: 6px 3px;
  }

  &:first-child {
    font-weight: 500;
    background-color: #f0f0f0;
  }
`;

// Stacked layout for very complex tables (alternative approach)
export const StackedTableContainer = styled.div`
  width: 100%;
`;

export const StackedTableRow = styled.div`
  border: 1px solid #ddd;
  margin-bottom: 10px;
  border-radius: 4px;
  overflow: hidden;
`;

export const StackedTableCell = styled.div`
  padding: 10px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }

  &:nth-child(odd) {
    background-color: #f9f9f9;
  }
`;

export const StackedTableLabel = styled.span`
  font-weight: bold;
  color: #2c5aa0;
  min-width: 100px;
`;

export const StackedTableValue = styled.span`
  text-align: right;
  flex: 1;
  margin-left: 10px;
`;
