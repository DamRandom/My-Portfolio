"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function SobreMi() {
  const { t } = useLanguage();

  const items = [
    {
      label: t("about.specialty"),
      value: t("about.specValue"),
    },
    {
      label: t("about.focus"),
      value: t("about.focusValue"),
    },
    {
      label: t("about.interests"),
      value: t("about.interestsValue"),
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full bg-white text-black py-20 px-5 sm:py-24 sm:px-8 md:py-28 md:px-12 lg:py-32 lg:px-20"
    >
      <div className="max-w-[1400px] mx-auto space-y-14 md:space-y-20">
        {/* Header */}
        <div className="w-full space-y-6 md:space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-end">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase text-black">
              {t("about.title")}
            </h2>

            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.35em] text-slate-500">
              {t("about.subtitle")}
            </span>
          </div>

          <div className="h-[2px] w-full bg-black" />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left - Text */}
          <div className="md:col-span-7 space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl md:text-3xl font-medium leading-relaxed text-black"
            >
              {t("about.p1")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg font-light text-slate-600 leading-relaxed max-w-2xl"
            >
              <p>{t("about.p2")}</p>
            </motion.div>
          </div>

          {/* Right - Items */}
          <div className="md:col-span-5 flex flex-col gap-8 md:gap-12">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group flex flex-col gap-2 border-l-2 border-slate-200 pl-6 hover:border-black transition-colors"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 group-hover:text-black transition-colors">
                  {item.label}
                </span>

                <p className="text-lg sm:text-xl font-medium text-black">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}