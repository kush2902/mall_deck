"use client";

import SlideWrapper from "../components/SlideWrapper";
import { motion } from "framer-motion";

export default function NavHub() {
  const go = (index: number) => {
    window.dispatchEvent(new CustomEvent("goToSlide", { detail: index }));
  };

  return (
    <SlideWrapper>
      <div className="relative z-10 h-full flex flex-col justify-center px-20">

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-12"
        >
          Explore the Opportunity
        </motion.h2>

        <div className="grid grid-cols-2 gap-10">

          <motion.button
            onClick={() => go(3)}
            whileHover={{ scale: 1.05 }}
            className="p-10 border border-white/20 rounded-2xl bg-white/5 backdrop-blur-md"
          >
            Retail
          </motion.button>

          <motion.button
            onClick={() => go(4)}
            whileHover={{ scale: 1.05 }}
            className="p-10 border border-white/20 rounded-2xl bg-white/5 backdrop-blur-md"
          >
            Dining
          </motion.button>

          <motion.button
            onClick={() => go(5)}
            whileHover={{ scale: 1.05 }}
            className="p-10 border border-white/20 rounded-2xl bg-white/5 backdrop-blur-md"
          >
            Entertainment
          </motion.button>

          <motion.button
            onClick={() => go(6)}
            whileHover={{ scale: 1.05 }}
            className="p-10 border border-white/20 rounded-2xl bg-white/5 backdrop-blur-md"
          >
            Leasing & Partnerships
          </motion.button>

        </div>
      </div>
    </SlideWrapper>
  );
}
