import type { Metadata } from "next";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/marketing-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { MediaPlaceholder } from "@/components/marketing/media-placeholder";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "OneSurvey Documentation",
  description:
    "Access the OneSurvey documentation site for setup guides, workflow instructions, and release notes.",
};

export default function DocsPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Documentation"
        title="OneSurvey documentation lives in a dedicated site"
        subtitle="Open the external documentation hub for setup guides, workflow walkthroughs, and release updates."
        primaryCta={{
          label: "Open documentation",
          href: "https://rstewartia.github.io/OneSurvey-Docs/",
          target: "_blank",
          rel: "noreferrer",
        }}
        secondaryCta={{ label: "Contact support", href: "/contact" }}
        media={
          <MediaPlaceholder
            label="Documentation preview"
            helper="Insert a screenshot of the external docs site."
          />
        }
      />

      <section className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What is inside"
            title="Documentation topics"
            subtitle="The external docs cover the full survey lifecycle, from kickoff to reporting."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Getting started",
                description: "Setup checklists, onboarding tips, and team configuration guidance.",
              },
              {
                title: "Survey capture",
                description: "Field workflows, photo standards, and checklist best practices.",
              },
              {
                title: "Floorplan and design",
                description: "Scaling plans, placing devices, and managing revision history.",
              },
              {
                title: "Device library",
                description: "Approved hardware lists, part numbers, and product tagging.",
              },
              {
                title: "Reporting and exports",
                description: "Proposal-ready summaries, device schedules, and PDFs.",
              },
              {
                title: "Account management",
                description: "Roles, permissions, and workspace settings.",
              },
            ].map((section) => (
              <div key={section.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-brand-primary">{section.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{section.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-start gap-3 rounded-2xl border border-brand-accent/40 bg-brand-accent/10 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-brand-primary">Open the documentation hub</p>
              <p className="mt-1 text-sm text-neutral-600">
                You will be taken to the external documentation site in a new tab.
              </p>
            </div>
            <Button asChild className="bg-brand-primary text-white hover:bg-brand-secondary">
              <a
                href="https://rstewartia.github.io/OneSurvey-Docs/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2"
              >
                Open documentation
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17l10-10" />
                  <path d="M10 7h7v7" />
                </svg>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
