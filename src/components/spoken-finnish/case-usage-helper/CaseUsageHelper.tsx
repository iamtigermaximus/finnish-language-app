"use client";

import { useState } from "react";
import {
  Button,
  ButtonContainer,
  Container,
  Description,
  ExampleEnglish,
  ExampleExplanation,
  ExampleFinnish,
  ExampleItem,
  ExamplesContainer,
  ExplanationContainer,
  ExplanationText,
  ExplanationTitle,
  Input,
  InputGrid,
  InputGroup,
  Label,
  List,
  ListItem,
  ListTitle,
  Select,
  Title,
} from "./CaseUsageHelper.styles";
import { CaseExplanation } from "@/lib/types/intermediateTypes";

const CaseUsageHelper = () => {
  const [word, setWord] = useState("");
  const [caseType, setCaseType] = useState("all");
  const [explanation, setExplanation] = useState<CaseExplanation | null>(null);
  const [loading, setLoading] = useState(false);

  const getCaseExplanation = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/case-explanation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ word, case: caseType }),
      });

      const data = await response.json();
      setExplanation(data);
    } catch (error) {
      console.error("Error getting case explanation:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title>Case Usage Helper</Title>
      <Description>
        Understand how Finnish cases work with different words. See examples in
        sentences.
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
      <ButtonContainer>
        <Button
          $primary
          onClick={getCaseExplanation}
          disabled={loading || !word.trim()}
        >
          {loading ? "Analyzing..." : "Explain Cases"}
        </Button>
      </ButtonContainer>
      {explanation && (
        <ExplanationContainer>
          <ExplanationTitle>
            {word} - {explanation.case} Case
          </ExplanationTitle>
          <ExplanationText>
            <strong>Usage:</strong> {explanation.usage}
          </ExplanationText>

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
  );
};

export default CaseUsageHelper;
