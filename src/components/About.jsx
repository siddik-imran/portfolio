import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader.jsx'
import { personal } from '../data/portfolioData.js'

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeader
        eyebrow="About Me"
        title="Engineer focused on shipping real products."
        description="I'm a Software Engineer who enjoys turning complex requirements into clean, maintainable code that actually ships."
      />

      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="card card-hover p-6 sm:p-8"
        >
          <p className="text-base leading-relaxed text-ink sm:text-lg">
            {personal.summary}
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-dim sm:text-lg">
            Across my career I've built{' '}
            <span className="font-semibold text-white">multi-tenant SaaS platforms</span>,{' '}
            <span className="font-semibold text-white">marketplaces</span>, CRMs, and learning
            platforms — usually owning the work end-to-end from{' '}
            <span className="font-semibold text-white">database schema</span> through{' '}
            <span className="font-semibold text-white">REST APIs</span> to the{' '}
            <span className="font-semibold text-white">React/Vue UI</span>.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-dim sm:text-lg">
            I care about clean architecture, fast database queries, and UI that doesn't
            get in the user's way. I work well in cross-functional teams and I'm
            comfortable picking up unfamiliar parts of a stack quickly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 gap-4"
        >
          {personal.stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
              className="card card-hover flex flex-col items-start justify-center gap-1 p-5"
            >
              <span className="font-display text-3xl font-bold gradient-text sm:text-4xl">
                {s.value}
              </span>
              <span className="text-xs font-medium uppercase tracking-wider text-ink-dim">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
