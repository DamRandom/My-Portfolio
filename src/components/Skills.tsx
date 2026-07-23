"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      category: "Frontend",
      skills: "React · Next.js",
    },
    {
      category: "Backend",
      skills: "Node.js · Express · APIs",
    },
    {
      category: "Database",
      skills: "MongoDB · SQL",
    },
    {
      category: "Tools",
      skills: "Git · Docker",
    },
  ];

  return (
    <section
      id="skills"
      className="relative w-full bg-transparent py-24 px-6 md:px-12 lg:px-20 text-black"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-4 gap-2 sm:gap-0">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-black uppercase">
              {t("skills.title")}
            </h2>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.4em] text-slate-500">
              {t("skills.subtitle")}
            </span>
          </div>
          <div className="h-[2px] w-full bg-black" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pt-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group flex flex-col gap-4 border-l-2 border-slate-200 pl-6 hover:border-black transition-colors"
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 group-hover:text-black transition-colors">
                {cat.category}
              </h3>
              <p className="text-lg sm:text-xl font-medium text-black leading-relaxed">
                {cat.skills}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
