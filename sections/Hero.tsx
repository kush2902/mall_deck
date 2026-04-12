"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* 🎥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* 🌑 Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* ✨ Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
        
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-bold mb-6"
        >
          Dubai Mall
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl text-gray-300 max-w-xl"
        >
          Where Retail Meets Experience
        </motion.p>

      </div>
    </section>
  );
}
