import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "OneSurvey Documentation",
  description:
    "Access the OneSurvey documentation site for setup guides, workflow instructions, and release notes.",
};

export default function DocsPage() {
  redirect("https://rstewartia.github.io/OneSurvey-Docs/");
}
