"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { homePage } from "@/content/pages/home";
import { expertiseItems } from "@/content/pages/expertise";
import { brand } from "@/content/brand";
import { Button } from "@/components/shared/button";
import {
  HeroCinematicStill,
  useHeroDepthPointer,
} from "@/components/home/hero-depth-background";
import { getLocalizedCta } from "@/lib/navigation/get-navigation";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { heroStaggerContainer, heroStaggerItem } from "@/lib/animations";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types/content";

interface HeroSectionProps {
  locale: Locale;
}

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
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#071018] text-white"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-[3] h-4 bg-[#071018] md:h-5" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-4 bg-[#071018] md:h-5" />

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

      <div className="relative z-[2] mx-auto flex min-h-[100svh] w-[min(94vw,88rem)] flex-col justify-end px-5 pb-16 pt-28 sm:px-8 lg:justify-center lg:px-10 lg:pb-20 lg:pt-28">
        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.95fr)] lg:items-center lg:gap-16 xl:gap-24">
          <motion.div
            initial={prefersReducedMotion ? false : "hidden"}
            animate="visible"
            variants={prefersReducedMotion ? undefined : heroStaggerContainer}
            className="max-w-[40rem]"
          >
            <motion.div variants={prefersReducedMotion ? undefined : heroStaggerItem}>
              <p className="font-[family:var(--font-accent)] text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/55">
                {brand.name}
              </p>
              <span
                aria-hidden="true"
                className={cn(
                  "mt-4 block h-px w-16 bg-[rgb(var(--accent))]",
                  !prefersReducedMotion && "hero-rule-draw"
                )}
              />
            </motion.div>

            <motion.h1
              id="home-hero-title"
              variants={prefersReducedMotion ? undefined : heroStaggerItem}
              className="mt-8 font-display font-medium tracking-[-0.035em] text-white"
            >
              <span className="block text-[clamp(1.7rem,4.4vw,2.85rem)] leading-[1.05] text-white/78">
                {titleLead}
              </span>
              <span className="mt-1 block text-[clamp(2.7rem,8vw,6.4rem)] leading-[0.9]">
                {titleMain}
              </span>
            </motion.h1>

            <motion.p
              variants={prefersReducedMotion ? undefined : heroStaggerItem}
              className="mt-6 max-w-[32rem] text-base leading-relaxed text-white/72 sm:text-lg"
            >
              {hero.description[locale]}
            </motion.p>

            <motion.ol
              variants={prefersReducedMotion ? undefined : heroStaggerItem}
              className="mt-10 space-y-0 border-t border-white/12"
            >
              {expertiseItems.map((item, index) => (
                <li key={item.id} className="border-b border-white/12">
                  <Link
                    href={getLocalizedHref(locale, item.route)}
                    className="group flex items-baseline justify-between gap-6 py-3.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))]"
                  >
                    <span className="flex min-w-0 items-baseline gap-4">
                      <span className="font-[family:var(--font-accent)] text-[0.68rem] font-semibold tabular-nums tracking-[0.18em] text-white/38 transition-colors group-hover:text-[rgb(var(--accent))]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="truncate text-[1.02rem] font-medium tracking-[-0.02em] text-white/88 transition-colors group-hover:text-white sm:text-[1.12rem]">
                        {item.shortTitle[locale]}
                      </span>
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-white/30 transition-all duration-[var(--duration-fast)] group-hover:translate-x-1 group-hover:text-white" />
                  </Link>
                </li>
              ))}
            </motion.ol>

            <motion.div
              variants={prefersReducedMotion ? undefined : heroStaggerItem}
              className="mt-8"
            >
              <Link href={primaryCta.href}>
                <Button
                  size="lg"
                  className="min-h-12"
                  rightIcon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
                >
                  {primaryCta.label}
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="pointer-events-none absolute -inset-x-8 -inset-y-10 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_62%)]" />
            <HeroCinematicStill
              src={hero.image.src}
              alt={hero.image.alt[locale]}
              objectPosition={hero.image.objectPosition}
              prefersReducedMotion={prefersReducedMotion}
              springX={springX}
              springY={springY}
              caption={caption}
              variant="plate"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
