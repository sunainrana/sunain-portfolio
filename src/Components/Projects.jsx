import React, { useRef, useState } from "react";

import bookStoreImage from "../assets/OIP.jpg";
import knowledgeImage from "../assets/d.jpg";
import hospitalImage from "../assets/po.webp";
import portfolioImage from "../assets/port.png";
import taskImage from "../assets/task.webp";

const projects = [
  {
    title: "Online Book Store",
    description:
      "A full stack online book store built with React, Node.js, Express and MongoDB.",
    image: bookStoreImage,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "",
    demo: "",
  },
  {
    title: "Knowledge Exchange System",
    description:
      "A platform for sharing knowledge, uploading notes and exploring different courses.",
    image: knowledgeImage,
    technologies: ["React", "Node.js", "MongoDB"],
    github: "",
    demo: "",
  },
  {
    title: "Hospital Management System",
    description:
      "A management system for patients, doctors, appointments and hospital records.",
    image: hospitalImage,
    technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
    github: "",
    demo: "",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern responsive developer portfolio built with React and Tailwind CSS.",
    image: portfolioImage,
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    github: "",
    demo: "",
  },
  {
    title: "Task Management App",
    description:
      "A task management application where users can create and manage their daily tasks.",
    image: taskImage,
    technologies: ["React", "Node.js", "MongoDB"],
    github: "",
    demo: "",
  },
];

const Projects = () => {
  const [current, setCurrent] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef(0);

  const project = projects[current];

  const nextProject = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
    setDragOffset(0);
  };

  const previousProject = () => {
    setCurrent(
      (prev) => (prev - 1 + projects.length) % projects.length
    );
    setDragOffset(0);
  };

  const handlePointerDown = (e) => {
    setIsDragging(true);
    startX.current = e.clientX;

    if (e.currentTarget.setPointerCapture) {
      e.currentTarget.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;

    const difference = e.clientX - startX.current;

    const limitedOffset = Math.max(-120, Math.min(120, difference));

    setDragOffset(limitedOffset);
  };

  const handlePointerUp = (e) => {
    if (!isDragging) return;

    setIsDragging(false);

    const difference = e.clientX - startX.current;

    if (difference < -60) {
      nextProject();
      return;
    }

    if (difference > 60) {
      previousProject();
      return;
    }

    setDragOffset(0);
  };

  const handlePointerCancel = () => {
    setIsDragging(false);
    setDragOffset(0);
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden bg-[#050816] px-4 py-16 text-white sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28"
    >
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(168,85,247,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,85,247,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Background Glows */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[420px] w-[420px] rounded-full bg-purple-600/10 blur-[130px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12 md:mb-14">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 rounded-full bg-purple-500" />

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-400 sm:text-sm">
              My Work
            </p>

            <span className="h-[2px] w-8 rounded-full bg-purple-500" />
          </div>

          <h1 className="text-3xl font-black sm:text-4xl md:text-5xl lg:text-6xl">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Swipe on mobile or drag on desktop to explore my projects.
          </p>
        </div>

        {/* Top Counter */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-600 sm:text-xs">
            Featured Project
          </p>

          <p>
            <span className="text-base font-bold text-purple-400 sm:text-lg">
              {String(current + 1).padStart(2, "0")}
            </span>

            <span className="ml-1 text-xs text-gray-600">
              / {String(projects.length).padStart(2, "0")}
            </span>
          </p>
        </div>

        {/* Slider */}
        <div
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          className={`touch-pan-y select-none ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          <article
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:rounded-3xl"
            style={{
              transform: `translateX(${dragOffset}px) scale(${
                isDragging ? 0.99 : 1
              })`,
              transition: isDragging
                ? "none"
                : "transform 300ms ease",
            }}
          >
            {/* ================= IMAGE ================= */}
            <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-[#02040d] sm:aspect-video lg:aspect-[16/8]">
              <img
                key={project.title}
                src={project.image}
                alt={project.title}
                draggable={false}
                className="h-full w-full object-contain object-center p-2 transition-transform duration-500 sm:p-3 md:p-4 lg:p-5 md:group-hover:scale-[1.02]"
              />

              {/* Subtle Image Background */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050816]/40 via-transparent to-transparent" />

              {/* Project Number */}
              <div className="absolute left-3 top-3 rounded-xl border border-white/10 bg-black/60 px-3 py-2 text-[10px] font-bold text-white backdrop-blur-md sm:left-5 sm:top-5 sm:text-xs">
                {String(current + 1).padStart(2, "0")}
              </div>

              {/* Swipe */}
              <div className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/60 px-3 py-2 text-[9px] font-medium uppercase tracking-[0.12em] text-gray-300 backdrop-blur-md sm:right-5 sm:top-5 sm:text-[10px]">
                Swipe / Drag
              </div>
            </div>

            {/* ================= CONTENT ================= */}
            <div className="p-5 sm:p-7 md:p-8 lg:p-9">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-purple-400 sm:text-xs">
                Project
              </p>

              <h2 className="mt-2 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
                {project.title}
              </h2>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-purple-500/20 bg-purple-500/[0.08] px-3 py-1.5 text-[11px] font-medium text-purple-300 transition duration-300 sm:px-4 sm:py-2 sm:text-xs md:hover:-translate-y-1 md:hover:border-purple-500/40 md:hover:bg-purple-500/15"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onPointerDown={(e) => e.stopPropagation()}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-center text-sm font-semibold text-white transition duration-300 active:scale-95 md:hover:-translate-y-1 md:hover:border-purple-500/40 md:hover:bg-purple-500/10"
                  >
                    GitHub
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="cursor-not-allowed rounded-full border border-white/[0.06] bg-white/[0.02] px-6 py-3 text-sm font-semibold text-gray-600"
                  >
                    GitHub
                  </button>
                )}

                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onPointerDown={(e) => e.stopPropagation()}
                    className="rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition duration-300 active:scale-95 md:hover:-translate-y-1"
                  >
                    Live Demo
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="cursor-not-allowed rounded-full bg-purple-600/30 px-6 py-3 text-sm font-semibold text-purple-300/50"
                  >
                    Live Demo
                  </button>
                )}
              </div>
            </div>
          </article>
        </div>

        {/* ================= CONTROLS ================= */}
        <div className="mt-7 flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Arrows */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={previousProject}
              aria-label="Previous project"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-xl text-gray-400 transition duration-300 active:scale-90 md:hover:-translate-y-1 md:hover:border-purple-500/40 md:hover:bg-purple-500/10 md:hover:text-white"
            >
              ←
            </button>

            <button
              type="button"
              onClick={nextProject}
              aria-label="Next project"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-xl text-gray-400 transition duration-300 active:scale-90 md:hover:-translate-y-1 md:hover:border-purple-500/40 md:hover:bg-purple-500/10 md:hover:text-white"
            >
              →
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2.5">
            {projects.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => {
                  setCurrent(index);
                  setDragOffset(0);
                }}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  current === index
                    ? "w-8 bg-gradient-to-r from-purple-500 to-fuchsia-500 shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                    : "w-2.5 bg-white/10 active:bg-purple-500/50 md:hover:bg-purple-500/40"
                }`}
                aria-label={`View ${item.title}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="hidden min-w-[80px] justify-end sm:flex">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-300">
                {current + 1}
              </span>{" "}
              / {projects.length}
            </p>
          </div>
        </div>

        <p className="mt-7 text-center text-xs text-gray-600 md:hidden">
          ← Swipe left or right →
        </p>
      </div>
    </section>
  );
};

export default Projects;