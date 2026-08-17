import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/motion/animated";
import { BreadcrumbItem, Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { Button } from "@/components/shared/button";
import { Container } from "@/components/shared/container";
import { ImageFrame } from "@/components/ui/image-frame";
import { expertiseUiCopy } from "@/content/pages/expertise";
import { activityIdentity } from "@/lib/activity-identity";
import type { ExpertiseDetailPage, Locale } from "@/types/content";

interface ExpertisePageHeroProps {
  locale: Locale;
  page: ExpertiseDetailPage;
  breadcrumbs: BreadcrumbItem[];
  contactHref: string;
}

export function ExpertisePageHero({
  locale,
  page,
  breadcrumbs,
  contactHref,
}: ExpertisePageHeroProps) {
  return (
    <section className="bg-[rgb(var(--surface-subtle))] py-[var(--section-space-md)]">
      <Container size="page">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(22rem,32rem)] xl:items-end xl:gap-12">
          <div className="min-w-0">
            <AnimatedSection>
              <Breadcrumbs
                items={breadcrumbs}
                ariaLabel={expertiseUiCopy.breadcrumbAria[locale]}
              />
            </AnimatedSection>
            <AnimatedSection delay={0.04} className="mt-6">
              <p className="font-[family:var(--font-accent)] text-xs font-semibold uppercase tracking-[0.16em] text-[rgb(var(--accent))]">
                {page.eyebrow[locale]}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.08} className="mt-4">
              <h1 className="max-w-[22ch] font-display text-[clamp(2.15rem,5.4vw,3.8rem)] font-medium leading-[1.04] text-balance">
                {page.title[locale]}
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.12} className="mt-5 max-w-[40rem]">
              <p className="text-base leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-lg">
                {page.summary[locale]}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.16} className="mt-8">
              <Link href={contactHref}>
                <Button rightIcon={<ArrowRight className="h-4 w-4" />}>
                  {expertiseUiCopy.discussNeeds[locale]}
                </Button>
              </Link>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.08} className="xl:justify-self-end">
            <ImageFrame
              src={page.image.src}
              alt={page.image.alt[locale]}
              width={page.image.width}
              height={page.image.height}
              aspectRatio="4/3"
              objectPosition={activityIdentity[page.id].objectPosition}
              className="mx-auto w-full max-w-[34rem] rounded-[var(--radius-2xl)] shadow-[var(--shadow-card)] xl:mx-0 xl:max-w-[30rem]"
            />
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
