import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import MobileNav from "./components/Nav/MobileNav";
import DesktopNav from "./components/Nav/DesktopNav";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import { Jobs, Skills } from "./data/ExperienceData";
import Hobbies from "./components/Hobbies/Hobbies";
// import Home from './components/Home/Home';
import Home2 from "./components/Home/Home2";
import Projects from "./components/Projects/Projects";
import { ProjectData } from "./data/ProjectData";

function App() {
  const body = document.querySelector("body");

  // DARK-MODE
  let storedInverted = window.localStorage.getItem("inverted");
  let storedInvertedVal = JSON.parse(storedInverted);

  const [isInverted, setInverted] = useState(storedInvertedVal);

  const handleInverted = () => {
    window.localStorage.setItem("inverted", !isInverted);
    setInverted(!isInverted);
    body.classList.toggle("inverted");
  };

  // PROJECT DATA REVERSE
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(ProjectData.reverse());
    //eslint-disable-next-line
  }, []);

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
      <Routes>
        <Route
          path="/"
          
          element={
            <Home2
              breakpoint={breakpoint}
              handleInverted={handleInverted}
              useViewPortWidth={useViewPortWidth}
              isInverted={isInverted}
            />
          }
        />
        <Route
          path="/about"
          element={
            <About
              breakpoint={breakpoint}
              handleInverted={handleInverted}
              useViewPortWidth={useViewPortWidth}
              isInverted={isInverted}
            />
          }
        />
        <Route
          path="/projects"
          element={
            <Projects
              breakpoint={breakpoint}
              useViewPortWidth={useViewPortWidth}
              handleInverted={handleInverted}
              isInverted={isInverted}
              projects={projects}
            />
          }
        />
        <Route
          path="/experience"
          element={
            <Experience
              breakpoint={breakpoint}
              useViewPortWidth={useViewPortWidth}
              handleInverted={handleInverted}
              isInverted={isInverted}
              Jobs={Jobs}
              Skills={Skills}
            />
          }
        />
        <Route
          path="/hobbies"
          element={
            <Hobbies
              breakpoint={breakpoint}
              useViewPortWidth={useViewPortWidth}
              handleInverted={handleInverted}
              isInverted={isInverted}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
