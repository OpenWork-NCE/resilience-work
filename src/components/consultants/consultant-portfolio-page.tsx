import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Mail, MessageCircle } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/animated";
import { Section } from "@/components/shared/section";
import { Card } from "@/components/shared/card";
import { Button } from "@/components/shared/button";
import { Badge } from "@/components/ui/badge";
import {
  HOME_MEASURE,
  HomeSectionIntro,
} from "@/components/home/home-section-intro";
import { HomeStill } from "@/components/home/home-still";
import { PortfolioActionLink } from "@/components/portfolio/portfolio-action-link";
import {
  consultantPageCopy,
  getConsultantPath,
  getRelatedConsultants,
  type Consultant,
} from "@/content/consultants";
import { brand } from "@/content/brand";
import { getLocalizedHref, localizePathname } from "@/lib/navigation/get-localized-href";
import type { Locale } from "@/types/content";

interface ConsultantPortfolioPageProps {
  locale: Locale;
  consultant: Consultant;
}

export function ConsultantPortfolioPage({ locale, consultant }: ConsultantPortfolioPageProps) {
  const copy = consultantPageCopy;
  const related = getRelatedConsultants(consultant.slug);
  const contactHref = getLocalizedHref(locale, "contact");
  const homeHref = getLocalizedHref(locale, "home");
  const teamHref = `${homeHref}#consultants`;

  return (
    <div className="pb-28 lg:pb-0">
      <section
        aria-labelledby="consultant-hero-title"
        className="relative isolate overflow-hidden bg-[rgb(var(--hero-void))] text-white"
      >
        <div className={`${HOME_MEASURE} grid lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)]`}>
          <AnimatedSection delay={0.1} className="relative min-h-[22rem] lg:order-2 lg:min-h-full">
            <HomeStill
              src={consultant.image.src}
              alt={consultant.image.alt[locale]}
              objectPosition={consultant.image.objectPosition}
              priority
              grain
              sizes="(max-width: 1024px) 94vw, 42vw"
              className="absolute inset-0 aspect-auto min-h-[22rem] lg:min-h-full"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--hero-void))] via-[rgb(var(--hero-void))]/25 to-transparent lg:bg-gradient-to-r lg:from-[rgb(var(--hero-void))] lg:via-[rgb(var(--hero-void))]/28 lg:to-transparent"
              />
            </HomeStill>
          </AnimatedSection>

          <div className="relative z-[1] flex flex-col justify-center py-12 sm:py-14 lg:order-1 lg:py-20">
            <AnimatedSection>
              <Link
                href={teamHref}
                className="inline-flex items-center gap-2 text-sm font-medium text-white/55 transition-colors hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                {copy.backToTeam[locale]}
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.06} className="mt-8">
              <HomeSectionIntro invert eyebrow={copy.eyebrow[locale]} />
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="mt-7">
              <h1
                id="consultant-hero-title"
                className="max-w-[14ch] font-display text-[clamp(2.45rem,7.4vw,4.6rem)] font-medium leading-[0.92] tracking-[-0.04em] text-balance"
              >
                {consultant.name}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.14} className="mt-4 max-w-[34rem]">
              <p className="text-lg font-medium leading-relaxed text-white/88 sm:text-xl">
                {consultant.role[locale]}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.18} className="mt-6 max-w-[40rem]">
              <p className="text-base leading-relaxed text-white/70 sm:text-[1.05rem]">
                {consultant.lead[locale]}
              </p>
            </AnimatedSection>

            <StaggerContainer className="mt-8 flex flex-wrap gap-2">
              {consultant.focus[locale].map((tag) => (
                <StaggerItem key={tag}>
                  <Badge className="border-white/15 bg-white/10 px-4 py-2 text-white/70">
                    {tag}
                  </Badge>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <AnimatedSection delay={0.24} className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href={contactHref}>
                <Button
                  variant="inverse"
                  size="lg"
                  className="w-full sm:w-auto"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  {copy.contactCta[locale]}
                </Button>
              </Link>
              <Link href={homeHref}>
                <Button variant="outlineInverse" size="lg" className="w-full sm:w-auto">
                  {copy.homeCta[locale]}
                </Button>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Section spacing="sm" tone="default" containerSize="home">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,20rem)] lg:gap-16">
          <AnimatedSection>
            <HomeSectionIntro
              eyebrow={copy.bioEyebrow[locale]}
              title={copy.bioTitle[locale]}
              className="mb-8"
            />
            <div className="max-w-[44rem] space-y-5 text-base leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-[1.05rem]">
              {consultant.bio[locale].map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.08} className="self-start border-t border-[rgb(var(--border-muted))] pt-6">
            <p className="font-[family:var(--font-accent)] text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[rgb(var(--accent))]">
              Resilience@Work
            </p>
            <span aria-hidden="true" className="mt-4 block h-px w-14 bg-[rgb(var(--accent))]" />
            <p className="mt-5 font-display text-[clamp(1.45rem,2.2vw,1.9rem)] font-medium leading-[1.15] tracking-[-0.03em] text-balance text-[rgb(var(--foreground))]">
              {consultant.highlight[locale]}
            </p>
          </AnimatedSection>
        </div>
      </Section>

      <Section spacing="sm" tone="muted" containerSize="home">
        <HomeSectionIntro
          eyebrow={copy.focusEyebrow[locale]}
          title={copy.focusTitle[locale]}
          className="mb-10"
        />
        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {consultant.focus[locale].map((item, index) => (
            <StaggerItem key={item}>
              <Card variant="elevated" className="h-full p-5">
                <p className="font-[family:var(--font-accent)] text-[0.62rem] font-semibold tabular-nums tracking-[0.2em] text-[rgb(var(--accent))]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 font-display text-[clamp(1.15rem,2vw,1.35rem)] font-medium leading-snug tracking-[-0.02em]">
                  {item}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      <Section spacing="sm" tone="default" containerSize="home">
        <HomeSectionIntro
          eyebrow={copy.methodsEyebrow[locale]}
          title={copy.methodsTitle[locale]}
          className="mb-10"
        />
        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {consultant.methods[locale].map((method, index) => (
            <StaggerItem key={method}>
              <Card variant="elevated" className="h-full p-5 sm:p-6">
                <p className="font-[family:var(--font-accent)] text-[0.62rem] font-semibold tabular-nums tracking-[0.2em] text-[rgb(var(--accent))]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display text-[clamp(1.15rem,2vw,1.4rem)] font-medium leading-snug tracking-[-0.02em]">
                  {method}
                </h3>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {related.length > 0 ? (
        <Section spacing="sm" tone="muted" containerSize="home">
          <HomeSectionIntro
            eyebrow={copy.relatedEyebrow[locale]}
            title={copy.relatedTitle[locale]}
            className="mb-10"
          />
          <div className="grid gap-5 md:grid-cols-2">
            {related.map((item) => (
              <Link
                key={item.id}
                href={localizePathname(locale, getConsultantPath(item.slug))}
                className="group flex gap-4 rounded-[var(--radius-xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] p-4 shadow-[var(--shadow-soft)] transition-all hover:border-[rgb(var(--border-strong))] hover:shadow-[var(--shadow-card)]"
              >
                <div className="relative h-24 w-20 shrink-0 overflow-hidden bg-[rgb(var(--surface-subtle))] sm:h-28 sm:w-24">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt[locale]}
                    fill
                    sizes="96px"
                    className="object-cover"
                    style={{ objectPosition: item.image.objectPosition ?? "center" }}
                  />
                </div>
                <div className="min-w-0 flex-1 self-center">
                  <p className="font-[family:var(--font-accent)] text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[rgb(var(--accent))]">
                    {item.role[locale]}
                  </p>
                  <p className="mt-2 font-display text-xl font-medium text-[rgb(var(--foreground))] group-hover:text-[rgb(var(--primary))]">
                    {item.name}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm text-[rgb(var(--muted-foreground))]">
                    {item.lead[locale]}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      ) : null}

      <Section spacing="sm" tone="default" containerSize="home">
        <AnimatedSection>
          <div className="relative isolate overflow-hidden rounded-[var(--radius-2xl)] bg-[rgb(var(--surface-inverse))] text-[rgb(var(--inverse-foreground))] shadow-[var(--shadow-elevated)] lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,color-mix(in_srgb,rgb(var(--inverse-foreground))_10%,transparent),transparent_34%),linear-gradient(135deg,color-mix(in_srgb,rgb(var(--inverse-foreground))_3%,transparent),transparent_52%)]"
            />
            <div className="relative flex flex-col justify-between px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14 xl:px-16 xl:py-16">
              <div>
                <HomeSectionIntro invert eyebrow={copy.contactEyebrow[locale]} />
                <h2 className="mt-7 max-w-[14ch] font-display text-[clamp(2.25rem,4.8vw,3.8rem)] font-medium leading-[1.02] tracking-[-0.03em] text-balance">
                  {copy.contactTitle[locale]}
                </h2>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
                <Link href={contactHref} className="w-full sm:w-auto">
                  <Button
                    variant="inverse"
                    size="lg"
                    className="w-full min-h-12 sm:w-auto"
                    rightIcon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
                  >
                    {copy.contactCta[locale]}
                  </Button>
                </Link>
                <a
                  href={brand.contact.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="outlineInverse"
                    size="lg"
                    className="w-full min-h-12 sm:w-auto"
                    leftIcon={<MessageCircle className="h-4 w-4" aria-hidden="true" />}
                  >
                    {copy.whatsappLabel[locale]}
                  </Button>
                </a>
              </div>
            </div>
            <HomeStill
              src={consultant.image.src}
              alt={consultant.image.alt[locale]}
              objectPosition={consultant.image.objectPosition}
              grain
              sizes="(max-width: 1024px) 94vw, 40vw"
              className="relative aspect-[16/10] lg:aspect-auto lg:min-h-full"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--surface-inverse))] via-[rgb(var(--surface-inverse))]/20 to-transparent lg:bg-gradient-to-r lg:from-[rgb(var(--surface-inverse))] lg:via-[rgb(var(--surface-inverse))]/25 lg:to-transparent"
              />
            </HomeStill>
          </div>
        </AnimatedSection>
      </Section>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] pt-4 lg:hidden">
        <div className="pointer-events-auto mx-auto grid w-full max-w-[26rem] grid-cols-2 gap-2 rounded-[calc(var(--radius-xl)+0.25rem)] border border-[rgb(var(--border-muted))] bg-[color-mix(in_srgb,rgb(var(--surface))_92%,transparent)] p-2 shadow-[var(--shadow-floating)] supports-[backdrop-filter]:backdrop-blur-xl">
          <PortfolioActionLink
            href={contactHref}
            label={copy.contactCta[locale]}
            icon={Mail}
            variant="bar"
          />
          <PortfolioActionLink
            href={brand.contact.whatsappHref}
            label={copy.whatsappLabel[locale]}
            icon={MessageCircle}
            external
            variant="bar"
          />
        </div>
      </div>
    </div>
  );
}
