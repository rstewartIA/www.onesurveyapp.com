import type { Metadata } from "next";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/marketing-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "OneSurvey Login",
  description: "Access the OneSurvey platform.",
};

export default function LoginPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Login"
        title="Access your OneSurvey workspace"
        subtitle="Use the login link below to access the main application."
        primaryCta={{
          label: "Go to login",
          href: "https://rocket.onesurveyapp.com/login",
          target: "_blank",
          rel: "noreferrer",
        }}
        secondaryCta={{ label: "Contact support", href: "/contact" }}
      />

      <section className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 text-center shadow-sm">
            <p className="text-sm text-neutral-600">
              If you need help accessing your account, contact support or request a demo.
            </p>
            <Button asChild className="mt-4 bg-brand-primary text-white hover:bg-brand-secondary">
              <Link href="/contact">Contact support</Link>
            </Button>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
