import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader.jsx'
import { skills } from '../data/portfolioData.js'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeader
        eyebrow="Skills & Tech Stack"
        title="Tools I use every day to ship."
        description="A focused stack I've used in production across SaaS platforms, marketplaces, CRMs, and learning systems."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, gIdx) => {
          const GroupIcon = group.icon
          return (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: gIdx * 0.05 }}
              className="card card-hover group p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg border border-bg-border bg-gradient-to-br from-bg-card to-bg-soft text-accent-cyan transition-colors group-hover:text-white">
                  <GroupIcon size={18} />
                </span>
                <h3 className="font-display text-lg font-semibold text-white">
                  {group.group}
                </h3>
              </div>

              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const Icon = item.icon
                  return (
                    <li
                      key={item.name}
                      className="chip group/chip"
                      title={item.name}
                    >
                      <Icon className="text-base text-ink-dim transition-colors group-hover/chip:text-accent-cyan" />
                      <span>{item.name}</span>
                    </li>
                  )
                })}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
