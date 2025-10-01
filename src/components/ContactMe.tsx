"use client";
import Image from "next/image";

export default function SeccionContacto() {
  return (
    <section
      id="contacto"
      className="relative w-full bg-[#f0eded] pt-16 md:pt-20 px-4 md:px-20 text-[#06061B] overflow-hidden"
      style={{ minHeight: "500px" }}
      aria-label="Sección de contacto"
    >
      {/* Layout: grid para controlar posición de la foto y la tarjeta */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 items-center gap-6">
        {/* Imagen: arriba en móvil, izquierda en escritorio */}
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

        {/* Tarjeta de contacto + copyright debajo */}
        <div className="col-span-12 md:col-span-7 lg:col-span-8 flex justify-center md:justify-end order-2 px-4">
          <div className="w-full max-w-xl">
            <div className="bg-white/10 backdrop-blur-[20px] border border-white/20 shadow-2xl p-6 sm:p-8 font-lora">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 border-b border-[#06061B] pb-2 text-center md:text-left">
                Conectemos
              </h2>

              <p className="text-base sm:text-lg font-light mb-6 leading-relaxed tracking-wide text-[#06061B] text-center md:text-left">
                ¿Interesado? Contáctame directamente por correo o teléfono.
              </p>

              <ul className="space-y-3 sm:space-y-4 mb-6 text-center md:text-left">
                <li className="text-lg sm:text-xl font-extrabold break-words">
                  <a
                    href="mailto:britohdamian@gmail.com"
                    className="hover:underline"
                  >
                    britohdamian@gmail.com
                  </a>
                </li>
                <li className="text-lg sm:text-xl font-extrabold">
                  <a href="tel:+51944784437" className="hover:underline">
                    +51 944784437
                  </a>
                </li>
              </ul>

              <div className="flex justify-center md:justify-start gap-6 sm:gap-8">
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
                  href="https://www.linkedin.com/in/damian-brito"
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

                <a
                  href="https://web.facebook.com/profile.php?id=61577963415293"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:opacity-70 transition-opacity"
                >
                  <Image
                    src="/images/logos/facebook.png"
                    alt="Facebook"
                    width={28}
                    height={28}
                    priority
                  />
                </a>
              </div>
            </div>

            {/* Derechos de autor centrados debajo de la tarjeta */}
            <div className="mt-4 w-full flex justify-center">
              <div className="text-sm text-[#06061B]/70 font-lora max-w-[280px] text-center">
                © 2025 Damian Brito. Todos los derechos reservados.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
