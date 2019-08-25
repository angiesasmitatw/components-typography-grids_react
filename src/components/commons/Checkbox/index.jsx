import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  padding: 5px;
`;

const CheckboxText = styled.h4`
  padding: 10px;
`;

const Checkbox = ({ text, onChange, ...props }) => {
  return (
    <CheckboxContainer>
      <input type="checkbox" onChange={onChange} />
      <CheckboxText {...props}>{text}</CheckboxText>
    </CheckboxContainer>
  );
};

export default Checkbox;

Checkbox.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
