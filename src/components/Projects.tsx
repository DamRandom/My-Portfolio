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
      className="relative w-full bg-[#fcfcfc] py-24 px-6 md:px-20 text-[#0f172a]"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Título Consistente */}
        <div className="w-full">
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-4xl font-bold tracking-tighter text-slate-900 uppercase">
              {t("projects.title")}
            </h2>
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-slate-300">
                {t("projects.slide")} {page + 1} / {totalPages}
              </span>
              <div className="flex gap-2">
                <button 
                  onClick={() => paginate(-1)}
                  className="p-2 border border-slate-200 hover:bg-slate-900 hover:text-white transition-all active:scale-95"
                >
                  <FiChevronLeft size={16} />
                </button>
                <button 
                  onClick={() => paginate(1)}
                  className="p-2 border border-slate-200 hover:bg-slate-900 hover:text-white transition-all active:scale-95"
                >
                  <FiChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
          <div className="h-px w-full bg-slate-200" />
        </div>

        <div className="relative overflow-hidden min-h-[550px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 border border-slate-200"
            >
              {currentProjects.map((project) => (
                <motion.article
                  key={project.title}
                  className="bg-white p-8 lg:p-12 flex flex-col group h-full relative overflow-hidden"
                >
                  {/* Image/Logo Container with Hover Effect */}
                  <div className="relative aspect-[16/10] w-full mb-10 overflow-hidden border border-slate-100 group">
                    
                    {/* Full Color Project Screenshot (Hover State) */}
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-105"
                    />

                    {/* Logo Overlay (Initial B&N State) */}
                    <div 
                      className="absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-700 group-hover:opacity-0"
                      style={{ backgroundColor: project.overlayBackground || "#f8fafc" }}
                    >
                      <div className="relative w-1/2 h-1/2 grayscale opacity-60">
                        {project.overlayLogo && (
                          <Image
                            src={project.overlayLogo}
                            alt={`${project.title} logo`}
                            fill
                            className="object-contain"
                          />
                        )}
                      </div>
                      {/* Subtly darkened overlay for text legibility if needed */}
                      <div className="absolute inset-0 bg-slate-900/5 grayscale" />
                    </div>
                  </div>

                  <div className="space-y-6 flex-1 flex flex-col z-20">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-bold tracking-tight text-slate-900 uppercase">
                        {project.title}
                      </h3>
                      <div className="flex gap-4">
                        <a href={project.github} target="_blank" className="text-slate-400 hover:text-slate-900 transition-colors">
                          <FiGithub size={20} />
                        </a>
                        <a href={project.vercel} target="_blank" className="text-slate-400 hover:text-slate-900 transition-colors">
                          <FiExternalLink size={20} />
                        </a>
                      </div>
                    </div>

                    <p className="text-slate-500 font-light text-sm leading-relaxed flex-1 line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                      {language === "en" && project.descriptionEn ? project.descriptionEn : project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-50">
                      {project.tags.slice(0, 3).map(tag => (
                        <span 
                          key={tag}
                          className="text-[9px] font-bold uppercase tracking-widest text-slate-400"
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
        <div className="w-full flex justify-between items-center pt-8 border-t border-slate-100">
          <div className="flex gap-1">
            {Array.from({ length: totalPages }).map((_, i) => (
              <div 
                key={i} 
                className={`h-1 transition-all duration-500 ${i === page ? "w-12 bg-slate-900" : "w-4 bg-slate-200"}`} 
              />
            ))}
          </div>
          <a 
            href="https://github.com/DamRandom" 
            target="_blank" 
            className="text-[9px] font-bold uppercase tracking-[0.5em] text-slate-300 hover:text-slate-900 transition-colors"
          >
            {t("projects.archive")}
          </a>
        </div>
      </div>
    </section>
  );
}
