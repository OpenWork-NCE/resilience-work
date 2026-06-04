"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Globe2, HeartPulse, Presentation, ShieldAlert } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { expertiseItems, homePage } from "@/content";
import { Button } from "@/components/shared/button";
import { Card } from "@/components/shared/card";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { Locale } from "@/types/content";
import { fadeIn } from "@/lib/animations";

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
    if (prefersReducedMotion) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]) {
          const nextIndex = Number(visibleEntries[0].target.getAttribute("data-index"));
          setActiveIndex(nextIndex);
        }
      },
      {
        rootMargin: "-24% 0px -35% 0px",
        threshold: [0.2, 0.45, 0.7],
      }
    );

    itemRefs.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  const activeItem = resolvedItems[activeIndex] ?? resolvedItems[0];

  return (
    <div className="hidden gap-10 lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(21rem,0.9fr)] lg:gap-14">
      <div className="space-y-8">
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
              className="min-h-[21rem] scroll-mt-28"
              onMouseEnter={() => setActiveIndex(index)}
              onFocusCapture={() => setActiveIndex(index)}
            >
              <Card
                variant={isActive ? "elevated" : "default"}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "h-full cursor-pointer border transition-all duration-[var(--duration-normal)]",
                  isActive && "border-[rgb(var(--border-strong))] shadow-[var(--shadow-elevated)]"
                )}
              >
                <div className="flex items-start gap-4">
                  <span className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-[rgb(var(--accent))]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 space-y-5">
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-[rgb(var(--accent-soft))] p-2 text-[rgb(var(--accent-foreground))]">
                        <Icon className="h-4 w-4" />
                      </span>
                      <h3 className="text-2xl font-semibold text-[rgb(var(--foreground))]">
                        {item.title[locale]}
                      </h3>
                    </div>
                    <p className="text-base leading-relaxed text-[rgb(var(--muted-foreground))]">
                      {item.summary[locale]}
                    </p>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {item.services[locale].slice(0, 4).map((service) => (
                        <div
                          key={service}
                          className="rounded-[var(--radius-md)] bg-[rgb(var(--surface-muted))] px-4 py-3.5 text-sm leading-relaxed text-[rgb(var(--foreground))]"
                        >
                          {service}
                        </div>
                      ))}
                    </div>
                    <Link href={item.href}>
                      <Button variant="ghost" className="px-0" rightIcon={<ArrowRight className="h-4 w-4" />}>
                        {homePage.expertise.itemCta.label[locale]}
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </article>
          );
        })}
      </div>

      <div className="sticky top-28 h-fit">
        <div className="relative overflow-hidden rounded-[var(--radius-2xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface-elevated))] shadow-[var(--shadow-elevated)]">
          <div className="relative aspect-[4/5]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeItem.id}
                className="absolute inset-0"
                variants={prefersReducedMotion ? undefined : fadeIn}
                initial={prefersReducedMotion ? false : "hidden"}
                animate={prefersReducedMotion ? undefined : "visible"}
                exit={prefersReducedMotion ? undefined : "hidden"}
              >
                <Image
                  src={activeItem.image.src}
                  alt={activeItem.image.alt[locale]}
                  fill
                  sizes="(max-width: 1280px) 42vw, 36vw"
                  className="object-cover"
                  style={{ objectPosition: activeItem.image.objectPosition ?? "center" }}
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(7,29,40,0.88)] via-[rgba(7,29,40,0.32)] to-transparent p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white/72">
                {activeItem.shortTitle[locale]}
              </p>
              <p className="mt-3 max-w-md text-xl font-medium leading-relaxed text-white/92">
                {activeItem.description[locale][0]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
