"use client";
import { useEffect, useState } from "react";
import AboutMe from "@/components/AboutMe";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import ProjectSection from "@/components/Projects";
import ContactSection from "@/components/ContactMe";
import DownloadButton from "@/components/ui/DownloadButton";
import Services from "@/components/Services";

export default function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const [bgImage, setBgImage] = useState("/images/profile.jpg");

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    const mq = window.matchMedia("(orientation: portrait)");

    const setImage = () => {
      if (mq.matches) {
        setBgImage("/images/profile-vertical.png");
      } else {
        setBgImage("/images/profile.jpg");
      }
    };

    setImage();
    mq.addEventListener("change", setImage);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mq.removeEventListener("change", setImage);
    };
  }, []);

  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden">
        <div
          className="
            fixed top-0 left-0 w-full h-full z-0
            bg-no-repeat bg-center
            bg-[length:200%]
            md:bg-cover md:bg-center
          "
          style={{
            backgroundImage: `url('${bgImage}')`,
            transform: `translateY(${offsetY * -0.03}px)`,
            willChange: "transform",
          }}
        />

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
