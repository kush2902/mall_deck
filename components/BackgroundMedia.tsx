"use client";

export default function BackgroundMedia({
  video,
  image,
}: {
  video?: string;
  image?: string;
}) {
  return (
    <div className="absolute inset-0 z-[-1] overflow-hidden">

      {video && (
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105 animate-zoom"
        />
      )}

      {image && (
        <img
          src={image}
          className="w-full h-full object-cover scale-105 animate-zoom"
        />
      )}

    </div>
  );
}
