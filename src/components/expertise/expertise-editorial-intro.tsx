import { AnimatedSection } from "@/components/motion/animated";
import { SectionHeader } from "@/components/shared/section-header";
import type { Locale } from "@/types/content";

interface ExpertiseEditorialIntroProps {
  locale: Locale;
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
}

export function ExpertiseEditorialIntro({
  locale,
  eyebrow,
  title,
  paragraphs,
}: ExpertiseEditorialIntroProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
      <AnimatedSection>
        <SectionHeader eyebrow={eyebrow} title={title} align="left" className="mb-0" />
      </AnimatedSection>
      <AnimatedSection delay={0.08} className="max-w-[42rem] space-y-5 self-center">
        {paragraphs.map((paragraph) => (
          <p
            key={`${locale}-${paragraph}`}
            className="text-base leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-lg"
          >
            {paragraph}
          </p>
        ))}
      </AnimatedSection>
    </div>
  );
}
