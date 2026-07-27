import { Globe2, Languages, Layers, ShieldCheck, type LucideIcon } from "lucide-react";
import { homePage } from "@/content/pages/home";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/animated";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types/content";

interface ConfidenceSectionProps {
  locale: Locale;
}

const confidenceIconMap = {
  globe: Globe2,
  languages: Languages,
  shield: ShieldCheck,
  layers: Layers,
} as const satisfies Record<
  (typeof homePage.confidence.items)[number]["icon"],
  LucideIcon
>;

function formatIndex(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function ConfidenceSection({ locale }: ConfidenceSectionProps) {
  const confidence = homePage.confidence;

  return (
    <Section
      spacing="lg"
      tone="muted"
      containerSize="wide"
      className="relative overflow-hidden"
    >
      {/* Soft brand atmosphere — decorative only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-[rgb(var(--accent))] opacity-[0.06] blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-[rgb(var(--primary))] opacity-[0.05] blur-3xl" />
      </div>

      <AnimatedSection>
        <SectionHeader
          eyebrow={confidence.eyebrow[locale]}
          title={confidence.title[locale]}
          description={confidence.description[locale]}
          align="left"
          maxWidth="wide"
          className="mb-10 lg:mb-12"
        />
      </AnimatedSection>

      <StaggerContainer className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {confidence.items.map((item, index) => {
          const Icon = confidenceIconMap[item.icon];

          return (
            <StaggerItem key={item.id} className="h-full">
              <article
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-xl)]",
                  "border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] p-6",
                  "shadow-[var(--shadow-soft)]",
                  "transition-[transform,box-shadow,border-color] duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
                  "hover:-translate-y-1 hover:border-[rgb(var(--border-strong))] hover:shadow-[var(--shadow-elevated)]"
                )}
              >
                {/* Top accent line on hover */}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-[rgb(var(--accent))]",
                    "transition-transform duration-[var(--duration-normal)] ease-[var(--ease-emphasized)]",
                    "group-hover:scale-x-100"
                  )}
                />

                <div className="flex items-start justify-between gap-3">
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-[var(--radius-md)]",
                      "bg-[rgb(var(--accent-soft))] text-[rgb(var(--accent-foreground))]",
                      "transition-transform duration-[var(--duration-normal)] ease-[var(--ease-emphasized)]",
                      "group-hover:scale-105"
                    )}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span
                    aria-hidden="true"
                    className="font-[family:var(--font-accent)] text-sm font-semibold tracking-[0.12em] text-[rgb(var(--muted-foreground))] opacity-60"
                  >
                    {formatIndex(index)}
                  </span>
                </div>

                <p className="mt-6 font-[family:var(--font-accent)] text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--accent))]">
                  {item.label[locale]}
                </p>

                <h3 className="mt-3 text-lg font-semibold leading-snug text-[rgb(var(--foreground))] text-balance">
                  {item.value[locale]}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-[rgb(var(--muted-foreground))]">
                  {item.detail[locale]}
                </p>
              </article>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
