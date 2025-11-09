"use client";

import { motion } from "framer-motion";

export default function PosterDesignServices() {
  const packages = [
    {
      title: "Básico",
      price: 39.9,
      description: "Perfecto para publicaciones o promociones rápidas.",
      features: [
        "1 diseño personalizado",
        "1 revisión",
        "Entrega JPG lista para redes",
        "Optimizado para Instagram o Facebook",
      ],
      color: "#060629",
    },
    {
      title: "Profesional",
      price: 69.9,
      description: "Diseño adaptable con estilo avanzado y formato doble.",
      features: [
        "2 propuestas iniciales",
        "3 revisiones",
        "Entrega JPG y PDF HD",
        "Versión redes y impresión",
        "Mockup incluido",
      ],
      tag: {
        text: "Más solicitado",
        color: "linear-gradient(90deg,#FF7A18,#FF3D00)",
      },
      color: "#101031",
    },
    {
      title: "Premium",
      price: 109.9,
      description: "Diseño integral con materiales listos y enfoque visual pro.",
      features: [
        "3 conceptos y revisiones ilimitadas",
        "Entrega JPG, PDF y editable (PSD/AI)",
        "Mockups premium",
        "Versión redes, impresión y formatos extra",
      ],
      tag: {
        text: "Recomendado",
        color: "linear-gradient(90deg,#3FAD00,#1C7C00)",
      },
      color: "#060629",
    },
  ];

  const formatPrice = (price: number) => {
    const [integer, decimal = "00"] = price.toFixed(2).split(".");
    return (
      <>
        S/{integer}
        <span className="text-[0.6em] align-top ml-[1px] leading-none relative top-[0.40em]">
          .{decimal}
        </span>
      </>
    );
  };

  const handleContact = (pkg: string, price: number) => {
    const telefono = "51944784437";
    const mensaje = `Hola Damian, me interesa el paquete ${pkg} de Posters Publicitarios. Precio: S/${price.toFixed(
      2
    )}`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto font-lora items-stretch">
      {packages.map((pkg) => (
        <motion.div
          key={pkg.title}
          whileHover={{ scale: 1.005 }}
          className="relative flex flex-col h-full p-6 bg-white/90 border border-gray-200 shadow-sm rounded-none transition"
        >
          {pkg.tag && (
            <div
              className="absolute -top-3 right-3 px-3 py-1 text-xs font-semibold text-white"
              style={{ background: pkg.tag.color }}
            >
              {pkg.tag.text}
            </div>
          )}

          <h3 className="text-lg font-semibold mb-3">{pkg.title}</h3>
          <p className="text-sm text-[#06061B]/80 mb-4">{pkg.description}</p>
          <ul className="text-sm space-y-1 mb-6">
            {pkg.features.map((f) => (
              <li key={f} className="px-2">
                {f}
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center mt-auto">
            <div>
              <div className="text-xs text-[#06061B]/70">Precio</div>
              <div className="text-xl font-bold text-[#06061B]">
                {formatPrice(pkg.price)}
              </div>
            </div>
            <button
              onClick={() => handleContact(pkg.title, pkg.price)}
              className="px-4 py-2 bg-[#060629] text-white text-sm font-medium hover:bg-[#101031] rounded-none transition"
            >
              Solicitar
            </button>
          </div>
        </motion.div>
      ))}

      <p className="text-xs text-[#06061B]/70 mt-4 text-center col-span-full">
        *Precios ajustables según requerimientos del cliente.
      </p>
    </div>
  );
}
