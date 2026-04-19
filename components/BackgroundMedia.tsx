"use client";

export default function BackgroundMedia({
  video,
  image,
}: {
  video?: string;
  image?: string;
}) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {video && (
        <video
          src={video}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />
      )}

      {image && !video && (
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* DEPTH GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
    </div>
  );
}
