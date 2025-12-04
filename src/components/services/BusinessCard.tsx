"use client";

import { motion } from "framer-motion";

export default function BusinessCardServices() {
  const handleSolicitar = (type: "basico" | "profesional" | "premium") => {
    const telefono = "51944784437";

    const mensaje =
      type === "basico"
        ? "Hola Damian, quiero conversar sobre el paquete Básico de Tarjetas de Presentación."
        : type === "profesional"
        ? "Hola Damian, quiero consultar el paquete Profesional de Tarjetas de Presentación. ¿Podemos conversar?"
        : "Hola Damian, quiero conocer mejor el paquete Premium de Tarjetas de Presentación. ¿Podemos conversar?";

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
        {/* SIN ETIQUETA */}

        <h3 className="text-lg font-semibold mb-3">Básico</h3>

        <p className="text-sm text-[#06061B]/80 mb-4">
          Una tarjeta esencial, clara y directa. Adecuada cuando buscas una presencia limpia sin complejidad adicional.
        </p>

        <ul className="text-sm space-y-1 mb-6">
          <li className="px-2">Diseño de una cara</li>
          <li className="px-2">1 propuesta inicial</li>
          <li className="px-2">2 revisiones</li>
          <li className="px-2">Archivo JPG/PNG listo para impresión</li>
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
          Un diseño más completo con doble cara y una estructura visual más sólida para representación formal.
        </p>

        <ul className="text-sm space-y-1 mb-6">
          <li className="px-2">Diseño a doble cara</li>
          <li className="px-2">2 propuestas iniciales</li>
          <li className="px-2">4 revisiones</li>
          <li className="px-2">Archivo JPG/PNG/PDF listo para impresión</li>
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
        {/* SIN ETIQUETA */}

        <h3 className="text-lg font-semibold mb-3">Premium</h3>

        <p className="text-sm text-[#06061B]/80 mb-4">
          Una propuesta avanzada con variantes y mockups que permiten visualizar el resultado en contexto.
        </p>

        <ul className="text-sm space-y-1 mb-6">
          <li className="px-2">Diseño a doble cara + variantes</li>
          <li className="px-2">3 propuestas iniciales</li>
          <li className="px-2">Revisiones ilimitadas</li>
          <li className="px-2">Mockups de presentación</li>
          <li className="px-2">Archivos editables + listos para imprenta</li>
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
