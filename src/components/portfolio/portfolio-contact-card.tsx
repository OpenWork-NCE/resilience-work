import { ContactRound, Globe2, Mail, MessageCircle, Phone } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/animated";
import { Section } from "@/components/shared/section";
import { jocelyneKatshindaPage, getJocelyneContactActions } from "@/content/pages/jocelyne-katshinda";
import type { Locale } from "@/types/content";
import { PortfolioActionLink } from "./portfolio-action-link";

const actionIcons = {
  whatsapp: MessageCircle,
  phone: Phone,
  email: Mail,
  website: Globe2,
  vcard: ContactRound,
} as const;

interface PortfolioContactCardProps {
  locale: Locale;
}

export function PortfolioContactCard({ locale }: PortfolioContactCardProps) {
  const section = jocelyneKatshindaPage.finalContact;
  const actions = getJocelyneContactActions(locale);

  return (
    <Section spacing="md">
      <AnimatedSection className="relative overflow-hidden rounded-[var(--radius-2xl)] bg-[rgb(var(--surface-inverse))] px-6 py-8 text-[rgb(var(--inverse-foreground))] shadow-[var(--shadow-elevated)] sm:px-8 lg:px-12 lg:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,color-mix(in_srgb,rgb(var(--inverse-foreground))_10%,transparent),transparent_34%),linear-gradient(135deg,color-mix(in_srgb,rgb(var(--inverse-foreground))_3%,transparent),transparent_45%)]" />
        <div className="relative">
          <p className="font-[family:var(--font-accent)] text-xs font-semibold uppercase tracking-[0.16em] text-[rgb(var(--inverse-muted-foreground))]">
            {section.eyebrow[locale]}
          </p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,36rem)] lg:items-start">
            <div>
              <h2 className="max-w-[15ch] font-display text-[clamp(2.25rem,5vw,3.7rem)] font-medium leading-[1.02] text-balance text-[rgb(var(--inverse-foreground))]">
                {section.title[locale]}
              </h2>
              <p className="mt-5 max-w-[40rem] text-base leading-relaxed text-[rgb(var(--inverse-foreground))] sm:text-lg">
                {section.description[locale]}
              </p>
              <p className="mt-4 max-w-[34rem] text-sm leading-relaxed text-[rgb(var(--inverse-muted-foreground))] sm:text-base">
                {section.note[locale]}
              </p>
            </div>

            <StaggerContainer className="grid gap-3 sm:grid-cols-2">
              {actions.map((action) => {
                const Icon = actionIcons[action.id];

                return (
                  <StaggerItem key={action.id}>
                    <PortfolioActionLink
                      href={action.href}
                      label={action.label}
                      description={action.description}
                      icon={Icon}
                      external={action.external}
                      download={action.download}
                      tone="inverse"
                    />
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </AnimatedSection>
    </Section>
  );
}
