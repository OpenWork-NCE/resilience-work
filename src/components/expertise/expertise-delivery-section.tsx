import { Languages, MapPinned, MonitorSmartphone } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { Badge } from "@/components/ui/badge";
import { expertiseUiCopy } from "@/content/pages/expertise";
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
      title: expertiseUiCopy.deliveryFormatsTitle[locale],
      items: delivery.formats[locale],
    },
    {
      id: "languages",
      icon: Languages,
      title: expertiseUiCopy.deliveryLanguagesTitle[locale],
      items: delivery.languages[locale],
    },
    {
      id: "regions",
      icon: MapPinned,
      title: expertiseUiCopy.deliveryRegionsTitle[locale],
      items: delivery.regions[locale],
    },
  ] as const;

  return (
    <>
      <SectionHeader
        eyebrow={expertiseUiCopy.deliveryEyebrow[locale]}
        title={expertiseUiCopy.deliveryTitle[locale]}
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
