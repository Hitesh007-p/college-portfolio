'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const teachers = [
  { name: 'Prof. Nilesh Saindane', subject: 'Biology' },
  { name: 'Miss. Madhavi Chavhan', subject: 'Information Technology' },
  { name: 'Prof. Rahul Patil', subject: 'Biology' },
  { name: 'Prof. M M Chaudhari', subject: 'Physics' },
  { name: 'Prof. P G Kagane', subject: 'Mathematics' },
  { name: 'Prof. Navneet Pawar', subject: 'Chemistry' },
  { name: 'Miss. Jyoti Desale', subject: 'English' },
  { name: 'Prof. Abhijit Patil', subject: 'Marathi' },
]

export default function Teachers() {
  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Single image for all staff */}
        <div className="text-center mb-12">
          <div className="w-100 h-96 relative overflow-hidden border-4 border-gray-300">
            <Image
              src="/all_staf.jpg" // Replace with the path to your staff image
              alt="All Staff"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h2 className="text-4xl font-bold mt-6 text-black">Our Staff</h2>
        </div>

        {/* List of staff members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-700">{teacher.name}</h3>
              <p className="text-gray-500">{teacher.subject}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}