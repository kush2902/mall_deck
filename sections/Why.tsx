"use client";

import SectionWrapper from "../components/SectionWrapper";

export default function Why() {
  const stats = [
    { value: "100M+", label: "Annual Visitors" },
    { value: "1200+", label: "Retail Stores" },
    { value: "5.9M sq ft", label: "Retail Space" },
    { value: "200+", label: "Dining Options" },
  ];

  return (
    <SectionWrapper>
      <h2 className="text-5xl mb-12">Why Dubai Mall</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((s, i) => (
          <div key={i} className="group">
            <h3 className="text-5xl font-bold group-hover:scale-110 transition">
              {s.value}
            </h3>
            <p className="text-gray-400 mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
