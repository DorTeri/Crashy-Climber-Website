"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { SCREENSHOTS } from "@/lib/constants";

export default function ScreenshotShowcase() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

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

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="relative mt-12"
      >
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {SCREENSHOTS.map((shot, i) => (
              <div
                key={shot.src}
                className="min-w-0 shrink-0 basis-[70%] px-3 sm:basis-[42%] lg:basis-[26%]"
              >
                <div
                  className="overflow-hidden rounded-[2rem] border-[6px] border-stone-dark bg-black shadow-xl transition-transform duration-300"
                  style={{
                    transform: i === selectedIndex ? "scale(1)" : "scale(0.92)",
                    opacity: i === selectedIndex ? 1 : 0.6,
                  }}
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={640}
                    height={1386}
                    className="h-auto w-full"
                    sizes="(max-width: 640px) 70vw, (max-width: 1024px) 42vw, 26vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          aria-label="Previous screenshot"
          onClick={scrollPrev}
          className="font-display absolute top-1/2 left-1 -translate-y-1/2 rounded-full bg-cream/90 p-3 text-xl text-sky-dark shadow-lg transition hover:bg-cream sm:left-4"
        >
          ‹
        </button>
        <button
          aria-label="Next screenshot"
          onClick={scrollNext}
          className="font-display absolute top-1/2 right-1 -translate-y-1/2 rounded-full bg-cream/90 p-3 text-xl text-sky-dark shadow-lg transition hover:bg-cream sm:right-4"
        >
          ›
        </button>
      </motion.div>

      <div className="mt-6 flex justify-center gap-2">
        {SCREENSHOTS.map((shot, i) => (
          <button
            key={shot.src}
            aria-label={`Go to screenshot ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === selectedIndex ? "w-7 bg-sky-dark" : "w-2.5 bg-sky-dark/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
