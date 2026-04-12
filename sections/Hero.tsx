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

      {/* ✨ Main Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-bold tracking-tight mb-6"
        >
          Dubai Mall
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl text-gray-300 max-w-xl mb-10"
        >
          The world’s most visited retail and lifestyle destination.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex gap-6"
        >
          <button className="px-8 py-3 bg-white text-black rounded-full hover:scale-105 transition">
            Explore
          </button>

          <button className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
            Leasing Info
          </button>
        </motion.div>

      </div>

      {/* ⬇️ Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-300 text-sm"
      >
        ↓ Scroll
      </motion.div>

    </section>
  );
}
