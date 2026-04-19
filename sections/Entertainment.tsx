"use client";

import SlideWrapper from "../components/SlideWrapper";
import BackgroundMedia from "../components/BackgroundMedia";
import BackToHub from "../components/BackToHub";
import { motion } from "framer-motion";
type Props = {
  setActive: (key: string) => void;
};

export default function Entertainment({ setActive }: Props) {
  return (
    <SlideWrapper>
      <BackToHub setActive={setActive} />

      {/* BACKGROUND */}
      <BackgroundMedia video="/videos/events.mp4" />

      <div className="absolute inset-0 bg-gradient-to-l from-black via-black/60 to-transparent z-0" />

      <div className="relative z-10 h-full flex items-center justify-between px-20">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold leading-tight"
          >
            Turn Footfall <br /> Into Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg opacity-80"
          >
            Entertainment drives repeat visits, longer dwell times,
            and higher consumer engagement.
          </motion.p>

          {/* FACT STRIP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex gap-10 text-sm uppercase tracking-wider"
          >
            {[
              ["365 Days", "Events"],
              ["High", "Engagement"],
              ["Global", "Tourism"],
              ["Repeat", "Visits"],
            ].map(([v, l], i) => (
              <div key={i}>
                <p className="text-2xl font-bold">{v}</p>
                <p className="opacity-60">{l}</p>
              </div>
            ))}
          </motion.div>

        </div>

        {/* BIG VIDEO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="w-[55%] h-[65%] rounded-xl overflow-hidden shadow-2xl border border-white/10"
        >
          <img
           src="/images/aqua.jpg"
           alt="Events"
           className="w-full h-full object-cover scale-105"
          />
        </motion.div>

      </div>
    </SlideWrapper>
  );
}
