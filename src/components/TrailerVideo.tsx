"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function TrailerVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <section id="trailer" className="bg-cream px-4 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl text-sky-dark sm:text-4xl"
        >
          See it in action
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative mt-8 overflow-hidden rounded-3xl border-8 border-stone shadow-2xl"
        >
          <video
            ref={videoRef}
            src="/assets/trailer.mp4"
            poster="/assets/screenshots/screenshot-2.png"
            className="aspect-video w-full bg-black"
            autoPlay
            muted
            loop
            playsInline
            controls
          />
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 rounded-full bg-stone-dark/80 px-4 py-2 font-display text-sm text-cream shadow-lg transition hover:bg-stone-dark"
          >
            {muted ? "🔇 Unmute" : "🔊 Mute"}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
