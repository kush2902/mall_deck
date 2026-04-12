"use client";

import { motion } from "framer-motion";

export default function SectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative min-h-screen flex flex-col justify-center px-10 md:px-20 py-20"
    >
      {/* ✨ Top Gradient */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent pointer-events-none" />

      {/* ✨ Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      {children}
    </motion.section>
  );
}
