"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Tooltip } from "@/components/ui/Tooltip";

const projects = [
  {
    title: "Rose-Reverie",
    image: "/images/projects/rose-reverie.png",
    description:
      "Un sitio web moderno y profesional desarrollado para un salón de belleza, con el objetivo de mostrar servicios y ofrecer una experiencia intuitiva al usuario. La plataforma está diseñada con simplicidad y elegancia, utilizando una paleta de colores limpia y femenina que refleja la identidad de la marca.",
    github: "https://github.com/DamRandom/Rose-Reverie",
    vercel: "https://daly-hair-style.vercel.app/",
    tags: ["Peluquería", "Salón de Belleza", "Francés", "UI/UX", "Identidad de Marca"],
  },
  {
    title: "PowerHaus",
    image: "/images/projects/powerhaus.png",
    description:
      "PowerHaus es una plataforma de comercio electrónico moderna que ofrece electrodomésticos innovadores y de alta calidad. El sitio web presenta una interfaz limpia y fácil de usar, con secciones dedicadas a la historia de la empresa, catálogo de productos y equipo. Construido con Next.js y Tailwind CSS, garantiza una experiencia fluida y responsiva en todos los dispositivos.",
    github: "https://github.com/DamRandom/PowerHaus",
    vercel: "https://power-haus.vercel.app/",
    tags: [
      "E-commerce",
      "Electrodomésticos",
      "Tienda Online",
      "Retail",
      "Inglés",
    ],
  },
  {
    title: "LitHub",
    image: "/images/projects/lithub.png",
    description:
      "LitHub es una plataforma personal de gestión de libros que permite a los usuarios llevar un seguimiento de su progreso de lectura, añadir libros y recibir recomendaciones personalizadas. Desarrollada con Next.js, también incluye un lector de ebooks compatible con PDF y EPUB.",
    github: "https://github.com/DamRandom/LitHub",
    vercel: "https://lithub.vercel.app",
    tags: [
      "Panel Personal",
      "Lector de Ebooks",
      "PDF",
      "EPUB",
      "Seguimiento de Lectura",
      "Inglés",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full px-6 sm:px-10 md:px-20 py-12 bg-[#f0eded] text-[#06061B]"
    >
      <h2 className="text-3xl sm:text-4xl font-lora font-semibold mb-6 border-b border-[#06061B] mx-0 sm:mx-20 text-center sm:text-right">
        Proyectos & Trabajo
      </h2>

      <p className="text-base sm:text-lg font-lora leading-relaxed tracking-wide text-[#06061B] text-justify mx-0 sm:mx-20 my-6">
        Aquí tienes algunos de mis proyectos para mostrar mis habilidades en la construcción de sitios web modernos.
      </p>

      <div className="max-w-6xl mx-auto font-lora bg-white/10 backdrop-blur-[20px] shadow-2xl border border-white/20 p-6 sm:p-8 flex flex-col gap-12">
        {projects.map(({ title, image, description, github, vercel, tags }) => (
          <motion.article
            key={title}
            className="flex flex-col lg:flex-row gap-6 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Vista previa de cada proyecto */}
            {title === "Rose-Reverie" ? (
              <div className="relative shadow-lg border border-white/20 overflow-hidden w-full max-w-[300px] flex-shrink-0">
                <Image
                  src={image}
                  alt={title}
                  width={300}
                  height={199}
                  style={{ objectFit: "cover" }}
                  priority
                />
                <div
                  className="
                    absolute inset-0 bg-[#501823] bg-opacity-40 backdrop-blur-sm
                    transition-opacity duration-300
                    hover:opacity-0
                    flex justify-center items-center
                  "
                >
                  <div className="absolute  left-0 right-0 h-[110px] bg-[#0C1212] flex justify-center items-center">
                    <Image
                      src="/images/projects/rose-reverie-logo.png"
                      alt="Logo"
                      width={120}
                      height={140}
                      priority
                    />
                  </div>
                </div>
              </div>
            ) : title === "PowerHaus" ? (
              <div className="relative shadow-lg border border-white/20 overflow-hidden w-full max-w-[300px] flex-shrink-0">
                <Image
                  src={image}
                  alt={title}
                  width={300}
                  height={199}
                  style={{ objectFit: "cover" }}
                  priority
                />
                <div
                  className="
                    absolute inset-0 bg-[#D36112] bg-opacity-40 backdrop-blur-sm
                    transition-opacity duration-300
                    hover:opacity-0
                    flex justify-center items-center
                  "
                >
                  <div className="absolute left-0 right-0 h-[110px] bg-[#101828] flex justify-center items-center">
                    <Image
                      src="/images/projects/powerhaus-logo.png"
                      alt="Logo PowerHaus"
                      width={120}
                      height={40}
                      priority
                    />
                  </div>
                </div>
              </div>
            ) : title === "LitHub" ? (
              <div className="relative shadow-lg border border-white/20 overflow-hidden w-full max-w-[300px] flex-shrink-0">
                <Image
                  src={image}
                  alt={title}
                  width={300}
                  height={199}
                  style={{ objectFit: "cover" }}
                  priority
                />
                <div
                  className="
                    absolute inset-0 bg-[#F3F4F6] bg-opacity-90 backdrop-blur-sm
                    transition-opacity duration-300
                    hover:opacity-0
                    flex justify-center items-center
                  "
                >
                  <div className="absolute left-0 right-0 h-[110px] bg-[#F4F5F7] shadow-lg flex justify-center items-center">
                    <Image
                      src="/images/projects/lithub-logo.png"
                      alt="Logo LitHub"
                      width={120}
                      height={40}
                      priority
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative shadow-lg border border-white/20 overflow-hidden w-full max-w-[300px] flex-shrink-0">
                <Image
                  src={image}
                  alt={title}
                  width={300}
                  height={199}
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            )}

            {/* Contenido del proyecto */}
            <div className="flex flex-col justify-between w-full lg:w-2/3">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-[#06061B]">
                {title}
              </h3>
              <p className="text-sm sm:text-base font-light mb-4 text-[#06061B]">
                {description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => (
                  <motion.button
                    key={tag}
                    initial={false}
                    animate={{
                      backgroundColor: "#e9e9e9",
                      color: "#06061B",
                      boxShadow: "0 4px 8px rgba(6, 6, 41, 0.25)",
                      scale: 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                      duration: 0.3,
                    }}
                    className="
                      px-3 py-1 text-xs sm:text-sm font-medium
                      backdrop-blur-sm
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[#06061B]
                      focus:ring-offset-1
                      rounded-none
                      border border-transparent
                      cursor-default
                    "
                  >
                    {tag}
                  </motion.button>
                ))}
              </div>

              <div className="flex gap-6 text-[#06061B] text-xl">
                <Tooltip text="Ver código">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Repositorio de GitHub de ${title}`}
                    className="hover:text-[#101031] transition-colors"
                  >
                    <FiGithub />
                  </a>
                </Tooltip>
                <Tooltip text="Visitar sitio">
                  <a
                    href={vercel}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Sitio en vivo de ${title}`}
                    className="hover:text-[#101031] transition-colors"
                  >
                    <FiExternalLink />
                  </a>
                </Tooltip>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
