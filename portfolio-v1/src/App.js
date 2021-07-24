import { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import './App.css';

import About from './components/About/About';
import DesktopNav from './components/Nav/DesktopNav';
import Experience from './components/Experience/Experience';
import Hobbies from './components/Hobbies/Hobbies';
import Home from './components/Home/Home';
import MobileNav from './components/Nav/MobileNav';
import Projects from './components/Projects/Projects';

function App() {

  const [width, setWidth] = useState(window.innerWidth)

  const breakpoint = 720

  const handleWindowResize = () => {
    setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
  }

  const killWindowResize = () => {
    window.removeEventListener('resize', handleWindowResize)
  } 

  useEffect(() => {
    handleWindowResize()
    killWindowResize()
  })

  return (
    <>
    {
       width < breakpoint ? <MobileNav /> : <DesktopNav />
    }
    <Home/>
    </>
  );
}

export default App;
