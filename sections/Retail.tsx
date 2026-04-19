"use client";

import SlideWrapper from "../components/SlideWrapper";

export default function Retail() {
  return (
   <SlideWrapper>
      {/* BACKGROUND IMAGE */}
      <BackgroundMedia image="/images/retail.jpg" />


      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 h-full flex items-center px-20">
        <h2 className="text-5xl font-bold">Retail Excellence</h2>
      </div>
    </SlideWrapper>
  );
}
