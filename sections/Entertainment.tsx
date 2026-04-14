"use client";

export default function Entertainment() {
  return (
    <section
      id="entertainment"
      className="relative h-screen w-full overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/videos/entertainment.mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Entertainment Like Never Before
        </h2>

        <p className="text-gray-300 max-w-xl">
          From world-class cinemas to immersive attractions, Dubai Mall offers unforgettable experiences.
        </p>
      </div>
    </section>
  );
}
