import { motion } from 'framer-motion'

function Projects({ projects }) {
  return (
    <div>
      <h2 className="section-heading mb-8">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {(projects || []).map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="glass group p-6 transition"
          >
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 text-slate-300">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {(project.tech || project.stack || []).map((tech, idx) => (
                <span
                  key={`${tech}-${idx}`}
                  className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <a href={project.github} className="btn-secondary" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={project.live} className="btn-primary" target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}

export default Projects
