"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import DevServices from "./services/Dev";
import BusinessCardServices from "./services/BusinessCard";
import LogoDesignServices from "./services/LogoDesign";
import PosterDesignServices from "./services/PosterDesign";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("dev");

  const categories = [
    { key: "dev", label: "Desarrollo Web" },
    { key: "cards", label: "Tarjetas de Presentación" },
    { key: "posters", label: "Posters Publicitarios" },
    { key: "logos", label: "Diseño de Logos" },
  ];

  const variants = {
    enter: { opacity: 0, y: 10 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <section
      id="services"
      className="relative w-full min-h-screen px-6 sm:px-10 md:px-20 pt-16 pb-40 bg-[#F5F5F5] text-[#06061B] flex flex-col overflow-hidden"
    >
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-lora font-semibold mb-6 border-b border-[#06061B] mx-2 sm:mx-6 md:mx-20 text-right">
          Mis Servicios
        </h2>

    
      </div>

      <div className="w-full flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.key;
          return (
            <motion.button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              whileHover={{
                scale: 0.97,
                backgroundColor: isActive ? "#E4E4E4" : "#F3F3F3",
              }}
              animate={{
                backgroundColor: isActive ? "#E9E9E9" : "#FFFFFF",
                boxShadow: isActive
                  ? "0 2px 5px rgba(6,6,41,0.22)"
                  : "0 2px 5px rgba(6,6,41,0.08)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
              className="px-4 py-1.5 text-sm font-lora text-[#06061B] border border-transparent select-none tracking-tight"
            >
              {cat.label}
            </motion.button>
          );
        })}
      </div>

      <div className="flex-1 flex flex-col items-center justify-start w-full ">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="w-full"
          >
            {activeCategory === "dev" && <DevServices />}
            {activeCategory === "cards" && <BusinessCardServices />}
            {activeCategory === "posters" && <PosterDesignServices />}
            {activeCategory === "logos" && <LogoDesignServices />}
          </motion.div>
          
        </AnimatePresence>
            <p className="text-xs text-[#06061B]/70 text-center italic mt-8">
          Cotización privada según requerimientos.
        </p>
      </div>
    </section>
  );
}
