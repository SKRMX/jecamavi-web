"use client";

import ScrollReveal from "./ScrollReveal";

const industries = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    name: "Salud & Clínicas",
    problem: "Historiales en papel, citas desorganizadas, riesgo de datos sensibles",
    solution: "Ecosistemas HIPAA/GDPR con gestión clínica integral e interfaces médicas intuitivas",
    kpi: "↓ 80% tiempo administrativo",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    ),
    name: "Seguridad Industrial",
    problem: "Cumplimiento normativo manual, certificados DC-3 en Excel, auditorías caóticas",
    solution: "Plataformas de cumplimiento automatizado con trazabilidad completa",
    kpi: "↓ 90% errores de certificación",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    name: "Logística & Transporte",
    problem: "Trazabilidad nula, documentación transfronteriza manual, decisiones sin datos",
    solution: "Dashboards analíticos con trazabilidad en tiempo real y automatización aduanera",
    kpi: "↑ 3x velocidad operativa",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
      </svg>
    ),
    name: "SaaS B2B",
    problem: "Plataformas monolíticas, escalabilidad limitada, multitenancy inexistente",
    solution: "Arquitectura de microservicios con multitenancy, billing y APIs escalables",
    kpi: "↑ 4x capacidad de escala",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>
    ),
    name: "Retail & eCommerce",
    problem: "Conversión baja, inventarios desincronizados, logística fragmentada",
    solution: "Plataformas de comercio digital con logística sincronizada y pagos globales",
    kpi: "↑ 35% tasa de conversión",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.193-.14 1.743" />
      </svg>
    ),
    name: "Manufactura & Mantenimiento",
    problem: "Planes de mantenimiento en papel, tiempos muertos impredecibles, sin datos de activos",
    solution: "CMMS offline-first con predictivos, sincronización de datos y gestión de activos",
    kpi: "↓ 62% tiempos muertos",
  },
];

export default function IndustriesSection() {
  return (
    <section id="industrias" className="section-padding relative">
      <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-gradient-radial from-jecamavi-gold/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block font-heading text-xs tracking-[0.4em] uppercase text-jecamavi-gold mb-4">
              Verticales
            </span>
            <h2 className="heading-lg text-jecamavi-dark dark:text-jecamavi-lightest-slate mb-4">
              Industrias que Transformamos
            </h2>
            <p className="body-text max-w-2xl mx-auto">
              No somos generalistas. Entendemos los problemas específicos de cada sector
              porque ya los hemos resuelto.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((industry, index) => (
            <ScrollReveal key={industry.name} delay={index * 100}>
              <div className="bento-card h-full flex flex-col group cursor-default">
                {/* Header */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-jecamavi-gold/10 dark:bg-jecamavi-gold/5 text-jecamavi-gold flex items-center justify-center group-hover:bg-jecamavi-gold/20 transition-colors duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="font-heading text-lg tracking-wider text-jecamavi-dark dark:text-jecamavi-lightest-slate font-semibold">
                    {industry.name}
                  </h3>
                </div>

                {/* Problem */}
                <div className="mb-4">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-red-400/80 font-semibold">
                    Problema
                  </span>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-1">
                    {industry.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-5 flex-grow">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-emerald-400/80 font-semibold">
                    Solución
                  </span>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-1">
                    {industry.solution}
                  </p>
                </div>

                {/* KPI */}
                <div className="pt-4 border-t border-[var(--border-color)] dark:border-white/5">
                  <span className="font-heading text-sm tracking-wider text-jecamavi-gold font-semibold">
                    {industry.kpi}
                  </span>
                </div>

                {/* Bottom accent line */}
                <div className="mt-4 w-0 group-hover:w-full h-[1px] bg-gradient-to-r from-jecamavi-gold to-transparent transition-all duration-700" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
