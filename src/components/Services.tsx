"use client";

import DevServices from "./services/Dev";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="relative w-full bg-transparent py-24 px-6 md:px-12 lg:px-20 text-black"
    >
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Título */}
        <div className="w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-4 gap-2 sm:gap-0">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-black uppercase">
              {t("services.title")}
            </h2>

            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.4em] text-slate-500">
              {t("services.subtitle")}
            </span>
          </div>

          <div className="h-[2px] w-full bg-black" />
        </div>

        {/* Contenido de Desarrollo Web */}
        <div className="w-full">
          <DevServices />
        </div>

        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em] text-center mt-12">
          {t("services.quote")}
        </p>
      </div>
    </section>
  );
}
