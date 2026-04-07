"use client";

import ScrollReveal from "./ScrollReveal";

export default function CTABanner() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-jecamavi-dark via-jecamavi-dark-light to-jecamavi-dark" />
      <div className="absolute inset-0 bg-gradient-to-b from-jecamavi-gold/[0.04] via-transparent to-jecamavi-gold/[0.04]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-jecamavi-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-jecamavi-gold/30 to-transparent" />

      {/* Floating orbs */}
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-jecamavi-gold/[0.06] blur-[100px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[200px] h-[200px] rounded-full bg-jecamavi-gold/[0.04] blur-[80px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <p className="text-jecamavi-slate text-sm md:text-base tracking-wider mb-4">
            ¿Tu operación actual depende de Excel, WhatsApp y procesos manuales?
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-jecamavi-lightest-slate mb-6">
            Te diseñamos una ruta de{" "}
            <span className="text-gradient-gold">modernización en 7 días</span>
          </h3>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="text-jecamavi-slate text-sm max-w-2xl mx-auto mb-8">
            Sin costo. Sin compromiso. Analizamos tu operación, identificamos cuellos de botella
            y te entregamos un plan técnico accionable.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={450}>
          <a
            href="#contacto"
            className="btn-primary animate-glow-pulse inline-flex items-center gap-3"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
            </svg>
            Solicitar Auditoría Gratuita
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
