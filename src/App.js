import React, { useContext } from "react";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Details from "./Pages/Details";
import ThemeProvider, { ThemeContext } from "./Pages/Context";
// import Context from "./Pages/Context";
// import Header from "./Pages/Header";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
