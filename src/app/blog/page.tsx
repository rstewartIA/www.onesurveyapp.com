import type { Metadata } from "next";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/marketing-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { MediaPlaceholder } from "@/components/marketing/media-placeholder";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "OneSurvey Blog - Security Site Survey Insights",
  description:
    "Field tips, design best practices, and site workflows for security system integrators and facilities teams.",
};

const featuredPosts = [
  {
    title: "How to run a clean site survey the first time",
    category: "Surveying",
    excerpt: "A practical checklist to reduce re visits and missing data.",
  },
  {
    title: "Designing camera layouts that clients approve faster",
    category: "Design",
    excerpt: "Use clear coverage views and plan notes to improve approvals.",
  },
  {
    title: "Reporting packages that speed up install handoffs",
    category: "Reporting",
    excerpt: "Keep install teams aligned with photo backed documentation.",
  },
];

export default function BlogPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Blog"
        title="Insights for modern integrators"
        subtitle="Practical guidance for surveys, design, and site delivery."
        primaryCta={{ label: "Subscribe", href: "/contact" }}
        secondaryCta={{ label: "Browse guides", href: "/guides" }}
        media={
          <MediaPlaceholder
            label="Featured article image"
            helper="Add a hero image or recent blog cover."
          />
        }
      />

      <section className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Featured"
            title="Latest posts"
            subtitle="New posts are coming soon. Use the placeholders below for early drafts."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredPosts.map((post) => (
              <div key={post.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-secondary">{post.category}</p>
                <h3 className="mt-3 text-lg font-semibold text-brand-primary">{post.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{post.excerpt}</p>
                <Button asChild variant="outline" className="mt-4">
                  <Link href="/contact">Read draft</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
