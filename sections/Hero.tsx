"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();

  // 🎥 Video moves slower
  const videoY = useTransform(scrollY, [0, 500], [0, 150]);

  // 📝 Text fades out
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const textY = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* 🎥 Parallax Video */}
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
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          Dubai Mall
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-10">
          The world’s most visited retail and lifestyle destination.
        </p>
      </motion.div>

      {/* ⬇️ Scroll indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-300"
      >
        ↓ Scroll
      </motion.div>

    </section>
  );
}
