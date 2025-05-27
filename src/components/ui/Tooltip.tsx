// components/Tooltip.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useState } from "react";

type TooltipProps = {
  children: ReactNode;
  text: string;
};

export const Tooltip = ({ children, text }: TooltipProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute top-full mt-2 px-4 py-1 min-w-max whitespace-nowrap text-sm shadow-[0_4px_20px_rgba(0,0,0,0.25)] bg-[#060629] text-white z-50 pointer-events-none"
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </div>
  );
};
