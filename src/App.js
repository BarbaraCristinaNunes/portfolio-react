import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Experience from './Components/Experience/Experience';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <>
      <NavBar/>
      <About/>
      <Experience/>
      <Projects/>
    </>
  );
}

export default App;
