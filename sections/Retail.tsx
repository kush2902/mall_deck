"use client";

import { motion } from "framer-motion";

export default function Retail() {
  const brands = [
    { name: "Nike", img: "/images/nike.jpg" },
    { name: "Apple", img: "/images/apple.jpg" },
    { name: "Zara", img: "/images/zara.jpg" },
    { name: "Gucci", img: "/images/gucci.jpg" },
  ];

  return (
    <section id="retail" className="min-h-screen px-10 md:px-20 py-20">
      <h2 className="text-5xl mb-10">Retail Experience</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {brands.map((brand) => (
          <motion.div
            key={brand.name}
            whileHover={{ scale: 1.05 }}
            className="relative h-64 overflow-hidden rounded-xl hover-zoom hover-lift"
           >
            <img
              src={brand.img}
              className="absolute w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h3 className="text-2xl font-semibold">{brand.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
