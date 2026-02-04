import type { Metadata } from "next";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/marketing-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { MediaPlaceholder } from "@/components/marketing/media-placeholder";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About OneSurvey",
  description:
    "OneSurvey helps security integrators and facilities teams standardize site surveys, designs, and reporting from one workspace.",
};

const values = [
  {
    title: "Built for the field",
    description: "We design around real survey workflows and job site needs.",
  },
  {
    title: "Clarity in every step",
    description: "We focus on clean documentation that reduces rework.",
  },
  {
    title: "Partnership first",
    description: "We work alongside integrators to improve outcomes.",
  },
];

export default function CompanyPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Company"
        title="Built for integrators who need clarity"
        subtitle="OneSurvey focuses on the survey and design workflow that drives every security site."
        primaryCta={{ label: "About us", href: "/about" }}
        media={
          <MediaPlaceholder
            label="Team photo"
            helper="Insert a team or customer success image."
          />
        }
      />

      <section className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Values"
            title="What guides our work"
            subtitle="We build tools that help integrators deliver better sites."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-brand-primary">{value.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <MediaPlaceholder
              label="Customer success story"
              helper="Add a testimonial or case study once approved."
              className="min-h-[320px]"
            />
            <div className="space-y-5">
              <SectionHeading
                eyebrow="Partnership"
                title="We partner with security teams"
                subtitle="Our goal is to help integrators win work and deliver clear documentation."
              />
              <p className="text-sm text-neutral-600">
                Share your workflow with us and we will help you configure OneSurvey to match your process.
              </p>
              <Button asChild className="bg-brand-primary text-white hover:bg-brand-secondary">
                <Link href="/contact">Contact us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
