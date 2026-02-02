import type { Metadata } from "next";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/marketing-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { MediaPlaceholder } from "@/components/marketing/media-placeholder";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Book a OneSurvey Demo",
  description:
    "See how OneSurvey streamlines site surveys, device layout, and reporting for integrators.",
};

export default function DemoPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Demo"
        title="See OneSurvey in action"
        subtitle="Schedule a walkthrough tailored to your survey workflow and proposal process."
        primaryCta={{ label: "Book a demo", href: "#demo-form" }}
        secondaryCta={{ label: "Contact sales", href: "/contact" }}
        media={
          <MediaPlaceholder
            label="Demo preview"
            helper="Replace with a short product video or screenshot."
          />
        }
      />

      <section id="demo-form" className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div className="space-y-5">
              <SectionHeading
                eyebrow="What to expect"
                title="A demo focused on your workflow"
                subtitle="We will cover survey capture, floorplan design, and reporting in about 30 to 45 minutes."
              />
              <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                <p className="text-sm text-neutral-600">Review your typical site workflow.</p>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                <p className="text-sm text-neutral-600">Walk through a sample survey and layout.</p>
              </div>
              <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                <p className="text-sm text-neutral-600">Answer questions about reporting and handoff.</p>
              </div>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-[#F7F9FC] p-6">
              <form className="grid gap-4">
                <input
                  className="rounded-lg border border-neutral-200 px-4 py-3 text-sm"
                  placeholder="Full name"
                  type="text"
                />
                <input
                  className="rounded-lg border border-neutral-200 px-4 py-3 text-sm"
                  placeholder="Work email"
                  type="email"
                />
                <input
                  className="rounded-lg border border-neutral-200 px-4 py-3 text-sm"
                  placeholder="Company"
                  type="text"
                />
                <input
                  className="rounded-lg border border-neutral-200 px-4 py-3 text-sm"
                  placeholder="Site size or number of locations"
                  type="text"
                />
                <textarea
                  className="min-h-[120px] rounded-lg border border-neutral-200 px-4 py-3 text-sm"
                  placeholder="What would you like to see in the demo?"
                />
                <p className="text-xs text-neutral-500">
                  By submitting, you agree to our{" "}
                  <Link href="/privacy" className="font-semibold text-brand-primary hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
                <Button className="bg-brand-primary text-white hover:bg-brand-secondary">Request a demo</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
