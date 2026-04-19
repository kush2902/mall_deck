"use client";

import SlideWrapper from "@/components/SlideWrapper";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <SlideWrapper>
      {/* BACKGROUND VIDEO WITH ZOOM */}
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6 }}
        className="absolute w-full h-full object-cover"
      >
        <source src="YOUR_HERO_VIDEO_URL" />
      </motion.video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* LIGHT GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-center px-16">
        <motion.h1
          initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2 }}
          className="text-7xl font-bold tracking-tight"
        >
          Dubai Mall
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl mt-6 max-w-xl"
        >
          Where luxury, scale, and experience converge into one destination.
        </motion.p>

        {/* SUBTLE SCROLL INDICATOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10 left-16 text-sm tracking-widest"
        >
          SCROLL
        </motion.div>
      </div>
    </SlideWrapper>
  );
}
