"use client";
import Image from "next/image";
import { Building2, Phone, Mail } from "lucide-react";

export default function SeccionContacto() {
  return (
    <section
      id="contacto"
      className="relative w-full bg-[#f0eded] pt-16 md:pt-20 px-4 md:px-20 text-[#06061B] overflow-hidden"
      style={{ minHeight: "500px" }}
      aria-label="Sección de contacto"
    >
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-6">
        {/* Imagen */}
        <div className="col-span-12 md:col-span-5 lg:col-span-4 flex justify-center md:justify-start order-1">
          <div className="relative w-[240px] sm:w-[300px] md:w-[340px] lg:w-[380px] aspect-[2/3]">
            <Image
              src="/images/contact-left-removebg.png"
              alt="Foto de Damian"
              fill
              style={{ objectFit: "contain", objectPosition: "left center" }}
              priority
            />
          </div>
        </div>

        {/* Tarjeta principal */}
        <div className="col-span-12 md:col-span-7 lg:col-span-8 flex justify-center md:justify-end order-2 px-4">
          <div className="w-full max-w-xl">
            <div className="bg-white/10 backdrop-blur-[20px] border border-white/20 shadow-2xl p-6 sm:p-8 font-lora">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 border-b border-[#06061B] pb-2 text-center md:text-right">
                Conectemos
              </h2>

              <p className="text-base sm:text-lg font-light mb-8 leading-relaxed tracking-wide text-[#06061B] text-center md:text-left">
                Cotiza sin compromiso. Respondo de inmediato.
              </p>

              {/* Nueva lista simple y profesional */}
              <ul className="space-y-6 text-center md:text-left text-lg sm:text-xl font-semibold">
                <li className="flex items-center justify-center md:justify-start gap-3 text-[#06061B]">
                  <Building2 size={22} />
                  <span>Lima Metropolitana, Perú</span>
                </li>

                <li className="flex items-center justify-center md:justify-start gap-3 text-[#06061B] break-words">
                  <Mail size={22} />
                  <a
                    href="mailto:britohdamian@gmail.com"
                    className="hover:underline"
                  >
                    britohdamian@gmail.com
                  </a>
                </li>

                <li className="flex items-center justify-center md:justify-start gap-3 text-[#06061B]">
                  <Phone size={22} />
                  <a href="tel:+51944784437" className="hover:underline">
                    +51 944 784 437
                  </a>
                </li>
              </ul>
            </div>

            {/* Copyright */}
            <div className="mt-4 w-full flex justify-center">
              <div className="text-sm text-[#06061B]/70 font-lora text-center whitespace-nowrap max-w-xl overflow-hidden text-ellipsis">
                © 2025 Damian Brito. Todos los derechos reservados.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
