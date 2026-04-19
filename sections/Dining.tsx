"use client";

import SlideWrapper from "../components/SlideWrapper";
import BackgroundMedia from "../components/BackgroundMedia";
import { motion } from "framer-motion";

export default function Dining() {
  return (
    <SlideWrapper>
      {/* BACKGROUND VIDEO */}
      <BackgroundMedia video="/videos/dining.mp4" />

      <div className="relative z-10 h-full flex items-center px-20">
        <div className="max-w-2xl">

          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold"
          >
            Dining & Food Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 0.85, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg"
          >
            From Michelin-star restaurants to global food chains,
            the mall offers an unmatched culinary destination.
          </motion.p>

          {/* STATS / HIGHLIGHTS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 grid grid-cols-2 gap-6 text-sm opacity-80"
          >
            <div>+ 200 Dining Options</div>
            <div>Luxury Fine Dining</div>
            <div>Global Cuisine</div>
            <div>High Footfall Zones</div>
          </motion.div>

        </div>
      </div>
    </SlideWrapper>
  );
}
