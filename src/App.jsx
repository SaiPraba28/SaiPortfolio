import React from "react";

import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Connect from "./pages/Connect";

import Footer from "./components/Footer";

const Trackers = () => {
  const location = useLocation();
  return (
    <>
      {/* <Analytics />      
      <SpeedInsights /> */}   
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<Work />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>

      <Footer />

      <Trackers />
    </Router>
  );
};

export default App;