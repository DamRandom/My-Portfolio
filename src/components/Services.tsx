"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DevServices from "./services/Dev";
import BusinessCardServices from "./services/BusinessCard";
import LogoDesignServices from "./services/LogoDesign";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("dev");

  const categories = [
    { key: "dev", label: "Desarrollo Web" },
    { key: "cards", label: "Tarjetas de Presentación" },
    { key: "posters", label: "Posters Publicitarios" },
    { key: "logos", label: "Diseño de Logos" },
  ];

  const variants = {
    enter: { opacity: 0, y: 15 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
  };

  return (
    <section
      id="services"
      className="relative w-full min-h-screen px-6 sm:px-10 md:px-20 pt-16 pb-40 bg-[#F5F5F5] text-[#06061B] flex flex-col justify-between overflow-hidden"
    >
      {/* Título */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-lora font-semibold mb-6 border-b border-[#06061B] mx-2 sm:mx-6 md:mx-20 text-right">
          Mis Servicios
        </h2>
      </div>

      {/* Etiquetas fijas */}
      <div className="w-full flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <motion.button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            whileHover={{
              scale: 0.96,
              backgroundColor:
                activeCategory === cat.key ? "#E4E4E4" : "#F7F7F7",
            }}
            animate={{
              backgroundColor:
                activeCategory === cat.key ? "#E9E9E9" : "#FFFFFF",
              boxShadow:
                activeCategory === cat.key
                  ? "0 3px 6px rgba(6,6,41,0.25)"
                  : "0 3px 6px rgba(6,6,41,0.1)",
            }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 24,
            }}
            className="px-4 py-1.5 text-sm font-lora text-[#06061B] rounded-md border border-transparent select-none"
          >
            {cat.label}
          </motion.button>
        ))}
      </div>

      {/* Contenido dinámico */}
      <div className="flex-1 flex flex-col items-center justify-start">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-full"
          >
            {activeCategory === "dev" && <DevServices />}
            {activeCategory === "cards" && <BusinessCardServices />}
            {activeCategory === "logos" && <LogoDesignServices />}

            {activeCategory === "posters" && (
              <div className="p-8 bg-[#FAFAFA] rounded-2xl shadow-md text-center">
                <h3 className="text-lg font-semibold mb-3">
                  Posters Publicitarios – Desde S/40
                </h3>
                <p className="text-sm text-[#06061B]/80 leading-relaxed">
                  Diseños visuales y atractivos para redes o impresión. Incluye
                  2 propuestas, revisiones y entrega en formato optimizado.
                </p>
              </div>
            )}

            <p className="text-xs text-[#06061B]/70 text-center mt-4 italic">
              *Precios y servicios ajustables según requerimientos.
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
