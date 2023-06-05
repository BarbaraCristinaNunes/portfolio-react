import React from 'react';
import './App.css';
import NavBar from './Components/Header/NavBar';
import Experience from './Components/Experience/Experience';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="portfolio-react/" element={<About />} />
        <Route path="portfolio-react/about" element={<About />} />
        <Route path="portfolio-react/experience" element={<Experience />} />
        <Route path="portfolio-react/projects" element={<Projects />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
