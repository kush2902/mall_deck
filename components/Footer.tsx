"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-16 px-6 md:px-20">

      <div className="grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-white text-2xl mb-4">Dubai Mall</h2>
          <p className="text-sm">
            The world’s most visited retail and lifestyle destination.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer transition">Retail</li>
            <li className="hover:text-white cursor-pointer transition">Dining</li>
            <li className="hover:text-white cursor-pointer transition">Entertainment</li>
            <li className="hover:text-white cursor-pointer transition">Events</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white mb-4">Contact</h3>
          <p className="text-sm">Dubai, UAE</p>
          <p className="text-sm">info@dubaimall.com</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm">
        © 2026 Dubai Mall Experience
      </div>

    </footer>
  );
}
