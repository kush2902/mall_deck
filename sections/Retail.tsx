"use client";

import SlideWrapper from "../components/SlideWrapper";
import BackgroundMedia from "../components/BackgroundMedia";
import BackToHub from "../components/BackToHub";
import { motion } from "framer-motion";

export default function Retail() {
  return (
    <SlideWrapper>
      <BackToHub />
      <BackgroundMedia video="/video/retail.mp4" />

      <div className="relative z-10 h-full flex items-center px-20">
        <div>

          <motion.h2 className="text-5xl font-bold">
            Retail Excellence
          </motion.h2>

          <motion.p className="mt-6 text-lg opacity-80">
            Flagship brands, luxury anchors, and global retail powerhouses.
          </motion.p>

          <div className="mt-10 flex gap-10 text-sm uppercase">
            <div>
              <p className="text-2xl font-bold">1200+</p>
              <p className="opacity-60">Stores</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Global</p>
              <p className="opacity-60">Brands</p>
            </div>
          </div>

        </div>
      </div>
    </SlideWrapper>
  );
}
