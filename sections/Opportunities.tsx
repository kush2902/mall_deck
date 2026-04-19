"use client";

import SlideWrapper from "../components/SlideWrapper";
import MagneticCard from "../components/MagneticCard";

export default function Opportunities() {
  return (
    <SlideWrapper>
      <div className="h-full flex items-center px-20">
        <div className="grid grid-cols-2 gap-12">
          {[
            "Retail Leasing",
            "Brand Partnerships",
            "Event Bookings",
            "Venue Monetization",
          ].map((item, i) => (
            <MagneticCard key={i}>
              <div className="border border-white/20 p-10 rounded-2xl backdrop-blur-lg bg-white/5 hover:bg-white/10 transition-all">
                <h3 className="text-xl">{item}</h3>
              </div>
            </MagneticCard>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}
