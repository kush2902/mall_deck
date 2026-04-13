"use client";

import SectionWrapper from "../components/SectionWrapper";
import { motion } from "framer-motion";

export default function Events() {
  const events = [
    {
      title: "Dubai Shopping Festival",
      img: "/images/event1.jpg",
    },
    {
      title: "Fashion Week",
      img: "/images/event2.jpg",
    },
    {
      title: "Live Concerts",
      img: "/images/event3.jpg",
    },
  ];

  return (
    <SectionWrapper>
      <h2 className="text-5xl mb-10">Events & Experiences</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {events.map((event) => (
          <motion.div
            key={event.title}
            whileHover={{ scale: 1.05 }}
            className="relative h-80 overflow-hidden rounded-xl"
          >
            {/* 🖼 Image */}
            <img
              src={event.img}
              className="absolute w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 flex items-end p-6">
              <h3 className="text-2xl font-semibold">{event.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
