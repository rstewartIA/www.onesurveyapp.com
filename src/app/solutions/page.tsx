import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing/marketing-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { SolutionCard } from "@/components/marketing/solution-card";
import { MediaPlaceholder } from "@/components/marketing/media-placeholder";
import { CtaBand } from "@/components/marketing/cta-band";

export const metadata: Metadata = {
  title: "OneSurvey Solutions for Security Teams",
  description:
    "Solutions for security integrators, facility managers, and enterprise teams that need accurate site surveys and documentation.",
};

const solutions = [
  {
    title: "Security integrators",
    description:
      "Speed up surveys, standardize device layouts, and deliver proposal ready reports.",
    href: "/solutions/security-integrators",
    accent: "blue" as const,
  },
  {
    title: "Facility managers",
    description:
      "Keep floorplans and device records current for maintenance and upgrades.",
    href: "/solutions/facility-managers",
    accent: "slate" as const,
  },
  {
    title: "Enterprise IT and operations",
    description:
      "Standardize multi site surveys and governance across teams.",
    href: "/solutions/enterprise-it-operations",
    accent: "sky" as const,
  },
];

export default function SolutionsPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Solutions"
        title="Solutions for teams that plan and manage security sites"
        subtitle="OneSurvey adapts to the workflows of integrators, low-voltage teams, facility managers, and enterprise operations groups."
        primaryCta={{ label: "Book a demo", href: "/demo" }}
        secondaryCta={{ label: "Talk to sales", href: "/contact" }}
        media={
          <MediaPlaceholder
            label="Solutions montage"
            helper="Add a three panel visual for integrators, facilities, and enterprise teams."
          />
        }
      />

      <section className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Use cases"
            title="Choose the workflow that fits your team"
            subtitle="Each solution aligns with how your organization surveys, designs, and documents security sites."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <SolutionCard
                key={solution.title}
                title={solution.title}
                description={solution.description}
                href={solution.href}
                accent={solution.accent}
              />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Find your fit"
        title="Talk with our team about your survey process"
        description="We will help you map OneSurvey to your workflow and reporting needs."
        primaryCta={{ label: "Book a demo", href: "/demo" }}
        secondaryCta={{ label: "Contact sales", href: "/contact" }}
      />
    </MarketingShell>
  );
}
