import { StaggerContainer, StaggerItem } from "@/components/motion/animated";
import { SectionHeader } from "@/components/shared/section-header";
import { expertiseIconMap } from "./expertise-icon-map";
import type { LocalizedFeature, Locale } from "@/types/content";

interface ExpertiseOutcomesSectionProps {
  locale: Locale;
  title: string;
  items: readonly LocalizedFeature[];
}

export function ExpertiseOutcomesSection({ locale, title, items }: ExpertiseOutcomesSectionProps) {
  return (
    <div className="rounded-[var(--radius-2xl)] bg-[rgb(var(--accent-soft))] px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
      <SectionHeader
        eyebrow={locale === "fr" ? "Résultats recherchés" : "Expected outcomes"}
        title={title}
        align="left"
        maxWidth="wide"
        className="mb-10"
      />
      <StaggerContainer className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {items.map((item) => {
          const Icon = expertiseIconMap[item.icon as keyof typeof expertiseIconMap] ?? expertiseIconMap.Activity;
          return (
            <StaggerItem
              key={item.id}
              className="rounded-[var(--radius-lg)] border border-[rgb(var(--border-muted))] bg-[color-mix(in_srgb,rgb(var(--surface))_88%,transparent)] p-5 backdrop-blur-sm"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgb(var(--surface))] text-[rgb(var(--accent-foreground))] shadow-[var(--shadow-soft)]">
                <Icon className="h-4 w-4" />
              </div>
              <p className="mt-4 text-sm font-medium leading-relaxed text-[rgb(var(--foreground))] sm:text-base">
                {item.title[locale]}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--muted-foreground))]">
                {item.description[locale]}
              </p>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </div>
  );
}
