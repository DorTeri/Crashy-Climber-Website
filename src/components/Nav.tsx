"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-4 border-stone-dark/10 bg-cream/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="/assets/logo.png"
            alt="Crashy Climber logo"
            width={48}
            height={48}
            className="rounded-xl shadow-md"
            priority
          />
          <span className="font-display text-lg text-sky-dark sm:text-xl">
            Crashy Climber
          </span>
        </Link>

        <nav className="hidden items-center gap-6 sm:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-sky-dark/80 transition hover:text-candy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 sm:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-1 w-7 rounded-full bg-sky-dark" />
          <span className="h-1 w-7 rounded-full bg-sky-dark" />
          <span className="h-1 w-7 rounded-full bg-sky-dark" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden sm:hidden"
          >
            <div className="flex flex-col gap-3 px-4 pb-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-display text-sky-dark"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
