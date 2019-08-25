import React from 'react';
import PropTypes from 'prop-types';
import { GridColumn, GridContainer, Overlay } from '../components/commons';

const NO_OF_COLUMNS = 12;

const renderGridColumns = () => {
  return Array.from(Array(NO_OF_COLUMNS)).map(index => (
    <GridColumn key={index} />
  ));
};

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
