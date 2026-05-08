"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { QrCode, Share2, Wallet, ArrowRight } from "lucide-react";

export default function ReferralCTA() {
  const { t, language } = useLanguage();

  const handleRequestCode = () => {
    const telefono = "51944784437";
    const messages = {
      es: "Hola Damian, me interesa el programa de referidos. Me gustaría obtener mi código único para empezar a colaborar.",
      en: "Hi Damian, I'm interested in the referral program. I would like to get my unique code to start collaborating."
    };
    
    const mensaje = messages[language as keyof typeof messages] || messages.es;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  const steps = [
    {
      icon: <QrCode size={20} />,
      title: language === "es" ? "Obtén tu ID" : "Get your ID",
      desc: language === "es" ? "Solicita tu código único de referido." : "Request your unique referral code."
    },
    {
      icon: <Share2 size={20} />,
      title: language === "es" ? "Comparte" : "Share",
      desc: language === "es" ? "Recomienda mis servicios a tu red." : "Recommend my services to your network."
    },
    {
      icon: <Wallet size={20} />,
      title: language === "es" ? "Gana el 10%" : "Earn 10%",
      desc: language === "es" ? "Recibe tu comisión por cada cierre." : "Get your commission for every deal."
    }
  ];

  return (
    <section className="relative w-full bg-[#fcfcfc] py-24 px-6 md:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative bg-slate-900 rounded-[2.5rem] p-6 sm:p-12 md:p-16 lg:p-20 overflow-hidden shadow-2xl border border-white/5"
        >
          {/* Ambient background glows */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Left Content */}
            <div className="flex-1 space-y-10">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">
                    {t("referral.subtitle")}
                  </span>
                </motion.div>
                
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-[0.9]">
                  {language === "es" ? <>Haz Equipo <br /> Conmigo</> : <>Team Up <br /> With Me</>}
                </h2>
                
                <p className="text-slate-400 text-lg font-light leading-relaxed max-w-md">
                  {t("referral.description")} {t("referral.benefit")}
                </p>
              </div>

              <button
                onClick={handleRequestCode}
                className="group relative flex items-center justify-between bg-white text-slate-900 px-10 py-6 font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-blue-50 transition-all w-full sm:w-auto overflow-hidden shadow-xl"
              >
                <span className="relative z-10">{t("referral.cta")}</span>
                <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform ml-4" size={16} />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
            </div>

            {/* Right Content: Interactive Steps */}
            <div className="flex-1 w-full max-w-md">
              <div className="grid grid-cols-1 gap-4">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative flex items-start gap-6 p-6 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 transition-all cursor-default"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-all duration-500">
                      {step.icon}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider">{step.title}</h3>
                      <p className="text-xs text-slate-500 font-light leading-snug group-hover:text-slate-300 transition-colors">
                        {step.desc}
                      </p>
                    </div>
                    <div className="absolute top-4 right-6 text-[10px] font-black text-white/5 group-hover:text-white/10 transition-colors">
                      0{index + 1}
                    </div>
                  </motion.div>
                ))}

                {/* The "Big Reward" highlight */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                  className="mt-4 p-8 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 shadow-2xl relative overflow-hidden group"
                >
                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-blue-100/70">Comisión Directa</span>
                      <div className="text-4xl font-black text-white italic">10% <span className="text-sm not-italic opacity-80">NETO</span></div>
                    </div>
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                      <Wallet size={24} className="text-white" />
                    </div>
                  </div>
                  {/* Decorative circles */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Large background watermark */}
          <div className="absolute -bottom-20 -right-20 opacity-[0.02] pointer-events-none select-none">
            <span className="text-[25rem] font-black italic tracking-tighter text-white">DB</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
