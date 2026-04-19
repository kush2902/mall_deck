"use client";

import SlideWrapper from "../components/SlideWrapper";

export default function RetailLeasing() {
  return (
    <SlideWrapper>
      <video autoPlay muted loop className="absolute w-full h-full object-cover">
        <source src="/video/retail.mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 h-full flex items-center px-20">
        <div>
          <h2 className="text-5xl font-bold">Retail Leasing</h2>
          <p className="mt-6 max-w-xl opacity-80">
            Premium retail spaces designed for luxury, flagship, and emerging brands.
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
