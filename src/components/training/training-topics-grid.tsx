import { SectionHeader } from "@/components/shared/section-header";
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
        eyebrow={locale === "fr" ? "Catalogue" : "Catalogue"}
        title={locale === "fr" ? "Des contenus conçus pour transmettre des repères concrets" : "Content designed to share practical reference points"}
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
