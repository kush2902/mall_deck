"use client";

import SlideWrapper from "../components/SlideWrapper";
import BackgroundMedia from "../components/BackgroundMedia";
import { motion } from "framer-motion";

export default function Dining() {
  return (
    <SlideWrapper>
      <BackgroundMedia video="/videos/dining.mp4" />

      <div className="relative z-10 h-full flex items-center px-20">
        <div className="w-full flex justify-between items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-xl">
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
              A global culinary destination offering fine dining,
              luxury cafes, and high-footfall food zones.
            </motion.p>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 grid grid-cols-2 gap-6 text-sm opacity-80"
            >
              <div>+ 200 Dining Brands</div>
              <div>Luxury Fine Dining</div>
              <div>Global Cuisine</div>
              <div>High Spend Visitors</div>
            </motion.div>
          </div>

          {/* RIGHT VISUAL CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="w-40 h-52 bg-white/10 backdrop-blur-md rounded-xl border border-white/20" />
            <div className="w-40 h-52 bg-white/10 backdrop-blur-md rounded-xl border border-white/20" />
            <div className="w-40 h-52 bg-white/10 backdrop-blur-md rounded-xl border border-white/20" />
            <div className="w-40 h-52 bg-white/10 backdrop-blur-md rounded-xl border border-white/20" />
          </motion.div>

        </div>
      </div>
    </SlideWrapper>
  );
}
