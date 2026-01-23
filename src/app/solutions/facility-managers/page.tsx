import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing/marketing-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { FeatureCard } from "@/components/marketing/feature-card";
import { MediaPlaceholder } from "@/components/marketing/media-placeholder";
import { CtaBand } from "@/components/marketing/cta-band";

export const metadata: Metadata = {
  title: "Facility Security Asset and Floorplan Management",
  description:
    "Keep floorplans and security assets current, coordinate surveys, and maintain clear documentation across facilities.",
};

const facilityFeatures = [
  {
    title: "Accurate floorplans",
    description: "Keep plans current after renovations or layout changes.",
  },
  {
    title: "Asset records",
    description: "Track installed devices with photos and notes in one place.",
  },
  {
    title: "Audit readiness",
    description: "Provide documentation for compliance and safety reviews.",
  },
];

const benefits = [
  "Reduce time spent searching for old plans and photos.",
  "Share clean documentation with integrators and vendors.",
  "Keep a consistent record for future maintenance work.",
];

export default function FacilityManagersPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Facility managers"
        title="Keep floorplans and security assets current"
        subtitle="Centralize plans, device records, and photos so maintenance and upgrades stay on track."
        primaryCta={{ label: "Book a demo", href: "/demo" }}
        secondaryCta={{ label: "Talk to sales", href: "/contact" }}
        media={
          <MediaPlaceholder
            label="Facility overview"
            helper="Add a facility plan or asset dashboard screenshot."
          />
        }
      />

      <section className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="Stay prepared for upgrades and audits"
            subtitle="OneSurvey keeps security documentation organized for facilities teams."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {facilityFeatures.map((feature) => (
              <FeatureCard key={feature.title} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <MediaPlaceholder
              label="Asset record view"
              helper="Insert a device record card with photos and notes."
              className="min-h-[320px]"
            />
            <div className="space-y-5">
              <SectionHeading
                eyebrow="Benefits"
                title="Keep teams aligned with accurate records"
                subtitle="Make it easy to share current documentation with leadership and vendors."
              />
              <ul className="space-y-3 text-sm text-neutral-600">
                {benefits.map((item) => (
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
        eyebrow="Facility ready"
        title="Bring your documentation into OneSurvey"
        description="See how the platform keeps plans and assets organized for every site."
        primaryCta={{ label: "Book a demo", href: "/demo" }}
        secondaryCta={{ label: "Contact sales", href: "/contact" }}
      />
    </MarketingShell>
  );
}
