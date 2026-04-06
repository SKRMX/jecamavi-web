"use client";

import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Discovery & Auditoría",
    description:
      "Análisis profundo de requisitos, stakeholders y ecosistema técnico. Definimos el roadmap estratégico.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Arquitectura",
    description:
      "Diseño de la solución técnica, selección del stack, modelado de datos y prototipado de interfaces.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Desarrollo en Sprints",
    description:
      "Metodología Agile con entregas iterativas cada 2 semanas. Visibilidad total del progreso.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "QA & Testing",
    description:
      "Pruebas automatizadas, testing de rendimiento, seguridad y validación de experiencia de usuario.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Mantenimiento Evolutivo",
    description:
      "Soporte continuo, monitoreamiento proactivo, actualizaciones de seguridad y evolución funcional.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

export default function MethodologySection() {
  return (
    <section id="metodologia" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--bg-secondary)] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-jecamavi-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-jecamavi-gold/20 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block font-heading text-xs tracking-[0.4em] uppercase text-jecamavi-gold mb-4">
              Proceso
            </span>
            <h2 className="heading-lg text-jecamavi-dark dark:text-jecamavi-lightest-slate mb-4">
              Metodología de Precisión
            </h2>
            <p className="body-text max-w-xl mx-auto">
              Un proceso riguroso y transparente que garantiza resultados
              predecibles y excelencia técnica en cada entrega.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-[60px] left-0 right-0 h-px bg-[var(--border-color)]">
            <div className="absolute inset-0 bg-gradient-to-r from-jecamavi-gold/40 via-jecamavi-gold/20 to-jecamavi-gold/40" />
          </div>

          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <div className="relative flex flex-col items-center text-center group">
                  {/* Node */}
                  <div className="relative z-10 w-[120px] h-[120px] rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] dark:border-white/5 flex flex-col items-center justify-center gap-2 group-hover:border-jecamavi-gold/40 group-hover:shadow-lg group-hover:shadow-jecamavi-gold/5 transition-all duration-500">
                    <div className="text-jecamavi-gold">
                      {step.icon}
                    </div>
                    <span className="text-[10px] tracking-[0.2em] text-jecamavi-gold font-heading font-semibold">
                      {step.number}
                    </span>
                  </div>

                  {/* Content below */}
                  <div className="mt-6">
                    <h3 className="font-heading text-sm tracking-wider text-jecamavi-dark dark:text-jecamavi-lightest-slate mb-2 font-semibold">
                      {step.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="flex items-start gap-5 group">
                {/* Left: number + line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] dark:border-white/5 flex items-center justify-center text-jecamavi-gold group-hover:border-jecamavi-gold/40 transition-all duration-500">
                    {step.icon}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-px h-8 bg-gradient-to-b from-jecamavi-gold/30 to-transparent mt-2" />
                  )}
                </div>

                {/* Right: content */}
                <div className="pt-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[10px] tracking-[0.2em] text-jecamavi-gold font-heading font-semibold">
                      {step.number}
                    </span>
                    <h3 className="font-heading text-base tracking-wider text-jecamavi-dark dark:text-jecamavi-lightest-slate font-semibold">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
