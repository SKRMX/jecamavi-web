"use client";

import { useEffect, useState } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const contactSection = document.getElementById("contacto");
      const scrollY = window.scrollY;

      // Show after hero, hide when in contact section
      if (contactSection) {
        const contactTop = contactSection.offsetTop - window.innerHeight * 0.5;
        setVisible(scrollY > heroHeight && scrollY < contactTop);
      } else {
        setVisible(scrollY > heroHeight);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="#contacto"
      className={`fixed bottom-8 right-8 z-40 flex items-center gap-3 px-6 py-3.5 rounded-full
                   bg-jecamavi-gold text-jecamavi-dark font-heading text-xs tracking-[0.15em] uppercase font-bold
                   shadow-lg shadow-jecamavi-gold/30 hover:shadow-xl hover:shadow-jecamavi-gold/40
                   hover:scale-105 active:scale-95
                   transition-all duration-500 ease-out
                   animate-float-cta
                   ${
                     visible
                       ? "opacity-100 translate-y-0"
                       : "opacity-0 translate-y-8 pointer-events-none"
                   }`}
      aria-label="Agendar discovery call"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        />
      </svg>
      Discovery Call
    </a>
  );
}
