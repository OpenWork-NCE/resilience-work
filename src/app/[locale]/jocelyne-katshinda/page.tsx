import type { Metadata } from "next";
import { PortfolioAudiences } from "@/components/portfolio/portfolio-audiences";
import { PortfolioBrandSection } from "@/components/portfolio/portfolio-brand-section";
import { PortfolioCompactFooter } from "@/components/portfolio/portfolio-compact-footer";
import { PortfolioContactCard } from "@/components/portfolio/portfolio-contact-card";
import { PortfolioExpertiseGrid } from "@/components/portfolio/portfolio-expertise-grid";
import { PortfolioHero } from "@/components/portfolio/portfolio-hero";
import { PortfolioImpact } from "@/components/portfolio/portfolio-impact";
import { PortfolioInternational } from "@/components/portfolio/portfolio-international";
import { PortfolioIntroduction } from "@/components/portfolio/portfolio-introduction";
import { PortfolioMission } from "@/components/portfolio/portfolio-mission";
import { PortfolioMobileActionBar } from "@/components/portfolio/portfolio-mobile-action-bar";
import { PortfolioQuickActions } from "@/components/portfolio/portfolio-quick-actions";
import { PortfolioServiceDetails } from "@/components/portfolio/portfolio-service-details";
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
      <PortfolioMission locale={currentLocale} />
      <PortfolioExpertiseGrid locale={currentLocale} />
      <PortfolioAudiences locale={currentLocale} />
      <PortfolioImpact locale={currentLocale} />
      <PortfolioInternational locale={currentLocale} />
      <PortfolioServiceDetails locale={currentLocale} />
      <PortfolioBrandSection locale={currentLocale} />
      <PortfolioContactCard locale={currentLocale} />
      {/* <PortfolioCompactFooter locale={currentLocale} /> */}
      <PortfolioMobileActionBar locale={currentLocale} />
    </div>
  );
}
