import { homePage } from "@/content/pages/home";
import { Container } from "@/components/shared/container";
import { SectionHeader } from "@/components/shared/section-header";
import { Locale } from "@/types/content";

interface MethodologySectionProps {
  locale: Locale;
}

export function MethodologySection({ locale }: MethodologySectionProps) {
  const methodology = homePage.methodology;

  return (
    <section className="bg-[rgb(var(--surface-muted))] py-[var(--section-space-lg)]">
      <Container size="wide">
        <SectionHeader
          eyebrow={methodology.eyebrow[locale]}
          title={methodology.title[locale]}
          align="left"
          maxWidth="wide"
        />

        <div className="relative mt-10 grid gap-6 lg:grid-cols-4 lg:gap-8">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-[rgb(var(--border-strong))] lg:left-0 lg:top-9 lg:block lg:h-px lg:w-full" aria-hidden="true" />
          {methodology.steps.map((step) => (
            <article key={step.id} className="relative rounded-[var(--radius-xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] p-6 shadow-[var(--shadow-soft)]">
              <div className="inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-[rgb(var(--surface-inverse))] px-3 text-sm font-semibold text-[rgb(var(--background))]">
                {step.number}
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-[rgb(var(--foreground))]">
                {step.title[locale]}
              </h3>
              <p className="mt-3 text-[rgb(var(--muted-foreground))]">
                {step.description[locale]}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
