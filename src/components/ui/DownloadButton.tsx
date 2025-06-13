// components/DownloadButton.tsx
"use client";

import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

export default function DownloadButton() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/DamianBritoResumeEN.pdf";
    link.download = "DamianBritoResumeEN.pdf";
    link.click();
  };

  return (
    <motion.button
      onClick={handleDownload}
      initial={{ opacity: 0.8 }}
      whileHover={{ opacity: 1, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="
        fixed bottom-6 right-6 z-50
        flex items-center gap-3
        bg-[#06061B] text-white
        px-5 py-3 rounded-lg
        shadow-md shadow-black/25
        font-sans font-semibold
        text-sm sm:text-base
        tracking-wide
        cursor-pointer
        select-none
        outline-none
        focus:ring-2 focus:ring-[#0A0A23] focus:ring-offset-2
        transition-colors
        hover:bg-[#0A0A23]
      "
      aria-label="Download CV"
    >
      <FiDownload className="w-6 h-6" />
      Download CV
    </motion.button>
  );
}
