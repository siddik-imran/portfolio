import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import SectionHeader from './SectionHeader.jsx'
import { projects } from '../data/portfolioData.js'

const FILTERS = ['All', 'Featured']

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const visible =
    filter === 'Featured' ? projects.filter((p) => p.featured) : projects

  return (
    <section id="projects" className="section">
      <SectionHeader
        eyebrow="Featured Projects"
        title="A few things I've built recently."
        description="Real production work — SaaS platforms, marketplaces, CRMs, and learning systems. Tap into a card for details."
      />

      <div className="mb-8 flex flex-wrap items-center gap-2">
        {FILTERS.map((f) => {
          const active = filter === f
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide transition-all ${
                active
                  ? 'border-accent/60 bg-accent/10 text-white shadow-glow'
                  : 'border-bg-border bg-bg-card/60 text-ink-dim hover:border-accent/40 hover:text-white'
              }`}
            >
              {f}
            </button>
          )
        })}
      </div>

      <motion.div
        layout
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence>
          {visible.map((p, idx) => (
            <motion.article
              key={p.name}
              layout
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: (idx % 6) * 0.05 }}
              className="card card-hover group relative flex flex-col overflow-hidden"
            >
              {/* Accent header */}
              <div
                className={`relative h-32 overflow-hidden bg-gradient-to-br ${p.accent}`}
              >
                <div className="absolute inset-0 bg-grid-pattern bg-[size:24px_24px] opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-card" />
                <div className="absolute bottom-3 left-5 right-5 flex items-end justify-between">
                  <h3 className="font-display text-2xl font-bold text-white drop-shadow-md">
                    {p.name}
                  </h3>
                  {p.featured && (
                    <span className="rounded-full bg-black/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur">
                      Featured
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm font-medium text-accent-cyan">{p.tagline}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-dim">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-accent/20 bg-accent/5 px-2 py-0.5 text-[11px] font-medium text-accent-cyan"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5 border-t border-bg-border pt-4">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium text-ink-muted"
                    >
                      {tech}
                      <span className="px-1 text-ink-muted/40">·</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover sheen */}
              <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${p.accent} opacity-10 blur-xl`} />
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="mt-10 flex justify-center">
        <a
          href="https://github.com/siddik-imran"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost group"
        >
          View more on GitHub
          <FaArrowRight className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  )
}
