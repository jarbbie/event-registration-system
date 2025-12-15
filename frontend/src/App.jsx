import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home.jsx';
import Attendees from './Attendees.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav class="nav">
          <Link to="/">Register</Link> | <Link to="/attendees">View List</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attendees" element={<Attendees />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;