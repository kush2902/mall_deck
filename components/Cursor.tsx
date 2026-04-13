"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      animate={{ x: pos.x - 10, y: pos.y - 10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="fixed top-0 left-0 w-5 h-5 bg-white rounded-full pointer-events-none z-[999]"
    />
  );
}
