import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#050816] text-white">
      {/* ================= BACKGROUND ================= */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(168,85,247,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,85,247,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="pointer-events-none absolute -left-40 top-0 h-[350px] w-[350px] rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[350px] w-[350px] rounded-full bg-cyan-500/[0.07] blur-[120px]" />

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1fr] lg:gap-16">
          {/* ================= BRAND ================= */}

          <div className="sm:col-span-2 lg:col-span-1">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center"
              aria-label="Go to top"
            >
              <h2 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                <span className="bg-gradient-to-r from-white via-purple-100 to-purple-400 bg-clip-text text-transparent">
                  SUNAIN
                </span>

                <span className="text-purple-500">.</span>
              </h2>
            </button>

            <div className="mt-3 flex items-center gap-2">
              <span className="h-[3px] w-12 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500" />
              <span className="h-[3px] w-3 rounded-full bg-purple-500/30" />
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-400 sm:text-base">
              A frontend developer focused on building modern, responsive and
              user-friendly web experiences with clean design and smooth
              interactions.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-green-500/10 bg-green-500/[0.05] px-4 py-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-40" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
              </span>

              <span className="text-xs font-medium text-gray-400">
                Available for new projects
              </span>
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}

          <div>
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
                Navigation
              </p>

              <h3 className="mt-2 text-lg font-bold text-white">
                Quick Links
              </h3>
            </div>

            <nav className="flex flex-col items-start gap-1">
              <button
                type="button"
                onClick={() => scrollToSection("home")}
                className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-gray-400 transition-all duration-300 active:scale-[0.97] active:bg-purple-500/10 active:text-purple-300 md:hover:translate-x-1 md:hover:bg-white/[0.03] md:hover:text-purple-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500/40 transition-colors duration-300 group-active:bg-purple-400 md:group-hover:bg-purple-400" />
                Home
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("about")}
                className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-gray-400 transition-all duration-300 active:scale-[0.97] active:bg-purple-500/10 active:text-purple-300 md:hover:translate-x-1 md:hover:bg-white/[0.03] md:hover:text-purple-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500/40 transition-colors duration-300 group-active:bg-purple-400 md:group-hover:bg-purple-400" />
                About
              </button>

              <Link
                to="/projects"
                className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-gray-400 transition-all duration-300 active:scale-[0.97] active:bg-purple-500/10 active:text-purple-300 md:hover:translate-x-1 md:hover:bg-white/[0.03] md:hover:text-purple-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500/40 transition-colors duration-300 group-active:bg-purple-400 md:group-hover:bg-purple-400" />
                Projects
              </Link>

              <button
                type="button"
                onClick={() => scrollToSection("skills")}
                className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-gray-400 transition-all duration-300 active:scale-[0.97] active:bg-purple-500/10 active:text-purple-300 md:hover:translate-x-1 md:hover:bg-white/[0.03] md:hover:text-purple-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500/40 transition-colors duration-300 group-active:bg-purple-400 md:group-hover:bg-purple-400" />
                Skills
              </button>

              <Link
                to="/contact"
                className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-gray-400 transition-all duration-300 active:scale-[0.97] active:bg-purple-500/10 active:text-purple-300 md:hover:translate-x-1 md:hover:bg-white/[0.03] md:hover:text-purple-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-purple-500/40 transition-colors duration-300 group-active:bg-purple-400 md:group-hover:bg-purple-400" />
                Contact
              </Link>
            </nav>
          </div>

          {/* ================= SOCIAL LINKS ================= */}

          <div>
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
                Social
              </p>

              <h3 className="mt-2 text-lg font-bold text-white">
                Connect With Me
              </h3>
            </div>

            <p className="mb-6 max-w-sm text-sm leading-6 text-gray-500">
              You can contact me directly on WhatsApp or connect with me on
              Instagram and LinkedIn.
            </p>

            <div className="flex flex-wrap gap-3">
              {/* ================= WHATSAPP ================= */}

              <a
                href="https://wa.me/923258200787"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="group flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-gray-400 transition-all duration-300 active:scale-90 active:border-green-500/50 active:bg-green-500/15 active:text-green-400 md:hover:-translate-y-1 md:hover:border-green-500/40 md:hover:bg-green-500/10 md:hover:text-green-400 md:hover:shadow-[0_10px_30px_rgba(34,197,94,0.15)]"
              >
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-active:scale-110 md:group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.48A11.91 11.91 0 0 0 12.04 0C5.45 0 .09 5.36.09 11.95c0 2.1.55 4.16 1.59 5.97L0 24l6.23-1.63a11.94 11.94 0 0 0 5.81 1.48h.01C18.64 23.85 24 18.49 24 11.9c0-3.18-1.24-6.17-3.48-8.42ZM12.05 21.83h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.7.97.99-3.61-.23-.37a9.91 9.91 0 0 1-1.52-5.28c0-5.48 4.46-9.93 9.94-9.93a9.86 9.86 0 0 1 7.02 2.91 9.86 9.86 0 0 1 2.91 7.02c-.01 5.48-4.47 9.93-9.99 9.93Zm5.45-7.44c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
                </svg>
              </a>

              {/* ================= INSTAGRAM ================= */}

              <a
                href="https://www.instagram.com/sunainrana/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="@SUNAINRANA"
                className="group flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-gray-400 transition-all duration-300 active:scale-90 active:border-pink-500/50 active:bg-pink-500/15 active:text-pink-400 md:hover:-translate-y-1 md:hover:border-pink-500/40 md:hover:bg-pink-500/10 md:hover:text-pink-400 md:hover:shadow-[0_10px_30px_rgba(236,72,153,0.15)]"
              >
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-active:scale-110 md:group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              {/* ================= LINKEDIN ================= */}

              <a
                href="https://www.linkedin.com/in/sunain-rana-920a42392/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="group flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-gray-400 transition-all duration-300 active:scale-90 active:border-blue-500/50 active:bg-blue-500/15 active:text-blue-400 md:hover:-translate-y-1 md:hover:border-blue-500/40 md:hover:bg-blue-500/10 md:hover:text-blue-400 md:hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)]"
              >
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-active:scale-110 md:group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.94v5.666H9.351V9h3.414v1.561h.047c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286h-.002ZM5.337 7.433A2.062 2.062 0 1 1 5.337 3.31a2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9H7.12v11.452Z" />
                </svg>
              </a>
            </div>

            {/* ================= CONTACT INFO ================= */}

            <div className="mt-6 space-y-3">
              <a
                href="https://wa.me/923258200787"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-fit items-center gap-2 text-sm text-gray-500 transition-colors duration-300 hover:text-green-400"
              >
                <span className="font-medium text-gray-400 group-hover:text-green-400">
                  WhatsApp:
                </span>

                <span>0325 8200787</span>
              </a>

              <a
                href="https://www.instagram.com/sunainrana/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-fit items-center gap-2 text-sm text-gray-500 transition-colors duration-300 hover:text-pink-400"
              >
                <span className="font-medium text-gray-400 group-hover:text-pink-400">
                  Instagram:
                </span>

                <span>@SUNAINRANA</span>
              </a>

              <a
                href="https://www.linkedin.com/in/sunain-rana-920a42392/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-fit items-center gap-2 text-sm text-gray-500 transition-colors duration-300 hover:text-blue-400"
              >
                <span className="font-medium text-gray-400 group-hover:text-blue-400">
                  LinkedIn:
                </span>

                <span>Sunain Rana</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}

      <div className="relative z-10 border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
          <p className="text-xs text-gray-600 sm:text-sm">
            © {new Date().getFullYear()} SUNAIN. All Rights Reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-gray-400 transition-all duration-300 active:scale-95 active:border-purple-500/40 active:text-purple-300 md:hover:-translate-y-1 md:hover:border-purple-500/40 md:hover:bg-purple-500/10 md:hover:text-purple-300"
          >
            Back to top

            <svg
              className="h-3.5 w-3.5 transition-transform duration-300 group-active:-translate-y-1 md:group-hover:-translate-y-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;