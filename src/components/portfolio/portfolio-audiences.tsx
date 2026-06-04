import { BriefcaseBusiness, Building2, Globe, Handshake, Landmark, Users } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/animated";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { jocelyneKatshindaPage } from "@/content/pages/jocelyne-katshinda";
import type { Locale } from "@/types/content";

const iconList = [Building2, BriefcaseBusiness, Landmark, Handshake, Users, Globe] as const;

interface PortfolioAudiencesProps {
  locale: Locale;
}

export function PortfolioAudiences({ locale }: PortfolioAudiencesProps) {
  const section = jocelyneKatshindaPage.audiences;

  return (
    <Section spacing="md" tone="muted">
      <AnimatedSection>
        <SectionHeader
          eyebrow={section.eyebrow[locale]}
          title={section.title[locale]}
          description={section.description[locale]}
          align="left"
          maxWidth="wide"
        />
      </AnimatedSection>

      <StaggerContainer className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {section.items.map((item, index) => {
          const Icon = iconList[index] ?? Users;

          return (
            <StaggerItem
              key={item.id}
              className="flex items-start gap-4 rounded-[var(--radius-lg)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] p-5"
            >
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgb(var(--accent-soft))] text-[rgb(var(--accent-foreground))]">
                <Icon className="h-4 w-4" />
              </div>
              <p className="text-sm leading-relaxed text-[rgb(var(--foreground))] sm:text-base">
                {item.label[locale]}
              </p>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
