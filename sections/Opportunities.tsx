"use client";

import { motion } from "framer-motion";

const data = [
  {
    title: "Retail Leasing",
    subtitle: "Luxury • Flagship • Pop-ups",
    desc: "Position your brand alongside global icons in the highest footfall destination in the world.",
    video: "/videos/retail.mp4",
  },
  {
    title: "Brand Partnerships",
    subtitle: "Sponsorships • Activations",
    desc: "Create unforgettable brand experiences through high-impact collaborations.",
    video: "/videos/partnership.mp4",
  },
  {
    title: "Event Bookings",
    subtitle: "Concerts • Launches • Corporate",
    desc: "Host large-scale events powered by world-class infrastructure and reach.",
    video: "/videos/events.mp4",
  },
  {
    title: "Venue Modules",
    subtitle: "PAC • Expo • Modular Spaces",
    desc: "Flexible, premium venues designed for global-scale productions.",
    video: "/videos/venue.mp4",
  },
];

export default function Opportunities() {
  return (
    <section className="bg-black text-white">

      {/* 🔥 INTRO */}
      <div className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Opportunities at Scale
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-6 text-gray-400 max-w-xl"
        >
          Unlock global visibility, premium audiences, and unmatched infrastructure.
        </motion.p>
      </div>

      {/* 🎬 MODULES */}
      {data.map((item, i) => (
        <div key={i} className="relative h-screen overflow-hidden">

          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full object-cover"
          >
            <source src={item.video} type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center px-10 md:px-20">

            <motion.h3
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold"
            >
              {item.title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-2 text-gray-300"
            >
              {item.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 max-w-xl text-gray-400"
            >
              {item.desc}
            </motion.p>

            {/* CTA */}
            <motion.a
              href="mailto:business@dubaimall.com"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-6 w-fit px-6 py-3 border border-white hover:bg-white hover:text-black transition"
            >
              Enquire Now
            </motion.a>

          </div>
        </div>
      ))}

      {/* 🚀 FINAL CTA */}
      <div className="py-32 text-center px-6">
        <h3 className="text-4xl font-semibold">
          Let’s Build Something Iconic
        </h3>
        <p className="text-gray-400 mt-4">
          Reach millions. Create impact. Define experiences.
        </p>

        <a
          href="mailto:business@dubaimall.com"
          className="inline-block mt-6 px-8 py-3 bg-white text-black hover:scale-105 transition"
        >
          Start a Conversation
        </a>
      </div>

    </section>
  );
}
