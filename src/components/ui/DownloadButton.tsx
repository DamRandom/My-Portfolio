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
        className="
          group flex items-center gap-4
          bg-black/10 text-black
          px-8 py-5
          font-bold text-[10px] uppercase tracking-[0.3em]
          transition-all duration-300
          hover:bg-black hover:text-white
          hover:-translate-y-1
          active:translate-y-0
          backdrop-blur-sm
        "
      >
        <span>
          {language === "en" ? "Download CV" : "Descargar CV"}
        </span>

        <FiDownload
          size={14}
          className="transition-transform duration-300 group-hover:-translate-y-0.5"
        />
      </button>
    </div>
  );
}