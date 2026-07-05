import type { Metadata } from "next";
import StoreButtons from "@/components/StoreButtons";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Support — Crashy Climber",
};

const FAQS = [
  {
    q: "How do I play?",
    a: "Tap the left or right side of the screen to jump between walls. Time your jumps to dodge spikes and moving obstacles, and chain fast landings for a combo multiplier.",
  },
  {
    q: "I found a bug or the game crashed. What should I do?",
    a: "Sorry about that! Please email us with your device model, OS version, and what you were doing when it happened — screenshots or a screen recording help a lot.",
  },
  {
    q: "Can I get my best score or coins back after a reset?",
    a: "Crashy Climber is currently in beta, so updates may occasionally reset progress. We do our best to avoid this, but it can happen during beta testing.",
  },
  {
    q: "How do I request my data be deleted?",
    a: "Email us at the address below. See our Privacy Policy for details on what information is collected and how it's used.",
  },
  {
    q: "Where can I suggest a feature or a new zone?",
    a: "We'd love to hear it — send suggestions to the contact email below. Beta feedback directly shapes the game.",
  },
];

export default function SupportPage() {
  return (
    <section className="bg-cream px-4 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-display text-3xl text-sky-dark sm:text-4xl">
          Support
        </h1>
        <p className="mt-3 text-stone-dark/80">
          Stuck on a wall, found a bug, or just want to say hi? We&rsquo;re here to
          help.
        </p>

        <div className="mt-8 flex justify-center">
          <StoreButtons />
        </div>

        <div className="mt-12 space-y-4 text-left">
          {FAQS.map((faq) => (
            <div
              key={faq.q}
              className="rounded-2xl border-b-4 border-stone-dark/10 bg-sky/10 p-5 shadow-sm"
            >
              <h3 className="font-display text-lg text-sky-dark">{faq.q}</h3>
              <p className="mt-1 text-sm text-stone-dark/80">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-sky-dark px-6 py-8 text-cream">
          <p className="font-display text-xl">Still need help?</p>
          <p className="mt-2 text-cream/85">
            Email {SITE.studio} directly and we&rsquo;ll get back to you.
          </p>
          <a
            href={`mailto:${SITE.contactEmail}`}
            className="font-display mt-4 inline-block rounded-xl bg-gold px-6 py-3 text-sky-dark shadow-md transition hover:brightness-105"
          >
            {SITE.contactEmail}
          </a>
        </div>
      </div>
    </section>
  );
}
