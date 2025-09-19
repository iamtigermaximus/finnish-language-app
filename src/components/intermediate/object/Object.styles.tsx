'use client';

// import styled from 'styled-components';

// export const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 20px;
//   height: 100vh;
// `;

// // Desktop Table (7 columns) - shows on larger screens
// export const StyledTable = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   margin: 20px 0;

//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// export const StyledTableCell = styled.td`
//   border: 1px solid #ddd;
//   padding: 12px;
//   text-align: center;
// `;

// export const StyledTableHeader = styled.th`
//   border: 1px solid #ddd;
//   padding: 12px;
//   background-color: #f8f9fa;
//   font-weight: bold;
//   text-align: center;
// `;

// // Mobile Tables Container
// export const MobileTableContainer = styled.div`
//   @media (min-width: 769px) {
//     display: none;
//   }
// `;

// // Individual Case Section for Mobile
// export const MobileCaseSection = styled.div`
//   margin-bottom: 30px;
//   padding: 15px;
//   border: 1px solid #e0e0e0;
//   border-radius: 8px;
//   background-color: #fafafa;
// `;

// export const CaseTitle = styled.h3`
//   margin: 0 0 15px 0;
//   padding: 10px;
//   background-color: #2c5aa0;
//   color: white;
//   text-align: center;
//   border-radius: 4px;
//   font-size: 1.1rem;
// `;

// // Mobile Table (2 columns) - for each case
// export const MobileTable = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   margin: 0;
// `;

// export const MobileTableHeader = styled.th`
//   border: 1px solid #ddd;
//   padding: 10px;
//   background-color: #e9ecef;
//   font-weight: bold;
//   text-align: left;
// `;

// export const MobileTableCell = styled.td`
//   border: 1px solid #ddd;
//   padding: 10px;

//   &:first-child {
//     font-weight: 500;
//     background-color: #f0f0f0;
//     width: 40%;
//   }

//   &:last-child {
//     width: 60%;
//   }
// `;
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6; */
  color: #333;
  
`;

export const ExplanationSection = styled.div`
  background: white;
  /* padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
  margin-bottom: 30px;
`;

export const ExplanationTitle = styled.h2`
  color: #2c3e50;
  margin-top: 0;
  /* border-bottom: 2px solid #3498db; */
  padding-bottom: 10px;
`;

export const ExplanationContent = styled.p`
  margin-bottom: 20px;
  font-size: 1.1rem;
`;

export const ExampleBox = styled.div`
  background-color: #e8f4f8;
  border-left: 4px solid #3498db;
  padding: 15px;
  margin: 15px 0;
  border-radius: 4px;
`;

export const ExampleText = styled.p`
  margin: 8px 0;
  color: #2c3e50;
  font-style: italic;
`;

export const KeyPoint = styled.p`
  font-weight: bold;
  color: black;
  margin: 15px 0 8px 0;
  font-size: 1.1rem;
`;

export const SummaryBox = styled.div`
  background-color: #eafaf1;
  /* border: 2px solid #27ae60; */
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
`;

export const FormationTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

export const FormationTableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8f9fa;
  }
  
  &:hover {
    background-color: #e9ecef;
  }
`;

export const FormationTableHeader = styled.th`
  background-color: #4a6fa5;
  color: white;
  padding: 12px 15px;
  text-align: left;
  font-weight: 600;
`;

export const FormationTableCell = styled.td`
  padding: 12px 15px;
  border-bottom: 1px solid #dee2e6;
  color: #495057;
`;

export const CaseBadge = styled.div`
  display: inline-block;
  background-color: #6f42c1;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-weight: bold;
  margin: 15px 0 10px 0;
  font-size: 1.1rem;
`;

export const SectionDivider = styled.hr`
  border: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, #4a6fa5, transparent);
  margin: 25px 0;
`;

export const NegativeFormationSection = styled.div`
  padding: 15px;
  background-color: #fff0f0;
  border-radius: 8px;
  margin: 15px 0;
`;

export const NegativeExample = styled.div`
  padding: 12px;
  background-color: #ffe6e6;
  border-radius: 8px;
  margin: 10px 0;
`;

export const FunFactBox = styled.div`
  padding: 15px;
  background-color: #e6f7ff;
  border-radius: 8px;
  margin: 15px 0;
  /* border-left: 4px solid #1890ff; */
  
  span {
    font-weight: bold;
    color: #1890ff;
  }
`;

export const EncouragementText = styled.p`
  font-size: 1.2rem;
  color: #6f42c1;
  text-align: center;
  margin: 20px 0;
  font-style: italic;
`;

export const Highlight = styled.span`
  background-color: #fffacd;
  padding: 2px 5px;
  border-radius: 3px;
  font-weight: bold;
`;

export const CaseContainer = styled.div`
  margin-bottom: 25px;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
`;

export const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CaseUsageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const UsageItem = styled.div`
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 8px;
  /* border-left: 4px solid #6f42c1; */
`;

export const ColorCodedExample = styled.div`
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin: 15px 0;
  line-height: 2;
  
  div {
    margin: 8px 0;
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0;
  flex-wrap: wrap;
`;

export const TabButton = styled.button<{ active: boolean }>`
  padding: 12px 20px;
  background-color: ${props => props.active ? ' #0066cc' : '#f0f0f0'};
  color: ${props => props.active ? 'white' : '#333'};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  transition: all 0.3s;
  
  &:hover {
    background-color: ${props => props.active ? '#6f42c1' : '#e0e0e0'};
  }
`;

export const InteractiveExample = styled.div`
  padding: 20px;
  background-color: #f0f8ff;
  border-radius: 8px;
  border: 1px solid #4682b4;
  margin: 20px 0;
  
  .exercise {
    margin: 15px 0;
    padding: 10px;
    background-color: white;
    border-radius: 6px;
    
    .options {
      display: flex;
      gap: 10px;
      margin-top: 10px;
      flex-wrap: wrap;
      
      button {
        padding: 8px 12px;
        background-color: #e6f7ff;
        border: 1px solid #91d5ff;
        border-radius: 4px;
        cursor: pointer;
        
        &:hover {
          background-color: #bae7ff;
        }
      }
    }
  }
`;

export const WarningBox = styled.div`
  padding: 15px;
  background-color: #fff4e6;
  border-radius: 8px;
  border-left: 4px solid #ffa940;
  margin: 15px 0;
  
  span {
    font-weight: bold;
    color: #ffa940;
  }
`;

export const PriorityIndicator = styled.div`
  padding: 20px;
  background-color: #f9f0ff;
  border-radius: 8px;
  /* border: 1px solid #d3adf7; */
  margin: 20px 0;
  text-align: center;
  overflow:word-wrap;
  
  .priority-chain {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    
    .priority-item {
      display: flex;
      align-items: center;
      margin: 0 10px;
      
      .number {
        display: inline-block;
        width: 25px;
        height: 25px;
        background-color: #722ed1;
        color: white;
        border-radius: 50%;
        line-height: 25px;
        margin-right: 8px;
      }
      
      .case {
        font-weight: bold;
        color: #722ed1;
      }
      
      .arrow {
        margin-left: 10px;
        color: #722ed1;
        font-weight: bold;
      }
    }
  }
  
  .explanation {
    font-style: italic;
    color: #722ed1;
  }
`;