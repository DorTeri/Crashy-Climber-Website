import { ReactNode } from "react";

export default function LegalPage({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="bg-cream px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-3xl text-sky-dark sm:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 text-sm text-stone-dark/70">{subtitle}</p>
        )}
        <div className="prose prose-headings:font-display prose-headings:text-sky-dark prose-a:text-candy-dark mt-8 max-w-none">
          {children}
        </div>
      </div>
    </section>
  );
}
