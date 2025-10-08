"use client";

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px 15px;
  color: black;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 40px 50px;
  }
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: bold;
  color: #1e40af;
  margin-bottom: 1rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.875rem;
    text-align: left;
  }
`;

export const ExplanationContent = styled.p`
  margin-bottom: 30px;
  font-size: 1rem;
  line-height: 1.6;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    text-align: left;
  }
`;

export const CategorySection = styled.div`
  margin-bottom: 30px;
  padding: 20px 15px;
  background-color: #f0f8ff;
  border-radius: 8px;
  border: 2px solid #e1f5fe;

  @media (min-width: 768px) {
    padding: 25px;
  }
`;

export const CategoryHeader = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #1565c0;
  margin-bottom: 15px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    text-align: left;
  }
`;

export const CategoryDescription = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 20px;
  font-style: italic;
  line-height: 1.5;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1rem;
    text-align: left;
  }
`;

export const InflectionTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: none;

  @media (min-width: 768px) {
    display: table;
  }
`;

export const TableHeader = styled.th`
  background-color: #2c5aa0;
  color: white;
  padding: 12px 8px;
  text-align: left;
  font-weight: bold;
  font-size: 0.9rem;
  border-right: 1px solid #1e40af;

  &:last-child {
    border-right: none;
  }

  @media (min-width: 1024px) {
    padding: 15px 12px;
    font-size: 0.95rem;
  }
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8f9fa;
  }

  &:nth-child(odd) {
    background-color: white;
  }

  &:hover {
    background-color: #e3f2fd;
  }
`;

export const PostpositionCell = styled.td`
  padding: 10px 8px;
  border-bottom: 1px solid #e0e0e0;
  font-weight: bold;
  color: #2c5aa0;
  width: 15%;
  font-size: 0.9rem;

  @media (min-width: 1024px) {
    padding: 12px 10px;
    font-size: 0.95rem;
  }
`;

export const InflectionCell = styled.td`
  padding: 10px 8px;
  border-bottom: 1px solid #e0e0e0;
  color: #333;
  width: 20%;
  font-size: 0.85rem;
  /* font-family: "Courier New", monospace; */

  @media (min-width: 1024px) {
    padding: 12px 10px;
    font-size: 0.9rem;
  }
`;

export const ExampleCell = styled.td`
  padding: 10px 8px;
  border-bottom: 1px solid #e0e0e0;
  color: #666;
  width: 25%;
  font-size: 0.85rem;
  font-style: italic;

  @media (min-width: 1024px) {
    padding: 12px 10px;
    font-size: 0.9rem;
  }
`;

/* Mobile Styles */
export const MobileTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 20px 0;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileTableSection = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #2c5aa0;
`;

export const MobileTableHeader = styled.h4`
  font-size: 1.1rem;
  font-weight: bold;
  color: #2c5aa0;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 2px solid #e0e0e0;
`;

export const MobileTableRow = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;
  padding: 6px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

export const MobilePostpositionCell = styled.div`
  font-weight: bold;
  color: #333;
  width: 70px;
  flex-shrink: 0;
  font-size: 0.9rem;
`;

export const MobileInflectionCell = styled.div`
  color: #333;
  font-family: "Courier New", monospace;
  font-size: 0.9rem;
  flex: 1;
`;

export const MobileExampleCell = styled.div`
  color: #666;
  font-style: italic;
  font-size: 0.9rem;
  flex: 1;
`;

export const NoteText = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-top: 15px;
  padding: 12px 15px;
  background-color: #fff3cd;
  border-radius: 6px;
  border-left: 4px solid #ffc107;
  line-height: 1.5;

  strong {
    color: #333;
    font-weight: 600;
  }
`;
