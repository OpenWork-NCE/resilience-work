import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { AnimatedSection } from "@/components/motion/animated";
import { BreadcrumbItem, Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { Button } from "@/components/shared/button";
import { Container } from "@/components/shared/container";
import { ImageFrame } from "@/components/ui/image-frame";
import { expertiseUiCopy } from "@/content/pages/expertise";
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
              <h1 className="max-w-[11ch] font-display text-[clamp(2.25rem,8vw,4.25rem)] font-medium leading-[0.98] text-balance lg:max-w-[12ch]">
                {page.title[locale]}
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.12} className="mt-5 max-w-[38rem] xl:max-w-[42rem]">
              <p className="text-base leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-lg">
                {page.summary[locale]}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.16} className="mt-8 flex flex-col gap-3 sm:max-w-[28rem] md:max-w-none md:flex-row md:flex-wrap">
              <Link href={contactHref} className="w-full md:w-auto">
                <Button
                  className="w-full md:min-w-[14rem] xl:w-auto"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  {expertiseUiCopy.discussNeeds[locale]}
                </Button>
              </Link>
              <a href="#process" className="w-full md:w-auto">
                <Button
                  variant="secondary"
                  className="w-full md:min-w-[14rem] xl:w-auto"
                  leftIcon={<MessageCircle className="h-4 w-4" />}
                >
                  {expertiseUiCopy.exploreApproach[locale]}
                </Button>
              </a>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.08} className="xl:justify-self-end">
            <ImageFrame
              src={page.image.src}
              alt={page.image.alt[locale]}
              width={page.image.width}
              height={page.image.height}
              aspectRatio="3/4"
              objectPosition={page.image.objectPosition}
              className="mx-auto w-full max-w-[38rem] rounded-[var(--radius-2xl)] shadow-[var(--shadow-card)] xl:mx-0 xl:max-w-[32rem]"
            />
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
