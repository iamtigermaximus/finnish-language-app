import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
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

export const Form = styled.form`
  margin-bottom: 2rem;
  background-color: #1e40af;
  padding: 20px;
  border-radius: 8px;

  @media (min-width: 768px) {
    padding: 30px 20px;
  }
`;

export const FormLabel = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: white;
  display: block;
  margin-bottom: 0.5rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
    gap: 1.5rem;
  }
`;

export const DifficultySelector = styled.select`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    /* width: auto;
    min-width: 150px; */
  }
`;

export const TopicInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    /* width: auto;
    min-width: 200px; */
  }
`;

export const ButtonContainer = styled.div`
  /* background: pink; */
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
  }
`;

export const Button = styled.button<{ $primary?: boolean }>`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => (props.$primary ? "tomato" : "tomato")};
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
  }

  &:hover:not(:disabled) {
    background-color: ${(props) => (props.$primary ? "tomato" : "tomato")};
  }

  &:disabled {
    background-color: tomato;
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`;

export const ExerciseContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 0.5rem;
  }
`;

export const TextContainer = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.75rem;
  }
`;

export const SentenceContainer = styled.div`
  margin-bottom: 1.5rem;
  padding: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const BlankInput = styled.span<{
  $status: string;
  $showResults: boolean;
  $clickable?: boolean;
}>`
  display: inline-block;
  min-width: 60px;
  padding: 0.25rem 0.5rem;
  margin: 0 0.25rem;
  border: 2px dashed
    ${(props) => {
      if (props.$showResults) {
        return props.$status === "correct" ? "#28a745" : "#dc3545";
      }
      return props.$status === "correct"
        ? "#28a745"
        : props.$status === "incorrect"
        ? "#dc3545"
        : "#6c757d";
    }};
  background-color: ${(props) => {
    if (props.$showResults) {
      return props.$status === "correct" ? "#d4edda" : "#f8d7da";
    }
    return props.$status === "correct"
      ? "#d4edda"
      : props.$status === "incorrect"
      ? "#f8d7da"
      : props.$clickable
      ? "#e8f4fd"
      : "transparent";
  }};
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
  cursor: ${(props) => (props.$clickable ? "pointer" : "default")};

  &:hover {
    ${(props) =>
      props.$clickable &&
      `
      background-color: #d4e6f1;
      border-color: #2c5aa0;
    `}
  }

  @media (max-width: 768px) {
    min-width: 50px;
    padding: 0.2rem 0.4rem;
  }
`;

export const InlineOptionsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 2px solid #2c5aa0;
  border-radius: 8px;
  padding: 0.75rem;
  margin-top: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 10;
  min-width: 200px;

  @media (max-width: 768px) {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    max-width: 300px;
    z-index: 1000;
  }
`;

export const InlineOptionButton = styled.button<{ $selected: boolean }>`
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  margin-bottom: 0.5rem;
  border: 2px solid ${(props) => (props.$selected ? "#2c5aa0" : "#ddd")};
  background-color: ${(props) => (props.$selected ? "#e8f4fd" : "white")};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
  font-size: 0.9rem;

  &:hover {
    border-color: #2c5aa0;
    background-color: #e8f4fd;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

// Keep the existing styles for other components
export const OptionsContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

export const OptionButton = styled.button<{
  $selected: boolean;
  $status: string;
}>`
  padding: 0.5rem 1rem;
  border: 2px solid
    ${(props) => {
      if (props.$status === "correct" && props.$selected) return "#28a745";
      if (props.$status === "incorrect" && props.$selected) return "#dc3545";
      return props.$selected ? "#2c5aa0" : "#ddd";
    }};
  background-color: ${(props) => {
    if (props.$status === "correct" && props.$selected) return "#d4edda";
    if (props.$status === "incorrect" && props.$selected) return "#f8d7da";
    return props.$selected ? "#e8f4fd" : "white";
  }};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #2c5aa0;
    background-color: #e8f4fd;
  }
`;

export const FeedbackContainer = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
`;

export const HintText = styled.p`
  color: #856404;
  background-color: #fff3cd;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  border: 1px solid #ffeaa7;
  margin-top: 0.5rem;
  font-size: 0.85rem;
  display: inline-block;
`;

export const ScoreContainer = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: white;
  border-radius: 8px;
  border: 2px solid #e9ecef;
`;

// export const DifficultySelector = styled.select`
//   padding: 0.5rem;
//   border: 1px solid #ddd;
//   border-radius: 4px;
//   font-size: 1rem;

//   @media (max-width: 768px) {
//     font-size: 0.9rem;
//   }
// `;

// export const TopicInput = styled.input`
//   padding: 0.5rem;
//   border: 1px solid #ddd;
//   border-radius: 4px;
//   font-size: 1rem;
//   min-width: 150px;

//   @media (max-width: 768px) {
//     min-width: 120px;
//     font-size: 0.9rem;
//   }
// `;
