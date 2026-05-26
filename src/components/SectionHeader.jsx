import { motion } from 'framer-motion'

export default function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  const alignment =
    align === 'center' ? 'items-center text-center' : 'items-start text-left'
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`mb-12 flex flex-col gap-3 ${alignment}`}
    >
      {eyebrow && (
        <span className="section-eyebrow">
          <span className="h-px w-6 bg-accent-cyan" /> {eyebrow}
        </span>
      )}
      <h2 className="section-title text-white text-balance">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-ink-dim text-balance">{description}</p>
      )}
    </motion.div>
  )
}
