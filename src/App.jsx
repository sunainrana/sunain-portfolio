import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
    </>
  );
};

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        {/* GitHub Pages root */}
        <Route path="/" element={<Navigate to="/Home" replace />} />

        {/* Home */}
        <Route path="/Home" element={<HomePage />} />

        {/* Projects */}
        <Route path="/projects" element={<Projects />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

        {/* Invalid URL */}
        <Route path="*" element={<Navigate to="/Home" replace />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;