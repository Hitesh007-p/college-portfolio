'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Principal() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-black">Our Principal</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-64 h-64 relative rounded-full overflow-hidden"
          >
            <Image
              src="/placeholder.svg?height=256&width=256"
              alt="Principal"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-black">Prof. B B PATIL</h3>
            <p className="text-xl mb-4 text-gray-700">
              "Our vision is to empower students with knowledge, skills, and values to become leaders in their chosen fields and contribute positively to society."
            </p>  
            <p className="text-lg text-gray-700">
            Prof. B B PATIL has over 20 years of experience in education and is dedicated to fostering a culture of excellence and innovation in our college.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

