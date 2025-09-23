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
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  } */
  margin: 20px 0;
`;

export const UsageExplanation = styled.div`
  background-color: #f0f9ff;
  border-left: 4px solid #0ea5e9;
  padding: 1rem;
  margin: 1.5rem 0;
  border-radius: 0.25rem;
`;

export const Header = styled.header`
  /* text-align: center; */
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

export const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
`;

export const Form = styled.form`
  margin-bottom: 2rem;
  background-color: #f8f9fa;
  padding: 30px 20px;
`;

export const FormLabel = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: #374151;
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

export const ErrorMessage = styled.div`
  padding: 1rem;
  margin-bottom: 1.5rem;
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 0.5rem;
  color: #dc2626;
`;

export const LoadingContainer = styled.div`
  padding: 2rem;
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const ResultContainer = styled.div`
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 1.5rem;
`;

export const ResultHeader = styled.div`
  padding: 1.5rem;
  background-color: #1d4ed8;
  color: white;
`;

export const ResultTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.25rem;
`;

export const ResultSubtitle = styled.p`
  color: #bfdbfe;
`;

export const ResultMeta = styled.p`
  color: #93c5fd;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

export const ResultContent = styled.div`
  padding: 1.5rem;
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
    display: none;
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
