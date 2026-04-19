"use client";

import SlideWrapper from "../components/SlideWrapper";
import BackgroundMedia from "../components/BackgroundMedia";

export default function BrandPartnership() {
  return (
    <SlideWrapper>
      <video autoPlay muted loop className="absolute w-full h-full object-cover">
        <source src="/videos/partnership.mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 h-full flex items-center px-20">
        <div>
          <h2 className="text-5xl font-bold">Brand Partnerships</h2>
          <p className="mt-6 max-w-xl opacity-80">
            Collaborate with global brands through immersive activations and sponsorships.
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
}
