import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing/marketing-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { FeatureCard } from "@/components/marketing/feature-card";
import { MediaPlaceholder } from "@/components/marketing/media-placeholder";
import { CtaBand } from "@/components/marketing/cta-band";

export const metadata: Metadata = {
  title: "Standardized Security Site Survey Workflow",
  description:
    "Use templates, required fields, and clear steps to capture consistent security site data across every technician.",
};

const workflowFeatures = [
  {
    title: "Survey templates",
    description: "Create standard checklists for cameras, access control, and intrusion devices.",
  },
  {
    title: "Required prompts",
    description: "Ensure key details are captured before a survey is complete.",
  },
  {
    title: "Photo and note capture",
    description: "Attach photos and notes to specific locations and devices.",
  },
  {
    title: "Assignment handoff",
    description: "Turn survey findings into tasks with clear owners and status.",
  },
  {
    title: "Review and approval",
    description: "Share survey packages with leaders before design work begins.",
  },
  {
    title: "Consistent outputs",
    description: "Keep surveys uniform across sites, techs, and regions.",
  },
];

export default function SurveyAutomationPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Survey workflow"
        title="Standardize site surveys without slowing the field team"
        subtitle="Templates, required fields, and guided steps help every technician capture complete site data." 
        primaryCta={{ label: "Book a demo", href: "/demo" }}
        secondaryCta={{ label: "View product", href: "/product" }}
        media={
          <MediaPlaceholder
            label="Survey checklist view"
            helper="Add a screenshot showing checklists and required fields."
          />
        }
      />

      <section className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Consistency"
            title="Keep every survey on the same standard"
            subtitle="Reduce rework by collecting the same data on every walkthrough." 
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {workflowFeatures.map((feature) => (
              <FeatureCard key={feature.title} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <MediaPlaceholder
              label="Technician workflow"
              helper="Insert a photo of a field team using a tablet or laptop."
              className="min-h-[320px]"
            />
            <div className="space-y-5">
              <SectionHeading
                eyebrow="Field ready"
                title="Designed for real job sites"
                subtitle="Give technicians a clear workflow that keeps surveys moving and reduces missed details." 
              />
              <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                <p className="text-sm text-neutral-600">
                  Add instructions, expected photos, and device notes so the field team knows exactly what to capture.
                </p>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                <p className="text-sm text-neutral-600">
                  Use review steps to confirm survey completeness before design or estimating begins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Ready to standardize"
        title="Set your survey standard in OneSurvey"
        description="Let us show you how templates and guided steps improve survey quality and speed."
        primaryCta={{ label: "Book a demo", href: "/demo" }}
        secondaryCta={{ label: "Talk to sales", href: "/contact" }}
      />
    </MarketingShell>
  );
}
