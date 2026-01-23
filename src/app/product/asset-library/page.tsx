import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing/marketing-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { FeatureCard } from "@/components/marketing/feature-card";
import { MediaPlaceholder } from "@/components/marketing/media-placeholder";
import { CtaBand } from "@/components/marketing/cta-band";

export const metadata: Metadata = {
  title: "Security Device Library and Catalog Management",
  description:
    "Build and manage a shared device library with categories, parts, and accessories for consistent security designs.",
};

const libraryFeatures = [
  {
    title: "Universal and company libraries",
    description: "Maintain a shared catalog and customize it for your organization.",
  },
  {
    title: "Categories and templates",
    description: "Organize devices by system type and reuse standard packages.",
  },
  {
    title: "Parts and accessories",
    description: "Track part numbers, accessories, and pricing details in one place.",
  },
  {
    title: "Mass updates",
    description: "Add or update device data in bulk when catalogs change.",
  },
  {
    title: "Duplicate and customize",
    description: "Clone devices and adjust specs without rebuilding from scratch.",
  },
  {
    title: "Project ready",
    description: "Apply the right devices to each project with consistent standards.",
  },
];

export default function AssetLibraryPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Asset library"
        title="Standardize devices and parts across every survey"
        subtitle="Keep a clean catalog of cameras, access control, intrusion, and more so your team uses the right equipment on every project."
        primaryCta={{ label: "Book a demo", href: "/demo" }}
        secondaryCta={{ label: "View features", href: "/product/features" }}
        media={
          <MediaPlaceholder
            label="Device library grid"
            helper="Add a screenshot of the library and category structure."
          />
        }
      />

      <section className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Library management"
            title="Keep standards consistent from survey to install"
            subtitle="Give every surveyor and designer access to the same approved device set."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {libraryFeatures.map((feature) => (
              <FeatureCard key={feature.title} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-5">
              <SectionHeading
                eyebrow="Templates"
                title="Speed up layouts with reusable device sets"
                subtitle="Bundle cameras, access control, and accessories into templates your team can drop into new projects."
              />
              <div className="grid gap-4">
                <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                  <h3 className="text-lg font-semibold text-brand-primary">Standard camera package</h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    Camera, mount, bracket, and cabling checklist that stays consistent across projects.
                  </p>
                </div>
                <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                  <h3 className="text-lg font-semibold text-brand-primary">Access control doorway kit</h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    Reader, strike, power, and accessories grouped for faster planning.
                  </p>
                </div>
              </div>
            </div>
            <MediaPlaceholder
              label="Template preview"
              helper="Insert a card view showing template contents."
              className="min-h-[280px]"
            />
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Ready to standardize"
        title="Bring your device catalog into OneSurvey"
        description="See how the library keeps surveys consistent and reduces spec errors."
        primaryCta={{ label: "Book a demo", href: "/demo" }}
        secondaryCta={{ label: "Contact sales", href: "/contact" }}
      />
    </MarketingShell>
  );
}
