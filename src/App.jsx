import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Services from './components/Services.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ParticleBackground from './components/ParticleBackground.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
