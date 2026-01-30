import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing/marketing-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { FeatureCard } from "@/components/marketing/feature-card";
import { MediaPlaceholder } from "@/components/marketing/media-placeholder";
import { CtaBand } from "@/components/marketing/cta-band";

export const metadata: Metadata = {
  title: "Security Survey Reporting and Exports",
  description:
    "Create survey summaries, device inventories, installation reports, and photo documentation in PDF and spreadsheet formats.",
};

const reportTypes = [
  {
    title: "Survey summaries",
    description: "Provide a clear overview of site conditions and device scope.",
  },
  {
    title: "Device inventories",
    description: "List devices, part numbers, and accessories for estimating and install.",
  },
  {
    title: "Installation status",
    description: "Track install fields and handoff notes in a structured report.",
  },
  {
    title: "Photo reports",
    description: "Package photos with labels and notes for approvals and audits.",
  },
  {
    title: "Floorplan exports",
    description: "Include plan visuals in proposal and handoff documentation.",
  },
  {
    title: "Spreadsheet exports",
    description: "Share data with estimating and operations teams.",
  },
];

export default function ReportingExportsPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Reporting"
        title="Turn site data into clear reports and scope packages"
        subtitle="Generate survey summaries, inventories, and photo reports that help clients and project teams make confident decisions."
        primaryCta={{ label: "Book a demo", href: "/demo" }}
        secondaryCta={{ label: "Explore resources", href: "/resources" }}
        media={
          <MediaPlaceholder
            label="Report preview"
            helper="Replace with a PDF or spreadsheet preview once approved."
          />
        }
      />

      <section className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Report types"
            title="Create the report your client needs"
            subtitle="Choose the right format for surveys, proposals, installs, and service handoffs."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reportTypes.map((report) => (
              <FeatureCard key={report.title} title={report.title} description={report.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="space-y-5">
              <SectionHeading
                eyebrow="Handoff"
                title="Deliver documentation teams trust"
                subtitle="Bring floorplans, photos, and device lists together for clear scope and approvals."
              />
              <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                <p className="text-sm text-neutral-600">
                  Add cover pages, summaries, and report titles that match the project and client.
                </p>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                <p className="text-sm text-neutral-600">
                  Keep a full record of survey and install details for service and future upgrades.
                </p>
              </div>
            </div>
            <MediaPlaceholder
              label="Report builder view"
              helper="Insert screenshots of the report configuration flow."
              className="min-h-[320px]"
            />
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Share with confidence"
        title="Generate your next proposal package faster"
        description="See how OneSurvey produces clean reports that help win and deliver projects."
        primaryCta={{ label: "Book a demo", href: "/demo" }}
        secondaryCta={{ label: "Contact sales", href: "/contact" }}
      />
    </MarketingShell>
  );
}
