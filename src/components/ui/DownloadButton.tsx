"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useCallback } from "react";
import { FiDownload } from "react-icons/fi";

export default function BotonDescarga() {
  const { language } = useLanguage();

  const handleDownload = useCallback(() => {
    const file =
      language === "en"
        ? "/DamianBritoResumeEN.pdf"
        : "/DamianBritoResumeES.pdf";

    const link = document.createElement("a");
    link.href = file;
    link.download = file.split("/").pop() || "cv.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }, [language]);

  return (
    <div className="fixed bottom-10 right-8 z-50">
      <button
        onClick={handleDownload}
        className="group flex items-center gap-4 bg-black text-white px-8 py-5 font-bold text-[10px] uppercase tracking-[0.3em] shadow-none hover:bg-slate-800 transition-all hover:-translate-y-1 active:translate-y-0 border-2 border-black"
      >
        <span>
          {language === "en" ? "Download CV" : "Descargar CV"}
        </span>
        <div className="p-2 bg-white/20 rounded-none group-hover:bg-white/30 transition-colors">
          <FiDownload size={14} className="transition-transform group-hover:-translate-y-0.5" />
        </div>
      </button>
    </div>
  );
}