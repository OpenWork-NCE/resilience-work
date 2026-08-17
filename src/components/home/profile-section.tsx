import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe2, ShieldCheck, Sparkles } from "lucide-react";
import { homePage } from "@/content/pages/home";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/shared/button";
import { Eyebrow } from "@/components/ui/content";
import { AnimatedSection } from "@/components/motion/animated";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types/content";

interface ProfileSectionProps {
  locale: Locale;
}

const highlightIcons = [Globe2, Sparkles, ShieldCheck] as const;

export function ProfileSection({ locale }: ProfileSectionProps) {
  const profile = homePage.profile;
  const portfolioHref = getLocalizedHref(locale, profile.portfolioCta.route);
  const contactHref = getLocalizedHref(locale, "contact");

  return (
    <Section spacing="lg" tone="default" containerSize="wide">
      <div
        className={cn(
          "relative overflow-hidden rounded-[var(--radius-2xl)]",
          "border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] shadow-[var(--shadow-card)]",
          "lg:grid lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]"
        )}
      >
        {/* Portrait column */}
        <AnimatedSection className="relative min-h-[22rem] lg:min-h-full">
          <div className="relative h-full min-h-[22rem] overflow-hidden bg-[rgb(var(--surface-subtle))] lg:absolute lg:inset-0 lg:min-h-0">
            <Image
              src={profile.image.src}
              alt={profile.image.alt[locale]}
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover"
              style={{ objectPosition: profile.image.objectPosition ?? "center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-[rgb(var(--surface))]/40" />

            {/* Mobile name overlay on image */}
            <div className="absolute inset-x-0 bottom-0 p-6 lg:hidden">
              <p className="font-[family:var(--font-accent)] text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white/75">
                {profile.eyebrow[locale]}
              </p>
              <p className="mt-2 text-2xl font-semibold text-white">{profile.name}</p>
              <p className="mt-1 text-sm text-white/80">{profile.role[locale]}</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Content column */}
        <AnimatedSection delay={0.08} className="relative flex flex-col justify-center p-6 sm:p-8 lg:p-10 xl:p-12">
          <Eyebrow className="hidden lg:inline-flex">{profile.eyebrow[locale]}</Eyebrow>

          <h2 className="mt-0 max-w-[18ch] font-display text-[clamp(2rem,4.2vw,3.15rem)] font-medium leading-[1.02] text-balance lg:mt-4">
            {profile.title[locale]}
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-lg">
            {profile.description[locale]}
          </p>

          <ul className="mt-7 flex flex-wrap gap-2.5">
            {profile.highlights.map((item, index) => {
              const Icon = highlightIcons[index] ?? Sparkles;
              return (
                <li
                  key={item.id}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border-muted))]",
                    "bg-[rgb(var(--surface-muted))] px-3.5 py-2 text-sm font-medium text-[rgb(var(--foreground))]"
                  )}
                >
                  <Icon
                    className="h-3.5 w-3.5 shrink-0 text-[rgb(var(--accent))]"
                    aria-hidden="true"
                  />
                  {item.label[locale]}
                </li>
              );
            })}
          </ul>

          <div className="mt-8 hidden border-t border-[rgb(var(--border-muted))] pt-6 lg:block">
            <div className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="mt-1 h-12 w-1 shrink-0 rounded-full bg-[rgb(var(--accent))]"
              />
              <div>
                <p className="text-2xl font-semibold tracking-tight text-[rgb(var(--foreground))]">
                  {profile.name}
                </p>
                <p className="mt-1.5 text-base text-[rgb(var(--muted-foreground))]">
                  {profile.role[locale]}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href={portfolioHref} className="block w-full sm:w-auto">
              <Button
                variant="primary"
                className="w-full sm:w-auto"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                {profile.portfolioCta.label[locale]}
              </Button>
            </Link>
            <Link href={contactHref} className="block w-full sm:w-auto">
              <Button variant="secondary" className="w-full sm:w-auto">
                {profile.cta.label[locale]}
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </Section>
  );
}
