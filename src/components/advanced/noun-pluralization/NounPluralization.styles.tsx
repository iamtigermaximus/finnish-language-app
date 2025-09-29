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

export const ContentContainer = styled.div`
  /* max-width: 56rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
  } */
  margin: 20px 0;
`;

export const Header = styled.header`
  margin-bottom: 1.5rem;

  @media (min-width: 640px) {
    margin-bottom: 2rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.375rem;
  font-weight: bold;
  color: #1e40af;
  margin-bottom: 0.75rem;

  @media (min-width: 640px) {
    font-size: 1.875rem;
    margin-bottom: 1rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: #4b5563;

  @media (min-width: 640px) {
    font-size: 1.125rem;
  }
`;
export const UsageExplanation = styled.div`
  background-color: #f0f9ff;
  border-left: 4px solid #0ea5e9;
  padding: 1rem;
  margin: 1.5rem 0;
  border-radius: 0.25rem;
`;

export const RuleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e40af;
  margin-bottom: 0.5rem;

  @media (min-width: 640px) {
    font-size: 1.25rem;
  }
`;

export const RuleDescription = styled.p`
  color: #374151;
  margin-bottom: 1rem;
  font-size: 0.95rem;

  @media (min-width: 640px) {
    font-size: 1rem;
  }
`;

// Mobile card view for examples
export const ExampleCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const ExampleCard = styled.div`
  background-color: #f8f9fa;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e5e7eb;
`;

export const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  padding: 0.25rem 0;
  border-bottom: 1px solid #e5e7eb;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

export const CardLabel = styled.span`
  font-weight: 500;
  color: #374151;
  min-width: 120px;
`;

export const CardValue = styled.span`
  color: #1d4ed8;
  text-align: right;
  flex: 1;
`;

// Desktop table view
export const ExampleTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
  display: none;

  @media (min-width: 1024px) {
    display: table;
  }
`;

export const TableHeader = styled.th`
  background-color: #e6f7ff;
  padding: 0.75rem;
  text-align: left;
  border: 1px solid #d1d5db;
  font-weight: 500;
`;

export const TableCell = styled.td`
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  vertical-align: top;
`;

export const ExampleSentence = styled.div`
  margin-top: 0.5rem;
  font-style: italic;
  color: #4b5563;
  font-size: 0.875rem;
`;

export const PracticeContainer = styled.div`
  background-color: #f8f9fa;
  border-radius: 0.75rem;
  padding: 1rem;
  margin-top: 1.5rem;

  @media (min-width: 640px) {
    padding: 1.5rem;
    margin-top: 2rem;
  }
`;

export const PracticeTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e40af;
  margin-bottom: 1rem;

  @media (min-width: 640px) {
    font-size: 1.25rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const FormLabel = styled.label`
  font-size: 0.95rem;
  font-weight: 500;
  color: #374151;

  @media (min-width: 640px) {
    font-size: 1rem;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #e6f7ff;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export const Button = styled.button<{ $primary?: boolean }>`
  padding: 0.75rem 1.5rem;
  background-color: ${(props) => (props.$primary ? "#0066cc" : "#e5e7eb")};
  color: ${(props) => (props.$primary ? "white" : "#374151")};
  font-weight: 500;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  white-space: nowrap;

  &:hover {
    background-color: ${(props) => (props.$primary ? "#1d4ed8" : "#d1d5db")};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ResultContainer = styled.div`
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-top: 1.5rem;

  @media (min-width: 640px) {
    padding: 1.5rem;
  }
`;

export const ResultTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1e40af;
  margin-bottom: 1rem;

  @media (min-width: 640px) {
    font-size: 1.25rem;
  }
`;

export const ResultItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e5e7eb;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const ResultLabel = styled.span`
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.25rem;

  @media (min-width: 640px) {
    margin-bottom: 0;
    min-width: 150px;
  }
`;

export const ResultValue = styled.span`
  color: #1d4ed8;
  font-weight: 500;
  word-break: break-word;

  @media (min-width: 640px) {
    text-align: right;
    flex: 1;
  }
`;

export const ErrorMessage = styled.div`
  padding: 1rem;
  margin-bottom: 1.5rem;
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 0.5rem;
  color: #dc2626;
`;

export const SuccessMessage = styled.div`
  padding: 1rem;
  margin-bottom: 1.5rem;
  background-color: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 0.5rem;
  color: #15803d;
`;

export const LoadingContainer = styled.div`
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (min-width: 640px) {
    padding: 2rem;
  }
`;

// Add these to your existing styles file
export const CaseExampleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem 0;
  padding: 1.5rem;
  background-color: #f8fafc;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
`;

export const CaseExampleItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const CaseExampleLabel = styled(ResultLabel)`
  min-width: 150px;
  font-weight: 600;
`;

export const CaseExampleValue = styled(ResultValue)`
  flex: 1;
`;
