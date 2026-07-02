"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import projects from "@/data/projectsData";
import { useLanguage } from "@/context/LanguageContext";

export default function Projects() {
  const { t, language } = useLanguage();
  const [page, setPage] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const paginate = (newDirection: number) => {
    setPage((prevPage) => {
      let nextPage = prevPage + newDirection;
      if (nextPage < 0) nextPage = totalPages - 1;
      if (nextPage >= totalPages) nextPage = 0;
      return nextPage;
    });
  };

  const currentProjects = projects.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  return (
    <section
      id="projects"
      className="relative w-full bg-white py-24 px-6 md:px-12 lg:px-20 text-black"
    >
      <div className="max-w-[1400px] mx-auto space-y-16">
        {/* Título Consistente */}
        <div className="w-full">
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-black uppercase">
              {t("projects.title")}
            </h2>
            <div className="flex flex-col sm:flex-row items-end sm:items-center gap-4">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-slate-400">
                {t("projects.slide")} {page + 1} / {totalPages}
              </span>
              <div className="flex gap-2">
                <button 
                  onClick={() => paginate(-1)}
                  className="p-3 sm:p-2 border border-slate-200 hover:border-black transition-colors text-black rounded-none"
                >
                  <FiChevronLeft className="w-5 h-5 sm:w-4 sm:h-4" />
                </button>
                <button 
                  onClick={() => paginate(1)}
                  className="p-3 sm:p-2 border border-slate-200 hover:border-black transition-colors text-black rounded-none"
                >
                  <FiChevronRight className="w-5 h-5 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="h-[2px] w-full bg-black" />
        </div>

        <div className="relative overflow-hidden min-h-[550px]">
          <AnimatePresence mode="wait" initial={false}>
              <motion.div
              key={page}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 pb-6 md:pb-0"
            >
              {currentProjects.map((project) => (
                <motion.article
                  key={project.title}
                  className="group flex flex-col h-full relative min-w-[85vw] sm:min-w-[70vw] md:min-w-0 snap-center md:snap-align-none"
                >
                  {/* Clean Image Container */}
                  <div className="relative aspect-[16/10] w-full mb-8 overflow-hidden bg-white border border-slate-200 group-hover:border-black transition-colors flex items-center justify-center">
                    
                    {/* Project Screenshot (Shown on hover desktop, default mobile) */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 z-10"
                    />

                    {/* Project Logo (Shown by default on desktop) */}
                    {project.overlayLogo && (
                      <div className="relative w-1/2 h-1/2 z-20 hidden lg:block opacity-100 lg:group-hover:opacity-0 transition-opacity duration-700">
                        <Image
                          src={project.overlayLogo}
                          alt={`${project.title} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                  </div>

                  <div className="space-y-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl md:text-2xl font-bold tracking-tighter text-black uppercase">
                        {project.title}
                      </h3>
                      <div className="flex gap-4">
                        <a href={project.github} target="_blank" className="text-slate-400 hover:text-black transition-colors">
                          <FiGithub size={20} />
                        </a>
                        <a href={project.vercel} target="_blank" className="text-slate-400 hover:text-black transition-colors">
                          <FiExternalLink size={20} />
                        </a>
                      </div>
                    </div>

                    <p className="text-slate-600 font-medium text-sm lg:text-base leading-relaxed flex-1">
                      {language === "en" && project.descriptionEn ? project.descriptionEn : project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-6">
                      {project.tags.slice(0, 3).map(tag => (
                        <span 
                          key={tag}
                          className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Indicador */}
        <div className="w-full flex justify-between items-center pt-8 border-t-[2px] border-black">
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <div 
                key={i} 
                className={`h-[2px] transition-all duration-500 ${i === page ? "w-12 bg-black" : "w-4 bg-slate-300"}`} 
              />
            ))}
          </div>
          <a 
            href="https://github.com/DamRandom" 
            target="_blank" 
            className="text-[9px] font-bold uppercase tracking-[0.5em] text-slate-400 hover:text-black transition-colors"
          >
            {t("projects.archive")}
          </a>
        </div>
      </div>
    </section>
  );
}
