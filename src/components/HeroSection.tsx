"use client";

import { useTheme } from "./ThemeProvider";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function HeroSection() {
  const { theme } = useTheme();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-jecamavi-gold/[0.03] dark:bg-jecamavi-gold/[0.04] blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-jecamavi-dark-lighter/20 dark:bg-jecamavi-gold/[0.02] blur-[100px]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-jecamavi-gold/20 animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${5 + i}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Animated isotipo */}
        <ScrollReveal animation="animate-scale-in" className="mb-10">
          <div className="inline-block">
            <Image
              src={
                theme === "dark"
                  ? "/logos/isotipo_jecamavi_blanco.svg"
                  : "/logos/isotipo_jecamavi_azul.svg"
              }
              alt="JECAMAVI Isotipo"
              width={120}
              height={96}
              className="h-20 md:h-24 w-auto mx-auto opacity-40 dark:opacity-30"
              priority
            />
          </div>
        </ScrollReveal>

        {/* H1 */}
        <ScrollReveal animation="animate-fade-in-up" delay={200}>
          <h1 className="heading-xl text-jecamavi-dark dark:text-jecamavi-lightest-slate mb-6">
            Arquitectura Digital
            <br />
            <span className="text-gradient-gold">de Alto Rendimiento</span>
          </h1>
        </ScrollReveal>

        {/* Subheadline */}
        <ScrollReveal animation="animate-fade-in-up" delay={400}>
          <p className="body-text max-w-2xl mx-auto mb-10">
            En JECAMAVI, destilamos la complejidad técnica para entregar{" "}
            <strong className="text-jecamavi-gold font-semibold">
              innovación esencial
            </strong>
            . Desarrollamos las soluciones de software, apps y e-commerce que
            escalan tu visión global.
          </p>
        </ScrollReveal>

        {/* CTAs */}
        <ScrollReveal animation="animate-fade-in-up" delay={600}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contacto" className="btn-primary animate-glow-pulse">
              Iniciar Proyecto
            </a>
            <a href="#proyectos" className="btn-outline">
              Ver Casos de Estudio
            </a>
          </div>
        </ScrollReveal>

        {/* Scroll indicator */}
        <ScrollReveal animation="animate-fade-in" delay={1000}>
          <div className="mt-20 flex flex-col items-center gap-2">
            <span className="text-[10px] tracking-[0.3em] uppercase text-jecamavi-slate">
              Explorar
            </span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-jecamavi-gold/60 to-transparent" />
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg-primary)] to-transparent pointer-events-none" />
    </section>
  );
}
