import type { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type CTA = { label: string; href: string; target?: string; rel?: string };

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
  supportingText?: string;
  media?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  supportingText,
  media,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#F7F9FC] py-20 md:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-12 h-56 w-56 rounded-full bg-brand-accent/40 blur-3xl" />
        <div className="absolute right-1/4 bottom-12 h-72 w-72 rounded-full bg-brand-primary/20 blur-3xl" />
      </div>
      <div className="container relative mx-auto grid items-center gap-12 px-4 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
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
          <p className="max-w-2xl text-lg text-neutral-600">{subtitle}</p>
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              {primaryCta && (
                <Button
                  asChild
                  size="lg"
                  className="px-7 text-base font-semibold bg-brand-primary text-white shadow-md shadow-brand-primary/15 hover:bg-brand-secondary"
                >
                  <Link
                    href={primaryCta.href}
                    target={primaryCta.target}
                    rel={primaryCta.target === "_blank" ? primaryCta.rel ?? "noreferrer" : primaryCta.rel}
                  >
                    {primaryCta.label}
                  </Link>
                </Button>
              )}
              {secondaryCta && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="px-7 text-base font-semibold border-neutral-200 text-brand-primary hover:border-brand-primary hover:bg-brand-accent/20"
                >
                  <Link
                    href={secondaryCta.href}
                    target={secondaryCta.target}
                    rel={secondaryCta.target === "_blank" ? secondaryCta.rel ?? "noreferrer" : secondaryCta.rel}
                  >
                    {secondaryCta.label}
                  </Link>
                </Button>
              )}
            </div>
          )}
          {supportingText && <p className="text-sm text-neutral-500">{supportingText}</p>}
        </div>
        <div className="relative">
          <div className="relative min-h-[280px] rounded-2xl border border-neutral-200 bg-white/70 p-6 shadow-lg shadow-brand-primary/10">
            <div className="absolute inset-0 -z-10 translate-x-5 translate-y-5 rounded-3xl bg-gradient-to-br from-brand-primary/20 via-brand-secondary/15 to-brand-accent/40 blur-2xl" />
            <div className="flex h-full items-center justify-center">
              {media ?? (
                <div className="flex h-full w-full flex-col items-center justify-center rounded-xl border border-dashed border-neutral-300 bg-white/60 p-6 text-center">
                  <p className="text-sm font-semibold text-neutral-600">Image placeholder</p>
                  <p className="mt-2 text-xs text-neutral-400">Add approved product or workflow visuals here.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
