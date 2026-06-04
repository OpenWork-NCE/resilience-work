import Link from "next/link";
import { Section } from "@/components/shared/section";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";
import { brand } from "@/content/brand";
import { jocelyneKatshindaPage } from "@/content/pages/jocelyne-katshinda";
import type { Locale } from "@/types/content";

interface PortfolioCompactFooterProps {
  locale: Locale;
}

export function PortfolioCompactFooter({ locale }: PortfolioCompactFooterProps) {
  const section = jocelyneKatshindaPage.compactFooter;

  return (
    <Section spacing="sm" tone="muted">
      <div className="flex flex-col gap-5 border-t border-[rgb(var(--border-muted))] pt-8 text-sm text-[rgb(var(--muted-foreground))] sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-[rgb(var(--foreground))]">{section.title[locale]}</p>
          <p className="mt-1">{section.description[locale]}</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          {section.links.map((link) => (
            <Link
              key={link.id}
              href={getLocalizedHref(locale, link.route)}
              className="transition-colors hover:text-[rgb(var(--foreground))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2"
            >
              {link.label[locale]}
            </Link>
          ))}
          <a
            href={`https://${brand.domain}`}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-[rgb(var(--foreground))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2"
          >
            {brand.domain}
          </a>
        </div>
      </div>
    </Section>
  );
}
