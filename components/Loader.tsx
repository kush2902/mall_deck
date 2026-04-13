"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onFinish }: { onFinish: () => void }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHide(true);
      setTimeout(onFinish, 800);
    }, 2000);
  }, [onFinish]);

  if (hide) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
      className="fixed inset-0 bg-black flex items-center justify-center z-[999]"
    >
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl tracking-widest"
      >
        DUBAI MALL
      </motion.h1>
    </motion.div>
  );
}
