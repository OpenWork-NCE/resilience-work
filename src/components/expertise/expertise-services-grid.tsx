import { StaggerContainer, StaggerItem } from "@/components/motion/animated";
import { Card, CardDescription, CardTitle } from "@/components/shared/card";
import { SectionHeader } from "@/components/shared/section-header";
import { expertiseIconMap } from "./expertise-icon-map";
import type { LocalizedFeature, Locale } from "@/types/content";

interface ExpertiseServicesGridProps {
  locale: Locale;
  title: string;
  items: readonly LocalizedFeature[];
}

export function ExpertiseServicesGrid({ locale, title, items }: ExpertiseServicesGridProps) {
  return (
    <>
      <SectionHeader
        eyebrow={locale === "fr" ? "Services" : "Services"}
        title={title}
        align="left"
        maxWidth="wide"
      />
      <StaggerContainer className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => {
          const Icon = expertiseIconMap[item.icon as keyof typeof expertiseIconMap] ?? expertiseIconMap.Activity;
          return (
            <StaggerItem key={item.id}>
              <Card variant="muted" className="h-full">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgb(var(--surface))] text-[rgb(var(--accent))]">
                  <Icon className="h-4 w-4" />
                </div>
                <CardTitle className="mt-5 text-lg">{item.title[locale]}</CardTitle>
                <CardDescription className="mt-3 text-sm">{item.description[locale]}</CardDescription>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </>
  );
}
