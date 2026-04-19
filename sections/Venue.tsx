"use client";

import SlideWrapper from "../components/SlideWrapper";
import BackgroundMedia from "../components/BackgroundMedia";
import BackToHub from "../components/BackToHub";

export default function Venue() {
  return (
    <SlideWrapper>
      <BackToHub />
      <BackgroundMedia video="/videos/venue.mp4" />

      <div className="relative z-10 h-full flex items-center px-20">

        <div>
          <h2 className="text-5xl font-bold">
            Venue Monetisation
          </h2>

          <p className="mt-6 text-lg opacity-80">
            Performing arts centers, expo halls, and flexible premium venues.
          </p>

          <div className="mt-10 flex gap-10 text-sm uppercase">
            <div>
              <p className="text-2xl font-bold">Multi</p>
              <p className="opacity-60">Venue Types</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Flexible</p>
              <p className="opacity-60">Layouts</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Revenue</p>
              <p className="opacity-60">Streams</p>
            </div>
          </div>
        </div>

      </div>
    </SlideWrapper>
  );
}
