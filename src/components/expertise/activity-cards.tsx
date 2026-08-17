import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/motion/animated";
import { ImageFrame } from "@/components/ui/image-frame";
import { expertiseIconMap } from "@/components/expertise/expertise-icon-map";
import { expertiseUiCopy } from "@/content/pages/expertise";
import { activityIdentity } from "@/lib/activity-identity";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";
import { cn } from "@/lib/utils";
import type { ExpertiseItem, Locale } from "@/types/content";

interface ActivityCardsProps {
  locale: Locale;
  items: readonly ExpertiseItem[];
  ctaLabel?: string;
}

export function ActivityCards({ locale, items, ctaLabel }: ActivityCardsProps) {
  const label = ctaLabel ?? expertiseUiCopy.learnMore[locale];

  return (
    <StaggerContainer className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => {
        const Icon =
          expertiseIconMap[item.icon as keyof typeof expertiseIconMap] ??
          expertiseIconMap.Globe2;
        const identity = activityIdentity[item.id];

        return (
          <StaggerItem key={item.id}>
            <Link
              href={getLocalizedHref(locale, item.route)}
              className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2"
            >
              <article
                className={cn(
                  "flex h-full flex-col overflow-hidden rounded-[var(--radius-xl)]",
                  "border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))]",
                  "shadow-[var(--shadow-soft)]",
                  "transition-[transform,box-shadow,border-color] duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
                  "hover:-translate-y-0.5 hover:border-[rgb(var(--border-strong))] hover:shadow-[var(--shadow-elevated)]"
                )}
              >
                <ImageFrame
                  src={item.image.src}
                  alt={item.image.alt[locale]}
                  width={item.image.width}
                  height={item.image.height}
                  aspectRatio="16/10"
                  objectPosition={identity.objectPosition}
                  className="rounded-none"
                />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={cn(
                        "inline-flex h-11 w-11 items-center justify-center rounded-full",
                        identity.iconClassName
                      )}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-[family:var(--font-accent)] text-xs font-semibold uppercase tracking-[0.16em] text-[rgb(var(--accent))]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-medium leading-tight text-balance">
                    {item.shortTitle[locale]}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-base">
                    {item.summary[locale]}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[rgb(var(--primary))]">
                    <span>{label}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-[var(--duration-fast)] group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            </Link>
          </StaggerItem>
        );
      })}
    </StaggerContainer>
  );
}
