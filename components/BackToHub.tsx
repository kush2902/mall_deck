"use client";

export default function BackToHub() {
  const goHome = () => {
    window.dispatchEvent(new CustomEvent("goToSlide", { detail: 2 }));
  };

  return (
    <button
      onClick={goHome}
      className="absolute top-6 left-6 z-50 px-4 py-2 text-xs uppercase tracking-widest border border-white/30 bg-black/30 backdrop-blur-md hover:bg-white hover:text-black transition-all"
    >
      Back
    </button>
  );
}
