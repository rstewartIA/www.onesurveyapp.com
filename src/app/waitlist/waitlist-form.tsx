"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type SubmissionState = "idle" | "loading" | "success" | "error";

const teamSizes = [
  "Just me",
  "2-5 people",
  "6-15 people",
  "16-30 people",
  "31-50 people",
  "50+ people",
];

const timelines = [
  "Exploring options",
  "Next 1-3 months",
  "Next 3-6 months",
  "6+ months out",
];

export function WaitlistForm() {
  const [status, setStatus] = useState<SubmissionState>("idle");
  const [error, setError] = useState("");
  const formId = useId();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setError("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      company: String(formData.get("company") || ""),
      role: String(formData.get("role") || ""),
      teamSize: String(formData.get("teamSize") || ""),
      timeline: String(formData.get("timeline") || ""),
      useCase: String(formData.get("useCase") || ""),
      updatesOptIn: formData.get("updatesOptIn") === "on",
      website: String(formData.get("website") || ""),
    };

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.error || "Unable to submit. Please try again.");
      }

      setStatus("success");
      event.currentTarget.reset();
    } catch (submitError) {
      setStatus("error");
      setError(submitError instanceof Error ? submitError.message : "Unable to submit right now.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <input
        className="rounded-lg border border-neutral-200 px-4 py-3 text-sm"
        placeholder="Full name"
        name="name"
        type="text"
        autoComplete="name"
        required
      />
      <input
        className="rounded-lg border border-neutral-200 px-4 py-3 text-sm"
        placeholder="Work email"
        name="email"
        type="email"
        autoComplete="email"
        required
      />
      <div className="grid gap-4 md:grid-cols-2">
        <input
          className="rounded-lg border border-neutral-200 px-4 py-3 text-sm"
          placeholder="Company"
          name="company"
          type="text"
          autoComplete="organization"
        />
        <input
          className="rounded-lg border border-neutral-200 px-4 py-3 text-sm"
          placeholder="Role"
          name="role"
          type="text"
          autoComplete="organization-title"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label
            className="text-xs font-semibold uppercase tracking-wide text-neutral-500"
            htmlFor={`${formId}-team`}
          >
            Team size
          </label>
          <select
            id={`${formId}-team`}
            name="teamSize"
            className="rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-700"
            defaultValue=""
          >
            <option value="" disabled>
              Select a size
            </option>
            {teamSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label
            className="text-xs font-semibold uppercase tracking-wide text-neutral-500"
            htmlFor={`${formId}-timeline`}
          >
            Timeline
          </label>
          <select
            id={`${formId}-timeline`}
            name="timeline"
            className="rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-700"
            defaultValue=""
          >
            <option value="" disabled>
              Select a timeline
            </option>
            {timelines.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </select>
        </div>
      </div>
      <textarea
        className="min-h-[120px] rounded-lg border border-neutral-200 px-4 py-3 text-sm"
        placeholder="What should OneSurvey help you improve first?"
        name="useCase"
      />
      <label className="flex items-start gap-3 text-sm text-neutral-600">
        <input
          type="checkbox"
          name="updatesOptIn"
          defaultChecked
          className="mt-1 h-4 w-4 rounded border-neutral-300"
        />
        <span>Notify me when the product launches and with important updates.</span>
      </label>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />
      <p className="text-xs text-neutral-500">
        By submitting, you agree to our{" "}
        <Link href="/privacy" className="font-semibold text-brand-primary hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
      {status === "success" ? (
        <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          Thanks for joining the waitlist. We will be in touch soon.
        </div>
      ) : (
        <Button
          type="submit"
          className="bg-brand-primary text-white hover:bg-brand-secondary"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Submitting..." : "Join the waitlist"}
        </Button>
      )}
      {status === "error" && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}
    </form>
  );
}
