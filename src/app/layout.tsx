import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "../styles/globals.css";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
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
