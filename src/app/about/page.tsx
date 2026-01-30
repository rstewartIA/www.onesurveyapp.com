import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing/marketing-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { MediaPlaceholder } from "@/components/marketing/media-placeholder";

export const metadata: Metadata = {
  title: "About OneSurvey - Security Site Survey Platform",
  description:
    "The story behind OneSurvey and our focus on the security integrator workflow.",
};

const milestones = [
  { year: "Year 1", detail: "Founded with a focus on survey consistency." },
  { year: "Year 2", detail: "Expanded floorplan and reporting workflows." },
  { year: "Year 3", detail: "Partnered with integrators across multiple regions." },
];

export default function AboutPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="About"
        title="Built around the way integrators work"
        subtitle="From field surveys to proposal-ready reports, OneSurvey is designed around real security project workflows."
        primaryCta={{ label: "Book a demo", href: "/demo" }}
        secondaryCta={{ label: "Careers", href: "/careers" }}
        media={
          <MediaPlaceholder
            label="Company timeline"
            helper="Add a timeline or historical photo montage."
          />
        }
      />

      <section className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Mission"
            title="Make site surveys faster and more reliable"
            subtitle="We help integrators collect clean data and deliver clear documentation for every project."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-secondary">{milestone.year}</p>
                <p className="mt-3 text-sm text-neutral-600">{milestone.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
