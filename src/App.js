// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import AcademicHistory from "./sections/AcademicHistory";
import Technologies from "./sections/Technologies";
import Footer from "./components/Footer";
// import Projects from "./sections/Contact";
// Removed imports for AcademicHistory, Technologies, and Contact

import Button from "./components/Button/Button"

import "./styles/Global.css";
import "./components/Button/styles.css";
import "./components/Button/button.css";


function App() {
  return (
    <div>
      <Navbar />
      {/* Sections for smooth scrolling */}
      <AboutMe />
      <Projects />
      <AcademicHistory />
      <Technologies />
      <Footer/>
    </div>
  );
}

export default App;
