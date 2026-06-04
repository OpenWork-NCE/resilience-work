import { homePage } from "@/content/pages/home";
import { Container } from "@/components/shared/container";
import { Locale } from "@/types/content";

interface HighlightsStripProps {
  locale: Locale;
}

export function HighlightsStrip({ locale }: HighlightsStripProps) {
  return (
    <section className="relative z-10 -mt-8 sm:-mt-10 lg:-mt-12">
      <Container size="wide">
        <div className="grid overflow-hidden rounded-[var(--radius-2xl)] border border-[rgb(var(--border-muted))] bg-[color-mix(in_srgb,rgb(var(--surface-elevated))_92%,transparent)] shadow-[var(--shadow-card)] backdrop-blur-xl sm:grid-cols-2 xl:grid-cols-4">
          {homePage.highlights.map((item, index) => (
            <div
              key={item.id}
              className="relative px-5 py-5 sm:px-6 sm:py-6 xl:px-7 xl:py-7"
            >
              <p className="font-[family:var(--font-accent)] text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--accent))]">
                {item.label[locale]}
              </p>
              <p className="mt-3 text-base leading-relaxed text-[rgb(var(--foreground))]">
                {item.value[locale]}
              </p>
              {index < homePage.highlights.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-0 top-6 hidden h-[calc(100%-3rem)] w-px bg-[rgb(var(--border-muted))] xl:block"
                />
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
