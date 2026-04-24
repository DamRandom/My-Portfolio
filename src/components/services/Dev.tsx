"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function DevServices() {
  const { t, language } = useLanguage();

  const handleSolicitar = (
    type: "esencial" | "profesional" | "profesional1y"
  ) => {
    const telefono = "51944784437";

    const messages = {
      es: {
        esencial: "Hola, me gustaría recibir una orientación breve sobre la propuesta Esencial de desarrollo web.",
        profesional: "Hola, quiero consultar la propuesta Profesional mensual para desarrollo web. ¿Podemos conversar?",
        profesional1y: "Hola, quiero conocer mejor la propuesta Profesional en modalidad extendida para mi proyecto web."
      },
      en: {
        esencial: "Hi, I would like to receive a brief consultation about the Essential web development proposal.",
        profesional: "Hi, I want to inquire about the Professional monthly proposal for web development. Can we talk?",
        profesional1y: "Hi, I want to learn more about the Extended Professional proposal for my web project."
      }
    };

    const mensaje = messages[language][type];
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  const features = [
    t("services.features.responsive"),
    t("services.features.stack"),
    t("services.features.seo"),
    t("services.features.clean"),
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-200 bg-white">
      {/* Esencial */}
      <div className="flex flex-col p-8 md:p-10 border-b md:border-b-0 md:border-r border-slate-100 transition-colors hover:bg-slate-50 group">
        <div className="space-y-4 mb-8">
          <h3 className="text-xl font-bold uppercase tracking-tight text-slate-900">{t("services.plans.essential.title")}</h3>
          <p className="text-sm text-slate-500 leading-relaxed min-h-[60px]">
            {t("services.plans.essential.desc")}
          </p>
        </div>

        <ul className="space-y-4 mb-10 flex-1">
          {features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-center gap-3 text-xs font-medium text-slate-600">
              <Check size={14} className="text-slate-400" />
              {f}
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleSolicitar("esencial")}
          className="w-full py-4 bg-white border border-slate-900 text-slate-900 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-slate-900 hover:text-white transition-all active:scale-95"
        >
          {t("services.plans.essential.cta")}
        </button>
      </div>

      {/* Profesional */}
      <div className="flex flex-col p-8 md:p-10 border-b md:border-b-0 md:border-r border-slate-100 bg-slate-900 text-white relative overflow-hidden group">
        <div className="space-y-4 mb-8 relative z-10">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold uppercase tracking-tight">{t("services.plans.professional.title")}</h3>
            <span className="text-[8px] font-bold uppercase tracking-widest bg-white text-slate-900 px-2 py-1">{t("services.plans.professional.popular")}</span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed min-h-[60px]">
            {t("services.plans.professional.desc")}
          </p>
        </div>

        <ul className="space-y-4 mb-10 flex-1 relative z-10">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-3 text-xs font-medium text-slate-300">
              <Check size={14} className="text-slate-500" />
              {f}
            </li>
          ))}
          <li className="flex items-center gap-3 text-xs font-medium text-slate-300">
            <Check size={14} className="text-slate-500" />
            {t("services.features.hosting")}
          </li>
        </ul>

        <button
          onClick={() => handleSolicitar("profesional")}
          className="w-full py-4 bg-white text-slate-900 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-slate-200 transition-all active:scale-95 relative z-10"
        >
          {t("services.plans.professional.cta")}
        </button>

        <div className="absolute -bottom-4 -right-4 text-8xl font-black italic text-white/[0.03] select-none pointer-events-none">
          DEV
        </div>
      </div>

      {/* Corporativo / Extendido */}
      <div className="flex flex-col p-8 md:p-10 transition-colors hover:bg-slate-50 group">
        <div className="space-y-4 mb-8">
          <h3 className="text-xl font-bold uppercase tracking-tight text-slate-900">{t("services.plans.extended.title")}</h3>
          <p className="text-sm text-slate-500 leading-relaxed min-h-[60px]">
            {t("services.plans.extended.desc")}
          </p>
        </div>

        <ul className="space-y-4 mb-10 flex-1">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-3 text-xs font-medium text-slate-600">
              <Check size={14} className="text-slate-400" />
              {f}
            </li>
          ))}
          <li className="flex items-center gap-3 text-xs font-medium text-slate-600">
            <Check size={14} className="text-slate-400" />
            {t("services.features.support")}
          </li>
        </ul>

        <button
          onClick={() => handleSolicitar("profesional1y")}
          className="w-full py-4 bg-white border border-slate-900 text-slate-900 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-slate-900 hover:text-white transition-all active:scale-95"
        >
          {t("services.plans.extended.cta")}
        </button>
      </div>
    </div>
  );
}
