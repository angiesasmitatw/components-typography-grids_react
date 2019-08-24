import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GridColumn, GridContainer, Overlay } from '../components/commons';

const NO_OF_COLUMNS = 12;

const DashboardGridContainer = styled(GridContainer)`
  margin-right: 100px;
  margin-left: 100px;
`;

const renderGridColumns = () => {
  return Array.from(Array(NO_OF_COLUMNS)).map(_ => <GridColumn />);
};

const DashboardGrid = ({ isInactive }) => {
  return (
    <Overlay isInactive={isInactive}>
      <DashboardGridContainer>{renderGridColumns()}</DashboardGridContainer>
    </Overlay>
  );
};

export default DashboardGrid;

DashboardGrid.propTypes = {
  isInactive: PropTypes.bool,
};

DashboardGrid.defaultProps = {
  isInactive: false,
};
