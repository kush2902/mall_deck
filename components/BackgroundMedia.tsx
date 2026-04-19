"use client";

import { motion } from "framer-motion";

export default function BackgroundMedia({
  video,
  image,
}: {
  video?: string;
  image?: string;
}) {
  return (
    <>
      {/* VIDEO */}
      {video && (
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8, ease: "easeOut" }}
        >
          <source src={video} type="video/mp4" />
        </motion.video>
      )}

      {/* IMAGE */}
      {!video && image && (
        <motion.div
          className="absolute w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8 }}
        />
      )}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70" />
    </>
  );
}
