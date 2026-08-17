"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homePage } from "@/content/pages/home";
import { expertiseItems } from "@/content/pages/expertise";
import {
  HOME_MEASURE,
  HomeSectionIntro,
} from "@/components/home/home-section-intro";
import { HomeStill } from "@/components/home/home-still";
import { HomeTextLink } from "@/components/home/home-text-link";
import { activityIdentity } from "@/lib/activity-identity";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types/content";

interface ExpertiseSectionProps {
  locale: Locale;
}

export function ExpertiseSection({ locale }: ExpertiseSectionProps) {
  const [activeId, setActiveId] = useState(expertiseItems[0]?.id);
  const prefersReducedMotion = useReducedMotion();
  const active = expertiseItems.find((item) => item.id === activeId) ?? expertiseItems[0];

  return (
    <section
      aria-labelledby="home-expertise-title"
      className="bg-[rgb(var(--background))] py-[var(--section-space-lg)]"
    >
      <div className={HOME_MEASURE}>
        <HomeSectionIntro
          eyebrow={homePage.expertise.eyebrow[locale]}
          title={homePage.expertise.title[locale]}
          titleId="home-expertise-title"
          description={homePage.expertise.description[locale]}
        />

        <div className="mt-12 grid items-stretch gap-10 lg:mt-16 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
          <div className="relative min-h-[22rem] overflow-hidden lg:order-2 lg:min-h-full">
            {expertiseItems.map((item) => {
              const isActive = item.id === active.id;

              return (
                <HomeStill
                  key={item.id}
                  src={item.image.src}
                  alt={item.image.alt[locale]}
                  objectPosition={activityIdentity[item.id].objectPosition}
                  sizes="(max-width: 1024px) 94vw, 48vw"
                  className={cn(
                    "absolute inset-0 aspect-auto",
                    isActive ? "z-[1] opacity-100" : "z-0 opacity-0",
                    !prefersReducedMotion &&
                      "transition-opacity duration-500 ease-[var(--ease-emphasized)]"
                  )}
                >
                  {isActive ? (
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[rgb(var(--background))] to-transparent"
                    />
                  ) : null}
                </HomeStill>
              );
            })}
            <p className="pointer-events-none absolute bottom-5 left-0 z-[2] font-[family:var(--font-accent)] text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[rgb(var(--muted-foreground))]">
              {active.shortTitle[locale]}
            </p>
          </div>

          <ol className="border-t border-[rgb(var(--border-muted))] lg:order-1">
            {expertiseItems.map((item, index) => {
              const href = getLocalizedHref(locale, item.route);
              const isActive = item.id === active.id;

              return (
                <li key={item.id} className="border-b border-[rgb(var(--border-muted))]">
                  <Link
                    href={href}
                    onMouseEnter={() => setActiveId(item.id)}
                    onFocus={() => setActiveId(item.id)}
                    className="group block py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] lg:py-7"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <span
                        className={cn(
                          "font-[family:var(--font-accent)] text-[0.68rem] font-semibold tabular-nums tracking-[0.2em]",
                          isActive
                            ? "text-[rgb(var(--accent))]"
                            : "text-[rgb(var(--muted-foreground))]"
                        )}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <ArrowRight
                        className={cn(
                          "h-4 w-4 shrink-0 transition-transform duration-[var(--duration-fast)]",
                          isActive
                            ? "translate-x-0.5 text-[rgb(var(--foreground))]"
                            : "text-[rgb(var(--border-strong))] group-hover:translate-x-0.5"
                        )}
                      />
                    </div>
                    <h3
                      className={cn(
                        "mt-3 font-display text-[clamp(1.7rem,3vw,2.35rem)] font-medium leading-[1.05] tracking-[-0.03em] text-balance",
                        isActive
                          ? "text-[rgb(var(--foreground))]"
                          : "text-[rgb(var(--foreground))]/72"
                      )}
                    >
                      {item.shortTitle[locale]}
                    </h3>
                    <p
                      className={cn(
                        "mt-3 max-w-[34rem] text-sm leading-relaxed sm:text-base",
                        isActive
                          ? "text-[rgb(var(--muted-foreground))]"
                          : "text-[rgb(var(--muted-foreground))]/75"
                      )}
                    >
                      {item.summary[locale]}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-10">
          <HomeTextLink href={getLocalizedHref(locale, homePage.expertise.cta.route)}>
            {homePage.expertise.cta.label[locale]}
          </HomeTextLink>
        </div>
      </div>
    </section>
  );
}
