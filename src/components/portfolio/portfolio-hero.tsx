import Image from "next/image";
import { ContactRound, Mail, MessageCircle, Phone } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/animated";
import { Container } from "@/components/shared/container";
import { Badge } from "@/components/ui/badge";
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
    <section className="relative isolate overflow-hidden bg-[rgb(var(--surface-inverse))] text-[rgb(var(--inverse-foreground))]">
      <div className="hero-scrim-diagonal absolute inset-0" />
      <div className="absolute inset-x-0 top-0 h-px bg-[color-mix(in_srgb,rgb(var(--inverse-foreground))_12%,transparent)]" />

      <Container size="wide" className="relative z-10 py-10 sm:py-14 lg:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(19rem,24rem)] lg:gap-12">
          <div className="order-2 lg:order-1">
            <AnimatedSection>
              <div className="inline-flex rounded-full border border-[color-mix(in_srgb,rgb(var(--inverse-foreground))_14%,transparent)] bg-[color-mix(in_srgb,rgb(var(--inverse-foreground))_10%,transparent)] px-4 py-2 backdrop-blur-sm">
                <p className="font-[family:var(--font-accent)] text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--inverse-muted-foreground))]">
                  {hero.eyebrow[locale]}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="mt-8">
              <h1 className="font-display text-[clamp(2.65rem,9vw,5rem)] font-medium leading-[0.95] tracking-[-0.04em] text-balance text-[rgb(var(--inverse-foreground))]">
                {hero.name}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.14} className="mt-4 max-w-[34rem]">
              <p className="text-lg font-medium leading-relaxed text-[rgb(var(--inverse-foreground))] sm:text-xl">
                {hero.role[locale]}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.18} className="mt-6 max-w-[42rem]">
              <p className="text-base leading-relaxed text-[color-mix(in_srgb,rgb(var(--inverse-foreground))_88%,transparent)] sm:text-[1.05rem]">
                {hero.intro[locale]}
              </p>
              <p className="mt-4 border-l border-[color-mix(in_srgb,rgb(var(--inverse-foreground))_18%,transparent)] pl-4 text-sm leading-relaxed text-[rgb(var(--inverse-muted-foreground))] sm:text-base">
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
              <Badge className="border-[color-mix(in_srgb,rgb(var(--inverse-foreground))_12%,transparent)] bg-[color-mix(in_srgb,rgb(var(--inverse-foreground))_10%,transparent)] px-4 py-2 text-[rgb(var(--inverse-muted-foreground))]">
                {hero.regions[locale]}
              </Badge>
              <Badge className="border-[color-mix(in_srgb,rgb(var(--inverse-foreground))_12%,transparent)] bg-[color-mix(in_srgb,rgb(var(--inverse-foreground))_10%,transparent)] px-4 py-2 text-[rgb(var(--inverse-muted-foreground))]">
                {hero.languages[locale]}
              </Badge>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.16} className="order-1 lg:order-2">
            <div className="mx-auto max-w-[20rem] rounded-[calc(var(--radius-xl)+0.5rem)] border border-[color-mix(in_srgb,rgb(var(--inverse-foreground))_12%,transparent)] bg-[color-mix(in_srgb,rgb(var(--inverse-foreground))_10%,transparent)] p-3 shadow-[var(--shadow-floating)] backdrop-blur-md sm:max-w-[24rem] lg:ml-auto">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-xl)]">
                <Image
                  src={hero.portrait.src}
                  alt={hero.portrait.alt[locale]}
                  fill
                  priority
                  sizes="(min-width: 1024px) 24rem, 80vw"
                  className="object-cover"
                  style={{ objectPosition: hero.portrait.objectPosition ?? "center" }}
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
