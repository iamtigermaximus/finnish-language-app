'use client';

import styled from 'styled-components';
import { breakpoints as bp } from '../../lib/utils/layout';

export const Container = styled.div`
  padding: 10px;
  height: 100%;
  z-index: 99;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${bp.md}) {
    padding: 20px 50px;
  }
`;
