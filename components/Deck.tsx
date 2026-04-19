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

  const titles = [
    "Intro",
    "Why",
    "Explore",
    "Retail",
    "Dining",
    "Entertainment",
    "Leasing",
    "Partnerships",
    "Events",
    "Venues"
  ];

  // 🔥 NavHub support
  useEffect(() => {
    const handler = (e: any) => {
      if (typeof e.detail === "number") {
        setIndex(e.detail);
      }
    };

    window.addEventListener("goToSlide", handler);
    return () => window.removeEventListener("goToSlide", handler);
  }, []);

  // 🔥 Scroll navigation
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
  }, [index, isAnimating]);

  // 🔥 Keyboard nav
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
  }, [index, isAnimating]);

  // 🔥 Animation lock reset
  useEffect(() => {
    const t = setTimeout(() => setIsAnimating(false), 800);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <div className="h-screen w-screen overflow-hidden bg-black text-white relative">

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          {children[index]}
        </motion.div>
      </AnimatePresence>

      {/* PROGRESS */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
        {children.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-8 rounded-full transition-all ${
              i === index ? "bg-white scale-125" : "bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* TITLE */}
      <div className="absolute bottom-6 left-8 text-xs opacity-60 tracking-widest">
        {titles[index]}
      </div>
    </div>
  );
}
