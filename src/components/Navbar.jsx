import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { navLinks, personal } from '../data/portfolioData.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      // Active section detection
      const sections = navLinks
        .map((l) => document.querySelector(l.href))
        .filter(Boolean)
      const top = window.scrollY + 140
      let current = ''
      sections.forEach((s) => {
        if (s.offsetTop <= top) current = '#' + s.id
      })
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const el = document.querySelector(href)
    if (el) {
      window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-bg-border/70 bg-bg/80 backdrop-blur-lg'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a
          href="#hero"
          onClick={(e) => handleNav(e, '#hero')}
          className="group flex items-center gap-2 font-display text-lg font-bold tracking-tight"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-aurora bg-[length:200%_200%] animate-gradient text-white shadow-glow">
            IH
          </span>
          <span className="hidden sm:inline">
            <span className="gradient-text">Imran</span> Hasan
          </span>
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-white' : 'text-ink-dim hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 -z-10 rounded-full border border-accent/40 bg-bg-card/70"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <a
          href={personal.cv}
          download
          className="hidden md:inline-flex btn-primary !px-5 !py-2 text-xs"
        >
          Download CV
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="grid h-10 w-10 place-items-center rounded-lg border border-bg-border bg-bg-card/70 text-white md:hidden"
        >
          {open ? <HiX size={20} /> : <HiMenu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-bg-border bg-bg/95 backdrop-blur-lg md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNav(e, link.href)}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-ink-dim hover:bg-bg-card hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={personal.cv}
                  download
                  className="btn-primary !w-full justify-center"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
