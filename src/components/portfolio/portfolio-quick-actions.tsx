import { ContactRound, Globe2, Mail, MessageCircle, Phone } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/animated";
import { Section } from "@/components/shared/section";
import { HomeSectionIntro } from "@/components/home/home-section-intro";
import { getJocelyneContactActions, jocelyneKatshindaPage } from "@/content/pages/jocelyne-katshinda";
import type { Locale } from "@/types/content";
import { PortfolioActionLink } from "./portfolio-action-link";

const actionIcons = {
  whatsapp: MessageCircle,
  phone: Phone,
  email: Mail,
  website: Globe2,
  vcard: ContactRound,
} as const;

interface PortfolioQuickActionsProps {
  locale: Locale;
}

export function PortfolioQuickActions({ locale }: PortfolioQuickActionsProps) {
  const section = jocelyneKatshindaPage.quickActions;
  const actions = getJocelyneContactActions(locale);

  return (
    <Section spacing="md" tone="default" containerSize="home">
      <AnimatedSection>
        <HomeSectionIntro
          eyebrow={section.eyebrow[locale]}
          title={section.title[locale]}
          description={section.description[locale]}
          className="mb-10 lg:mb-12"
        />
      </AnimatedSection>

      <StaggerContainer className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
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
              />
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
