import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { PartnersMarquee } from "@/components/home/partners-marquee";
import { ExpertiseSection } from "@/components/home/expertise-section";
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

/**
 * Home stays short on purpose: hero, proof, the three activities,
 * leadership, team, then contact. Extra context is discussed when asked.
 */
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
      <PartnersMarquee locale={currentLocale} />
      <ExpertiseSection locale={currentLocale} />
      <ProfileSection locale={currentLocale} />
      <ConsultantsSection locale={currentLocale} />
      <FinalCtaSection locale={currentLocale} />
    </>
  );
}
