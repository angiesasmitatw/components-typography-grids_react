import PropTypes from 'prop-types';

const PageController = ({ toggleDashboardGrid }) => (
  <div style={{ width: '100%', height: '20px' }}>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <input type="checkbox" onChange={toggleDashboardGrid} />
      <p>Dashboard Grid</p>
    </div>
  </div>
);

export default PageController;

PageController.propTypes = {
  toggleDashboardGrid: PropTypes.func.isRequired,
};
