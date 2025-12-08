import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const siteUrl = "https://rafeldev.github.io/navadav";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Navadav | Soluciones Tecnológicas para tu Negocio",
    template: "%s | Navadav",
  },
  description:
  "Tu aliado tecnológico para hacer crecer y modernizar tu negocio. Desarrollamos aplicaciones a la medida, integraciones API y modernización de sistemas.",
  authors: [{ name: "Navadav", /* url: "https://navadav.com" */ }],
  creator: "Navadav",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: "Navadav",
    title: "Navadav | Soluciones Tecnológicas para tu Negocio",
    description: "Navadav es una empresa de desarrollo de software que ofrece soluciones digitales a la medida para empresas de todos los tamaños.",
    images: [
      {
        url: `${basePath}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Navadav - Soluciones Tecnológicas",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: ["Navadav", "Soluciones Tecnológicas", "Desarrollo de Software", "Desarrollo Web", "Desarrollo Mobile", "Desarrollo de Aplicaciones", "Desarrollo de Software a la Medida", "Desarrollo de Software a la Medida para tu Negocio", "Desarrollo de Software a la Medida para tu Empresa", "Desarrollo de Software a la Medida para tu Negocio", "Desarrollo de Software a la Medida para tu Empresa"],
  publisher: "Navadav",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${plusJakartaSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
