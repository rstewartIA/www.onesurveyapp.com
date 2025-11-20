import Link from "next/link";
import { Button } from "@/components/ui/button";

type CTA = { label: string; href: string };

type HeroSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta: CTA;
  secondaryCta?: CTA;
};

export function HeroSection({ eyebrow, title, subtitle, primaryCta, secondaryCta }: HeroSectionProps) {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-white to-[#F7F9FC] py-20 md:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-10 h-56 w-56 rounded-full bg-brand-accent/40 blur-3xl" />
        <div className="absolute right-1/4 bottom-10 h-72 w-72 rounded-full bg-brand-primary/20 blur-3xl" />
      </div>
      <div className="container relative mx-auto grid items-center gap-12 px-4 md:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="space-y-6">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-accent/30 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-brand-dark">
              {eyebrow}
              <span className="h-1 w-1 rounded-full bg-brand-dark" />
            </span>
          )}
          <h1 className="text-4xl font-semibold leading-tight text-brand-primary sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="max-w-2xl text-lg text-neutral-600">
            {subtitle}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="px-7 text-base font-semibold bg-brand-primary text-white shadow-md shadow-brand-primary/15 hover:bg-brand-secondary"
            >
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
            {secondaryCta && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="px-7 text-base font-semibold border-neutral-200 text-brand-primary hover:border-brand-primary hover:bg-brand-accent/20"
              >
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4 text-sm text-neutral-600 sm:grid-cols-3">
            <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
              <div className="text-xs font-semibold uppercase text-brand-primary">Faster surveys</div>
              <div className="text-2xl font-semibold text-neutral-900">30–50%</div>
              <p className="text-xs text-neutral-500">faster site surveys</p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
              <div className="text-xs font-semibold uppercase text-brand-primary">Platform uptime</div>
              <div className="text-2xl font-semibold text-neutral-900">99.9%</div>
              <p className="text-xs text-neutral-500">platform uptime</p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm sm:col-span-1">
              <div className="text-xs font-semibold uppercase text-brand-primary">Used across</div>
              <div className="text-2xl font-semibold text-neutral-900">60+</div>
              <p className="text-xs text-neutral-500">locations and teams</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative h-full min-h-[320px] rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-lg shadow-brand-primary/10">
            <div className="absolute inset-0 -z-10 translate-x-5 translate-y-5 rounded-3xl bg-gradient-to-br from-brand-primary/20 via-brand-secondary/15 to-brand-accent/40 blur-2xl" />
            <div className="flex h-full flex-col justify-between gap-4">
              <div className="flex items-center justify-between">
                <div className="h-10 w-10 rounded-lg bg-brand-primary/10" />
                <div className="flex gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-primary/60" />
                  <span className="h-2 w-2 rounded-full bg-brand-secondary/60" />
                  <span className="h-2 w-2 rounded-full bg-brand-accent/60" />
                </div>
              </div>
              <div className="rounded-xl border border-dashed border-brand-primary/30 bg-brand-accent/20 p-6">
                <div className="mb-3 h-10 w-32 rounded-lg bg-white/70" />
                <div className="grid gap-2 sm:grid-cols-3">
                  <div className="h-16 rounded-lg bg-white/80" />
                  <div className="h-16 rounded-lg bg-white/80" />
                  <div className="h-16 rounded-lg bg-white/80" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-3 w-3/4 rounded-full bg-brand-primary/20" />
                <div className="h-3 w-2/3 rounded-full bg-brand-primary/10" />
                <div className="h-3 w-1/2 rounded-full bg-brand-primary/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
