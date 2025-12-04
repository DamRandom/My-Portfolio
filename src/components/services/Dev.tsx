"use client";

import { motion } from "framer-motion";

export default function DevServices() {
  const handleSolicitar = (
    type: "esencial" | "profesional" | "profesional1y"
  ) => {
    const telefono = "51944784437";

    const mensaje =
      type === "esencial"
        ? "Hola, me gustaría recibir una orientación breve sobre la propuesta Esencial."
        : type === "profesional"
        ? "Hola, quiero consultar la propuesta Profesional mensual. ¿Podemos conversar?"
        : "Hola, quiero conocer mejor la propuesta Profesional en modalidad extendida. ¿Podemos conversar?";

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto font-lora items-stretch">

      {/* Esencial */}
      <motion.div
        whileHover={{ scale: 1.005 }}
        className="relative flex flex-col h-full p-6 bg-white/90 border border-gray-200 shadow-sm rounded-none transition"
      >
        <h3 className="text-lg font-semibold mb-3">Esencial</h3>

        <p className="text-sm text-[#06061B]/80 mb-4">
          Un punto de entrada sobrio y funcional para presencia profesional sin complejidad. Indicado si necesitas claridad y estructura sin compromisos mayores.
        </p>

        <ul className="text-sm space-y-1 mb-6">
          <li className="px-2">Diseño responsivo</li>
          <li className="px-2">Implementación Front-End</li>
          <li className="px-2">Identidad visual esencial</li>
        </ul>

        <div className="flex justify-end items-center mt-auto">
          <button
            onClick={() => handleSolicitar("esencial")}
            className="px-4 py-2 bg-[#060629] text-white text-sm font-medium hover:bg-[#101031] transition rounded-none"
          >
            Contactar
          </button>
        </div>
      </motion.div>

      {/* Profesional mensual */}
      <motion.div
        whileHover={{ scale: 1.005 }}
        className="relative flex flex-col h-full p-6 bg-white/90 border border-gray-200 shadow-sm rounded-none transition"
      >
        <h3 className="text-lg font-semibold mb-3">Profesional</h3>

        <p className="text-sm text-[#06061B]/80 mb-4">
          Una estructura completa para operaciones activas que requieren soporte, continuidad y un estándar estable.
        </p>

        <ul className="text-sm space-y-1 mb-6">
          <li className="px-2">Diseño responsivo</li>
          <li className="px-2">Implementación Front-End</li>
          <li className="px-2">Identidad visual esencial</li>
          <li className="px-2">Hosting mensual</li>
          <li className="px-2">Deploy optimizado</li>
        </ul>

        <div className="flex justify-end items-center mt-auto">
          <button
            onClick={() => handleSolicitar("profesional")}
            className="px-4 py-2 bg-[#060629] text-white text-sm font-medium hover:bg-[#101031] transition rounded-none"
          >
            Contactar
          </button>
        </div>
      </motion.div>

      {/* Profesional extendido */}
      <motion.div
        whileHover={{ scale: 1.005 }}
        className="relative flex flex-col h-full p-6 bg-white/90 border border-gray-200 shadow-sm rounded-none transition"
      >
        <div
          className="absolute -top-3 right-3 px-3 py-1 text-xs font-semibold text-white"
          style={{ background: "linear-gradient(90deg,#FF7A18,#FF3D00)" }}
        >
          Recomendado
        </div>
        <h3 className="text-lg font-semibold mb-3">Profesional extendido</h3>

        <p className="text-sm text-[#06061B]/80 mb-4">
          Un enfoque de continuidad para delegar la gestión técnica por largo plazo, priorizando estabilidad y consistencia.
        </p>

        <ul className="text-sm space-y-1 mb-6">
          <li className="px-2">Diseño responsivo</li>
          <li className="px-2">Implementación Front-End</li>
          <li className="px-2">Identidad visual esencial</li>
          <li className="px-2">Hosting incluido</li>
          <li className="px-2">Deploy optimizado</li>
        </ul>

        <div className="flex justify-end items-center mt-auto">
          <button
            onClick={() => handleSolicitar("profesional1y")}
            className="px-4 py-2 bg-[#060629] text-white text-sm font-medium hover:bg-[#101031] transition rounded-none"
          >
            Contactar
          </button>
        </div>
      </motion.div>

    </div>
  );
}
