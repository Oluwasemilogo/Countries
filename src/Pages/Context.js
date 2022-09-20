import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const [isToggle, setIsToggle] = useState(true);
  useEffect(() => {
    console.log(isToggle);
  }, [isToggle]);
  return (
    <ThemeContext.Provider value={{ isToggle, setIsToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
