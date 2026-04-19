"use client";

import SlideWrapper from "../components/SlideWrapper";
import BackgroundMedia from "../components/BackgroundMedia";
import BackToHub from "../components/BackToHub";
import { motion } from "framer-motion";

type Props = {
  setActive: (key: string) => void;
};

export default function Retail({ setActive }: Props) {
  return (
    <SlideWrapper>
      <BackToHub setActive={setActive} />

      <BackgroundMedia video="/videos/retail.mp4" />

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black z-0" />

      {/* MAIN CONTENT (CENTERED NOW) */}
      <div className="relative z-10 h-full flex items-center justify-center px-20">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-center"
        >
          <h2 className="text-6xl font-bold tracking-tight">
            Retail Leasing
          </h2>

          <p className="mt-6 text-lg opacity-80">
            Premium retail ecosystem with global luxury, flagship, and high-footfall brands.
          </p>

          {/* FACT STRIP */}
          <div className="mt-12 flex justify-center gap-10 text-sm uppercase">
            <div>
              <p className="text-2xl font-bold">1200+</p>
              <p className="opacity-60">Stores</p>
            </div>
            <div>
              <p className="text-2xl font-bold">100M+</p>
              <p className="opacity-60">Visitors</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Global</p>
              <p className="opacity-60">Luxury Brands</p>
            </div>
            <div>
              <p className="text-2xl font-bold">High</p>
              <p className="opacity-60">Conversion</p>
            </div>
          </div>

        </motion.div>

      </div>
    </SlideWrapper>
  );
}
