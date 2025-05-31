'use client';
import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <section
      id="about"
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
          About Me
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
          My name is Damian Brito, a 23-year-old Computer Science Engineer,
          shaped by four intense years at the University of Information Sciences
          (UCI) in Havana, Cuba. Throughout my academic journey, I immersed
          myself in projects that refined not only my technical abilities but
          also my dedication to creating practical and elegant solutions.
          Outside the code, I’m a gamer and a music lover who values calm, quiet
          afternoons—probably the only developer you’ll meet who doesn’t drink
          coffee.
          <br />
          <br />
          I approach development with precision and intention, focusing on
          quality over quantity. Designing solutions that are both functional
          and sophisticated drives me, and programming is my craft to bring
          these ideas to life. I don’t chase trends; I build with purpose,
          ensuring each project reflects professionalism and thoughtful
          execution.
          <br />
          <br />
          This portfolio is a reflection of that mindset—clean, refined, and
          purposeful, just like the work I deliver.
        </motion.p>
      </div>
    </section>
  );
}
