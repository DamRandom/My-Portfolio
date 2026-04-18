import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "../styles/globals.css";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://damianbrito.dev"),
  title: "Ing. en Sistemas | Damian Brito",
  description: "Ingeniero en Ciencias de la Computación especializado en desarrollo frontend.",
  authors: [{ name: "Damian Brito" }],
  keywords: [
    "Damian Brito",
    "desarrollador frontend",
    "ingeniero de software",
    "portafolio",
    "sitio web",
    "React",
    "Next.js",
    "interfaz de usuario",
    "freelancer",
    "desarrollador web",
  ],
  openGraph: {
    title: "Ing. en Sistemas | Damian Brito",
    description: "Ingeniero en Ciencias de la Computación especializado en desarrollo frontend.",
    url: "/",
    siteName: "Portafolio Damian Brito",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Damian Brito - Portafolio",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ing. en Sistemas | Damian Brito",
    description: "Ingeniero en Ciencias de la Computación especializado en desarrollo frontend.",
    images: ["/images/profile.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" }
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${lora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
