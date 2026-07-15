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
        description: "Desarrollando productos web que la gente realmente usa.",
        ctaWork: "Explorar Trabajo",
        ctaContact: "Contacto Directo",
        status: "Disponible para Proyectos",
      },
      about: {
        title: "Sobre Mí",
        subtitle: "Perfil Personal",
        p1: "Soy Damian Brito, Ingeniero en Sistemas.",
        p2: "Me especializo en el desarrollo de páginas web, trabajando principalmente con pequeños y medianos negocios para construir su presencia digital. Cuento con experiencia en frontend y conocimientos en backend y bases de datos, lo que me permite abordar proyectos de forma integral.",
        specialty: "Especialidad",
        focus: "Enfoque",
        interests: "Intereses",
        specValue: "Frontend Development",
        focusValue: "Desarrollo Web",
        interestsValue: "Gaming · Música",
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
            "La base de cualquier aplicación: los lenguajes que se usan para construir cómo funciona todo detrás de escena.",
          frontDesc:
            "Lo que el usuario ve e interactúa: el diseño, la estructura y la experiencia de una web o aplicación.",
          backDesc:
            "Lo que ocurre detrás: gestiona los datos, la seguridad y todo lo que el usuario no ve directamente.",
          infraDesc:
            "Cómo todo se pone en línea: herramientas y configuraciones que mantienen la aplicación estable y funcionando correctamente.",
        },
      },
      services: {
        title: "Servicios",
        subtitle: "Lo que puedo hacer por ti",
        quote:
          "* Cotización técnica personalizada según la complejidad del proyecto.",
        plans: {
          essential: {
            title: "Esencial",
            desc: "Empieza a tener presencia online profesional para tu negocio.",
            cta: "Empezar",
          },
          professional: {
            title: "Profesional",
            desc: "Convierte visitantes en clientes y haz crecer tu negocio.",
            cta: "Quiero más clientes",
            popular: "Popular",
          },
          extended: {
            title: "Avanzado",
            desc: "Haz crecer tu negocio y automatiza procesos clave.",
            cta: "Escalar mi negocio",
          },
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
        role: "Software Engineer / Full Stack",
        description: "Building web products that people actually use.",
        ctaWork: "Explore Work",
        ctaContact: "Get in Touch",
        status: "Available for Projects",
      },
      about: {
        title: "About Me",
        subtitle: "Personal Profile",
        p1: "I am Damian Brito, a Software Engineer.",
        p2: "I specialize in web development, primarily working with small and medium-sized businesses to build their digital presence. I have experience in frontend development and knowledge of backend systems and databases, which allows me to approach projects comprehensively.",
        specialty: "Specialty",
        focus: "Focus",
        interests: "Interests",
        specValue: "Frontend Development",
        focusValue: "Web Development",
        interestsValue: "Gaming · Music",
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
            "The core of any application: the languages used to build how everything works behind the scenes.",
          frontDesc:
            "What users see and interact with: the design, layout, and overall experience of a website or app.",
          backDesc:
            "What runs behind the scenes: handles data, security, and everything users don’t directly see.",
          infraDesc:
            "How everything goes live: the tools and setup that keep applications online, stable, and running smoothly.",
        },
      },
      services: {
        title: "Services",
        subtitle: "WHAT I OFFER",
        description:
          "Web engineering solutions focused on performance, scalability, and impeccable aesthetics.",
        quote: "* Custom technical quote based on project complexity.",
        plans: {
          essential: {
            title: "Essential",
            desc: "Start building a professional online presence for your business.",
            cta: "Get Started",
          },
          professional: {
            title: "Professional",
            desc: "Turn visitors into clients and grow your business.",
            cta: "Get More Clients",
            popular: "Popular",
          },
          extended: {
            title: "Advanced",
            desc: "Scale your business and automate key processes.",
            cta: "Scale My Business",
          },
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
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
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
