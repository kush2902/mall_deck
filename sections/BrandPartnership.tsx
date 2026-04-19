"use client";

import SlideWrapper from "../components/SlideWrapper";
import BackgroundMedia from "../components/BackgroundMedia";
import BackToHub from "../components/BackToHub";
import { motion } from "framer-motion";

export default function Brand() {
  return (
    <SlideWrapper>
      <BackToHub />

      {/* BACKGROUND VIDEO */}
      <BackgroundMedia video="/videos/brand.mp4" />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-0" />

      <div className="relative z-10 h-full flex items-center px-20 justify-between">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold leading-tight"
          >
            Own Attention <br /> at Scale
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg opacity-80"
          >
            Position your brand in front of 100M+ annual visitors
            in one of the world’s most premium retail destinations.
          </motion.p>

          {/* FACT STRIP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex gap-10 text-sm uppercase tracking-wider"
          >
            <div>
              <p className="text-2xl font-bold">100M+</p>
              <p className="opacity-60">Visitors</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Global</p>
              <p className="opacity-60">Audience</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Premium</p>
              <p className="opacity-60">Brands</p>
            </div>
            <div>
              <p className="text-2xl font-bold">High</p>
              <p className="opacity-60">Dwell Time</p>
            </div>
          </motion.div>

          {/* LOGO GRID */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-6 mt-12"
          >
            {["nike.png","apple.png","gucci.png","zara.png","adidas.png","lv.png"].map((logo, i) => (
              <img
                key={i}
                src={`/images/${logo}`}
                className="h-10 object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-500"
              />
            ))}
          </motion.div>

        </div>

        {/* RIGHT VIDEO PANEL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="w-[500px] h-[320px] rounded-xl overflow-hidden shadow-2xl"
        >
          <video
            src="/video/brand.mp4"
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
