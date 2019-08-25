import {
  alignItems,
  alignContent,
  justifyContent,
  flexWrap,
  flexBasis,
  flexDirection,
  flex,
  justifySelf,
  alignSelf,
  order,
  display,
  maxWidth,
  minWidth,
  width,
  height,
  maxHeight,
  minHeight,
  position,
  size,
  space,
  padding,
  borders,
  boxShadow,
  borderRadius,
  overflow,
} from 'styled-system';
import styled from 'styled-components';

const Box = styled.div`
    ${space}
    ${alignItems}
    ${alignContent}
    ${justifyContent}
    ${flexWrap}
    ${flexBasis}
    ${flexDirection}
    ${flex}
    ${justifySelf}
    ${alignSelf}
    ${order}
    ${display}
    ${maxWidth}
    ${minWidth}
    ${position}
    ${width}
    ${height}
    ${maxHeight}
    ${minHeight}
    ${size}
    ${padding}
    ${borders}
    ${boxShadow}
    ${borderRadius}
    ${overflow}
  `;

export default Box;
