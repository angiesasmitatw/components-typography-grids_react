import React, { useState } from 'react';
import './App.css';
import DashboardGrid from './layout/DashboardGrid';
import EdgeToEdgeGrid from './layout/EdgeToEdgeGrid';
import PageController from './layout/PageController';

const SignUpPage = () => <div style={{ height: '100vh' }} />;

function App() {
  const [isDashboardGridInactive, setDashboardGrid] = useState(false);

  const toggleDashboardGrid = () => setDashboardGrid(!isDashboardGridInactive);

  return (
    <>
      <SignUpPage />
      <DashboardGrid isInactive={isDashboardGridInactive} />
      <EdgeToEdgeGrid isInactive={false} />
      <PageController toggleDashboardGrid={toggleDashboardGrid} />
    </>
  );
}

export default App;
