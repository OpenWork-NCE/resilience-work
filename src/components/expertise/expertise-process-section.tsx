import { SectionHeader } from "@/components/shared/section-header";
import type { LocalizedProcessStep, Locale } from "@/types/content";

interface ExpertiseProcessSectionProps {
  locale: Locale;
  items: readonly LocalizedProcessStep[];
}

export function ExpertiseProcessSection({ locale, items }: ExpertiseProcessSectionProps) {
  return (
    <>
      <SectionHeader
        eyebrow={locale === "fr" ? "Notre démarche" : "Our approach"}
        title={locale === "fr" ? "Un parcours d’accompagnement structuré" : "A structured support pathway"}
        align="left"
        maxWidth="wide"
      />
      <div className="relative mt-10 grid gap-5 lg:grid-cols-4 lg:gap-6">
        <div className="absolute left-0 top-9 hidden h-px w-full bg-[rgb(var(--border-strong))] lg:block" aria-hidden="true" />
        {items.map((item) => (
          <article
            key={item.id}
            className="relative rounded-[var(--radius-xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] p-6 shadow-[var(--shadow-soft)]"
          >
            <div className="inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-[rgb(var(--surface-inverse))] px-3 text-sm font-semibold text-[rgb(var(--inverse-foreground))]">
              {item.number}
            </div>
            <h3 className="heading-card mt-5">
              {item.title[locale]}
            </h3>
            <p className="mt-3 text-[rgb(var(--muted-foreground))]">{item.description[locale]}</p>
          </article>
        ))}
      </div>
    </>
  );
}
