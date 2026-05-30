import { motion } from 'framer-motion'

function About({ about }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7 }}
      className="glass p-8"
    >
      <h2 className="section-heading">About Me</h2>
      <p className="mt-4 text-lg leading-relaxed text-slate-300">{about}</p>
    </motion.div>
  )
}

export default About
