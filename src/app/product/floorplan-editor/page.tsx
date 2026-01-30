import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing/marketing-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { FeatureCard } from "@/components/marketing/feature-card";
import { MediaPlaceholder } from "@/components/marketing/media-placeholder";
import { CtaBand } from "@/components/marketing/cta-band";

export const metadata: Metadata = {
  title: "Floorplan Editor for Security Device Layouts",
  description:
    "Import floorplans, set scale, and place security devices on accurate layouts with OneSurvey's floorplan editor.",
};

const editorFeatures = [
  {
    title: "Import and scale",
    description: "Upload floorplans and set real world measurements for accurate layouts.",
  },
  {
    title: "Draw and label",
    description: "Add walls, zones, labels, and notes directly on the plan.",
  },
  {
    title: "Place devices",
    description: "Drag devices from your library and align them to the space.",
  },
  {
    title: "Coverage views",
    description: "Show device coverage and orientation for clear design reviews.",
  },
  {
    title: "Filters and layers",
    description: "Filter by device type or status to focus on the right scope.",
  },
  {
    title: "Export plans",
    description: "Publish plan visuals in PDF for proposals and install handoff.",
  },
];

const reviewPoints = [
  "Use version history to keep revisions organized.",
  "Share plan updates with project leads and clients.",
  "Capture comments tied to specific devices or areas.",
];

export default function FloorplanEditorPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Floorplan editor"
        title="Design accurate security layouts on scaled floorplans"
        subtitle="Bring plans to life with accurate scale, device placement, and coverage views built for security design reviews."
        primaryCta={{ label: "Book a demo", href: "/demo" }}
        secondaryCta={{ label: "View product", href: "/product" }}
        media={
          <MediaPlaceholder
            label="Floorplan editor screenshot"
            helper="Add a plan view with devices and coverage overlays."
          />
        }
      />

      <section className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="The tools teams need for clear plan reviews"
            subtitle="Reduce back and forth by building layouts that communicate scope and intent." 
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {editorFeatures.map((feature) => (
              <FeatureCard key={feature.title} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <MediaPlaceholder
              label="Plan review workflow"
              helper="Insert a before and after example showing layout clarity."
              className="min-h-[320px]"
            />
            <div className="space-y-5">
              <SectionHeading
                eyebrow="Reviews"
                title="Keep approvals moving"
                subtitle="Share updates without losing track of what changed or who approved it."
              />
              <ul className="space-y-3 text-sm text-neutral-600">
                {reviewPoints.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Bring your plans to life"
        title="See the editor with your own floorplan"
        description="Schedule a demo and we will walk through a layout using a real plan from your team."
        primaryCta={{ label: "Book a demo", href: "/demo" }}
        secondaryCta={{ label: "Contact sales", href: "/contact" }}
      />
    </MarketingShell>
  );
}
