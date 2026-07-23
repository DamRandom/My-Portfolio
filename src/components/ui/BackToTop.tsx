"use client";

import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  // Muestra el botón solo cuando el usuario llega al final de la página
  useEffect(() => {
    const toggleVisibility = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Si estamos a 100px o menos del fondo de la página
      if (documentHeight - scrollPosition < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-8 z-50 flex items-center gap-3 bg-white text-black border-2 border-black px-6 py-4 font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all duration-300 active:scale-95 group"
          aria-label="Back to top"
        >
          <span>{language === "en" ? "Top" : "Subir"}</span>
          <FiArrowUp size={14} className="transition-transform duration-300 group-hover:-translate-y-1" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
