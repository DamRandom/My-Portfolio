"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("languages");

  const skillCategories = [
    {
      id: "languages",
      label: t("skills.categories.languages"),
      description: t("skills.categories.languages") === "Languages" 
        ? "The technical foundation: the languages I use to provide precise instructions to computers and build the core logic of any application."
        : "La base técnica: los idiomas que utilizo para dar instrucciones precisas a las computadoras y construir la lógica central de cualquier aplicación.",
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Python", level: 75 },
        { name: "Java", level: 70 },
        { name: "SQL", level: 85 },
      ]
    },
    {
      id: "frontend",
      label: t("skills.categories.frontend"),
      description: t("skills.categories.frontend") === "Frontend"
        ? "The visual and interaction layer: I ensure that what the user sees and touches is fast, intuitive, and aesthetically flawless."
        : "La capa visual y de interacción: me encargo de que lo que el usuario ve y toca sea rápido, intuitivo y estéticamente impecable.",
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Framer Motion", level: 85 },
        { name: "Vue.js", level: 65 },
        { name: "HTML / CSS", level: 100 },
      ]
    },
    {
      id: "backend",
      label: t("skills.categories.backend"),
      description: t("skills.categories.backend") === "Backend"
        ? "The hidden engine: I manage security, data storage, and communication between the server and the user."
        : "El motor oculto: gestiono la seguridad, el almacenamiento de datos y la comunicación entre el servidor y el usuario.",
      skills: [
        { name: "Node.js / Express", level: 85 },
        { name: "PostgreSQL / MySQL", level: 80 },
        { name: "REST APIs", level: 90 },
        { name: "Django", level: 60 },
      ]
    },
    {
      id: "infra",
      label: t("skills.categories.infra"),
      description: t("skills.categories.infra") === "Infrastructure"
        ? "Deployment and environment: tools that ensure the software is available, stable, and easy to update."
        : "El despliegue y entorno: herramientas que garantizan que el software esté disponible, sea estable y fácil de actualizar.",
      skills: [
        { name: "Git / GitHub", level: 95 },
        { name: "Docker", level: 60 },
        { name: "Vercel / Netlify", level: 95 },
        { name: "Linux / Bash", level: 70 },
      ]
    }
  ];

  const activeData = skillCategories.find(cat => cat.id === activeTab)!;

  return (
    <section
      id="skills"
      className="relative w-full bg-[#fcfcfc] py-24 px-6 md:px-20 text-[#0f172a]"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="w-full">
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-4xl font-bold tracking-tighter text-slate-900 uppercase">
              {t("skills.title")}
            </h2>
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-slate-300">
              {t("skills.subtitle")}
            </span>
          </div>
          <div className="h-px w-full bg-slate-200" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 flex flex-col gap-4">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`group flex justify-between items-center px-8 py-6 border-l-4 transition-all ${
                  activeTab === cat.id 
                    ? "bg-white border-slate-900 shadow-sm" 
                    : "border-slate-100 hover:border-slate-300 opacity-50 hover:opacity-100"
                }`}
              >
                <span className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-colors ${
                  activeTab === cat.id ? "text-slate-900" : "text-slate-400"
                }`}>
                  {cat.label}
                </span>
                <span className="text-[8px] font-black text-slate-200 group-hover:text-slate-400">
                  {activeTab === cat.id ? "→" : ""}
                </span>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-12"
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">
                    {activeData.label}
                  </h3>
                  <p className="text-slate-500 font-light leading-relaxed">
                    {activeData.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-8">
                  {activeData.skills.map((skill, i) => (
                    <div key={skill.name} className="space-y-2 group">
                      <div className="flex justify-between items-end">
                        <span className="text-sm font-bold text-slate-800 uppercase tracking-wider">{skill.name}</span>
                        <span className="text-[10px] font-mono text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="h-[2px] w-full bg-slate-100 relative">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                          className="absolute h-full bg-slate-900"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
