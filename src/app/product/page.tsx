import type { Metadata } from "next";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/marketing-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { FeatureCard } from "@/components/marketing/feature-card";
import { MediaPlaceholder } from "@/components/marketing/media-placeholder";
import { CtaBand } from "@/components/marketing/cta-band";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "OneSurvey Product - Security Site Survey and Floorplan Design",
  description:
    "OneSurvey brings security site surveys, floorplan design, device libraries, and reporting into one workspace for integrators and facilities teams.",
};

const moduleHighlights = [
  {
    title: "Survey capture",
    description:
      "Use checklists, required fields, photos, and notes to capture consistent security site data during every walkthrough.",
  },
  {
    title: "Floorplan editor",
    description:
      "Import plans, set scale, draw walls and zones, and place devices on accurate layouts.",
  },
  {
    title: "Device library (element library)",
    description:
      "Keep a standard catalog of approved devices, parts, and accessories for every team and location.",
  },
  {
    title: "Photo documentation",
    description:
      "Organize field photos into shared galleries with clear labels and locations for easy review.",
  },
  {
    title: "Assignments and handoff",
    description:
      "Track tasks, status, and notes so nothing is missed between survey and install.",
  },
  {
    title: "Reporting and exports",
    description:
      "Generate survey summaries, inventories, and photo reports in PDF or spreadsheet formats.",
  },
];

const workflowSteps = [
  {
    title: "Survey",
    description: "Capture site conditions, photos, and device needs with consistent templates.",
  },
  {
    title: "Design",
    description: "Build layouts on scaled floorplans and confirm device placement with your team.",
  },
  {
    title: "Bid",
    description: "Package scope details and supporting visuals into a proposal-ready report.",
  },
  {
    title: "Install and service",
    description: "Track install status and keep documentation ready for future service work.",
  },
];

const collaborationPoints = [
  "Seat types and admin/user roles keep access aligned to responsibilities.",
  "Version history to keep revisions clear and approvals simple.",
  "Comments and notes tied to plans, devices, and photos.",
];

export default function ProductPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Product"
        title="Everything your team needs to survey, design, and document security sites"
        subtitle="OneSurvey brings floorplans, device libraries, field photos, and reports into one platform so teams deliver clear scope and accurate documentation."
        primaryCta={{ label: "Book a demo", href: "/demo" }}
        secondaryCta={{ label: "See features", href: "/product/features" }}
        supportingText="Built for security system integrators, site managers, and low-voltage teams."
        media={
          <MediaPlaceholder
            label="Product overview collage"
            helper="Replace with approved UI screenshots or a workflow visual."
          />
        }
      />

      <section className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Modules"
            title="A single workspace for surveys, designs, and reports"
            subtitle="Each module is designed to keep the field and office aligned so sites move from walkthrough to proposal without rework."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {moduleHighlights.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Workflow"
                title="Keep every phase on the same playbook"
                subtitle="Standardize the way teams move from site survey to install handoff with clear steps and shared context."
              />
              <div className="grid gap-4">
                {workflowSteps.map((step) => (
                  <div key={step.title} className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                    <h3 className="text-lg font-semibold text-brand-primary">{step.title}</h3>
                    <p className="mt-2 text-sm text-neutral-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <MediaPlaceholder
              label="Workflow diagram"
              helper="Insert a four-step visual showing survey, design, bid, and install."
              className="min-h-[360px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <MediaPlaceholder
              label="Team collaboration screenshot"
              helper="Add a view showing comments, approvals, or version history."
              className="min-h-[320px]"
            />
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Collaboration"
                title="Keep surveys and designs aligned across teams"
                subtitle="Make it easy for surveyors, designers, and site leads to stay on the same page without chasing updates."
              />
              <ul className="space-y-3 text-sm text-neutral-600">
                {collaborationPoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="bg-brand-primary text-white hover:bg-brand-secondary">
                <Link href="/product/reporting-exports">Explore reporting</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Next steps"
        title="See how OneSurvey fits your survey workflow"
        description="Schedule a walkthrough and we will tailor the demo around your typical site survey and proposal process."
        primaryCta={{ label: "Book a demo", href: "/demo" }}
        secondaryCta={{ label: "Talk to sales", href: "/contact" }}
      />
    </MarketingShell>
  );
}
