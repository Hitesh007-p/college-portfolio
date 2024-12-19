'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/image1.jpg')",  
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-black"
      >
        <h1 className="text-6xl font-bold mb-4">Welcome to Nutan jr. College</h1>
        <p className="text-2xl">Shaping the future through education</p>
      </motion.div>
    </section>
  );
}
