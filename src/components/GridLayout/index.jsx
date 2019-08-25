import React from 'react';
import { GridColumn } from '../commons';

const NO_OF_COLUMNS = 12;

export const renderGridColumns = () => {
  return Array.from(Array(NO_OF_COLUMNS)).map(_ => <GridColumn />);
};
