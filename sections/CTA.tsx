"use client";

export default function CTA() {
  return (
    <div className="text-center py-40">
      <h2 className="text-5xl mb-8">Be Part of the Destination</h2>

      <div className="flex justify-center gap-6">
        <button className="px-10 py-4 bg-white text-black rounded-full hover:scale-105 transition">
          Lease Space
        </button>
        <button className="px-10 py-4 border border-white rounded-full hover:bg-white hover:text-black transition">
          Partner With Us
        </button>
      </div>
    </div>
  );
}
