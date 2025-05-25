import { useState } from "react";

export default function Skills() {
  const skillCategories = [
    {
      category: "Web Design",
      description:
        "The visual and structural creation of websites, focusing on the appearance and usability you experience while browsing.",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Material UI", level: 70 },
      ],
    },
    {
      category: "Front-end Development",
      description:
        "Where websites come to life, creating interactivity and functions that make everything respond quickly and smoothly.",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "React", level: 85 },
        { name: "TypeScript", level: 75 },
        { name: "Next.js", level: 70 },
      ],
    },
    {
      category: "Back-end & Databases",
      description:
        "The hidden engine managing data, users, and processes, ensuring information flows and is stored correctly.",
      skills: [
        { name: "Node.js (npm)", level: 75 },
        { name: "PostgreSQL", level: 70 },
        { name: "MySQL", level: 65 },
      ],
    },
    {
      category: "General Programming",
      description:
        "Languages used to solve logical problems, automate tasks, and build programs beyond just websites.",
      skills: [
        { name: "Python", level: 70 },
        { name: "Java", level: 65 },
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const { category, description, skills } = skillCategories[currentIndex];

  return (
    <section
      id="skills"
      className="w-full p-12 bg-[#F5F5F5] text-[#06061B]"
      style={{
        borderRadius: 0,
        boxShadow: `
          0 8px 15px rgba(6, 6, 27, 0.15),
          0 4px 6px rgba(6, 6, 27, 0.1),
          0 1px 3px rgba(6, 6, 27, 0.07)
        `,
      }}
    >
      <h2 className="text-4xl font-lora font-semibold mb-6 border-b border-[#06061B] text-right">
        Skills
      </h2>

      <p className="mb-12 max-w-3xl mx-auto text-justify text-lg font-normal">
        Here I list my technical skills organized so anyone can understand them,
        whether you’re technical or not. If you’re an expert, jump straight to
        the bars and categories.
      </p>

      <div
        className="max-w-6xl mx-auto bg-[#FAFAFA] shadow-lg p-8 flex flex-col lg:flex-row justify-center items-center gap-10"
        style={{ borderRadius: 0 }}
      >
        <div className="lg:w-1/3 order-2 lg:order-1 text-center">
          <h3 className="text-2xl font-semibold mb-2">{category}</h3>
          <p className="text-base font-light">{description}</p>
        </div>
        <div
          className="lg:w-2/3 order-1 lg:order-2 w-full max-w-md"
          style={{ minHeight: "280px" }} // suficiente para la categoría más larga
        >
          {skills.map(({ name, level }) => (
  <div key={name} className="mb-5 group relative flex flex-col gap-1">
    <div className="flex justify-between items-center font-semibold text-[#06061B]">
      <span>{name}</span>
      {/* No percentage here */}
    </div>
    <div
      className="w-full bg-[#06061B]/10 rounded-full h-3 relative overflow-hidden cursor-pointer"
      style={{}}
    >
      <div
        className="bg-gradient-to-r from-[#06061B] to-[#101031]"
        style={{
          width: `${level}%`,
          height: "100%",
          borderRadius: "9999px",
          transition: "width 0.4s ease-in-out",
        }}
      />
      <span
        className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#06061B] text-white text-xs px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none select-none"
        style={{ whiteSpace: "nowrap" }}
      >
        {level}%
      </span>
    </div>
  </div>
))}


          <div className="flex justify-center mt-8 gap-4">
            {skillCategories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Select category ${idx + 1}`}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "bg-[#06061B] scale-125"
                    : "bg-[#06061B]/30 hover:bg-[#06061B]/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
