import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Mail, MessageCircle } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/animated";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/shared/button";
import { Badge } from "@/components/ui/badge";
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
      {/* Hero — portfolio style */}
      <section className="relative isolate overflow-hidden bg-[rgb(var(--surface-inverse))] text-[rgb(var(--inverse-foreground))]">
        <div className="hero-scrim-diagonal absolute inset-0" />
        <div className="absolute inset-x-0 top-0 h-px bg-[color-mix(in_srgb,rgb(var(--inverse-foreground))_12%,transparent)]" />

        <Container size="wide" className="relative z-10 py-10 sm:py-14 lg:py-20">
          <AnimatedSection>
            <Link
              href={teamHref}
              className="inline-flex items-center gap-2 text-sm font-medium text-[rgb(var(--inverse-muted-foreground))] transition-colors hover:text-[rgb(var(--inverse-foreground))]"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              {copy.backToTeam[locale]}
            </Link>
          </AnimatedSection>

          <div className="mt-8 grid items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(19rem,24rem)] lg:gap-12">
            <div className="order-2 lg:order-1">
              <AnimatedSection>
                <div className="inline-flex rounded-full border border-[color-mix(in_srgb,rgb(var(--inverse-foreground))_14%,transparent)] bg-[color-mix(in_srgb,rgb(var(--inverse-foreground))_10%,transparent)] px-4 py-2 backdrop-blur-sm">
                  <p className="font-[family:var(--font-accent)] text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--inverse-muted-foreground))]">
                    {copy.eyebrow[locale]}
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.08} className="mt-8">
                <h1 className="font-display text-[clamp(2.45rem,8vw,4.6rem)] font-medium leading-[0.95] tracking-[-0.04em] text-balance text-[rgb(var(--inverse-foreground))]">
                  {consultant.name}
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={0.12} className="mt-4 max-w-[34rem]">
                <p className="text-lg font-medium leading-relaxed text-[rgb(var(--inverse-foreground))] sm:text-xl">
                  {consultant.role[locale]}
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.16} className="mt-6 max-w-[42rem]">
                <p className="text-base leading-relaxed text-[color-mix(in_srgb,rgb(var(--inverse-foreground))_88%,transparent)] sm:text-[1.05rem]">
                  {consultant.lead[locale]}
                </p>
              </AnimatedSection>

              <StaggerContainer className="mt-8 flex flex-wrap gap-2">
                {consultant.focus[locale].map((tag) => (
                  <StaggerItem key={tag}>
                    <Badge className="border-[color-mix(in_srgb,rgb(var(--inverse-foreground))_12%,transparent)] bg-[color-mix(in_srgb,rgb(var(--inverse-foreground))_10%,transparent)] px-4 py-2 text-[rgb(var(--inverse-muted-foreground))]">
                      {tag}
                    </Badge>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <AnimatedSection delay={0.24} className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href={contactHref}>
                  <Button variant="inverse" size="lg" className="w-full sm:w-auto" rightIcon={<ArrowRight className="h-4 w-4" />}>
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

            <AnimatedSection delay={0.14} className="order-1 lg:order-2">
              <div className="mx-auto max-w-[20rem] rounded-[calc(var(--radius-xl)+0.5rem)] border border-[color-mix(in_srgb,rgb(var(--inverse-foreground))_12%,transparent)] bg-[color-mix(in_srgb,rgb(var(--inverse-foreground))_10%,transparent)] p-3 shadow-[var(--shadow-floating)] backdrop-blur-md sm:max-w-[24rem] lg:ml-auto">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-xl)]">
                  <Image
                    src={consultant.image.src}
                    alt={consultant.image.alt[locale]}
                    fill
                    priority
                    sizes="(min-width: 1024px) 24rem, 80vw"
                    className="object-cover"
                    style={{ objectPosition: consultant.image.objectPosition ?? "center" }}
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Bio */}
      <Section spacing="md" tone="default" containerSize="wide">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
          <AnimatedSection>
            <SectionHeader
              eyebrow={copy.bioEyebrow[locale]}
              title={copy.bioTitle[locale]}
              align="left"
              className="mb-8"
            />
            <div className="max-w-[44rem] space-y-5 text-base leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-[1.05rem]">
              {consultant.bio[locale].map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection
            delay={0.08}
            className="self-start rounded-[var(--radius-xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface-subtle))] p-6"
          >
            <p className="font-[family:var(--font-accent)] text-xs font-semibold uppercase tracking-[0.16em] text-[rgb(var(--accent))]">
              Resilience@Work
            </p>
            <p className="mt-5 font-display text-2xl font-medium leading-tight text-[rgb(var(--foreground))]">
              {consultant.highlight[locale]}
            </p>
          </AnimatedSection>
        </div>
      </Section>

      {/* Focus areas */}
      <Section spacing="md" tone="muted" containerSize="wide">
        <SectionHeader
          eyebrow={locale === "fr" ? "Expertises" : "Expertise"}
          title={copy.focusTitle[locale]}
          align="left"
          maxWidth="wide"
        />
        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {consultant.focus[locale].map((item) => (
            <StaggerItem key={item}>
              <div className="h-full rounded-[var(--radius-xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] p-5 shadow-[var(--shadow-soft)]">
                <p className="heading-card text-[1.15rem] sm:text-xl">{item}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Methods */}
      <Section spacing="md" tone="default" containerSize="wide">
        <SectionHeader
          eyebrow={copy.methodsEyebrow[locale]}
          title={copy.methodsTitle[locale]}
          align="left"
          maxWidth="wide"
        />
        <ul className="flex flex-wrap gap-3">
          {consultant.methods[locale].map((method) => (
            <li
              key={method}
              className="rounded-full border border-[rgb(var(--border-strong))] bg-[rgb(var(--surface))] px-4 py-2 text-sm font-medium text-[rgb(var(--foreground))] shadow-[var(--shadow-soft)]"
            >
              {method}
            </li>
          ))}
        </ul>
      </Section>

      {/* Related consultants */}
      {related.length > 0 ? (
        <Section spacing="md" tone="muted" containerSize="wide">
          <SectionHeader
            eyebrow={copy.relatedEyebrow[locale]}
            title={copy.relatedTitle[locale]}
            align="left"
            maxWidth="wide"
          />
          <div className="grid gap-5 md:grid-cols-2">
            {related.map((item) => (
              <Link
                key={item.id}
                href={localizePathname(locale, getConsultantPath(item.slug))}
                className="group flex gap-4 rounded-[var(--radius-xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] p-4 shadow-[var(--shadow-soft)] transition-all hover:border-[rgb(var(--border-strong))] hover:shadow-[var(--shadow-card)]"
              >
                <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-[var(--radius-lg)] bg-[rgb(var(--surface-subtle))] sm:h-28 sm:w-24">
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

      {/* Contact CTA — company coordinated */}
      <Section spacing="md" tone="default" containerSize="wide">
        <AnimatedSection className="relative overflow-hidden rounded-[var(--radius-2xl)] bg-[rgb(var(--surface-inverse))] px-6 py-8 text-[rgb(var(--inverse-foreground))] shadow-[var(--shadow-elevated)] sm:px-8 lg:px-12 lg:py-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,color-mix(in_srgb,rgb(var(--inverse-foreground))_10%,transparent),transparent_34%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,22rem)] lg:items-center">
            <div>
              <p className="font-[family:var(--font-accent)] text-xs font-semibold uppercase tracking-[0.16em] text-[rgb(var(--inverse-muted-foreground))]">
                {copy.contactEyebrow[locale]}
              </p>
              <h2 className="mt-4 max-w-[16ch] font-display text-[clamp(2rem,4.5vw,3.2rem)] font-medium leading-[1.04] text-balance">
                {copy.contactTitle[locale]}
              </h2>
              <p className="mt-4 max-w-[40rem] text-base leading-relaxed text-[rgb(var(--inverse-muted-foreground))] sm:text-lg">
                {copy.contactDescription[locale]}
              </p>
            </div>
            <StaggerContainer className="grid gap-3">
              <StaggerItem>
                <PortfolioActionLink
                  href={contactHref}
                  label={copy.contactCta[locale]}
                  description={
                    locale === "fr"
                      ? "Formulaire ou échange direct avec Resilience@Work"
                      : "Form or direct conversation with Resilience@Work"
                  }
                  icon={Mail}
                  tone="inverse"
                />
              </StaggerItem>
              <StaggerItem>
                <PortfolioActionLink
                  href={brand.contact.whatsappHref}
                  label={locale === "fr" ? "WhatsApp" : "WhatsApp"}
                  description={
                    locale === "fr" ? "Échanger rapidement avec l’équipe" : "Chat quickly with the team"
                  }
                  icon={MessageCircle}
                  external
                  tone="inverse"
                />
              </StaggerItem>
            </StaggerContainer>
          </div>
        </AnimatedSection>
      </Section>

      {/* Mobile action bar */}
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
            label="WhatsApp"
            icon={MessageCircle}
            external
            variant="bar"
          />
        </div>
      </div>
    </div>
  );
}
