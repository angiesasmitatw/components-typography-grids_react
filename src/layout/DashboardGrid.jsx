import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  GridColumn,
  GridContainer,
  Overlay,
  Flex,
} from '../components/commons';

const NO_OF_COLUMNS = 12;

const DashboardGridContainer = styled(GridContainer)`
  max-width: 1250px;
  width: 100%;
  align-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const renderGridColumns = () => {
  return Array.from(Array(NO_OF_COLUMNS)).map(_ => <GridColumn />);
};

const DashboardGrid = ({ isInactive }) => {
  return (
    <Overlay isInactive={isInactive}>
      <Flex justifyContent="center">
        <DashboardGridContainer>{renderGridColumns()}</DashboardGridContainer>
      </Flex>
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
