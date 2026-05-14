"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Check, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type PaymentMethod = "paypal" | "yape" | "plin";

export default function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const { t } = useLanguage();
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>("paypal");
  const [copied, setCopied] = useState(false);

  const phoneDetails = {
    yape: "+51 944 784 437",
    plin: "+51 944 784 437",
    paypalLink: "https://paypal.me/DamianBrito854",
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="relative w-full max-w-sm bg-white border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-1.5 text-slate-400 hover:text-slate-900 transition-colors z-10"
            >
              <X size={16} />
            </button>

            <div className="p-6 md:p-8">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-slate-900 uppercase tracking-tighter">
                  {t("contact.donation_modal.title")}
                </h2>
                <div className="h-px w-8 bg-slate-900 mt-2" />
              </div>

              {/* Method Selector - Simplified */}
              <div className="flex border-b border-slate-100 mb-6">
                {(["paypal", "yape", "plin"] as const).map((method) => (
                  <button
                    key={method}
                    onClick={() => setSelectedMethod(method)}
                    className={`flex-1 pb-3 text-[9px] font-bold uppercase tracking-widest transition-all relative ${
                      selectedMethod === method
                        ? "text-slate-900"
                        : "text-slate-300 hover:text-slate-500"
                    }`}
                  >
                    {t(`contact.donation_modal.${method}`)}
                    {selectedMethod === method && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Dynamic Content Area - More Compact */}
              <div className="min-h-[240px] flex flex-col items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedMethod}
                    initial={{ opacity: 0, x: 5 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -5 }}
                    transition={{ duration: 0.15 }}
                    className="w-full flex flex-col items-center"
                  >
                    {/* QR Image */}
                    <div className="relative w-40 h-40 border border-slate-100 bg-white mb-6 p-2 flex items-center justify-center">
                      <Image
                        src={`/images/pagos/qr-${selectedMethod}.png`}
                        alt={`QR ${selectedMethod}`}
                        fill
                        className="object-contain"
                        onError={(e) => {
                            (e.currentTarget as HTMLImageElement).style.display = 'none';
                        }}
                      />
                    </div>

                    {selectedMethod === "paypal" ? (
                      <a
                        href={phoneDetails.paypalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 font-bold text-[9px] uppercase tracking-[0.2em] hover:bg-slate-800 transition-colors w-full justify-center"
                      >
                        {t("contact.donation_modal.cta_paypal")}
                        <ExternalLink size={12} />
                      </a>
                    ) : (
                      <div className="w-full">
                        <div className="flex items-center gap-4 p-2.5 border border-slate-100 justify-center group relative">
                          <span className="text-slate-900 font-mono text-sm tracking-tight">
                            {phoneDetails[selectedMethod]}
                          </span>
                          <button
                            onClick={() => copyToClipboard(phoneDetails[selectedMethod])}
                            className="text-slate-400 hover:text-slate-900 transition-colors"
                          >
                            {copied ? (
                              <Check size={14} className="text-green-500" />
                            ) : (
                              <Copy size={14} />
                            )}
                          </button>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
