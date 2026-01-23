import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing/marketing-shell";
import { PageHero } from "@/components/marketing/page-hero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "OneSurvey terms of service.",
};

export default function TermsPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Terms"
        title="Terms of service"
        subtitle="This page will include the full terms of service for OneSurvey."
        primaryCta={{ label: "Contact us", href: "/contact" }}
        secondaryCta={{ label: "Privacy", href: "/privacy" }}
      />

      <section className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="space-y-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-neutral-600">Placeholder: Add the approved terms of service here.</p>
            <p className="text-sm text-neutral-600">Include service terms, billing, and acceptable use.</p>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
