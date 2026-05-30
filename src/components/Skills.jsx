import { motion } from 'framer-motion'

function Skills({ skills }) {
  return (
    <div>
      <h2 className="section-heading mb-8">Skills</h2>
      <div className="grid gap-5 md:grid-cols-3">
        {Object.entries(skills).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass p-5"
          >
            <h3 className="mb-4 text-lg font-semibold text-cyan-300">{category}</h3>
            <div className="space-y-3">
              {items.map((skill) => (
                <div key={skill}>
                  <div className="mb-1 flex items-center justify-between text-sm text-slate-300">
                    <span>{skill}</span>
                    <span>90%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '90%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Skills
