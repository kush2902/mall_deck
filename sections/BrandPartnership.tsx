"use client";

import SlideWrapper from "../components/SlideWrapper";
import BackgroundMedia from "../components/BackgroundMedia";
import BackToHub from "../components/BackToHub";

export default function Brand() {
  return (
    <SlideWrapper>
      <BackToHub />
      <BackgroundMedia video="/videos/brand.mp4" />

      <div className="relative z-10 h-full flex items-center px-20">

        <div>
          <h2 className="text-5xl font-bold">
            Brand Partnerships
          </h2>

          <p className="mt-6 text-lg opacity-80">
            High-impact brand activations in one of the world’s most visited destinations.
          </p>

          <div className="mt-10 flex gap-10 text-sm uppercase">
            <div>
              <p className="text-2xl font-bold">100M+</p>
              <p className="opacity-60">Footfall</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Global</p>
              <p className="opacity-60">Audience</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Premium</p>
              <p className="opacity-60">Brand Fit</p>
            </div>
          </div>
        </div>

      </div>
    </SlideWrapper>
  );
}
