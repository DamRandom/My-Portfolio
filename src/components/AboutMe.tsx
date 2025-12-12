// Updated SobreMi component with floating message fixed at first cursor position

"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function SobreMi() {
  const [expanded, setExpanded] = useState(false);
  const [step, setStep] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [fixedPos, setFixedPos] = useState<{ x: number; y: number } | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetTimers = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  // TIMERS
  useEffect(() => {
    resetTimers();

    if (step === 1) {
      timerRef.current = setTimeout(() => {
        setStep(3);
        resetTimers();
        timerRef.current = setTimeout(() => {
          setStep(0);
          setFixedPos(null);
        }, 3000);
      }, 8000);
    }

    if (step === 2) {
      timerRef.current = setTimeout(() => {
        setExpanded(true);
        setFixedPos(null);
      }, 3000);
    }

    return resetTimers;
  }, [step]);

  const getFloatingText = () => {
    switch (step) {
      case 1:
        return "¿En serio quieres saber más de mí? ¿De verdad te interesa? Haz clic de nuevo.";
      case 2:
        return "Oh, de verdad hiciste clic. Gracias!!! Vale, ahora te muestro.";
      case 3:
        return "Bueno, supongo fue un accidente...";
      default:
        return null;
    }
  };

  const handleLeerMasClick = () => {
    if (expanded) return;

    if (step === 0) {
      setStep(1);
      setFixedPos(cursorPos);
      return;
    }

    if (step === 1) {
      setStep(2);
      return;
    }

    if (step === 3) {
      setStep(0);
      setFixedPos(null);
      return;
    }
  };

  const fancySpanStyle = {
    color: "rgba(6,6,27,0.65)",
    textShadow: "0 2px 4px rgba(0,0,0,0.18)",
    transition: "all 0.2s ease-out",
  } as const;

  const handleHoverEnter = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.currentTarget.style.transform = "translateY(1px)";
    e.currentTarget.style.color = "rgba(6,6,27,0.85)";
    e.currentTarget.style.textShadow = "0 1px 2px rgba(0,0,0,0.25)";
  };

  const handleHoverLeave = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.currentTarget.style.transform = "translateY(0px)";
    e.currentTarget.style.color = "rgba(6,6,27,0.65)";
    e.currentTarget.style.textShadow = "0 2px 4px rgba(0,0,0,0.18)";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="sobre-mi"
      className="relative w-full py-16 px-6 sm:py-20 sm:px-8 md:px-12 lg:px-16 xl:px-24 flex justify-center"
      style={{ fontFamily: "'Playfair Display', serif" }}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent z-0" />

      {/* FLOATING TEXT */}
      <AnimatePresence>
        {step !== 0 && !expanded && getFloatingText() && fixedPos && (
          <motion.div
            key="float-msg"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="pointer-events-none fixed z-[9999] px-4 py-1 min-w-max whitespace-normal max-w-xs text-sm bg-[#060629] text-white shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
            style={{
              left: fixedPos.x + 15,
              top: fixedPos.y + 20,
            }}
          >
            {getFloatingText()}
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="relative z-10 w-full max-w-[90rem] bg-white/10 backdrop-blur-[20px] shadow-2xl border border-white/20 p-8 sm:p-12"
        style={{ boxShadow: "0 8px 32px 0 rgba(6, 6, 41, 0.4)" }}
      >
        <motion.h2
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-lora font-semibold mb-6 sm:mb-8 border-b border-[#060629] text-[#06061B] w-full text-center sm:text-right"
        >
          Sobre mí
        </motion.h2>

        {/* MAIN PARAGRAPH */}
        <p
          className="text-base sm:text-lg font-lora leading-relaxed tracking-wide text-[#06061B]/90 text-justify relative"
          style={{
            color: "#06061B",
            opacity: 0.92,
            textShadow: "0 1px 2px rgba(6,6,27,0.14)",
          }}
        >
          Mi nombre es Damian Brito, Ingeniero en Sistemas de 24 años, actualmente radicado en Lima, Perú. Mi formación se forjó durante cuatro intensos años en la Universidad de las Ciencias Informáticas (UCI) en La Habana, Cuba. A lo largo de mi trayectoria académica, me involucré en proyectos que no solo perfeccionaron mis habilidades técnicas, sino también mi dedicación a crear soluciones prácticas y elegantes
          {expanded ? "." : "..."}

          {!expanded && (
            <span
              onClick={handleLeerMasClick}
              className="ml-2 text-sm cursor-pointer select-none"
              style={fancySpanStyle}
              onMouseEnter={handleHoverEnter}
              onMouseLeave={handleHoverLeave}
            >
              Leer más
            </span>
          )}
        </p>

        {/* EXPANDED TEXT */}
        <motion.div layout transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}>
          <AnimatePresence>
            {expanded && (
              <motion.p
                key="extra"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
                className="text-base sm:text-lg font-lora leading-relaxed tracking-wide text-[#06061B]/90 text-justify"
                style={{
                  color: "#06061B",
                  opacity: 0.92,
                  textShadow: "0 1px 2px rgba(6,6,27,0.14)",
                }}
              >
                <br />
                Fuera del código, soy gamer y amante de la música. Valoro las tardes tranquilas y silenciosas—probablemente el único desarrollador que no toma café.
                <br />

                <br />
                Enfrento el desarrollo con precisión e intención, priorizando la calidad sobre la cantidad. Me motiva diseñar soluciones que sean funcionales y sofisticadas, y la programación es mi herramienta para dar vida a esas ideas.
                <br />
                <br />
                Este portafolio es un reflejo de esa mentalidad: limpio, refinado y con propósito.
                <span
                  onClick={() => {
                    resetTimers();
                    setExpanded(false);
                    setStep(0);
                  }}
                  className="ml-2 text-sm cursor-pointer select-none"
                  style={fancySpanStyle}
                  onMouseEnter={handleHoverEnter}
                  onMouseLeave={handleHoverLeave}
                >
                  Menos
                </span>
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
