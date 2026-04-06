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

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    empresa: "",
    solucion: "",
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
        setFormData({ nombre: "", correo: "", empresa: "", solucion: "", mensaje: "" });
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
          <div className="text-center mb-14">
            <span className="inline-block font-heading text-xs tracking-[0.4em] uppercase text-jecamavi-gold mb-4">
              Contacto
            </span>
            <h2 className="heading-lg text-jecamavi-dark dark:text-jecamavi-lightest-slate mb-4">
              ¿Listo para el siguiente nivel?
            </h2>
            <p className="body-text max-w-xl mx-auto">
              Cuéntanos sobre tu proyecto o consulta. El mensaje llega directamente
              al equipo correcto en menos de 24 horas.
            </p>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="contact-nombre" className="block text-xs tracking-[0.15em] uppercase text-[var(--text-secondary)] mb-2 font-medium">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="contact-nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="contact-correo" className="block text-xs tracking-[0.15em] uppercase text-[var(--text-secondary)] mb-2 font-medium">
                  Correo institucional
                </label>
                <input
                  type="email"
                  id="contact-correo"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="tu@empresa.com"
                />
              </div>

              <div>
                <label htmlFor="contact-empresa" className="block text-xs tracking-[0.15em] uppercase text-[var(--text-secondary)] mb-2 font-medium">
                  Empresa
                </label>
                <input
                  type="text"
                  id="contact-empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label htmlFor="contact-solucion" className="block text-xs tracking-[0.15em] uppercase text-[var(--text-secondary)] mb-2 font-medium">
                  Tipo de consulta
                </label>
                <select
                  id="contact-solucion"
                  name="solucion"
                  value={formData.solucion}
                  onChange={handleChange}
                  required
                  className="form-input appearance-none cursor-pointer"
                >
                  {solutionOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-8">
              <label htmlFor="contact-mensaje" className="block text-xs tracking-[0.15em] uppercase text-[var(--text-secondary)] mb-2 font-medium">
                Mensaje
              </label>
              <textarea
                id="contact-mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows={5}
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
                ) : status === "sent" ? "✓ Mensaje Enviado" : "Enviar Mensaje"}
              </button>

              {status === "sent" && (
                <span className="text-sm text-green-500 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  Tu mensaje llega al equipo en menos de 24 horas.
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
