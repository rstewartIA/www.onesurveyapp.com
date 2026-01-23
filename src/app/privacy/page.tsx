import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing/marketing-shell";
import { PageHero } from "@/components/marketing/page-hero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "OneSurvey privacy policy.",
};

export default function PrivacyPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Privacy"
        title="Privacy policy"
        subtitle="This page will include the full privacy policy for OneSurvey."
        primaryCta={{ label: "Contact us", href: "/contact" }}
        secondaryCta={{ label: "Terms", href: "/terms" }}
      />

      <section className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-neutral-600">Placeholder: Add the approved privacy policy here.</p>
            <p className="text-sm text-neutral-600">Include data handling, retention, and contact details.</p>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
