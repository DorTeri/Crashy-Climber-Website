"use client";

import { motion } from "framer-motion";

const FEATURES = [
  {
    emoji: "🧗",
    title: "One-Tap Wall Climbing",
    body: "Bounce between walls with a single tap. Simple to pick up, brutal to master.",
    color: "bg-sky/25",
  },
  {
    emoji: "🌋",
    title: "Wild Zones",
    body: "Climb from Dirty Stone to Candy and more zones — each one faster and trickier.",
    color: "bg-candy/15",
  },
  {
    emoji: "🔥",
    title: "Combo Scoring",
    body: "Chain fast landings to build your combo multiplier and torch your high score.",
    color: "bg-gold/20",
  },
  {
    emoji: "🪙",
    title: "Coins & Skins",
    body: "Collect coins mid-run to unlock new looks for Crashy in the shop.",
    color: "bg-leaf/15",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-cream px-4 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl text-sky-dark sm:text-4xl"
        >
          Why you&rsquo;ll fall in love (repeatedly)
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`rounded-3xl border-b-4 border-stone-dark/10 p-6 text-left shadow-md ${f.color}`}
            >
              <div className="text-4xl">{f.emoji}</div>
              <h3 className="font-display mt-3 text-xl text-sky-dark">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-stone-dark/80">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
