"use client";

import { motion } from "framer-motion";

export default function MarketingPackages() {
  const handleSolicitar = (
    type: "basico" | "profesional" | "premium"
  ) => {
    const telefono = "51944784437";

    const mensaje =
      type === "basico"
        ? "Hola, me gustaría una orientación breve sobre la propuesta Básico para contenidos mensuales. ¿Podemos conversar?"
        : type === "profesional"
        ? "Hola, estoy revisando la propuesta Profesional mensual para marcas activas. ¿Podemos hablar?"
        : "Hola, quiero conocer mejor la propuesta Premium con soporte y planificación editorial. ¿Podemos conversar?";

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
          Un soporte visual mensual sobrio y funcional para mantener presencia sin cargar tu flujo operativo.
        </p>

        <ul className="text-sm space-y-1 mb-6">
          <li className="px-2">Diseños mensuales para redes</li>
          <li className="px-2">Iteraciones moderadas</li>
          <li className="px-2">Entrega optimizada para publicación</li>
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
          Una producción mensual ampliada para marcas activas que requieren constancia y un estándar visual firme.
        </p>

        <ul className="text-sm space-y-1 mb-6">
          <li className="px-2">Producción mensual extendida</li>
          <li className="px-2">Revisiones estructuradas</li>
          <li className="px-2">Entrega optimizada por plataforma</li>
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
          Un acompañamiento continuo con producción sostenida, soporte directo y planificación editorial mensual.
        </p>

        <ul className="text-sm space-y-1 mb-6">
          <li className="px-2">Piezas mensuales para redes</li>
          <li className="px-2">Reuniones agendadas para revisión</li>
          <li className="px-2">Ajustes flexibles dentro del mes</li>
          <li className="px-2">Entrega lista + editables según requerimiento</li>
          <li className="px-2">Seguimiento editorial estructurado</li>
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
