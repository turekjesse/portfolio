import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";

import MobileNav from "./components/Nav/MobileNav";
import DesktopNav from "./components/Nav/DesktopNav";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Hobbies from "./components/Hobbies/Hobbies";
// import Home from './components/Home/Home';
import Home2 from "./components/Home/Home2";
import Projects from "./components/Projects/Projects";

function App() {
  const body = document.querySelector("body")

  const toggleInverted = () => {
    body.classList.toggle("inverted")
  }

  // DARK-MODE HANDLER:
  const [isInverted, setInverted] = useState(false);

  const handleInverted = () => {
    setInverted(!isInverted);
    toggleInverted()
  };

  // BREAKPOINT HANDLER:
  // WE USE THIS TO RENDER DIFFERENT COMPONENTS AT CERTAIN BREAKPOINTS
  const breakpoint = 990;
  const useViewPortWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
    };

    const killWindowResize = () => {
      return () => window.removeEventListener("resize", handleWindowResize);
    };

    useEffect(() => {
      handleWindowResize();
      killWindowResize();
      //eslint-disable-next-line
    }, []);

    return { width };
  };

  const { width } = useViewPortWidth();

  return (
    <>
      {width < breakpoint ? (
        <MobileNav isInverted={isInverted} handleInverted={handleInverted} />
      ) : (
        <DesktopNav isInverted={isInverted} handleInverted={handleInverted} />
      )}
      <Route
        path="/"
        exact
        render={() => (
          <Home2
            breakpoint={breakpoint}
            handleInverted={handleInverted}
            useViewPortWidth={useViewPortWidth}
            isInverted={isInverted}
          />
        )}
      />
      <Route
        path="/about"
        render={() => (
          <About
            breakpoint={breakpoint}
            handleInverted={handleInverted}
            useViewPortWidth={useViewPortWidth}
            isInverted={isInverted}
          />
        )}
      />
      <Route
        path="/projects"
        render={() => (
          <Projects
            breakpoint={breakpoint}
            useViewPortWidth={useViewPortWidth}
            handleInverted={handleInverted}
            isInverted={isInverted}
          />
        )}
      />
      <Route
        path="/experience"
        render={() => (
          <Experience
            breakpoint={breakpoint}
            useViewPortWidth={useViewPortWidth}
            handleInverted={handleInverted}
            isInverted={isInverted}
          />
        )}
      />
      <Route
        path="/hobbies"
        render={() => (
          <Hobbies
            breakpoint={breakpoint}
            useViewPortWidth={useViewPortWidth}
            handleInverted={handleInverted}
            isInverted={isInverted}
          />
        )}
      />
    </>
  );
}

export default App;
