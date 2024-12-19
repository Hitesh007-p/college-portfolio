'use client'
import { motion } from 'framer-motion'
import { Award, Users, BookOpen, Trophy } from 'lucide-react'

const achievements = [
  { icon: Award, title: 'Top Ranked', description: '#1 in Regional Universities' },
  { icon: Users, title: 'Alumni Network', description: '50,000+ Successful Graduates' },
  { icon: BookOpen, title: 'Research Output', description: '500+ Publications Annually' },
  { icon: Trophy, title: 'Sports Excellence', description: '20+ National Championships' },
]

export default function Achievements() {
  return (
    <section className="py-20 px-4 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-black">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <achievement.icon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

