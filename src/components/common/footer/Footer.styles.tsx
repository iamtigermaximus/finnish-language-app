"use client";
// components/MiniFooter.tsx
import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #002e83; /* Same as navbar */
  color: white;
  padding: 1rem 0; /* py-4 */
  margin-top: 2rem; /* mt-8 */
`;

export const Container = styled.div`
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem; /* px-4 */
  padding-right: 1rem; /* px-4 */
  text-align: center;

  @media (min-width: 640px) {
    max-width: 640px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem; /* space-y-2 */

  @media (min-width: 640px) {
    flex-direction: row;
    gap: 0;

    & > *:not(:last-child) {
      margin-right: 2rem;
    }
  }
`;

export const AppName = styled.span`
  color: white;
`;

export const Separator = styled.span`
  color: white;
  display: none;

  @media (min-width: 640px) {
    display: inline;
  }
`;

export const PromoLink = styled.a`
  color: white;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: white;
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-thickness: 2px;
  }
`;
