"use client";

import { motion } from "framer-motion";
import { STORE_LINKS } from "@/lib/constants";

const tap = { scale: 0.95 };
const hover = { scale: 1.05, y: -2 };

export default function StoreButtons({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-4 ${className}`}>
      <motion.a
        whileHover={hover}
        whileTap={tap}
        href={STORE_LINKS.testflight}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-2xl border-b-4 border-sky-dark bg-sky px-6 py-3 font-display text-cream shadow-lg"
      >
        <AppleIcon />
        <span className="flex flex-col leading-tight text-left">
          <span className="text-[0.65rem] font-normal opacity-90">
            Join the beta on
          </span>
          <span>TestFlight</span>
        </span>
      </motion.a>

      <motion.a
        whileHover={hover}
        whileTap={tap}
        href={STORE_LINKS.googlePlay}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-2xl border-b-4 border-leaf-dark bg-leaf px-6 py-3 font-display text-cream shadow-lg"
      >
        <PlayIcon />
        <span className="flex flex-col leading-tight text-left">
          <span className="text-[0.65rem] font-normal opacity-90">
            Get it on
          </span>
          <span>Google Play</span>
        </span>
      </motion.a>
    </div>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden>
      <path d="M16.365 1.43c0 1.14-.462 2.16-1.212 2.9-.83.83-2.05 1.47-3.06 1.39-.13-1.1.42-2.24 1.19-2.98.83-.8 2.24-1.4 3.08-1.31zM20.1 17.2c-.55 1.27-.81 1.84-1.52 2.96-.99 1.56-2.39 3.5-4.12 3.51-1.54.02-1.93-1-4.02-.99-2.08.01-2.52 1.01-4.06.99-1.73-.02-3.06-1.77-4.05-3.32C-.28 16.5-.6 11.6 1.4 9.03c1.02-1.31 2.72-2.13 4.32-2.15 1.5-.02 2.62.98 4 .98 1.36 0 2.36-.97 4-.95 1.13.02 2.83.65 3.85 1.77-3.38 1.85-2.83 6.63.53 8.52z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden>
      <path d="M3.6 2.2c-.4.35-.6.85-.6 1.45v16.7c0 .6.2 1.1.6 1.45l.1.1L13.4 12 3.7 2.1zM16.8 9.5l-2.65-1.5-2.95 2.95L16.8 9.5zm-2.65 6.5 2.65-1.5-5.6-3.55zm3.9-4.85 2.9 1.65c.55.35.55 1.05 0 1.4l-2.9 1.65-3.05-3.05zM4.4 21.35c.25.1.55.05.85-.15l9.4-5.3-2.9-2.9z" />
    </svg>
  );
}
