"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { homePage } from "@/content/pages/home";
import { expertiseItems } from "@/content/pages/expertise";
import { brand } from "@/content/brand";
import {
  HeroCinematicStill,
  useHeroDepthPointer,
} from "@/components/home/hero-depth-background";
import { getLocalizedCta } from "@/lib/navigation/get-navigation";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { motionTokens } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types/content";

interface HeroSectionProps {
  locale: Locale;
}

const ease = motionTokens.ease.emphasized;

export function HeroSection({ locale }: HeroSectionProps) {
  const hero = homePage.hero;
  const primaryCta = getLocalizedCta(locale, "scheduleConversation");
  const prefersReducedMotion = useReducedMotion();
  const { springX, springY, onPointerMove, onPointerLeave } =
    useHeroDepthPointer(!prefersReducedMotion);
  const [titleLead, titleMain] = hero.titleLines[locale];
  const caption = homePage.highlights[0]?.value[locale];

  return (
    <section
      aria-labelledby="home-hero-title"
      className="relative isolate min-h-[100svh] overflow-hidden bg-[rgb(var(--hero-void))] text-white"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <div className="lg:hidden">
        <HeroCinematicStill
          src={hero.image.src}
          alt={hero.image.alt[locale]}
          objectPosition={hero.image.objectPosition}
          prefersReducedMotion={prefersReducedMotion}
          springX={springX}
          springY={springY}
          variant="bleed"
        />
      </div>

      <div className="absolute inset-y-0 right-0 hidden w-[56%] lg:block">
        <HeroCinematicStill
          src={hero.image.src}
          alt={hero.image.alt[locale]}
          objectPosition={hero.image.objectPosition}
          prefersReducedMotion={prefersReducedMotion}
          springX={springX}
          springY={springY}
          caption={caption}
          variant="plate"
        >
          <ol className="absolute inset-x-6 bottom-7 space-y-0 border-t border-white/18">
            {expertiseItems.map((item, index) => (
              <li key={item.id} className="border-b border-white/18">
                <Link
                  href={getLocalizedHref(locale, item.route)}
                  className="group flex items-baseline justify-between gap-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))]"
                >
                  <span className="flex min-w-0 items-baseline gap-3">
                    <span className="font-[family:var(--font-accent)] text-[0.62rem] font-semibold tabular-nums tracking-[0.2em] text-white/45 transition-colors group-hover:text-[rgb(var(--accent))]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="truncate text-[0.98rem] font-medium tracking-[-0.02em] text-white/90 transition-colors group-hover:text-white">
                      {item.shortTitle[locale]}
                    </span>
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-white/35 transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1 group-hover:text-white" />
                </Link>
              </li>
            ))}
          </ol>
        </HeroCinematicStill>
      </div>

      <div className="relative z-[2] mx-auto flex min-h-[100svh] w-[min(94vw,88rem)] flex-col justify-end px-5 pb-10 pt-20 sm:px-8 lg:w-[min(94vw,92rem)] lg:justify-center lg:px-10 lg:pb-0 lg:pt-0">
        <div className="max-w-[40rem] lg:max-w-[46rem] xl:max-w-[50rem]">
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="font-[family:var(--font-accent)] text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-white/50"
          >
            {brand.name}
          </motion.p>
          <span
            aria-hidden="true"
            className={cn(
              "mt-4 block h-px w-14 bg-[rgb(var(--accent))]",
              !prefersReducedMotion && "hero-rule-draw"
            )}
          />

          <h1
            id="home-hero-title"
            className="mt-7 font-display font-medium tracking-[-0.04em] text-white lg:mt-9"
          >
            <motion.span
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease }}
              className="block text-[clamp(1.55rem,3.8vw,2.55rem)] leading-[1.08] text-white/72"
            >
              {titleLead}
            </motion.span>
            <motion.span
              initial={prefersReducedMotion ? false : { opacity: 0, y: 42 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.18, ease }}
              className="mt-1 block max-w-[11ch] text-[clamp(3.1rem,9.6vw,8.4rem)] leading-[0.84] [text-shadow:0_12px_48px_rgba(7,16,24,0.42)]"
            >
              {titleMain}
            </motion.span>
          </h1>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42, ease }}
            className="mt-8 lg:mt-10"
          >
            <Link
              href={primaryCta.href}
              className="group inline-flex items-center gap-3 font-[family:var(--font-accent)] text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-white"
            >
              <span className="border-b border-white/35 pb-1 transition-colors group-hover:border-white">
                {primaryCta.label}
              </span>
              <ArrowRight className="h-4 w-4 transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.ol
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease }}
            className="mt-10 space-y-0 border-t border-white/15 lg:hidden"
          >
            {expertiseItems.map((item, index) => (
              <li key={item.id} className="border-b border-white/15">
                <Link
                  href={getLocalizedHref(locale, item.route)}
                  className="group flex items-baseline justify-between gap-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))]"
                >
                  <span className="flex min-w-0 items-baseline gap-3">
                    <span className="font-[family:var(--font-accent)] text-[0.62rem] font-semibold tabular-nums tracking-[0.2em] text-white/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="truncate text-[1.02rem] font-medium tracking-[-0.02em] text-white/90">
                      {item.shortTitle[locale]}
                    </span>
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-white/35 transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
