'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X } from 'lucide-react'

const videos = [
  {
    id: 1,
    title: 'Campus Tour',
    src: '/videos/reserch.mp4',
    poster: '/videos/reserch.png',  
  },
  {
    id: 2,
    title: 'Student Life',
    src: '/videos/campus.mp4',
    poster: '/videos/campus.png', 
  },
  {
    id: 3,
    title: 'Academic Excellence',
    src: '/videos/acadmic.mp4',
    poster: '/videos/acadmic.png',  
  },
  {
    id: 4,
    title: 'Research Highlights',
    src: '/videos/student_life.mp4',
    poster: '/videos/student_life.png',  
  },
]




export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-black">Experience Our College</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden">
                <video
                  src={video.src}
                  className="w-full h-full object-cover"
                  poster={video.poster} // Use the poster from the video object
                />
              </div>
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedVideo(video.id)}
              >
                <Play className="w-16 h-16 text-white" />
              </motion.div>
              <h3 className="mt-4 text-xl font-semibold text-black">{video.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-4xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={videos.find(v => v.id === selectedVideo)?.src}
                className="w-full h-full"
                controls
                autoPlay
              />
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                onClick={() => setSelectedVideo(null)}
              >
                <X className="w-8 h-8" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
