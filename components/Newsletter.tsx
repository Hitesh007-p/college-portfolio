'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your server
    console.log('Submitted email:', email)
    setEmail('')
    alert('Thank you for subscribing!')
  }

  return (
    <section className="py-20 px-4 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
        <p className="text-xl mb-8">Subscribe to our newsletter for the latest news and events.</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="px-4 py-2 rounded-md text-gray-900 w-full sm:w-64"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="px-6 py-2 bg-white text-blue-600 rounded-md font-semibold"
          >
            Subscribe
          </motion.button>
        </form>
      </div>
    </section>
  )
}

