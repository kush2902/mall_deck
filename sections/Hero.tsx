"use client";

import SlideWrapper from "@/components/SlideWrapper";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <SlideWrapper>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="YOUR_HERO_VIDEO_URL" />
      </video>

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 h-full flex flex-col justify-center px-16">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-7xl font-bold"
        >
          Dubai Mall
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-xl mt-4 opacity-80"
        >
          A Global Destination for Retail, Luxury & Experiences
        </motion.p>
      </div>
    </SlideWrapper>
  );
}
