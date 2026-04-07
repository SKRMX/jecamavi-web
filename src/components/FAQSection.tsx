"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    question: "¿Cuánto tarda un proyecto típico?",
    answer:
      "Depende de la complejidad. Un MVP funcional se entrega entre 6 y 10 semanas. Proyectos enterprise completos toman de 3 a 6 meses. En la fase de Discovery definimos el roadmap exacto con milestones claros.",
  },
  {
    question: "¿Trabajan proyectos MVP?",
    answer:
      "Sí. De hecho lo recomendamos. Lanzar un MVP validado permite medir tracción real antes de invertir en funcionalidades avanzadas. Nuestros MVPs no son prototipos — son productos funcionales con arquitectura escalable.",
  },
  {
    question: "¿Firman acuerdo de confidencialidad (NDA)?",
    answer:
      "Absolutamente. Cada proyecto inicia con un NDA bilateral que protege tu propiedad intelectual, datos sensibles y estrategia de negocio. Es un paso estándar en nuestro proceso.",
  },
  {
    question: "¿Pueden integrarse con sistemas heredados?",
    answer:
      "Es una de nuestras especialidades. Conectamos plataformas legadas mediante APIs, middleware y estrategias de migración progresiva — sin interrumpir operaciones existentes.",
  },
  {
    question: "¿Ofrecen soporte post-lanzamiento?",
    answer:
      "Sí. Todos nuestros proyectos incluyen un periodo de garantía post-lanzamiento. Además ofrecemos planes de mantenimiento evolutivo con monitoreo proactivo, actualizaciones de seguridad y soporte prioritario.",
  },
  {
    question: "¿Cómo manejan la escalabilidad?",
    answer:
      "Diseñamos desde el día 1 con arquitectura escalable: microservicios, contenedores Docker, orquestación con Kubernetes y despliegue en cloud (AWS). Tu sistema crece sin necesidad de rediseño.",
  },
  {
    question: "¿Trabajan con sistemas de misión crítica?",
    answer:
      "Sí. Tenemos experiencia en salud (HIPAA/GDPR), seguridad industrial (normativas STPS) y mantenimiento de activos críticos. Implementamos redundancia, respaldos automatizados y monitoreo 24/7.",
  },
  {
    question: "¿Cuál es el rango de inversión?",
    answer:
      "Cada proyecto es único. Un MVP inicia desde $150,000 MXN. Plataformas enterprise complejas pueden superar los $500,000 MXN. En la auditoría inicial gratuita te damos un estimado preciso basado en alcance real.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`border rounded-xl transition-all duration-300 ${
        isOpen
          ? "border-jecamavi-gold/30 bg-jecamavi-gold/[0.03] dark:bg-jecamavi-gold/[0.02]"
          : "border-[var(--border-color)] dark:border-white/5 hover:border-jecamavi-gold/20"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-heading text-sm md:text-base tracking-wider text-jecamavi-dark dark:text-jecamavi-lightest-slate font-semibold">
          {faq.question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-jecamavi-gold/20 text-jecamavi-gold rotate-45"
              : "bg-[var(--bg-secondary)] text-[var(--text-secondary)]"
          }`}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5">
          <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-jecamavi-gold/20 to-transparent" />

      <div className="max-w-3xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block font-heading text-xs tracking-[0.4em] uppercase text-jecamavi-gold mb-4">
              Preguntas Frecuentes
            </span>
            <h2 className="heading-lg text-jecamavi-dark dark:text-jecamavi-lightest-slate mb-4">
              Todo lo que Necesitas Saber
            </h2>
            <p className="body-text max-w-xl mx-auto">
              Respuestas directas a las preguntas más comunes sobre nuestro proceso,
              inversión y capacidades técnicas.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 80}>
              <FAQItem
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
