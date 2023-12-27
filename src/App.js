import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Landing from './pages/Landing';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-800 via-slate-600 to-slate-400 duration-300 m-0">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
