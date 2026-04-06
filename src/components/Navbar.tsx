"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";
import Image from "next/image";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#metodologia", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 backdrop-blur-xl bg-white/90 dark:bg-jecamavi-dark/90 shadow-lg shadow-black/5 dark:shadow-black/20"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="relative z-10 flex-shrink-0" aria-label="JECAMAVI inicio">
            <div className="flex items-center gap-3">
              <Image
                src={
                  theme === "dark"
                    ? "/logos/isotipo_jecamavi_blanco.svg"
                    : "/logos/isotipo_jecamavi_azul.svg"
                }
                alt="JECAMAVI"
                width={40}
                height={32}
                className="h-8 w-auto"
                priority
              />
              <div className="hidden sm:flex flex-col leading-none">
                <span className="font-heading text-lg tracking-[0.25em] font-semibold text-jecamavi-dark dark:text-jecamavi-lightest-slate">
                  JECAMAVI
                </span>
                <span className="font-heading text-[8px] tracking-[0.35em] text-jecamavi-slate dark:text-jecamavi-slate uppercase">
                  Innovación Esencial
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative font-body text-sm tracking-wider text-jecamavi-dark/70 dark:text-jecamavi-slate
                         hover:text-jecamavi-dark dark:hover:text-jecamavi-lightest-slate transition-colors duration-300
                         after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0
                         after:h-[1px] after:bg-jecamavi-gold after:transition-all after:duration-300
                         hover:after:w-full"
              >
                {link.label}
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-jecamavi-slate hover:text-jecamavi-gold transition-colors duration-300"
              aria-label="Cambiar tema"
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            {/* CTA */}
            <a href="#contacto" className="btn-primary text-xs">
              Iniciar Proyecto
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-10 p-2"
            aria-label="Menú"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-[2px] bg-jecamavi-dark dark:bg-jecamavi-lightest-slate transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[5px]" : ""
                }`}
              />
              <span
                className={`block h-[2px] bg-jecamavi-dark dark:bg-jecamavi-lightest-slate transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] bg-jecamavi-dark dark:bg-jecamavi-lightest-slate transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[5px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-jecamavi-dark/95 dark:bg-jecamavi-dark/98 backdrop-blur-xl"
          onClick={() => setMenuOpen(false)}
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-heading text-2xl tracking-[0.2em] text-white/80 hover:text-jecamavi-gold
                        transition-all duration-500 ${
                          menuOpen
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                        }`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className={`btn-primary mt-4 transition-all duration-500 ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            Iniciar Proyecto
          </a>
          <button
            onClick={() => {
              toggleTheme();
            }}
            className={`mt-2 text-jecamavi-slate text-sm tracking-wider transition-all duration-500 ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            {theme === "dark" ? "☀ Modo Claro" : "☾ Modo Oscuro"}
          </button>
        </div>
      </div>
    </>
  );
}
