"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-center bg-white px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="relative z-10 max-w-[1400px] mx-auto w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 flex flex-col items-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-slate-400">
            {t("hero.portfolio")} / 2025
          </span>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-medium tracking-tighter text-black uppercase leading-[0.9] mt-4">
            Damian <br />
            <span className="font-serif italic text-black lowercase tracking-normal">Brito.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 flex flex-col items-center space-y-8"
        >
          <div className="h-[2px] w-12 bg-black" />
          <h2 className="text-lg md:text-xl font-bold text-black uppercase tracking-[0.3em]">
            {t("hero.role")}
          </h2>
          <p className="max-w-2xl text-slate-600 font-light text-lg md:text-xl leading-relaxed">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-10 w-full sm:w-auto justify-center">
            <a 
              href="#projects"
              className="group flex justify-center items-center bg-black text-white px-8 py-5 sm:px-10 font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-slate-800 transition-all w-full sm:w-auto sm:min-w-[240px]"
            >
              <span>{t("hero.ctaWork")}</span>
            </a>
            <a 
              href="mailto:britohdamian@gmail.com"
              className="group flex justify-center items-center border border-black bg-transparent text-black px-8 py-5 sm:px-10 font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all w-full sm:w-auto sm:min-w-[240px]"
            >
              <span>{t("hero.ctaContact")}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
