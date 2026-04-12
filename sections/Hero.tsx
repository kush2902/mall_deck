"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative h-screen w-full">

      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex flex-col justify-center h-full px-20">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl font-bold"
        >
          The Dubai Mall
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-2xl mt-6 text-gray-300"
        >
          More Than Shopping. A Global Destination.
        </motion.p>
      </div>
    </div>
  );
}
