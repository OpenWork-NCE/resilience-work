"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Globe2, HeartPulse, Presentation, ShieldAlert } from "lucide-react";
import { expertiseItems, homePage } from "@/content";
import { Button } from "@/components/shared/button";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import type { Locale } from "@/types/content";

interface ExpertiseStickyRevealProps {
  locale: Locale;
}

const iconMap = {
  HeartPulse,
  Globe2,
  ShieldAlert,
  Presentation,
} as const;

export function ExpertiseStickyReveal({ locale }: ExpertiseStickyRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const itemRefs = useRef<Array<HTMLElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const resolvedItems = useMemo(
    () =>
      expertiseItems.map((item) => ({
        ...item,
        href: getLocalizedHref(locale, item.route),
      })),
    [locale]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]) {
          const nextIndex = Number(visibleEntries[0].target.getAttribute("data-index"));
          if (!Number.isNaN(nextIndex)) {
            setActiveIndex(nextIndex);
          }
        }
      },
      {
        // Center band of the viewport: stable, no jump from card reflow
        rootMargin: "-30% 0px -40% 0px",
        threshold: [0.15, 0.35, 0.55],
      }
    );

    itemRefs.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const activeItem = resolvedItems[activeIndex] ?? resolvedItems[0];
  const ActiveIcon = iconMap[activeItem.icon as keyof typeof iconMap];
  const progress =
    resolvedItems.length > 1 ? activeIndex / (resolvedItems.length - 1) : 0;

  return (
    <div className="hidden items-start gap-10 lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,0.9fr)] lg:gap-12 xl:gap-14">
      {/* Cards column — fixed structure, no open/close reflow */}
      <div className="relative pl-10">
        <div
          aria-hidden="true"
          className="absolute bottom-8 left-[0.7rem] top-8 w-px bg-[rgb(var(--border-muted))]"
        >
          <div
            className={cn(
              "w-px origin-top bg-[rgb(var(--accent))]",
              !prefersReducedMotion &&
                "transition-[height] duration-[var(--duration-slow)] ease-[var(--ease-emphasized)]"
            )}
            style={{ height: `${Math.max(progress * 100, 10)}%` }}
          />
        </div>

        <div className="space-y-5">
          {resolvedItems.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            const isActive = index === activeIndex;

            return (
              <article
                key={item.id}
                ref={(element) => {
                  itemRefs.current[index] = element;
                }}
                data-index={index}
                className="relative scroll-mt-28"
                onMouseEnter={() => setActiveIndex(index)}
                onFocusCapture={() => setActiveIndex(index)}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -left-10 top-7 flex h-5 w-5 items-center justify-center rounded-full border-2",
                    !prefersReducedMotion &&
                      "transition-all duration-[var(--duration-normal)] ease-[var(--ease-emphasized)]",
                    isActive
                      ? "border-[rgb(var(--accent))] bg-[rgb(var(--accent))] shadow-[0_0_0_4px_rgb(var(--accent-soft))]"
                      : "border-[rgb(var(--border-strong))] bg-[rgb(var(--surface))]"
                  )}
                >
                  {isActive ? (
                    <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent-foreground))]" />
                  ) : null}
                </span>

                <div
                  className={cn(
                    "group relative rounded-[var(--radius-xl)] border p-6 xl:p-7",
                    !prefersReducedMotion &&
                      "transition-[border-color,box-shadow,background-color,opacity] duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
                    isActive
                      ? "border-[rgb(var(--border-strong))] bg-[rgb(var(--surface-elevated))] shadow-[var(--shadow-elevated)]"
                      : "border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] opacity-75 hover:opacity-100"
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-y-5 left-0 w-1 rounded-full bg-[rgb(var(--accent))]",
                      !prefersReducedMotion &&
                        "transition-opacity duration-[var(--duration-normal)] ease-[var(--ease-emphasized)]",
                      isActive ? "opacity-100" : "opacity-0"
                    )}
                  />

                  <div className="flex items-start gap-4">
                    <span
                      className={cn(
                        "mt-0.5 font-[family:var(--font-accent)] text-[0.78rem] font-semibold uppercase tracking-[0.16em]",
                        isActive
                          ? "text-[rgb(var(--accent))]"
                          : "text-[rgb(var(--muted-foreground))]"
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0 flex-1 space-y-5">
                      <div className="flex items-start gap-3">
                        <span
                          className={cn(
                            "mt-0.5 shrink-0 rounded-[var(--radius-md)] p-2.5",
                            !prefersReducedMotion &&
                              "transition-colors duration-[var(--duration-normal)]",
                            isActive
                              ? "bg-[rgb(var(--accent-soft))] text-[rgb(var(--accent-foreground))]"
                              : "bg-[rgb(var(--surface-muted))] text-[rgb(var(--muted-foreground))]"
                          )}
                        >
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <h3 className="font-display text-[clamp(1.4rem,2vw,1.75rem)] font-medium leading-[1.05] text-[rgb(var(--foreground))] text-balance">
                          {item.title[locale]}
                        </h3>
                      </div>

                      <p className="text-base leading-relaxed text-[rgb(var(--muted-foreground))]">
                        {item.summary[locale]}
                      </p>

                      {/* Always visible — no accordion reflow */}
                      <div className="grid gap-2 sm:grid-cols-2">
                        {item.services[locale].slice(0, 4).map((service) => (
                          <div
                            key={service}
                            className="rounded-[var(--radius-md)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface-muted))] px-3.5 py-3 text-sm leading-relaxed text-[rgb(var(--foreground))]"
                          >
                            {service}
                          </div>
                        ))}
                      </div>

                      <Link href={item.href}>
                        <Button
                          variant="ghost"
                          className="px-0"
                          rightIcon={<ArrowRight className="h-4 w-4" />}
                        >
                          {homePage.expertise.itemCta.label[locale]}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Sticky media — stays put while the list scrolls */}
      <aside className="sticky top-28 self-start">
        <div className="overflow-hidden rounded-[var(--radius-2xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface-elevated))] shadow-[var(--shadow-elevated)]">
          <div className="relative aspect-[4/5]">
            {/* All images stacked: instant swap, no unmount gap */}
            {resolvedItems.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={item.id}
                  className={cn(
                    "absolute inset-0",
                    !prefersReducedMotion &&
                      "transition-opacity duration-[var(--duration-slow)] ease-[var(--ease-emphasized)]",
                    isActive ? "opacity-100" : "opacity-0"
                  )}
                  aria-hidden={!isActive}
                >
                  <Image
                    src={item.image.src}
                    alt={item.image.alt[locale]}
                    fill
                    sizes="(max-width: 1280px) 42vw, 36vw"
                    className="object-cover"
                    style={{ objectPosition: item.image.objectPosition ?? "center" }}
                    priority={index === 0}
                  />
                </div>
              );
            })}

            <div className="absolute left-5 top-5 z-10">
              <div
                className={cn(
                  "inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-black/45 px-3.5 py-2 text-white shadow-[var(--shadow-soft)] backdrop-blur-md",
                  !prefersReducedMotion &&
                    "transition-[opacity,transform] duration-[var(--duration-normal)] ease-[var(--ease-emphasized)]"
                )}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                  <ActiveIcon className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="pr-1 font-[family:var(--font-accent)] text-[0.72rem] font-semibold uppercase tracking-[0.14em]">
                  {String(activeIndex + 1).padStart(2, "0")} · {activeItem.shortTitle[locale]}
                </span>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/92 via-black/55 to-transparent p-7 pt-28">
              <p className="font-[family:var(--font-accent)] text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white/75">
                {activeItem.shortTitle[locale]}
              </p>
              <p className="mt-3 max-w-md text-[1.15rem] font-medium leading-relaxed text-white">
                {activeItem.description[locale][0]}
              </p>
              <Link
                href={activeItem.href}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                {homePage.expertise.itemCta.label[locale]}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div
            className="flex items-center justify-center gap-2 border-t border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] px-4 py-3.5"
            role="tablist"
            aria-label={homePage.expertise.eyebrow[locale]}
          >
            {resolvedItems.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={item.shortTitle[locale]}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "h-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))]",
                    !prefersReducedMotion &&
                      "transition-all duration-[var(--duration-normal)] ease-[var(--ease-emphasized)]",
                    isActive
                      ? "w-8 bg-[rgb(var(--accent))]"
                      : "w-2 bg-[rgb(var(--border-strong))] hover:bg-[rgb(var(--muted-foreground))]"
                  )}
                />
              );
            })}
          </div>
        </div>
      </aside>
    </div>
  );
}
