'use client'
import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'

const events = [
  { date: 'May 15', title: 'Spring Open House', description: 'Explore our campus and meet faculty members.' },
  { date: 'June 1', title: 'Alumni Networking Event', description: 'Connect with successful graduates and industry leaders.' },
  { date: 'July 10', title: 'Summer Research Symposium', description: 'Showcase of student and faculty research projects.' },
  { date: 'August 20', title: 'New Student Orientation', description: 'Welcome event for incoming freshmen and transfer students.' },
]

export default function Events() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-black">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 flex items-start space-x-4"
            >
              <div className="flex-shrink-0">
                <Calendar className="w-8 h-8 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-500">{event.title}</h3>
                <p className="text-gray-600 mb-2">{event.date}</p>
                <p className="text-gray-700">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

