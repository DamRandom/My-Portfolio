"use client";

import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";

interface LeftPanelProps {
  activeSection: string;
}

export default function LeftPanel({ activeSection }: LeftPanelProps) {
  const navItems = [
    { id: "about", label: "Sobre Mí" },
    { id: "skills", label: "Habilidades" },
    { id: "projects", label: "Proyectos" },
    { id: "services", label: "Servicios" },
    { id: "contact", label: "Contacto" },
  ];

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tighter text-slate-100 sm:text-5xl">
          <a href="/">Damian Brito</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl opacity-90">
          Ingeniero en Sistemas
        </h2>
        <p className="mt-6 max-w-xs leading-relaxed text-slate-400 font-light">
          Especializado en el diseño y desarrollo de experiencias digitales de alto impacto, donde la técnica se encuentra con la estética.
        </p>

        <nav className="nav hidden lg:block" aria-label="Navegación principal">
          <ul className="mt-16 w-max">
            {navItems.map((item) => (
              <li key={item.id} className="group">
                <a
                  className={`flex items-center py-3 outline-none transition-all ${
                    activeSection === item.id ? "nav-active" : ""
                  }`}
                  href={`#${item.id}`}
                >
                  <span className="nav-indicator mr-4 group-hover:w-16 group-hover:bg-slate-200"></span>
                  <span className="nav-text text-xs font-bold uppercase tracking-[0.2em] text-slate-500 group-hover:text-slate-200 transition-colors">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-12 flex flex-col gap-8">
        <a 
          href="/DamianBritoResumeES.pdf" 
          download 
          className="group/cv inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-slate-400 hover:text-slate-100 transition-colors uppercase"
        >
          <div className="p-2 rounded-full border border-white/5 bg-white/[0.02] group-hover/cv:border-white/20 transition-colors">
            <FiDownload className="h-4 w-4 transition-transform group-hover/cv:-translate-y-0.5" />
          </div>
          <span>Descargar Dossier</span>
        </a>
        
        <ul className="flex items-center gap-8 ml-1" aria-label="Redes sociales">
          <li className="text-slate-500 hover:text-slate-100 transition-colors">
            <a href="https://github.com/DamRandom" target="_blank" rel="noreferrer">
              <span className="sr-only">GitHub</span>
              <FiGithub size={22} />
            </a>
          </li>
          <li className="text-slate-500 hover:text-slate-100 transition-colors">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <span className="sr-only">LinkedIn</span>
              <FiLinkedin size={22} />
            </a>
          </li>
          <li className="text-slate-500 hover:text-slate-100 transition-colors">
            <a href="mailto:britohdamian@gmail.com" target="_blank" rel="noreferrer">
              <span className="sr-only">Email</span>
              <FiMail size={22} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
