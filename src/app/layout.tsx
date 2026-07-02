import React from "react";
import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";

import "@/styles/globals.css";


const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://damianbrito.dev"),
  title: "Ing. en Sistemas | Damian Brito",
  description:
    "Ingeniero en Ciencias de la Computación especializado en desarrollo frontend.",
  authors: [{ name: "Damian Brito" }],
  keywords: [
    "Damian Brito",
    "desarrollador frontend",
    "ingeniero de software",
    "portafolio",
    "React",
    "Next.js",
  ],
  openGraph: {
    title: "Ing. en Sistemas | Damian Brito",
    description:
      "Ingeniero en Ciencias de la Computación especializado en desarrollo frontend.",
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
    description:
      "Ingeniero en Ciencias de la Computación especializado en desarrollo frontend.",
    images: ["/images/profile.jpg"],
  },
};

import { LanguageProvider } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${lora.variable} font-sans bg-white text-black antialiased selection:bg-black selection:text-white`}>
        <LanguageProvider>

          <LanguageSwitcher />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}