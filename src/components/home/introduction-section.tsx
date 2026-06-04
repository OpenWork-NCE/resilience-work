import { homePage } from "@/content/pages/home";
import { Container } from "@/components/shared/container";
import { Eyebrow } from "@/components/ui/content";
import { AnimatedSection } from "@/components/motion/animated";
import { Locale } from "@/types/content";

interface IntroductionSectionProps {
  locale: Locale;
}

export function IntroductionSection({ locale }: IntroductionSectionProps) {
  const intro = homePage.intro;

  return (
    <section className="bg-[rgb(var(--background))] py-[var(--section-space-lg)]">
      <Container size="wide">
        <div className="mx-auto grid max-w-[78rem] gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          <AnimatedSection className="space-y-5">
            <Eyebrow>{intro.eyebrow[locale]}</Eyebrow>
            <h2 className="max-w-[12ch] font-display text-[clamp(2.15rem,4.5vw,3.2rem)] font-medium leading-[1.03] text-balance">
              {intro.title[locale]}
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.08} className="max-w-2xl space-y-5 self-center">
            {intro.paragraphs[locale].map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-lg lg:text-[1.08rem]"
              >
                {paragraph}
              </p>
            ))}
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
