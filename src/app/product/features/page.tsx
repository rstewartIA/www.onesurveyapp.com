import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing/marketing-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { FeatureCard } from "@/components/marketing/feature-card";
import { MediaPlaceholder } from "@/components/marketing/media-placeholder";
import { CtaBand } from "@/components/marketing/cta-band";

export const metadata: Metadata = {
  title: "OneSurvey Features - Security Site Survey Software",
  description:
    "Explore survey capture, floorplan design, device library, photo documentation, and reporting features built for security system integrators.",
};

const surveyFeatures = [
  {
    title: "Guided survey checklists",
    description: "Standardize what every technician captures during site walks.",
  },
  {
    title: "Required fields",
    description: "Reduce missing data with required prompts for key details.",
  },
  {
    title: "Photo and note capture",
    description: "Attach images, notes, and labels to each device location.",
  },
];

const designFeatures = [
  {
    title: "Scaled floorplans",
    description: "Import plans and set scale to keep layouts accurate.",
  },
  {
    title: "Device placement",
    description: "Drag and drop cameras, access control, and other devices.",
  },
  {
    title: "Coverage views",
    description: "Show device coverage and orientation for design clarity.",
  },
];

const libraryFeatures = [
  {
    title: "Device catalog",
    description: "Maintain approved devices, parts, and accessories for consistent designs.",
  },
  {
    title: "Templates",
    description: "Reuse standard device packages across projects.",
  },
  {
    title: "Bulk updates",
    description: "Add or update device data at scale when catalogs change.",
  },
];

const reportingFeatures = [
  {
    title: "Survey summaries",
    description: "Produce clear reports for internal review or client handoff.",
  },
  {
    title: "Inventory exports",
    description: "Export device lists and installation details to spreadsheets.",
  },
  {
    title: "Photo reports",
    description: "Build photo based documentation for approvals or audits.",
  },
];

export default function FeaturesPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Features"
        title="Features built around how integrators survey and design"
        subtitle="OneSurvey brings survey capture, floorplan design, device libraries, and reporting together so every project starts with clean data."
        primaryCta={{ label: "Book a demo", href: "/demo" }}
        secondaryCta={{ label: "View pricing", href: "/pricing" }}
        media={
          <MediaPlaceholder
            label="Feature overview montage"
            helper="Replace with a combined view of survey, plan, and reports."
          />
        }
      />

      <section className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Survey"
            title="Capture complete site data in the field"
            subtitle="Standardize what gets collected so design and estimating teams can move fast."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {surveyFeatures.map((feature) => (
              <FeatureCard key={feature.title} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Design"
            title="Turn surveys into clear floorplan layouts"
            subtitle="Place devices on scaled plans and share layouts that clients understand."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {designFeatures.map((feature) => (
              <FeatureCard key={feature.title} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Device library"
            title="Keep device standards consistent"
            subtitle="Build a shared device library (element library) so every survey uses the right equipment and specs."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {libraryFeatures.map((feature) => (
              <FeatureCard key={feature.title} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Reporting"
            title="Deliver reports that win trust"
            subtitle="Send clear summaries, device inventories, and photo reports without manual cleanup."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reportingFeatures.map((feature) => (
              <FeatureCard key={feature.title} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <SectionHeading
                eyebrow="Quality check"
                title="Optional quality review (pilot)"
                subtitle="Run an optional automated review on installation photos to surface issues before handoff."
              />
              <p className="text-sm text-neutral-600">
                This capability is available as a pilot add on. Contact us if you want to include it in your workflow.
              </p>
            </div>
            <MediaPlaceholder
              label="Quality check preview"
              helper="Insert an analysis preview or review dashboard when approved."
              className="min-h-[260px]"
            />
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Ready to see more"
        title="Book a walkthrough with your team"
        description="We will tailor the demo to your survey process and reporting needs."
        primaryCta={{ label: "Book a demo", href: "/demo" }}
        secondaryCta={{ label: "Talk to sales", href: "/contact" }}
      />
    </MarketingShell>
  );
}
