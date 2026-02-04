import type { Metadata } from "next";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/marketing-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { MediaPlaceholder } from "@/components/marketing/media-placeholder";
import { CtaBand } from "@/components/marketing/cta-band";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "OneSurvey Resources - Blog, Documentation, and FAQs",
  description:
    "Explore the OneSurvey blog, product documentation, and frequently asked questions to support survey teams.",
};

const resources = [
  {
    title: "Blog",
    type: "Insights",
    description: "Field tips, best practices, and stories from survey, design, and site teams.",
    href: "/blog",
    cta: "Visit the blog",
  },
  {
    title: "Documentation",
    type: "Product docs",
    description: "Setup guidance, workflows, and release notes hosted in our external docs.",
    href: "https://rstewartia.github.io/OneSurvey-Docs/",
    cta: "Open documentation",
    external: true,
  },
  {
    title: "FAQs",
    type: "Answers",
    description: "Quick answers to common questions about plans, pricing, and rollout support.",
    href: "/faqs",
    cta: "Read the FAQs",
  },
];

export default function ResourcesPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Resources"
        title="Resources that keep surveys moving"
        subtitle="Stay informed with the OneSurvey blog, product documentation, and frequently asked questions."
        primaryCta={{ label: "Read the blog", href: "/blog" }}
        secondaryCta={{ label: "Explore FAQs", href: "/faqs" }}
        media={
          <MediaPlaceholder
            label="Resource hub preview"
            helper="Show blog highlights, documentation, and help content."
          />
        }
      />

      <section className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Explore"
            title="Choose the resource that fits your need"
            subtitle="Jump into the content that helps your team move from survey to delivery."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {resources.map((item) => (
              <div key={item.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-secondary">{item.type}</p>
                <h3 className="mt-3 text-xl font-semibold text-brand-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{item.description}</p>
                <Button asChild variant="outline" className="mt-4">
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      {item.cta}
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
                  ) : (
                    <Link href={item.href}>{item.cta}</Link>
                  )}
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
                eyebrow="What you will find"
                title="Guidance for every stage"
                subtitle="The resource hub keeps you connected to best practices, how to instructions, and answers."
              />
              <div className="grid gap-3">
                <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                  <p className="text-sm font-semibold text-brand-primary">Blog insights</p>
                  <p className="mt-1 text-xs text-neutral-600">Weekly tips for survey capture, design, and reporting.</p>
                </div>
                <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                  <p className="text-sm font-semibold text-brand-primary">Documentation</p>
                  <p className="mt-1 text-xs text-neutral-600">Step by step instructions and product updates.</p>
                </div>
                <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                  <p className="text-sm font-semibold text-brand-primary">FAQs</p>
                  <p className="mt-1 text-xs text-neutral-600">Quick answers to the most common onboarding questions.</p>
                </div>
              </div>
            </div>
            <MediaPlaceholder
              label="Resource highlights"
              helper="Highlight blog cover art, docs UI, or FAQ snippets."
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
