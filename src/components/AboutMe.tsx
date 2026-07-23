"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function SobreMi() {
  const { t } = useLanguage();


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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
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
              className="text-base sm:text-lg font-light text-slate-600 leading-relaxed max-w-2xl space-y-4"
            >
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="pt-8 border-t border-slate-200 mt-8"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">
                Full Stack Developer
              </h3>
              <p className="text-sm sm:text-base font-bold uppercase tracking-[0.2em] text-slate-500">
                Frontend · Backend · Clean Architecture
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative w-full min-h-[400px] sm:min-h-[500px] lg:min-h-full border-2 border-black bg-black overflow-hidden"
          >
            <Image
              src="/images/1.png"
              alt="Damian Brito"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top opacity-80 hover:opacity-100 transition-opacity duration-500"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}