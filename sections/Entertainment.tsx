"use client";

import SectionWrapper from "@/components/SectionWrapper";

export default function Entertainment() {
  return (
    <SectionWrapper>
      <h2 className="text-5xl mb-8">Beyond Shopping</h2>

      <p className="max-w-2xl text-gray-400 mb-10">
        Attractions that turn visitors into lifelong audiences.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {["Aquarium", "Ice Rink", "VR Park"].map((item) => (
          <div
            key={item}
            className="h-64 bg-gray-800 flex items-center justify-center text-xl"
          >
            {item}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
