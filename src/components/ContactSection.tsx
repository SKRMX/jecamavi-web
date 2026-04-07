"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const solutionOptions = [
  { value: "",           label: "Seleccionar tipo de consulta..." },
  { value: "saas",       label: "🖥  Software & SaaS a Medida",       group: "Proyecto" },
  { value: "legacy",     label: "🔄  Modernización Legacy",             group: "Proyecto" },
  { value: "ecommerce",  label: "🛒  E-commerce & Retail",              group: "Proyecto" },
  { value: "app",        label: "📱  Aplicación Móvil",                group: "Proyecto" },
  { value: "soporte",    label: "🛠  Soporte Técnico",                  group: "Soporte" },
  { value: "facturacion",label: "🧾  Consulta de Facturación",          group: "Administración" },
  { value: "legal",      label: "⚖  Asunto Legal / Normativo",          group: "Administración" },
  { value: "otro",       label: "💬  Otro / No estoy seguro",           group: "Proyecto" },
];

const budgetOptions = [
  { value: "", label: "Rango de inversión..." },
  { value: "50k-150k", label: "$50K — $150K MXN" },
  { value: "150k-300k", label: "$150K — $300K MXN" },
  { value: "300k-500k", label: "$300K — $500K MXN" },
  { value: "500k+", label: "$500K+ MXN" },
  { value: "no-seguro", label: "No estoy seguro" },
];

const timelineOptions = [
  { value: "", label: "Timeline deseado..." },
  { value: "urgente", label: "Urgente (< 1 mes)" },
  { value: "corto", label: "Corto plazo (1-3 meses)" },
  { value: "medio", label: "Mediano plazo (3-6 meses)" },
  { value: "largo", label: "Largo plazo (6+ meses)" },
  { value: "flexible", label: "Flexible" },
];

const industryOptions = [
  { value: "", label: "Seleccionar industria..." },
  { value: "salud", label: "Salud / Clínicas" },
  { value: "seguridad", label: "Seguridad Industrial" },
  { value: "logistica", label: "Logística / Transporte" },
  { value: "retail", label: "Retail / eCommerce" },
  { value: "manufactura", label: "Manufactura / Mantenimiento" },
  { value: "saas", label: "SaaS / Tecnología" },
  { value: "educacion", label: "Educación" },
  { value: "finanzas", label: "Finanzas / Banca" },
  { value: "otra", label: "Otra" },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    empresa: "",
    solucion: "",
    presupuesto: "",
    timeline: "",
    usuarios: "",
    industria: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("sent");
        setFormData({
          nombre: "", correo: "", empresa: "", solucion: "",
          presupuesto: "", timeline: "", usuarios: "", industria: "", mensaje: "",
        });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contacto" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-jecamavi-gold/20 to-transparent" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-jecamavi-gold/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-6">
            <span className="inline-block font-heading text-xs tracking-[0.4em] uppercase text-jecamavi-gold mb-4">
              Contacto
            </span>
            <h2 className="heading-lg text-jecamavi-dark dark:text-jecamavi-lightest-slate mb-4">
              Solicita tu Auditoría Técnica Inicial
            </h2>
            <p className="body-text max-w-xl mx-auto">
              Sin costo y sin compromiso. Analizamos tu caso, evaluamos viabilidad técnica
              y te entregamos un roadmap de alto nivel con estimación de fases.
            </p>
          </div>
        </ScrollReveal>

        {/* Audit includes */}
        <ScrollReveal delay={50}>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              "Análisis de arquitectura",
              "Viabilidad técnica",
              "Stack sugerido",
              "Estimación de fases",
              "Identificación de riesgos",
            ].map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/15 text-[11px] tracking-wider text-emerald-400/80 font-medium"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Routing info chips */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { label: "Proyectos", email: "proyectos@jecamavi.com" },
              { label: "Soporte",   email: "soporte@jecamavi.com" },
              { label: "Facturas",  email: "facturas@jecamavi.com" },
              { label: "Legal",     email: "legal@jecamavi.com" },
            ].map((item) => (
              <a
                key={item.email}
                href={`mailto:${item.email}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-color)] dark:border-white/5 text-xs text-[var(--text-secondary)] hover:border-jecamavi-gold/40 hover:text-jecamavi-gold transition-all duration-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-jecamavi-gold/60" />
                <span className="font-medium">{item.label}</span>
                <span className="opacity-60">{item.email}</span>
              </a>
            ))}
          </div>
        </ScrollReveal>

        {/* Form */}
        <ScrollReveal delay={200}>
          <form
            onSubmit={handleSubmit}
            className="relative rounded-2xl border border-[var(--border-color)] dark:border-white/5 bg-[var(--bg-secondary)] dark:bg-jecamavi-dark-light/30 p-8 md:p-12 backdrop-blur-sm"
          >
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="contact-nombre" className="block text-xs tracking-[0.15em] uppercase text-[var(--text-secondary)] mb-2 font-medium">
                  Nombre completo
                </label>
                <input
                  type="text" id="contact-nombre" name="nombre"
                  value={formData.nombre} onChange={handleChange} required
                  className="form-input" placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="contact-correo" className="block text-xs tracking-[0.15em] uppercase text-[var(--text-secondary)] mb-2 font-medium">
                  Correo institucional
                </label>
                <input
                  type="email" id="contact-correo" name="correo"
                  value={formData.correo} onChange={handleChange} required
                  className="form-input" placeholder="tu@empresa.com"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="contact-empresa" className="block text-xs tracking-[0.15em] uppercase text-[var(--text-secondary)] mb-2 font-medium">
                  Empresa
                </label>
                <input
                  type="text" id="contact-empresa" name="empresa"
                  value={formData.empresa} onChange={handleChange} required
                  className="form-input" placeholder="Nombre de tu empresa"
                />
              </div>
              <div>
                <label htmlFor="contact-solucion" className="block text-xs tracking-[0.15em] uppercase text-[var(--text-secondary)] mb-2 font-medium">
                  Tipo de consulta
                </label>
                <select
                  id="contact-solucion" name="solucion"
                  value={formData.solucion} onChange={handleChange} required
                  className="form-input appearance-none cursor-pointer"
                >
                  {solutionOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 3 — Qualification fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="contact-industria" className="block text-xs tracking-[0.15em] uppercase text-[var(--text-secondary)] mb-2 font-medium">
                  Industria
                </label>
                <select
                  id="contact-industria" name="industria"
                  value={formData.industria} onChange={handleChange}
                  className="form-input appearance-none cursor-pointer"
                >
                  {industryOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="contact-presupuesto" className="block text-xs tracking-[0.15em] uppercase text-[var(--text-secondary)] mb-2 font-medium">
                  Rango de inversión
                </label>
                <select
                  id="contact-presupuesto" name="presupuesto"
                  value={formData.presupuesto} onChange={handleChange}
                  className="form-input appearance-none cursor-pointer"
                >
                  {budgetOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="contact-timeline" className="block text-xs tracking-[0.15em] uppercase text-[var(--text-secondary)] mb-2 font-medium">
                  Timeline deseado
                </label>
                <select
                  id="contact-timeline" name="timeline"
                  value={formData.timeline} onChange={handleChange}
                  className="form-input appearance-none cursor-pointer"
                >
                  {timelineOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="contact-usuarios" className="block text-xs tracking-[0.15em] uppercase text-[var(--text-secondary)] mb-2 font-medium">
                  Número de usuarios estimado
                </label>
                <input
                  type="text" id="contact-usuarios" name="usuarios"
                  value={formData.usuarios} onChange={handleChange}
                  className="form-input" placeholder="Ej: 50, 500, 10,000+"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-8">
              <label htmlFor="contact-mensaje" className="block text-xs tracking-[0.15em] uppercase text-[var(--text-secondary)] mb-2 font-medium">
                Mensaje
              </label>
              <textarea
                id="contact-mensaje" name="mensaje"
                value={formData.mensaje} onChange={handleChange} required
                rows={4}
                className="form-input resize-none"
                placeholder="Describe brevemente tu proyecto, necesidad o consulta..."
              />
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                      <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" className="opacity-75" />
                    </svg>
                    Enviando...
                  </span>
                ) : status === "sent" ? "✓ Solicitud Enviada" : "Solicitar Auditoría Gratuita"}
              </button>

              {status === "sent" && (
                <span className="text-sm text-green-500 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  Tu solicitud llega al equipo en menos de 24 horas.
                </span>
              )}
              {status === "error" && (
                <span className="text-sm text-red-400">
                  Error al enviar. Escríbenos directamente a{" "}
                  <a href="mailto:proyectos@jecamavi.com" className="underline hover:text-red-300">
                    proyectos@jecamavi.com
                  </a>
                </span>
              )}
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
