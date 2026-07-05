"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SCREENSHOTS } from "@/lib/constants";

export default function ScreenshotShowcase() {
  return (
    <section id="screenshots" className="bg-sky/15 py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl text-sky-dark sm:text-4xl"
        >
          Five zones. One clumsy climber.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-3 max-w-xl text-sky-dark/80"
        >
          Swipe through the gameplay — from Dirty Stone to the Candy zone and beyond.
        </motion.p>
      </div>

      <div className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-[10vw] pb-6 sm:px-[15vw]">
        {SCREENSHOTS.map((shot, i) => (
          <motion.div
            key={shot.src}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            className="relative w-56 shrink-0 snap-center overflow-hidden rounded-[2rem] border-[6px] border-stone-dark bg-black shadow-xl sm:w-64"
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              width={640}
              height={1386}
              className="h-auto w-full"
              sizes="(max-width: 640px) 224px, 256px"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
