import React, { useEffect, useRef, useState } from "react";

const skills = [
  { name: "HTML", level: 90, category: "Frontend" },
  { name: "CSS", level: 85, category: "Frontend" },
  { name: "JavaScript", level: 85, category: "Language" },
  { name: "React", level: 80, category: "Frontend" },
  { name: "Tailwind CSS", level: 85, category: "Styling" },
  { name: "Node.js", level: 75, category: "Backend" },
  { name: "Express.js", level: 75, category: "Backend" },
  { name: "MongoDB", level: 70, category: "Database" },
];

const tags = [
  "Frontend",
  "Backend",
  "REST API",
  "Database",
  "Responsive Design",
  "Git",
  "GitHub",
  "Full Stack",
];

const Skills = () => {
  const sectionRef = useRef(null);

  const [animate, setAnimate] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
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

      <div className="pointer-events-none absolute -left-40 top-1/4 h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/[0.04] blur-[120px]" />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* ================= HEADING ================= */}

        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12 md:mb-16">
          <div className="mb-3 flex items-center justify-center gap-2 sm:mb-4 sm:gap-3">
            <span className="h-[2px] w-6 rounded-full bg-purple-500 sm:w-8" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-purple-400 sm:text-xs md:text-sm">
              What I Know
            </p>

            <span className="h-[2px] w-6 rounded-full bg-purple-500 sm:w-8" />
          </div>

          <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl px-2 text-sm leading-6 text-gray-400 sm:mt-5 sm:text-base sm:leading-7">
            Technologies and tools I use to build responsive, modern and
            user-friendly web applications.
          </p>
        </div>

        {/* ================= SKILLS GRID ================= */}

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
          {skills.map((skill, index) => {
            const isSelected = selectedSkill === index;

            return (
              <button
                key={skill.name}
                type="button"
                onClick={() => setSelectedSkill(index)}
                className={`group relative w-full overflow-hidden rounded-2xl border p-5 text-left backdrop-blur-md transition-all duration-500 sm:p-6 ${
                  isSelected
                    ? "scale-[0.99] border-purple-500/50 bg-purple-500/[0.08] shadow-[0_20px_50px_rgba(147,51,234,0.15)]"
                    : "border-white/10 bg-white/[0.035] md:hover:-translate-y-1 md:hover:border-purple-500/40 md:hover:bg-purple-500/[0.06] md:hover:shadow-[0_20px_50px_rgba(147,51,234,0.10)]"
                }`}
              >
                {/* Glow */}
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full blur-3xl transition-all duration-500 ${
                    isSelected
                      ? "bg-purple-500/15"
                      : "bg-purple-500/0 md:group-hover:bg-purple-500/10"
                  }`}
                />

                {/* Top Content */}
                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-purple-400/70 sm:text-xs">
                      {skill.category}
                    </p>

                    <h3
                      className={`text-base font-bold transition-colors duration-300 sm:text-lg ${
                        isSelected
                          ? "text-purple-300"
                          : "text-white md:group-hover:text-purple-300"
                      }`}
                    >
                      {skill.name}
                    </h3>
                  </div>

                  <div
                    className={`flex h-10 min-w-14 items-center justify-center rounded-xl border px-3 transition-all duration-300 ${
                      isSelected
                        ? "border-purple-500/40 bg-purple-500/20"
                        : "border-white/10 bg-white/[0.04] md:group-hover:border-purple-500/30 md:group-hover:bg-purple-500/10"
                    }`}
                  >
                    <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-sm font-bold text-transparent">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                {/* Progress Area */}
                <div className="relative z-10 mt-6">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-gray-600">
                      Proficiency
                    </span>

                    <span className="text-[10px] text-gray-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Progress Background */}
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                    {/* Progress Bar */}
                    <div
                      className="relative h-full rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-400 transition-[width] duration-[1500ms] ease-out"
                      style={{
                        width: animate ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 100}ms`,
                      }}
                    >
                      <div className="absolute inset-0 bg-white/10" />

                      <div className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.75)]" />
                    </div>
                  </div>

                  {/* Selected Line */}
                  <div className="mt-5 h-[2px] w-full overflow-hidden rounded-full bg-white/[0.05]">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 transition-all duration-500 ${
                        isSelected
                          ? "w-full"
                          : "w-10 md:group-hover:w-full"
                      }`}
                    />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* ================= TECHNOLOGY TAGS ================= */}

        <div className="mt-12 sm:mt-14 md:mt-16">
          <div className="mb-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-600">
              Technologies & Workflow
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {tags.map((tag, index) => {
              const isSelected = selectedTag === index;

              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSelectedTag(index)}
                  className={`rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300 sm:px-5 sm:text-sm ${
                    isSelected
                      ? "scale-105 border-purple-500/60 bg-purple-500/20 text-purple-200 shadow-[0_8px_25px_rgba(147,51,234,0.15)]"
                      : "border-white/10 bg-white/[0.035] text-gray-400 active:scale-95 md:hover:-translate-y-1 md:hover:border-purple-500/40 md:hover:bg-purple-500/10 md:hover:text-purple-300"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= BOTTOM INFO ================= */}

        <div className="mt-12 grid grid-cols-1 gap-6 border-t border-white/[0.06] pt-8 text-center sm:mt-14 sm:grid-cols-3 sm:gap-5 sm:text-left md:mt-16 md:pt-10">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-600 sm:text-xs">
              Main Focus
            </p>

            <p className="mt-2 text-sm font-medium text-gray-300 sm:text-base">
              React Development
            </p>
          </div>

          <div className="sm:text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-600 sm:text-xs">
              Styling
            </p>

            <p className="mt-2 text-sm font-medium text-gray-300 sm:text-base">
              Tailwind CSS
            </p>
          </div>

          <div className="sm:text-right">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-600 sm:text-xs">
              Workflow
            </p>

            <p className="mt-2 text-sm font-medium text-gray-300 sm:text-base">
              Git & GitHub
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;