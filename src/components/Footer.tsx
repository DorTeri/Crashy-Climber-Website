import Link from "next/link";
import { FOOTER_LINKS, SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t-4 border-stone-dark/10 bg-sky-dark text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-lg">{SITE.name}</p>
          <p className="text-sm text-cream/70">
            &copy; {new Date().getFullYear()} {SITE.studio}. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-cream/85 underline-offset-4 transition hover:text-gold hover:underline"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`mailto:${SITE.contactEmail}`}
            className="text-sm text-cream/85 underline-offset-4 transition hover:text-gold hover:underline"
          >
            {SITE.contactEmail}
          </a>
        </nav>
      </div>
    </footer>
  );
}
