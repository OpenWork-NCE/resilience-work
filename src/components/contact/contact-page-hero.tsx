import { AnimatedSection } from "@/components/motion/animated";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/navigation/breadcrumbs";
import { Container } from "@/components/shared/container";
import type { Locale } from "@/types/content";

interface ContactPageHeroProps {
  locale: Locale;
  eyebrow: string;
  title: string;
  description: string;
  supportingText: string;
  breadcrumbs: BreadcrumbItem[];
}

export function ContactPageHero({
  locale,
  eyebrow,
  title,
  description,
  supportingText,
  breadcrumbs,
}: ContactPageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[rgb(var(--surface-subtle))] py-[var(--section-space-md)]">
      <div
        className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,rgb(var(--accent))_16%,transparent),transparent_68%)] blur-3xl"
        aria-hidden="true"
      />
      <Container size="page" className="relative">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,22rem)] lg:items-end">
          <div className="min-w-0">
            <AnimatedSection>
              <Breadcrumbs
                items={breadcrumbs}
                ariaLabel={locale === "fr" ? "Fil d'Ariane" : "Breadcrumb"}
              />
            </AnimatedSection>
            <AnimatedSection delay={0.04} className="mt-6">
              <p className="font-[family:var(--font-accent)] text-xs font-semibold uppercase tracking-[0.16em] text-[rgb(var(--accent))]">
                {eyebrow}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.08} className="mt-4">
              <h1 className="max-w-[12ch] font-display text-[clamp(2.5rem,8vw,4.3rem)] font-medium leading-[0.98] text-balance">
                {title}
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.12} className="mt-5 max-w-[42rem]">
              <p className="text-base leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-lg">
                {description}
              </p>
              <p className="mt-4 border-l border-[rgb(var(--border-strong))] pl-4 text-sm leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-base">
                {supportingText}
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection
            delay={0.1}
            className="relative hidden min-h-[16rem] overflow-hidden rounded-[var(--radius-2xl)] border border-[rgb(var(--border-muted))] bg-[linear-gradient(180deg,color-mix(in_srgb,rgb(var(--surface))_88%,transparent),color-mix(in_srgb,rgb(var(--surface-muted))_92%,transparent))] shadow-[var(--shadow-soft)] lg:block"
          >
            <div className="absolute inset-x-6 top-6 h-px bg-[rgb(var(--border-muted))]" />
            <div className="absolute left-6 top-10 h-24 w-24 rounded-full border border-[color-mix(in_srgb,rgb(var(--accent))_22%,transparent)]" />
            <div className="absolute bottom-8 right-8 h-32 w-32 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,rgb(var(--accent))_18%,transparent),transparent_72%)]" />
            <div className="absolute inset-x-8 bottom-8 space-y-3">
              <div className="h-3 w-24 rounded-full bg-[rgb(var(--accent-soft))]" />
              <div className="h-3 w-40 rounded-full bg-[rgb(var(--surface-muted))]" />
              <div className="h-3 w-32 rounded-full bg-[rgb(var(--surface-muted))]" />
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
