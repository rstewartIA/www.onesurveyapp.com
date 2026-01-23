import Link from "next/link";
import Image from "next/image";
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
              <div className="text-xs font-semibold uppercase text-brand-primary">Survey consistency</div>
              <div className="text-2xl font-semibold text-neutral-900">TBD</div>
              <p className="text-xs text-neutral-500">Add a verified metric</p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
              <div className="text-xs font-semibold uppercase text-brand-primary">Proposal speed</div>
              <div className="text-2xl font-semibold text-neutral-900">TBD</div>
              <p className="text-xs text-neutral-500">Add a verified metric</p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm sm:col-span-1">
              <div className="text-xs font-semibold uppercase text-brand-primary">Fewer re visits</div>
              <div className="text-2xl font-semibold text-neutral-900">TBD</div>
              <p className="text-xs text-neutral-500">Add a verified metric</p>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-[600px] aspect-[4/3]">
            <Image
              src="/tablet-survey-page.png"
              alt="Tablet survey page"
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 600px, 100vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

