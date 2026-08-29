import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Components
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

// ================= HOME PAGE =================

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="scroll-mt-24">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-24">
        <Skills />
      </section>
    </>
  );
};

// ================= APP =================

function App() {
  return (
    <BrowserRouter>

      {/* Navbar */}
      <Navbar />

      {/* Pages */}
      <Routes>

        {/* Main Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Home */}
        <Route
          path="/Home"
          element={<Home />}
        />

        {/* Projects */}
        <Route
          path="/projects"
          element={<Projects />}
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* Unknown URL */}
        <Route
          path="*"
          element={<Navigate to="/Home" replace />}
        />

      </Routes>

      {/* Footer */}
      <Footer />

    </BrowserRouter>
  );
};

export default App;