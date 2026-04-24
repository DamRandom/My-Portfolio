"use client";

import React, { createContext, useContext, useState } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("es");

  const translations: Record<Language, Record<string, any>> = {
    es: {
      hero: {
        portfolio: "Portafolio Personal",
        role: "Ingeniero en Sistemas / Full Stack",
        description: "Arquitecto de soluciones digitales que fusionan la precisión técnica con una estética minimalista.",
        ctaWork: "Explorar Trabajo",
        ctaContact: "Contacto Directo",
        status: "Disponible para Proyectos"
      },
      about: {
        title: "Sobre Mí",
        subtitle: "Perfil Personal",
        p1: "Soy Damian Brito, Ingeniero en Sistemas de 24 años. Mi formación en la UCI (La Habana) sentó las bases de una disciplina técnica que hoy aplico en cada línea de código.",
        p2: "Abordo el desarrollo con una mentalidad de arquitecto: cada componente debe tener un propósito, una estructura sólida y una estética pulcra.",
        specialty: "Especialidad",
        focus: "Enfoque",
        interests: "Intereses",
        specValue: "Ingeniero Frontend",
        focusValue: "Arquitectura Limpia",
        interestsValue: "Gaming & Producción Musical"
      },
      skills: {
        title: "Habilidades",
        subtitle: "Expertiz Técnica",
        categories: {
          languages: "Lenguajes",
          frontend: "Frontend",
          backend: "Backend",
          infra: "Infraestructura",
          langDesc: "La base técnica: los idiomas que utilizo para dar instrucciones precisas a las computadoras y construir la lógica central de cualquier aplicación.",
          frontDesc: "La capa visual y de interacción: me encargo de que lo que el usuario ve y toca sea rápido, intuitivo y estéticamente impecable.",
          backDesc: "El motor oculto: gestiono la seguridad, el almacenamiento de datos y la comunicación entre el servidor y el usuario.",
          infraDesc: "El despliegue y entorno: herramientas que garantizan que el software esté disponible, sea estable y fácil de actualizar."
        }
      },
      services: {
        title: "Servicios de Desarrollo",
        description: "Soluciones de ingeniería web enfocadas en performance, escalabilidad y una estética impecable.",
        quote: "* Cotización técnica personalizada según la complejidad del proyecto.",
        plans: {
          essential: {
            title: "Esencial",
            desc: "Presencia profesional sólida y funcional. Ideal para proyectos que requieren claridad y estructura inmediata.",
            cta: "Solicitar Info"
          },
          professional: {
            title: "Profesional",
            desc: "Estructura completa con soporte continuo. Diseñado para marcas activas que buscan escalabilidad.",
            cta: "Empezar Ahora",
            popular: "Popular"
          },
          extended: {
            title: "Extendido",
            desc: "Gestión técnica integral a largo plazo. Prioriza la consistencia y la evolución constante de la plataforma.",
            cta: "Consultar Plan"
          }
        },
        features: {
          responsive: "Diseño Responsivo Premium",
          stack: "Implementación Next.js / React",
          seo: "Optimización SEO & Performance",
          clean: "Arquitectura de Código Limpio",
          hosting: "Hosting & Mantenimiento",
          support: "Soporte Prioritario 24/7"
        }
      },
      projects: {
        title: "Proyectos",
        subtitle: "Trabajos Seleccionados",
        slide: "Diapositiva",
        archive: "Archivo Completo"
      },
      contact: {
        title: "Contacto",
        description: "Disponible para nuevas colaboraciones y proyectos desafiantes. Respondo con prontitud y profesionalismo.",
        location: "Ubicación",
        email: "Email",
        phone: "Teléfono",
        coffee: "Invite a Coffee",
        rights: "TODOS LOS DERECHOS RESERVADOS.",
        tagline: "Arquitectando Espacios Digitales"
      }
    },
    en: {
      hero: {
        portfolio: "Personal Portfolio",
        role: "Systems Engineer / Full Stack",
        description: "Architect of digital solutions merging technical precision with a minimalist aesthetic.",
        ctaWork: "Explore Work",
        ctaContact: "Direct Contact",
        status: "Available for Projects"
      },
      about: {
        title: "About Me",
        subtitle: "Personal Profile",
        p1: "I'm Damian Brito, a 24-year-old Systems Engineer. My training at UCI (Havana) laid the foundation for the technical discipline I apply in every line of code today.",
        p2: "I approach development with an architect's mindset: every component must have a purpose, a solid structure, and a clean aesthetic.",
        specialty: "Specialty",
        focus: "Focus",
        interests: "Interests",
        specValue: "Frontend Engineer",
        focusValue: "Clean Architecture",
        interestsValue: "Gaming & Music Production"
      },
      skills: {
        title: "Skills",
        subtitle: "Technical Expertise",
        categories: {
          languages: "Languages",
          frontend: "Frontend",
          backend: "Backend",
          infra: "Infrastructure",
          langDesc: "The technical foundation: the languages I use to provide precise instructions to computers and build the core logic of any application.",
          frontDesc: "The visual and interaction layer: I ensure that what the user sees and touches is fast, intuitive, and aesthetically flawless.",
          backDesc: "The hidden engine: I manage security, data storage, and communication between the server and the user.",
          infraDesc: "Deployment and environment: tools that ensure the software is available, stable, and easy to update."
        }
      },
      services: {
        title: "Development Services",
        description: "Web engineering solutions focused on performance, scalability, and impeccable aesthetics.",
        quote: "* Custom technical quote based on project complexity.",
        plans: {
          essential: {
            title: "Essential",
            desc: "Solid and functional professional presence. Ideal for projects requiring immediate clarity and structure.",
            cta: "Request Info"
          },
          professional: {
            title: "Professional",
            desc: "Complete structure with continuous support. Designed for active brands looking for scalability.",
            cta: "Start Now",
            popular: "Popular"
          },
          extended: {
            title: "Extended",
            desc: "Long-term integral technical management. Prioritizes consistency and constant platform evolution.",
            cta: "Consult Plan"
          }
        },
        features: {
          responsive: "Premium Responsive Design",
          stack: "Next.js / React Implementation",
          seo: "SEO & Performance Optimization",
          clean: "Clean Code Architecture",
          hosting: "Hosting & Maintenance",
          support: "24/7 Priority Support"
        }
      },
      projects: {
        title: "Projects",
        subtitle: "Selected Works",
        slide: "Slide",
        archive: "Full Archive"
      },
      contact: {
        title: "Contact",
        description: "Available for new collaborations and challenging projects. I respond promptly and professionally.",
        location: "Location",
        email: "Email",
        phone: "Phone",
        coffee: "Invite a Coffee",
        rights: "ALL RIGHTS RESERVED.",
        tagline: "Architecting Digital Spaces"
      }
    }
  };

  const t = (key: string) => {
    const keys = key.split(".");
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
