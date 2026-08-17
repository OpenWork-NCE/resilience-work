import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { AnimatedSection } from "@/components/motion/animated";
import { Button } from "@/components/shared/button";
import { Section } from "@/components/shared/section";
import { HomeSectionIntro } from "@/components/home/home-section-intro";
import { HomeStill } from "@/components/home/home-still";
import { jocelyneKatshindaPage } from "@/content/pages/jocelyne-katshinda";
import { getLocalizedCta } from "@/lib/navigation/get-navigation";
import type { Locale } from "@/types/content";

interface PortfolioContactCardProps {
  locale: Locale;
}

export function PortfolioContactCard({ locale }: PortfolioContactCardProps) {
  const section = jocelyneKatshindaPage.finalContact;
  const hero = jocelyneKatshindaPage.hero;
  const contactCta = getLocalizedCta(locale, "scheduleConversation");
  const whatsappCta = getLocalizedCta(locale, "whatsapp");

  return (
    <Section spacing="sm" tone="default" containerSize="home">
      <AnimatedSection>
        <div className="relative isolate overflow-hidden rounded-[var(--radius-2xl)] bg-[rgb(var(--surface-inverse))] text-[rgb(var(--inverse-foreground))] shadow-[var(--shadow-elevated)] lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,color-mix(in_srgb,rgb(var(--inverse-foreground))_10%,transparent),transparent_34%),linear-gradient(135deg,color-mix(in_srgb,rgb(var(--inverse-foreground))_3%,transparent),transparent_52%)]"
          />

          <div className="relative flex flex-col justify-between px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14 xl:px-16 xl:py-16">
            <div>
              <HomeSectionIntro invert eyebrow={section.eyebrow[locale]} />
              <h2 className="mt-7 max-w-[14ch] font-display text-[clamp(2.25rem,4.8vw,3.8rem)] font-medium leading-[1.02] tracking-[-0.03em] text-balance text-[rgb(var(--inverse-foreground))]">
                {section.title[locale]}
              </h2>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
              <Link href={contactCta.href} className="w-full sm:w-auto">
                <Button
                  variant="inverse"
                  size="lg"
                  className="w-full min-h-12 sm:w-auto"
                  rightIcon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
                >
                  {contactCta.label}
                </Button>
              </Link>
              <a
                href={whatsappCta.href}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outlineInverse"
                  size="lg"
                  className="w-full min-h-12 sm:w-auto"
                  leftIcon={<MessageCircle className="h-4 w-4" aria-hidden="true" />}
                >
                  {whatsappCta.label}
                </Button>
              </a>
            </div>
          </div>

          <HomeStill
            src={hero.portrait.src}
            alt={hero.portrait.alt[locale]}
            objectPosition={hero.portrait.objectPosition}
            grain
            sizes="(max-width: 1024px) 94vw, 40vw"
            className="relative aspect-[16/10] lg:aspect-auto lg:min-h-full"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--surface-inverse))] via-[rgb(var(--surface-inverse))]/20 to-transparent lg:bg-gradient-to-r lg:from-[rgb(var(--surface-inverse))] lg:via-[rgb(var(--surface-inverse))]/25 lg:to-transparent"
            />
            <figcaption className="pointer-events-none absolute bottom-6 left-6 font-[family:var(--font-accent)] text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/60 lg:bottom-auto lg:top-6">
              {hero.regions[locale]}
            </figcaption>
          </HomeStill>
        </div>
      </AnimatedSection>
    </Section>
  );
}
