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
        <source src="https://res.cloudinary.com/dv8ywrti6/video/upload/v1776364998/Untitled_design-2_f6y0ig.mp4" type="video/mp4" />
      </video>

      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-bold"
        >
          Dubai Mall
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-gray-300 text-lg"
        >
          A Cinematic Retail Experience
        </motion.p>

      </div>
    </section>
  );
}
