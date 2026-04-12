"use client";

import SectionWrapper from "@/components/SectionWrapper";

export default function Retail() {
  return (
    <SectionWrapper>
      <h2 className="text-5xl mb-8">Retail Powerhouse</h2>

      <p className="max-w-2xl text-gray-400 mb-10">
        Home to global brands, flagship stores, and immersive retail experiences.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {["Nike", "Zara", "Apple", "Gucci"].map((brand) => (
          <div
            key={brand}
            className="border border-gray-700 p-8 text-center hover:bg-white hover:text-black transition"
          >
            {brand}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
