import React from 'react';
import './App.css';
import NavBar from './Components/Header/NavBar';
import Experience from './Components/Experience/Experience';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
function App() {
  console.log(`ei: ${process.env.PUBLIC_URL}`)
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<About />} />
        <Route path={`${process.env.PUBLIC_URL}/about`} element={<About />} />
        <Route path={`${process.env.PUBLIC_URL}/experience`} element={<Experience />} />
        <Route path={`${process.env.PUBLIC_URL}/projects`} element={<Projects />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
