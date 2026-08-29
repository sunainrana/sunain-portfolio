import React, { useState } from "react";

const stats = [
  {
    number: "10+",
    label: "Projects",
    description: "Completed & practice builds",
  },
  {
    number: "2+",
    label: "Years Learning",
    description: "Continuous development",
  },
  {
    number: "5+",
    label: "Technologies",
    description: "Modern frontend stack",
  },
  {
    number: "100%",
    label: "Dedication",
    description: "Focused on clean work",
  },
];

const technologies = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind CSS",
];

const About = () => {
  const [selectedStat, setSelectedStat] = useState(null);

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-[#050816] px-4 py-16 text-white sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28"
    >
      {/* ================= BACKGROUND ================= */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(168,85,247,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,85,247,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        }}
      />

      <div className="pointer-events-none absolute -left-40 top-1/4 h-[350px] w-[350px] rounded-full bg-purple-600/10 blur-[110px] sm:h-[450px] sm:w-[450px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[110px] sm:h-[450px] sm:w-[450px]" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* ================= HEADING ================= */}
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12 md:mb-16">
          <div className="mb-3 flex items-center justify-center gap-2 sm:mb-4 sm:gap-3">
            <span className="h-[2px] w-6 rounded-full bg-purple-500 sm:w-8" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-purple-400 sm:text-xs md:text-sm">
              Get To Know Me
            </p>

            <span className="h-[2px] w-6 rounded-full bg-purple-500 sm:w-8" />
          </div>

          <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl px-2 text-sm leading-6 text-gray-400 sm:mt-5 sm:text-base sm:leading-7">
            A little about who I am, what I build and the technologies I use
            to create modern web experiences.
          </p>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-12 xl:gap-16">
          {/* ================= LEFT CARD ================= */}
          <div className="w-full">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl transition duration-300 sm:rounded-3xl sm:p-7 md:p-8 md:hover:border-purple-500/30 lg:p-9">
              {/* Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl sm:h-52 sm:w-52" />

              {/* Badge */}
              <div className="relative mb-5 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-2 sm:mb-6 sm:px-4">
                <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-50" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-400 sm:h-2.5 sm:w-2.5" />
                </span>

                <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-purple-300 sm:text-xs sm:tracking-[0.16em]">
                  Frontend Developer
                </span>
              </div>

              {/* Heading */}
              <h3 className="relative text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
                Building clean and{" "}
                <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                  modern
                </span>{" "}
                web experiences.
              </h3>

              {/* Description */}
              <p className="relative mt-5 text-sm leading-7 text-gray-400 sm:mt-6 sm:text-base sm:leading-8">
                I'm a passionate frontend developer focused on creating
                responsive, visually clean and user-friendly websites. I enjoy
                transforming ideas into functional interfaces that feel smooth
                and intuitive to use.
              </p>

              <p className="relative mt-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                I work with React, JavaScript, HTML, CSS and Tailwind CSS to
                build reusable interfaces, responsive layouts and modern
                frontend experiences.
              </p>

              {/* Technologies */}
              <div className="relative mt-6 flex flex-wrap gap-2 sm:mt-7 sm:gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[11px] font-medium text-gray-300 transition duration-300 sm:px-4 sm:text-xs md:hover:-translate-y-1 md:hover:border-purple-500/40 md:hover:bg-purple-500/10 md:hover:text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Button */}
              <div className="relative mt-7 sm:mt-9">
                <a
                  href="#contact"
                  className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(147,51,234,0.25)] transition duration-300 active:scale-95 sm:w-auto sm:px-7 md:hover:-translate-y-1 md:hover:shadow-[0_15px_45px_rgba(147,51,234,0.4)]"
                >
                  <span className="relative z-10">Let's Talk</span>

                  <svg
                    className="relative z-10 h-4 w-4 transition-transform duration-300 group-active:translate-x-1 md:group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* ================= STATS ================= */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {stats.map((stat, index) => {
              const isSelected = selectedStat === index;

              return (
                <button
                  key={stat.label}
                  type="button"
                  onClick={() => setSelectedStat(index)}
                  className={`group relative w-full overflow-hidden rounded-2xl border p-5 text-left backdrop-blur-md transition-all duration-500 sm:p-6 ${
                    isSelected
                      ? "scale-[0.99] border-purple-500/50 bg-purple-500/[0.08] shadow-[0_20px_50px_rgba(147,51,234,0.18)]"
                      : "border-white/10 bg-white/[0.035] md:hover:-translate-y-2 md:hover:border-purple-500/40 md:hover:bg-purple-500/[0.06]"
                  }`}
                >
                  {/* Number + Index */}
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <h4 className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-3xl font-black text-transparent sm:text-4xl">
                      {stat.number}
                    </h4>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold transition-all duration-300 sm:h-9 sm:w-9 sm:text-xs ${
                        isSelected
                          ? "scale-110 border-purple-400/40 bg-purple-500/25 text-purple-200"
                          : "border-purple-500/20 bg-purple-500/10 text-purple-300"
                      }`}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  {/* Label */}
                  <p className="relative z-10 mt-4 text-base font-semibold text-white sm:mt-5 sm:text-lg">
                    {stat.label}
                  </p>

                  {/* Description */}
                  <p className="relative z-10 mt-1.5 text-xs leading-5 text-gray-500 sm:mt-2 sm:text-sm sm:leading-6">
                    {stat.description}
                  </p>

                  {/* ================= PERSISTENT LINE ================= */}
                  <div className="relative z-10 mt-4 h-[3px] w-full overflow-hidden rounded-full bg-white/[0.06] sm:mt-5">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 transition-all duration-500 ease-out ${
                        isSelected
                          ? "w-full"
                          : "w-12 md:group-hover:w-full"
                      }`}
                    />
                  </div>

                  {/* Glow */}
                  <div
                    className={`pointer-events-none absolute -bottom-16 -right-16 h-36 w-36 rounded-full blur-3xl transition-all duration-500 ${
                      isSelected
                        ? "bg-purple-500/15"
                        : "bg-purple-500/0 md:group-hover:bg-purple-500/10"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= BOTTOM INFO ================= */}
        <div className="mt-12 grid grid-cols-1 gap-6 border-t border-white/[0.06] pt-8 text-center sm:mt-14 sm:grid-cols-3 sm:gap-5 sm:text-left md:mt-16 md:pt-10">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-600 sm:text-xs sm:tracking-[0.2em]">
              Focus
            </p>

            <p className="mt-2 text-sm font-medium text-gray-300 sm:text-base">
              Responsive Web Design
            </p>
          </div>

          <div className="sm:text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-600 sm:text-xs sm:tracking-[0.2em]">
              Currently
            </p>

            <p className="mt-2 text-sm font-medium text-gray-300 sm:text-base">
              Improving React Skills
            </p>
          </div>

          <div className="sm:text-right">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-600 sm:text-xs sm:tracking-[0.2em]">
              Goal
            </p>

            <p className="mt-2 text-sm font-medium text-gray-300 sm:text-base">
              Better User Experiences
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;