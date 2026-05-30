import { motion } from 'framer-motion'

function Skills() {
  const skills = {
    Frontend: [
      { name: 'React.js', level: 85 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'Tailwind CSS', level: 80 }
    ],

    Backend: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'MongoDB', level: 80 },
      { name: 'REST APIs', level: 85 }
    ],

    Tools: [
     { name: 'Git', level: 90 },
  { name: 'GitHub', level: 90 },
  { name: 'VS Code', level: 95 },
  { name: 'Postman', level: 85 },
  { name: 'Docker', level: 80 },
  { name: 'AWS', level: 70 },
  { name: 'Linux', level: 76 },
  { name: 'Canva', level: 90 }
    ]
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-heading mb-10 text-center">Skills</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15
              }}
              className="rounded-2xl border border-cyan-400/20 bg-slate-900/50 p-6 backdrop-blur-md"
            >
              <h3 className="mb-6 text-xl font-semibold text-cyan-300">
                {category}
              </h3>

              <div className="space-y-4">
                {items.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex justify-between text-sm text-slate-300">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-slate-700">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
