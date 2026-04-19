"use client";

import SlideWrapper from "../components/SlideWrapper";
import BackgroundMedia from "../components/BackgroundMedia";
import BackToHub from "../components/BackToHub";
import { motion } from "framer-motion";

export default function Entertainment() {
  return (
    <SlideWrapper>
      <BackToHub />

      {/* BACKGROUND VIDEO */}
      <BackgroundMedia video="/videos/events.mp4" />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-l from-black via-black/60 to-transparent z-0" />

      <div className="relative z-10 h-full flex items-center px-20 justify-between">

        {/* BIG RIGHT VIDEO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute right-10 top-1/2 -translate-y-1/2 w-[50%] h-[60%] rounded-xl overflow-hidden shadow-2xl"
        >
          <video
            src="/video/events.mp4"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* LEFT CONTENT */}
        <div className="max-w-xl">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold leading-tight"
          >
            Experience <br /> Drives Footfall
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg opacity-80"
          >
            From concerts to immersive attractions, entertainment fuels
            repeat visits and long dwell times.
          </motion.p>

          {/* FACT STRIP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex gap-10 text-sm uppercase tracking-wider"
          >
            <div>
              <p className="text-2xl font-bold">Year-Round</p>
              <p className="opacity-60">Events</p>
            </div>
            <div>
              <p className="text-2xl font-bold">High</p>
              <p className="opacity-60">Engagement</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Global</p>
              <p className="opacity-60">Tourism</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Repeat</p>
              <p className="opacity-60">Visits</p>
            </div>
          </motion.div>

        </div>

      </div>
    </SlideWrapper>
  );
}
