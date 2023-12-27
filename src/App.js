import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Landing from './pages/Landing';
import Creative from './pages/Creative';
import Work from './pages/Work';
import Blog from './pages/Blog';
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-800 via-slate-600 to-slate-400 duration-300 m-0">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/creative" element={<Creative />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
