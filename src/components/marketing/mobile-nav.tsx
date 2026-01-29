"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { NavigationItem } from "@/data/navigation";

type MobileNavProps = {
  open: boolean;
  navigation: NavigationItem[];
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  onClose?: () => void;
};

export function MobileNav({ open, navigation, primaryCta, secondaryCta, onClose }: MobileNavProps) {
  const [activeItem, setActiveItem] = useState<NavigationItem | null>(null);
  const showSubmenu = Boolean(activeItem?.children?.length);

  useEffect(() => {
    if (!open) setActiveItem(null);
  }, [open]);

  const rootVisible = open && !showSubmenu;
  const submenuVisible = open && showSubmenu;

  const activeChildren = useMemo(() => activeItem?.children ?? [], [activeItem]);

  const handleClose = () => {
    setActiveItem(null);
    onClose?.();
  };

  return (
    <div
      className={cn("fixed inset-0 z-[60] w-screen lg:hidden", open ? "pointer-events-auto" : "pointer-events-none")}
      aria-hidden={!open}
    >
      <div
        className={cn(
          "absolute inset-0 bg-neutral-900/30 transition-opacity duration-200",
          open ? "opacity-100" : "opacity-0"
        )}
        onClick={handleClose}
      />
      <div
        className={cn(
          "absolute inset-0 h-full w-screen bg-white shadow-2xl transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex h-full min-h-0 flex-col">
          <div className="flex items-center justify-between border-b border-neutral-200/80 px-5 py-4">
            {showSubmenu ? (
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 transition hover:border-brand-primary hover:text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                aria-label="Back to main menu"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            ) : (
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">Menu</span>
            )}

            <div className="text-base font-semibold text-neutral-900">
              {showSubmenu ? activeItem?.label : "Explore"}
            </div>

            <button
              type="button"
              onClick={handleClose}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 transition hover:border-brand-primary hover:text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
              aria-label="Close navigation menu"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="relative flex-1 min-h-0 overflow-hidden">
            <div
              className={cn(
                "absolute inset-0 flex min-h-0 flex-col px-5 pb-6 pt-4 transition-all duration-300 ease-out",
                rootVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0",
                rootVisible ? "pointer-events-auto" : "pointer-events-none"
              )}
            >
              <nav className="flex-1 space-y-3 overflow-y-auto pb-4">
                {navigation.map((item, index) => {
                  const hasChildren = Boolean(item.children?.length);
                  const delay = rootVisible ? `${index * 60}ms` : "0ms";

                  return hasChildren ? (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => setActiveItem(item)}
                      style={{ transitionDelay: delay }}
                      className={cn(
                        "group flex w-full items-center justify-between rounded-2xl border border-transparent px-4 py-3 text-left text-base font-semibold text-neutral-900 transition-all duration-300 ease-out hover:border-neutral-200 hover:bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary",
                        rootVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                      )}
                    >
                      {item.label}
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition group-hover:border-brand-primary group-hover:text-brand-primary">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 6l6 6-6 6" />
                        </svg>
                      </span>
                    </button>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={handleClose}
                      style={{ transitionDelay: delay }}
                      className={cn(
                        "flex items-center justify-between rounded-2xl border border-transparent px-4 py-3 text-base font-semibold text-neutral-900 transition-all duration-300 ease-out hover:border-neutral-200 hover:bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary",
                        rootVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="flex flex-col gap-2 pt-4">
                {secondaryCta && (
                  <Button
                    asChild
                    variant="outline"
                    className="w-full justify-center rounded-full border-neutral-200 text-neutral-800"
                  >
                    <Link href={secondaryCta.href} onClick={handleClose}>
                      {secondaryCta.label}
                    </Link>
                  </Button>
                )}
                {primaryCta && (
                  <Button
                    asChild
                    className="w-full justify-center rounded-full bg-brand-primary text-white hover:bg-brand-secondary"
                  >
                    <Link href={primaryCta.href} onClick={handleClose}>
                      {primaryCta.label}
                    </Link>
                  </Button>
                )}
              </div>
            </div>

            <div
              className={cn(
                "absolute inset-0 flex min-h-0 flex-col px-5 pb-6 pt-4 transition-all duration-300 ease-out",
                submenuVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0",
                submenuVisible ? "pointer-events-auto" : "pointer-events-none"
              )}
            >
              <nav className="flex-1 space-y-3 overflow-y-auto pb-4">
                {activeItem && (
                  <Link
                    href={activeItem.href}
                    onClick={handleClose}
                    style={{ transitionDelay: submenuVisible ? "30ms" : "0ms" }}
                    className={cn(
                      "flex items-center justify-between rounded-2xl border border-brand-accent bg-brand-accent/20 px-4 py-3 text-base font-semibold text-brand-primary transition-all duration-300 ease-out hover:border-brand-primary/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary",
                      submenuVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                    )}
                  >
                    View all {activeItem.label}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </Link>
                )}

                {activeChildren.map((child, index) => {
                  const delay = submenuVisible ? `${90 + index * 60}ms` : "0ms";
                  return (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={handleClose}
                      style={{ transitionDelay: delay }}
                      className={cn(
                        "flex items-center justify-between rounded-2xl border border-transparent px-4 py-3 text-base font-semibold text-neutral-900 transition-all duration-300 ease-out hover:border-neutral-200 hover:bg-neutral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary",
                        submenuVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                      )}
                    >
                      {child.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
