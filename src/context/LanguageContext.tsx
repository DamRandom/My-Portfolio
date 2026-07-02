"use client";

import React, { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Language = "es" | "en";

type TranslationValue = string | { [key: string]: TranslationValue };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<Language>("es");
  const [isChanging, setIsChanging] = useState(false);

  const translations: Record<Language, Record<string, TranslationValue>> = {
    es: {
      hero: {
        portfolio: "Portafolio Personal",
        role: "Ingeniero en Sistemas / Full Stack",
        description:
          "Arquitecto de soluciones digitales que fusionan la precisión técnica con una estética minimalista.",
        ctaWork: "Explorar Trabajo",
        ctaContact: "Contacto Directo",
        status: "Disponible para Proyectos",
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
        interestsValue: "Gaming & Producción Musical",
      },
      skills: {
        title: "Habilidades",
        subtitle: "Expertiz Técnica",
        categories: {
          languages: "Lenguajes",
          frontend: "Frontend",
          backend: "Backend",
          infra: "Infraestructura",
          langDesc:
            "La base técnica: los idiomas que utilizo para dar instrucciones precisas a las computadoras y construir la lógica central de cualquier aplicación.",
          frontDesc:
            "La capa visual y de interacción: me encargo de que lo que el usuario ve y toca sea rápido, intuitivo y estéticamente impecable.",
          backDesc:
            "El motor oculto: gestiono la seguridad, el almacenamiento de datos y la comunicación entre el servidor y el usuario.",
          infraDesc:
            "El despliegue y entorno: herramientas que garantizan que el software esté disponible, sea estable y fácil de actualizar.",
        },
      },
      services: {
        title: "Servicios de Desarrollo",
        description:
          "Soluciones de ingeniería web enfocadas en performance, escalabilidad y una estética impecable.",
        quote:
          "* Cotización técnica personalizada según la complejidad del proyecto.",
        plans: {
  essential: {
    title: "Esencial",
    desc: "Empieza a tener presencia online profesional para tu negocio.",
    cta: "Empezar"
  },
  professional: {
    title: "Profesional",
    desc: "Convierte visitantes en clientes y haz crecer tu negocio.",
    cta: "Quiero más clientes",
    popular: "Popular"
  },
  extended: {
    title: "Avanzado",
    desc: "Haz crecer tu negocio y automatiza procesos clave.",
    cta: "Escalar mi negocio"
  }
},
        features: {
          responsive: "Diseño Responsivo Premium",
          stack: "Implementación Next.js / React",
          seo: "Optimización SEO & Performance",
          clean: "Arquitectura de Código Limpio",
          hosting: "Hosting & Mantenimiento",
          support: "Soporte Prioritario 24/7",
        },
      },
      projects: {
        title: "Proyectos",
        subtitle: "Trabajos Seleccionados",
        slide: "Diapositiva",
        archive: "Archivo Completo",
      },
      contact: {
        title: "Contacto",
        description:
          "Disponible para nuevas colaboraciones y proyectos desafiantes. Respondo con prontitud y profesionalismo.",
        location: "Ubicación",
        email: "Email",
        phone: "Teléfono",
        coffee: "Invite a Coffee",
        donation_modal: {
          title: "Invítame un Café",
          subtitle: "Tu apoyo me ayuda a seguir creando",
          paypal: "PayPal (Extranjero)",
          yape: "Yape (Perú)",
          plin: "Plin (Perú)",
          copy_number: "Copiar Número",
          copied: "¡Copiado!",
          cta_paypal: "Ir a PayPal",
          phone_label: "Número de cuenta:",
        },
        rights: "TODOS LOS DERECHOS RESERVADOS.",
        tagline: "Arquitectando Espacios Digitales",
      },
      referral: {
        title: "Programa de Referidos",
        subtitle: "Trabaja con Nosotros",
        description:
          "Adquiere tu código único y empieza a ganar compartiendo mi trabajo.",
        benefit:
          "Gana un 10% del pago final por cada persona que contacte y concrete un proyecto usando tu código de referido.",
        cta: "Solicitar Código",
      },
    },
    en: {
      hero: {
        portfolio: "Personal Portfolio",
        role: "Systems Engineer / Full Stack",
        description:
          "Architect of digital solutions merging technical precision with a minimalist aesthetic.",
        ctaWork: "Explore Work",
        ctaContact: "Direct Contact",
        status: "Available for Projects",
      },
      about: {
        title: "About Me",
        subtitle: "Personal Profile",
        p1: "I’m Damian Brito, a 24-year-old Systems Engineer. My studies at UCI (Havana) built the foundation for the technical discipline I bring to every line of code today.",
        p2: "I approach development with an architect's mindset: every component must have a purpose, a solid structure, and a clean aesthetic.",
        specialty: "Specialty",
        focus: "Focus",
        interests: "Interests",
        specValue: "Frontend Engineer",
        focusValue: "Clean Architecture",
        interestsValue: "Gaming & Listening to Music",
      },
      skills: {
        title: "Skills",
        subtitle: "Technical Expertise",
        categories: {
          languages: "Languages",
          frontend: "Frontend",
          backend: "Backend",
          infra: "Infrastructure",
          langDesc:
            "The technical foundation: the languages I use to provide precise instructions to computers and build the core logic of any application.",
          frontDesc:
            "The visual and interaction layer: I ensure that what the user sees and touches is fast, intuitive, and aesthetically flawless.",
          backDesc:
            "The hidden engine: I manage security, data storage, and communication between the server and the user.",
          infraDesc:
            "Deployment and environment: tools that ensure the software is available, stable, and easy to update.",
        },
      },
      services: {
        title: "Development Services",
        description:
          "Web engineering solutions focused on performance, scalability, and impeccable aesthetics.",
        quote: "* Custom technical quote based on project complexity.",
        plans: {
  essential: {
    title: "Essential",
    desc: "Start building a professional online presence for your business.",
    cta: "Get Started"
  },
  professional: {
    title: "Professional",
    desc: "Turn visitors into clients and grow your business.",
    cta: "Get More Clients",
    popular: "Popular"
  },
  extended: {
    title: "Advanced",
    desc: "Scale your business and automate key processes.",
    cta: "Scale My Business"
  }
},
        features: {
          responsive: "Premium Responsive Design",
          stack: "Next.js / React Implementation",
          seo: "SEO & Performance Optimization",
          clean: "Clean Code Architecture",
          hosting: "Hosting & Maintenance",
          support: "24/7 Priority Support",
        },
      },
      projects: {
        title: "Projects",
        subtitle: "Selected Works",
        slide: "Slide",
        archive: "Full Archive",
      },
      contact: {
        title: "Contact",
        description:
          "Available for new collaborations and challenging projects. I respond promptly and professionally.",
        location: "Location",
        email: "Email",
        phone: "Phone",
        coffee: "Invite a Coffee",
        donation_modal: {
          title: "Buy me a Coffee",
          subtitle: "Your support helps me keep creating",
          paypal: "PayPal (Global)",
          yape: "Yape (Perú)",
          plin: "Plin (Perú)",
          copy_number: "Copy Number",
          copied: "Copied!",
          cta_paypal: "Go to PayPal",
          phone_label: "Account number:",
        },
        rights: "ALL RIGHTS RESERVED.",
        tagline: "Architecting Digital Spaces",
      },
      referral: {
        title: "Referral Program",
        subtitle: "Work with Us",
        description:
          "Get your unique code and start earning by sharing my work.",
        benefit:
          "Earn 10% of the final payment for every person who contacts and completes a project using your referral code.",
        cta: "Request Code",
      },
    },
  };

  const handleSetLanguage = (lang: Language) => {
    if (lang === language) return;
    setIsChanging(true);
    // Cambiamos el idioma en el "background" mientras el spinner cubre
    setTimeout(() => {
      setLanguage(lang);
      // Ocultamos el spinner poco después
      setTimeout(() => setIsChanging(false), 300);
    }, 400);
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: TranslationValue = translations[language];
    for (const k of keys) {
      if (typeof value === "object" && value !== null) {
        value = value[k];
      } else {
        return key;
      }
    }
    return typeof value === "string" ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
      <AnimatePresence>
        {isChanging && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] bg-white flex items-center justify-center pointer-events-none"
          >
            {/* Minimal Spinner */}
            <div className="w-8 h-8 border-2 border-slate-200 border-t-black rounded-full animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
