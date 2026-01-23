import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing/marketing-shell";
import { PageHero } from "@/components/marketing/page-hero";

export const metadata: Metadata = {
  title: "System Status",
  description: "OneSurvey service status updates.",
};

export default function StatusPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Status"
        title="System status"
        subtitle="This page will host uptime and incident updates once connected to a status provider."
        primaryCta={{ label: "Contact support", href: "/contact" }}
      />

      <section className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-neutral-600">Status updates will appear here.</p>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
