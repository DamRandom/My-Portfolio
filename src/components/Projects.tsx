"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Tooltip } from "@/components/ui/Tooltip";
import projects from "@/data/projectsData";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(projects.length / itemsPerSlide);

  const visibleProjects = projects.slice(
    currentIndex * itemsPerSlide,
    currentIndex * itemsPerSlide + itemsPerSlide
  );

  return (
    <section
      id="projects"
      className="w-full px-6 sm:px-10 md:px-20 py-12 bg-[#f0eded] text-[#06061B]"
    >
      <h2 className="text-3xl sm:text-4xl font-lora font-semibold mb-6 border-b border-[#06061B] mx-0 sm:mx-20 text-center sm:text-right">
        Proyectos & Trabajo
      </h2>

      <p className="text-base sm:text-lg font-lora leading-relaxed tracking-wide text-[#06061B] text-justify mx-0 sm:mx-20 my-6">
        Aquí tienes algunos de mis proyectos para mostrar mis habilidades en la construcción de sitios web modernos.
      </p>

      <div className="relative max-w-6xl mx-auto font-lora bg-white/10 backdrop-blur-[20px] shadow-2xl border border-white/20 p-6 sm:p-8 flex flex-col gap-12 overflow-hidden">
        {/* Carrusel */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-12"
        >
          {visibleProjects.map(({ title, image, description, github, vercel, tags }) => (
            <motion.article
              key={title}
              className="flex flex-col lg:flex-row gap-6 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Imagen */}
              <div className="relative shadow-lg border border-white/20 overflow-hidden w-full max-w-[300px] flex-shrink-0">
                <Image
                  src={image}
                  alt={title}
                  width={300}
                  height={199}
                  style={{ objectFit: "cover" }}
                  priority
                />
                <div
                  className={`absolute inset-0 backdrop-blur-sm transition-opacity duration-300 hover:opacity-0 flex justify-center items-center
                    ${
                      title === "Rose-Reverie"
                        ? "bg-[#501823]/40"
                        : title === "PowerHaus"
                        ? "bg-[#D36112]/40"
                        : title === "LitHub"
                        ? "bg-[#F3F4F6]/90"
                        : "bg-transparent"
                    }`}
                >
                  {title === "Rose-Reverie" && (
                    <div className="absolute left-0 right-0 h-[110px] bg-[#0C1212] flex justify-center items-center">
                      <Image
                        src="/images/projects/rose-reverie-logo.png"
                        alt="Logo Rose-Reverie"
                        width={120}
                        height={140}
                        priority
                      />
                    </div>
                  )}
                  {title === "PowerHaus" && (
                    <div className="absolute left-0 right-0 h-[110px] bg-[#101828] flex justify-center items-center">
                      <Image
                        src="/images/projects/powerhaus-logo.png"
                        alt="Logo PowerHaus"
                        width={120}
                        height={40}
                        priority
                      />
                    </div>
                  )}
                  {title === "LitHub" && (
                    <div className="absolute left-0 right-0 h-[110px] bg-[#F4F5F7] shadow-lg flex justify-center items-center">
                      <Image
                        src="/images/projects/lithub-logo.png"
                        alt="Logo LitHub"
                        width={120}
                        height={40}
                        priority
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Contenido */}
              <div className="flex flex-col justify-between w-full lg:w-2/3">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-[#06061B]">
                  {title}
                </h3>
                <p className="text-sm sm:text-base font-light mb-4 text-[#06061B]">
                  {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {tags.map((tag) => (
                    <motion.button
                      key={tag}
                      initial={false}
                      animate={{
                        backgroundColor: "#e9e9e9",
                        color: "#06061B",
                        boxShadow: "0 4px 8px rgba(6, 6, 41, 0.25)",
                        scale: 1,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                        duration: 0.3,
                      }}
                      className="px-3 py-1 text-xs sm:text-sm font-medium backdrop-blur-sm rounded-none border border-transparent cursor-default"
                    >
                      {tag}
                    </motion.button>
                  ))}
                </div>

                <div className="flex gap-6 text-[#06061B] text-xl">
                  <Tooltip text="Ver código">
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Repositorio de GitHub de ${title}`}
                      className="hover:text-[#101031] transition-colors"
                    >
                      <FiGithub />
                    </a>
                  </Tooltip>
                  <Tooltip text="Visitar sitio">
                    <a
                      href={vercel}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Sitio en vivo de ${title}`}
                      className="hover:text-[#101031] transition-colors"
                    >
                      <FiExternalLink />
                    </a>
                  </Tooltip>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Puntos de navegación */}
        <div className="flex justify-center gap-3 mt-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#06061B] scale-110"
                  : "bg-[#06061B]/30 hover:bg-[#06061B]/60"
              }`}
              aria-label={`Ir a la diapositiva ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
