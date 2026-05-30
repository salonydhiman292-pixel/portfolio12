import { Suspense, lazy, useMemo, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CursorGlow from './components/CursorGlow'
import { portfolioData } from './data/portfolioData'

const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Timeline = lazy(() => import('./components/Timeline'))
const Contact = lazy(() => import('./components/Contact'))

function App() {
  const [theme, setTheme] = useState('dark')
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })

  const sectionClass = useMemo(
    () =>
      'mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 scroll-mt-20 md:py-24',
    [],
  )

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div
        className={`relative min-h-screen overflow-x-hidden selection:bg-cyan-400/30 ${
          theme === 'dark'
            ? 'bg-slate-950 text-slate-100'
            : 'bg-slate-100 text-slate-900'
        }`}
      >
        <CursorGlow />
        <motion.div
          style={{ scaleX }}
          className="fixed left-0 right-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
        />

        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="blob -left-20 top-20 h-72 w-72 bg-cyan-500/40" />
          <div className="blob right-0 top-80 h-80 w-80 bg-purple-500/30" />
          <div className="blob bottom-10 left-1/3 h-64 w-64 bg-blue-500/30" />
        </div>

        <Navbar
          name={portfolioData.name}
          resumeLink={portfolioData.resumeLink}
          theme={theme}
          setTheme={setTheme}
        />
        <Hero data={portfolioData} />

        <Suspense fallback={<p className="py-10 text-center">Loading...</p>}>
          <section id="about" className={sectionClass}>
            <About about={portfolioData.about} />
          </section>
          <section id="skills" className={sectionClass}>
            <Skills skills={portfolioData.skills} />
          </section>
          <section id="projects" className={sectionClass}>
            <Projects projects={portfolioData.projects} />
          </section>
          <section id="timeline" className={sectionClass}>
            <Timeline items={portfolioData.timeline} />
          </section>
          <section id="contact" className={sectionClass}>
            <Contact socials={portfolioData.socials} />
          </section>
        </Suspense>
      </div>
    </div>
  )
}

export default App
