import { MonitorSmartphone, UsersRound } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import type { Locale } from "@/types/content";

interface TrainingDeliverySectionProps {
  locale: Locale;
  blocks: readonly {
    id: string;
    title: Record<Locale, string>;
    description: Record<Locale, string>;
  }[];
}

export function TrainingDeliverySection({ locale, blocks }: TrainingDeliverySectionProps) {
  const icons = [MonitorSmartphone, UsersRound] as const;

  return (
    <>
      <SectionHeader
        eyebrow={locale === "fr" ? "Formats d’intervention" : "Delivery formats"}
        title={locale === "fr" ? "Des formats ajustés aux besoins des organisations" : "Formats tailored to organisational needs"}
        align="left"
        maxWidth="wide"
      />
      <div className="grid gap-5 lg:grid-cols-2">
        {blocks.map((block, index) => {
          const Icon = icons[index] ?? UsersRound;
          return (
            <div
              key={block.id}
              className="rounded-[var(--radius-xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] p-6"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[rgb(var(--accent-soft))] text-[rgb(var(--accent-foreground))]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="heading-card mt-5">{block.title[locale]}</h3>
              <p className="mt-4 text-base leading-relaxed text-[rgb(var(--muted-foreground))]">{block.description[locale]}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
