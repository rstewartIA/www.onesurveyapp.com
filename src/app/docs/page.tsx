import type { Metadata } from "next";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/marketing-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { MediaPlaceholder } from "@/components/marketing/media-placeholder";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "OneSurvey Help Center",
  description:
    "How to articles and training resources for surveys, floorplans, device libraries, and reports.",
};

const docSections = [
  {
    title: "Getting started",
    description: "Set up your organization, teams, and first survey templates.",
  },
  {
    title: "Survey capture",
    description: "Collect site data, photos, and notes with consistent steps.",
  },
  {
    title: "Floorplan editor",
    description: "Import plans, set scale, and place devices accurately.",
  },
  {
    title: "Device library",
    description: "Manage approved devices, parts, and accessories.",
  },
  {
    title: "Reporting",
    description: "Generate and export survey and installation reports.",
  },
  {
    title: "Account and roles",
    description: "Manage access, permissions, and user roles.",
  },
];

export default function DocsPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Help center"
        title="Get answers fast"
        subtitle="Step by step help for surveys, floorplans, and reporting." 
        primaryCta={{ label: "Contact support", href: "/contact" }}
        secondaryCta={{ label: "Book a demo", href: "/demo" }}
        media={
          <MediaPlaceholder
            label="Help center search"
            helper="Add a help center search UI or training screenshot."
          />
        }
      />

      <section className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Topics"
            title="Browse help topics"
            subtitle="Articles and training resources will live here once published."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {docSections.map((section) => (
              <div key={section.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-brand-primary">{section.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{section.description}</p>
                <Button asChild variant="outline" className="mt-4">
                  <Link href="/contact">Request article</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
