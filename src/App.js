import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';

function App() {
  return (
      <>
        <Router>
        <Navbar />
          <Routes>
            <Route index="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </Router>
      </>
  );
}

export default App;
