import type { Locale } from "@/types/content";
import type { LegalDefinitionItem } from "@/types/legal";

interface LegalDefinitionListProps {
  locale: Locale;
  items: readonly LegalDefinitionItem[];
}

export function LegalDefinitionList({ locale, items }: LegalDefinitionListProps) {
  const visibleItems = items.filter((item) => item.value?.[locale]);

  if (visibleItems.length === 0) {
    return null;
  }

  return (
    <dl className="grid gap-4 sm:grid-cols-2">
      {visibleItems.map((item) => (
        <div
          key={item.id}
          className="rounded-[var(--radius-lg)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] p-4"
        >
          <dt className="font-[family:var(--font-accent)] text-xs font-semibold uppercase tracking-[0.14em] text-[rgb(var(--accent))]">
            {item.label[locale]}
          </dt>
          <dd className="mt-2 text-base leading-relaxed text-[rgb(var(--foreground))]">
            {item.value?.[locale]}
          </dd>
        </div>
      ))}
    </dl>
  );
}
