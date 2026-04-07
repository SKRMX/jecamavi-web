import Link from "next/link";

export const metadata = {
  title: "Aviso de Privacidad | JECAMAVI",
  description: "Aviso de Privacidad integral de JECAMAVI conforme a la LFPDPPP.",
};

export default function AvisoPrivacidad() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] pt-28 pb-20 px-6">
      <article className="max-w-3xl mx-auto prose-legal">
        <Link href="/" className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-jecamavi-gold hover:text-jecamavi-gold/80 transition-colors mb-8">
          ← Volver al inicio
        </Link>

        <h1 className="heading-lg text-jecamavi-dark dark:text-jecamavi-lightest-slate mb-2">Aviso de Privacidad Integral</h1>
        <p className="text-xs text-[var(--text-secondary)] mb-8">Última actualización: 6 de abril de 2026</p>

        <section className="legal-section">
          <h2>1. Identidad del Responsable</h2>
          <p><strong>JECAMAVI</strong> (en lo sucesivo &ldquo;el Responsable&rdquo;), con domicilio en Coatzacoalcos, Veracruz, México, es responsable del tratamiento de sus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (&ldquo;LFPDPPP&rdquo;) y su Reglamento.</p>
          <p>Correo de contacto para ejercer derechos ARCO: <a href="mailto:legal@jecamavi.com" className="text-jecamavi-gold hover:underline">legal@jecamavi.com</a></p>
        </section>

        <section className="legal-section">
          <h2>2. Datos Personales que Recabamos</h2>
          <p>A través de nuestro formulario de contacto y comunicaciones directas, podemos recabar los siguientes datos personales:</p>
          <ul>
            <li>Nombre completo</li>
            <li>Correo electrónico institucional</li>
            <li>Nombre de la empresa u organización</li>
            <li>Industria o sector</li>
            <li>Información del proyecto (tipo de consulta, estimación de presupuesto, timeline, número estimado de usuarios)</li>
            <li>Cualquier información adicional que usted proporcione voluntariamente en el campo de mensaje</li>
          </ul>
          <p><strong>No recabamos datos personales sensibles</strong> (origen racial, estado de salud, datos biométricos, ideología, preferencias sexuales, creencias religiosas o datos financieros detallados).</p>
        </section>

        <section className="legal-section">
          <h2>3. Finalidades del Tratamiento</h2>
          <h3>Finalidades primarias (necesarias):</h3>
          <ul>
            <li>Dar seguimiento a su solicitud de contacto o consulta</li>
            <li>Elaborar propuestas comerciales y cotizaciones</li>
            <li>Celebrar y cumplir obligaciones contractuales</li>
            <li>Brindar soporte técnico y atención postventa</li>
            <li>Facturación y administración de pagos</li>
          </ul>
          <h3>Finalidades secundarias (no necesarias):</h3>
          <ul>
            <li>Enviar comunicaciones sobre nuevos servicios, actualizaciones tecnológicas o contenido relevante</li>
            <li>Realizar encuestas de satisfacción</li>
            <li>Elaborar estadísticas internas (de forma anonimizada)</li>
          </ul>
          <p>Si usted no desea que sus datos personales sean tratados con finalidades secundarias, puede enviar su negativa a <a href="mailto:legal@jecamavi.com" className="text-jecamavi-gold hover:underline">legal@jecamavi.com</a>.</p>
        </section>

        <section className="legal-section">
          <h2>4. Transferencias de Datos</h2>
          <p>JECAMAVI no vende, cede ni comercializa sus datos personales a terceros. Podremos compartir sus datos únicamente en los siguientes supuestos:</p>
          <ul>
            <li>Cuando sea requerido por autoridades competentes conforme a la legislación aplicable</li>
            <li>Con proveedores de servicios tecnológicos (hosting, correo electrónico) que actúan como encargados del tratamiento, sujetos a cláusulas de confidencialidad</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>5. Derechos ARCO</h2>
          <p>Usted tiene derecho a <strong>Acceder, Rectificar, Cancelar u Oponerse</strong> al tratamiento de sus datos personales (derechos &ldquo;ARCO&rdquo;). Para ejercer cualquiera de estos derechos, envíe su solicitud a <a href="mailto:legal@jecamavi.com" className="text-jecamavi-gold hover:underline">legal@jecamavi.com</a> con la siguiente información:</p>
          <ul>
            <li>Nombre completo del titular</li>
            <li>Descripción clara del derecho que desea ejercer</li>
            <li>Documentos que acrediten su identidad o representación legal</li>
            <li>Cualquier elemento que facilite la localización de los datos personales</li>
          </ul>
          <p>Responderemos su solicitud en un plazo máximo de 20 días hábiles contados a partir de la recepción de la solicitud completa.</p>
        </section>

        <section className="legal-section">
          <h2>6. Uso de Cookies y Tecnologías de Rastreo</h2>
          <p>Nuestro sitio web puede utilizar cookies y tecnologías similares con fines analíticos y de mejora de experiencia de usuario. Estas tecnologías no recaban datos personales identificables de forma directa. Puede consultar nuestra <Link href="/cookies" className="text-jecamavi-gold hover:underline">Política de Cookies</Link> para mayor detalle.</p>
        </section>

        <section className="legal-section">
          <h2>7. Medidas de Seguridad</h2>
          <p>Implementamos medidas de seguridad administrativas, técnicas y físicas para proteger sus datos personales contra daño, pérdida, alteración, destrucción, uso, acceso o tratamiento no autorizado, incluyendo:</p>
          <ul>
            <li>Cifrado de comunicaciones (SSL/TLS)</li>
            <li>Acceso restringido a datos mediante autenticación</li>
            <li>Revisión periódica de políticas internas de seguridad</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>8. Modificaciones al Aviso de Privacidad</h2>
          <p>Nos reservamos el derecho de modificar este Aviso de Privacidad en cualquier momento. Las modificaciones serán publicadas en esta misma página web con la fecha de última actualización.</p>
        </section>

        <section className="legal-section">
          <h2>9. Legislación Aplicable y Jurisdicción</h2>
          <p>El presente Aviso de Privacidad se rige por la LFPDPPP, su Reglamento y los Lineamientos del Aviso de Privacidad publicados en el Diario Oficial de la Federación. Para cualquier controversia, las partes se someten a la jurisdicción de los tribunales competentes de Coatzacoalcos, Veracruz, México.</p>
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
