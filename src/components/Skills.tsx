"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

function AnimatedNumber({ value }: { value: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, { duration: 1, ease: "easeOut" });
    return controls.stop;
  }, [value, count]);

  return <motion.span>{rounded}</motion.span>;
}

function TypewriterText({ text }: { text: string }) {
  const characters = text.split("");

  return (
    <span className="inline-block">
      {characters.map((char, i) => (
        <motion.span
          key={`${text}-${i}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.1,
            delay: i * 0.03,
            ease: "easeOut",
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Skills() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("languages");

  const skillCategories = [
    {
      id: "languages",
      label: t("skills.categories.languages"),
      description: t("skills.categories.langDesc"),
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Python", level: 75 },
        { name: "Java", level: 70 },
        { name: "SQL", level: 85 },
      ],
    },
    {
      id: "frontend",
      label: t("skills.categories.frontend"),
      description: t("skills.categories.frontDesc"),
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Framer Motion", level: 85 },
        { name: "Vue.js", level: 65 },
        { name: "HTML / CSS", level: 100 },
      ],
    },
    {
      id: "backend",
      label: t("skills.categories.backend"),
      description: t("skills.categories.backDesc"),
      skills: [
        { name: "Node.js / Express", level: 85 },
        { name: "PostgreSQL / MySQL", level: 80 },
        { name: "REST APIs", level: 90 },
        { name: "Django", level: 60 },
        { name: "MongoDB", level: 75 },
      ],
    },
    {
      id: "infra",
      label: t("skills.categories.infra"),
      description: t("skills.categories.infraDesc"),
      skills: [
        { name: "Git / GitHub", level: 95 },
        { name: "Docker", level: 60 },
        { name: "Vercel / Netlify", level: 95 },
        { name: "Linux / Bash", level: 70 },
        { name: "CI / CD", level: 80 },
      ],
    },
  ];

  const activeData = skillCategories.find((cat) => cat.id === activeTab)!;

  return (
    <section
      id="skills"
      className="relative w-full bg-[#fcfcfc] py-24 px-6 md:px-20 text-[#0f172a]"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="w-full">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-4 gap-2 sm:gap-0">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900 uppercase">
              {t("skills.title")}
            </h2>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.4em] text-slate-300">
              {t("skills.subtitle")}
            </span>
          </div>
          <div className="h-px w-full bg-slate-200" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-4 flex flex-col gap-2 sm:gap-4">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`group flex justify-between items-center px-6 sm:px-8 py-4 sm:py-6 border-l-4 transition-all ${
                  activeTab === cat.id
                    ? "bg-white border-slate-900 shadow-sm"
                    : "border-slate-100 hover:border-slate-300 opacity-50 hover:opacity-100"
                }`}
              >
                <span
                  className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] transition-colors ${
                    activeTab === cat.id ? "text-slate-900" : "text-slate-400"
                  }`}
                >
                  {cat.label}
                </span>
                <span className="text-[8px] font-black text-slate-200 group-hover:text-slate-400 hidden sm:block">
                  {activeTab === cat.id ? "→" : ""}
                </span>
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 min-h-[400px]">
            <div className="space-y-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">
                    {activeData.label}
                  </h3>
                  <p className="text-slate-500 font-light leading-relaxed">
                    {activeData.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="grid grid-cols-1 gap-8">
                {activeData.skills.map((skill, i) => (
                  <div key={i} className="space-y-2 group">
                    <div className="flex justify-between items-end min-h-[20px]">
                      <span className="text-sm font-bold text-slate-800 uppercase tracking-wider">
                        <TypewriterText text={skill.name} />
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        <AnimatedNumber value={skill.level} />%
                      </span>
                    </div>
                    <div className="h-[2px] w-full bg-slate-100 relative">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          ease: "circOut",
                        }}
                        className="absolute h-full bg-slate-900"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
