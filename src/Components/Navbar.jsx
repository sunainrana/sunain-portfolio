import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingSection, setPendingSection] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  // ================= CLOSE MOBILE MENU ON ROUTE CHANGE =================
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // ================= SCROLL AFTER NAVIGATION =================
  useEffect(() => {
    if (!pendingSection) return;

    if (location.pathname !== "/Home" && location.pathname !== "/") {
      return;
    }

    const scrollToTarget = () => {
      const section = document.getElementById(pendingSection);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        setPendingSection(null);
      }
    };

    const frame1 = requestAnimationFrame(() => {
      const frame2 = requestAnimationFrame(scrollToTarget);

      return () => cancelAnimationFrame(frame2);
    });

    return () => cancelAnimationFrame(frame1);
  }, [location.pathname, pendingSection]);

  // ================= HOME =================
  const goHome = () => {
    setIsOpen(false);

    if (location.pathname === "/Home" || location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    navigate("/Home");
  };

  // ================= ABOUT / SKILLS =================
  const goToSection = (id) => {
    setIsOpen(false);

    if (location.pathname !== "/Home" && location.pathname !== "/") {
      setPendingSection(id);
      navigate("/Home");
      return;
    }

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const isHome =
    location.pathname === "/" || location.pathname === "/Home";

  const isProjects = location.pathname === "/projects";
  const isContact = location.pathname === "/contact";

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-[#050816]/85 text-white backdrop-blur-xl">
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-20 w-[500px] -translate-x-1/2 rounded-full bg-purple-600/[0.06] blur-3xl" />

      {/* ================= MAIN NAVBAR ================= */}
      <div className="relative z-10 mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* ================= LOGO ================= */}
        <button
          type="button"
          onClick={goHome}
          className="group relative flex items-center"
          aria-label="Go to homepage"
        >
          <span className="text-2xl font-black tracking-[-0.04em] sm:text-3xl">
            <span className="bg-gradient-to-r from-white via-purple-100 to-purple-400 bg-clip-text text-transparent">
              SUNAIN
            </span>

            <span className="text-purple-500">.</span>
          </span>

          <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-300 group-hover:w-full" />
        </button>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden items-center gap-1 md:flex">
          {/* HOME */}
          <button
            type="button"
            onClick={goHome}
            className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              isHome
                ? "bg-purple-500/10 text-purple-300"
                : "text-gray-400 hover:bg-white/[0.04] hover:text-white"
            }`}
          >
            Home

            {isHome && (
              <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-purple-400" />
            )}
          </button>

          {/* ABOUT */}
          <button
            type="button"
            onClick={() => goToSection("about")}
            className="rounded-full px-4 py-2 text-sm font-medium text-gray-400 transition-all duration-300 hover:bg-white/[0.04] hover:text-purple-300"
          >
            About
          </button>

          {/* PROJECTS */}
          <Link
            to="/projects"
            className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              isProjects
                ? "bg-purple-500/10 text-purple-300"
                : "text-gray-400 hover:bg-white/[0.04] hover:text-white"
            }`}
          >
            Projects

            {isProjects && (
              <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-purple-400" />
            )}
          </Link>

          {/* SKILLS */}
          <button
            type="button"
            onClick={() => goToSection("skills")}
            className="rounded-full px-4 py-2 text-sm font-medium text-gray-400 transition-all duration-300 hover:bg-white/[0.04] hover:text-purple-300"
          >
            Skills
          </button>

          {/* CONTACT */}
          <Link
            to="/contact"
            className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
              isContact
                ? "bg-purple-500/10 text-purple-300"
                : "text-gray-400 hover:bg-white/[0.04] hover:text-white"
            }`}
          >
            Contact

            {isContact && (
              <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-purple-400" />
            )}
          </Link>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex items-center gap-3">
          {/* LET'S TALK DESKTOP */}
          <a
            href="https://wa.me/923258200787"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative hidden items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_25px_rgba(147,51,234,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(147,51,234,0.35)] md:inline-flex"
          >
            {/* WhatsApp Icon */}
            <svg
              className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.52 3.48A11.91 11.91 0 0 0 12.04 0C5.45 0 .09 5.36.09 11.95c0 2.1.55 4.16 1.59 5.97L0 24l6.23-1.63a11.94 11.94 0 0 0 5.81 1.48h.01C18.64 23.85 24 18.49 24 11.9c0-3.18-1.24-6.17-3.48-8.42ZM12.05 21.83h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.7.97.99-3.61-.23-.37a9.91 9.91 0 0 1-1.52-5.28c0-5.48 4.46-9.93 9.94-9.93a9.86 9.86 0 0 1 7.02 2.91 9.86 9.86 0 0 1 2.91 7.02c-.01 5.48-4.47 9.93-9.99 9.93Z" />
            </svg>

            <span className="relative z-10">Let's Talk</span>

            <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-fuchsia-600 to-purple-600 transition-transform duration-300 group-hover:translate-y-0" />
          </a>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className={`relative flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 md:hidden ${
              isOpen
                ? "border-purple-500/40 bg-purple-500/15 text-purple-300"
                : "border-white/10 bg-white/[0.035] text-white active:scale-90"
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <span className="relative h-5 w-5">
              <span
                className={`absolute left-0 top-[3px] h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                  isOpen ? "top-[9px] rotate-45" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-[9px] h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                  isOpen ? "scale-x-0 opacity-0" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-[15px] h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                  isOpen ? "top-[9px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`overflow-hidden border-t transition-all duration-500 ease-in-out md:hidden ${
          isOpen
            ? "max-h-[600px] border-white/[0.06] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="bg-[#070a18]/95 px-4 py-5 backdrop-blur-xl sm:px-6">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {/* HOME */}
            <button
              type="button"
              onClick={goHome}
              className={`group flex items-center justify-between rounded-xl px-4 py-3.5 text-left text-sm font-medium transition-all duration-300 active:scale-[0.98] ${
                isHome
                  ? "bg-purple-500/10 text-purple-300"
                  : "text-gray-300 active:bg-purple-500/10"
              }`}
            >
              <span className="flex items-center gap-3">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    isHome ? "bg-purple-400" : "bg-gray-600"
                  }`}
                />
                Home
              </span>

              <span className="text-gray-600">01</span>
            </button>

            {/* ABOUT */}
            <button
              type="button"
              onClick={() => goToSection("about")}
              className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-left text-sm font-medium text-gray-300 transition-all duration-300 active:scale-[0.98] active:bg-purple-500/10 active:text-purple-300"
            >
              <span className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-600 transition-colors group-active:bg-purple-400" />
                About
              </span>

              <span className="text-gray-600">02</span>
            </button>

            {/* PROJECTS */}
            <Link
              to="/projects"
              onClick={() => setIsOpen(false)}
              className={`group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-300 active:scale-[0.98] ${
                isProjects
                  ? "bg-purple-500/10 text-purple-300"
                  : "text-gray-300 active:bg-purple-500/10 active:text-purple-300"
              }`}
            >
              <span className="flex items-center gap-3">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    isProjects ? "bg-purple-400" : "bg-gray-600"
                  }`}
                />
                Projects
              </span>

              <span className="text-gray-600">03</span>
            </Link>

            {/* SKILLS */}
            <button
              type="button"
              onClick={() => goToSection("skills")}
              className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-left text-sm font-medium text-gray-300 transition-all duration-300 active:scale-[0.98] active:bg-purple-500/10 active:text-purple-300"
            >
              <span className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gray-600 transition-colors group-active:bg-purple-400" />
                Skills
              </span>

              <span className="text-gray-600">04</span>
            </button>

            {/* CONTACT */}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-300 active:scale-[0.98] ${
                isContact
                  ? "bg-purple-500/10 text-purple-300"
                  : "text-gray-300 active:bg-purple-500/10 active:text-purple-300"
              }`}
            >
              <span className="flex items-center gap-3">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    isContact ? "bg-purple-400" : "bg-gray-600"
                  }`}
                />
                Contact
              </span>

              <span className="text-gray-600">05</span>
            </Link>

            {/* DIVIDER */}
            <div className="my-2 h-px bg-white/[0.06]" />

            {/* ================= MOBILE WHATSAPP ================= */}
            <a
              href="https://wa.me/923258200787"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(147,51,234,0.2)] transition-all duration-300 active:scale-[0.97]"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.52 3.48A11.91 11.91 0 0 0 12.04 0C5.45 0 .09 5.36.09 11.95c0 2.1.55 4.16 1.59 5.97L0 24l6.23-1.63a11.94 11.94 0 0 0 5.81 1.48h.01C18.64 23.85 24 18.49 24 11.9c0-3.18-1.24-6.17-3.48-8.42ZM12.05 21.83h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.7.97.99-3.61-.23-.37a9.91 9.91 0 0 1-1.52-5.28c0-5.48 4.46-9.93 9.94-9.93a9.86 9.86 0 0 1 7.02 2.91 9.86 9.86 0 0 1 2.91 7.02c-.01 5.48-4.47 9.93-9.99 9.93Z" />
              </svg>

              Chat on WhatsApp
            </a>

            <p className="pt-2 text-center text-[11px] text-gray-600">
              0325 8200787
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;