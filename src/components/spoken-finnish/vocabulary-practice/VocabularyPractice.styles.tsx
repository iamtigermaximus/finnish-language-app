"use client";

import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  /* height: 100vh; */
  /* background-color: orange; */
  color: black;
  margin-bottom: 20px;
  height: 100vh;

  @media (max-width: 768px) {
    /* padding: 0.5rem; */
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

export const InstructionContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1e40af;
  color: white;
  border-radius: 8px;

  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

export const Button = styled.button<{ $primary?: boolean }>`
  padding: 0.75rem 1.5rem;
  background-color: ${(props) => (props.$primary ? "tomato" : "tomato")};
  color: ${(props) => (props.$primary ? "white" : "#374151")};
  font-weight: 500;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  white-space: nowrap;

  &:hover {
    background-color: ${(props) => (props.$primary ? "tomato" : "tomato")};
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

export const InstructionText = styled.div`
  /* background-color: #f0f9ff; */
  /* border: 1px solid #bae6fd; */
  border-radius: 8px;
  padding: 1.5rem;
  font-size: 0.95rem;
  line-height: 1.5;

  ul {
    margin: 0.5rem 0;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.25rem;
  }
`;

export const ButtonContainer = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;
