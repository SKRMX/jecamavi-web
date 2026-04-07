import Link from "next/link";

export const metadata = {
  title: "Términos y Condiciones | JECAMAVI",
  description: "Términos y condiciones de uso del sitio web y servicios de JECAMAVI.",
};

export default function TerminosCondiciones() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-28 pb-20 px-6">
      <article className="max-w-3xl mx-auto prose-legal">
        <Link href="/" className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-jecamavi-gold hover:text-jecamavi-gold/80 transition-colors mb-8">
          ← Volver al inicio
        </Link>

        <h1 className="heading-lg text-jecamavi-dark dark:text-jecamavi-lightest-slate mb-2">Términos y Condiciones</h1>
        <p className="text-xs text-[var(--text-secondary)] mb-8">Última actualización: 6 de abril de 2026</p>

        <section className="legal-section">
          <h2>1. Aceptación de los Términos</h2>
          <p>Al acceder y utilizar el sitio web <strong>jecamavi.com</strong> (en adelante &ldquo;el Sitio&rdquo;), usted acepta quedar vinculado por estos Términos y Condiciones. Si no está de acuerdo con alguno de estos términos, le rogamos abstenerse de utilizar el Sitio.</p>
        </section>

        <section className="legal-section">
          <h2>2. Identidad del Prestador</h2>
          <p><strong>JECAMAVI</strong>, con domicilio en Coatzacoalcos, Veracruz, México. Correo de contacto: <a href="mailto:legal@jecamavi.com" className="text-jecamavi-gold hover:underline">legal@jecamavi.com</a>.</p>
        </section>

        <section className="legal-section">
          <h2>3. Descripción del Servicio</h2>
          <p>JECAMAVI es una empresa de desarrollo de software a medida que ofrece servicios de:</p>
          <ul>
            <li>Desarrollo de plataformas SaaS y automatización empresarial</li>
            <li>Modernización de sistemas legados</li>
            <li>Desarrollo de eCommerce</li>
            <li>Aplicaciones móviles multiplataforma</li>
            <li>Landing pages corporativas</li>
            <li>Consultoría y auditoría técnica</li>
          </ul>
          <p>El Sitio tiene carácter informativo y de generación de leads comerciales. Los servicios específicos, entregables, plazos y precios se formalizan exclusivamente mediante contrato individual.</p>
        </section>

        <section className="legal-section">
          <h2>4. Precios y Cotizaciones</h2>
          <p>Los rangos de precios publicados en el Sitio son <strong>referenciales y orientativos</strong>. No constituyen una oferta vinculante ni un compromiso de precio fijo. El precio final de cada proyecto se determinará mediante:</p>
          <ul>
            <li>Auditoría técnica inicial y levantamiento de requerimientos</li>
            <li>Propuesta formal por escrito con alcance, entregables y cronograma</li>
            <li>Contrato de prestación de servicios firmado por ambas partes</li>
          </ul>
          <p>JECAMAVI se reserva el derecho de modificar los rangos de precio referenciales publicados en el Sitio en cualquier momento y sin previo aviso.</p>
        </section>

        <section className="legal-section">
          <h2>5. Proceso de Contratación</h2>
          <p>El envío de un formulario de contacto o solicitud de auditoría a través del Sitio <strong>no constituye un contrato de servicios</strong>. La relación contractual se formaliza únicamente cuando:</p>
          <ul>
            <li>Se ha realizado la auditoría técnica preliminar</li>
            <li>Se ha emitido una propuesta formal por escrito</li>
            <li>Ambas partes han firmado un contrato de prestación de servicios que incluye alcance, entregables, cronograma, condiciones de pago y cláusulas de propiedad intelectual</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>6. Propiedad Intelectual</h2>
          <p>Todo el contenido del Sitio — incluyendo pero no limitado a textos, diseños, logotipos, iconos, imágenes, código fuente y estructura — es propiedad de JECAMAVI o se utiliza bajo licencia, y está protegido por la Ley Federal del Derecho de Autor de México.</p>
          <p>Queda prohibida la reproducción, distribución, transformación o comunicación pública del contenido del Sitio sin autorización expresa por escrito de JECAMAVI.</p>
          <p>La propiedad intelectual del código fuente desarrollado para cada cliente se define individualmente en el contrato de prestación de servicios correspondiente.</p>
        </section>

        <section className="legal-section">
          <h2>7. Limitación de Responsabilidad</h2>
          <p>JECAMAVI no garantiza que el Sitio esté libre de errores, interrupciones o virus. El uso del Sitio se realiza bajo la exclusiva responsabilidad del usuario.</p>
          <p>JECAMAVI no será responsable de:</p>
          <ul>
            <li>Daños directos o indirectos derivados del uso o imposibilidad de uso del Sitio</li>
            <li>Decisiones comerciales tomadas basándose exclusivamente en la información publicada en el Sitio</li>
            <li>Interrupciones temporales del servicio por mantenimiento o causas de fuerza mayor</li>
            <li>Contenido de sitios web de terceros enlazados desde el Sitio</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>8. Garantías sobre Proyectos</h2>
          <p>Las métricas de impacto, porcentajes de mejora y resultados publicados en el Sitio (sección de &ldquo;Impacto Potencial&rdquo; y casos de estudio) representan <strong>resultados potenciales basados en experiencia previa</strong>. No constituyen una garantía de resultados específicos para proyectos futuros, ya que cada proyecto tiene variables únicas.</p>
          <p>Las garantías específicas sobre entregables, rendimiento y soporte se establecen exclusivamente en el contrato individual de cada proyecto.</p>
        </section>

        <section className="legal-section">
          <h2>9. Testimonios y Casos de Estudio</h2>
          <p>Los testimonios publicados en el Sitio representan experiencias individuales de clientes anteriores. Los resultados pueden variar según el proyecto, industria y circunstancias específicas. Los casos de estudio se presentan con fines ilustrativos y con la autorización de los clientes involucrados.</p>
        </section>

        <section className="legal-section">
          <h2>10. Confidencialidad</h2>
          <p>JECAMAVI se compromete a mantener la confidencialidad de toda la información proporcionada por los usuarios a través del Sitio. Para proyectos formalizados, se ofrece la firma de un Acuerdo de No Divulgación (NDA) bilateral como parte del proceso de contratación.</p>
        </section>

        <section className="legal-section">
          <h2>11. Cancelaciones y Reembolsos</h2>
          <p>Las políticas de cancelación y reembolso se establecen individualmente en cada contrato de prestación de servicios. Como política general:</p>
          <ul>
            <li>La auditoría técnica inicial es gratuita y sin compromiso</li>
            <li>Cualquier anticipo o pago parcial se rige por las cláusulas específicas del contrato firmado</li>
            <li>El trabajo entregado y aprobado por el cliente no es reembolsable</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>12. Modificaciones</h2>
          <p>JECAMAVI se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entran en vigor desde su publicación en el Sitio. El uso continuado del Sitio después de la publicación de modificaciones constituye la aceptación de las mismas.</p>
        </section>

        <section className="legal-section">
          <h2>13. Legislación Aplicable y Jurisdicción</h2>
          <p>Estos Términos y Condiciones se rigen por las leyes vigentes en los Estados Unidos Mexicanos. Para cualquier controversia derivada del uso del Sitio, las partes se someten a la jurisdicción de los tribunales competentes de Coatzacoalcos, Veracruz, México, renunciando a cualquier otro fuero que pudiera corresponderles.</p>
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
