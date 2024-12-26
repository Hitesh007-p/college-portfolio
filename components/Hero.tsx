'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      className="h-screen sm:h-[80vh] md:h-[70vh] flex items-center justify-center bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/image1.jpg')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 z-0"></div>

      {/* Animated Background Shapes */}
      <motion.div
        className="absolute top-[-50px] left-[-50px] w-72 h-72 bg-yellow-400 opacity-30 rounded-full blur-3xl z-0"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      ></motion.div>
      <motion.div
        className="absolute bottom-[-50px] right-[-50px] w-96 h-96 bg-yellow-400 opacity-20 rounded-full blur-3xl z-0"
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      ></motion.div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center px-6"
      >
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/logo.jpg" 
            alt="Nutan Jr. College Logo"
            width={150}
            height={150}
            className="rounded-full shadow-lg"
          />
        </div>

        {/* Hero Heading */}
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
          Welcome to <span className="text-yellow-400">Nutan Jr. College</span>
        </h1>
        <p className="mt-4 text-lg sm:text-2xl text-gray-300 drop-shadow-md">
          Where education shapes your bright future
        </p>
      </motion.div>
    </section>
  );
}
