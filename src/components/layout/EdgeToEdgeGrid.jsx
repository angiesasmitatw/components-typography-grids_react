import React from 'react';
import { GridColumn, GridContainer } from '../commons';

const NO_OF_COLUMNS = 12;

const renderGridColumns = () => {
  return Array.from(Array(NO_OF_COLUMNS)).map(_ => <GridColumn />);
};

const EdgeToEdgeGrid = () => {
  return <GridContainer>{renderGridColumns()}</GridContainer>;
};

export default EdgeToEdgeGrid;
