import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaWhatsapp,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
  FaPhone,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import SectionHeader from './SectionHeader.jsx'
import { personal } from '../data/portfolioData.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, subject, message } = form
    const text = [
      `Hi Imran, I'm ${name || '[Your name]'}.`,
      subject ? `Subject: ${subject}` : null,
      message ? `\n${message}` : null,
      email ? `\nReply to: ${email}` : null,
    ]
      .filter(Boolean)
      .join('\n')

    const url = `https://wa.me/${personal.whatsapp}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const contactCards = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      color: 'text-accent-cyan',
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: personal.phone,
      href: personal.socials.whatsapp,
      color: 'text-emerald-400',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'imranhasansiddiki',
      href: personal.socials.linkedin,
      color: 'text-blue-400',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'siddik-imran',
      href: personal.socials.github,
      color: 'text-violet-300',
    },
  ]

  return (
    <section id="contact" className="section">
      <SectionHeader
        eyebrow="Get in Touch"
        title="Let's build something great together."
        description="Have a project in mind, a role to fill, or just want to say hi? Drop me a message — I usually reply within a day."
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        {/* Left: contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          <div className="card p-6">
            <h3 className="font-display text-lg font-semibold text-white">
              Reach me directly
            </h3>
            <p className="mt-1 text-sm text-ink-dim">
              The fastest way to get a reply is WhatsApp or email.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              {contactCards.map((c) => {
                const Icon = c.icon
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-bg-border bg-bg-card/60 p-3 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-glow"
                  >
                    <span
                      className={`grid h-10 w-10 place-items-center rounded-lg border border-bg-border bg-bg-soft ${c.color}`}
                    >
                      <Icon size={16} />
                    </span>
                    <div className="flex-1 overflow-hidden">
                      <p className="text-xs uppercase tracking-wider text-ink-muted">
                        {c.label}
                      </p>
                      <p className="truncate text-sm font-medium text-white">
                        {c.value}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          <div className="card p-6">
            <h3 className="font-display text-lg font-semibold text-white">Based in</h3>
            <p className="mt-2 inline-flex items-center gap-2 text-sm text-ink-dim">
              <FaMapMarkerAlt className="text-accent-pink" /> {personal.location}
            </p>
            <p className="mt-3 text-sm text-ink-dim">
              <span className="inline-flex items-center gap-2 text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Currently available
              </span>{' '}
              for new projects.
            </p>
          </div>
        </motion.div>

        {/* Right: WhatsApp form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card relative overflow-hidden p-6 sm:p-8"
        >
          <div className="mb-5">
            <h3 className="font-display text-xl font-semibold text-white">
              Send a quick message
            </h3>
            <p className="mt-1 text-sm text-ink-dim">
              This form opens WhatsApp with your message pre-filled — no inbox lag.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              name="name"
              label="Your name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Jane Doe"
            />
            <Field
              name="email"
              label="Email (optional)"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@company.com"
            />
          </div>
          <div className="mt-4">
            <Field
              name="subject"
              label="Subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="SaaS build / Laravel consult / Hiring"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-dim">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me a bit about your project, timeline, and budget…"
              className="w-full resize-none rounded-xl border border-bg-border bg-bg-soft/60 px-4 py-3 text-sm text-white placeholder:text-ink-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-ink-muted">
              Prefer email?{' '}
              <a
                href={`mailto:${personal.email}`}
                className="text-accent-cyan underline-offset-4 hover:underline"
              >
                {personal.email}
              </a>
            </p>
            <button type="submit" className="btn-primary group">
              <FaWhatsapp /> Send via WhatsApp
              <FaPaperPlane className="ml-1 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

function Field({ label, ...props }) {
  return (
    <div>
      <label
        htmlFor={props.name}
        className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-dim"
      >
        {label}
      </label>
      <input
        id={props.name}
        {...props}
        className="w-full rounded-xl border border-bg-border bg-bg-soft/60 px-4 py-3 text-sm text-white placeholder:text-ink-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
      />
    </div>
  )
}
