"use client";

import SlideWrapper from "../components/SlideWrapper";
import BackgroundMedia from "../components/BackgroundMedia";
import { motion } from "framer-motion";

export default function Why() {
  return (
    <SlideWrapper>
      {/* BACKGROUND IMAGE */}
      <BackgroundMedia image="/images/mall.jpg" />

      <div className="relative z-10 h-full flex items-center px-20">
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold"
          >
            Why This Property
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 0.85, x: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-xl text-lg"
          >
            Positioned at the center of global tourism, luxury retail,
            and world-class experiences.
          </motion.p>
        </div>
      </div>
    </SlideWrapper>
  );
}
