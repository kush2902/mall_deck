"use client";

import SlideWrapper from "../components/SlideWrapper";
import BackgroundMedia from "../components/BackgroundMedia";
import BackToHub from "../components/BackToHub";
import { motion } from "framer-motion";

export default function Brand() {
  return (
    <SlideWrapper>
      <BackToHub setActive={setActive} />

      {/* BACKGROUND VIDEO */}
      <BackgroundMedia video="/videos/store.mp4" />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-0" />

      <div className="relative z-10 h-full flex items-center justify-between px-20">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">

          {/* HEADLINE */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold leading-tight"
          >
            Own Attention <br /> at Scale
          </motion.h2>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg opacity-80"
          >
            Position your brand in front of 100M+ annual visitors
            in one of the world’s most premium retail destinations.
          </motion.p>

          {/* FACT STRIP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex gap-10 text-sm uppercase tracking-wider"
          >
            {[
              ["100M+", "Visitors"],
              ["Global", "Audience"],
              ["Premium", "Brands"],
              ["High", "Dwell Time"],
            ].map(([value, label], i) => (
              <div key={i}>
                <p className="text-2xl font-bold">{value}</p>
                <p className="opacity-60">{label}</p>
              </div>
            ))}
          </motion.div>

          {/* LOGO GRID — FIXED */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-6 mt-12"
          >
            {[
              "rolex.png",
              "apple.png",
              "chanel.png",
              "dior.png",
              "adidas.png",
              "lv.png",
            ].map((logo, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-md rounded-lg p-4 flex items-center justify-center
                           hover:bg-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]
                           transition-all duration-500 hover:scale-105"
              >
                <img
                  src={`/images/${logo}`}
                  className="h-10 object-contain brightness-0 invert opacity-80 hover:opacity-100 transition"
                />
              </div>
            ))}
          </motion.div>

        </div>

        {/* RIGHT VIDEO PANEL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="w-[520px] h-[340px] rounded-xl overflow-hidden shadow-2xl border border-white/10"
        >
          <video
            src="/videos/store.mp4"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover scale-105"
          />
        </motion.div>

      </div>
    </SlideWrapper>
  );
}
