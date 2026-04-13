"use client";

import SectionWrapper from "../components/SectionWrapper";
import { motion } from "framer-motion";

export default function Retail() {
  const brands = [
  { name: "Nike", img: "/images/nike.jpg" },
  { name: "Apple", img: "/images/apple.jpg" },
  { name: "Zara", img: "/images/zara.jpg" },
  { name: "Gucci", img: "/images/gucci.jpg" },
];

  return (
    <SectionWrapper>
      <h2 className="text-5xl mb-10">Retail Experience</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {brands.map((brand) => (
          <motion.div
            key={brand}
            whileHover={{ scale: 1.1 }}
            className="relative border border-gray-700 p-10 text-center cursor-pointer overflow-hidden"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition" />

            <h3 className="text-2xl font-semibold">{brand}</h3>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
