import Script from "next/script";
import {
  ContactRound,
  Globe2,
  Languages,
  Mail,
  Map,
  MessageCircle,
  Phone,
  ScreenShare,
  ShieldCheck,
} from "lucide-react";
import { ContactFaq } from "@/components/contact/contact-faq";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactPageHero } from "@/components/contact/contact-page-hero";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/animated";
import { PortfolioActionLink } from "@/components/portfolio/portfolio-action-link";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { ImageFrame } from "@/components/ui/image-frame";
import { assets } from "@/content/assets";
import { brand } from "@/content/brand";
import { contactPage, contactUiCopy } from "@/content/pages/contact";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";
import { cn } from "@/lib/utils";
import type { ContactActionId } from "@/types/contact";
import type { Locale } from "@/types/content";

const actionIcons = {
  whatsapp: MessageCircle,
  phone: Phone,
  email: Mail,
  website: Globe2,
  vcard: ContactRound,
} as const;

const deliveryIcons = {
  formats: ScreenShare,
  languages: Languages,
  regions: Map,
} as const;

interface ContactPageTemplateProps {
  locale: Locale;
}

export function ContactPageTemplate({ locale }: ContactPageTemplateProps) {
  const copy = contactPage;
  const breadcrumbs = [
    { label: contactUiCopy.breadcrumbHome[locale], href: getLocalizedHref(locale, "home") },
    { label: copy.hero.eyebrow[locale] },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: copy.seo.title[locale],
    url: `https://${brand.domain}/${locale}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: brand.name,
      url: `https://${brand.domain}`,
      email: brand.contact.emailHref,
      telephone: brand.contact.phoneDisplay.replace(/\s+/g, ""),
    },
  };

  const primaryActions = copy.directContact.actions.filter((action) =>
    ["whatsapp", "phone", "email", "vcard"].includes(action.id)
  );

  const mobileQuickActions = copy.quickActions.actions.filter((action) =>
    ["whatsapp", "phone", "email"].includes(action.id)
  );

  const trustSignals = copy.hero.trustSignals.map((signal) => ({
    id: signal.id,
    label: signal.label[locale],
    description: signal.description[locale],
  }));

  return (
    <>
      <Script
        id="contact-page-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ContactPageHero
        locale={locale}
        eyebrow={copy.hero.eyebrow[locale]}
        title={copy.hero.title[locale]}
        description={copy.hero.description[locale]}
        supportingText={copy.hero.supportingText[locale]}
        breadcrumbs={breadcrumbs}
        trustSignals={trustSignals}
      />

      {/* Mobile-first channel shortcuts (conversion) */}
      <Section spacing="sm" tone="default" containerSize="wide" className="xl:hidden">
        <div className="rounded-[var(--radius-xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] p-4 shadow-[var(--shadow-soft)]">
          <p className="font-[family:var(--font-accent)] text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--accent))]">
            {copy.quickActions.eyebrow[locale]}
          </p>
          <p className="mt-1 text-sm text-[rgb(var(--muted-foreground))]">
            {copy.quickActions.description[locale]}
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-3">
            {mobileQuickActions.map((action) => {
              const Icon = actionIcons[action.id as ContactActionId];
              return (
                <PortfolioActionLink
                  key={action.id}
                  href={action.href}
                  label={action.label[locale]}
                  description={action.description[locale]}
                  icon={Icon}
                  external={Boolean(action.external)}
                  variant="compact"
                />
              );
            })}
          </div>
        </div>
      </Section>

      {/* Main conversion band: form + contact rail */}
      <Section spacing="md" tone="default" containerSize="wide" className="pt-0 xl:pt-[var(--section-space-md)]">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1.25fr)_minmax(18rem,22rem)] xl:items-start xl:gap-10">
          <div className="min-w-0">
            <SectionHeader
              eyebrow={copy.form.section.eyebrow[locale]}
              title={copy.form.section.title[locale]}
              description={copy.form.section.description[locale]}
              align="left"
              maxWidth="wide"
              className="mb-6 lg:mb-8"
            />

            <div className="mb-6 flex gap-3 rounded-[var(--radius-xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface-muted))] p-4 sm:p-5">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgb(var(--accent-soft))] text-[rgb(var(--accent-foreground))]">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-[rgb(var(--foreground))]">
                  {copy.reassurance.title[locale]}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-[rgb(var(--muted-foreground))]">
                  {copy.reassurance.description[locale]}
                </p>
              </div>
            </div>

            <ContactForm locale={locale} />
          </div>

          <aside className="xl:sticky xl:top-28">
            <AnimatedSection
              className={cn(
                "overflow-hidden rounded-[var(--radius-2xl)] border border-[rgb(var(--border-muted))]",
                "bg-[rgb(var(--surface))] shadow-[var(--shadow-card)]"
              )}
            >
              <div className="border-b border-[rgb(var(--border-muted))] bg-[rgb(var(--surface-muted))] px-5 py-5 sm:px-6">
                <p className="font-[family:var(--font-accent)] text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--accent))]">
                  {copy.directContact.eyebrow[locale]}
                </p>
                <h2 className="mt-2 font-display text-[clamp(1.35rem,2.5vw,1.7rem)] font-medium leading-[1.1] text-balance">
                  {copy.directContact.title[locale]}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[rgb(var(--muted-foreground))]">
                  {copy.directContact.description[locale]}
                </p>
              </div>

              <div className="space-y-5 p-5 sm:p-6">
                <div className="flex gap-3.5">
                  <div className="relative w-[4.75rem] shrink-0 overflow-hidden rounded-[var(--radius-lg)] sm:w-[5.25rem]">
                    <ImageFrame
                      src={assets.jocelyne.portrait.src}
                      alt={assets.jocelyne.portrait.alt[locale]}
                      width={assets.jocelyne.portrait.width}
                      height={assets.jocelyne.portrait.height}
                      aspectRatio="1/1"
                      objectPosition={assets.jocelyne.portrait.objectPosition}
                      className="w-full shadow-[var(--shadow-soft)]"
                    />
                  </div>
                  <div className="min-w-0 flex-1 space-y-1 self-center text-sm leading-snug text-[rgb(var(--muted-foreground))]">
                    <p className="font-semibold text-[rgb(var(--foreground))]">
                      {copy.directContact.personName}
                    </p>
                    <p className="text-xs sm:text-sm">{copy.directContact.role[locale]}</p>
                    <a
                      className="mt-1 inline-flex min-h-9 items-center text-xs transition-colors hover:text-[rgb(var(--foreground))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] sm:text-sm"
                      href={brand.contact.phoneHref}
                    >
                      {brand.contact.phoneDisplay}
                    </a>
                    <a
                      className="block break-all text-xs transition-colors hover:text-[rgb(var(--foreground))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] sm:text-sm"
                      href={brand.contact.emailHref}
                      suppressHydrationWarning
                    >
                      {brand.contact.email}
                    </a>
                  </div>
                </div>

                <StaggerContainer className="grid gap-2">
                  {primaryActions.map((action) => {
                    const Icon = actionIcons[action.id as ContactActionId];
                    return (
                      <StaggerItem key={action.id}>
                        <PortfolioActionLink
                          href={action.href}
                          label={action.label[locale]}
                          description={action.description[locale]}
                          icon={Icon}
                          external={Boolean(action.external)}
                          download={action.download}
                          variant="compact"
                        />
                      </StaggerItem>
                    );
                  })}
                </StaggerContainer>

                <div className="border-t border-[rgb(var(--border-muted))] pt-5">
                  <p className="font-[family:var(--font-accent)] text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--accent))]">
                    {copy.delivery.eyebrow[locale]}
                  </p>
                  <ul className="mt-3 space-y-3">
                    {copy.delivery.items.map((item) => {
                      const Icon = deliveryIcons[item.id];
                      return (
                        <li key={item.id} className="flex gap-3">
                          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgb(var(--accent-soft))] text-[rgb(var(--accent-foreground))]">
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </span>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-[rgb(var(--foreground))]">
                              {item.label[locale]}
                            </p>
                            <p className="mt-0.5 text-sm leading-snug text-[rgb(var(--muted-foreground))]">
                              {item.value[locale]}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </aside>
        </div>
      </Section>

      <Section spacing="md" tone="muted">
        <SectionHeader
          eyebrow={copy.faq.eyebrow[locale]}
          title={copy.faq.title[locale]}
          description={copy.faq.description[locale]}
          align="left"
          maxWidth="wide"
        />
        <ContactFaq
          items={copy.faq.items.map((item) => ({
            id: item.id,
            question: item.question[locale],
            answer: item.answer[locale],
          }))}
        />
      </Section>

      <Section spacing="md" tone="inverse">
        <AnimatedSection>
          <div className="flex flex-col gap-6 rounded-[var(--radius-2xl)] border border-[color-mix(in_srgb,rgb(var(--inverse-foreground))_14%,transparent)] bg-[color-mix(in_srgb,rgb(var(--inverse-foreground))_8%,transparent)] px-6 py-8 shadow-[var(--shadow-elevated)] sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-[40rem]">
              <p className="font-[family:var(--font-accent)] text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--inverse-muted-foreground))]">
                {copy.whatsAppCta.eyebrow[locale]}
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.6rem)] font-medium leading-[1.05] text-balance text-[rgb(var(--inverse-foreground))]">
                {copy.whatsAppCta.title[locale]}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--inverse-muted-foreground))] sm:text-base">
                {copy.whatsAppCta.description[locale]}
              </p>
            </div>

            <PortfolioActionLink
              href={brand.contact.whatsappHref}
              label={copy.whatsAppCta.action.label[locale]}
              icon={MessageCircle}
              external
              variant="pill"
              tone="inverse"
              className="w-full justify-center sm:w-auto"
            />
          </div>
        </AnimatedSection>
      </Section>
    </>
  );
}
