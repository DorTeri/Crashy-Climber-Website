"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CloudsBackground from "./CloudsBackground";
import StoreButtons from "./StoreButtons";
import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-deep via-sky to-cream pt-14 pb-24 text-center">
      <CloudsBackground />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, -1.5, 1.5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/assets/logo.png"
              alt="Crashy Climber"
              width={260}
              height={260}
              priority
              className="mx-auto rounded-[2.5rem] shadow-2xl ring-4 ring-cream/60"
            />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-outline font-display mt-8 text-4xl text-gold drop-shadow-[0_4px_0_rgba(13,59,102,0.5)] sm:text-6xl"
        >
          {SITE.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-5 max-w-2xl text-lg text-sky-dark/90 sm:text-xl"
        >
          {SITE.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8"
        >
          <StoreButtons />
        </motion.div>

        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          href="#trailer"
          className="mt-6 font-display text-sm text-sky-dark/70 underline-offset-4 hover:underline"
        >
          ↓ Watch the trailer
        </motion.a>
      </div>
    </section>
  );
}
