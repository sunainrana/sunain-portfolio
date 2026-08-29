import React, { useEffect, useState } from "react";
import ranaImage from "../assets/rana.jpeg";

const roles = [
  "Frontend Developer",
  "React Developer",
  "UI Developer",
];

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    } else if (isDeleting && displayText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 300);
    } else {
      timeout = setTimeout(
        () => {
          const nextLength = isDeleting
            ? displayText.length - 1
            : displayText.length + 1;

          setDisplayText(currentRole.slice(0, nextLength));
        },
        isDeleting ? 45 : 85
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050816] px-6 pt-24 text-white md:pt-28"
    >
      {/* ================= BACKGROUND ================= */}

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(168,85,247,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,85,247,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px",
          maskImage:
            "linear-gradient(to bottom, black 20%, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 20%, transparent 90%)",
        }}
      />

      {/* Purple Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-purple-600/20 blur-[120px]" />

      {/* Blue Glow */}
      <div className="pointer-events-none absolute -right-40 top-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* Bottom Glow */}
      <div className="pointer-events-none absolute bottom-[-220px] left-1/2 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-fuchsia-600/10 blur-[130px]" />

      {/* Small Decorative Glow */}
      <div className="pointer-events-none absolute left-[40%] top-[20%] h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_30px_10px_rgba(168,85,247,0.35)]" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-start gap-12 md:min-h-[calc(100vh-7rem)] md:grid-cols-2 md:items-center">
        {/* ================= IMAGE ================= */}
        <div className="order-1 flex justify-center md:order-2">
          <div className="group relative flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80 md:h-[410px] md:w-[410px]">
            {/* Big Glow */}
            <div className="absolute inset-6 rounded-full bg-gradient-to-br from-purple-600/40 via-fuchsia-500/20 to-cyan-500/30 blur-3xl transition duration-700 group-hover:scale-110" />

            {/* Rotated Ring */}
            <div className="absolute inset-4 rotate-6 rounded-full border border-purple-500/20 transition duration-700 group-hover:rotate-12" />

            {/* Second Ring */}
            <div className="absolute inset-8 -rotate-6 rounded-full border border-cyan-400/10 transition duration-700 group-hover:-rotate-12" />

            {/* Main Gradient Ring */}
            <div className="absolute inset-10 rounded-full bg-gradient-to-br from-purple-500 via-fuchsia-500 to-cyan-400 p-[2px] shadow-[0_0_70px_rgba(168,85,247,0.25)]">
              <div className="h-full w-full rounded-full bg-[#050816]" />
            </div>

            {/* Image */}
            <div className="relative h-60 w-60 overflow-hidden rounded-full border border-white/10 bg-gray-900 shadow-2xl transition duration-500 group-hover:scale-[1.03] sm:h-72 sm:w-72 md:h-80 md:w-80">
              <img
                src={ranaImage}
                alt="Sunain"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 via-transparent to-transparent" />
            </div>

            {/* Floating Dot */}
            <div className="absolute bottom-16 right-8 h-4 w-4 rounded-full border-4 border-[#050816] bg-green-400 shadow-[0_0_20px_rgba(74,222,128,0.8)] md:right-10" />
          </div>
        </div>

        {/* ================= TEXT ================= */}
        <div className="order-2 text-center md:order-1 md:text-left">
          {/* Hello */}
          <div className="mb-5 flex items-center justify-center gap-3 md:justify-start">
            <span className="h-[2px] w-8 rounded-full bg-purple-500" />

            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-purple-400">
              Hello, I'm
            </p>
          </div>

          {/* ================= NAME ================= */}
          <div className="relative inline-block">
            <h1
              className="relative text-5xl font-black tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl"
              style={{
                textShadow: "0 0 40px rgba(168, 85, 247, 0.15)",
              }}
            >
              <span className="bg-gradient-to-r from-white via-purple-100 to-purple-400 bg-clip-text text-transparent">
                SUNAIN
              </span>

              <span className="ml-1 text-purple-500">.</span>
            </h1>

            {/* Underline */}
            <div className="mt-3 flex items-center justify-center gap-2 md:justify-start">
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500" />

              <div className="h-1 w-3 rounded-full bg-purple-500/40" />

              <div className="h-1 w-2 rounded-full bg-purple-500/20" />
            </div>
          </div>

          {/* ================= TYPEWRITER ================= */}
          <div className="mt-7 flex min-h-[48px] items-center justify-center md:justify-start">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                {displayText}
              </span>

              <span className="ml-1 inline-block animate-pulse text-purple-400">
                |
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-7 text-gray-400 sm:text-base md:mx-0">
            I create modern, responsive and user-friendly websites using
            React, JavaScript and Tailwind CSS, with a focus on clean design
            and smooth user experiences.
          </p>

          {/* ================= BUTTONS ================= */}
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <a
              href="#projects"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(147,51,234,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(147,51,234,0.4)]"
            >
              <span className="relative z-10">View Projects</span>

              <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-fuchsia-600 to-purple-600 transition duration-300 group-hover:translate-y-0" />
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/[0.03] px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-purple-500/60 hover:bg-purple-500/10 hover:text-purple-300"
            >
              Contact Me
            </a>
          </div>

          {/* Small Status */}
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500 md:justify-start">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
            </span>

            <span>Available for new projects</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;