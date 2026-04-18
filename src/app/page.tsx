import dynamic from "next/dynamic";
import AboutMe from "@/components/AboutMe";
import Hero from "../components/Hero";
import ParallaxBackground from "@/components/ParallaxBackground";

// Lazy loading para componentes que están debajo del doblez (below the fold)
const Skills = dynamic(() => import("../components/Skills"));
const Services = dynamic(() => import("@/components/Services"));
const ProjectSection = dynamic(() => import("@/components/Projects"));
const ContactSection = dynamic(() => import("@/components/ContactMe"));
const DownloadButton = dynamic(() => import("@/components/ui/DownloadButton"));

export default function Home() {
  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden">
        <ParallaxBackground />

        <div className="relative z-10">
          <Hero />
          <AboutMe />
        </div>
      </div>

      <div className="relative z-20">
        <Skills />
        <Services />
        <ProjectSection />
        <ContactSection />
        <DownloadButton />
      </div>
    </>
  );
}
