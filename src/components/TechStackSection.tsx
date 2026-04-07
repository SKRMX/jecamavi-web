"use client";

import ScrollReveal from "./ScrollReveal";

interface TechItem {
  name: string;
  category: string;
}

const techStack: TechItem[] = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Flutter", category: "Mobile" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Python", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Data" },
  { name: "MongoDB", category: "Data" },
  { name: "Redis", category: "Data" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "Cloud" },
  { name: "Kubernetes", category: "Cloud" },
  { name: "OpenAI", category: "AI" },
  { name: "TensorFlow", category: "AI" },
  { name: "Stripe", category: "Pagos" },
  { name: "Mercado Pago", category: "Pagos" },
  { name: "Power BI", category: "Analytics" },
];

// Duplicate for seamless marquee
const marqueeItems = [...techStack, ...techStack];

function TechBadge({ tech }: { tech: TechItem }) {
  const categoryColors: Record<string, string> = {
    Frontend: "from-blue-500/20 to-blue-600/5 border-blue-500/20",
    Mobile: "from-purple-500/20 to-purple-600/5 border-purple-500/20",
    Backend: "from-emerald-500/20 to-emerald-600/5 border-emerald-500/20",
    Data: "from-amber-500/20 to-amber-600/5 border-amber-500/20",
    Cloud: "from-sky-500/20 to-sky-600/5 border-sky-500/20",
    AI: "from-rose-500/20 to-rose-600/5 border-rose-500/20",
    Pagos: "from-jecamavi-gold/20 to-jecamavi-gold/5 border-jecamavi-gold/20",
    Analytics: "from-indigo-500/20 to-indigo-600/5 border-indigo-500/20",
  };

  return (
    <div
      className={`flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-br ${
        categoryColors[tech.category] || "from-gray-500/20 to-gray-600/5 border-gray-500/20"
      } border backdrop-blur-sm hover:scale-105 transition-transform duration-300 cursor-default`}
    >
      <span className="font-heading text-sm tracking-wider text-jecamavi-dark dark:text-jecamavi-lightest-slate font-semibold whitespace-nowrap">
        {tech.name}
      </span>
      <span className="text-[9px] tracking-[0.1em] uppercase text-[var(--text-secondary)] opacity-60 whitespace-nowrap">
        {tech.category}
      </span>
    </div>
  );
}

export default function TechStackSection() {
  return (
    <section id="stack" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--bg-secondary)] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-jecamavi-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-jecamavi-gold/20 to-transparent" />

      <div className="relative z-10">
        <ScrollReveal>
          <div className="text-center mb-14 max-w-6xl mx-auto px-6">
            <span className="inline-block font-heading text-xs tracking-[0.4em] uppercase text-jecamavi-gold mb-4">
              Ecosistema
            </span>
            <h2 className="heading-lg text-jecamavi-dark dark:text-jecamavi-lightest-slate mb-4">
              Stack Tecnológico de Élite
            </h2>
            <p className="body-text max-w-2xl mx-auto">
              Seleccionamos cada herramienta por su rendimiento probado en producción.
              Sin modas, sin experimentos — solo tecnología que escala.
            </p>
          </div>
        </ScrollReveal>

        {/* Marquee Row 1 */}
        <div className="relative mb-4">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--bg-secondary)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--bg-secondary)] to-transparent z-10 pointer-events-none" />

          <div className="flex gap-4 animate-marquee">
            {marqueeItems.map((tech, i) => (
              <TechBadge key={`row1-${i}`} tech={tech} />
            ))}
          </div>
        </div>

        {/* Marquee Row 2 (reverse) */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--bg-secondary)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--bg-secondary)] to-transparent z-10 pointer-events-none" />

          <div className="flex gap-4 animate-marquee-reverse">
            {[...marqueeItems].reverse().map((tech, i) => (
              <TechBadge key={`row2-${i}`} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
