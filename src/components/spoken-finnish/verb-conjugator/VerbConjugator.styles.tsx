"use client";

import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

export const ContentContainer = styled.div`
  max-width: 56rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
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

export const TenseButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const TenseTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1rem;
`;

export const ConjugationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ConjugationItem = styled.div`
  background-color: #f9fafb;
  padding: 1rem;
  border-radius: 0.5rem;
`;

export const Pronoun = styled.span`
  font-weight: 500;
  color: #374151;
`;

export const Conjugation = styled.span`
  margin-left: 0.5rem;
  color: #1d4ed8;
  font-weight: 500;
`;

export const NotesContainer = styled.div`
  background-color: #fffbeb;
  padding: 1rem;
  border-left: 4px solid #f59e0b;
  border-radius: 0.25rem;
  margin-top: 1.5rem;
`;

export const NotesTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
`;

export const NotesText = styled.p`
  color: #374151;
`;

export const WelcomeContainer = styled.div`
  background-color: #f8f9fa;
  border-radius: 0.75rem;
  /* box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); */
  padding: 1.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const WelcomeText = styled.p`
  color: #6b7280;
`;

export const ExamplesContainer = styled.div`
  background-color: #dbe9fe;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 1.5rem;
  text-align: left;
`;

export const ExamplesTitle = styled.h4`
  font-weight: 500;
  color: #1e40af;
  margin-bottom: 0.5rem;
`;

export const ExamplesList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  color: #2563eb;
`;
