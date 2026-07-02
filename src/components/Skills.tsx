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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 sm:gap-4 overflow-x-auto snap-x hide-scrollbar pb-4 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`group flex justify-center lg:justify-between items-center px-6 sm:px-8 py-4 sm:py-6 border-b-[2px] lg:border-b-0 lg:border-l-[2px] transition-colors whitespace-nowrap min-w-max snap-center ${
                  activeTab === cat.id
                    ? "bg-black border-black shadow-none"
                    : "bg-transparent border-slate-200 hover:border-black opacity-100"
                }`}
              >
                <span
                  className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] transition-colors ${
                    activeTab === cat.id ? "text-white" : "text-slate-500 group-hover:text-black"
                  }`}
                >
                  {cat.label}
                </span>
                <span className={`text-[8px] font-black hidden lg:block ml-4 ${
                    activeTab === cat.id ? "text-white" : "text-black opacity-0 group-hover:opacity-100 transition-opacity"
                  }`}>
                  →
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
                  <h3 className="text-xl font-bold text-black uppercase tracking-tighter">
                    {activeData.label}
                  </h3>
                  <p className="text-slate-600 font-medium leading-relaxed">
                    {activeData.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="grid grid-cols-1 gap-8">
                {activeData.skills.map((skill, i) => (
                  <div key={i} className="space-y-2 group">
                    <div className="flex justify-between items-end min-h-[20px]">
                      <span className="text-sm font-bold text-black uppercase tracking-wider">
                        <TypewriterText text={skill.name} />
                      </span>
                      <span className="text-xs font-mono text-slate-500 font-bold">
                        <AnimatedNumber value={skill.level} />%
                      </span>
                    </div>
                    <div className="h-[4px] sm:h-[2px] w-full bg-slate-200 relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          ease: "circOut",
                        }}
                        className="absolute h-full bg-black"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
