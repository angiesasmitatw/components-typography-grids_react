import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Checkbox } from '../components/commons';
import { Colors, Typography } from '../themes';

const PageControllerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: ${Colors.pageControllerBackground};
  padding: 10px;
`;

const PageController = ({ toggleDashboardGrid, toggleEdgeToEdgeGrid }) => (
  <PageControllerContainer>
    <Checkbox
      text="Edge-to-edge Grid"
      onChange={toggleEdgeToEdgeGrid}
      style={Typography['style-2']}
    />
    <Checkbox
      text="Dashboard Grid"
      onChange={toggleDashboardGrid}
      style={Typography['style-2']}
    />
  </PageControllerContainer>
);

export default PageController;

PageController.propTypes = {
  toggleDashboardGrid: PropTypes.func.isRequired,
  toggleEdgeToEdgeGrid: PropTypes.func.isRequired,
};
