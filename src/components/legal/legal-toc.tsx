import type { Locale } from "@/types/content";

interface LegalTocItem {
  id: string;
  label: string;
}

interface LegalTocProps {
  locale: Locale;
  items: readonly LegalTocItem[];
}

export function LegalToc({ locale, items }: LegalTocProps) {
  return (
    <nav
      aria-label={locale === "fr" ? "Table des matières" : "Table of contents"}
      className="rounded-[var(--radius-xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] p-5"
    >
      <p className="font-[family:var(--font-accent)] text-xs font-semibold uppercase tracking-[0.16em] text-[rgb(var(--accent))]">
        {locale === "fr" ? "Sommaire" : "Contents"}
      </p>
      <ol className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="block rounded-[var(--radius-md)] px-3 py-2 text-sm text-[rgb(var(--foreground))] transition-colors hover:bg-[rgb(var(--surface-muted))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))]"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
