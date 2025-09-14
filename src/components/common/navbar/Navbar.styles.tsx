'use client';

import styled from 'styled-components';
import { breakpoints as bp } from '../../../lib/utils/layout';
import Link from 'next/link';

export const Navigation = styled.div`
  position: relative;
  width: 100%;
  height: 8vh;
  z-index: 1000;
  background-color: #002e83;

  @media (min-width: ${bp.lg}) {
    height: 10vh;
  }
`;

export const TextOverlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const TextOverlay = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  font-size: 1.25rem;
  font-weight: bold;
  white-space: nowrap;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
  z-index: 99;

  @media (min-width: ${bp.sm}) {
    font-size: 1.75rem;
  }

  @media (min-width: ${bp.md}) {
    font-size: 2rem;
  }

  @media (min-width: ${bp.lg}) {
    font-size: 3rem;
  }
`;

export const MenuContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  background-color: #002e83;
  padding: 8px 16px;
  z-index: 1001;
  align-items: center;
  height: 40px;

  @media (max-width: ${bp.md}) {
    display: none;
  }
`;

export const MenuLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  font-family: 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;
  padding: 8px 16px;
  display: inline-flex;
  align-items: center;
  height: 100%;

  &:hover {
    color: white;
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-thickness: 2px;
  }

  @media (min-width: ${bp.lg}) {
    font-size: 1.5rem;
  }
`;

export const BurgerMenu = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  background-color: #002e83;
  padding: 5px;

  span {
    width: 25px;
    height: 3px;
    background-color: white;
    border-radius: 2px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  }
  z-index: 1002;

  @media (max-width: ${bp.md}) {
    display: flex;
  }
`;

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  background-color: white;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 1002;
  gap: 20px;

  &.sidebar-open {
    transform: translateX(0);
  }

  a {
    color: #636363;
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: bold;
    &:hover {
      color: tomato;
    }
  }

  @media (min-width: ${bp.md}) {
    display: none;
  }
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  color: black;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: lightblue;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  z-index: 1001;

  &.backdrop-open {
    display: block;
  }

  @media (min-width: ${bp.md}) {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: 20px;
  margin-bottom: 100px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

  @media (min-width: ${bp.md}) {
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const SidebarLogoContainer = styled.div`
  margin-bottom: 10px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0);
  border: 1px solid #002e83;
  padding: 5px 10px;

  @media (min-width: ${bp.md}) {
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const MobileLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0);
  padding: 5px 10px;
  color: white;
  height: 8vh;

  @media (min-width: ${bp.md}) {
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    display: none;
  }
`;

export const LoginButtonContainer = styled.div`
  width: 100%;
  padding: 8px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

export const LoginButton = styled.button`
  margin-right: 10px;
  width: 100px;
  padding: 8px;
  background-color: tomato;
  color: white;
  cursor: pointer;
  border: none;
  font-size: 1rem;

  &:hover {
    background-color: #e64a19;
  }

  @media (min-width: ${bp.md}) {
    margin-right: 20px;
  }
`;

export const AccountStyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: block;
  padding: 8px 0;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

export const AccountDropdownContainer = styled.div``;

export const AccountLogoutButton = styled.button`
  display: block;
  width: 100%;
  color: black;
  border: none;
  cursor: pointer;
  padding: 8px;
`;

// Dropdown Components - FIXED WITH STRING SELECTORS
export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 1002;
  min-width: 200px;
  display: none;
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;

  &:hover > div {
    display: block;
  }
`;

export const DropdownItem = styled(Link)`
  display: block;
  padding: 8px 12px;
  color: #002e83;
  text-decoration: none;
  font-size: 14px;
  white-space: nowrap;

  &:hover {
    background-color: #f0f0f0;
    color: tomato;
  }
`;

export const DropdownTrigger = styled.div`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  font-family: 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;
  cursor: pointer;
  padding: 8px 16px;
  display: inline-flex;
  align-items: center; /* Add this */
  height: 100%; /* Add this */

  &:hover {
    color: white;
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-thickness: 2px;
  }

  @media (min-width: ${bp.lg}) {
    font-size: 1.5rem;
  }
`;
