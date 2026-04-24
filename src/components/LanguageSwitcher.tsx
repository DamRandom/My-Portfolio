"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-8 right-8 z-[100] flex gap-2 bg-white/80 backdrop-blur-md border border-slate-200 p-1 shadow-sm">
      <button
        onClick={() => setLanguage("es")}
        className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest transition-all ${
          language === "es" ? "bg-slate-900 text-white" : "text-slate-400 hover:text-slate-900"
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest transition-all ${
          language === "en" ? "bg-slate-900 text-white" : "text-slate-400 hover:text-slate-900"
        }`}
      >
        EN
      </button>
    </div>
  );
}
