import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "../styles/globals.css";

const lora = Lora({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-lora" });

export const metadata: Metadata = {
  title: "Software Engineer | Damian Brito",
  description: "Computer Science Engineer specialized in frontend development.",
  authors: [{ name: "Damian Brito" }],
  keywords: [
    "Damian Brito",
    "frontend developer",
    "software engineer",
    "portfolio",
    "website",
    "React",
    "Next.js",
    "UI",
    "freelancer",
    "web developer",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`
          ${lora.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
