"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Hero from "../sections/Hero";
import Why from "../sections/Why";
import NavHub from "../sections/NavHub";
import Dining from "../sections/Dining";
import Retail from "../sections/Retail";
import Brand from "../sections/BrandPartnership";
import Events from "../sections/EventBooking";
import Venue from "../sections/Venue";
import Entertainment from "../sections/Entertainment";

export default function Deck() {
  const [active, setActive] = useState("hero");

  const slides: any = {
    hero: <Hero />,
    why: <Why />,
    hub: <NavHub setActive={setActive} />,
    retail: <Retail />,
    brand: <Brand />,
    entertainment: <Entertainment />,
    dining: <Dining />,
    venue: <Venue />,
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-black text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7 }}
          className="absolute w-full h-full"
        >
          {slides[active]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
