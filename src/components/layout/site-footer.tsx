import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRight, Mail, MessageCircle, Phone } from "lucide-react";
import { brand } from "@/content/brand";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/brand/logo";
import {
  getLocalizedExpertiseItems,
  getLocalizedNavigation,
  getLocalizedServiceLanguages,
} from "@/lib/navigation/get-navigation";
import type { Locale } from "@/types/content";

export function SiteFooter() {
  const locale = useLocale() as Locale;
  const t = useTranslations("footer");
  const navT = useTranslations("navigation");
  const navigationItems = getLocalizedNavigation(locale);
  const expertiseItems = getLocalizedExpertiseItems(locale);
  const serviceLanguages = getLocalizedServiceLanguages(locale);
  const currentYear = new Date().getFullYear();
  const visibleSocials = Object.entries(brand.socials).filter(([, social]) => social.enabled && social.href);
  const socialLabels = {
    whatsapp: "WhatsApp",
    linkedin: "LinkedIn",
    facebook: "Facebook",
  } as const;

  return (
    <footer className="mt-auto border-t border-[color-mix(in_srgb,rgb(var(--background))_12%,transparent)] bg-[rgb(var(--surface-inverse))] text-[rgb(var(--background))]">
      <Container size="wide">
        <div className="grid gap-10 py-14 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1fr]">
          <div className="space-y-5">
            <Logo variant="dark" size="md" />
            <p className="max-w-md text-sm leading-relaxed text-[color-mix(in_srgb,rgb(var(--background))_72%,rgb(var(--surface-inverse)))]">
              {brand.summary[locale]}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-[color-mix(in_srgb,rgb(var(--background))_56%,rgb(var(--surface-inverse)))]">
              {t("navigation")}
            </h2>
            <nav aria-label={navT("footerNavigation")} className="mt-5 flex flex-col gap-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="text-sm text-[color-mix(in_srgb,rgb(var(--background))_72%,rgb(var(--surface-inverse)))] transition-colors hover:text-[rgb(var(--background))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-[color-mix(in_srgb,rgb(var(--background))_56%,rgb(var(--surface-inverse)))]">
              {t("expertise")}
            </h2>
            <div className="mt-5 flex flex-col gap-3">
              {expertiseItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="text-sm text-[color-mix(in_srgb,rgb(var(--background))_72%,rgb(var(--surface-inverse)))] transition-colors hover:text-[rgb(var(--background))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-[color-mix(in_srgb,rgb(var(--background))_56%,rgb(var(--surface-inverse)))]">
              {t("contact")}
            </h2>
            <div className="mt-5 space-y-3 text-sm text-[color-mix(in_srgb,rgb(var(--background))_72%,rgb(var(--surface-inverse)))]">
              <p className="font-medium text-[rgb(var(--background))]">{brand.person.name}</p>
              <p>{brand.person.role[locale]}</p>
              <a
                href={brand.contact.phoneHref}
                className="flex items-center gap-3 transition-colors hover:text-[rgb(var(--background))]"
              >
                <Phone className="h-4 w-4" />
                <span>{brand.contact.phoneDisplay}</span>
              </a>
              <a
                href={brand.contact.emailHref}
                className="flex items-center gap-3 transition-colors hover:text-[rgb(var(--background))]"
              >
                <Mail className="h-4 w-4" />
                <span>{brand.contact.email}</span>
              </a>
              <a
                href={brand.contact.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-[rgb(var(--background))]"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-[color-mix(in_srgb,rgb(var(--background))_12%,transparent)] py-6 text-sm text-[color-mix(in_srgb,rgb(var(--background))_68%,rgb(var(--surface-inverse)))] lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-medium text-[rgb(var(--background))]">{t("serviceLanguages")}</p>
            <p className="mt-1">{serviceLanguages.join(" · ")}</p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {visibleSocials.map(([key, social]) => (
              <a
                key={key}
                href={social.href ?? undefined}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-[rgb(var(--background))]"
              >
                <span>{socialLabels[key as keyof typeof socialLabels]}</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>

          <p>© {currentYear} {brand.name}. {t("allRightsReserved")}</p>
        </div>
      </Container>
    </footer>
  );
}
