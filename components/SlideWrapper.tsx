"use client";

import { motion } from "framer-motion";

export default function SlideWrapper({ children }: any) {
  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
