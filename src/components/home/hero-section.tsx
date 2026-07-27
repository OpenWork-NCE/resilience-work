import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homePage } from "@/content/pages/home";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/shared/button";
import { AnimatedSection } from "@/components/motion/animated";
import { getLocalizedCta } from "@/lib/navigation/get-navigation";
import { Locale } from "@/types/content";

interface HeroSectionProps {
  locale: Locale;
}

export function HeroSection({ locale }: HeroSectionProps) {
  const hero = homePage.hero;
  const primaryCta = getLocalizedCta(locale, "scheduleConversation");
  const secondaryCta = getLocalizedCta(locale, "discoverExpertise");
  const heroHighlights = homePage.highlights.slice(0, 2);

  return (
    <section className="relative isolate flex min-h-[88svh] items-end overflow-hidden bg-[rgb(var(--surface-inverse))]">
      <Image
        src={hero.image.src}
        alt={hero.image.alt[locale]}
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: hero.image.objectPosition ?? "center" }}
      />

      <div className="hero-scrim-horizontal absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_26%,color-mix(in_srgb,rgb(var(--accent-soft))_55%,transparent),transparent_42%)]" />

      <Container size="wide" className="relative z-10 w-full pb-14 pt-16 sm:pb-18 sm:pt-18 lg:pb-24 lg:pt-20">
        <div className="mx-auto grid w-full max-w-[78rem] items-end gap-10 px-5 sm:px-6 xl:px-7 xl:grid-cols-[minmax(0,1fr)_16rem] xl:gap-8">
          <div className="min-w-0 max-w-[min(44rem,100%)]">
            <AnimatedSection>
              <p className="mb-5 inline-flex rounded-full border border-[color-mix(in_srgb,rgb(var(--inverse-foreground))_18%,transparent)] bg-[color-mix(in_srgb,rgb(var(--inverse-foreground))_8%,transparent)] px-4 py-2 font-[family:var(--font-accent)] text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color-mix(in_srgb,rgb(var(--inverse-foreground))_88%,transparent)] backdrop-blur-sm">
                {hero.eyebrow[locale]}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.06}>
              <h1 className="max-w-full text-pretty break-words font-display text-[clamp(2.45rem,9vw,4rem)] font-medium leading-[1] text-[rgb(var(--inverse-foreground))] sm:max-w-[15ch] sm:text-[clamp(3.15rem,5.8vw,4.35rem)] sm:leading-[0.98] lg:text-[clamp(3.75rem,5vw,5rem)] lg:leading-[0.93]">
                {hero.title[locale]}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.12}>
              <p className="mt-6 max-w-xl text-[0.98rem] leading-relaxed text-[color-mix(in_srgb,rgb(var(--inverse-foreground))_88%,transparent)] sm:text-base lg:text-[1.08rem]">
                {hero.description[locale]}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.18}>
              <p className="mt-5 max-w-xl border-l border-[color-mix(in_srgb,rgb(var(--inverse-foreground))_18%,transparent)] pl-4 text-[0.92rem] leading-relaxed text-[rgb(var(--inverse-muted-foreground))] sm:text-[0.98rem] lg:text-[1rem]">
                {hero.supportingText[locale]}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.24}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href={primaryCta.href} className="block w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto" rightIcon={<ArrowRight className="h-4 w-4" />}>
                    {primaryCta.label}
                  </Button>
                </Link>
                <Link href={secondaryCta.href} className="block w-full sm:w-auto">
                  <Button variant="onInverse" size="lg" className="w-full sm:w-auto">
                    {secondaryCta.label}
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection
            delay={0.28}
            className="hidden self-end rounded-[var(--radius-xl)] border border-[color-mix(in_srgb,rgb(var(--inverse-foreground))_14%,transparent)] bg-[color-mix(in_srgb,rgb(var(--inverse-foreground))_8%,transparent)] p-5 backdrop-blur-md xl:block"
          >
            <div className="space-y-4">
              {heroHighlights.map((item, index) => (
                <div
                  key={item.id}
                  className={
                    index === 0
                      ? "border-b border-[color-mix(in_srgb,rgb(var(--inverse-foreground))_14%,transparent)] pb-4"
                      : ""
                  }
                >
                  <p className="font-[family:var(--font-accent)] text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--inverse-muted-foreground))]">
                    {item.label[locale]}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[color-mix(in_srgb,rgb(var(--inverse-foreground))_88%,transparent)]">
                    {item.value[locale]}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
