import React from 'react';
import HomePage from './pages/homepage';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import DownloadResume from './components/resume';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for HomePage */}
        <Route path="/" element={<HomePage />} />

        {/* Redirect for unmatched routes */}
        <Route path="*" element={<Navigate to="/" />} />
        <Route component={DownloadResume} />
      </Routes>
    </Router>
  );
}

export default App;
