/* eslint-disable no-nested-ternary */
import PropTypes from 'prop-types';
import React from 'react';
import { useMediaPredicate } from 'react-media-hook';
import { InputBox } from '../commons';
import { Breakpoints } from '../../themes';

const SignUpInputBox = ({
  placeholderText,
  isAlwaysFullLengthField,
  isFirstHalf,
}) => {
  const biggerThanSmallScreen = useMediaPredicate(`(${Breakpoints.sm})`);

  const getGridColumn = () => {
    if (isAlwaysFullLengthField || !biggerThanSmallScreen) {
      if (biggerThanSmallScreen) {
        return '3/11';
      }
      return '2/12';
    }
    if (isFirstHalf) {
      return '3/7';
    }
    return '7/11';
  };
  return (
    <InputBox
      placeholderText={placeholderText}
      gridColumn={getGridColumn()}
      marginTop="25px"
    />
  );
};

export default SignUpInputBox;

SignUpInputBox.propTypes = {
  placeholderText: PropTypes.string.isRequired,
  isAlwaysFullLengthField: PropTypes.bool,

  isFirstHalf: PropTypes.bool,
};

SignUpInputBox.defaultProps = {
  isAlwaysFullLengthField: true,
  isFirstHalf: false,
};
