"use client";

import { useState } from "react";

import Hero from "../sections/Hero";
import Why from "../sections/Why";
import Dining from "../sections/Dining";
import Retail from "../sections/Retail";
import Brand from "../sections/BrandPartnership";
import Events from "../sections/EventBooking";
import Venue from "../sections/Venue";
import Entertainment from "../sections/Entertainment";

const slides = {
  hero: <Hero />,
  why: <Why />,
  dining: <Dining />,
  retail: <Retail />,
  brand: <Brand />,
  events: <Events />,
  venue: <Venue />,
  entertainment: <Entertainment />,
};

export default function Deck() {
  const [active, setActive] = useState("hero");

  return (
    <div className="h-screen w-screen overflow-hidden relative">

      {/* MENU */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[999] flex gap-6 bg-black/40 backdrop-blur-md px-6 py-3 rounded-full text-xs uppercase tracking-wider">
        {Object.keys(slides).map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`transition ${
              active === key ? "text-white" : "text-white/50"
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      {/* ACTIVE SLIDE */}
      <div className="h-full w-full">
        {slides[active as keyof typeof slides]}
      </div>
    </div>
  );
}
