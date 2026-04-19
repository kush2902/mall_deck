"use client";

import SlideWrapper from "../components/SlideWrapper";
import BackgroundMedia from "../components/BackgroundMedia";
import BackToHub from "../components/BackToHub";
import { motion } from "framer-motion";

type Props = {
  setActive: (key: string) => void;
};

export default function Retail({ setActive }: Props) {
  return (
    <SlideWrapper>
      <BackToHub setActive={setActive} />
      <BackgroundMedia video="/videos/retail.mp4" />

      <div className="relative z-10 h-full flex items-center px-20">
        <div>

          <h2 className="text-5xl font-bold">
            Retail Leasing
          </h2>

          <p className="mt-6 text-lg opacity-80">
            Premium retail ecosystem with global luxury, flagship, and high-footfall brands.
          </p>

          {/* FACT STRIP */}
          <div className="mt-10 flex gap-10 text-sm uppercase">
            <div>
              <p className="text-2xl font-bold">1200+</p>
              <p className="opacity-60">Stores</p>
            </div>
            <div>
              <p className="text-2xl font-bold">100M+</p>
              <p className="opacity-60">Visitors</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Global</p>
              <p className="opacity-60">Luxury Brands</p>
            </div>
            <div>
              <p className="text-2xl font-bold">High</p>
              <p className="opacity-60">Conversion</p>
            </div>
          </div>

        </div>
      </div>
    </SlideWrapper>
  );
}
