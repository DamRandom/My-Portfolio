"use client";

import DevServices from "./services/Dev";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="relative w-full bg-[#fcfcfc] py-24 px-4 md:px-20 text-[#0f172a]"
    >
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Título Consistente con Contacto */}
        <div className="w-full">
          <h2 className="text-4xl font-bold tracking-tighter text-slate-900 uppercase mb-4">
            {t("services.title")}
          </h2>
          <div className="h-px w-full bg-slate-200" />
          <p className="text-slate-500 font-light text-lg mt-6 max-w-2xl">
            {t("services.description")}
          </p>
        </div>

        {/* Contenido de Desarrollo Web Directo */}
        <div className="w-full">
          <DevServices />
        </div>

        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em] text-center mt-12 opacity-60">
          {t("services.quote")}
        </p>
      </div>
    </section>
  );
}
