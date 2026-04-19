"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Deck({ children }: any) {
  const slides = children;
  const [index, setIndex] = useState(0);
  const total = slides.length;
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setIndex((i) => Math.min(i + 1, total - 1));
  };

  const prev = () => {
    setDirection(-1);
    setIndex((i) => Math.max(i - 1, 0));
  };

  useEffect(() => {
    let locked = false;
    window.addEventListener("goToRetail", () => setIndex(5));
    window.addEventListener("goToBrand", () => setIndex(6));
    window.addEventListener("goToEvent", () => setIndex(7));
    window.addEventListener("goToVenue", () => setIndex(8));
    const handleWheel = (e: WheelEvent) => {
      if (locked) return;

      locked = true;

      if (e.deltaY > 0) next();
      else prev();

      setTimeout(() => (locked = false), 900);
    };

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") next();
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") prev();
    };

    window.addEventListener("wheel", handleWheel);
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  // swipe
  let touchStart = 0;

  const handleTouchStart = (e: any) => {
    touchStart = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: any) => {
    const diff = touchStart - e.changedTouches[0].clientY;

    if (diff > 50) next();
    if (diff < -50) prev();
  };

  return (
    <div
      className="h-screen w-screen overflow-hidden bg-black text-white"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: direction * 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -direction * 100 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {slides[index]}
        </motion.div>
      </AnimatePresence>

      {/* RIGHT DOT NAV */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 space-y-4 z-50">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full transition-all ${
              i === index ? "bg-white scale-150" : "bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* SLIDE COUNTER */}
      <div className="fixed bottom-6 right-8 text-sm opacity-70">
        {index + 1} / {total}
      </div>
    </div>
  );
}
