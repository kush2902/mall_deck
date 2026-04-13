"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();

  // 🎥 Parallax effect
  const videoY = useTransform(scrollY, [0, 500], [0, 150]);

  // ✨ Text animation
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const textY = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* 🎥 Background Video */}
      <motion.video
        style={{ y: videoY }}
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-[120%] object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </motion.video>

      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* ✨ Content */}
      <motion.div
        style={{ opacity, y: textY }}
        className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6"
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
          Dubai Mall
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-10">
          The world’s most visited retail and lifestyle destination.
        </p>

        {/* 🎯 Buttons */}
        <div className="flex gap-6">
          <button className="px-8 py-3 bg-white text-black rounded-full transition transform hover:scale-110 hover:shadow-xl">
            Explore
          </button>

          <button className="px-8 py-3 border border-white rounded-full transition transform hover:scale-110 hover:bg-white hover:text-black">
            Leasing Info
          </button>
        </div>
      </motion.div>

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
