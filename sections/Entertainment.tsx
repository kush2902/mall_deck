"use client";

import SlideWrapper from "../components/SlideWrapper";
import BackgroundMedia from "../components/BackgroundMedia";
import BackToHub from "../components/BackToHub";
import { motion } from "framer-motion";

export default function Entertainment() {
  return (
    <SlideWrapper>
      <BackToHub />
      <BackgroundMedia video="/videos/events.mp4" />

      <div className="relative z-10 h-full flex items-center px-20 justify-between">

        <div className="max-w-xl">
          <motion.h2 className="text-5xl font-bold">
            Entertainment
          </motion.h2>

          <motion.p className="mt-6 text-lg opacity-80">
            World-class attractions, events, and immersive experiences
            driving continuous engagement.
          </motion.p>

          <div className="mt-10 flex gap-10 text-sm uppercase">
            <div>
              <p className="text-2xl font-bold">Aquarium</p>
              <p className="opacity-60">Attraction</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Ice Rink</p>
              <p className="opacity-60">Experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Cinema</p>
              <p className="opacity-60">Complex</p>
            </div>
          </div>
        </div>

        <div className="w-[400px] h-[280px] rounded-xl overflow-hidden">
          <video
            src="/video/events.mp4"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </SlideWrapper>
  );
}
