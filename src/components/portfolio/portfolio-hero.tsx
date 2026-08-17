import { ContactRound, Mail, MessageCircle, Phone } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/animated";
import { Badge } from "@/components/ui/badge";
import {
  HOME_MEASURE,
  HomeSectionIntro,
} from "@/components/home/home-section-intro";
import { HomeStill } from "@/components/home/home-still";
import { getJocelyneContactActions, jocelyneKatshindaPage } from "@/content/pages/jocelyne-katshinda";
import type { Locale } from "@/types/content";
import { PortfolioActionLink } from "./portfolio-action-link";

const heroIcons = {
  whatsapp: MessageCircle,
  phone: Phone,
  email: Mail,
  vcard: ContactRound,
} as const;

interface PortfolioHeroProps {
  locale: Locale;
}

export function PortfolioHero({ locale }: PortfolioHeroProps) {
  const hero = jocelyneKatshindaPage.hero;
  const actions = getJocelyneContactActions(locale);
  const primaryActions = actions.filter((action) =>
    ["whatsapp", "phone", "email", "vcard"].includes(action.id)
  );

  return (
    <section
      aria-labelledby="portfolio-hero-title"
      className="relative isolate overflow-hidden bg-[rgb(var(--hero-void))] text-white"
    >
      <div className={`${HOME_MEASURE} grid lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)]`}>
        <AnimatedSection delay={0.1} className="relative min-h-[22rem] lg:order-2 lg:min-h-full">
          <HomeStill
            src={hero.portrait.src}
            alt={hero.portrait.alt[locale]}
            objectPosition={hero.portrait.objectPosition}
            priority
            grain
            sizes="(max-width: 1024px) 94vw, 42vw"
            className="absolute inset-0 aspect-auto min-h-[22rem] lg:min-h-full"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--hero-void))] via-[rgb(var(--hero-void))]/25 to-transparent lg:bg-gradient-to-r lg:from-[rgb(var(--hero-void))] lg:via-[rgb(var(--hero-void))]/28 lg:to-transparent"
            />
            <figcaption className="pointer-events-none absolute bottom-6 left-6 font-[family:var(--font-accent)] text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/60 lg:bottom-auto lg:top-6">
              {hero.regions[locale]}
            </figcaption>
          </HomeStill>
        </AnimatedSection>

        <div className="relative z-[1] flex flex-col justify-center py-12 sm:py-14 lg:order-1 lg:py-20">
          <AnimatedSection>
            <HomeSectionIntro invert eyebrow={hero.eyebrow[locale]} />
          </AnimatedSection>

          <AnimatedSection delay={0.08} className="mt-7">
            <h1
              id="portfolio-hero-title"
              className="max-w-[12ch] font-display text-[clamp(2.65rem,8vw,5.2rem)] font-medium leading-[0.92] tracking-[-0.04em] text-balance"
            >
              {hero.name}
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.12} className="mt-4 max-w-[34rem]">
            <p className="text-lg font-medium leading-relaxed text-white/88 sm:text-xl">
              {hero.role[locale]}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.16} className="mt-6 max-w-[40rem]">
            <p className="text-base leading-relaxed text-white/70 sm:text-[1.05rem]">
              {hero.intro[locale]}
            </p>
            <p className="mt-4 border-l border-white/20 pl-4 text-sm leading-relaxed text-white/55 sm:text-base">
              {hero.goal[locale]}
            </p>
          </AnimatedSection>

          <StaggerContainer className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {primaryActions.map((action) => {
              const Icon = heroIcons[action.id as keyof typeof heroIcons];

              return (
                <StaggerItem
                  key={action.id}
                  className={action.id === "whatsapp" ? "sm:basis-full lg:basis-auto" : ""}
                >
                  <PortfolioActionLink
                    href={action.href}
                    label={action.label}
                    description={action.id === "vcard" ? action.description : undefined}
                    icon={Icon}
                    external={action.external}
                    download={action.download}
                    variant="pill"
                    tone="inverse"
                  />
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <AnimatedSection delay={0.26} className="mt-8 flex flex-wrap gap-3">
            <Badge className="border-white/15 bg-white/10 px-4 py-2 text-white/70">
              {hero.regions[locale]}
            </Badge>
            <Badge className="border-white/15 bg-white/10 px-4 py-2 text-white/70">
              {hero.languages[locale]}
            </Badge>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
