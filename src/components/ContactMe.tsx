"use client";

import { Phone, Mail, Coffee } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import React, { useState } from "react";
import DonationModal from "./DonationModal";

export default function SeccionContacto() {
  const { t } = useLanguage();
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  return (
    <section
      id="contact"
      className="relative w-full bg-transparent py-24 px-6 md:px-12 lg:px-20 text-black"
      aria-label="Sección de contacto"
    >
      <div className="relative max-w-6xl mx-auto border-2 border-black bg-white">
        
        {/* Panel de Información */}
        <div className="p-6 sm:p-10 md:p-16 flex flex-col relative">
          
          {/* Título */}
          <div className="mb-14 w-full relative">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-black uppercase mb-4">
              {t("contact.title")}
            </h2>
            <div className="h-[2px] w-full bg-black" />
            <p className="text-slate-600 font-medium text-lg md:text-xl mt-6 max-w-2xl">
              {t("contact.description")}
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mt-auto">
            
            {/* Columna de Información */}
            <div className="flex flex-col gap-4 md:gap-10 w-full md:w-auto">
              <div className="space-y-2 group bg-white p-6 md:p-0 border border-black md:border-none transition-colors hover:bg-black hover:text-white md:hover:bg-transparent md:hover:text-black">
                <div className="flex items-center gap-3 text-slate-500 group-hover:text-slate-400 md:group-hover:text-slate-500 transition-colors">
                  <Mail size={16} />
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em]">{t("contact.email")}</span>
                </div>
                <a
                  href="mailto:britohdamian@gmail.com"
                  className="block text-black font-bold group-hover:text-white md:group-hover:text-black transition-colors"
                >
                  britohdamian@gmail.com
                </a>
              </div>

              <div className="space-y-2 group bg-white p-6 md:p-0 border border-black md:border-none transition-colors hover:bg-black hover:text-white md:hover:bg-transparent md:hover:text-black">
                <div className="flex items-center gap-3 text-slate-500 group-hover:text-slate-400 md:group-hover:text-slate-500 transition-colors">
                  <Phone size={16} />
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em]">{t("contact.phone")}</span>
                </div>
                <a 
                  href="tel:+51944784437" 
                  className="block text-black font-bold group-hover:text-white md:group-hover:text-black transition-colors"
                >
                  +51 944 784 437
                </a>
              </div>
            </div>

            {/* Botón de Café */}
            <div className="w-full md:w-auto flex justify-end mt-8 md:mt-0">
              <button
                onClick={() => setIsDonationModalOpen(true)}
                className="group w-full md:w-auto flex justify-center items-center gap-3 border-2 border-black text-black px-6 py-4 md:py-3 font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all duration-300"
              >
                <Coffee size={14} className="transition-transform group-hover:rotate-12" />
                <span>{t("contact.coffee")}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal de Donación */}
        <DonationModal 
          isOpen={isDonationModalOpen} 
          onClose={() => setIsDonationModalOpen(false)} 
        />
      </div>

      <div className="max-w-6xl mx-auto mt-12 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 px-2">
        <span>Damian Brito / Lima PE</span>
        <div className="h-[2px] flex-1 mx-8 bg-slate-200" />
        <span>Architecting Digital Spaces</span>
      </div>
    </section>
  );
}
