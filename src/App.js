import React from "react";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Details from "./Pages/Details";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
