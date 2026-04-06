"use client";

import ScrollReveal from "./ScrollReveal";

const services = [
  {
    title: "Software & SaaS a Medida",
    description:
      "Plataformas escalables diseñadas desde cero con arquitectura de microservicios, APIs robustas y experiencias de usuario que convierten.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    featured: true, // card ancha — primera fila izquierda
  },
  {
    title: "Modernización Legacy",
    description:
      "Reingeniería de sistemas heredados. Migramos, optimizamos y refactorizamos tu stack para rendimiento y mantenibilidad de élite.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182" />
      </svg>
    ),
    featured: false,
  },
  {
    title: "E-commerce & Retail Global",
    description:
      "Ingeniería de comercio digital centrada en la conversión. Logística sincronizada, pasarelas de pago y escalabilidad transaccional sin fronteras.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
      </svg>
    ),
    featured: false,
  },
  {
    title: "Arquitectura Mobile Apps",
    description:
      "Aplicaciones nativas y multiplataforma con rendimiento nativo, sincronización offline/online y diseño centrado en el usuario.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    featured: true, // card ancha — segunda fila derecha
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block font-heading text-xs tracking-[0.4em] uppercase text-jecamavi-gold mb-4">
              Servicios Elite
            </span>
            <h2 className="heading-lg text-jecamavi-dark dark:text-jecamavi-lightest-slate mb-4">
              Soluciones que Escalan tu Visión
            </h2>
            <p className="body-text max-w-xl mx-auto">
              Cada línea de código es una decisión estratégica. Construimos
              tecnología que impulsa resultados de negocio medibles.
            </p>
          </div>
        </ScrollReveal>

        {/*
          Bento Grid — layout sin huecos:
          Desktop (3 cols):
            Fila 1: Software & SaaS (2 cols) | Modernización (1 col)
            Fila 2: E-commerce (1 col)       | Mobile Apps (2 cols)
          Mobile: stack de 1 columna
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {/* Card 1 — ancha (2 cols) */}
          <ScrollReveal delay={0} className="md:col-span-2">
            <ServiceCard service={services[0]} />
          </ScrollReveal>

          {/* Card 2 — normal (1 col) */}
          <ScrollReveal delay={150} className="md:col-span-1">
            <ServiceCard service={services[1]} />
          </ScrollReveal>

          {/* Card 3 — normal (1 col) */}
          <ScrollReveal delay={300} className="md:col-span-1">
            <ServiceCard service={services[2]} />
          </ScrollReveal>

          {/* Card 4 — ancha (2 cols) */}
          <ScrollReveal delay={450} className="md:col-span-2">
            <ServiceCard service={services[3]} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: typeof services[0] }) {
  return (
    <div className="bento-card h-full flex flex-col justify-between group cursor-default">
      {/* Icon */}
      <div className="mb-6">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-jecamavi-gold/10 dark:bg-jecamavi-gold/5 text-jecamavi-gold group-hover:bg-jecamavi-gold/20 transition-colors duration-300">
          {service.icon}
        </div>
      </div>

      {/* Content */}
      <div>
        <h3 className="heading-md text-jecamavi-dark dark:text-jecamavi-lightest-slate mb-3">
          {service.title}
        </h3>
        <p className="body-text text-sm">{service.description}</p>
      </div>

      {/* Bottom accent line */}
      <div className="mt-6 w-0 group-hover:w-full h-[1px] bg-gradient-to-r from-jecamavi-gold to-transparent transition-all duration-700" />
    </div>
  );
}
