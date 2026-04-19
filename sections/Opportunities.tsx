"use client";

import SlideWrapper from "@/components/SlideWrapper";
import { motion } from "framer-motion";

export default function Opportunities() {
  return (
    <SlideWrapper>
      <div className="h-full flex items-center px-20">
        <div className="grid grid-cols-2 gap-10">
          {[
            "Retail Leasing",
            "Brand Partnerships",
            "Event Bookings",
            "Venue Monetization",
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="border border-white/20 p-8 rounded-xl"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
}       
