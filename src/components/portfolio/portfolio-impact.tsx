import { HeartPulse, ShieldCheck, Sparkles, Target, Users } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/animated";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { jocelyneKatshindaPage } from "@/content/pages/jocelyne-katshinda";
import type { Locale } from "@/types/content";

const iconList = [HeartPulse, Sparkles, ShieldCheck, Users, Target] as const;

interface PortfolioImpactProps {
  locale: Locale;
}

export function PortfolioImpact({ locale }: PortfolioImpactProps) {
  const section = jocelyneKatshindaPage.impact;

  return (
    <Section spacing="md">
      <div className="rounded-[var(--radius-2xl)] bg-[rgb(var(--accent-soft))] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
        <AnimatedSection>
          <SectionHeader
            eyebrow={section.eyebrow[locale]}
            title={section.title[locale]}
            description={section.description[locale]}
            align="left"
            maxWidth="wide"
            className="mb-10"
          />
        </AnimatedSection>

        <StaggerContainer className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {section.items[locale].map((item, index) => {
            const Icon = iconList[index] ?? Target;

            return (
              <StaggerItem
                key={item}
                className="rounded-[var(--radius-lg)] border border-[rgba(16,43,58,0.08)] bg-white/70 p-5 backdrop-blur-sm dark:bg-[rgb(var(--surface))]"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgb(var(--surface))] text-[rgb(var(--accent-foreground))] shadow-[var(--shadow-soft)]">
                  <Icon className="h-4 w-4" />
                </div>
                <p className="mt-4 text-sm font-medium leading-relaxed text-[rgb(var(--foreground))] sm:text-base">
                  {item}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </Section>
  );
}
