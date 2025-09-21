'use client'

import styled from 'styled-components'

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
`

export const Description = styled.p`
  color: #4b5563;
  margin-bottom: 1rem;
`

export const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
`

export const Input = styled.input`
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }
`

export const Select = styled.select`
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: white;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }
`

export const Button = styled.button<{ $primary?: boolean }>`
  padding: 0.5rem 1rem;
  background-color: ${props => props.$primary ? '#0066cc' : '#e5e7eb'};
  color: ${props => props.$primary ? 'white' : '#374151'};
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 1.5rem;

  &:hover {
    background-color: ${props => props.$primary ? '#0066cc' : '#d1d5db'};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const ExplanationContainer = styled.div`
  background-color: #DBE9FE;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #ddd6fe;
  margin-bottom: 50px;
`

export const ExplanationTitle = styled.h3`
  font-weight: bold;
  font-size: 1.125rem;
  color: #5b21b6;
  margin-bottom: 0.5rem;
`

export const ExplanationText = styled.p`
  color: #374151;
  margin-bottom: 1rem;
`

export const ExamplesContainer = styled.div`
  margin-bottom: 1rem;
`

export const ExampleItem = styled.div`
  padding: 0.75rem;
  background-color: white;
  border: 1px solid #ddd6fe;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
`

export const ExampleFinnish = styled.p`
  font-weight: 500;
  color: #5b21b6;
`

export const ExampleEnglish = styled.p`
  color: #6b7280;
`

export const ExampleExplanation = styled.p`
  font-size: 0.875rem;
  color: #9ca3af;
  margin-top: 0.25rem;
`

export const ListTitle = styled.p`
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
`

export const List = styled.ul`
  list-style-type: disc;
  list-style-position: inside;
  color: #374151;
  margin-bottom: 1rem;
`

export const ListItem = styled.li`
  margin-bottom: 0.25rem;
`