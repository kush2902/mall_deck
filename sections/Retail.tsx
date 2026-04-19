"use client";

import SlideWrapper from "../components/SlideWrapper";
import BackgroundMedia from "../components/BackgroundMedia";
import { motion } from "framer-motion";

export default function Retail() {
  return (
    <SlideWrapper>
      <BackgroundMedia video="/video/retail.mp4" />

      <div className="relative z-10 h-full flex items-center px-20">
        <div className="max-w-2xl">

          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold"
          >
            Retail Excellence
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 0.85, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg"
          >
            Home to flagship global brands, luxury anchors, and high-footfall
            retail experiences driving unmatched commercial success.
          </motion.p>

          {/* 🔥 FACT STRIP (THIS WAS BREAKING YOUR BUILD) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex gap-10 text-sm uppercase tracking-wider"
          >
            <div>
              <p className="text-2xl font-bold">1200+</p>
              <p className="opacity-60">Retail Stores</p>
            </div>

            <div>
              <p className="text-2xl font-bold">Global</p>
              <p className="opacity-60">Flagship Brands</p>
            </div>

            <div>
              <p className="text-2xl font-bold">High</p>
              <p className="opacity-60">Footfall</p>
            </div>
          </motion.div>

        </div>
      </div>
    </SlideWrapper>
  );
}
