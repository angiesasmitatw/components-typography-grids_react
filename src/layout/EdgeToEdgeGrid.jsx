import React from 'react';
import PropTypes from 'prop-types';
import { GridContainer, Overlay } from '../components/commons';
import { renderGridColumns } from '../components/GridLayout';

const EdgeToEdgeGrid = ({ isInactive }) => {
  return (
    <Overlay isInactive={isInactive}>
      <GridContainer>{renderGridColumns()}</GridContainer>
    </Overlay>
  );
};

export default EdgeToEdgeGrid;

EdgeToEdgeGrid.propTypes = {
  isInactive: PropTypes.bool,
};

EdgeToEdgeGrid.defaultProps = {
  isInactive: false,
};
