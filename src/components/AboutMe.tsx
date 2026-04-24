"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function SobreMi() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative w-full bg-[#fcfcfc] py-24 px-6 md:px-20 text-[#0f172a]"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Título Consistente */}
        <div className="w-full">
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-4xl font-bold tracking-tighter text-slate-900 uppercase">
              {t("about.title")}
            </h2>
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-slate-300">
              {t("about.subtitle")}
            </span>
          </div>
          <div className="h-px w-full bg-slate-200" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8 space-y-8">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-light leading-relaxed text-slate-700"
            >
              {t("about.p1")}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6 text-slate-500 font-light text-lg leading-relaxed max-w-3xl"
            >
              <p>{t("about.p2")}</p>
            </motion.div>
          </div>

          <div className="md:col-span-4 space-y-12">
            <div className="space-y-2 group">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">{t("about.specialty")}</span>
              <p className="text-sm font-bold text-slate-900 border-l-2 border-slate-100 pl-4 group-hover:border-slate-900 transition-all">Frontend Engineer</p>
            </div>
            <div className="space-y-2 group">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">{t("about.focus")}</span>
              <p className="text-sm font-bold text-slate-900 border-l-2 border-slate-100 pl-4 group-hover:border-slate-900 transition-all">Clean Architecture</p>
            </div>
            <div className="space-y-2 group">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">{t("about.interests")}</span>
              <p className="text-sm font-bold text-slate-900 border-l-2 border-slate-100 pl-4 group-hover:border-slate-900 transition-all">Gaming & Music Production</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
