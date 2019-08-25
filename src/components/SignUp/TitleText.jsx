import styled from 'styled-components';
import PropTypes from 'prop-types';
import React from 'react';
import { Typography, Breakpoints } from '../../themes';

const StyledText = styled.h1`
  grid-column: 2/12;
  height: 28px;
  margin-bottom: 35px;
  ${{ ...Typography['style-1'] }}
  
  @media ${Breakpoints.sm} {
    text-align: center;
  }
`;

const TitleText = ({ text }) => {
  return <StyledText>{text}</StyledText>;
};

TitleText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TitleText;
