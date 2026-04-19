"use client";

import SlideWrapper from "../components/SlideWrapper";
import { motion } from "framer-motion";

type Props = {
  setActive: (key: string) => void;
};

export default function Hero({ setActive }: Props) {
  return (
    <SlideWrapper>
      {/* BACKGROUND VIDEO WITH ZOOM */}
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6 }}
        className="absolute w-full h-full object-cover pointer-events-none"
      >
        <source src="https://res.cloudinary.com/dv8ywrti6/video/upload/v1776364998/Untitled_design-2_f6y0ig.mp4" />
      </motion.video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      {/* LIGHT GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70 pointer-events-none" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-center px-16">
        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2 }}
          className="text-7xl font-bold tracking-tight"
        >
          Dubai Mall
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-xl mt-6 max-w-xl"
        >
          Where luxury, scale, and experience converge into one destination.
        </motion.p>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex gap-10 text-sm uppercase tracking-wider"
        >
          <div>
            <p className="text-2xl font-bold">100M+</p>
            <p className="opacity-60">Annual Visitors</p>
          </div>

          <div>
            <p className="text-2xl font-bold">1200+</p>
            <p className="opacity-60">Retail Stores</p>
          </div>

          <div>
            <p className="text-2xl font-bold">200+</p>
            <p className="opacity-60">Dining Options</p>
          </div>
        </motion.div>
      </div>

      {/* 👉 SKIP BUTTON (BOTTOM RIGHT) */}
      <motion.button
        onClick={() => setActive("why")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 right-10 z-20 text-sm uppercase tracking-widest opacity-70 hover:opacity-100 transition"
      >
        Skip →
      </motion.button>
    </SlideWrapper>
  );
}
