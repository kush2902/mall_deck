"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Hero from "../sections/Hero";
import Why from "../sections/Why";
import Dining from "../sections/Dining";
import Retail from "../sections/Retail";
import Brand from "../sections/BrandPartnership";
import Events from "../sections/EventBooking";
import Venue from "../sections/Venue";
import Entertainment from "../sections/Entertainment";

export default function Deck() {
  const [active, setActive] = useState("hero");

  const slides = {
    hero: <Hero setActive={setActive} />,
    why: <Why setActive={setActive} />,
    retail: <Retail setActive={setActive} />,
    brand: <Brand setActive={setActive} />,
    entertainment: <Entertainment setActive={setActive} />,
    dining: <Dining setActive={setActive} />,
    venue: <Venue setActive={setActive} />,
  };

  // 🎥 Map each slide to a background video
  const videos: Record<string, string> = {
    hero: "https://res.cloudinary.com/dv8ywrti6/video/upload/v1776364998/Untitled_design-2_f6y0ig.mp4",
    why: "/videos/why.mp4",
    retail: "/videos/retail.mp4",
    brand: "/videos/brand.mp4",
    entertainment: "/videos/entertainment.mp4",
    dining: "/videos/dining.mp4",
    venue: "/videos/venue.mp4",
  };

  return (
    <div className="w-screen h-screen overflow-hidden bg-black text-white relative">
      
      {/* 🔥 PERSISTENT BACKGROUND VIDEO */}
      <motion.video
        key={videos[active]}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute w-full h-full object-cover z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <source src={videos[active]} type="video/mp4" />
      </motion.video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none" />

      {/* 🎬 SLIDE CONTENT ONLY */}
      <AnimatePresence>
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6 }}
          className="absolute w-full h-full z-10"
        >
          {slides[active as keyof typeof slides]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
