import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConsultantPortfolioPage } from "@/components/consultants/consultant-portfolio-page";
import { getConsultantBySlug } from "@/content/consultants";
import type { Locale } from "@/types/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const consultant = getConsultantBySlug(slug);

  if (!consultant) {
    return {};
  }

  return {
    title: consultant.seo.title[locale as Locale],
    description: consultant.seo.description[locale as Locale],
    openGraph: {
      title: consultant.seo.title[locale as Locale],
      description: consultant.seo.description[locale as Locale],
      images: [{ url: consultant.image.src }],
    },
  };
}

export default async function ConsultantPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const consultant = getConsultantBySlug(slug);

  if (!consultant) {
    notFound();
  }

  return <ConsultantPortfolioPage locale={locale as Locale} consultant={consultant} />;
}
