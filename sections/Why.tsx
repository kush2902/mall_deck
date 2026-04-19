"use client";

import SlideWrapper from "@/components/SlideWrapper";
import { motion } from "framer-motion";

export default function Why() {
  return (
    <SlideWrapper>
      <div className="h-full flex items-center px-20">
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl font-bold"
          >
            Why This Property
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg opacity-70 max-w-xl"
          >
            World-class footfall, premium positioning, and unmatched scale.
          </motion.p>
        </div>
      </div>
    </SlideWrapper>
  );
}
