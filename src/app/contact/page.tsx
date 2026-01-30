import type { Metadata } from "next";
import { MarketingShell } from "@/components/marketing/marketing-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact OneSurvey - Request a Demo",
  description:
    "Talk with OneSurvey about demos, pilots, or questions about your security site survey workflow.",
};

export default function ContactPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Contact"
        title="Talk to OneSurvey"
        subtitle="Tell us about your projects and we will set up a demo tailored to your survey workflow."
        primaryCta={{ label: "Request a demo", href: "#contact-form" }}
        secondaryCta={{ label: "Email sales", href: "mailto:sales@onesurvey.com" }}
        supportingText="We respond within one business day."
      />

      <section id="contact-form" className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Demo request"
                title="Tell us about your project"
                subtitle="Fill out the form and our team will follow up with next steps."
              />
              <form className="grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    className="rounded-lg border border-neutral-200 px-4 py-3 text-sm"
                    placeholder="First name"
                    type="text"
                  />
                  <input
                    className="rounded-lg border border-neutral-200 px-4 py-3 text-sm"
                    placeholder="Last name"
                    type="text"
                  />
                </div>
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
                  placeholder="Phone"
                  type="tel"
                />
                <textarea
                  className="min-h-[120px] rounded-lg border border-neutral-200 px-4 py-3 text-sm"
                  placeholder="Tell us about your survey workflow and project size"
                />
                <Button className="bg-brand-primary text-white hover:bg-brand-secondary">Submit request</Button>
              </form>
            </div>
            <div className="space-y-6 rounded-2xl border border-neutral-200 bg-[#F7F9FC] p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-secondary">Direct contact</p>
                <p className="mt-2 text-sm text-neutral-600">sales@onesurvey.com</p>
                <p className="text-sm text-neutral-600">+1 (000) 000-0000</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-secondary">Office</p>
                <p className="mt-2 text-sm text-neutral-600">Placeholder city, state</p>
                <p className="text-sm text-neutral-600">Address line 1</p>
                <p className="text-sm text-neutral-600">Address line 2</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-secondary">Response time</p>
                <p className="mt-2 text-sm text-neutral-600">We respond within one business day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
