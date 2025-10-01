// components/Services.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Option = {
  id: string;
  label: string;
  price: number;
};

const PRICES: Record<string, number> = {
  diseño: 300,
  implementacion: 500,
  logo: 100,
  hosting1y: 300,
  deploy: 200,
  mantenimiento1y: 500,
};

const CUSTOM_OPTIONS: Option[] = [
  { id: "diseño", label: "Diseño responsivo", price: PRICES.diseño },
  {
    id: "implementacion",
    label: "Implementación Front",
    price: PRICES.implementacion,
  },
  { id: "logo", label: "Logo básico", price: PRICES.logo },
  { id: "hosting1y", label: "Hosting (1 año)", price: PRICES.hosting1y },
  { id: "deploy", label: "Deploy y optimización", price: PRICES.deploy },
  {
    id: "mantenimiento1y",
    label: "Mantenimiento (1 año)",
    price: PRICES.mantenimiento1y,
  },
];

const PAQUETE_ESENCIAL = PRICES.diseño + PRICES.implementacion + PRICES.logo;
const PAQUETE_PROFESIONAL = PAQUETE_ESENCIAL + PRICES.hosting1y + PRICES.deploy;

const money = (n: number) =>
  new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
    maximumFractionDigits: 0,
  }).format(n);

export default function Services() {
  const [selectedCustom, setSelectedCustom] = useState<Record<string, boolean>>(
    () =>
      CUSTOM_OPTIONS.reduce((acc, opt) => {
        acc[opt.id] = true;
        return acc;
      }, {} as Record<string, boolean>)
  );

  const [activeCard, setActiveCard] = useState<
    "esencial" | "profesional" | "personalizado"
  >("esencial");

  const [popups, setPopups] = useState<{ id: number; amount: number }[]>([]);
  const popupLifetime = 900;

  const prevTotalRef = useRef<number>(
    CUSTOM_OPTIONS.reduce((sum, o) => sum + o.price, 0)
  );

  const customTotal = useMemo(
    () =>
      CUSTOM_OPTIONS.reduce(
        (sum, opt) => (selectedCustom[opt.id] ? sum + opt.price : sum),
        0
      ),
    [selectedCustom]
  );

  const addPopup = (amount: number) => {
    const id = Date.now() + Math.floor(Math.random() * 1000);
    setPopups((p) => [...p, { id, amount }]);
    setTimeout(() => {
      setPopups((p) => p.filter((x) => x.id !== id));
    }, popupLifetime);
  };

  const toggleOption = (id: string) => {
    const newSelected = { ...selectedCustom, [id]: !selectedCustom[id] };
    const newTotal = CUSTOM_OPTIONS.reduce(
      (sum, opt) => (newSelected[opt.id] ? sum + opt.price : sum),
      0
    );
    const diff = newTotal - prevTotalRef.current;

    setSelectedCustom(newSelected);
    setActiveCard("personalizado");

    if (diff !== 0) {
      prevTotalRef.current = newTotal;
      addPopup(diff);
    } else {
      prevTotalRef.current = newTotal;
    }
  };

  const handleContratar = (
    type: "esencial" | "profesional" | "personalizado"
  ) => {
    const destinatario = "britohdamian@gmail.com";
    let asunto = "";
    let cuerpo = "";

    if (type === "esencial") {
      asunto = "Solicitud - Paquete Esencial";
      cuerpo = `Hola, estoy interesado en el Paquete Esencial. Precio: ${money(
        PAQUETE_ESENCIAL
      )}.`;
    } else if (type === "profesional") {
      asunto = "Solicitud - Paquete Profesional";
      cuerpo = `Hola, estoy interesado en el Paquete Profesional. Precio: ${money(
        PAQUETE_PROFESIONAL
      )}.`;
    } else {
      const seleccionadas = CUSTOM_OPTIONS.filter((o) => selectedCustom[o.id]);
      asunto = "Solicitud - Paquete Personalizado";
      cuerpo =
        seleccionadas.length > 0
          ? `Hola, quiero un Paquete Personalizado con:\n${seleccionadas
              .map((s) => `- ${s.label} — ${money(s.price)}`)
              .join("\n")}\n\nTotal estimado: ${money(customTotal)}.`
          : `Hola, quiero información sobre un paquete personalizado.`;
    }

    window.location.href = `mailto:${destinatario}?subject=${encodeURIComponent(
      asunto
    )}&body=${encodeURIComponent(cuerpo)}`;
  };

  useEffect(() => {
    prevTotalRef.current = customTotal;
  }, []);

  return (
    <section
      id="services"
      className="w-full px-6 sm:px-10 md:px-20 py-16 bg-[#f0eded] text-[#06061B]"
    >
      {/* Intro */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-lora font-semibold mb-6 border-b border-[#06061B] mx-0 sm:mx-20 text-center sm:text-right">
          Elige tu Paquete <span className="text-[#101031]">Ideal</span>
        </h2>
        <p className="text-base md:text-lg text-[#06061B]/80 max-w-2xl mx-auto leading-relaxed">
          Tres opciones claras: paquete básico, paquete avanzado con publicación
          y hosting, o arma tu propio plan.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto font-lora items-stretch">
        {/* Esencial */}
        <motion.div
          whileHover={{ scale: 1.005 }}
          className={`flex flex-col h-full p-6 bg-white/90 border border-gray-200 shadow-sm rounded-none transition ${
            activeCard === "esencial" ? "bg-white/95" : ""
          }`}
        >
          <h3 className="text-lg font-semibold mb-3">Esencial</h3>
          <p className="text-sm text-[#06061B]/80 mb-4">
            Paquete básico — lo necesario para arrancar rápido.
          </p>
          <ul className="text-sm space-y-1 mb-6">
            <li className="px-2"> Diseño responsivo</li>
            <li className="px-2"> Implementación Front</li>
            <li className="px-2"> Logo básico</li>
          </ul>
          <div className="flex justify-between items-center mt-auto">
            <div>
              <div className="text-xs text-[#06061B]/70">Precio</div>
              <div className="text-xl font-bold">{money(PAQUETE_ESENCIAL)}</div>
            </div>
            <button
              onClick={() => handleContratar("esencial")}
              className="px-4 py-2 bg-[#060629] text-white text-sm font-medium hover:bg-[#101031] rounded-none transition"
            >
              Contratar
            </button>
          </div>
        </motion.div>

        {/* Profesional */}
        <motion.div
          whileHover={{ scale: 1.005 }}
          className={`relative flex flex-col h-full p-6 bg-white/90 border border-gray-200 shadow-sm rounded-none transition ${
            activeCard === "profesional" ? "bg-white/95" : ""
          }`}
        >
          <div
            className="absolute -top-3 right-3 px-3 py-1 text-xs font-semibold text-white"
            style={{ background: "linear-gradient(90deg,#FF7A18,#FF3D00)" }}
          >
            Más solicitado
          </div>
          <h3 className="text-lg font-semibold mb-3">Profesional</h3>
          <p className="text-sm text-[#06061B]/80 mb-4">
            Paquete avanzado — incluye todo lo necesario más publicación y
            hosting por 1 año.
          </p>
          <ul className="text-sm space-y-1 mb-6">
            <li className="px-2"> Diseño responsivo</li>
            <li className="px-2"> Implementación Front</li>
            <li className="px-2"> Logo básico</li>
            <li className="px-2"> Hosting (1 año)</li>
            <li className="px-2"> Deploy optimizado</li>
          </ul>
          <div className="flex justify-between items-center mt-auto">
            <div>
              <div className="text-xs text-[#06061B]/70">Precio</div>
              <div className="text-xl font-bold">
                {money(PAQUETE_PROFESIONAL)}
              </div>
            </div>
            <button
              onClick={() => handleContratar("profesional")}
              className="px-4 py-2 bg-[#101031] text-white text-sm font-medium hover:bg-[#060629] rounded-none transition"
            >
              Contratar
            </button>
          </div>
        </motion.div>

        {/* Personalizado */}
        <motion.div
          whileHover={{ scale: 1.005 }}
          className="flex flex-col h-full p-6 bg-white/90 border border-gray-200 shadow-sm rounded-none transition"
        >
          <h3 className="text-lg font-semibold mb-3">Personalizado</h3>
          <p className="text-sm text-[#06061B]/80 mb-4">
            Arma tu plan — haz clic para quitar o añadir servicios.
          </p>
          <div className="space-y-1 mb-6 max-h-40 overflow-y-auto pr-1">
            {CUSTOM_OPTIONS.map((opt) => {
              const active = !!selectedCustom[opt.id];
              return (
                <div
                  key={opt.id}
                  onClick={() => toggleOption(opt.id)}
                  className={`flex justify-between items-center text-sm cursor-pointer px-2 transition ${
                    active
                      ? "hover:bg-[#101031]/5"
                      : "line-through text-gray-400 italic"
                  }`}
                >
                  <span>{opt.label}</span>
                  <span>{money(opt.price)}</span>
                </div>
              );
            })}
          </div>
          <div className="flex justify-between items-center mt-auto relative">
            <div className="relative">
              <div className="text-xs text-[#06061B]/70">Total</div>
              <motion.div
                initial={{ scale: 0.99 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                className="text-xl font-bold relative"
              >
                {money(customTotal || 0)}

                <div className="absolute left-1/2 -translate-x-1/2 -top-7 pointer-events-none">
                  <AnimatePresence mode="popLayout">
                    {popups.map((p) => (
                      <motion.span
                        key={p.id}
                        initial={{ opacity: 1, y: 0 }}
                        animate={{ opacity: 0, y: -26 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.85, ease: "easeOut" }}
                        className="block text-xs font-semibold text-[#060629] whitespace-nowrap"
                      >
                        {p.amount > 0 ? `+${money(p.amount)}` : money(p.amount)}
                      </motion.span>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
            <button
              onClick={() => handleContratar("personalizado")}
              className={`px-4 py-2 ${
                customTotal === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#060629] hover:bg-[#101031]"
              } text-white text-sm font-medium rounded-none transition`}
              disabled={customTotal === 0}
            >
              Contratar
            </button>
          </div>
        </motion.div>
      </div>

      <div className="text-xs text-[#06061B]/70 text-center mt-8">
        *Precios aproximados. El monto final se acuerda según alcance y
        requerimientos.
      </div>
    </section>
  );
}
