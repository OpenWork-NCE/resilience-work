import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HomeSectionIntro } from "@/components/home/home-section-intro";
import { HomeStill } from "@/components/home/home-still";
import { expertiseItems, expertiseUiCopy } from "@/content/pages/expertise";
import { activityIdentity } from "@/lib/activity-identity";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";
import type { ExpertiseId, Locale } from "@/types/content";

interface ExpertiseRelatedServicesProps {
  locale: Locale;
  ids: readonly ExpertiseId[];
}

export function ExpertiseRelatedServices({ locale, ids }: ExpertiseRelatedServicesProps) {
  const items = expertiseItems.filter((item) => ids.includes(item.id)).slice(0, 3);

  if (items.length === 0) {
    return null;
  }

  return (
    <div>
      <HomeSectionIntro
        eyebrow={expertiseUiCopy.relatedEyebrow[locale]}
        title={expertiseUiCopy.relatedTitle[locale]}
        className="mb-8"
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((item, index) => (
          <article key={item.id} className="flex flex-col">
            <HomeStill
              src={item.image.src}
              alt={item.image.alt[locale]}
              objectPosition={activityIdentity[item.id].objectPosition}
              sizes="(max-width: 640px) 94vw, 46vw"
              className="aspect-[16/10]"
            />
            <p className="mt-4 font-[family:var(--font-accent)] text-[0.68rem] font-semibold tabular-nums tracking-[0.2em] text-[rgb(var(--accent))]">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 font-display text-[clamp(1.3rem,2vw,1.55rem)] font-medium tracking-[-0.03em]">
              {item.shortTitle[locale]}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[rgb(var(--muted-foreground))]">
              {item.summary[locale]}
            </p>
            <Link
              href={getLocalizedHref(locale, item.route)}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[rgb(var(--primary))]"
            >
              <span>{expertiseUiCopy.learnMore[locale]}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
