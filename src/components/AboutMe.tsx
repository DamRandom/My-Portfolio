'use client';
import { motion } from 'framer-motion';

export default function SobreMi() {
  return (
    <section
      id="sobre-mi"
      className="relative w-full py-16 px-6 sm:py-20 sm:px-8 md:px-12 lg:px-16 xl:px-24 flex justify-center"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      {/* Gradiente de fondo sin animación */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent z-0" />

      <div
        className="
          relative z-10 w-full max-w-[90rem]
          bg-white/10 backdrop-blur-[20px] shadow-2xl border border-white/20
          p-8 sm:p-12
          "
        style={{ boxShadow: "0 8px 32px 0 rgba(6, 6, 41, 0.4)" }}
      >
        <motion.h2
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="
            text-3xl sm:text-4xl font-lora font-semibold mb-6 sm:mb-8
            border-b border-[#060629] text-[#06061B]
            w-full
            text-center sm:text-right
          "
        >
          Sobre mí
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="
            text-base sm:text-lg font-lora leading-relaxed tracking-wide
            text-[#06061B] text-justify
          "
        >
          Mi nombre es Damian Brito, Ingeniero en Sistemas de 24 años,
          actualmente radicado en Lima, Perú. Mi formación se forjó durante cuatro
          intensos años en la Universidad de las Ciencias Informáticas (UCI) en
          La Habana, Cuba. A lo largo de mi trayectoria académica, me involucré en
          proyectos que no solo perfeccionaron mis habilidades técnicas, sino también
          mi dedicación a crear soluciones prácticas y elegantes.
          <br />
          <br />
          Fuera del código, soy gamer y amante de la música. Valoro las tardes
          tranquilas y silenciosas—probablemente el único desarrollador que
          conocerás que no toma café.
          <br />
          <br />
          Enfrento el desarrollo con precisión e intención, priorizando la calidad
          sobre la cantidad. Me motiva diseñar soluciones que sean funcionales y
          sofisticadas, y la programación es mi herramienta para dar vida a esas
          ideas. No persigo tendencias; construyo con propósito, asegurando que cada
          proyecto refleje profesionalismo y ejecución consciente.
          <br />
          <br />
          Este portafolio es un reflejo de esa mentalidad: limpio, refinado y con
          propósito, tal como el trabajo que entrego.
        </motion.p>
      </div>
    </section>
  );
}
