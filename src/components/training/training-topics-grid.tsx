import { HomeSectionIntro } from "@/components/home/home-section-intro";
import { Card } from "@/components/shared/card";
import { trainingUiCopy } from "@/content/pages/training";
import type { Locale, TrainingTopic } from "@/types/content";

interface TrainingTopicsGridProps {
  locale: Locale;
  topics: readonly TrainingTopic[];
  contactHref: string;
}

export function TrainingTopicsGrid({ locale, topics }: TrainingTopicsGridProps) {
  return (
    <>
      <HomeSectionIntro
        eyebrow={trainingUiCopy.catalogue[locale]}
        title={trainingUiCopy.catalogueTitle[locale]}
        className="mb-8"
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {topics.map((topic, index) => (
          <Card key={topic.id} variant="elevated" className="h-full p-5">
            <p className="font-[family:var(--font-accent)] text-[0.62rem] font-semibold tabular-nums tracking-[0.2em] text-[rgb(var(--accent))]">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 font-display text-[clamp(1.2rem,2vw,1.4rem)] font-medium leading-snug tracking-[-0.02em]">
              {topic.title[locale]}
            </h3>
            <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[rgb(var(--muted-foreground))]">
              {topic.summary[locale]}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-[rgb(var(--muted-foreground))]">
              {topic.audiences[locale].join(" · ")}
            </p>
          </Card>
        ))}
      </div>
    </>
  );
}
