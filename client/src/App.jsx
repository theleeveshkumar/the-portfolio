import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import global styles first
import './index.css';

// Then import components
import Header from './components/header.jsx';
import Home from './pages/home.jsx';
import Skills from './pages/skills.jsx';
import Projects from './pages/projects.jsx';
import Resume from './pages/resume.jsx';
import Contact from './pages/contact.jsx';


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} /> 
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;