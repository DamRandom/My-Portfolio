"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      category: "Language",
      description:
        "Systems of rules and syntax for writing instructions computers can execute.",
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "Java", level: 60 },
        { name: "TypeScript", level: 85 },
        { name: "Python", level: 65 },
      ],
    },
    {
      category: "Front-End",
      description:
        "Tools and technologies for creating interfaces users interact with directly.",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Vue", level: 60 },
      ],
    },
    {
      category: "Styling Libraries",
      description:
        "Libraries for defining the look and layout of user interfaces.",
      skills: [
        { name: "Tailwind CSS", level: 85 },
        { name: "Material UI", level: 75 },
        { name: "Bootstrap", level: 60 },
        { name: "Chakra UI", level: 55 },
      ],
    },
    {
      category: "Backend",
      description: "Technologies for server logic and data management.",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Django", level: 55 },
      ],
    },
    {
      category: "Databases",
      description: "Systems for storing and querying information efficiently.",
      skills: [
        { name: "MySQL", level: 60 },
        { name: "PostgreSQL", level: 65 },
        { name: "SQLite", level: 50 },
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animatedLevels, setAnimatedLevels] = useState<number[]>([]);

  const { category, description, skills } = skillCategories[currentIndex];

  useEffect(() => {
    setAnimatedLevels(new Array(skills.length).fill(0));
    const timeout = setTimeout(() => {
      setAnimatedLevels(skills.map((s) => s.level));
    }, 100);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  return (
    <section
      id="skills"
      className="w-full p-12 bg-[#f0eded] text-[#06061B]"
      style={{
        boxShadow: `
          0 8px 15px rgba(6, 6, 27, 0.15),
          0 4px 6px rgba(6, 6, 27, 0.1),
          0 1px 3px rgba(6, 6, 27, 0.07)
        `,
      }}
    >
      <h2 className="text-4xl font-lora font-semibold mb-6 border-b border-[#06061B] mx-20 text-right">
        Skills & Technologies
      </h2>

      <p className="text-lg font-lora leading-relaxed tracking-wide text-[#06061B] text-justify mx-20 my-6">
        These are some of the skills, frameworks, and tools I am proficient in
        and comfortable working with. This does not mean I lack knowledge or
        expertise in other areas, but rather that these are the ones I am best
        prepared to deliver high-quality results with. That said, I am always
        open to learning new technologies and tools.
      </p>

      <div className="max-w-6xl mx-auto font-lora bg-white/10 backdrop-blur-[20px] shadow-2xl border border-white/20 p-8 flex flex-col lg:flex-row justify-center items-center gap-10">
        <div className="lg:w-1/3 order-2 lg:order-1 text-center">
          <AnimatePresence mode="wait">
            <motion.h3
              key={category}
              className="text-2xl font-semibold mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {category}
            </motion.h3>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={description}
              className="text-base font-light"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {description}
            </motion.p>
          </AnimatePresence>

          <div className="flex font-lora flex-wrap justify-center gap-2 mt-4">
            {skillCategories.map((cat, i) => (
              <motion.button
                key={cat.category}
                onClick={() => setCurrentIndex(i)}
                initial={false}
                animate={{
                  backgroundColor:
                    currentIndex === i ? "#e9e9e9" : "rgba(255,255,255,0.7)",
                  color: "#06061B",
                  boxShadow:
                    currentIndex === i
                      ? "0 4px 8px rgba(6, 6, 41, 0.25)"
                      : "0 4px 8px rgba(6, 6, 41, 0.15)",
                  scale: 1,
                }}
                whileHover={{
                  scale: 0.97,
                  boxShadow: "0 2px 4px rgba(6, 6, 41, 0.1)",
                  backgroundColor: currentIndex === i ? "#dcdcdc" : "#f7f7f7",
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  duration: 0.3,
                }}
                className={`px-3 py-1 text-sm font-medium
                  backdrop-blur-sm
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#06061B]
                  focus:ring-offset-1
                  rounded-none
                  border border-transparent
                `}
              >
                {cat.category}
              </motion.button>
            ))}
          </div>
        </div>

        <div
          className="lg:w-2/3 order-1 lg:order-2 w-full max-w-md"
          style={{ minHeight: "280px" }}
        >
          {skills.map(({ name }, idx) => (
            <div key={name} className="mb-5 group relative flex flex-col gap-1">
              <div className="flex justify-between items-center font-semibold text-[#06061B]">
                <span>{name}</span>
              </div>
              <div className="w-full bg-[#06061B]/10 rounded-full h-3 relative overflow-hidden cursor-pointer">
                <div
                  className="bg-gradient-to-r from-[#06061B] to-[#101031]"
                  style={{
                    width: `${animatedLevels[idx]}%`,
                    height: "100%",
                    borderRadius: "9999px",
                    transition: "width 1s ease-in-out",
                  }}
                />
                <span
                  className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#06061B] text-white text-xs px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none select-none"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {skills[idx].level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
