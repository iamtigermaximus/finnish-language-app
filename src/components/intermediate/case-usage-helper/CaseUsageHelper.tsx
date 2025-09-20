// components/case-helper.tsx
'use client'

import { useState } from 'react'
import styled from 'styled-components'

interface CaseExplanation {
  case: string
  usage: string
  examples: string[]
  sentenceExamples: { finnish: string; english: string; explanation: string }[]
  whenToUse: string[]
  commonMistakes: string[]
}

// Styled components
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

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1e40af;
  margin-bottom: 1rem;

  @media (min-width: 640px) {
    font-size: 1.875rem;
  }
`

const Description = styled.p`
  color: #4b5563;
  margin-bottom: 1rem;
`

const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
`

const Input = styled.input`
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

const Select = styled.select`
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

const Button = styled.button<{ $primary?: boolean }>`
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

const ExplanationContainer = styled.div`
  background-color: #DBE9FE;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #ddd6fe;
  margin-bottom: 50px;
`

const ExplanationTitle = styled.h3`
  font-weight: bold;
  font-size: 1.125rem;
  color: #5b21b6;
  margin-bottom: 0.5rem;
`

const ExplanationText = styled.p`
  color: #374151;
  margin-bottom: 1rem;
`

const ExamplesContainer = styled.div`
  margin-bottom: 1rem;
`

const ExampleItem = styled.div`
  padding: 0.75rem;
  background-color: white;
  border: 1px solid #ddd6fe;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
`

const ExampleFinnish = styled.p`
  font-weight: 500;
  color: #5b21b6;
`

const ExampleEnglish = styled.p`
  color: #6b7280;
`

const ExampleExplanation = styled.p`
  font-size: 0.875rem;
  color: #9ca3af;
  margin-top: 0.25rem;
`

const ListTitle = styled.p`
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
`

const List = styled.ul`
  list-style-type: disc;
  list-style-position: inside;
  color: #374151;
  margin-bottom: 1rem;
`

const ListItem = styled.li`
  margin-bottom: 0.25rem;
`

export default function CaseUsageHelper() {
  const [word, setWord] = useState('')
  const [caseType, setCaseType] = useState('all')
  const [explanation, setExplanation] = useState<CaseExplanation | null>(null)
  const [loading, setLoading] = useState(false)

  const getCaseExplanation = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/case-explanation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ word, case: caseType })
      })
      
      const data = await response.json()
      setExplanation(data)
    } catch (error) {
      console.error('Error getting case explanation:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <Title>Case Usage Helper</Title>
      <Description>
        Understand how Finnish cases work with different words. See examples in sentences.
      </Description>
      
      <InputGrid>
        <InputGroup>
          <Label>Word</Label>
          <Input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            placeholder="Enter a word (e.g., talo, auto, kirja)"
          />
        </InputGroup>
        
        <InputGroup>
          <Label>Case</Label>
          <Select
            value={caseType}
            onChange={(e) => setCaseType(e.target.value)}
          >
            <option value="all">All Cases</option>
            <option value="nominative">Nominative</option>
            <option value="genitive">Genitive</option>
            <option value="partitive">Partitive</option>
            <option value="inessive">Inessive</option>
            <option value="elative">Elative</option>
            <option value="illative">Illative</option>
            <option value="adessive">Adessive</option>
            <option value="ablative">Ablative</option>
            <option value="allative">Allative</option>
            <option value="essive">Essive</option>
            <option value="translative">Translative</option>
            <option value="instructive">Instructive</option>
            <option value="abessive">Abessive</option>
            <option value="comitative">Comitative</option>
          </Select>
        </InputGroup>
      </InputGrid>
      
      <Button
        $primary
        onClick={getCaseExplanation}
        disabled={loading || !word.trim()}
      >
        {loading ? 'Analyzing...' : 'Explain Cases'}
      </Button>
      
      {explanation && (
        <ExplanationContainer>
          <ExplanationTitle>{word} - {explanation.case} Case</ExplanationTitle>
          <ExplanationText><strong>Usage:</strong> {explanation.usage}</ExplanationText>
          
          <ExamplesContainer>
            <ListTitle>Examples in sentences:</ListTitle>
            {explanation.sentenceExamples.map((example, index) => (
              <ExampleItem key={index}>
                <ExampleFinnish>{example.finnish}</ExampleFinnish>
                <ExampleEnglish>{example.english}</ExampleEnglish>
                <ExampleExplanation>{example.explanation}</ExampleExplanation>
              </ExampleItem>
            ))}
          </ExamplesContainer>
          
          <div>
            <ListTitle>When to use:</ListTitle>
            <List>
              {explanation.whenToUse.map((use, index) => (
                <ListItem key={index}>{use}</ListItem>
              ))}
            </List>
          </div>
          
          <div>
            <ListTitle>Common mistakes:</ListTitle>
            <List>
              {explanation.commonMistakes.map((mistake, index) => (
                <ListItem key={index}>{mistake}</ListItem>
              ))}
            </List>
          </div>
        </ExplanationContainer>
      )}
    </Container>
  )
}