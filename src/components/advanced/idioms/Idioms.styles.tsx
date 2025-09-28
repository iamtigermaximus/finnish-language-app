"use client";
"use client";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  color: black;
  margin-bottom: 20px;
`;

export const Header = styled.header`
  margin-bottom: 2rem;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #1e40af;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #4b5563;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
`;

export const Section = styled.section`
  margin-bottom: 3rem;
  padding: 2rem;
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e40af;
  margin-bottom: 0.5rem;
`;

export const SectionDescription = styled.p`
  color: #374151;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
`;

export const IdiomGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const IdiomCard = styled.div`
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #bae6fd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const IdiomPhrase = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e40af;
  margin-bottom: 0.75rem;
  text-align: center;
`;

export const IdiomMeaning = styled.div`
  font-size: 1rem;
  color: #374151;
  margin-bottom: 0.75rem;
  font-weight: 600;
  line-height: 1.5;
`;

export const IdiomLiteral = styled.div`
  font-style: italic;
  color: #0369a1;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
  background: #f0f9ff;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border-left: 3px solid #0ea5e9;
`;

export const IdiomExample = styled.div`
  background-color: #f8fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
  line-height: 1.5;
  border: 1px solid #cbd5e1;
`;

export const UsageTip = styled.div`
  background-color: #dbeafe;
  padding: 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.8rem;
  color: #1e40af;
  border-left: 3px solid #3b82f6;
  line-height: 1.4;
`;

export const CategoryFilter = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FilterButton = styled.button<{ $active: boolean }>`
  padding: 0.75rem 1.5rem;
  background-color: ${(props) => (props.$active ? "#1e40af" : "#f3f4f6")};
  color: ${(props) => (props.$active ? "white" : "#374151")};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
  border: 2px solid ${(props) => (props.$active ? "#1e40af" : "transparent")};

  &:hover {
    background-color: ${(props) => (props.$active ? "#1e3a8a" : "#e5e7eb")};
    transform: translateY(-1px);
  }
`;

export const IdiomTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
  display: none;
  background: white;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

  @media (min-width: 1024px) {
    display: table;
  }
`;

export const TableHeader = styled.th`
  background-color: #1e40af;
  color: white;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  font-size: 0.95rem;
`;

export const TableCell = styled.td<{ $emphasis?: boolean }>`
  padding: 1rem;
  border-bottom: 1px solid #e2e8f0;
  vertical-align: top;
  font-weight: ${(props) => (props.$emphasis ? "700" : "normal")};
  color: ${(props) => (props.$emphasis ? "#1e40af" : "#374151")};
`;

export const TableRow = styled.tr`
  transition: background-color 0.2s ease;

  &:nth-child(even) {
    background-color: #f8fafc;
  }

  &:hover {
    background-color: #f1f5f9;
  }

  &:last-child td {
    border-bottom: none;
  }
`;

export const PracticeContainer = styled.div`
  background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
  border-radius: 1rem;
  padding: 2rem;
  margin: 2rem 0;
  color: white;
`;

export const PracticeTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const FormLabel = styled.label`
  font-weight: 500;
  font-size: 1.1rem;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: stretch;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 0.875rem 1rem;
  border: 2px solid #cbd5e1;
  border-radius: 0.5rem;
  font-size: 1rem;
  background: white;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #1e40af;
    box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1);
  }

  &:disabled {
    background-color: #f1f5f9;
    cursor: not-allowed;
  }
`;

export const Button = styled.button<{ $primary?: boolean }>`
  padding: 0.875rem 2rem;
  background-color: ${(props) => (props.$primary ? "#fbbf24" : "#e5e7eb")};
  color: ${(props) => (props.$primary ? "#1e40af" : "#374151")};
  font-weight: 600;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background-color: ${(props) => (props.$primary ? "#f59e0b" : "#d1d5db")};
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const ResultContainer = styled.div`
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-top: 1.5rem;
  color: #374151;
`;

export const ResultTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e40af;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const ResultItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem 0;
  border-bottom: 1px solid #e2e8f0;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const ResultLabel = styled.span`
  font-weight: 600;
  color: #374151;
  min-width: 150px;
`;

export const ResultValue = styled.span`
  color: #1e40af;
  font-weight: 500;
  flex: 1;
  text-align: right;
  line-height: 1.5;

  @media (max-width: 640px) {
    text-align: left;
  }
`;

export const ErrorMessage = styled.div`
  padding: 1rem;
  margin-bottom: 1.5rem;
  background-color: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 0.5rem;
  color: #dc2626;
  font-weight: 500;
`;

export const SuccessMessage = styled.div`
  padding: 1rem;
  margin-bottom: 1.5rem;
  background-color: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-radius: 0.5rem;
  color: #15803d;
  font-weight: 500;
`;

export const LoadingContainer = styled.div`
  padding: 2rem;
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: #374151;
  font-weight: 500;

  @media (min-width: 640px) {
    padding: 3rem;
  }
`;

export const DifficultyBadge = styled.span<{ $level: string }>`
  background-color: ${(props) =>
    props.$level === "easy"
      ? "#10b981"
      : props.$level === "intermediate"
      ? "#f59e0b"
      : "#ef4444"};
  color: white;
  padding: 0.375rem 0.875rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-left: 1rem;
`;
