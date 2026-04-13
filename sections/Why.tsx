"use client";

import SectionWrapper from "../components/SectionWrapper";
import { useEffect, useState } from "react";

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}</span>;
}

export default function Why() {
  return (
    <section className="relative min-h-screen flex items-center">

      {/* 🖼 Background Image */}
      <img
        src="/images/mall.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      <div className="relative z-10 w-full px-10 md:px-20">
        <h2 className="text-5xl mb-12">Why Dubai Mall</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-5xl font-bold">
              <Counter target={100} />M+
            </h3>
            <p className="text-gray-400">Visitors</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">
              <Counter target={1200} />+
            </h3>
            <p className="text-gray-400">Stores</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">
              <Counter target={59} />L+
            </h3>
            <p className="text-gray-400">Sq Ft</p>
          </div>

          <div>
            <h3 className="text-5xl font-bold">
              <Counter target={200} />+
            </h3>
            <p className="text-gray-400">Dining</p>
          </div>
        </div>
      </div>
    </section>
  );
}
