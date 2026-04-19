"use client";

import SlideWrapper from "../components/SlideWrapper";
import { motion } from "framer-motion";

type Props = {
  setActive: (key: string) => void;
};

export default function NavHub({ setActive }: Props) {
  const items = [
    { label: "Retail Leasing", key: "retail" },
    { label: "Brand Partnerships", key: "brand" },
    { label: "Entertainment", key: "entertainment" },
    { label: "Dining", key: "dining" },
    { label: "Venue Monetisation", key: "venue" },
  ];

  return (
    <SlideWrapper>
      <div className="h-full flex flex-col items-center justify-center text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-12"
        >
          Explore Opportunities
        </motion.h2>

        <div className="grid grid-cols-2 gap-8">
          {items.map((item, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(item.key)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="px-10 py-6 border border-white/20 rounded-xl backdrop-blur-md bg-white/5
                         hover:bg-white/10 hover:scale-105
                         hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]
                         transition-all duration-500 text-lg"
            >
              {item.label}
            </motion.button>
          ))}
        </div>

      </div>
    </SlideWrapper>
  );
}
