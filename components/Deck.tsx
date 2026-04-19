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
    brand: <Brand setActive={setActive} />,
    entertainment: <Entertainment setActive={setActive} />,
    dining: <Dining setActive={setActive} />,
    venue: <Venue setActive={setActive} />,
    retail: <Retail setActive={setActive} />,
  };

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Hero from "../sections/Hero";
import Why from "../sections/Why";
import NavHub from "../sections/NavHub";
import Retail from "../sections/Retail";
import BrandPartnership from "../sections/BrandPartnership";
import Entertainment from "../sections/Entertainment";
import Dining from "../sections/Dining";
import Venue from "../sections/Venue";

export default function Deck() {
  const [active, setActive] = useState("hero");

  const slides = {
    hero: <Hero setActive={setActive} />,
    why: <Why setActive={setActive} />,
    hub: <NavHub setActive={setActive} />,
    retail: <Retail setActive={setActive} />,
    brand: <BrandPartnership setActive={setActive} />,
    entertainment: <Entertainment setActive={setActive} />,
    dining: <Dining setActive={setActive} />,
    venue: <Venue setActive={setActive} />,
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-black text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute w-full h-full"
        >
          {slides[active as keyof typeof slides]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
