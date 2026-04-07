"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {

  return (
    <footer className="relative bg-jecamavi-dark text-jecamavi-lightest-slate overflow-hidden">
      {/* Top border */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-jecamavi-gold/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        {/* Logo centered */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <Image
            src="/logos/isotipo_jecamavi_blanco.svg"
            alt="JECAMAVI"
            width={60}
            height={48}
            className="h-12 w-auto opacity-60"
          />
          <div className="text-center">
            <span className="font-heading text-xl tracking-[0.3em] font-semibold text-jecamavi-lightest-slate">
              JECAMAVI
            </span>
            <p className="font-heading text-[9px] tracking-[0.4em] uppercase text-jecamavi-slate mt-1">
              Innovación Esencial
            </p>
          </div>
        </div>

        {/* Contact info */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-12">
          {[
            { email: "proyectos@jecamavi.com" },
            { email: "soporte@jecamavi.com" },
            { email: "facturas@jecamavi.com" },
            { email: "legal@jecamavi.com" },
          ].map((item, i, arr) => (
            <span key={item.email} className="flex items-center gap-8">
              <a
                href={`mailto:${item.email}`}
                className="text-sm tracking-wider text-jecamavi-slate hover:text-jecamavi-gold transition-colors duration-300"
              >
                {item.email}
              </a>
              {i < arr.length - 1 && (
                <span className="hidden md:inline-block w-1 h-1 rounded-full bg-jecamavi-gold/30" />
              )}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/5 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs tracking-wider text-jecamavi-slate/60">
          <p>© 2026 JECAMAVI — Innovación Esencial.</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/privacidad" className="hover:text-jecamavi-gold transition-colors">
              Aviso de Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-jecamavi-gold transition-colors">
              Términos y Condiciones
            </Link>
            <Link href="/cookies" className="hover:text-jecamavi-gold transition-colors">
              Política de Cookies
            </Link>
          </div>
          <p>Coatzacoalcos, México.</p>
        </div>
      </div>
    </footer>
  );
}
