"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxLayer({ children, speed = 0.3 }: any) {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 1000], [0, -speed * 300]);

  return <motion.div style={{ y }}>{children}</motion.div>;
}
