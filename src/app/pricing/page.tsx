import type { Metadata } from "next";
import PricingPage from "@/components/marketing/pricing-page";

export const metadata: Metadata = {
  title: "OneSurvey Pricing - Security Site Survey Software",
  description:
    "Flexible plans for integrators, facility teams, and enterprise programs. Start small and scale to full rollouts.",
};

export default function PricingPageRoute() {
  return <PricingPage />;
}
