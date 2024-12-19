'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-20 px-4">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-8 text-black">About Our College</h2>
        <p className="text-xl leading-relaxed text-gray-800">
          Our college is dedicated to providing high-quality education and fostering a vibrant learning environment. 
          With state-of-the-art facilities and experienced faculty, we prepare our students for successful careers and personal growth.
        </p> 
      </motion.div>
    </section>
  )
}

