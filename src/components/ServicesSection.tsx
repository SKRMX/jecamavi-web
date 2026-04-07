"use client";

import ScrollReveal from "./ScrollReveal";

const services = [
  {
    title: "SaaS & Automatización Empresarial",
    subtitle: "¿Qué resuelve?",
    description:
      "Elimina procesos manuales repetitivos, centraliza operaciones multiempresa y automatiza flujos que hoy dependen de Excel y WhatsApp.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    featured: true,
  },
  {
    title: "Modernización de Sistemas Legacy",
    subtitle: "¿Qué resuelve?",
    description:
      "Tu sistema viejo frena tu crecimiento. Lo migramos sin interrumpir operaciones — con APIs modernas, rendimiento 10x y mantenibilidad real.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182" />
      </svg>
    ),
    featured: false,
  },
  {
    title: "eCommerce de Alta Conversión",
    subtitle: "¿Qué resuelve?",
    description:
      "Tu tienda no convierte lo suficiente. Construimos plataformas con logística sincronizada, pagos globales y UX que multiplica ventas.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
      </svg>
    ),
    featured: false,
  },
  {
    title: "Apps Móviles Multiplataforma",
    subtitle: "¿Qué resuelve?",
    description:
      "Tu equipo de campo necesita acceso offline. Diseñamos apps nativas con sincronización inteligente, rendimiento real y experiencia premium.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    featured: true,
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
              Soluciones
            </span>
            <h2 className="heading-lg text-jecamavi-dark dark:text-jecamavi-lightest-slate mb-4">
              ¿Qué Problema te Quitamos?
            </h2>
            <p className="body-text max-w-xl mx-auto">
              No vendemos tecnología por tecnología. Cada solución ataca un dolor operativo
              específico y entrega resultados medibles.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          <ScrollReveal delay={0} className="md:col-span-2">
            <ServiceCard service={services[0]} />
          </ScrollReveal>
          <ScrollReveal delay={150} className="md:col-span-1">
            <ServiceCard service={services[1]} />
          </ScrollReveal>
          <ScrollReveal delay={300} className="md:col-span-1">
            <ServiceCard service={services[2]} />
          </ScrollReveal>
          <ScrollReveal delay={450} className="md:col-span-2">
            <ServiceCard service={services[3]} />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: (typeof services)[0] }) {
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
        <h3 className="heading-md text-jecamavi-dark dark:text-jecamavi-lightest-slate mb-2">
          {service.title}
        </h3>
        <span className="inline-block text-[10px] tracking-[0.15em] uppercase text-jecamavi-gold/80 font-semibold mb-2">
          {service.subtitle}
        </span>
        <p className="body-text text-sm">{service.description}</p>
      </div>

      {/* Bottom accent line */}
      <div className="mt-6 w-0 group-hover:w-full h-[1px] bg-gradient-to-r from-jecamavi-gold to-transparent transition-all duration-700" />
    </div>
  );
}
