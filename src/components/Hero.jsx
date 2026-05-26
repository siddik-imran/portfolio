import { motion } from 'framer-motion'
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaArrowDown,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import { HiDownload, HiSparkles } from 'react-icons/hi'
import { personal } from '../data/portfolioData.js'

export default function Hero() {
  const socials = [
    { href: personal.socials.github, label: 'GitHub', icon: FaGithub },
    { href: personal.socials.linkedin, label: 'LinkedIn', icon: FaLinkedin },
    { href: personal.socials.email, label: 'Email', icon: FaEnvelope },
    { href: personal.socials.whatsapp, label: 'WhatsApp', icon: FaWhatsapp },
  ]

  return (
    <section id="hero" className="section min-h-screen flex items-center !pt-32 !pb-16">
      <div className="grid w-full items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        {/* Left: Text */}
        <div className="flex flex-col gap-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-bg-border bg-bg-card/60 px-4 py-1.5 text-xs font-medium text-ink-dim backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {personal.availability}
          </motion.span>

          <div className="flex flex-col gap-2">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-mono text-sm text-accent-cyan"
            >
              Hi, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              {personal.firstName} <span className="gradient-text">Hasan</span>.
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="font-display text-2xl font-medium text-ink-dim sm:text-3xl"
            >
              {personal.role}
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="max-w-xl text-base text-ink-dim sm:text-lg"
          >
            {personal.tagline}{' '}
            <span className="text-white">4+ years</span> shipping production-grade SaaS,
            CRMs, and marketplaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <a href="#contact" className="btn-primary">
              <HiSparkles /> Let's Work Together
            </a>
            <a href={personal.cv} download className="btn-ghost">
              <HiDownload /> Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-6 pt-4 text-sm text-ink-dim"
          >
            <span className="inline-flex items-center gap-2">
              <FaMapMarkerAlt className="text-accent" /> {personal.location}
            </span>
            <div className="flex items-center gap-2">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-bg-border bg-bg-card text-ink-dim transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:text-white hover:shadow-glow"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-sm md:ml-auto"
        >
          <div className="relative aspect-square">
            {/* Animated conic ring */}
            <div className="absolute -inset-1 rounded-[2rem] glow-ring opacity-70 blur-md animate-spin-slow" />
            <div className="absolute inset-0 rounded-[2rem] glow-ring opacity-30 blur-2xl" />

            {/* Photo frame */}
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 bg-bg-card shadow-card">
              <img
                src={personal.photo}
                alt={`${personal.name} portrait`}
                loading="eager"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-bg/60 via-transparent to-transparent" />
            </div>

            {/* Floating chips */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-4 top-10 hidden rounded-2xl border border-bg-border bg-bg-card/90 px-4 py-2 text-xs font-medium text-white backdrop-blur sm:block"
            >
              <span className="block font-mono text-accent-cyan">$ now()</span>
              <span className="text-ink-dim">Available for work</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-4 bottom-12 hidden rounded-2xl border border-bg-border bg-bg-card/90 px-4 py-2 text-xs font-medium text-white backdrop-blur sm:block"
            >
              <span className="block font-mono text-accent-pink">Laravel · React</span>
              <span className="text-ink-dim">Full-Stack</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { delay: 0.8, duration: 0.6 },
          y: { repeat: Infinity, duration: 1.6, ease: 'easeInOut' },
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ink-dim hover:text-white"
      >
        <FaArrowDown size={16} />
      </motion.a>
    </section>
  )
}
