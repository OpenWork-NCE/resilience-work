import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { CookieSettingsTrigger } from "@/components/consent/cookie-settings-trigger";
import { brand } from "@/content/brand";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/brand/logo";
import {
  getLocalizedExpertiseItems,
  getLocalizedNavigation,
  getLocalizedServiceLanguages,
} from "@/lib/navigation/get-navigation";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";
import type { Locale } from "@/types/content";

export function SiteFooter() {
  const locale = useLocale() as Locale;
  const t = useTranslations("footer");
  const navT = useTranslations("navigation");
  const navigationItems = getLocalizedNavigation(locale);
  const expertiseItems = getLocalizedExpertiseItems(locale);
  const serviceLanguages = getLocalizedServiceLanguages(locale);
  const currentYear = new Date().getFullYear();
  const legalLinks = [
    { id: "legalNotice", label: t("legalNotice"), href: getLocalizedHref(locale, "legalNotice") },
    { id: "privacy", label: t("privacy"), href: getLocalizedHref(locale, "privacy") },
    { id: "cookies", label: t("cookies"), href: getLocalizedHref(locale, "cookies") },
    { id: "accessibility", label: t("accessibility"), href: getLocalizedHref(locale, "accessibility") },
  ] as const;
  const visibleSocials = Object.entries(brand.socials).filter(([, social]) => social.enabled && social.href);
  const socialLabels = {
    whatsapp: "WhatsApp",
    linkedin: "LinkedIn",
    facebook: "Facebook",
  } as const;

  const mutedOnInverse = "text-[rgb(var(--inverse-muted-foreground))]";
  const linkOnInverse =
    "text-sm text-[rgb(var(--inverse-muted-foreground))] transition-colors hover:text-[rgb(var(--inverse-foreground))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))]";
  const headingOnInverse =
    "font-[family:var(--font-accent)] text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[rgb(var(--inverse-muted-foreground))]";

  return (
    <footer className="mt-auto border-t border-[color-mix(in_srgb,rgb(var(--inverse-foreground))_12%,transparent)] bg-[rgb(var(--surface-inverse))] text-[rgb(var(--inverse-foreground))]">
      <Container size="wide">
        <div className="border-b border-[color-mix(in_srgb,rgb(var(--inverse-foreground))_10%,transparent)] py-6">
          <p className="font-[family:var(--font-accent)] text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-[rgb(var(--inverse-muted-foreground))]">
            Resilience@Work
          </p>
        </div>

        <div className="grid gap-10 py-14 lg:grid-cols-[1.15fr_0.85fr_0.85fr_0.9fr_1fr]">
          <div className="space-y-6">
            <Logo variant="onDark" size="md" />
            <p className={`max-w-md text-sm leading-relaxed ${mutedOnInverse}`}>{brand.summary[locale]}</p>
          </div>

          <div>
            <h2 className={headingOnInverse}>{t("navigation")}</h2>
            <nav aria-label={navT("footerNavigation")} className="mt-5 flex flex-col gap-3">
              {navigationItems.map((item) => (
                <Link key={item.id} href={item.href} className={linkOnInverse}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className={headingOnInverse}>{t("expertise")}</h2>
            <div className="mt-5 flex flex-col gap-3">
              {expertiseItems.map((item) => (
                <Link key={item.id} href={item.href} className={linkOnInverse}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className={headingOnInverse}>{t("legal")}</h2>
            <div className="mt-5 flex flex-col gap-3">
              {legalLinks.map((item) => (
                <Link key={item.id} href={item.href} className={linkOnInverse}>
                  {item.label}
                </Link>
              ))}
              <CookieSettingsTrigger label={t("manageCookies")} className={`text-left ${linkOnInverse}`} />
            </div>
          </div>

          <div>
            <h2 className={headingOnInverse}>{t("contact")}</h2>
            <div className={`mt-5 space-y-3 text-sm ${mutedOnInverse}`}>
              <p className="font-medium text-[rgb(var(--inverse-foreground))]">{brand.person.name}</p>
              <p>{brand.person.role[locale]}</p>
              <a
                href={brand.contact.phoneHref}
                className="flex items-center gap-3 transition-colors hover:text-[rgb(var(--inverse-foreground))]"
              >
                <Phone className="h-4 w-4" />
                <span>{brand.contact.phoneDisplay}</span>
              </a>
              <a
                href={brand.contact.emailHref}
                className="flex items-center gap-3 transition-colors hover:text-[rgb(var(--inverse-foreground))]"
              >
                <Mail className="h-4 w-4" />
                <span>{brand.contact.email}</span>
              </a>
              <a
                href={brand.contact.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-[rgb(var(--inverse-foreground))]"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div
          className={`flex flex-col gap-6 border-t border-[color-mix(in_srgb,rgb(var(--inverse-foreground))_12%,transparent)] py-6 text-sm ${mutedOnInverse} lg:flex-row lg:items-center lg:justify-between`}
        >
          <div>
            <p className="font-medium text-[rgb(var(--inverse-foreground))]">{t("serviceLanguages")}</p>
            <p className="mt-1">{serviceLanguages.join(" · ")}</p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {visibleSocials.map(([key, social]) => (
              <a
                key={key}
                href={social.href ?? undefined}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-[rgb(var(--inverse-foreground))]"
              >
                <span>{socialLabels[key as keyof typeof socialLabels]}</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>

          <div className="space-y-1 lg:text-right">
            <p>
              © {currentYear} {brand.name}. {t("allRightsReserved")}
            </p>
            <p className="text-xs text-[rgb(var(--inverse-muted-foreground))]">{t("builtBy")}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
