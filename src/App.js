import React from 'react';
import './App.css';
import NavBar from './Components/Header/NavBar';
import Experience from './Components/Experience/Experience';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="about" element={<About />} />
        <Route path="experience" element={<Experience />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
