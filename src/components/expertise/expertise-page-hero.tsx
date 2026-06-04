import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { AnimatedSection } from "@/components/motion/animated";
import { BreadcrumbItem, Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { Button } from "@/components/shared/button";
import { Container } from "@/components/shared/container";
import { ImageFrame } from "@/components/ui/image-frame";
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
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,32rem)] lg:items-end lg:gap-12">
          <div>
            <AnimatedSection>
              <Breadcrumbs
                items={breadcrumbs}
                ariaLabel={locale === "fr" ? "Fil d'Ariane" : "Breadcrumb"}
              />
            </AnimatedSection>
            <AnimatedSection delay={0.04} className="mt-6">
              <p className="font-[family:var(--font-accent)] text-xs font-semibold uppercase tracking-[0.16em] text-[rgb(var(--accent))]">
                {page.eyebrow[locale]}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.08} className="mt-4">
              <h1 className="max-w-[12ch] font-display text-[clamp(2.6rem,6vw,4.6rem)] font-medium leading-[0.98] text-balance">
                {page.title[locale]}
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.12} className="mt-5 max-w-[42rem]">
              <p className="text-base leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-lg">
                {page.summary[locale]}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.16} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={contactHref}>
                <Button rightIcon={<ArrowRight className="h-4 w-4" />}>
                  {locale === "fr" ? "Échanger sur vos besoins" : "Discuss your needs"}
                </Button>
              </Link>
              <a href="#process">
                <Button variant="secondary" leftIcon={<MessageCircle className="h-4 w-4" />}>
                  {locale === "fr" ? "Découvrir notre démarche" : "Explore our approach"}
                </Button>
              </a>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.08}>
            <ImageFrame
              src={page.image.src}
              alt={page.image.alt[locale]}
              width={page.image.width}
              height={page.image.height}
              aspectRatio="4/3"
              objectPosition={page.image.objectPosition}
              className="rounded-[var(--radius-2xl)] shadow-[var(--shadow-card)]"
            />
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
