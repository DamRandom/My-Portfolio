'use client'
import { useEffect, useState } from 'react'
import AboutMe from '@/components/AboutMe'
import Hero from '../components/Hero'
import Skills from '../components/Skills'  
import ProjectSection from '@/components/Projects'
import ContactSection from '@/components/ContactMe'
import DownloadButton from '@/components/ui/DownloadButton'


export default function Home() {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Fondo parallax inverso, con velocidad ajustable */}
        <div
          className="fixed top-0 left-0 w-full h-full z-0"
          style={{
            backgroundImage: "url('/images/profile.jpg')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            transform: `translateY(${offsetY * -0.03}px)`,
            willChange: 'transform',
          }}
        />

        {/* Contenido scrollable por encima */}
        <div className="relative z-10">
          <Hero />
          <AboutMe />
        </div>
      </div>

      {/* Sección Skills fuera del fondo parallax */}
      <div className="relative z-20">
  <Skills />
  <ProjectSection/>
  <ContactSection />
  <DownloadButton />
</div>

    </>
  )
}
