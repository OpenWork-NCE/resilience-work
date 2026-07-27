import { homePage } from "@/content/pages/home";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Locale } from "@/types/content";

interface ConfidenceSectionProps {
  locale: Locale;
}

export function ConfidenceSection({ locale }: ConfidenceSectionProps) {
  const confidence = homePage.confidence;

  return (
    <Section spacing="md" tone="muted" containerSize="wide">
      <SectionHeader
        eyebrow={confidence.eyebrow[locale]}
        title={confidence.title[locale]}
        description={confidence.description[locale]}
        align="left"
        maxWidth="wide"
        className="mb-8 lg:mb-10"
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {confidence.items.map((item) => (
          <article
            key={item.id}
            className="rounded-[var(--radius-xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] p-5 shadow-[var(--shadow-soft)]"
          >
            <p className="font-[family:var(--font-accent)] text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--accent))]">
              {item.label[locale]}
            </p>
            <p className="mt-3 text-base font-medium leading-relaxed text-[rgb(var(--foreground))]">
              {item.value[locale]}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
