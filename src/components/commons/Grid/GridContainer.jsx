import styled from 'styled-components';
import Breakpoint from '../../../themes/Breakpoints';
import Flex from '../Flex';

export const GridContainer = styled(Flex)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 5px;
  height: 100vh;
  @media ${Breakpoint.sm} {
    gap: 10px;
  }
  @media ${Breakpoint.md} {
    gap: 20px;
  }
`;
