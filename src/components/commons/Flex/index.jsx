import {
  alignItems,
  alignContent,
  justifyContent,
  flexWrap,
  flexBasis,
  height,
  flexDirection,
  space,
  borderRadius,
} from 'styled-system';
import styled from 'styled-components';
import Box from '../Box';

const Flex = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    ${alignItems}
    ${alignContent}
    ${justifyContent}
    ${flexWrap}
    ${flexBasis}
    ${flexDirection}
    ${height}
    ${space}
    ${borderRadius}
`;

export default Flex;
