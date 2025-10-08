"use client";

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 30px 20px;
  color: black;
  display: flex;
  flex-direction: column;

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
  margin-bottom: 30px;
  font-size: 1.1rem;
  line-height: 1.6;
`;

export const CategorySection = styled.div`
  margin-bottom: 40px;
  padding: 20px;
  background-color: #f0f8ff;
  border-radius: 8px;
  /* border: 2px solid #e1f5fe; */
`;

export const CategoryHeader = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  color: #1565c0;
  margin-bottom: 10px;

  @media (min-width: 640px) {
    font-size: 1.5rem;
  }
`;

export const CategoryDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
  font-style: italic;
  line-height: 1.5;

  em {
    font-style: normal;
    font-weight: 500;
    color: #333;
  }
`;

export const PostpositionSection = styled.div`
  margin-bottom: 20px;
  padding: 25px;
  background-color: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #2c5aa0;
`;

export const PostpositionHeader = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
  color: #2c5aa0;
  margin-bottom: 8px;

  @media (min-width: 640px) {
    font-size: 1.3rem;
  }
`;

export const UsageText = styled.p`
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 15px;
  font-weight: 500;
`;

export const ExampleTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 10px 0;
  background-color: white;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  th {
    background-color: #2c5aa0;
    color: white;
    padding: 10px 12px;
    text-align: left;
    font-weight: bold;
    font-size: 0.9rem;
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
  padding: 10px 12px;
  border-bottom: 1px solid #e0e0e0;
  font-weight: 500;
  width: 50%;
  font-size: 0.95rem;
`;

export const EnglishCell = styled.td`
  padding: 10px 12px;
  border-bottom: 1px solid #e0e0e0;
  color: #666;
  width: 50%;
  font-size: 0.95rem;
`;

export const CaseCell = styled.td`
  padding: 10px 12px;
  border-bottom: 1px solid #e0e0e0;
  color: #888;
  width: 25%;
  font-size: 0.9rem;
`;

export const MeaningCell = styled.td`
  padding: 10px 12px;
  border-bottom: 1px solid #e0e0e0;
  color: #666;
  width: 25%;
  font-size: 0.9rem;
`;
