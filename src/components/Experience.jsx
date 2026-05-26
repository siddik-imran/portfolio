import { motion } from 'framer-motion'
import { FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa'
import SectionHeader from './SectionHeader.jsx'
import { experience } from '../data/portfolioData.js'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeader
        eyebrow="Experience"
        title="Where I've been building."
        description="From internship to senior engineering — a 4+ year track record of shipping reliable software for clients and teams."
      />

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-4 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent via-accent-cyan to-transparent md:left-5 md:block" />

        <ol className="flex flex-col gap-6">
          {experience.map((job, idx) => (
            <motion.li
              key={`${job.company}-${idx}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative md:pl-16"
            >
              {/* Dot */}
              <span className="absolute left-0 top-6 hidden h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-bg-card text-accent-cyan shadow-glow md:flex">
                <FaBriefcase size={14} />
              </span>

              <article className="card card-hover p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">
                      {job.role}{' '}
                      <span className="text-ink-dim">@</span>{' '}
                      <span className="gradient-text">{job.company}</span>
                    </h3>
                    <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-dim">
                      <span className="inline-flex items-center gap-1.5">
                        <FaMapMarkerAlt className="text-accent" />
                        {job.location}
                      </span>
                      <span className="inline-block h-1 w-1 rounded-full bg-ink-muted" />
                      <span>{job.mode}</span>
                    </p>
                  </div>
                  <span className="rounded-full border border-bg-border bg-bg-card/70 px-3 py-1 font-mono text-xs text-accent-cyan">
                    {job.period}
                  </span>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {job.highlights.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm leading-relaxed text-ink-dim sm:text-[15px]"
                    >
                      <span className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-aurora" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
