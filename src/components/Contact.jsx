import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const initialForm = { name: '', email: '', message: '' }

function Contact({ socials }) {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email'
    if (form.message.trim().length < 15) next.message = 'Message should be at least 15 characters'
    return next
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="glass p-6"
      >
        <h2 className="section-heading mb-4">Contact</h2>
        <p className="mb-5 text-slate-300">
          Let&apos;s connect and collaborate on impactful full-stack projects.
        </p>
        <div className="space-y-3 text-slate-300">
          <a href={`mailto:${socials.email}`} className="contact-link">
            <FiMail /> {socials.email}
          </a>
          <a href={socials.github} className="contact-link" target="_blank" rel="noreferrer">
            <FiGithub /> GitHub
          </a>
          <a href={socials.linkedin} className="contact-link" target="_blank" rel="noreferrer">
            <FiLinkedin /> LinkedIn
          </a>
           <a href={socials.leetcode} className="contact-link" target="_blank" rel="noreferrer">
            <FiLinkedin /> LeetCode
          </a>
        </div>
      </motion.div>

      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        className="glass space-y-4 p-6"
      >
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="field"
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="field"
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <textarea
          rows="5"
          placeholder="Your Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="field resize-none"
        />
        {errors.message && <p className="error">{errors.message}</p>}

        <button type="submit" className="btn-primary w-full">
          Send Message
        </button>
        {submitted && <p className="text-sm text-emerald-300">Message validated successfully.</p>}
      </motion.form>
    </div>
  )
}

export default Contact
