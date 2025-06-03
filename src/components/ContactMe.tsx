"use client";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full bg-[#f0eded] -z-10 py-20 px-6 md:px-20 text-[#06061B] overflow-hidden"
      style={{ minHeight: "500px" }}
    >
      {/* Background image as second background */}
      <div className="absolute inset-0 pointer-events-none -z-5 flex justify-start items-center">
        <div className="h-full relative aspect-[2/3] min-w-[300px] max-w-[400px]">
          <Image
            src="/images/contact-left-removebg.png"
            alt="Damian"
            fill
            style={{ objectFit: "contain", objectPosition: "left center" }}
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto flex flex-col items-center justify-center gap-10 px-4 sm:px-6 text-center">
        <div
          className="
      w-full max-w-xl
      bg-white/10 backdrop-blur-[20px]
      border border-white/20
      shadow-2xl
      p-6 sm:p-8
      rounded-none
      font-lora
      flex flex-col
    "
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 border-b border-[#06061B] pb-2 text-center md:text-right">
            Let’s Connect
          </h2>

          <p className="text-base sm:text-lg font-light mb-10 leading-relaxed tracking-wide text-[#06061B] text-center md:text-right">
            Interested? Reach out directly via email or phone.
          </p>

          {/* Prioritize phone & email */}
          <ul className="space-y-4 sm:space-y-6 mb-10 text-center">
            <li className="text-xl sm:text-2xl font-extrabold leading-snug break-words">
              <a
                href="mailto:britohdamian@gmail.com"
                className="hover:underline"
              >
                britohdamian@gmail.com
              </a>
            </li>
            <li className="text-xl sm:text-2xl font-extrabold leading-snug">
              <a href="tel:+5359376583" className="hover:underline">
                +53 59376583
              </a>
            </li>
          </ul>

          {/* Social icons centered */}
          <div className="flex justify-center gap-6 sm:gap-10 mb-6">
            <a
              href="https://www.instagram.com/dam_random/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:opacity-70 transition-opacity"
            >
              <Image
                src="/images/logos/instagram.png"
                alt="Instagram"
                width={28}
                height={28}
                priority
              />
            </a>
            <a
              href="https://www.linkedin.com/in/damian-brito-5437a2214"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:opacity-70 transition-opacity"
            >
              <Image
                src="/images/logos/linkedin.png"
                alt="LinkedIn"
                width={28}
                height={28}
                priority
              />
            </a>
            <a
              href="https://github.com/DamRandom"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:opacity-70 transition-opacity"
            >
              <Image
                src="/images/logos/github.png"
                alt="GitHub"
                width={28}
                height={28}
                priority
              />
            </a>
            <a
              href="https://t.me/Souta_k"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="hover:opacity-70 transition-opacity"
            >
              <Image
                src="/images/logos/telegram.png"
                alt="Telegram"
                width={28}
                height={28}
                priority
              />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright aligned right outside the card */}
      <div className="mt-4 w-full flex justify-center">
        <div className="text-sm text-[#06061B]/70 font-lora max-w-[280px] text-center md:text-right">
          © {new Date().getFullYear()} Damian Brito. All rights reserved.
        </div>
      </div>
    </section>
  );
}
