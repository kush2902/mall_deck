"use client";

import SlideWrapper from "../components/SlideWrapper";
import BackgroundMedia from "../components/BackgroundMedia";
import BackToHub from "../components/BackToHub";

type Props = {
  setActive: (key: string) => void;
};

export default function Events({ setActive }: Props) {
  return (
    <SlideWrapper>
     <BackToHub setActive={setActive} />
      <BackgroundMedia video="/videos/events.mp4" />

      <div className="relative z-10 h-full flex items-center px-20">

        <div>
          <h2 className="text-5xl font-bold">
            Event Bookings
          </h2>

          <p className="mt-6 text-lg opacity-80">
            Concerts, activations, and large-scale experiences in premium spaces.
          </p>

          <div className="mt-10 flex gap-10 text-sm uppercase">
            <div>
              <p className="text-2xl font-bold">Year-Round</p>
              <p className="opacity-60">Events</p>
            </div>
            <div>
              <p className="text-2xl font-bold">High</p>
              <p className="opacity-60">Engagement</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Global</p>
              <p className="opacity-60">Audience</p>
            </div>
          </div>
        </div>

      </div>
    </SlideWrapper>
  );
}
