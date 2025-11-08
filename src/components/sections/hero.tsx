import Link from "next/link";
import { cn } from "@/lib/utils";

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  highlights: Array<{ label: string; value: string }>;
};

export function HeroSection({ eyebrow, title, subtitle, highlights }: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-900/40 via-slate-900 to-slate-950 px-8 pb-12 pt-16 shadow-2xl">
      <div className="mx-auto max-w-4xl text-center">
        {eyebrow && (
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-lg text-slate-200">{subtitle}</p>
        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="rounded-full bg-cyan-400 px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-cyan-300"
          >
            Book a demo
          </Link>
          <Link
            href="/resources"
            className="rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:border-white/60"
          >
            Download checklist
          </Link>
        </div>
        <dl className="mt-10 grid gap-6 text-left text-sm text-slate-300 sm:grid-cols-3">
          {highlights.map((highlight) => (
            <div key={highlight.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <dt className="text-xs uppercase tracking-wide text-slate-400">
                {highlight.label}
              </dt>
              <dd className="mt-2 text-2xl font-semibold text-white">{highlight.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div
        className={cn(
          "absolute inset-0 -z-10 opacity-30",
          "bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.4),_transparent_60%)]"
        )}
      />
    </section>
  );
}
