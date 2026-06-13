"use client";

import { Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function DevServices() {
  const { language } = useLanguage();

  const handleSolicitar = (
    type: "esencial" | "profesional" | "profesional1y"
  ) => {
    const telefono = "51944784437";

    const messages = {
      es: {
        esencial:
          "Hola, quiero empezar a tener presencia online para mi negocio. ¿Podemos hablar?",
        profesional:
          "Hola, quiero una web que me ayude a conseguir clientes de forma constante. ¿Me orientas?",
        profesional1y:
          "Hola, busco una solución completa para hacer crecer y automatizar mi negocio. ¿Lo vemos?"
      },
      en: {
        esencial:
          "Hi, I want to start building an online presence for my business. Can we talk?",
        profesional:
          "Hi, I want a website that helps me get clients consistently. Can you guide me?",
        profesional1y:
          "Hi, I’m looking for a complete solution to grow and automate my business. Can we discuss?"
      }
    };

    const mensaje = messages[language][type];
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-200 bg-white">
      {/* Esencial */}
      <div className="flex flex-col p-8 md:p-10 border-b md:border-b-0 md:border-r border-slate-100 hover:bg-slate-50 group">
        <div className="space-y-4 mb-8">
          <h3 className="text-xl font-bold uppercase tracking-tight text-slate-900">
            {language === "es" ? "Esencial" : "Essential"}
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed min-h-[60px]">
            {language === "es"
              ? "Empieza a tener presencia online profesional para tu negocio."
              : "Start building a professional online presence for your business."}
          </p>
        </div>

        <ul className="space-y-4 mb-10 flex-1">
          {[
            language === "es"
              ? "Tu negocio visible en internet 24/7"
              : "Your business visible online 24/7",
            language === "es"
              ? "Página clara que explica lo que ofreces"
              : "A clear page explaining what you offer",
            language === "es"
              ? "Diseño que genera confianza en tus clientes"
              : "Design that builds trust with your clients"
          ].map((f) => (
            <li
              key={f}
              className="flex items-center gap-3 text-xs font-medium text-slate-600"
            >
              <Check size={14} className="text-slate-400" />
              {f}
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleSolicitar("esencial")}
          className="w-full py-4 bg-white border border-slate-900 text-slate-900 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-slate-900 hover:text-white transition-all active:scale-95"
        >
          {language === "es" ? "Empezar" : "Get Started"}
        </button>
      </div>

      {/* Profesional */}
      <div className="flex flex-col p-8 md:p-10 border-b md:border-b-0 md:border-r border-slate-100 bg-slate-900 text-white relative overflow-hidden group">
        <div className="space-y-4 mb-8 relative z-10">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold uppercase tracking-tight">
              {language === "es" ? "Profesional" : "Professional"}
            </h3>
            <span className="text-[8px] font-bold uppercase tracking-widest bg-white text-slate-900 px-2 py-1">
              {language === "es" ? "Popular" : "Popular"}
            </span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed min-h-[60px]">
            {language === "es"
              ? "Convierte visitantes en clientes y haz crecer tu negocio."
              : "Turn visitors into clients and grow your business."}
          </p>
        </div>

        <ul className="space-y-4 mb-10 flex-1 relative z-10">
          {[
            language === "es"
              ? "Página diseñada para vender, no solo mostrar"
              : "A website designed to sell, not just show",
            language === "es"
              ? "Captación automática de clientes"
              : "Automatic client lead capture",
            language === "es"
              ? "Mejor posicionamiento en Google"
              : "Better visibility on Google",
            language === "es"
              ? "Estructura pensada para aumentar conversiones"
              : "Structure focused on increasing conversions"
          ].map((f) => (
            <li
              key={f}
              className="flex items-center gap-3 text-xs font-medium text-slate-300"
            >
              <Check size={14} className="text-slate-500" />
              {f}
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleSolicitar("profesional")}
          className="w-full py-4 bg-white text-slate-900 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-slate-200 transition-all active:scale-95 relative z-10"
        >
          {language === "es" ? "Quiero más clientes" : "Get More Clients"}
        </button>

        <div className="absolute -bottom-4 -right-4 text-8xl font-black italic text-white/[0.03] select-none pointer-events-none">
          DEV
        </div>
      </div>

      {/* Avanzado */}
      <div className="flex flex-col p-8 md:p-10 hover:bg-slate-50 group">
        <div className="space-y-4 mb-8">
          <h3 className="text-xl font-bold uppercase tracking-tight text-slate-900">
            {language === "es" ? "Avanzado" : "Advanced"}
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed min-h-[60px]">
            {language === "es"
              ? "Haz crecer tu negocio y automatiza procesos clave."
              : "Scale your business and automate key processes."}
          </p>
        </div>

        <ul className="space-y-4 mb-10 flex-1">
          {[
            language === "es"
              ? "Sistema que trabaja por ti 24/7"
              : "A system that works for you 24/7",
            language === "es"
              ? "Automatización de tareas repetitivas"
              : "Automation of repetitive tasks",
            language === "es"
              ? "Gestión más eficiente de tus clientes"
              : "More efficient client management",
            language === "es"
              ? "Solución adaptada a tu negocio"
              : "Custom solution for your business"
          ].map((f) => (
            <li
              key={f}
              className="flex items-center gap-3 text-xs font-medium text-slate-600"
            >
              <Check size={14} className="text-slate-400" />
              {f}
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleSolicitar("profesional1y")}
          className="w-full py-4 bg-white border border-slate-900 text-slate-900 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-slate-900 hover:text-white transition-all active:scale-95"
        >
          {language === "es" ? "Escalar mi negocio" : "Scale My Business"}
        </button>
      </div>
    </div>
  );
}