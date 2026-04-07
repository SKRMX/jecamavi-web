import Link from "next/link";

export const metadata = {
  title: "Política de Cookies | JECAMAVI",
  description: "Política de cookies del sitio web jecamavi.com.",
};

export default function PoliticaCookies() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-28 pb-20 px-6">
      <article className="max-w-3xl mx-auto prose-legal">
        <Link href="/" className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-jecamavi-gold hover:text-jecamavi-gold/80 transition-colors mb-8">
          ← Volver al inicio
        </Link>

        <h1 className="heading-lg text-jecamavi-dark dark:text-jecamavi-lightest-slate mb-2">Política de Cookies</h1>
        <p className="text-xs text-[var(--text-secondary)] mb-8">Última actualización: 6 de abril de 2026</p>

        <section className="legal-section">
          <h2>1. ¿Qué son las Cookies?</h2>
          <p>Las cookies son pequeños archivos de texto que los sitios web almacenan en su dispositivo (ordenador, teléfono móvil, tablet) cuando usted los visita. Se utilizan para recordar sus preferencias, mejorar la experiencia de navegación y recopilar información analítica.</p>
        </section>

        <section className="legal-section">
          <h2>2. Cookies que Utilizamos</h2>

          <h3>Cookies estrictamente necesarias</h3>
          <p>Son imprescindibles para el funcionamiento del Sitio. Permiten la navegación básica y el uso de funcionalidades esenciales como el modo oscuro/claro.</p>

          <h3>Cookies analíticas</h3>
          <p>Nos permiten medir y analizar la navegación de los usuarios de forma agregada y anónima para mejorar continuamente nuestro Sitio. Estas cookies no recopilan información que pueda identificarle personalmente.</p>

          <h3>Cookies de preferencias</h3>
          <p>Almacenan las preferencias del usuario (como el tema visual seleccionado) para personalizar su experiencia en visitas posteriores.</p>
        </section>

        <section className="legal-section">
          <h2>3. Cookies de Terceros</h2>
          <p>En caso de implementar herramientas de análisis (como Google Analytics o similares) o servicios de terceros, estos podrán establecer sus propias cookies. JECAMAVI no tiene control sobre las cookies establecidas por terceros. Le recomendamos consultar las políticas de privacidad de estos proveedores.</p>
        </section>

        <section className="legal-section">
          <h2>4. ¿Cómo Gestionar las Cookies?</h2>
          <p>Usted puede configurar su navegador para bloquear o eliminar cookies en cualquier momento. A continuación le proporcionamos enlaces a las instrucciones de los navegadores más comunes:</p>
          <ul>
            <li><strong>Google Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
            <li><strong>Mozilla Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</li>
            <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
            <li><strong>Microsoft Edge:</strong> Configuración → Privacidad → Cookies</li>
          </ul>
          <p>Tenga en cuenta que la desactivación de cookies puede afectar la funcionalidad del Sitio.</p>
        </section>

        <section className="legal-section">
          <h2>5. Actualizaciones</h2>
          <p>JECAMAVI podrá actualizar esta Política de Cookies para reflejar cambios en las tecnologías utilizadas o en la legislación aplicable. Le recomendamos revisar esta página de forma periódica.</p>
        </section>

        <section className="legal-section">
          <h2>6. Contacto</h2>
          <p>Si tiene preguntas sobre nuestra política de cookies, puede contactarnos en <a href="mailto:legal@jecamavi.com" className="text-jecamavi-gold hover:underline">legal@jecamavi.com</a>.</p>
        </section>

        <div className="mt-12 pt-8 border-t border-[var(--border-color)] dark:border-white/5">
          <p className="text-xs text-[var(--text-secondary)]">
            © 2026 JECAMAVI — Innovación Esencial. Todos los derechos reservados.
          </p>
        </div>
      </article>
    </main>
  );
}
