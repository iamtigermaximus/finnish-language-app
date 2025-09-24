"use client";

import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
  line-height: 1.6;
  color: #333;
  margin-bottom: 20px;
  height: 100vh;
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

export const Description = styled.p`
  color: #4b5563;
  margin-bottom: 1rem;
`;

export const ErrorMessage = styled.div`
  padding: 0.75rem;
  margin-bottom: 1rem;
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 0.5rem;
  color: #dc2626;
`;

export const FilterLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
`;

export const FilterButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const FilterButton = styled.button<{ $active: boolean }>`
  padding: 0.5rem 0.75rem;
  background-color: ${(props) => (props.$active ? "#2563eb" : "#e5e7eb")};
  color: ${(props) => (props.$active ? "white" : "#374151")};
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  font-size: 0.875rem;

  &:hover {
    background-color: ${(props) => (props.$active ? "#1d4ed8" : "#d1d5db")};
  }
`;

// export const ContentGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 1rem;
//   margin-bottom: 1.5rem;

//   @media (min-width: 768px) {
//     grid-template-columns: 1fr 1fr;
//   }
// `;
export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* stack vertically */

    > div:first-child {
      order: 2; /* cases go to bottom */
    }

    > div:last-child {
      order: 1; /* details go to top */
    }
  }
`;

export const WordsContainer = styled.div`
  max-height: 30rem;
  overflow-y: auto;
`;

export const WordsTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
`;

export const WordItem = styled.div<{ $selected: boolean }>`
  padding: 0.75rem;
  background-color: ${(props) => (props.$selected ? "#dbeafe" : "#f9fafb")};
  border: 1px solid ${(props) => (props.$selected ? "#93c5fd" : "#e5e7eb")};
  border-radius: 0.5rem;
  cursor: pointer;
  margin-bottom: 0.5rem;

  &:hover {
    background-color: ${(props) => (props.$selected ? "#dbeafe" : "#f3f4f6")};
  }
`;

export const WordHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.25rem;
`;

export const WordName = styled.div`
  font-weight: bold;
  color: #1d4ed8;
`;

export const WordEnglish = styled.span`
  color: #6b7280;
  margin-left: 0.5rem;
`;

export const WordCategory = styled.span`
  font-size: 0.75rem;
  background-color: #e5e7eb;
  color: #374151;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
`;

export const WordUsage = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 0.25rem;
`;

export const DetailsContainer = styled.div`
  background-color: #dbeafe;
  padding: 1rem;
  border-radius: 0.5rem;
`;

export const DetailsTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
`;

export const WordDetails = styled.div`
  margin-bottom: 0.75rem;
`;

export const WordDetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
`;

export const WordDetailName = styled.h4`
  font-size: 1.25rem;
  font-weight: bold;
  color: #1e40af;
`;

export const WordDetailCategory = styled.span`
  font-size: 0.75rem;
  background-color: #93c5fd;
  color: #1e40af;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
`;

export const DetailText = styled.p`
  margin-bottom: 0.75rem;
  color: #374151;
`;

export const ExamplesContainer = styled.div`
  margin-bottom: 0.75rem;
`;

export const ExampleItem = styled.div`
  padding: 0.5rem;
  background-color: white;
  border: 1px solid #93c5fd;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
`;

export const ExampleFinnish = styled.p`
  font-weight: 500;
  color: #1e40af;
`;

export const ExampleEnglish = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
`;

export const NotesList = styled.ul`
  list-style-type: disc;
  list-style-position: inside;
  margin-left: 1rem;
  color: #374151;
  margin-bottom: 1rem;
`;

export const PracticeContainer = styled.div`
  margin-top: 1rem;
`;

export const PracticeInputContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const PracticeInput = styled.input`
  flex-grow: 1;
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }
`;

export const PracticeButton = styled.button<{ $primary?: boolean }>`
  padding: 0.5rem 0.75rem;
  background-color: ${(props) => (props.$primary ? "#16a34a" : "#e5e7eb")};
  color: ${(props) => (props.$primary ? "white" : "#374151")};
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  font-size: 0.875rem;
  white-space: nowrap;

  &:hover {
    background-color: ${(props) => (props.$primary ? "#15803d" : "#d1d5db")};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const FeedbackContainer = styled.div`
  padding: 0.75rem;
  background-color: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 0.5rem;
  margin-top: 0.75rem;
`;

export const FeedbackCorrect = styled.p`
  font-weight: 500;
  color: #166534;
  margin-bottom: 0.5rem;
`;

export const FeedbackExplanation = styled.p`
  font-size: 0.875rem;
  color: #374151;
`;

export const EmptyState = styled.div`
  background-color: #f3f4f6;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  color: #6b7280;
`;

export const TipContainer = styled.div`
  background-color: #fffbeb;
  padding: 1rem;
  border: 1px solid #fcd34d;
  border-radius: 0.5rem;
`;

export const TipTitle = styled.h3`
  font-weight: bold;
  color: #92400e;
  margin-bottom: 0.5rem;
`;

export const TipText = styled.p`
  color: #92400e;
`;
