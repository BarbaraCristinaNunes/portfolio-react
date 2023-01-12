import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Experience from './Components/Experience/Experience';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const routes = [
    {
      path: "/",
      component: <About/>
    },
    {
      path: "/about",
      component: <About/>
    },
    {
      path: "/experience",
      component: <Experience/>
    },
    {
      path: "/projects",
      component: <Projects/>
    },
  ]
  return (
    <>
    {/* <NavBar/> */}
    <About/>
    <Experience/>
    <Projects/>
    {/* <Router>
      <NavBar/>
      <Routes>
        <Route 
          path="/about"
        />

        <Route 
          path="/experience"
        >
          <Experience/>
        </Route>
        <Route 
          path="/projects"
        />
        </Routes>
    </Router> */}
    </>
  );
}

export default App;
