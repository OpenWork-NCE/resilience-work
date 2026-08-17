import type { Metadata } from "next";
import { PortfolioBrandSection } from "@/components/portfolio/portfolio-brand-section";
import { PortfolioContactCard } from "@/components/portfolio/portfolio-contact-card";
import { PortfolioExpertiseGrid } from "@/components/portfolio/portfolio-expertise-grid";
import { PortfolioHero } from "@/components/portfolio/portfolio-hero";
import { PortfolioIntroduction } from "@/components/portfolio/portfolio-introduction";
import { PortfolioMobileActionBar } from "@/components/portfolio/portfolio-mobile-action-bar";
import { PortfolioQuickActions } from "@/components/portfolio/portfolio-quick-actions";
import { getPageMetadata } from "@/lib/seo/metadata";
import type { Locale } from "@/types/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata(locale as Locale, "jocelyneKatshinda");
}

export default async function JocelyneKatshindaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale = locale as Locale;

  return (
    <div className="pb-28 lg:pb-0">
      <PortfolioHero locale={currentLocale} />
      <PortfolioQuickActions locale={currentLocale} />
      <PortfolioIntroduction locale={currentLocale} />
      <PortfolioExpertiseGrid locale={currentLocale} />
      <PortfolioBrandSection locale={currentLocale} />
      <PortfolioContactCard locale={currentLocale} />
      <PortfolioMobileActionBar locale={currentLocale} />
    </div>
  );
}
