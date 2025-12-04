"use client";

import { motion } from "framer-motion";

export default function LogoDesignServices() {
  const handleSolicitar = (
    type: "basico" | "profesional" | "premium"
  ) => {
    const telefono = "51944784437";

    const mensaje =
      type === "basico"
        ? "Hola, quiero recibir una orientación breve sobre la propuesta Básico de diseño de logo. ¿Podemos conversar?"
        : type === "profesional"
        ? "Hola, estoy revisando la propuesta Profesional de diseño de logo. ¿Podemos hablar?"
        : "Hola, deseo conocer mejor la propuesta Premium de diseño de marca integral. ¿Podemos conversar?";

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto font-lora items-stretch">

      {/* Básico */}
      <motion.div
        whileHover={{ scale: 1.005 }}
        className="relative flex flex-col h-full p-6 bg-white/90 border border-gray-200 shadow-sm rounded-none transition"
      >
        {/* Etiqueta eliminada */}

        <h3 className="text-lg font-semibold mb-3">Básico</h3>

        <p className="text-sm text-[#06061B]/80 mb-4">
          Un desarrollo inicial para emprendedores que necesitan identidad visual mínima pero sólida.
        </p>

        <ul className="text-sm space-y-1 mb-6">
          <li className="px-2">1 propuesta de logo</li>
          <li className="px-2">2 revisiones</li>
          <li className="px-2">Entrega en JPG y PNG</li>
          <li className="px-2">Estilo limpio y funcional</li>
        </ul>

        <div className="flex justify-end items-center mt-auto">
          <button
            onClick={() => handleSolicitar("basico")}
            className="px-4 py-2 bg-[#060629] text-white text-sm font-medium hover:bg-[#101031] transition rounded-none"
          >
            Contactar
          </button>
        </div>
      </motion.div>

      {/* Profesional */}
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

        <h3 className="text-lg font-semibold mb-3">Profesional</h3>

        <p className="text-sm text-[#06061B]/80 mb-4">
          Un sistema visual más completo con variantes, orden tipográfico y paleta de color definida.
        </p>

        <ul className="text-sm space-y-1 mb-6">
          <li className="px-2">2 propuestas iniciales</li>
          <li className="px-2">4 revisiones</li>
          <li className="px-2">Versiones vertical, horizontal e ícono</li>
          <li className="px-2">Entrega en JPG, PNG y PDF</li>
          <li className="px-2">Guía básica de uso</li>
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

      {/* Premium */}
      <motion.div
        whileHover={{ scale: 1.005 }}
        className="relative flex flex-col h-full p-6 bg-white/90 border border-gray-200 shadow-sm rounded-none transition"
      >
        {/* Etiqueta eliminada */}

        <h3 className="text-lg font-semibold mb-3">Premium</h3>

        <p className="text-sm text-[#06061B]/80 mb-4">
          Un desarrollo integral para marcas que requieren solidez, coherencia y presencia profesional desde el inicio.
        </p>

        <ul className="text-sm space-y-1 mb-6">
          <li className="px-2">3 propuestas iniciales + revisiones ilimitadas</li>
          <li className="px-2">Archivos editables (AI / EPS / SVG)</li>
          <li className="px-2">Mockups de presentación</li>
          <li className="px-2">Versión monocromática + favicon</li>
          <li className="px-2">Mini manual de marca</li>
        </ul>

        <div className="flex justify-end items-center mt-auto">
          <button
            onClick={() => handleSolicitar("premium")}
            className="px-4 py-2 bg-[#060629] text-white text-sm font-medium hover:bg-[#101031] transition rounded-none"
          >
            Contactar
          </button>
        </div>
      </motion.div>

    </div>
  );
}
