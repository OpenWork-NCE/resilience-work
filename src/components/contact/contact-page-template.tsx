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
import { contactPage } from "@/content/pages/contact";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";
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
    { label: locale === "fr" ? "Accueil" : "Home", href: getLocalizedHref(locale, "home") },
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
      />

      {/* Main conversion band: form + direct contact rail */}
      <Section spacing="md" tone="default" containerSize="wide">
        <div className="grid gap-10 xl:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] xl:items-start xl:gap-12">
          <div>
            <SectionHeader
              eyebrow={copy.form.section.eyebrow[locale]}
              title={copy.form.section.title[locale]}
              description={copy.form.section.description[locale]}
              align="left"
              maxWidth="wide"
              className="mb-8 lg:mb-10"
            />
            <p className="mb-6 rounded-[var(--radius-xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface-muted))] px-5 py-4 text-sm leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-base">
              <span className="font-semibold text-[rgb(var(--foreground))]">
                {copy.reassurance.title[locale]}
              </span>
              {" — "}
              {copy.reassurance.description[locale]}
            </p>
            <ContactForm locale={locale} />
          </div>

          <aside className="xl:sticky xl:top-28">
            <AnimatedSection className="rounded-[var(--radius-2xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] p-6 shadow-[var(--shadow-card)] sm:p-7">
              <p className="font-[family:var(--font-accent)] text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--accent))]">
                {copy.directContact.eyebrow[locale]}
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.35rem)] font-medium leading-[1.05] text-balance">
                {copy.directContact.title[locale]}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-base">
                {copy.directContact.description[locale]}
              </p>

              <div className="mt-6 overflow-hidden rounded-[var(--radius-xl)]">
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

              <div className="mt-6 space-y-2 text-sm leading-relaxed text-[rgb(var(--muted-foreground))]">
                <p className="font-semibold text-[rgb(var(--foreground))]">{copy.directContact.personName}</p>
                <p>{copy.directContact.role[locale]}</p>
                <a className="block transition-colors hover:text-[rgb(var(--foreground))]" href={brand.contact.phoneHref}>
                  {brand.contact.phoneDisplay}
                </a>
                <a className="block transition-colors hover:text-[rgb(var(--foreground))]" href={brand.contact.emailHref}>
                  {brand.contact.email}
                </a>
              </div>

              <StaggerContainer className="mt-6 grid gap-3">
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
                      />
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>

              <div className="mt-8 border-t border-[rgb(var(--border-muted))] pt-6">
                <p className="font-[family:var(--font-accent)] text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--accent))]">
                  {copy.delivery.eyebrow[locale]}
                </p>
                <ul className="mt-4 space-y-4">
                  {copy.delivery.items.map((item) => {
                    const Icon = deliveryIcons[item.id];
                    return (
                      <li key={item.id} className="flex gap-3">
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgb(var(--accent-soft))] text-[rgb(var(--accent-foreground))]">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-[rgb(var(--foreground))]">{item.label[locale]}</p>
                          <p className="mt-1 text-sm leading-relaxed text-[rgb(var(--muted-foreground))]">
                            {item.value[locale]}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
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
          <div className="flex flex-col gap-6 rounded-[var(--radius-2xl)] border border-[color-mix(in_srgb,rgb(var(--inverse-foreground))_14%,transparent)] bg-[color-mix(in_srgb,rgb(var(--inverse-foreground))_8%,transparent)] px-6 py-8 shadow-[var(--shadow-elevated)] sm:px-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[40rem]">
              <p className="font-[family:var(--font-accent)] text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--inverse-muted-foreground))]">
                {copy.whatsAppCta.eyebrow[locale]}
              </p>
              <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.1rem)] font-medium leading-[1.02] text-balance text-[rgb(var(--inverse-foreground))]">
                {copy.whatsAppCta.title[locale]}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[rgb(var(--inverse-muted-foreground))] sm:text-lg">
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
