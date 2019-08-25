import React, { useState } from 'react';
import './App.css';
import DashboardGrid from './layout/DashboardGrid';
import EdgeToEdgeGrid from './layout/EdgeToEdgeGrid';
import PageController from './layout/PageController';
import SignUpPage from './layout/SignUp';

function App() {
  const [isDashboardGridInactive, setDashboardGrid] = useState(true);
  const [isEdgeToEdgeGridInactive, setEdgeToEdgeGrid] = useState(true);

  const toggleDashboardGrid = () => setDashboardGrid(!isDashboardGridInactive);
  const toggleEdgeToEdgeGrid = () =>
    setEdgeToEdgeGrid(!isEdgeToEdgeGridInactive);

  return (
    <div style={{ minWidth: '300px' }}>
      <SignUpPage />
      <EdgeToEdgeGrid isInactive={isEdgeToEdgeGridInactive} />
      <DashboardGrid isInactive={isDashboardGridInactive} />
      <PageController
        toggleDashboardGrid={toggleDashboardGrid}
        toggleEdgeToEdgeGrid={toggleEdgeToEdgeGrid}
      />
    </div>
  );
}

export default App;
