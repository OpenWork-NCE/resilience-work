import { homePage } from "@/content/pages/home";
import { AnimatedSection } from "@/components/motion/animated";
import {
  HOME_MEASURE,
  HomeSectionIntro,
} from "@/components/home/home-section-intro";
import { HomeTextLink } from "@/components/home/home-text-link";
import { getLocalizedCta } from "@/lib/navigation/get-navigation";
import type { Locale } from "@/types/content";

interface FinalCtaSectionProps {
  locale: Locale;
}

export function FinalCtaSection({ locale }: FinalCtaSectionProps) {
  const finalCta = homePage.finalCta;
  const contactCta = getLocalizedCta(locale, "scheduleConversation");
  const whatsappCta = getLocalizedCta(locale, "whatsapp");

  return (
    <section
      aria-labelledby="home-final-cta-title"
      className="relative isolate bg-[rgb(var(--hero-void))] text-white"
    >
      <div
        className={`${HOME_MEASURE} flex min-h-[68svh] flex-col justify-end pb-16 pt-24 lg:min-h-[74svh] lg:pb-24 lg:pt-32`}
      >
        <AnimatedSection>
          <HomeSectionIntro invert eyebrow={finalCta.eyebrow[locale]} />
          <h2
            id="home-final-cta-title"
            className="mt-7 max-w-[14ch] font-display text-[clamp(2.6rem,7vw,6.2rem)] font-medium leading-[0.9] tracking-[-0.04em] text-balance"
          >
            {finalCta.title[locale]}
          </h2>
          <p className="mt-7 max-w-[34rem] text-base leading-relaxed text-white/70 sm:text-lg">
            {finalCta.description[locale]}
          </p>
          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
            <HomeTextLink href={contactCta.href} invert>
              {contactCta.label}
            </HomeTextLink>
            <HomeTextLink href={whatsappCta.href} invert external={whatsappCta.external}>
              {whatsappCta.label}
            </HomeTextLink>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
