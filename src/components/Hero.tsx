// components/Hero.jsx
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-transparent px-6 md:px-20"
      aria-label="Hero Section"
    >
      {/* Gradiente blanco suave desde la izquierda */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent z-0" />

      <div className="relative z-10 max-w-4xl text-[#060629] translate-y-[-10%] md:ml-8">
        <h2 className="text-7xl font-lora font-extrabold uppercase tracking-wide mb-4">
          HI THERE,
        </h2>
        <h1 className="text-4xl md:text-5xl font-lora font-semibold mb-8">
          I&apos;m Damian Brito, <br />
          a Computer Science Engineer
        </h1>
        <div className="flex gap-6">
          <a
            href="#contact"
            className="bg-[#06061B] text-[#FAFAFA] px-8 py-3 rounded-md font-lora font-semibold tracking-wide shadow-md hover:bg-[#060629] hover:text-white transition"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="border border-[#060629] text-[#060629] px-8 py-3 rounded-md font-semibold tracking-wide hover:bg-[#060629] hover:text-white transition"
          >
            My Projects
          </a>
        </div>
      </div>
    </section>
  )
}
