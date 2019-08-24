import styled from 'styled-components';
import Breakpoint from '../../../themes/Breakpoints';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 5px;
  @media ${Breakpoint.sm} {
    gap: 10px;
  }
  @media ${Breakpoint.md} {
    gap: 20px;
  }
`;
