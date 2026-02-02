import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing/marketing-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { FeatureCard } from "@/components/marketing/feature-card";
import { MediaPlaceholder } from "@/components/marketing/media-placeholder";
import { CtaBand } from "@/components/marketing/cta-band";

export const metadata: Metadata = {
  title: "Enterprise Security Site Survey Standardization",
  description:
    "Standardize multi-site surveys and layouts with shared templates, governance, and reporting.",
};

const enterpriseFeatures = [
  {
    title: "Shared templates",
    description: "Use consistent survey and device standards across regions.",
  },
  {
    title: "Governance",
    description: "Control access and approvals with clear roles and history.",
  },
  {
    title: "Portfolio visibility",
    description: "Keep progress and documentation visible across sites.",
  },
];

const enterpriseOutcomes = [
  "Reduce variation across sites and contractors.",
  "Keep executive updates tied to accurate documentation.",
  "Support rollouts with consistent reporting packages.",
];

export default function EnterpriseOperationsPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Enterprise operations"
        title="Standardize multi site surveys and rollouts"
        subtitle="OneSurvey helps enterprise teams keep surveys and layouts consistent across every location."
        primaryCta={{ label: "Book a demo", href: "/demo" }}
        secondaryCta={{ label: "Talk to sales", href: "/contact" }}
        media={
          <MediaPlaceholder
            label="Multi site dashboard"
            helper="Add a portfolio or multi site view placeholder."
          />
        }
      />

      <section className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Standardization"
            title="Keep teams aligned across locations"
            subtitle="Set a consistent survey process and reporting format for every site."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {enterpriseFeatures.map((feature) => (
              <FeatureCard key={feature.title} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <MediaPlaceholder
              label="Executive reporting"
              helper="Insert a sample executive summary or dashboard."
              className="min-h-[320px]"
            />
            <div className="space-y-5">
              <SectionHeading
                eyebrow="Outcomes"
                title="Deliver consistent documentation at scale"
                subtitle="Make it easy to review site progress and scope across regions."
              />
              <ul className="space-y-3 text-sm text-neutral-600">
                {enterpriseOutcomes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Scale with confidence"
        title="See how OneSurvey supports multi site programs"
        description="Work with our team to standardize your survey workflow."
        primaryCta={{ label: "Book a demo", href: "/demo" }}
        secondaryCta={{ label: "Contact sales", href: "/contact" }}
      />
    </MarketingShell>
  );
}
