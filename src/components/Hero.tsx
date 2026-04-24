"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center bg-[#fcfcfc] px-6 md:px-20 overflow-hidden"
    >
      {/* Decorative Background Line */}
      <div className="absolute top-0 left-[40%] w-px h-full bg-slate-100 hidden md:block" />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Typography */}
        <div className="lg:col-span-7 space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-2"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">
              {t("hero.portfolio")} / 2025
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-slate-900 uppercase leading-[0.8] mb-4">
              Damian <br />
              <span className="text-transparent stroke-text">Brito</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="h-px w-32 bg-slate-900" />
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 uppercase tracking-tight">
                {t("hero.role")}
              </h2>
              <p className="max-w-md text-slate-500 font-light text-lg leading-relaxed">
                {t("hero.description")}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#projects"
                className="group flex justify-between items-center bg-slate-900 text-white px-8 py-5 font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-slate-800 transition-all min-w-[220px]"
              >
                <span>{t("hero.ctaWork")}</span>
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </a>
              <a 
                href="mailto:britohdamian@gmail.com"
                className="group flex justify-between items-center border border-slate-200 bg-white text-slate-900 px-8 py-5 font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-slate-50 transition-all min-w-[220px]"
              >
                <span>{t("hero.ctaContact")}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Profile Image */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-[320px] md:w-[450px] aspect-[3/4] group"
          >
            <div className="absolute inset-0 bg-slate-100 translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />
            
            <div className="relative w-full h-full overflow-hidden border border-slate-200 bg-white shadow-2xl">
              <Image
                src="/images/Gemini_Generated_Image_b55e66b55e66b55e.png"
                alt="Damian Brito"
                fill
                className="object-cover object-top transition-transform duration-[2s] group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-6 hidden md:block shadow-xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] block">Status</span>
              <span className="text-sm font-medium">{t("hero.status")}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 opacity-[0.02] pointer-events-none select-none">
        <span className="text-[20rem] font-black italic tracking-tighter">DB</span>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px #0f172a;
        }
      `}</style>
    </section>
  );
}
