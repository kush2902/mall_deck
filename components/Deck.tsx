"use client";

import { useEffect, useState } from "react";

export default function Deck({ children }: any) {
  const slides = children;
  const [index, setIndex] = useState(0);
  const total = slides.length;

  const next = () => setIndex((i) => Math.min(i + 1, total - 1));
  const prev = () => setIndex((i) => Math.max(i - 1, 0));

  // Scroll control
  useEffect(() => {
    let timeout: any;

    const handleWheel = (e: WheelEvent) => {
      if (timeout) return;

      if (e.deltaY > 0) next();
      else prev();

      timeout = setTimeout(() => (timeout = null), 800);
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

  return (
    <div className="h-screen w-screen overflow-hidden bg-black text-white">
      <div
        className="h-full w-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateY(-${index * 100}vh)`,
        }}
      >
        {slides.map((slide: any, i: number) => (
          <div key={i} className="h-screen w-screen">
            {slide}
          </div>
        ))}
      </div>

      {/* Progress dots */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 space-y-3">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === index ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
