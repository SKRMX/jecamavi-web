"use client";

import ScrollReveal from "./ScrollReveal";

const clients = [
  { name: "NERVE", industry: "HealthTech" },
  { name: "GESTORAQ", industry: "Seguridad Industrial" },
  { name: "Cunning Clothes", industry: "eCommerce" },
  { name: "CMMS-SAAS", industry: "Mantenimiento" },
  { name: "COMEXIMTTO", industry: "Logística" },
];

// Duplicate for seamless loop
const marqueeClients = [...clients, ...clients, ...clients];

const testimonials = [
  {
    quote:
      "Necesitábamos un sistema que funcionara sin internet en planta. JECAMAVI construyó una solución offline-first que revolucionó nuestra operación de mantenimiento.",
    name: "Director de Operaciones",
    company: "Sector Industrial",
    result: "↓ 62% tiempos muertos",
  },
  {
    quote:
      "Pasamos de gestionar certificados DC-3 en Excel a una plataforma automatizada que nos ahorra semanas de trabajo. La inversión se pagó sola en 3 meses.",
    name: "Gerente de Cumplimiento",
    company: "Seguridad Industrial",
    result: "↓ 90% errores de auditoría",
  },
  {
    quote:
      "La plataforma de e-commerce que desarrollaron multiplicó nuestra conversión digital y nos abrió mercados que no teníamos capacidad de atender.",
    name: "CEO",
    company: "Retail Digital",
    result: "↑ 3x ventas digitales",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-jecamavi-gold/20 to-transparent" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-jecamavi-gold/[0.02] blur-[100px] pointer-events-none" />

      <div className="relative z-10">
        <ScrollReveal>
          <div className="text-center mb-14 max-w-6xl mx-auto px-6">
            <span className="inline-block font-heading text-xs tracking-[0.4em] uppercase text-jecamavi-gold mb-4">
              Confianza
            </span>
            <h2 className="heading-lg text-jecamavi-dark dark:text-jecamavi-lightest-slate mb-4">
              Empresas que Han Confiado en Nosotros
            </h2>
            <p className="body-text max-w-xl mx-auto">
              Resultados que hablan por sí mismos. Cada proyecto es una relación de largo plazo.
            </p>
          </div>
        </ScrollReveal>

        {/* Client logos marquee */}
        <ScrollReveal delay={100}>
          <div className="relative mb-16">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10 pointer-events-none" />

            <div className="flex gap-12 animate-marquee items-center">
              {marqueeClients.map((client, i) => (
                <div
                  key={`c-${i}`}
                  className="flex-shrink-0 flex flex-col items-center gap-2 opacity-40 hover:opacity-80 transition-opacity duration-300 cursor-default"
                >
                  <span className="font-heading text-xl md:text-2xl tracking-[0.2em] text-jecamavi-dark dark:text-jecamavi-lightest-slate font-bold whitespace-nowrap">
                    {client.name}
                  </span>
                  <span className="text-[9px] tracking-[0.15em] uppercase text-[var(--text-secondary)]">
                    {client.industry}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Testimonials cards */}
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div className="bento-card h-full flex flex-col justify-between">
                {/* Quote */}
                <div>
                  <svg
                    className="w-8 h-8 text-jecamavi-gold/30 mb-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017ZM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0Z" />
                  </svg>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)] mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>

                {/* Author */}
                <div className="pt-4 border-t border-[var(--border-color)] dark:border-white/5">
                  <p className="font-heading text-sm tracking-wider text-jecamavi-dark dark:text-jecamavi-lightest-slate font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">
                    {testimonial.company}
                  </p>
                  <span className="inline-block mt-3 text-xs font-heading tracking-wider text-jecamavi-gold font-semibold">
                    {testimonial.result}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
