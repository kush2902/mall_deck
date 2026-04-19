"use client";

import SlideWrapper from "../components/SlideWrapper";
import MagneticCard from "../components/MagneticCard";

export default function Opportunities() {
  return (
    <SlideWrapper>
      <div className="h-full flex items-center px-20">
        <div className="grid grid-cols-2 gap-12">

          <MagneticCard>
            <button onClick={() => window.dispatchEvent(new Event("goToRetail"))}
              className="border p-10 rounded-2xl bg-white/5 hover:bg-white/10">
              Retail Leasing
            </button>
          </MagneticCard>

          <MagneticCard>
            <button onClick={() => window.dispatchEvent(new Event("goToBrand"))}
              className="border p-10 rounded-2xl bg-white/5 hover:bg-white/10">
              Brand Partnerships
            </button>
          </MagneticCard>

          <MagneticCard>
            <button onClick={() => window.dispatchEvent(new Event("goToEvent"))}
              className="border p-10 rounded-2xl bg-white/5 hover:bg-white/10">
              Event Booking
            </button>
          </MagneticCard>

          <MagneticCard>
            <button onClick={() => window.dispatchEvent(new Event("goToVenue"))}
              className="border p-10 rounded-2xl bg-white/5 hover:bg-white/10">
              Venue Monetization
            </button>
          </MagneticCard>

        </div>
      </div>
    </SlideWrapper>
  );
}
