"use client";

import SlideWrapper from "../components/SlideWrapper";
import BackgroundMedia from "../components/BackgroundMedia";
import BackToHub from "../components/BackToHub";
import { motion } from "framer-motion";

export default function Why() {
  return (
    <SlideWrapper>
      <BackToHub setActive={setActive} />
      <BackgroundMedia image="/images/why.jpg" />

      <div className="relative z-10 h-full flex items-center px-20">
        <div className="max-w-2xl">

          <motion.h2 className="text-5xl font-bold">
            Why Dubai Mall
          </motion.h2>

          <motion.p className="mt-6 text-lg opacity-80">
            A global destination combining tourism, luxury retail,
            and unmatched consumer footfall.
          </motion.p>

          <div className="mt-10 flex gap-10 text-sm uppercase">
            <div>
              <p className="text-2xl font-bold">100M+</p>
              <p className="opacity-60">Visitors</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Global</p>
              <p className="opacity-60">Hub</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Luxury</p>
              <p className="opacity-60">Market</p>
            </div>
          </div>

        </div>
      </div>
    </SlideWrapper>
  );
}
