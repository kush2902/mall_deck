"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function MagneticCard({ children }: any) {
  const ref = useRef<any>(null);

  const handleMouseMove = (e: any) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
  };

  const reset = () => {
    ref.current.style.transform = `translate(0,0)`;
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      whileHover={{ scale: 1.05 }}
      className="transition-transform duration-300"
    >
      {children}
    </motion.div>
  );
}
