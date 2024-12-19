'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const images = [
  '/placeholder.svg?height=300&width=400',
  '/placeholder.svg?height=300&width=400',
  '/placeholder.svg?height=300&width=400',
  '/placeholder.svg?height=300&width=400',
  '/placeholder.svg?height=300&width=400',
  '/placeholder.svg?height=300&width=400',
]

export default function Gallery() {
  return (
    <section className="py-20 px-4 bg-gray-100">
      <h2 className="text-4xl font-bold mb-12 text-center text-black">Our Campus</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto ">
        {images.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={src}
              alt={`Campus image ${index + 1}`}
              width={400}
              height={300}
              className="rounded-lg shadow-lg text-gray-700"
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

