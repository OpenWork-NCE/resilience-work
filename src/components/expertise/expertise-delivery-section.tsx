import { Languages, MapPinned, MonitorSmartphone } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import type { ExpertiseDetailPage, Locale } from "@/types/content";

interface ExpertiseDeliverySectionProps {
  locale: Locale;
  delivery: ExpertiseDetailPage["delivery"];
}

export function ExpertiseDeliverySection({ locale, delivery }: ExpertiseDeliverySectionProps) {
  const blocks = [
    {
      id: "formats",
      icon: MonitorSmartphone,
      title: locale === "fr" ? "Formats d’intervention" : "Delivery formats",
      items: delivery.formats[locale],
    },
    {
      id: "languages",
      icon: Languages,
      title: locale === "fr" ? "Langues de prestation" : "Service languages",
      items: delivery.languages[locale],
    },
    {
      id: "regions",
      icon: MapPinned,
      title: locale === "fr" ? "Zones d’intervention" : "Regions",
      items: delivery.regions[locale],
    },
  ] as const;

  return (
    <>
      <SectionHeader
        eyebrow={locale === "fr" ? "Formats d’intervention" : "How support is delivered"}
        title={locale === "fr" ? "Des modalités adaptées au contexte de chaque organisation" : "Delivery formats adapted to each organisation’s context"}
        align="left"
        maxWidth="wide"
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {blocks.map((block) => (
          <div
            key={block.id}
            className="rounded-[var(--radius-xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] p-6"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[rgb(var(--accent-soft))] text-[rgb(var(--accent-foreground))]">
              <block.icon className="h-5 w-5" />
            </div>
            <h3 className="heading-card mt-5">{block.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {block.items.map((item) => (
                <Badge key={item} className="px-4 py-2 text-sm">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
