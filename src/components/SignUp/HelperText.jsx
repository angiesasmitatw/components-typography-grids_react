import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';
import { Typography, Breakpoints } from '../../themes';

const StyledText = styled.p`
  grid-column: 2/12;
  margin-top: 10px;
  ${{ ...Typography['style-4'] }};
  @media ${Breakpoints.sm} {
    grid-column: 3/11;
  }
`;

const HelperText = ({ text }) => {
  return <StyledText>{text}</StyledText>;
};

HelperText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HelperText;
