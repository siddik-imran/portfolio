import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaHeart } from 'react-icons/fa'
import { personal } from '../data/portfolioData.js'

export default function Footer() {
  const year = new Date().getFullYear()
  const socials = [
    { href: personal.socials.github, label: 'GitHub', icon: FaGithub },
    { href: personal.socials.linkedin, label: 'LinkedIn', icon: FaLinkedin },
    { href: personal.socials.email, label: 'Email', icon: FaEnvelope },
    { href: personal.socials.whatsapp, label: 'WhatsApp', icon: FaWhatsapp },
  ]

  return (
    <footer className="relative z-10 mt-10 border-t border-bg-border bg-bg-soft/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 sm:px-8 md:flex-row lg:px-10">
        <div className="text-center md:text-left">
          <p className="font-display text-lg font-semibold text-white">
            {personal.name}
          </p>
          <p className="text-sm text-ink-dim">
            © {year} All rights reserved
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full border border-bg-border bg-bg-card text-ink-dim transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:text-white hover:shadow-glow"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
