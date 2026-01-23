import Link from "next/link";
import { Button } from "@/components/ui/button";

type CTA = { label: string; href: string };

type CtaBandProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta: CTA;
  secondaryCta?: CTA;
};

export function CtaBand({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_35%)]" />
      <div className="container relative mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div className="space-y-4">
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-accent">{eyebrow}</p>
            )}
            <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
            <p className="text-lg text-brand-accent">{description}</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-brand-primary hover:bg-brand-accent/60"
              >
                <Link href={primaryCta.href}>{primaryCta.label}</Link>
              </Button>
              {secondaryCta && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/70 bg-white/15 text-white hover:border-white/80 hover:bg-white/25"
                >
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              )}
            </div>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur">
            <div className="space-y-3 text-sm text-brand-accent">
              <div className="flex items-center justify-between rounded-xl border border-white/15 bg-white/10 p-4">
                <div>
                  <p className="text-xs uppercase tracking-wide text-white/80">OneSurvey</p>
                  <p className="text-lg font-semibold text-white">{title}</p>
                </div>
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs text-white">Live</span>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/10 p-4">
                <div className="h-2 w-3/4 rounded-full bg-white/50" />
                <div className="mt-2 h-2 w-1/2 rounded-full bg-white/40" />
                <div className="mt-2 h-2 w-5/6 rounded-full bg-white/30" />
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="h-16 rounded-lg bg-white/10" />
                <div className="h-16 rounded-lg bg-white/10" />
                <div className="h-16 rounded-lg bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
