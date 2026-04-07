"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

interface Metric {
  value: number;
  suffix: string;
  prefix: string;
  label: string;
  description: string;
}

const metrics: Metric[] = [
  {
    value: 70,
    suffix: "%",
    prefix: "↓",
    label: "Tiempo Operativo",
    description: "Reducción en procesos manuales mediante automatización inteligente",
  },
  {
    value: 90,
    suffix: "%",
    prefix: "↓",
    label: "Errores Manuales",
    description: "Eliminación de fallos humanos con validaciones y flujos automatizados",
  },
  {
    value: 4,
    suffix: "x",
    prefix: "↑",
    label: "Escalabilidad",
    description: "Capacidad de crecimiento sin rediseño de arquitectura",
  },
  {
    value: 35,
    suffix: "%",
    prefix: "↑",
    label: "Conversión Digital",
    description: "Mejora en tasas de conversión para plataformas eCommerce",
  },
  {
    value: 60,
    suffix: "%",
    prefix: "↓",
    label: "Tiempo de Onboarding",
    description: "Reducción en capacitación gracias a interfaces intuitivas",
  },
];

function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [started, target, duration]);

  return { count, ref };
}

function MetricCard({ metric, index }: { metric: Metric; index: number }) {
  const { count, ref } = useCountUp(metric.value);

  return (
    <ScrollReveal delay={index * 120}>
      <div ref={ref} className="relative group text-center p-8">
        {/* Background glow on hover */}
        <div className="absolute inset-0 rounded-2xl bg-jecamavi-gold/0 group-hover:bg-jecamavi-gold/[0.03] transition-all duration-500" />

        <div className="relative z-10">
          {/* Arrow direction */}
          <span className={`inline-block text-sm font-bold mb-2 ${
            metric.prefix === "↓" ? "text-emerald-400" : "text-jecamavi-gold"
          }`}>
            {metric.prefix}
          </span>

          {/* Counter */}
          <div className="flex items-baseline justify-center gap-1 mb-3">
            <span className="font-heading text-5xl md:text-6xl font-bold text-jecamavi-dark dark:text-jecamavi-lightest-slate tabular-nums">
              {count}
            </span>
            <span className="font-heading text-2xl md:text-3xl text-jecamavi-gold font-semibold">
              {metric.suffix}
            </span>
          </div>

          {/* Label */}
          <h3 className="font-heading text-sm tracking-[0.15em] uppercase text-jecamavi-dark dark:text-jecamavi-lightest-slate mb-2 font-semibold">
            {metric.label}
          </h3>

          {/* Description */}
          <p className="text-xs leading-relaxed text-[var(--text-secondary)] max-w-[200px] mx-auto">
            {metric.description}
          </p>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-12 h-[2px] bg-jecamavi-gold/50 transition-all duration-500 rounded-full" />
      </div>
    </ScrollReveal>
  );
}

export default function ImpactSection() {
  return (
    <section id="impacto" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--bg-secondary)] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-jecamavi-gold/20 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-6">
            <span className="inline-block font-heading text-xs tracking-[0.4em] uppercase text-jecamavi-gold mb-4">
              Impacto Potencial
            </span>
            <h2 className="heading-lg text-jecamavi-dark dark:text-jecamavi-lightest-slate mb-4">
              No Vendemos Código, Vendemos Resultados
            </h2>
            <p className="body-text max-w-2xl mx-auto">
              Cada proyecto se mide por su impacto real en la operación de nuestros clientes.
              Estas son las métricas que perseguimos.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-12">
          {metrics.map((metric, index) => (
            <MetricCard key={metric.label} metric={metric} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
