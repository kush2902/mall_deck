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
            key={brand.name}
            whileHover={{ scale: 1.05 }}
            className="relative h-64 overflow-hidden rounded-xl"
          >
            {/* 🖼 Image */}
            <img
              src={brand.img}
              className="absolute w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h3 className="text-2xl font-semibold">{brand.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
