import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing/marketing-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { FeatureCard } from "@/components/marketing/feature-card";
import { MediaPlaceholder } from "@/components/marketing/media-placeholder";
import { CtaBand } from "@/components/marketing/cta-band";

export const metadata: Metadata = {
  title: "Security Integrator Site Survey and Design Platform",
  description:
    "Speed up site surveys, standardize device layouts, and deliver proposal-ready reports built for integrators.",
};

const painPoints = [
  {
    title: "Inconsistent survey data",
    description: "Hand notes and photos leave gaps that slow estimating and design.",
  },
  {
    title: "Re visits and rework",
    description: "Missing details force extra trips or design revisions.",
  },
  {
    title: "Unclear scope",
    description: "Clients need clear visuals and documentation before approvals.",
  },
];

const outcomes = [
  {
    title: "Faster survey cycles",
    description: "Standard templates and device libraries keep surveys consistent.",
  },
  {
    title: "Clearer proposals",
    description: "Export plans and reports that clients can review quickly.",
  },
  {
    title: "Smooth handoffs",
    description: "Installation teams get the same data captured in the field.",
  },
];

export default function SecurityIntegratorsPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Security integrators"
        title="Win bids with fast, accurate site surveys"
        subtitle="Reduce rework and deliver clearer scope with scaled floorplans, device standards, and report-ready documentation for project managers, estimators, and low-voltage teams."
        primaryCta={{ label: "Book a demo", href: "/demo" }}
        secondaryCta={{ label: "See the workflow", href: "/product" }}
        media={
          <MediaPlaceholder
            label="Integrator workflow image"
            helper="Add a field team or planning session photo."
          />
        }
      />

      <section className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Challenges"
            title="Where integrators lose time"
            subtitle="OneSurvey removes friction in the survey and proposal workflow."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {painPoints.map((point) => (
              <FeatureCard key={point.title} title={point.title} description={point.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <MediaPlaceholder
              label="Integrator case study"
              helper="Insert a customer story or project snapshot."
              className="min-h-[320px]"
            />
            <div className="space-y-5">
              <SectionHeading
                eyebrow="Outcomes"
                title="A clearer path from survey to proposal"
                subtitle="Deliver reports and layouts that help clients approve faster."
              />
              <div className="grid gap-4">
                {outcomes.map((item) => (
                  <div key={item.title} className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                    <h3 className="text-lg font-semibold text-brand-primary">{item.title}</h3>
                    <p className="mt-2 text-sm text-neutral-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Integrator ready"
        title="See OneSurvey with your next project"
        description="Schedule a walkthrough tailored to your typical survey and proposal flow."
        primaryCta={{ label: "Book a demo", href: "/demo" }}
        secondaryCta={{ label: "Talk to sales", href: "/contact" }}
      />
    </MarketingShell>
  );
}
