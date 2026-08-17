import Script from "next/script";
import Link from "next/link";
import { ArrowRight, ContactRound, Mail, MessageCircle, Phone } from "lucide-react";
import { ContactFaq } from "@/components/contact/contact-faq";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactPageHero } from "@/components/contact/contact-page-hero";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/animated";
import { HomeSectionIntro } from "@/components/home/home-section-intro";
import { HomeStill } from "@/components/home/home-still";
import { PortfolioActionLink } from "@/components/portfolio/portfolio-action-link";
import { Button } from "@/components/shared/button";
import { Section } from "@/components/shared/section";
import { assets } from "@/content/assets";
import { brand } from "@/content/brand";
import { contactPage, contactUiCopy } from "@/content/pages/contact";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";
import type { ContactActionId } from "@/types/contact";
import type { Locale } from "@/types/content";

const actionIcons: Partial<Record<ContactActionId, typeof Mail>> = {
  whatsapp: MessageCircle,
  phone: Phone,
  email: Mail,
  vcard: ContactRound,
};

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

  const still = assets.hero.main;
  const portrait = assets.jocelyne.portrait;

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

      <Section spacing="sm" tone="default" containerSize="home" className="xl:hidden">
        <HomeSectionIntro
          eyebrow={copy.quickActions.eyebrow[locale]}
          description={copy.quickActions.description[locale]}
          className="mb-6"
        />
        <StaggerContainer className="grid gap-2">
          {mobileQuickActions.map((action) => {
            const Icon = actionIcons[action.id] ?? Mail;
            return (
              <StaggerItem key={action.id}>
                <PortfolioActionLink
                  href={action.href}
                  label={action.label[locale]}
                  description={action.description[locale]}
                  icon={Icon}
                  external={Boolean(action.external)}
                  variant="compact"
                />
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Section>

      <Section spacing="sm" tone="default" containerSize="home">
        <div className="grid gap-10 xl:grid-cols-[minmax(0,1.25fr)_minmax(18rem,22rem)] xl:items-start xl:gap-16">
          <div className="min-w-0">
            <HomeSectionIntro
              eyebrow={copy.form.section.eyebrow[locale]}
              title={copy.form.section.title[locale]}
              description={copy.form.section.description[locale]}
              className="mb-6"
            />
            <p className="mb-8 max-w-[36rem] border-l border-[rgb(var(--border-strong))] pl-4 text-sm leading-relaxed text-[rgb(var(--muted-foreground))]">
              {copy.reassurance.title[locale]}. {copy.reassurance.description[locale]}
            </p>
            <ContactForm locale={locale} />
          </div>

          <aside className="xl:sticky xl:top-28">
            <HomeStill
              src={portrait.src}
              alt={portrait.alt[locale]}
              objectPosition={portrait.objectPosition}
              sizes="22rem"
              className="aspect-[4/5] max-h-[20rem]"
            />
            <p className="mt-5 font-[family:var(--font-accent)] text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[rgb(var(--accent))]">
              {copy.directContact.eyebrow[locale]}
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.4rem,2.2vw,1.75rem)] font-medium leading-[1.1] tracking-[-0.03em]">
              {copy.directContact.personName}
            </h2>
            <p className="mt-2 text-sm text-[rgb(var(--muted-foreground))]">
              {copy.directContact.role[locale]}
            </p>

            <StaggerContainer className="mt-6 grid gap-2">
              {primaryActions.map((action) => {
                const Icon = actionIcons[action.id] ?? Mail;
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

            <div className="mt-8 border-t border-[rgb(var(--border-muted))] pt-6">
              <p className="font-[family:var(--font-accent)] text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[rgb(var(--accent))]">
                {copy.delivery.eyebrow[locale]}
              </p>
              <ul className="mt-4 space-y-4">
                {copy.delivery.items.map((item, index) => (
                  <li key={item.id}>
                    <p className="font-[family:var(--font-accent)] text-[0.62rem] font-semibold tabular-nums tracking-[0.2em] text-[rgb(var(--accent))]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-1 text-sm font-semibold">{item.label[locale]}</p>
                    <p className="mt-0.5 text-sm text-[rgb(var(--muted-foreground))]">
                      {item.value[locale]}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section spacing="sm" tone="muted" containerSize="home">
        <HomeSectionIntro
          eyebrow={copy.faq.eyebrow[locale]}
          title={copy.faq.title[locale]}
          description={copy.faq.description[locale]}
          className="mb-8"
        />
        <ContactFaq
          items={copy.faq.items.map((item) => ({
            id: item.id,
            question: item.question[locale],
            answer: item.answer[locale],
          }))}
        />
      </Section>

      <Section spacing="sm" tone="default" containerSize="home">
        <AnimatedSection>
          <div className="relative isolate overflow-hidden rounded-[var(--radius-2xl)] bg-[rgb(var(--surface-inverse))] text-[rgb(var(--inverse-foreground))] shadow-[var(--shadow-elevated)] lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,color-mix(in_srgb,rgb(var(--inverse-foreground))_10%,transparent),transparent_34%),linear-gradient(135deg,color-mix(in_srgb,rgb(var(--inverse-foreground))_3%,transparent),transparent_52%)]"
            />
            <div className="relative flex flex-col justify-between px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14 xl:px-16 xl:py-16">
              <div>
                <HomeSectionIntro invert eyebrow={copy.whatsAppCta.eyebrow[locale]} />
                <h2 className="mt-7 max-w-[14ch] font-display text-[clamp(2.25rem,4.8vw,3.8rem)] font-medium leading-[1.02] tracking-[-0.03em] text-balance">
                  {copy.whatsAppCta.title[locale]}
                </h2>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
                <a
                  href={brand.contact.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="inverse"
                    size="lg"
                    className="w-full min-h-12 sm:w-auto"
                    leftIcon={<MessageCircle className="h-4 w-4" aria-hidden="true" />}
                  >
                    {copy.whatsAppCta.action.label[locale]}
                  </Button>
                </a>
                <Link href={brand.contact.emailHref} className="w-full sm:w-auto">
                  <Button
                    variant="outlineInverse"
                    size="lg"
                    className="w-full min-h-12 sm:w-auto"
                    rightIcon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
                  >
                    {copy.directContact.actions.find((action) => action.id === "email")?.label[locale]}
                  </Button>
                </Link>
              </div>
            </div>
            <HomeStill
              src={still.src}
              alt={still.alt[locale]}
              objectPosition={still.objectPosition}
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
    </>
  );
}
