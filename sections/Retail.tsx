"use client";

import SlideWrapper from "../components/SlideWrapper";
import BackgroundMedia from "../components/BackgroundMedia";
import { motion } from "framer-motion";

export default function Retail() {
  return (
   <SlideWrapper>
      {/* BACKGROUND IMAGE */}
      <BackgroundMedia image="/images/retail.jpg" />


      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 h-full flex items-center px-20">
        <h2 className="text-5xl font-bold">Retail Excellence</h2>
      </div>
    </SlideWrapper>

     <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
  className="mt-10 flex gap-10 text-sm uppercase tracking-wider"
>
  <div>
    <p className="text-2xl font-bold">1200+</p>
    <p className="opacity-60">Stores</p>
  </div>

    <div>
    <p className="text-2xl font-bold">Flagship</p>
    <p className="opacity-60">Brands</p>
  </div>
    
  <div>
    <p className="text-2xl font-bold">Luxuary</p>
    <p className="opacity-60">Anchors</p>
  </div>
</motion.div>
    
  );
}
