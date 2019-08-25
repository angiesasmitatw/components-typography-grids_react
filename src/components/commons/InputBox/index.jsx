import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { margin } from 'styled-system';

const StyledInput = styled.input`
  ${props => props.gridColumn && `grid-column: ${props.gridColumn}`}
  height: 30px;
  ${margin}
`;

const InputBox = ({ gridColumn, placeholderText, marginTop }) => (
  <StyledInput
    type="input"
    placeholder={placeholderText}
    gridColumn={gridColumn}
    marginTop={marginTop}
  />
);

export default InputBox;

InputBox.propTypes = {
  gridColumn: PropTypes.string.isRequired,
  placeholderText: PropTypes.string.isRequired,
  marginTop: PropTypes.string,
};

InputBox.defaultProps = {
  marginTop: '0px',
};
