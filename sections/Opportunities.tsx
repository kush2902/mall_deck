"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Retail Leasing",
    desc: "Luxury, flagship, and pop-up opportunities in the world’s most visited destination.",
    img: "/images/retail.jpg",
  },
  {
    title: "Brand Partnerships",
    desc: "Collaborate through sponsorships, activations, and long-term brand presence.",
    img: "/images/partnership.jpg",
  },
  {
    title: "Event Bookings",
    desc: "Host concerts, product launches, and large-scale experiential events.",
    img: "/images/events.jpg",
  },
  {
    title: "Venue Modules",
    desc: "Performing Arts Centers, Expo halls, and premium modular spaces.",
    img: "/images/venue.jpg",
  },
];

export default function Opportunities() {
  return (
    <section className="min-h-screen px-10 md:px-20 py-20">
      <h2 className="text-5xl mb-16">Opportunities</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {items.map((item) => (
          <motion.div
            key={item.title}
            whileHover={{ scale: 1.03 }}
            className="relative h-80 rounded-xl overflow-hidden hover-zoom hover-lift"
          >
            <img
              src={item.img}
              className="absolute w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{item.desc}</p>

              {/* CTA */}
              <button className="mt-4 w-fit px-5 py-2 border border-white hover:bg-white hover:text-black transition">
                Enquire Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
