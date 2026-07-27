"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { homePage } from "@/content/pages/home";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/shared/button";
import {
  HeroDepthBackground,
  useHeroDepthPointer,
} from "@/components/home/hero-depth-background";
import { getLocalizedCta } from "@/lib/navigation/get-navigation";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import {
  heroStaggerContainer,
  heroStaggerItem,
  motionTokens,
} from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types/content";

interface HeroSectionProps {
  locale: Locale;
}

/**
 * Trust & Authority hero:
 * - High-contrast text plane over depth photography
 * - Primary CTA above the fold
 * - Full trust proof rail (not desktop-only)
 * - Motion layered but reduced-motion safe
 */
export function HeroSection({ locale }: HeroSectionProps) {
  const hero = homePage.hero;
  const primaryCta = getLocalizedCta(locale, "scheduleConversation");
  const secondaryCta = getLocalizedCta(locale, "discoverExpertise");
  const prefersReducedMotion = useReducedMotion();
  const { springX, springY, onPointerMove, onPointerLeave } =
    useHeroDepthPointer(!prefersReducedMotion);

  return (
    <section
      aria-labelledby="home-hero-title"
      className="relative isolate flex min-h-[min(100svh,56rem)] flex-col justify-end overflow-hidden bg-[rgb(var(--surface-inverse))]"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <HeroDepthBackground
        src={hero.image.src}
        alt={hero.image.alt[locale]}
        objectPosition={hero.image.objectPosition}
        prefersReducedMotion={prefersReducedMotion}
        springX={springX}
        springY={springY}
      />

      {/* Readability scrims — contrast first */}
      <div className="hero-scrim-horizontal pointer-events-none absolute inset-0 z-[1]" />
      <div className="hero-scrim-vertical pointer-events-none absolute inset-0 z-[1]" />
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-[1]",
          "bg-[radial-gradient(ellipse_70%_55%_at_12%_40%,color-mix(in_srgb,rgb(var(--surface-inverse))_55%,transparent),transparent_70%)]"
        )}
      />

      {/* Soft brand ambience (low opacity — never fights text) */}
      {!prefersReducedMotion ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
        >
          <div className="hero-orb hero-orb--a absolute -left-20 top-[12%] h-64 w-64 rounded-full bg-[rgb(var(--accent))] opacity-25 blur-3xl" />
          <div className="hero-orb hero-orb--b absolute right-[4%] top-[18%] h-80 w-80 rounded-full bg-[rgb(var(--primary))] opacity-20 blur-3xl" />
        </div>
      ) : null}

      <Container
        size="wide"
        className="relative z-[2] w-full pb-8 pt-20 sm:pb-10 sm:pt-22 lg:pb-12 lg:pt-24"
      >
        <div className="mx-auto w-full max-w-[78rem] px-5 sm:px-6 xl:px-7">
          <motion.div
            className="max-w-[min(44rem,100%)]"
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            variants={prefersReducedMotion ? undefined : heroStaggerContainer}
          >
            <motion.p
              variants={prefersReducedMotion ? undefined : heroStaggerItem}
              className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-black/25 px-4 py-2 font-[family:var(--font-accent)] text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur-md"
            >
              <span
                aria-hidden="true"
                className={cn(
                  "h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--accent))]",
                  !prefersReducedMotion && "hero-glow-pulse"
                )}
              />
              <span className="truncate">{hero.eyebrow[locale]}</span>
            </motion.p>

            <motion.h1
              id="home-hero-title"
              variants={prefersReducedMotion ? undefined : heroStaggerItem}
              className="max-w-full text-pretty break-words font-display text-[clamp(2.5rem,8.5vw,4.75rem)] font-medium leading-[0.98] text-white sm:max-w-[16ch] sm:leading-[0.96] lg:leading-[0.94]"
            >
              {hero.title[locale]}
            </motion.h1>

            <motion.p
              variants={prefersReducedMotion ? undefined : heroStaggerItem}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg lg:text-[1.1rem]"
            >
              {hero.description[locale]}
            </motion.p>

            <motion.p
              variants={prefersReducedMotion ? undefined : heroStaggerItem}
              className="mt-4 max-w-lg border-l-2 border-[rgb(var(--accent))] pl-4 text-sm leading-relaxed text-white/72 sm:text-[0.98rem]"
            >
              {hero.supportingText[locale]}
            </motion.p>

            <motion.div
              variants={prefersReducedMotion ? undefined : heroStaggerItem}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <Link href={primaryCta.href} className="block w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full min-h-12 sm:w-auto"
                  rightIcon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
                >
                  {primaryCta.label}
                </Button>
              </Link>
              <Link href={secondaryCta.href} className="block w-full sm:w-auto">
                <Button
                  variant="onInverse"
                  size="lg"
                  className="w-full min-h-12 border-white/25 bg-white/10 text-white hover:bg-white/16 sm:w-auto"
                >
                  {secondaryCta.label}
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust proof rail — always visible, above the fold on large screens */}
          <motion.div
            initial={
              prefersReducedMotion ? false : { opacity: 0, y: 18 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: prefersReducedMotion ? 0 : 0.42,
              duration: 0.5,
              ease: motionTokens.ease.emphasized,
            }}
            className="mt-10 sm:mt-12 lg:mt-14"
          >
            <ul
              className={cn(
                "grid gap-px overflow-hidden rounded-[var(--radius-2xl)]",
                "border border-white/15 bg-white/15 shadow-[var(--shadow-elevated)] backdrop-blur-xl",
                "sm:grid-cols-2 xl:grid-cols-4"
              )}
            >
              {homePage.highlights.map((item) => (
                <li
                  key={item.id}
                  className="bg-[color-mix(in_srgb,rgb(var(--surface-inverse))_55%,transparent)] px-5 py-5 sm:px-6 sm:py-6"
                >
                  <p className="font-[family:var(--font-accent)] text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--accent))]">
                    {item.label[locale]}
                  </p>
                  <p className="mt-2.5 text-sm font-medium leading-snug text-white sm:text-[0.98rem]">
                    {item.value[locale]}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>

      {!prefersReducedMotion ? (
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.45 }}
          className="pointer-events-none absolute bottom-3 left-1/2 z-[2] hidden -translate-x-1/2 flex-col items-center gap-1 md:flex"
        >
          <span className="font-[family:var(--font-accent)] text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/55">
            {hero.scrollHint[locale]}
          </span>
          <ChevronDown className="hero-scroll-hint h-4 w-4 text-white/70" />
        </motion.div>
      ) : null}
    </section>
  );
}
