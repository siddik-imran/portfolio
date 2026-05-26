import { motion } from 'framer-motion'
import { FaGraduationCap, FaCertificate } from 'react-icons/fa'
import SectionHeader from './SectionHeader.jsx'
import { education } from '../data/portfolioData.js'

export default function Education() {
  return (
    <section id="education" className="section">
      <SectionHeader
        eyebrow="Education & Certifications"
        title="Foundations & continuous learning."
        description="A formal CS background combined with hands-on, production-driven learning."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {education.map((e, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="card card-hover relative overflow-hidden p-6 sm:p-7"
          >
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent-cyan">
                <FaGraduationCap size={22} />
              </span>
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold text-white">
                  {e.degree}
                </h3>
                <p className="mt-0.5 text-sm text-ink-dim">{e.school}</p>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                  <span className="rounded-full border border-bg-border bg-bg-card/70 px-2.5 py-1 font-mono text-accent-cyan">
                    {e.period}
                  </span>
                  <span className="rounded-full border border-bg-border bg-bg-card/70 px-2.5 py-1 text-ink-dim">
                    {e.detail}
                  </span>
                </div>
              </div>
            </div>
          </motion.article>
        ))}

        <motion.article
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card card-hover relative overflow-hidden p-6 sm:p-7"
        >
          <div className="flex items-start gap-4">
            <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl border border-accent-pink/30 bg-accent-pink/10 text-accent-pink">
              <FaCertificate size={20} />
            </span>
            <div className="flex-1">
              <h3 className="font-display text-lg font-semibold text-white">
                Continuous Self-Learning
              </h3>
              <p className="mt-0.5 text-sm text-ink-dim">
                Modern web development, SaaS architecture & AI-assisted workflows
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {[
                  'Laravel deep-dive',
                  'React patterns',
                  'SaaS design',
                  'AI workflow',
                  'CI/CD',
                ].map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  )
}
