"use client";

import SlideWrapper from "../components/SlideWrapper";
import BackgroundMedia from "../components/BackgroundMedia";
import { motion } from "framer-motion";

export default function Entertainment() {
  return (
    <SlideWrapper>
      <BackgroundMedia video="/videos/events.mp4" />

      <div className="relative z-10 h-full flex items-center px-20 justify-between">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold"
          >
            Entertainment & Experiences
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 0.85, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg"
          >
            A destination beyond shopping — immersive attractions,
            events, and world-class entertainment driving continuous engagement.
          </motion.p>

          {/* FACT STRIP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex gap-10 text-sm uppercase tracking-wider"
          >
            <div>
              <p className="text-2xl font-bold">Aquarium</p>
              <p className="opacity-60">Attraction</p>
            </div>

            <div>
              <p className="text-2xl font-bold">Ice Rink</p>
              <p className="opacity-60">Experience</p>
            </div>

            <div>
              <p className="text-2xl font-bold">Cinema</p>
              <p className="opacity-60">Complex</p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT VISUAL BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="w-[400px] h-[300px] rounded-2xl overflow-hidden"
        >
          <video
            src="/video/events.mp4"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
        </motion.div>

      </div>
    </SlideWrapper>
  );
}
