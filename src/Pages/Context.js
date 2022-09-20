import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const [isToggle, setIsToggle] = useState(true);
  const [country0, setCountry0] = useState([]);

  useEffect(() => {
    const getCountry = async () => {
      const api = await fetch("https://restcountries.com/v3.1/all");
      const data = await api.json();

      setCountry0(data);

      console.log(data);
    }
    getCountry()
  }, [])

  
  useEffect(() => {
    console.log(isToggle);
  }, [isToggle]);
  return (
    <ThemeContext.Provider value={{ isToggle, setIsToggle, country0 }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
