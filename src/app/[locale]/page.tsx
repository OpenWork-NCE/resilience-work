import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { HighlightsStrip } from "@/components/home/highlights-strip";
import { ConfidenceSection } from "@/components/home/confidence-section";
import { PartnersMarquee } from "@/components/home/partners-marquee";
import { IntroductionSection } from "@/components/home/introduction-section";
import { ExpertiseSection } from "@/components/home/expertise-section";
import { ImpactSection } from "@/components/home/impact-section";
import { MethodologySection } from "@/components/home/methodology-section";
import { ProfileSection } from "@/components/home/profile-section";
import { ConsultantsSection } from "@/components/home/consultants-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { getPageMetadata } from "@/lib/seo/metadata";
import type { Locale } from "@/types/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata(locale as Locale, "home");
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const currentLocale = locale as Locale;

  return (
    <>
      <HeroSection locale={currentLocale} />
      <HighlightsStrip locale={currentLocale} />
      <IntroductionSection locale={currentLocale} />
      <ConfidenceSection locale={currentLocale} />
      <PartnersMarquee locale={currentLocale} />
      <ExpertiseSection locale={currentLocale} />
      <ImpactSection locale={currentLocale} />
      <MethodologySection locale={currentLocale} />
      <ProfileSection locale={currentLocale} />
      <ConsultantsSection locale={currentLocale} />
      <FinalCtaSection locale={currentLocale} />
    </>
  );
}
