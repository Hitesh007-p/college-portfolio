'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const teachers = [
  { name: 'Prof. Nilesh Saindane', subject: 'Biology' },
  { name: 'Miss Madhavi Chavhan', subject: 'Information Technology' },
  { name: 'Prof. Rahul Patil', subject: 'Biology' },
  { name: 'Prof. M M Chaudhari', subject: 'Physics' },
  { name: 'Prof. P G Kagane', subject: 'Mathematics' },
  { name: 'Prof. Navneet Pawar', subject: 'chemistry' },
   
]

export default function Teachers() {
  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-black">Our Teachers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4 relative rounded-full overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=128&width=128&text=${teacher.name}`}
                  alt={teacher.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-500">{teacher.name}</h3>
              <p className="text-gray-600">{teacher.subject}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

