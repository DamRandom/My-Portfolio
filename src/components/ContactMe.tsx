"use client";

import Image from "next/image";
import { Building2, Phone, Mail, Coffee } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function SeccionContacto() {
  const { t } = useLanguage();

  return (
    <section
      id="contacto"
      className="relative w-full bg-[#fcfcfc] pt-24 pb-40 px-4 md:px-20 text-[#0f172a] overflow-hidden"
      aria-label="Sección de contacto"
    >
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 items-stretch gap-0 border border-slate-200 bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)]">
        
        {/* Imagen Lateral Full Height */}
        <div className="col-span-12 md:col-span-5 lg:col-span-4 relative min-h-[450px] border-r border-slate-100 bg-slate-50">
          <Image
            src="/images/contact-left-removebg.png"
            alt="Damian Brito"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Panel de Información */}
        <div className="col-span-12 md:col-span-7 lg:col-span-8 p-10 md:p-16 flex flex-col relative">
          
          {/* Título con línea y marca DB encima */}
          <div className="mb-14 w-full relative">
            <div className="flex justify-between items-end mb-2">
              <h2 className="text-4xl font-bold tracking-tighter text-slate-900 uppercase">
                {t("contact.title")}
              </h2>
              <span className="text-4xl font-black italic tracking-tighter opacity-[0.05] select-none">
                DB
              </span>
            </div>
            <div className="h-px w-full bg-slate-200" />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mt-auto">
            
            {/* Columna de Información a la Izquierda */}
            <div className="flex flex-col gap-10 w-full md:w-auto">
              <div className="space-y-2 group">
                <div className="flex items-center gap-3 text-slate-400 group-hover:text-slate-900 transition-colors">
                  <Building2 size={16} />
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em]">{t("contact.location")}</span>
                </div>
                <p className="text-slate-700 font-medium pl-0 transition-colors">
                  Lima Metropolitana, Perú
                </p>
              </div>

              <div className="space-y-2 group">
                <div className="flex items-center gap-3 text-slate-400 group-hover:text-slate-900 transition-colors">
                  <Mail size={16} />
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em]">{t("contact.email")}</span>
                </div>
                <a
                  href="mailto:britohdamian@gmail.com"
                  className="block text-slate-700 font-medium hover:text-slate-900 transition-colors"
                >
                  britohdamian@gmail.com
                </a>
              </div>

              <div className="space-y-2 group">
                <div className="flex items-center gap-3 text-slate-400 group-hover:text-slate-900 transition-colors">
                  <Phone size={16} />
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em]">{t("contact.phone")}</span>
                </div>
                <a 
                  href="tel:+51944784437" 
                  className="block text-slate-700 font-medium hover:text-slate-900 transition-colors"
                >
                  +51 944 784 437
                </a>
              </div>
            </div>

            {/* Botón de Café Estilo Ghost / Outline */}
            <div className="w-full md:w-auto flex justify-end">
              <a
                href="https://www.buymeacoffee.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 border-2 border-slate-900 px-6 py-3 font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-slate-900 hover:text-white transition-all duration-300"
              >
                <Coffee size={14} className="transition-transform group-hover:rotate-12" />
                <span>{t("contact.coffee")}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 px-2 opacity-60">
        <span>Damian Brito / Lima PE</span>
        <div className="h-px flex-1 mx-8 bg-slate-200" />
        <span>Architecting Digital Spaces</span>
      </div>
    </section>
  );
}
