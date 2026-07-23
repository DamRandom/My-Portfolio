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
          "Hi, I'm looking for a complete solution to grow and automate my business. Can we discuss?"
      }
    };

    const mensaje = messages[language][type];
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-3 gap-0 border-2 border-black bg-white">
      {/* Esencial */}
      <div className="min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center md:snap-align-none flex flex-col p-8 md:p-10 border-r-2 border-black bg-white hover:bg-slate-50 transition-colors group">
        <div className="space-y-4 mb-8">
          <h3 className="text-xl font-bold uppercase tracking-widest text-black">
            {language === "es" ? "Esencial" : "Essential"}
          </h3>
          <p className="text-sm text-slate-500 font-medium leading-relaxed min-h-[60px]">
            {language === "es"
              ? "Lanza tu negocio en internet con un diseño premium."
              : "Launch your business online with a premium design."}
          </p>
        </div>

        <ul className="space-y-4 mb-10 flex-1">
          {[
            language === "es"
              ? "Presencia online 24/7"
              : "24/7 online presence",
            language === "es"
              ? "Web de negocios de alta conversión"
              : "High-converting business website",
            language === "es"
              ? "Diseño profesional y confiable"
              : "Professional & trustworthy design"
          ].map((f) => (
            <li
              key={f}
              className="flex items-center gap-3 text-xs font-medium text-slate-600"
            >
              <Check size={14} className="text-black" />
              {f}
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleSolicitar("esencial")}
          className="w-full py-4 bg-transparent border-2 border-black text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all active:scale-95"
        >
          {language === "es" ? "Empezar" : "Get Started"}
        </button>
      </div>

      {/* Profesional */}
      <div className="min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center md:snap-align-none flex flex-col p-8 md:p-10 border-r-2 border-black bg-slate-100 text-black relative overflow-hidden group">
        <div className="space-y-4 mb-8 relative z-10">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold uppercase tracking-widest">
              {language === "es" ? "Profesional" : "Professional"}
            </h3>
            <span className="text-[8px] font-bold uppercase tracking-widest bg-black text-white px-2 py-1">
              {language === "es" ? "Popular" : "Popular"}
            </span>
          </div>
          <p className="text-sm text-slate-600 font-medium leading-relaxed min-h-[60px]">
            {language === "es"
              ? "Convierte visitantes en clientes recurrentes."
              : "Turn visitors into recurring clients."}
          </p>
        </div>

        <ul className="space-y-4 mb-10 flex-1 relative z-10">
          {[
            language === "es"
              ? "Diseño enfocado en ventas"
              : "Sales-driven design",
            language === "es"
              ? "Captación automática de leads"
              : "Automated lead generation",
            language === "es"
              ? "Posicionamiento SEO en Google"
              : "SEO Google Ranking"
          ].map((f) => (
            <li
              key={f}
              className="flex items-center gap-3 text-xs font-medium text-slate-700"
            >
              <Check size={14} className="text-black" />
              {f}
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleSolicitar("profesional")}
          className="w-full py-4 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-slate-800 transition-all active:scale-95 relative z-10"
        >
          {language === "es" ? "Quiero más clientes" : "Get More Clients"}
        </button>

        <div className="absolute -bottom-4 -right-4 text-8xl font-black italic text-black/[0.03] select-none pointer-events-none">
          DEV
        </div>
      </div>

      {/* Avanzado */}
      <div className="min-w-[85vw] sm:min-w-[60vw] md:min-w-0 snap-center md:snap-align-none flex flex-col p-8 md:p-10 bg-black text-white hover:bg-slate-900 transition-colors group">
        <div className="space-y-4 mb-8">
          <h3 className="text-xl font-bold uppercase tracking-widest text-white">
            {language === "es" ? "Avanzado" : "Advanced"}
          </h3>
          <p className="text-sm text-slate-400 font-medium leading-relaxed min-h-[60px]">
            {language === "es"
              ? "Automatiza procesos y escala tus operaciones."
              : "Automate processes and scale operations."}
          </p>
        </div>

        <ul className="space-y-4 mb-10 flex-1">
          {[
            language === "es"
              ? "Sistema automatizado 24/7"
              : "24/7 automated system",
            language === "es"
              ? "Automatización de procesos"
              : "Process automation",
            language === "es"
              ? "Gestión avanzada de clientes"
              : "Advanced client management"
          ].map((f) => (
            <li
              key={f}
              className="flex items-center gap-3 text-xs font-medium text-slate-300"
            >
              <Check size={14} className="text-white" />
              {f}
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleSolicitar("profesional1y")}
          className="w-full py-4 bg-transparent border-2 border-white text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all active:scale-95"
        >
          {language === "es" ? "Escalar mi negocio" : "Scale My Business"}
        </button>
      </div>
    </div>
  );
}