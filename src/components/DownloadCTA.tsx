"use client";

import { motion } from "framer-motion";
import StoreButtons from "./StoreButtons";

export default function DownloadCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-candy-dark to-candy px-4 py-20 text-center text-cream">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-outline font-display text-3xl sm:text-5xl"
      >
        The beta is live. Go climb.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-auto mt-4 max-w-lg text-cream/90"
      >
        Join the beta today on iOS or Android — it&rsquo;s free, and your feedback shapes the game.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8"
      >
        <StoreButtons />
      </motion.div>
    </section>
  );
}
