import { homePage } from "@/content/pages/home";
import { expertiseItems } from "@/content/pages/expertise";
import { AnimatedSection } from "@/components/motion/animated";
import {
  HOME_MEASURE,
  HomeSectionIntro,
} from "@/components/home/home-section-intro";
import { HomeStill } from "@/components/home/home-still";
import { HomeTextLink } from "@/components/home/home-text-link";
import { activityIdentity } from "@/lib/activity-identity";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types/content";

interface ExpertiseSectionProps {
  locale: Locale;
}

export function ExpertiseSection({ locale }: ExpertiseSectionProps) {
  return (
    <section
      aria-labelledby="home-expertise-title"
      className="bg-[rgb(var(--background))] py-[var(--section-space-lg)]"
    >
      <div className={HOME_MEASURE}>
        <AnimatedSection>
          <HomeSectionIntro
            eyebrow={homePage.expertise.eyebrow[locale]}
            title={homePage.expertise.title[locale]}
            titleId="home-expertise-title"
            description={homePage.expertise.description[locale]}
          />
        </AnimatedSection>

        <div className="mt-12 border-t border-[rgb(var(--border-muted))] lg:mt-16">
          {expertiseItems.map((item, index) => {
            const identity = activityIdentity[item.id];
            const reverse = index % 2 === 1;

            return (
              <article
                key={item.id}
                className="grid items-center gap-8 border-b border-[rgb(var(--border-muted))] py-12 lg:grid-cols-2 lg:gap-20 lg:py-16"
              >
                <AnimatedSection className={cn(reverse && "lg:order-2")}>
                  <p className="font-[family:var(--font-accent)] text-[0.68rem] font-semibold tabular-nums tracking-[0.2em] text-[rgb(var(--accent))]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 font-display text-[clamp(1.8rem,3.4vw,2.7rem)] font-medium leading-[1.05] tracking-[-0.03em] text-balance">
                    {item.shortTitle[locale]}
                  </h3>
                  <p className="mt-4 max-w-[34rem] text-base leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-lg">
                    {item.summary[locale]}
                  </p>
                  <HomeTextLink
                    href={getLocalizedHref(locale, item.route)}
                    className="mt-7"
                  >
                    {homePage.expertise.itemCta.label[locale]}
                  </HomeTextLink>
                </AnimatedSection>

                <AnimatedSection
                  delay={0.06}
                  className={cn(reverse && "lg:order-1")}
                >
                  <HomeStill
                    src={item.image.src}
                    alt={item.image.alt[locale]}
                    objectPosition={identity.objectPosition}
                    sizes="(max-width: 1024px) 94vw, 46vw"
                    className="aspect-[16/10]"
                  />
                </AnimatedSection>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
