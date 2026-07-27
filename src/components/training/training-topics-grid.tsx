import { SectionHeader } from "@/components/shared/section-header";
import { trainingUiCopy } from "@/content/pages/training";
import { TrainingTopicCard } from "./training-topic-card";
import type { Locale, TrainingTopic } from "@/types/content";

interface TrainingTopicsGridProps {
  locale: Locale;
  topics: readonly TrainingTopic[];
  contactHref: string;
}

export function TrainingTopicsGrid({ locale, topics, contactHref }: TrainingTopicsGridProps) {
  return (
    <>
      <SectionHeader
        eyebrow={trainingUiCopy.catalogue[locale]}
        title={trainingUiCopy.catalogueTitle[locale]}
        align="left"
        maxWidth="wide"
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {topics.map((topic) => (
          <TrainingTopicCard key={topic.id} locale={locale} topic={topic} contactHref={contactHref} />
        ))}
      </div>
    </>
  );
}
