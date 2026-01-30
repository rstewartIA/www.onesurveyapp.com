"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FocusEvent, type MouseEvent } from "react";
import type { NavigationItem } from "@/data/navigation";
import { cn } from "@/lib/utils";

type NavDropdownProps = {
  item: NavigationItem;
};

let activeNavDropdowns = 0;

function NavIcon({ label }: { label: string }) {
  const iconClassName = "h-5 w-5 text-neutral-500 transition group-hover:text-brand-primary";
  const key = label.toLowerCase();

  if (key.includes("feature")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClassName} fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 3.5l2.4 4.6 5.1.7-3.7 3.6.9 5.2-4.7-2.4-4.7 2.4.9-5.2-3.7-3.6 5.1-.7L12 3.5z" />
      </svg>
    );
  }

  if (key.includes("floorplan")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClassName} fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
        <path d="M3.5 9.5h17M9.5 3.5v17" />
      </svg>
    );
  }

  if (key.includes("asset") || key.includes("device") || key.includes("library")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClassName} fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="4" y="4" width="7" height="7" rx="1.2" />
        <rect x="13" y="4" width="7" height="7" rx="1.2" />
        <rect x="4" y="13" width="7" height="7" rx="1.2" />
        <rect x="13" y="13" width="7" height="7" rx="1.2" />
      </svg>
    );
  }

  if (key.includes("survey")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClassName} fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="5" y="4" width="14" height="16" rx="2" />
        <path d="M8 8h7M8 12h7M8 16h4" />
        <path d="M7.5 8.5l1 1 2-2" />
      </svg>
    );
  }

  if (key.includes("report")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClassName} fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 20h16" />
        <rect x="5" y="11" width="3" height="7" rx="1" />
        <rect x="10.5" y="7" width="3" height="11" rx="1" />
        <rect x="16" y="4" width="3" height="14" rx="1" />
      </svg>
    );
  }

  if (key.includes("security")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClassName} fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 3l7 3v5c0 4.5-3.1 8.6-7 10-3.9-1.4-7-5.5-7-10V6l7-3z" />
      </svg>
    );
  }

  if (key.includes("facility")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClassName} fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="4" y="3.5" width="8" height="17" rx="1" />
        <rect x="12" y="7.5" width="8" height="13" rx="1" />
        <path d="M7 7h2M7 11h2M7 15h2M15 11h2M15 15h2" />
      </svg>
    );
  }

  if (key.includes("enterprise") || key.includes("operations")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClassName} fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3.5" y="4.5" width="17" height="6" rx="1" />
        <rect x="3.5" y="13.5" width="17" height="6" rx="1" />
        <circle cx="7" cy="7.5" r="1" />
        <circle cx="7" cy="16.5" r="1" />
        <path d="M10 7.5h7M10 16.5h7" />
      </svg>
    );
  }

  if (key.includes("blog")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClassName} fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M6 3.5h8l4 4V20.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 5 20.5V5A1.5 1.5 0 0 1 6 3.5z" />
        <path d="M14 3.5V8h4" />
        <path d="M8 12h8M8 16h8" />
      </svg>
    );
  }

  if (key.includes("guide")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClassName} fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3.5 5.5h7a2.5 2.5 0 0 1 2.5 2.5v12h-7a2.5 2.5 0 0 0-2.5 2.5V5.5z" />
        <path d="M20.5 5.5h-7a2.5 2.5 0 0 0-2.5 2.5v12h7a2.5 2.5 0 0 1 2.5 2.5V5.5z" />
      </svg>
    );
  }

  if (key.includes("doc")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClassName} fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M7 3.5h7l4 4V20.5a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 20.5V5A1.5 1.5 0 0 1 7 3.5z" />
        <path d="M14 3.5V8h4" />
        <path d="M8 12h8M8 16h5" />
      </svg>
    );
  }

  if (key.includes("about")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClassName} fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v5" />
        <path d="M12 7h.01" />
      </svg>
    );
  }

  if (key.includes("career")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClassName} fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="4" y="7" width="16" height="11" rx="2" />
        <path d="M9 7V5.5h6V7" />
        <path d="M4 11h16" />
      </svg>
    );
  }

  if (key.includes("contact")) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClassName} fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3.5" y="6" width="17" height="12" rx="2" />
        <path d="M3.5 8l8.5 6 8.5-6" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClassName} fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8 12h8" />
    </svg>
  );
}

export function NavDropdown({ item }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isExternal = (href: string, external?: boolean) => external || href.startsWith("http");

  if (!item.children || item.children.length === 0) {
    return null;
  }

  const cancelClose = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 260);
  };

  const handleMenuLeave = (event: MouseEvent<HTMLDivElement>) => {
    const next = event.relatedTarget as Node | null;
    if (next && triggerRef.current?.contains(next)) return;
    scheduleClose();
  };

  const handleTriggerLeave = (event: MouseEvent<HTMLButtonElement>) => {
    const next = event.relatedTarget as Node | null;
    if (next && (menuRef.current?.contains(next) || triggerRef.current?.contains(next))) return;
    scheduleClose();
  };

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (!open) return;
    const { body } = document;
    activeNavDropdowns += 1;
    body.classList.add("nav-open-blur");
    return () => {
      activeNavDropdowns = Math.max(0, activeNavDropdowns - 1);
      if (activeNavDropdowns === 0) {
        body.classList.remove("nav-open-blur");
      }
    };
  }, [open]);

  useEffect(() => () => cancelClose(), []);

  return (
    <div className="relative flex h-16 items-center" onBlur={handleBlur}>
      <button
        ref={triggerRef}
        type="button"
        className={cn(
          "flex items-center gap-1 rounded-md px-2 py-1 text-neutral-700 transition-colors hover:text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary",
          open && "text-brand-primary"
        )}
        aria-haspopup="true"
        aria-expanded={open}
        onFocus={() => {
          cancelClose();
          setOpen(true);
        }}
        onMouseEnter={() => {
          cancelClose();
          setOpen(true);
        }}
        onMouseLeave={handleTriggerLeave}
      >
        {item.label}
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={cn("h-4 w-4 transition-transform text-neutral-500", open && "rotate-180 text-brand-primary")}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-x-0 top-16 bottom-0 z-30 bg-white/20 backdrop-blur-2xl transition-opacity duration-200",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      />

      <div
        ref={menuRef}
        onMouseEnter={() => {
          cancelClose();
          setOpen(true);
        }}
        onMouseLeave={handleMenuLeave}
        className={cn(
          "fixed left-0 right-0 top-16 z-40 border-b border-neutral-200 bg-white shadow-lg transition-all duration-200",
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        )}
        aria-hidden={!open}
      >
        <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
            <div className="border-r border-neutral-200/70 pr-6">
              {isExternal(item.href, item.external) ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col gap-4 rounded-2xl px-4 py-4 transition-colors hover:bg-neutral-50/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                >
                  <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-[0.2em] text-brand-secondary transition-colors group-hover:text-brand-primary">
                    <span>{item.label}</span>
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
                      <path d="M7 17l10-10" />
                      <path d="M10 7h7v7" />
                    </svg>
                  </div>
                  <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition-colors group-hover:bg-neutral-50">
                    <div className="mx-auto aspect-[4/3] w-full max-w-[170px] rounded-lg bg-gradient-to-br from-brand-accent/40 via-white to-brand-primary/10">
                      <div className="flex h-full w-full items-center justify-center text-[0.65rem] font-semibold uppercase tracking-wide text-neutral-500">
                        {item.label} preview
                      </div>
                    </div>
                    <p className="mt-4 text-xs text-neutral-500">Placeholder image for {item.label}.</p>
                  </div>
                </a>
              ) : (
                <Link
                  href={item.href}
                  className="group flex flex-col gap-4 rounded-2xl px-4 py-4 transition-colors hover:bg-neutral-50/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                >
                  <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-[0.2em] text-brand-secondary transition-colors group-hover:text-brand-primary">
                    <span>{item.label}</span>
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
                </div>
                  <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition-colors group-hover:bg-neutral-50">
                    <div className="mx-auto aspect-[4/3] w-full max-w-[170px] rounded-lg bg-gradient-to-br from-brand-accent/40 via-white to-brand-primary/10">
                      <div className="flex h-full w-full items-center justify-center text-[0.65rem] font-semibold uppercase tracking-wide text-neutral-500">
                        {item.label} preview
                      </div>
                    </div>
                    <p className="mt-4 text-xs text-neutral-500">Placeholder image for {item.label}.</p>
                  </div>
                </Link>
              )}
            </div>
            <div className="grid gap-3 pl-6 sm:grid-cols-2 lg:grid-cols-3">
              {item.children.map((child) => (
                isExternal(child.href, child.external) ? (
                  <a
                    key={child.label}
                    href={child.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start gap-3 rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-3 transition hover:border-neutral-300 hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                  >
                    <span className="mt-0.5 flex h-8 w-8 items-center justify-center">
                      <NavIcon label={child.label} />
                    </span>
                    <div>
                      <div className="flex items-center gap-2 text-sm font-semibold text-neutral-900 transition group-hover:text-brand-primary">
                        <span>{child.label}</span>
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="h-3.5 w-3.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M7 17l10-10" />
                          <path d="M10 7h7v7" />
                        </svg>
                      </div>
                      {child.description && <p className="mt-1 text-xs text-neutral-500">{child.description}</p>}
                    </div>
                  </a>
                ) : (
                  <Link
                    key={child.label}
                    href={child.href}
                    className="group flex items-start gap-3 rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-3 transition hover:border-neutral-300 hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                  >
                    <span className="mt-0.5 flex h-8 w-8 items-center justify-center">
                      <NavIcon label={child.label} />
                    </span>
                    <div>
                      <div className="text-sm font-semibold text-neutral-900 transition group-hover:text-brand-primary">
                        {child.label}
                      </div>
                      {child.description && <p className="mt-1 text-xs text-neutral-500">{child.description}</p>}
                    </div>
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
