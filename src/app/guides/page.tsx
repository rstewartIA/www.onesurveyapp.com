import type { Metadata } from "next";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/marketing-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { MediaPlaceholder } from "@/components/marketing/media-placeholder";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Security Site Survey and Floorplan Design Guides",
  description:
    "Step by step guides for site surveys, device placement, and proposal ready reporting.",
};

const guides = [
  {
    title: "Security site survey checklist",
    description: "A field ready checklist for consistent data capture.",
  },
  {
    title: "Camera placement guide",
    description: "Tips for coverage, mounting, and layout planning.",
  },
  {
    title: "Access control layout guide",
    description: "Plan door hardware and reader placement with confidence.",
  },
  {
    title: "Proposal ready reporting",
    description: "Package plans and inventories into clean reports.",
  },
];

export default function GuidesPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Guides"
        title="Step by step guides for surveys and design"
        subtitle="Short, practical playbooks your team can use in the field and office."
        primaryCta={{ label: "Download a guide", href: "/contact" }}
        secondaryCta={{ label: "Book a demo", href: "/demo" }}
        media={
          <MediaPlaceholder
            label="Guide cover preview"
            helper="Replace with guide cover art once available."
          />
        }
      />

      <section className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Library"
            title="Download the playbooks"
            subtitle="These guides are available for integrator teams on request."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {guides.map((guide) => (
              <div key={guide.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-brand-primary">{guide.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{guide.description}</p>
                <Button asChild variant="outline" className="mt-4">
                  <Link href="/contact">Request guide</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
