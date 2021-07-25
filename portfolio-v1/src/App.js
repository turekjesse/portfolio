import { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import './App.css';

import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Hobbies from './components/Hobbies/Hobbies';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';

function App() {
  const breakpoint = 720

  const useViewPortWidth = () => {
    const [width, setWidth] = useState(window.innerWidth)
  
    const handleWindowResize = () => {
      setWidth(window.innerWidth)
      window.addEventListener('resize', handleWindowResize)
    }
  
    const killWindowResize = () => {
      return () => window.removeEventListener('resize', handleWindowResize)
    } 
  
    useEffect(() => {
      handleWindowResize()
      killWindowResize()
    },[])

    return { width };
  }

  return (
    <>
    <Route path="/" exact component={Home}/>
    <Route
      path="/about"
      render={ () => <About breakpoint={breakpoint}
      useViewPortWidth={useViewPortWidth} />}
    />
    <Route
      path="/projects"
      render={ () => <Projects breakpoint={breakpoint}
      useViewPortWidth={useViewPortWidth} />}
    />
    <Route
      path="/experience"
      render={ () => <Experience breakpoint={breakpoint}
      useViewPortWidth={useViewPortWidth} />}
    />
    <Route
      path="/hobbies"
      render={ () => <Hobbies breakpoint={breakpoint}
      useViewPortWidth={useViewPortWidth} />}
    />
    </>
  );
}

export default App;
