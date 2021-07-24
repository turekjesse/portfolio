import { useState } from 'react'
import { Route } from 'react-router-dom'
import './App.css';

import DesktopNav from './components/Nav/DesktopNav';
import MobileNav from './components/Nav/MobileNav';
import Home from './components/Home/Home';

function App() {

  return (
    <>
    <DesktopNav/>
    <MobileNav/>
    <Home/>
    </>
  );
}

export default App;
