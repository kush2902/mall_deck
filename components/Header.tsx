"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${
        scrolled ? "bg-black/70 backdrop-blur-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-16">

        {/* Logo */}
        <h1 className="text-xl font-semibold tracking-widest">
          DUBAI MALL
        </h1>

        {/* Nav */}
        <nav className="hidden md:flex gap-10 text-sm">
          <a href="#why" className="hover:text-gray-300 transition">Why</a>
          <a href="#retail" className="hover:text-gray-300 transition">Retail</a>
          <a href="#entertainment" className="hover:text-gray-300 transition">Entertainment</a>
          <a href="#events" className="hover:text-gray-300 transition">Events</a>
        </nav>

      </div>
    </header>
  );
}
