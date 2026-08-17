import {
  consultants,
  consultantsSection,
  getConsultantPath,
} from "@/content/consultants";
import { AnimatedSection } from "@/components/motion/animated";
import {
  HOME_MEASURE,
  HomeSectionIntro,
} from "@/components/home/home-section-intro";
import { HomeStill } from "@/components/home/home-still";
import { HomeTextLink } from "@/components/home/home-text-link";
import { localizePathname } from "@/lib/navigation/get-localized-href";
import type { Locale } from "@/types/content";

interface ConsultantsSectionProps {
  locale: Locale;
}

export function ConsultantsSection({ locale }: ConsultantsSectionProps) {
  const copy = consultantsSection;

  return (
    <section
      id="consultants"
      aria-labelledby="home-consultants-title"
      className="bg-[rgb(var(--background))] py-[var(--section-space-lg)]"
    >
      <div className={HOME_MEASURE}>
        <AnimatedSection>
          <HomeSectionIntro
            eyebrow={copy.eyebrow[locale]}
            title={copy.title[locale]}
            titleId="home-consultants-title"
            description={copy.description[locale]}
          />
        </AnimatedSection>

        <div className="mt-12 grid gap-14 md:grid-cols-3 md:gap-8 lg:mt-16 lg:gap-12">
          {consultants.map((consultant, index) => {
            const href = localizePathname(locale, getConsultantPath(consultant.slug));

            return (
              <article key={consultant.id} className="flex flex-col">
                <AnimatedSection>
                  <HomeStill
                    src={consultant.image.src}
                    alt={consultant.image.alt[locale]}
                    objectPosition={consultant.image.objectPosition}
                    sizes="(max-width: 768px) 94vw, 30vw"
                    className="aspect-[4/5]"
                  />
                </AnimatedSection>

                <AnimatedSection delay={0.06} className="mt-6 flex flex-1 flex-col">
                  <p className="font-[family:var(--font-accent)] text-[0.68rem] font-semibold tabular-nums tracking-[0.2em] text-[rgb(var(--accent))]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-[clamp(1.55rem,2.2vw,1.9rem)] font-medium leading-[1.08] tracking-[-0.03em] text-balance">
                    {consultant.name}
                  </h3>
                  <p className="mt-2 font-[family:var(--font-accent)] text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--muted-foreground))]">
                    {consultant.role[locale]}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-base">
                    {consultant.lead[locale]}
                  </p>
                  <div className="mt-auto pt-6">
                    <HomeTextLink href={href}>{copy.cta[locale]}</HomeTextLink>
                  </div>
                </AnimatedSection>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
