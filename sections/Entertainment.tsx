"use client";

import SlideWrapper from "../components/SlideWrapper";
import BackgroundMedia from "../components/BackgroundMedia";

export default function Entertainment() {
  return (
    <SlideWrapper>
      <video autoPlay muted loop className="absolute w-full h-full object-cover">
        <source src="/vedios/entertainment.mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 h-full flex items-center px-20">
        <h2 className="text-5xl font-bold">Entertainment & Events</h2>
      </div>
    </SlideWrapper>
  );
}
