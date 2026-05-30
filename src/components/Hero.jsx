import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { ReactTyped } from 'react-typed'

const Hero3D = lazy(() => import('./Hero3D'))

function Hero({ data }) {
  return (
    <header id="home" className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-2 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass p-6 sm:p-8"
      >
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-cyan-300">
          {data.title}
        </p>
        <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
          Hi, I&apos;m {data.name}
        </h1>
        <div className="mt-4 text-xl text-slate-300 sm:text-2xl">
          <ReactTyped
            strings={[
              'I build beautiful web experiences.',
              'I create APIs and full-stack apps.',
              'I love modern UI and interaction design.',
            ]}
            typeSpeed={45}
            backSpeed={30}
            loop
          />
        </div>
        <p className="mt-5 max-w-xl text-slate-300">{data.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="glass p-2"
      >
        <Suspense fallback={<div className="h-[320px] md:h-[420px]" />}>
          <Hero3D />
        </Suspense>
      </motion.div>
    </header>
  )
}

export default Hero
