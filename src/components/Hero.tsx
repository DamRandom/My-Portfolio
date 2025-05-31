// components/Hero.jsx
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-transparent px-4 sm:px-6 md:px-20"
      aria-label="Hero Section"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent z-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <motion.div
        className="relative z-10 max-w-4xl text-[#060629] translate-y-[-10%] sm:ml-4 md:ml-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-lora font-extrabold uppercase tracking-wide mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        >
          HI THERE,
        </motion.h2>

        <motion.h1
          className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-lora font-semibold mb-8 leading-snug"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
        >
          I&apos;m Damian Brito, <br />
          a Computer Science Engineer
        </motion.h1>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="bg-[#060629] text-[#F5F5F5] px-6 py-3 sm:px-8 font-lora font-semibold tracking-wide text-center shadow-[0_8px_20px_rgba(6,6,41,0.4)] transition transform hover:translate-y-1 hover:shadow-[0_4px_10px_rgba(6,6,41,0.6)] hover:bg-[#FAFAFA] hover:text-[#060629]"
          >
            Get in Touch
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#projects"
            className="bg-[#F5F5F5] text-[#060629] px-6 py-3 sm:px-8 font-lora font-semibold tracking-wide text-center shadow-[0_8px_20px_rgba(6,6,41,0.15)] transition transform hover:translate-y-1 hover:shadow-[0_4px_10px_rgba(6,6,41,0.3)] hover:bg-[#060629] hover:text-[#F5F5F5]"
          >
            My Work
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
