"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

interface Project {
  id: string;
  name: string;
  category: string;
  problem: string;
  solution: string;
  result: string;
  techs: string[];
  timeline: string;
  images: string[];
  color: string;
}

const projects: Project[] = [
  {
    id: "nerve",
    name: "NERVE",
    category: "HealthTech SaaS",
    problem: "Gestión clínica fragmentada en papel con riesgo de datos sensibles.",
    solution: "Ecosistema integral HIPAA/GDPR con interfaces médicas intuitivas.",
    result: "↓ 80% carga administrativa del personal clínico.",
    techs: ["React", "Node.js", "PostgreSQL", "AWS"],
    timeline: "12 semanas",
    images: [
      "/proyectos/nerve/capture_01.png",
      "/proyectos/nerve/capture_02.png",
      "/proyectos/nerve/capture_03.png",
    ],
    color: "#E6C068",
  },
  {
    id: "gestoraq",
    name: "GESTORAQ",
    category: "Seguridad Industrial",
    problem: "Certificados DC-3 y auditorías manejados en hojas de cálculo.",
    solution: "Plataforma de cumplimiento normativo con automatización integral.",
    result: "↓ 90% errores de certificación y auditoría.",
    techs: ["Next.js", "Python", "FastAPI", "PostgreSQL"],
    timeline: "10 semanas",
    images: [
      "/proyectos/gestoraq/capture_01.png",
      "/proyectos/gestoraq/capture_02.png",
      "/proyectos/gestoraq/capture_03.png",
    ],
    color: "#8892B0",
  },
  {
    id: "cunning-clothes",
    name: "Cunning Clothes",
    category: "High-Scale Retail",
    problem: "Baja conversión digital e inventarios desincronizados entre canales.",
    solution: "eCommerce con logística sincronizada y pasarelas de pago globales.",
    result: "↑ 3x ventas digitales en el primer trimestre.",
    techs: ["Next.js", "Stripe", "Node.js", "MongoDB"],
    timeline: "8 semanas",
    images: [
      "/proyectos/cunning-clothes/capture_01.png",
      "/proyectos/cunning-clothes/capture_02.png",
      "/proyectos/cunning-clothes/capture_03.png",
    ],
    color: "#CCD6F6",
  },
  {
    id: "cmms-saas",
    name: "CMMS-SAAS",
    category: "Mantenimiento Industrial",
    problem: "Seguimiento manual de mantenimientos con tiempos muertos impredecibles.",
    solution: "CMMS multiusuario offline-first con sincronización inteligente.",
    result: "↓ 62% en tiempos muertos de operación.",
    techs: ["Flutter", "FastAPI", "PostgreSQL", "Docker"],
    timeline: "14 semanas",
    images: [
      "/proyectos/cmms-saas/capture_01.png",
      "/proyectos/cmms-saas/capture_02.png",
      "/proyectos/cmms-saas/capture_03.png",
    ],
    color: "#E6C068",
  },
  {
    id: "comeximtto",
    name: "COMEXIMTTO",
    category: "Logística Internacional",
    problem: "Trazabilidad nula en operaciones transfronterizas y decisiones sin datos.",
    solution: "Dashboards analíticos con trazabilidad en tiempo real.",
    result: "↑ 3x velocidad de operaciones aduaneras.",
    techs: ["React", "Python", "Power BI", "AWS"],
    timeline: "10 semanas",
    images: [
      "/proyectos/comeximtto/capture_01.png",
      "/proyectos/comeximtto/capture_02.png",
      "/proyectos/comeximtto/capture_03.png",
    ],
    color: "#8892B0",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <ScrollReveal delay={index * 150}>
      <div className="group relative rounded-2xl overflow-hidden border border-[var(--border-color)] dark:border-white/5 bg-[var(--bg-secondary)] dark:bg-jecamavi-dark-light/50 hover:border-jecamavi-gold/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-black/30">
        {/* Image carousel */}
        <div className="relative aspect-[16/10] overflow-hidden bg-jecamavi-dark">
          <div
            className="project-image-track h-full"
            style={{ transform: `translateX(-${currentImage * 100}%)` }}
          >
            {project.images.map((src, i) => (
              <div key={i} className="relative min-w-full h-full">
                <Image
                  src={src}
                  alt={`${project.name} captura ${i + 1}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-jecamavi-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Image dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === currentImage
                    ? "bg-jecamavi-gold w-4"
                    : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Ver captura ${i + 1}`}
              />
            ))}
          </div>

          {/* Category tag */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-block px-3 py-1 rounded-full text-[10px] tracking-[0.15em] uppercase font-semibold bg-jecamavi-dark/70 backdrop-blur-sm text-white/90 border border-white/10">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content — Mini Historia */}
        <div className="p-6">
          <h3 className="font-heading text-xl tracking-wider text-jecamavi-dark dark:text-jecamavi-lightest-slate mb-4">
            {project.name}
          </h3>

          {/* Problem → Solution → Result */}
          <div className="space-y-3 mb-4">
            <div className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400/60" />
              <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                <span className="text-red-400/80 font-semibold">Problema:</span>{" "}
                {project.problem}
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400/60" />
              <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                <span className="text-emerald-400/80 font-semibold">Solución:</span>{" "}
                {project.solution}
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-jecamavi-gold/60" />
              <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                <span className="text-jecamavi-gold font-semibold">Resultado:</span>{" "}
                {project.result}
              </p>
            </div>
          </div>

          {/* Footer: Techs + Timeline */}
          <div className="pt-4 border-t border-[var(--border-color)] dark:border-white/5 flex items-center justify-between flex-wrap gap-2">
            <div className="flex flex-wrap gap-1.5">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded text-[9px] tracking-wider uppercase bg-jecamavi-gold/10 text-jecamavi-gold/80 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <span className="text-[10px] tracking-wider text-[var(--text-secondary)] opacity-60">
              ⏱ {project.timeline}
            </span>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="section-padding relative">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-jecamavi-gold/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <div className="text-center mb-6">
            <span className="inline-block font-heading text-xs tracking-[0.4em] uppercase text-jecamavi-gold mb-4">
              Portfolio
            </span>
            <h2 className="heading-lg text-jecamavi-dark dark:text-jecamavi-lightest-slate mb-4">
              Casos de Estudio
            </h2>
            <p className="body-text max-w-2xl mx-auto text-sm md:text-base">
              Cada proyecto cuenta una historia: un problema real, una solución precisa
              y un resultado medible.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="body-text text-center max-w-3xl mx-auto mb-14 text-sm">
            &ldquo;Todas nuestras soluciones son el punto de partida. Diseñamos
            sistemas con el mismo nivel de precisión y escalabilidad para tu
            próximo reto corporativo.&rdquo;
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
