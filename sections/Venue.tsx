"use client";

import SlideWrapper from "../components/SlideWrapper";
import BackgroundMedia from "../components/BackgroundMedia";
import BackToHub from "../components/BackToHub";
import { motion } from "framer-motion";

export default function Venue() {
  return (
    <SlideWrapper>
      <BackToHub setActive={setActive} />

      {/* BACKGROUND */}
      <BackgroundMedia video="/videos/venue.mp4" />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-0" />

      <div className="relative z-10 h-full flex items-center justify-between px-20">

        {/* LEFT */}
        <div className="max-w-xl">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold leading-tight"
          >
            Monetize Premium <br /> Spaces
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg opacity-80"
          >
            Dedicated venues enable large-scale events, exhibitions,
            and high-value brand activations.
          </motion.p>

          {/* FACT STRIP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex gap-10 text-sm uppercase tracking-wider"
          >
            {[
              ["Expo", "Spaces"],
              ["Concert", "Ready"],
              ["Corporate", "Events"],
              ["High", "Revenue"],
            ].map(([v, l], i) => (
              <div key={i}>
                <p className="text-2xl font-bold">{v}</p>
                <p className="opacity-60">{l}</p>
              </div>
            ))}
          </motion.div>

        </div>

        {/* RIGHT VIDEO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="w-[520px] h-[340px] rounded-xl overflow-hidden shadow-2xl border border-white/10"
        >
          <video
            src="/videos/venue.mp4"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover scale-105"
          />
        </motion.div>

      </div>
    </SlideWrapper>
  );
}
