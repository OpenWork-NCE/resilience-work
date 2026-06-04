import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
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
  const primaryCta = getLocalizedCta(locale, "discoverExpertise");
  const secondaryCta = getLocalizedCta(locale, "scheduleConversation");
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

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,29,40,0.9)_0%,rgba(7,29,40,0.78)_38%,rgba(7,29,40,0.3)_68%,rgba(7,29,40,0.08)_100%)] dark:bg-[linear-gradient(90deg,rgba(3,16,22,0.92)_0%,rgba(3,16,22,0.84)_42%,rgba(3,16,22,0.42)_72%,rgba(3,16,22,0.14)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_26%,rgba(221,241,244,0.16),transparent_42%)] dark:bg-[radial-gradient(circle_at_16%_26%,rgba(109,175,192,0.18),transparent_42%)]" />

      <Container size="wide" className="relative z-10 w-full pb-14 pt-16 sm:pb-18 sm:pt-18 lg:pb-24 lg:pt-20">
        <div className="mx-auto grid w-full max-w-[78rem] items-end gap-10 px-5 sm:px-6 xl:px-7 xl:grid-cols-[minmax(0,1fr)_16rem] xl:gap-8">
          <div className="min-w-0 max-w-[min(44rem,100%)]">
            <AnimatedSection>
              <p className="mb-5 inline-flex rounded-full border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.08)] px-4 py-2 font-[family:var(--font-accent)] text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white/86 backdrop-blur-sm">
                {hero.eyebrow[locale]}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.06}>
              <h1 className="max-w-full text-pretty break-words font-display text-[clamp(2.45rem,9vw,4rem)] font-medium leading-[1] text-white sm:max-w-[15ch] sm:text-[clamp(3.15rem,5.8vw,4.35rem)] sm:leading-[0.98] lg:text-[clamp(3.75rem,5vw,5rem)] lg:leading-[0.93]">
                {hero.title[locale]}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.12}>
              <p className="mt-6 max-w-xl text-[0.98rem] leading-relaxed text-white/88 sm:text-base lg:text-[1.08rem]">
                {hero.description[locale]}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.18}>
              <p className="mt-5 max-w-xl border-l border-white/18 pl-4 text-[0.92rem] leading-relaxed text-white/72 sm:text-[0.98rem] lg:text-[1rem]">
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
                  <Button
                    variant="secondary"
                    size="lg"
                    className="w-full border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/18 sm:w-auto"
                    leftIcon={<MessageCircle className="h-4 w-4" />}
                  >
                    {secondaryCta.label}
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection
            delay={0.28}
            className="hidden self-end rounded-[var(--radius-xl)] border border-white/12 bg-[rgba(255,255,255,0.08)] p-5 backdrop-blur-md xl:block"
          >
            <div className="space-y-4">
              {heroHighlights.map((item, index) => (
                <div key={item.id} className={index === 0 ? "border-b border-white/12 pb-4" : ""}>
                  <p className="font-[family:var(--font-accent)] text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white/62">
                    {item.label[locale]}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/86">
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
