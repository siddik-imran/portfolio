import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader.jsx'
import { services } from '../data/portfolioData.js'

export default function Services() {
  return (
    <section id="services" className="section">
      <SectionHeader
        eyebrow="What I Offer"
        title="Services I can help you with."
        description="Whether you're a startup founder, agency, or product team — these are the ways I most often partner with clients."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, idx) => {
          const Icon = s.icon
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="card card-hover group relative overflow-hidden p-6"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-bg-border bg-gradient-to-br from-bg-card to-bg-soft transition-transform group-hover:scale-110">
                <Icon className={`${s.accent} text-2xl`} />
              </div>
              <h3 className="font-display text-lg font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-dim">
                {s.description}
              </p>

              {/* Decorative corner glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
