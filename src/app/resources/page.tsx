import type { Metadata } from "next";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/marketing-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { MediaPlaceholder } from "@/components/marketing/media-placeholder";
import { CtaBand } from "@/components/marketing/cta-band";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "OneSurvey Resources for Security Integrators",
  description:
    "Guides, checklists, and templates to improve site surveys, design quality, and proposal clarity.",
};

const resources = [
  {
    title: "Security site survey checklist",
    type: "Checklist",
    description: "A step by step checklist to keep surveys consistent across teams.",
  },
  {
    title: "Camera placement guide",
    type: "Guide",
    description: "Best practices for camera coverage and layout planning.",
  },
  {
    title: "Proposal ready reporting",
    type: "Guide",
    description: "How to turn survey data into clear scope documentation.",
  },
  {
    title: "Photo documentation tips",
    type: "Template",
    description: "A simple structure for organizing photos by area and device.",
  },
];

export default function ResourcesPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Resources"
        title="Resources for better security surveys"
        subtitle="Download guides and checklists that help field teams capture complete site data." 
        primaryCta={{ label: "Get the checklist", href: "/guides" }}
        secondaryCta={{ label: "Browse guides", href: "/guides" }}
        media={
          <MediaPlaceholder
            label="Resource library preview"
            helper="Replace with thumbnails of guides or checklists."
          />
        }
      />

      <section className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Featured"
            title="Popular resources"
            subtitle="Use these templates and guides to improve consistency across your surveys."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {resources.map((item) => (
              <div key={item.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-secondary">{item.type}</p>
                  <span className="text-xs text-neutral-400">Template</span>
                </div>
                <h3 className="mt-3 text-xl font-semibold text-brand-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{item.description}</p>
                <Button asChild variant="outline" className="mt-4">
                  <Link href="/contact">Request access</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="space-y-4">
              <SectionHeading
                eyebrow="Content pillars"
                title="Guides for each phase"
                subtitle="Explore resources for survey capture, floorplan design, proposal prep, and install handoff."
              />
              <div className="grid gap-3">
                <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                  <p className="text-sm font-semibold text-brand-primary">Survey capture</p>
                  <p className="mt-1 text-xs text-neutral-600">Templates and checklists for field teams.</p>
                </div>
                <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                  <p className="text-sm font-semibold text-brand-primary">Design and layout</p>
                  <p className="mt-1 text-xs text-neutral-600">Floorplan standards and device placement guides.</p>
                </div>
                <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                  <p className="text-sm font-semibold text-brand-primary">Proposal and reporting</p>
                  <p className="mt-1 text-xs text-neutral-600">How to package scope and visuals for approval.</p>
                </div>
              </div>
            </div>
            <MediaPlaceholder
              label="Guide cover collage"
              helper="Insert resource cover art or download previews."
              className="min-h-[320px]"
            />
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Need something specific"
        title="Ask for a custom guide or template"
        description="Let us know what your team needs and we will share the right resource." 
        primaryCta={{ label: "Contact us", href: "/contact" }}
        secondaryCta={{ label: "Book a demo", href: "/demo" }}
      />
    </MarketingShell>
  );
}
