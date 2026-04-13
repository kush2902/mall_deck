"use client";

import SectionWrapper from "../components/SectionWrapper";

export default function Entertainment() {
  const items = [
    { name: "Aquarium", img: "/images/aquarium.jpg" },
    { name: "Ice Rink", img: "/images/ice.jpg" },
    { name: "VR Park", img: "/images/vr.jpg" },
  ];

  return (
    <SectionWrapper>
      <h2 className="text-5xl mb-8">Beyond Shopping</h2>

      <p className="max-w-2xl text-gray-400 mb-10">
        Attractions that turn visitors into lifelong audiences.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.name}
            className="relative h-72 bg-cover bg-center group"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />
            <div className="absolute bottom-4 left-4 text-xl">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>



<section className="relative h-screen">
  {/* 🎥 Background Video */}
  <video
    autoPlay
    muted
    loop
    className="absolute w-full h-full object-cover"
  >
    <source src="/videos/entertainment.mp4" />
  </video>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60" />

  {/* Content */}
  <div className="relative z-10 flex items-center justify-center h-full">
    <h2 className="text-5xl">Entertainment Like Never Before</h2>
  </div>
</section>   
  );
}
