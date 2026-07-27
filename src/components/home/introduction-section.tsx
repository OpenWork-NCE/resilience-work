import { homePage } from "@/content/pages/home";
import { Section } from "@/components/shared/section";
import { Eyebrow } from "@/components/ui/content";
import { AnimatedSection } from "@/components/motion/animated";
import type { Locale } from "@/types/content";

interface IntroductionSectionProps {
  locale: Locale;
}

export function IntroductionSection({ locale }: IntroductionSectionProps) {
  const intro = homePage.intro;

  return (
    <Section spacing="lg" tone="default" containerSize="wide" className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -right-24 top-10 h-56 w-56 rounded-full bg-[rgb(var(--accent))] opacity-[0.05] blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-[78rem] gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:items-center">
        <AnimatedSection className="space-y-5">
          <Eyebrow>{intro.eyebrow[locale]}</Eyebrow>
          <h2 className="max-w-[14ch] font-display text-[clamp(2.15rem,4.5vw,3.35rem)] font-medium leading-[1.03] text-balance">
            {intro.title[locale]}
          </h2>
          <div
            aria-hidden="true"
            className="hidden h-1 w-14 rounded-full bg-[rgb(var(--accent))] lg:block"
          />
        </AnimatedSection>

        <AnimatedSection delay={0.08} className="max-w-2xl space-y-5 self-center">
          {intro.paragraphs[locale].map((paragraph, index) => (
            <p
              key={paragraph}
              className={
                index === 0
                  ? "text-base font-medium leading-relaxed text-[rgb(var(--foreground))] sm:text-lg lg:text-[1.08rem]"
                  : "text-base leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-lg lg:text-[1.05rem]"
              }
            >
              {paragraph}
            </p>
          ))}
        </AnimatedSection>
      </div>
    </Section>
  );
}
