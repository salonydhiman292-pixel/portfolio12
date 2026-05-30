import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <motion.div
      className="pointer-events-none fixed z-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl"
      animate={{ x: pos.x - 80, y: pos.y - 80 }}
      transition={{ type: 'spring', stiffness: 140, damping: 20, mass: 0.2 }}
    />
  )
}

export default CursorGlow
