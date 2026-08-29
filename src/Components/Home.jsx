import React from "react";
import { Link } from "react-router-dom";
import ranaImage from "../assets/rana.jpeg";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-950 px-6 pb-16 pt-28 text-white"
    >
      <div className="mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center gap-12 lg:flex-row">
        {/* LEFT SIDE */}
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-purple-500">
            Welcome to my portfolio
          </p>

          <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="text-purple-500">Sunain</span>
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-gray-300 sm:text-3xl">
            Frontend Developer
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-400 lg:mx-0">
            I build modern, responsive and user-friendly websites using React,
            JavaScript, HTML, CSS and Tailwind CSS.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Link
              to="/projects"
              className="rounded-xl bg-purple-600 px-7 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-purple-700"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="rounded-xl border border-purple-500 px-7 py-3 font-semibold text-purple-400 transition duration-300 hover:bg-purple-600 hover:text-white"
            >
              Contact Me
            </Link>
          </div>

          {/* SOCIAL LINKS */}
          <div className="mt-10 flex justify-center gap-5 lg:justify-start">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 px-5 py-2 text-gray-400 transition duration-300 hover:border-purple-500 hover:text-purple-500"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 px-5 py-2 text-gray-400 transition duration-300 hover:border-purple-500 hover:text-purple-500"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex w-full justify-center lg:w-1/2">
          <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-purple-500/30 bg-purple-600/10 shadow-[0_0_80px_rgba(168,85,247,0.25)] sm:h-96 sm:w-96">
            <div className="h-56 w-56 overflow-hidden rounded-full border-2 border-purple-500 bg-gray-900 sm:h-72 sm:w-72">
              <img
                src={ranaImage}
                alt="Sunain"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;