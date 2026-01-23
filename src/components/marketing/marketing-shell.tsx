import type { ReactNode } from "react";
import { TopNav } from "@/components/marketing/top-nav";
import { Footer } from "@/components/marketing/footer";
import { navigationHierarchy, footerColumns } from "@/data/navigation";

type MarketingShellProps = {
  children: ReactNode;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function MarketingShell({
  children,
  primaryCta,
  secondaryCta,
}: MarketingShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white font-body text-neutral-900">
      <TopNav
        navigation={navigationHierarchy}
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
      />
      <main className="flex-1">{children}</main>
      <Footer columns={footerColumns} />
    </div>
  );
}
