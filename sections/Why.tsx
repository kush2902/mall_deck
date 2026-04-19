"use client";

import SlideWrapper from "../components/SlideWrapper";
import BackgroundMedia from "../components/BackgroundMedia";
import { motion } from "framer-motion";

export default function Why() {
  return (
    <SlideWrapper>
      <BackgroundMedia image="/images/why.jpg" />

      <div className="relative z-10 h-full flex items-center px-20">
        <div className="max-w-2xl">

          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold"
          >
            Why Dubai Mall
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 0.85, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg"
          >
            Positioned at the heart of global tourism, Dubai Mall delivers
            unmatched scale, visibility, and premium consumer access.
          </motion.p>

          {/* FACT STRIP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex gap-10 text-sm uppercase tracking-wider"
          >
            <div>
              <p className="text-2xl font-bold">100M+</p>
              <p className="opacity-60">Annual Visitors</p>
            </div>

            <div>
              <p className="text-2xl font-bold">Global</p>
              <p className="opacity-60">Tourism Hub</p>
            </div>

            <div>
              <p className="text-2xl font-bold">Luxury</p>
              <p className="opacity-60">Market</p>
            </div>
          </motion.div>

        </div>
      </div>
    </SlideWrapper>
  );
}
