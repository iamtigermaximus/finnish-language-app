"use client";

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 30px 20px;
  color: black;
  display: flex;
  flex-direction: column;
  /* gap: 40px; */

  @media (min-width: 640px) {
    padding: 40px 50px;
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
`;

export const ExplanationContent = styled.p`
  margin-bottom: 20px;
  font-size: 1.1rem;
`;

export const SectionTitle = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: center;
  color: #666;
  margin-bottom: 30px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 640px) {
    font-size: 1.2rem;
  }
`;

export const PostpositionSection = styled.div`
  margin-bottom: 20px;
  padding: 25px;
  background-color: #f0f8ff;
  border-radius: 8px;
  border-left: 4px solid #2c5aa0;
`;

export const PostpositionHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c5aa0;
  margin-bottom: 8px;

  @media (min-width: 640px) {
    font-size: 1.75rem;
  }
`;

export const UsageText = styled.p`
  font-size: 1rem;
  color: #666;
  font-style: italic;
  margin-bottom: 20px;
`;

export const ExampleTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 15px 0;
  background-color: white;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  th {
    background-color: #2c5aa0;
    color: white;
    padding: 12px 15px;
    text-align: left;
    font-weight: bold;
  }
`;

export const ExampleRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8f9fa;
  }

  &:nth-child(odd) {
    background-color: white;
  }
`;

export const FinnishCell = styled.td`
  padding: 12px 15px;
  border-bottom: 1px solid #e0e0e0;
  font-weight: 500;
  width: 50%;
`;

export const EnglishCell = styled.td`
  padding: 12px 15px;
  border-bottom: 1px solid #e0e0e0;
  color: #666;
  width: 50%;
`;

export const NoteText = styled.p`
  font-size: 0.9rem;
  color: #888;
  font-style: italic;
  margin-top: 10px;
  padding: 10px;
  background-color: #fff3cd;
  border-radius: 4px;
  border-left: 3px solid #ffc107;
`;
