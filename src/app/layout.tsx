import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "JECAMAVI | Arquitectura Digital de Alto Rendimiento",
  description:
    "En JECAMAVI destilamos la complejidad técnica para entregar innovación esencial. Desarrollamos software a medida, apps, SaaS y e-commerce que escalan tu visión global. Coatzacoalcos, México.",
  keywords: [
    "desarrollo de software",
    "software a medida",
    "aplicaciones web",
    "SaaS",
    "e-commerce",
    "apps móviles",
    "JECAMAVI",
    "Coatzacoalcos",
    "México",
    "innovación esencial",
    "arquitectura digital",
  ],
  authors: [{ name: "JECAMAVI" }],
  creator: "JECAMAVI",
  publisher: "JECAMAVI",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://jecamavi.com",
    siteName: "JECAMAVI",
    title: "JECAMAVI | Arquitectura Digital de Alto Rendimiento",
    description:
      "Destilamos la complejidad técnica para entregar innovación esencial. Software a medida, SaaS, e-commerce y apps móviles.",
  },
  twitter: {
    card: "summary_large_image",
    title: "JECAMAVI | Arquitectura Digital de Alto Rendimiento",
    description:
      "Destilamos la complejidad técnica para entregar innovación esencial.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${cinzel.variable} font-body antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
