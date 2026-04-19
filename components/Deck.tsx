"use client";

import { useEffect, useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DeckProps {
  children: ReactNode[];
}

export default function Deck({ children }: DeckProps) {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalSlides = children.length;

  // 🔥 GO TO SPECIFIC SLIDE (used by NavHub)
  useEffect(() => {
    const handler = (e: any) => {
      if (typeof e.detail === "number") {
        setIndex(e.detail);
      }
    };

    window.addEventListener("goToSlide", handler);
    return () => window.removeEventListener("goToSlide", handler);
  }, []);

  // 🔥 SCROLL CONTROL (one slide per scroll)
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isAnimating) return;

      if (e.deltaY > 0 && index < totalSlides - 1) {
        setIsAnimating(true);
        setIndex((prev) => prev + 1);
      } else if (e.deltaY < 0 && index > 0) {
        setIsAnimating(true);
        setIndex((prev) => prev - 1);
      }
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [index, isAnimating, totalSlides]);

  // 🔥 KEYBOARD NAVIGATION
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (isAnimating) return;

      if (e.key === "ArrowDown" && index < totalSlides - 1) {
        setIsAnimating(true);
        setIndex((prev) => prev + 1);
      } else if (e.key === "ArrowUp" && index > 0) {
        setIsAnimating(true);
        setIndex((prev) => prev - 1);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [index, isAnimating, totalSlides]);

  // 🔥 RESET ANIMATION LOCK
  useEffect(() => {
    const timeout = setTimeout(() => setIsAnimating(false), 900);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div className="h-screen w-screen overflow-hidden bg-black text-white relative">
      
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 80, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -60, scale: 0.98 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1], // premium easing
          }}
          className="absolute inset-0"
        >
          {children[index]}
        </motion.div>
      </AnimatePresence>

      {/* 🔥 PROGRESS INDICATOR (right side) */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
        {children.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-8 rounded-full transition-all duration-300 ${
              i === index ? "bg-white scale-125" : "bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* 🔥 SLIDE COUNT */}
      <div className="absolute bottom-6 right-8 text-xs opacity-50 tracking-widest">
        {index + 1} / {totalSlides}
      </div>
    </div>
  );
}
