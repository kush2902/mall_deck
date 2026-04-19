"use client";

import SlideWrapper from "../components/SlideWrapper";
import BackgroundMedia from "../components/BackgroundMedia";
import BackToHub from "../components/BackToHub";
import { motion } from "framer-motion";

type Props = {
  setActive: (key: string) => void;
};

export default function Dining({ setActive }: Props) {
  return (
    <SlideWrapper>
      <BackToHub setActive={setActive} />
      <BackgroundMedia video="/videos/dining.mp4" />

      <div className="relative z-10 h-full flex items-center px-20 justify-between">

        {/* LEFT */}
        <div className="max-w-xl">
          <motion.h2 className="text-5xl font-bold">
            Dining Experience
          </motion.h2>

          <motion.p className="mt-6 text-lg opacity-80">
            From luxury fine dining to global food brands,
            a high-spend culinary ecosystem.
          </motion.p>

          <div className="mt-10 flex gap-10 text-sm uppercase">
            <div>
              <p className="text-2xl font-bold">200+</p>
              <p className="opacity-60">Brands</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Premium</p>
              <p className="opacity-60">Dining</p>
            </div>
            <div>
              <p className="text-2xl font-bold">High</p>
              <p className="opacity-60">Spend</p>
            </div>
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-2 gap-6">
          {["food1.jpg","food2.jpg","food3.jpg","food4.jpg"].map((img, i) => (
            <div
              key={i}
              className="w-40 h-52 rounded-xl bg-cover bg-center transition-all duration-500 hover:scale-110"
              style={{ backgroundImage: `url(/images/${img})` }}
            />
          ))}
        </div>

      </div>
    </SlideWrapper>
  );
}
