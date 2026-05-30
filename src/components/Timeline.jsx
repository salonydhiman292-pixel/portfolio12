import { motion } from 'framer-motion'

function Timeline({ items }) {
  return (
    <div>
      <h2 className="section-heading mb-8">Experience & Education</h2>
      <div className="relative border-l border-cyan-500/40 pl-6">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: i * 0.12 }}
            className="relative mb-8 glass p-5"
          >
            <span className="absolute -left-[2rem] top-6 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-1 text-cyan-200">{item.subtitle}</p>
            <p className="mt-1 text-sm text-slate-400">{item.meta}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Timeline
