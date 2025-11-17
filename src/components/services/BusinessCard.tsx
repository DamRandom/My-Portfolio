"use client";

import { motion } from "framer-motion";

export default function BusinessCardServices() {
  const packages = [
  {
    title: "Básico",
    price: 24.9,
    description: "Ideal para presentación sencilla y profesional.",
    features: [
      "Diseño de una cara",
      "1 propuesta inicial",
      "2 revisiones",
      "Archivo JPG/PNG listo para impresión",
    ],
    tag: { text: "Más solicitado", color: "linear-gradient(90deg,#FF7A18,#FF3D00)" },
    color: "#060629",
  },
  {
    title: "Profesional",
    price: 39.9,
    description: "Diseño completo con doble cara y alta calidad.",
    features: [
      "Diseño a doble cara",
      "2 propuestas iniciales",
      "4 revisiones",
      "Archivo JPG/PNG/PDF listo para impresión",
    ],
    color: "#101031",
  },
  {
    title: "Premium",
    price: 62.91, 
    description: "Diseño avanzado con variantes y mockups de presentación.",
    features: [
      "Diseño a doble cara + variantes",
      "3 propuestas iniciales",
      "Revisiones ilimitadas",
      "Mockups de presentación",
      "Archivos editables + listos para imprenta",
    ],
    tag: { text: "Ahorra 10%", color: "linear-gradient(90deg,#3FAD00,#1C7C00)" },
    color: "#060629",
  },
];


 const formatPrice = (price: number) => {
  const [integer, decimal = "00"] = price.toFixed(2).split(".");
  return (
    <>
      S/{integer}
      <span className="text-[0.6em] align-top ml-[1px] leading-none relative top-[0.40em]
">
        .{decimal}
      </span>
    </>
  );
};


  const handleContact = (pkg: string, price: number) => {
    const telefono = "51944784437";
    const mensaje = `Hola Damian, me interesa el paquete ${pkg} de Tarjetas de Presentación. Precio: S/${price.toFixed(
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
              <div className="text-xl font-bold text-[#06061B]">{formatPrice(pkg.price)}</div>
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
    </div>
  );
}
