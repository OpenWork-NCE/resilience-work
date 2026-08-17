import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/motion/animated";
import { HomeStill } from "@/components/home/home-still";
import { expertiseUiCopy } from "@/content/pages/expertise";
import { activityIdentity } from "@/lib/activity-identity";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";
import type { ExpertiseItem, Locale } from "@/types/content";

interface ActivityCardsProps {
  locale: Locale;
  items: readonly ExpertiseItem[];
  ctaLabel?: string;
}

export function ActivityCards({ locale, items, ctaLabel }: ActivityCardsProps) {
  const label = ctaLabel ?? expertiseUiCopy.learnMore[locale];

  return (
    <StaggerContainer className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item, index) => {
        const identity = activityIdentity[item.id];

        return (
          <StaggerItem key={item.id}>
            <article className="flex h-full flex-col">
              <Link
                href={getLocalizedHref(locale, item.route)}
                className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))]"
              >
                <HomeStill
                  src={item.image.src}
                  alt={item.image.alt[locale]}
                  objectPosition={identity.objectPosition}
                  sizes="(max-width: 640px) 94vw, (max-width: 1280px) 46vw, 30vw"
                  className="aspect-[16/10]"
                />
              </Link>
              <p className="mt-5 font-[family:var(--font-accent)] text-[0.68rem] font-semibold tabular-nums tracking-[0.2em] text-[rgb(var(--accent))]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-[clamp(1.35rem,2vw,1.65rem)] font-medium leading-snug tracking-[-0.03em] text-balance">
                {item.shortTitle[locale]}
              </h3>
              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[rgb(var(--muted-foreground))]">
                {item.summary[locale]}
              </p>
              <Link
                href={getLocalizedHref(locale, item.route)}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[rgb(var(--primary))] transition-colors hover:text-[rgb(var(--primary-hover))]"
              >
                <span>{label}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          </StaggerItem>
        );
      })}
    </StaggerContainer>
  );
}
