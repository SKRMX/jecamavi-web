import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Tipos de consulta y a qué buzón se enrutan
const ROUTE_MAP: Record<string, { to: string; label: string }> = {
  saas:        { to: process.env.SMTP_TO_PROYECTOS!, label: "Software & SaaS a Medida" },
  legacy:      { to: process.env.SMTP_TO_PROYECTOS!, label: "Modernización Legacy" },
  ecommerce:   { to: process.env.SMTP_TO_PROYECTOS!, label: "E-commerce & Retail" },
  app:         { to: process.env.SMTP_TO_PROYECTOS!, label: "Aplicación Móvil" },
  soporte:     { to: process.env.SMTP_TO_SOPORTE!,   label: "Soporte Técnico" },
  facturacion: { to: process.env.SMTP_TO_FACTURAS!,  label: "Consulta de Facturación" },
  legal:       { to: process.env.SMTP_TO_LEGAL!,     label: "Asunto Legal / Normativo" },
  otro:        { to: process.env.SMTP_TO_PROYECTOS!, label: "Otro / Sin especificar" },
};

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.hostinger.com",
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER!,
    pass: process.env.SMTP_PASS!,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, correo, empresa, solucion, mensaje } = body;

    if (!nombre || !correo || !empresa || !solucion || !mensaje) {
      return NextResponse.json({ error: "Todos los campos son requeridos." }, { status: 400 });
    }

    const route = ROUTE_MAP[solucion] ?? ROUTE_MAP["otro"];

    const emailHtml = `
      <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:620px;margin:0 auto;background:#0A192F;color:#CCD6F6;padding:40px;border-radius:12px;">
        <div style="text-align:center;margin-bottom:28px;">
          <h1 style="font-family:Georgia,serif;letter-spacing:0.25em;color:#E6C068;font-size:20px;margin:0;">JECAMAVI</h1>
          <p style="font-size:9px;letter-spacing:0.4em;color:#8892B0;margin:4px 0 0;">INNOVACIÓN ESENCIAL</p>
        </div>

        <div style="background:#112240;border-radius:8px;padding:24px;border:1px solid rgba(255,255,255,0.06);">
          <p style="color:#E6C068;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;margin:0 0 4px;">Nuevo mensaje recibido</p>
          <h2 style="color:#CCD6F6;font-size:18px;margin:0 0 20px;">${route.label}</h2>

          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr><td style="padding:8px 0;color:#8892B0;width:160px;vertical-align:top;">Nombre</td><td style="padding:8px 0;color:#E6F1FF;">${nombre}</td></tr>
            <tr><td style="padding:8px 0;color:#8892B0;vertical-align:top;">Correo</td><td style="padding:8px 0;"><a href="mailto:${correo}" style="color:#E6C068;text-decoration:none;">${correo}</a></td></tr>
            <tr><td style="padding:8px 0;color:#8892B0;vertical-align:top;">Empresa</td><td style="padding:8px 0;color:#E6F1FF;">${empresa}</td></tr>
            <tr><td style="padding:8px 0;color:#8892B0;vertical-align:top;">Categoría</td><td style="padding:8px 0;color:#E6C068;font-weight:600;">${route.label}</td></tr>
          </table>

          <div style="margin-top:18px;padding-top:18px;border-top:1px solid rgba(255,255,255,0.06);">
            <p style="color:#8892B0;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;margin:0 0 10px;">Mensaje</p>
            <p style="color:#CCD6F6;line-height:1.7;margin:0;white-space:pre-line;">${mensaje}</p>
          </div>
        </div>

        <p style="text-align:center;font-size:11px;color:#8892B0;margin-top:24px;">
          Este mensaje fue enviado desde <strong style="color:#CCD6F6;">jecamavi.com</strong> —
          responder directamente a <a href="mailto:${correo}" style="color:#E6C068;">${correo}</a>
        </p>
        <p style="text-align:center;font-size:10px;color:#8892B0;margin-top:8px;">© 2026 JECAMAVI — Coatzacoalcos, México</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"JECAMAVI Web" <${process.env.SMTP_USER}>`,
      to: route.to,
      replyTo: correo,
      subject: `[JECAMAVI] ${route.label} — ${empresa}`,
      html: emailHtml,
    });

    return NextResponse.json({ message: "Mensaje enviado." }, { status: 200 });
  } catch (error) {
    console.error("[JECAMAVI] Error enviando email:", error);
    return NextResponse.json({ error: "Error al enviar el mensaje." }, { status: 500 });
  }
}
