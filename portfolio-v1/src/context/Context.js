import React, { createContext, useState, useEffect } from "react";

const DarkModeContext = createContext();

function DarkModeProvider(props) {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("inverted") === "true"
  );

  useEffect(() => {    
      localStorage.setItem("inverted", darkMode)
      //eslint-disable-next-line
    }, [darkMode]);
    
    const handleDarkMode = () => {
      setDarkMode(!darkMode);
    };

  return (
    <>
      <DarkModeContext.Provider value={{ darkMode, handleDarkMode }}>
        {props.children}
      </DarkModeContext.Provider>
    </>
  );
}

export { DarkModeContext, DarkModeProvider };
