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
          <h2 className="text-4xl font-bold tracking-tighter text-black uppercase mb-4">
            {t("services.title")}
          </h2>
          <div className="h-[2px] w-full bg-black" />
          <p className="text-slate-600 font-medium text-lg mt-6 max-w-2xl">
            {t("services.description")}
          </p>
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
