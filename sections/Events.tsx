"use client";

import SectionWrapper from "../components/SectionWrapper";
import { motion } from "framer-motion";

export default function Events() {
  const events = [
    {
      title: "Dubai Shopping Festival",
      desc: "World-class retail celebration with offers & shows",
    },
    {
      title: "Fashion Week",
      desc: "Global brands showcase latest trends",
    },
    {
      title: "Live Concerts",
      desc: "Entertainment from international artists",
    },
  ];

  return (
    <SectionWrapper>
      <h2 className="text-5xl mb-10">Events & Experiences</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {events.map((event) => (
          <motion.div
            key={event.title}
            whileHover={{ y: -10 }}
            className="border border-gray-700 p-8"
          >
            <h3 className="text-2xl mb-4">{event.title}</h3>
            <p className="text-gray-400">{event.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
