import Link from "next/link";
import { ArrowRight, UsersRound } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/shared/card";
import { Button } from "@/components/shared/button";
import type { Locale, TrainingTopic } from "@/types/content";

interface TrainingTopicCardProps {
  locale: Locale;
  topic: TrainingTopic;
  contactHref: string;
}

export function TrainingTopicCard({ locale, topic, contactHref }: TrainingTopicCardProps) {
  return (
    <Card className="h-full">
      <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[rgb(var(--accent-soft))] text-[rgb(var(--accent-foreground))]">
        <UsersRound className="h-5 w-5" />
      </div>
      <CardTitle className="mt-5 font-display text-2xl font-medium">{topic.title[locale]}</CardTitle>
      <CardDescription className="mt-3 text-base">{topic.summary[locale]}</CardDescription>
      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[rgb(var(--accent))]">
          {locale === "fr" ? "Publics concernés" : "Relevant audiences"}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[rgb(var(--muted-foreground))]">
          {topic.audiences[locale].join(" · ")}
        </p>
      </div>
      <div className="mt-6">
        <Link href={contactHref}>
          <Button variant="secondary" rightIcon={<ArrowRight className="h-4 w-4" />}>
            {locale === "fr" ? "Échanger sur vos besoins" : "Discuss your needs"}
          </Button>
        </Link>
      </div>
    </Card>
  );
}
