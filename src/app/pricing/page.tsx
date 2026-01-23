import type { Metadata } from "next";
import Link from "next/link";
import { MarketingShell } from "@/components/marketing/marketing-shell";
import { PageHero } from "@/components/marketing/page-hero";
import { SectionHeading } from "@/components/marketing/section-heading";
import { CtaBand } from "@/components/marketing/cta-band";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "OneSurvey Pricing for Security Integrators",
  description:
    "Flexible plans for integrators and enterprise teams. Start with a pilot and scale to full rollouts.",
};

const plans = [
  {
    name: "Pilot",
    description: "For teams validating OneSurvey on a small set of sites.",
    price: "Contact for pricing",
    features: [
      "Core survey capture",
      "Floorplan editor",
      "Device library",
      "PDF reports",
      "Email support",
    ],
  },
  {
    name: "Professional",
    description: "For integrators running multiple active projects.",
    price: "Contact for pricing",
    features: [
      "Everything in Pilot",
      "Photo reports",
      "Spreadsheet exports",
      "Assignments and handoff",
      "Team roles and approvals",
    ],
  },
  {
    name: "Enterprise",
    description: "For multi site programs and custom governance needs.",
    price: "Custom",
    features: [
      "Everything in Professional",
      "Portfolio reporting",
      "Dedicated onboarding",
      "Custom templates",
      "Priority support",
    ],
  },
];

const faqs = [
  {
    question: "Can we start with a pilot?",
    answer:
      "Yes. We can scope a pilot around a few sites or a single project before rolling out wider.",
  },
  {
    question: "Do you offer onboarding?",
    answer:
      "Onboarding and training are included based on plan. We will tailor it to your workflow.",
  },
  {
    question: "Can we export reports?",
    answer:
      "Yes. OneSurvey supports PDF and spreadsheet exports for survey and installation data.",
  },
  {
    question: "Is there a contract term?",
    answer:
      "Plan terms are flexible. We will review options based on your rollout size.",
  },
];

export default function PricingPage() {
  return (
    <MarketingShell>
      <PageHero
        eyebrow="Pricing"
        title="Plans that scale from pilot to enterprise"
        subtitle="Choose the plan that matches your team size, project volume, and reporting needs."
        primaryCta={{ label: "Start a pilot", href: "/contact" }}
        secondaryCta={{ label: "Book a demo", href: "/demo" }}
        supportingText="Final pricing and limits will be tailored to your workflow."
      />

      <section className="bg-white py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Plans"
            title="Pick the plan that fits your team"
            subtitle="Talk with us to confirm pricing, limits, and onboarding options."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div key={plan.name} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-secondary">{plan.name}</p>
                  <h3 className="text-2xl font-semibold text-brand-primary">{plan.price}</h3>
                  <p className="text-sm text-neutral-600">{plan.description}</p>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-neutral-600">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-brand-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6 w-full bg-brand-primary text-white hover:bg-brand-secondary">
                  <Link href="/contact">Talk to sales</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-18 md:py-24">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions about pricing?"
            subtitle="Here are the most common questions from integrators and operations teams."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-brand-primary">{faq.question}</h3>
                <p className="mt-3 text-sm text-neutral-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Lets talk"
        title="Get a plan built for your team"
        description="Tell us about your projects and we will map the right plan for your workflow."
        primaryCta={{ label: "Talk to sales", href: "/contact" }}
        secondaryCta={{ label: "Book a demo", href: "/demo" }}
      />
    </MarketingShell>
  );
}
