import { Clock3, MessageSquare, ShieldCheck } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/animated";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/navigation/breadcrumbs";
import { Container } from "@/components/shared/container";
import type { Locale } from "@/types/content";

interface TrustSignal {
  id: string;
  label: string;
  description: string;
}

interface ContactPageHeroProps {
  locale: Locale;
  eyebrow: string;
  title: string;
  description: string;
  supportingText: string;
  breadcrumbs: BreadcrumbItem[];
  trustSignals: readonly TrustSignal[];
}

const trustIconMap = {
  confidential: ShieldCheck,
  response: Clock3,
  channels: MessageSquare,
} as const;

export function ContactPageHero({
  locale,
  eyebrow,
  title,
  description,
  supportingText,
  breadcrumbs,
  trustSignals,
}: ContactPageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[rgb(var(--border-muted))] bg-[rgb(var(--surface-subtle))] py-[var(--section-space-md)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[rgb(var(--accent))] opacity-[0.08] blur-3xl" />
        <div className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-[rgb(var(--primary))] opacity-[0.06] blur-3xl" />
      </div>

      <Container size="page" className="relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,22rem)] lg:items-end lg:gap-12">
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
              <h1 className="max-w-[14ch] font-display text-[clamp(2.5rem,8vw,4.2rem)] font-medium leading-[0.98] text-balance">
                {title}
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.12} className="mt-5 max-w-[42rem]">
              <p className="text-base leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-lg">
                {description}
              </p>
              <p className="mt-4 border-l-2 border-[rgb(var(--accent))] pl-4 text-sm leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-base">
                {supportingText}
              </p>
            </AnimatedSection>
          </div>

          <StaggerContainer className="grid gap-3">
            {trustSignals.map((signal) => {
              const Icon =
                trustIconMap[signal.id as keyof typeof trustIconMap] ?? ShieldCheck;

              return (
                <StaggerItem key={signal.id}>
                  <div className="flex gap-3.5 rounded-[var(--radius-xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] p-4 shadow-[var(--shadow-soft)]">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[rgb(var(--accent-soft))] text-[rgb(var(--accent-foreground))]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[rgb(var(--foreground))]">
                        {signal.label}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-[rgb(var(--muted-foreground))]">
                        {signal.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </Container>
    </section>
  );
}
