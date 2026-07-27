import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/motion/animated";
import { Card, CardDescription, CardTitle } from "@/components/shared/card";
import { ImageFrame } from "@/components/ui/image-frame";
import { expertiseUiCopy } from "@/content/pages/expertise";
import { expertiseIconMap } from "./expertise-icon-map";
import type { ExpertiseItem, Locale } from "@/types/content";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";

interface ExpertiseOverviewGridProps {
  locale: Locale;
  items: readonly ExpertiseItem[];
}

export function ExpertiseOverviewGrid({ locale, items }: ExpertiseOverviewGridProps) {
  return (
    <StaggerContainer className="grid gap-5 lg:grid-cols-2">
      {items.map((item, index) => {
        const Icon = expertiseIconMap[item.icon as keyof typeof expertiseIconMap] ?? expertiseIconMap.Globe2;

        return (
          <StaggerItem key={item.id}>
            <Link
              href={getLocalizedHref(locale, item.route)}
              className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2"
            >
              <Card variant="editorial" hover className="h-full overflow-hidden p-0">
                <ImageFrame
                  src={item.image.src}
                  alt={item.image.alt[locale]}
                  width={item.image.width}
                  height={item.image.height}
                  aspectRatio="16/9"
                  objectPosition={item.image.objectPosition}
                  className="rounded-none"
                />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[rgb(var(--accent-soft))] text-[rgb(var(--accent-foreground))]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-[family:var(--font-accent)] text-xs font-semibold uppercase tracking-[0.16em] text-[rgb(var(--accent))]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <CardTitle className="mt-5 font-display text-2xl font-medium leading-tight">
                    {item.title[locale]}
                  </CardTitle>
                  <CardDescription className="mt-3 text-base">
                    {item.summary[locale]}
                  </CardDescription>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[rgb(var(--primary))]">
                    <span>{expertiseUiCopy.learnMore[locale]}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1" />
                  </div>
                </div>
              </Card>
            </Link>
          </StaggerItem>
        );
      })}
    </StaggerContainer>
  );
}
