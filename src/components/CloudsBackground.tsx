"use client";

import { motion } from "framer-motion";

type Cloud = {
  top: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
};

const CLOUDS: Cloud[] = [
  { top: "8%", size: 140, duration: 38, delay: 0, opacity: 0.9 },
  { top: "22%", size: 90, duration: 28, delay: -8, opacity: 0.75 },
  { top: "48%", size: 170, duration: 46, delay: -20, opacity: 0.6 },
  { top: "65%", size: 110, duration: 32, delay: -4, opacity: 0.8 },
  { top: "85%", size: 130, duration: 40, delay: -16, opacity: 0.55 },
];

function CloudShape({ size, opacity }: { size: number; opacity: number }) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 200 120"
      fill="white"
      style={{ opacity }}
    >
      <ellipse cx="60" cy="70" rx="55" ry="35" />
      <ellipse cx="110" cy="55" rx="65" ry="45" />
      <ellipse cx="155" cy="75" rx="45" ry="30" />
    </svg>
  );
}

export default function CloudsBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {CLOUDS.map((cloud, i) => (
        <motion.div
          key={i}
          className="absolute -left-40"
          style={{ top: cloud.top }}
          initial={{ x: 0 }}
          animate={{ x: "calc(100vw + 300px)" }}
          transition={{
            duration: cloud.duration,
            delay: cloud.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <CloudShape size={cloud.size} opacity={cloud.opacity} />
        </motion.div>
      ))}
    </div>
  );
}
