"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";

// Lazy load seguro (sin SSR para evitar errores con animaciones / window)
const Skills = dynamic(() => import("@/components/Skills"), {
  ssr: false,
  loading: () => <div className="h-32" />,
});

const Services = dynamic(() => import("@/components/Services"), {
  ssr: false,
  loading: () => <div className="h-32" />,
});

const ProjectSection = dynamic(() => import("@/components/Projects"), {
  ssr: false,
  loading: () => <div className="h-32" />,
});

const ContactSection = dynamic(() => import("@/components/ContactMe"), {
  ssr: false,
  loading: () => <div className="h-32" />,
});

const BackToTop = dynamic(() => import("@/components/ui/BackToTop"), {
  ssr: false,
});



export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-white selection:bg-black selection:text-white">
      {/* HERO + BACKGROUND */}
      <section className="relative w-full min-h-screen overflow-hidden">
        <div className="relative z-10">
          <Hero />
          <AboutMe />
        </div>
      </section>

      {/* RESTO */}
      <section className="relative z-20">
        <Skills />
        <Services />
        <ProjectSection />
        <ContactSection />
        <BackToTop />
      </section>
    </main>
  );
}