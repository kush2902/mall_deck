"use client";

import SlideWrapper from "../components/SlideWrapper";
import BackgroundMedia from "../components/BackgroundMedia";
import { motion } from "framer-motion";

type Props = {
  setActive: (key: string) => void;
};

export default function Why({ setActive }: Props) {
  const sections = [
    { key: "retail", label: "Retail" },
    { key: "brand", label: "Brand Partnerships" },
    { key: "entertainment", label: "Entertainment" },
    { key: "dining", label: "Dining" },
    { key: "venue", label: "Venue" },
  ];

  return (
    <SlideWrapper>
      {/* BACKGROUND */}
      <BackgroundMedia image="/images/why.jpg" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 h-full flex items-center px-20">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold"
          >
            Why Dubai Mall
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg opacity-80"
          >
            A global destination combining tourism, luxury retail,
            and unmatched consumer footfall.
          </motion.p>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex gap-10 text-sm uppercase"
          >
            <div>
              <p className="text-2xl font-bold">100M+</p>
              <p className="opacity-60">Visitors</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Global</p>
              <p className="opacity-60">Hub</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Luxury</p>
              <p className="opacity-60">Market</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 🔥 UPGRADED RIGHT SIDE NAV */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
        {sections.map((item, index) => (
          <motion.button
            key={item.key}
            onClick={() => setActive(item.key)}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, x: -4 }}
            whileTap={{ scale: 0.96 }}
            className="px-6 py-3 rounded-xl backdrop-blur-md 
                       bg-white/10 border border-white/20 
                       text-white text-sm tracking-wide
                       shadow-lg hover:bg-white/20 
                       transition-all duration-300"
          >
            {item.label}
          </motion.button>
        ))}
      </div>

      {/* BACK TO HERO */}
      <button
        onClick={() => setActive("hero")}
        className="absolute bottom-8 left-10 text-xs opacity-50 hover:opacity-100 transition"
      >
        ← Back to Intro
      </button>
    </SlideWrapper>
  );
}
