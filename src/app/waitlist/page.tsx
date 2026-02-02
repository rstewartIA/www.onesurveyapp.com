import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing/marketing-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { MediaPlaceholder } from "@/components/marketing/media-placeholder";
import { WaitlistForm } from "./waitlist-form";

export const metadata: Metadata = {
  title: "Join the OneSurvey Waitlist",
  description:
    "Share your contact details and we will notify you when OneSurvey is ready to launch.",
};

export default function WaitlistPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Waitlist"
        title="Be first to know when OneSurvey launches"
        subtitle="Join the waitlist to get early access updates, onboarding guidance, and launch notifications."
        primaryCta={{ label: "Join the waitlist", href: "#waitlist-form" }}
        secondaryCta={{ label: "Book a demo", href: "/demo" }}
        media={
          <MediaPlaceholder
            label="Waitlist preview"
            helper="Add a product montage or early access screenshot."
          />
        }
      />

      <section id="waitlist-form" className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Join the waitlist"
                title="Tell us about your team"
                subtitle="We will reach out with launch updates and tailor onboarding to your workflow."
              />
              <WaitlistForm />
            </div>
            <div className="space-y-6 rounded-2xl border border-neutral-200 bg-[#F7F9FC] p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-secondary">What happens next</p>
                <p className="mt-2 text-sm text-neutral-600">
                  We will review your workflow, confirm your needs, and share early access milestones.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-secondary">What we will ask</p>
                <ul className="mt-2 space-y-2 text-sm text-neutral-600">
                  <li>Number of sites or teams you support</li>
                  <li>Primary survey and reporting challenges</li>
                  <li>Preferred launch timeline</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-secondary">Privacy</p>
                <p className="mt-2 text-sm text-neutral-600">
                  Your contact details are only used for OneSurvey updates and onboarding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
