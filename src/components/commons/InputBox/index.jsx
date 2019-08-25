import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { margin, width } from 'styled-system';

const StyledInput = styled.input`
  ${props => props.gridColumn && `grid-column: ${props.gridColumn}`}
  ${margin}
  ${width}
  height: 30px;
  padding-left: 10px;
`;

const InputBox = ({ gridColumn, placeholderText, marginTop, width }) => (
  <StyledInput
    type="input"
    placeholder={placeholderText}
    gridColumn={gridColumn}
    marginTop={marginTop}
    width={width}
  />
);

export default InputBox;

InputBox.propTypes = {
  gridColumn: PropTypes.string.isRequired,
  placeholderText: PropTypes.string.isRequired,
  marginTop: PropTypes.string,
  width: PropTypes.string,
};

InputBox.defaultProps = {
  marginTop: '0px',
  width: '100px',
};
