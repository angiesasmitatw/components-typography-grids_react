/* eslint-disable react/button-has-type */
// Button should have a type
// https://dev.to/clairecodes/why-its-important-to-give-your-html-button-a-type-58k9

import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, type, onSubmit, ...props }) => {
  return (
    <button type={type} onSubmit={onSubmit} {...props}>
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onSubmit: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  onSubmit: () => {},
};
