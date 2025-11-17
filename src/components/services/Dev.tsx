"use client";

import { motion } from "framer-motion";

const PRICES = {
  diseño: 400,
  implementacion: 550,
  logo: 50,
  hosting1m: 60,
  hosting1y: 480,
  deploy: 80,
  mantenimiento1m: 120,
  mantenimiento1y: 960,
};

export default function DevServices() {
  // Cálculo de precios con descuentos y terminación .90
  const PAQUETE_ESENCIAL = (PRICES.diseño + PRICES.implementacion + PRICES.logo) - 1;
  const PAQUETE_PROFESIONAL = (PAQUETE_ESENCIAL + PRICES.hosting1m + PRICES.deploy) - 1;
  const PAQUETE_PROFESIONAL_ANUAL = (PAQUETE_ESENCIAL + PRICES.hosting1y + PRICES.deploy) - 1;

  const formatPrice = (price: number) => {
    const formatted = (Math.floor(price) + 0.90).toFixed(2);
    const [integer, decimal] = formatted.split(".");
    return (
      <>
        S/{integer}
        <span className="text-[0.6em] align-top ml-[1px] leading-none relative top-[0.40em]">
          .{decimal}
        </span>
      </>
    );
  };

  const handleContratar = (
    type: "esencial" | "profesional" | "profesional1y"
  ) => {
    const telefono = "51944784437";
    let mensaje = "";

    if (type === "esencial") {
      mensaje = `Hola Damian, me interesa el Paquete Esencial (1 mes). Precio: S/${PAQUETE_ESENCIAL.toFixed(2)}`;
    } else if (type === "profesional") {
      mensaje = `Hola Damian, me interesa el Paquete Profesional (1 mes). Precio: S/${PAQUETE_PROFESIONAL.toFixed(2)}`;
    } else {
      mensaje = `Hola Damian, me interesa el Paquete Profesional (1 año). Precio: S/${PAQUETE_PROFESIONAL_ANUAL.toFixed(2)}`;
    }

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto font-lora items-stretch">
      {/* Esencial */}
      <motion.div
        whileHover={{ scale: 1.005 }}
        className="flex flex-col h-full p-6 bg-white/90 border border-gray-200 shadow-sm rounded-none transition"
      >
        <h3 className="text-lg font-semibold mb-3">Esencial (1 mes)</h3>
        <p className="text-sm text-[#06061B]/80 mb-4">
          Paquete básico — lo necesario para arrancar rápido.
        </p>
        <ul className="text-sm space-y-1 mb-6">
          <li className="px-2">Diseño responsivo</li>
          <li className="px-2">Implementación Front-End</li>
          <li className="px-2">Logo básico</li>
        </ul>
        <div className="flex justify-between items-center mt-auto">
          <div>
            <div className="text-xs text-[#06061B]/70">Precio</div>
            <div className="text-xl font-bold text-[#06061B]">
              {formatPrice(PAQUETE_ESENCIAL)}
            </div>
          </div>
          <button
            onClick={() => handleContratar("esencial")}
            className="px-4 py-2 bg-[#060629] text-white text-sm font-medium hover:bg-[#101031] rounded-none transition"
          >
            Solicitar
          </button>
        </div>
      </motion.div>

      {/* Profesional mensual */}
      <motion.div
        whileHover={{ scale: 1.005 }}
        className="relative flex flex-col h-full p-6 bg-white/90 border border-gray-200 shadow-sm rounded-none transition"
      >
        <div
          className="absolute -top-3 right-3 px-3 py-1 text-xs font-semibold text-white"
          style={{ background: "linear-gradient(90deg,#FF7A18,#FF3D00)" }}
        >
          Más solicitado
        </div>
        <h3 className="text-lg font-semibold mb-3">Profesional (1 mes)</h3>
        <p className="text-sm text-[#06061B]/80 mb-4">
          Paquete avanzado — incluye publicación y hosting mensual.
        </p>
        <ul className="text-sm space-y-1 mb-6">
          <li className="px-2">Diseño responsivo</li>
          <li className="px-2">Implementación Front-End</li>
          <li className="px-2">Logo básico</li>
          <li className="px-2">Hosting (1 mes)</li>
          <li className="px-2">Deploy optimizado</li>
        </ul>
        <div className="flex justify-between items-center mt-auto">
          <div>
            <div className="text-xs text-[#06061B]/70">Precio</div>
            <div className="text-xl font-bold text-[#06061B]">
              {formatPrice(PAQUETE_PROFESIONAL)}
            </div>
          </div>
          <button
            onClick={() => handleContratar("profesional")}
            className="px-4 py-2 bg-[#101031] text-white text-sm font-medium hover:bg-[#060629] rounded-none transition"
          >
            Solicitar
          </button>
        </div>
      </motion.div>

      {/* Profesional anual */}
      <motion.div
        whileHover={{ scale: 1.005 }}
        className="relative flex flex-col h-full p-6 bg-white/90 border border-gray-200 shadow-sm rounded-none transition"
      >
        <div
          className="absolute -top-3 right-3 px-3 py-1 text-xs font-semibold text-white"
          style={{ background: "linear-gradient(90deg,#3FAD00,#1C7C00)" }}
        >
          Ahorra 30%
        </div>
        <h3 className="text-lg font-semibold mb-3">Profesional (1 año)</h3>
        <p className="text-sm text-[#06061B]/80 mb-4">
          Mismas características del plan Profesional pero con hosting anual a precio reducido.
        </p>
        <ul className="text-sm space-y-1 mb-6">
          <li className="px-2">Diseño responsivo</li>
          <li className="px-2">Implementación Front-End</li>
          <li className="px-2">Logo básico</li>
          <li className="px-2">Hosting (1 año)</li>
          <li className="px-2">Deploy optimizado</li>
        </ul>
        <div className="flex justify-between items-center mt-auto">
          <div>
            <div className="text-xs text-[#06061B]/70">Precio</div>
            <div className="text-xl font-bold text-[#06061B]">
              {formatPrice(PAQUETE_PROFESIONAL_ANUAL)}
            </div>
          </div>
          <button
            onClick={() => handleContratar("profesional1y")}
            className="px-4 py-2 bg-[#060629] text-white text-sm font-medium hover:bg-[#101031] rounded-none transition"
          >
            Solicitar
          </button>
        </div>
      </motion.div>
    </div>
  );
}
