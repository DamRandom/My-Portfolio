"use client";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full bg-[#f0eded] py-20 px-6 md:px-20 text-[#06061B] overflow-hidden"
      style={{ minHeight: "500px" }}
    >
      {/* Left image background */}
      <div className="absolute top-0 left-80 h-full w-1/4 pointer-events-none">
        <Image
          src="/images/contact-left-removebg.png"
          alt="Damian"
          fill
          style={{ objectFit: "cover", objectPosition: "left center" }}
          priority
        />
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Card style container */}
        <div
          className="
            w-full md:w-1/2 md:ml-auto
            bg-white/10 backdrop-blur-[20px]
            border border-white/20
            shadow-2xl
            p-8
            rounded-none
            font-lora
            flex flex-col
          "
        >
          <h2 className="text-3xl font-semibold mb-6 border-b border-[#06061B] pb-2 text-right">
            Let’s Connect
          </h2>

          <p className="text-lg font-light mb-10 leading-relaxed tracking-wide text-[#06061B] text-right">
            Interested? Reach out directly via email or phone.
          </p>

          {/* Prioritize phone & email */}
          <ul className="space-y-6 mb-10 text-center">
            <li className="text-2xl font-extrabold leading-snug">
              <a
                href="mailto:britohdamian@gmail.com"
                className="hover:underline"
              >
                britohdamian@gmail.com
              </a>
            </li>
            <li className="text-2xl font-extrabold leading-snug">
              <a href="tel:+5359376583" className="hover:underline">
                +53 59376583
              </a>
            </li>
          </ul>

          {/* Social icons centered, images from /images/logos/ */}
          <div className="flex justify-center gap-10 mb-10">
            <a
              href="https://instagram.com/damian"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:opacity-70 transition-opacity"
            >
              <Image
                src="/images/logos/instagram.png"
                alt="Instagram"
                width={32}
                height={32}
                priority={true}
              />
            </a>
            <a
              href="https://linkedin.com/in/damian"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:opacity-70 transition-opacity"
            >
              <Image
                src="/images/logos/linkedin.png"
                alt="LinkedIn"
                width={32}
                height={32}
                priority={true}
              />
            </a>
            <a
              href="https://t.me/damian"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="hover:opacity-70 transition-opacity"
            >
              <Image
                src="/images/logos/telegram.png"
                alt="Telegram"
                width={32}
                height={32}
                priority={true}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright aligned right outside the card */}
      <div className="flex justify-end mr-60 mt-4">
        <div className="text-sm text-[#06061B]/70 font-lora max-w-[280px]">
          © {new Date().getFullYear()} Damian Brito. All rights reserved.
        </div>
      </div>
    </section>
  );
}
