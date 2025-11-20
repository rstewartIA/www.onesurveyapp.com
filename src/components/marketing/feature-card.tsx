import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type FeatureCardProps = {
  title: string;
  description: string;
  eyebrow?: string;
  icon?: ReactNode;
};

export function FeatureCard({ title, description, eyebrow, icon }: FeatureCardProps) {
  return (
    <Card className="h-full border-neutral-200 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <CardHeader className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/30 text-brand-primary">
            {icon ?? (
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 3l9 4.5-9 4.5-9-4.5z" />
                <path d="M3 12.5l9 4.5 9-4.5" />
                <path d="M3 17.5l9 4.5 9-4.5" />
              </svg>
            )}
          </div>
          <div>
            {eyebrow && <p className="text-xs font-semibold uppercase tracking-wide text-brand-secondary">{eyebrow}</p>}
            <CardTitle className="text-xl text-neutral-900">{title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-600 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
