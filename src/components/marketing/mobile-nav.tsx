"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { NavigationItem } from "@/data/navigation";

type MobileNavProps = {
  open: boolean;
  navigation: NavigationItem[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export function MobileNav({ open, navigation, primaryCta, secondaryCta }: MobileNavProps) {
  return (
    <div
      className={cn(
        "lg:hidden overflow-hidden border-b border-neutral-200 bg-white shadow-sm transition-all duration-200",
        open ? "max-h-[620px]" : "max-h-0"
      )}
      aria-hidden={!open}
    >
      <div className="container mx-auto px-4 pb-4 pt-2">
        <nav className="space-y-2">
          {navigation.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
              >
                {item.label}
                {item.children && (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-neutral-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                )}
              </Link>
              {item.children && (
                <div className="ml-3 mt-1 space-y-1 border-l border-neutral-100 pl-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block rounded-md px-2 py-1 text-sm text-neutral-700 transition hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="mt-4 flex flex-col gap-2">
          {secondaryCta && (
            <Button asChild variant="outline" className="w-full justify-center border-neutral-200 text-neutral-800">
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          )}
          {primaryCta && (
            <Button asChild className="w-full justify-center bg-brand-primary text-white hover:bg-brand-secondary">
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
