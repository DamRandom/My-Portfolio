// components/BotonDescarga.tsx
"use client";

import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

type Props = {
  /** Ruta pública al archivo (por defecto: CV en español) */
  filePath?: string;
  /** Nombre con el que se descargará el archivo */
  fileName?: string;
  /** Texto accesible / tooltip */
  label?: string;
};

export default function BotonDescarga({
  filePath = "/DamianBritoResumeEN.pdf",
  fileName = "DamianBritoResumeEN.pdf",
  label = "Descargar CV",
}: Props) {
  const handleDownload = () => {
    // Crear enlace y forzar descarga (compatible con la mayoría de navegadores)
    const link = document.createElement("a");
    link.href = filePath;
    link.setAttribute("download", fileName);
    // Seguridad: evitar contexto de navegación heredado
    link.setAttribute("rel", "noopener noreferrer");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleDownload();
    }
  };

  return (
    <>
      {/* Botón para escritorio: pill con texto */}
      <motion.button
        onClick={handleDownload}
        onKeyDown={handleKeyDown}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
        aria-label={label}
        title={label}
        className="
          hidden sm:flex
          fixed bottom-6 right-6 z-50
          items-center gap-3
          bg-[#060629] text-white
          px-5 py-3 rounded-lg
          shadow-2xl shadow-black/25
          font-lora font-semibold
          text-sm sm:text-base
          tracking-wide
          cursor-pointer select-none outline-none
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#101031]
          hover:bg-[#101031] transition-colors
        "
      >
        <FiDownload className="w-5 h-5" aria-hidden />
        <span>{label}</span>
      </motion.button>

      {/* Botón para móvil: FAB circular sólo icono (mejor touch target) */}
      <motion.button
        onClick={handleDownload}
        onKeyDown={handleKeyDown}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        aria-label={label}
        title={label}
        className="
          sm:hidden
          fixed bottom-4 right-4 z-50
          w-14 h-14 rounded-full
          flex items-center justify-center
          bg-[#060629] text-white
          shadow-2xl shadow-black/25
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#101031]
          cursor-pointer
        "
      >
        <FiDownload className="w-6 h-6" aria-hidden />
      </motion.button>
    </>
  );
}
