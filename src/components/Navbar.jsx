import { motion } from 'framer-motion'

const links = ['about', 'skills', 'projects', 'timeline', 'contact']

function Navbar({ name, resumeLink, theme, setTheme }) {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-lg font-semibold text-cyan-300">
          {name}
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="text-sm capitalize text-slate-300 transition hover:text-cyan-300"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="glass rounded-xl px-3 py-2 text-xs font-semibold"
            type="button"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href={resumeLink}
            className="rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-4 py-2 text-xs font-semibold text-slate-950"
          >
            Resume
          </motion.a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
