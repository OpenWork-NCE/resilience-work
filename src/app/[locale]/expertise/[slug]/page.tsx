import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExpertisePageTemplate } from "@/components/expertise/expertise-page-template";
import { getExpertiseDetailPageBySlug } from "@/content/pages/expertise";
import type { Locale } from "@/types/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const page = getExpertiseDetailPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return {
    title: page.seo.title[locale as Locale],
    description: page.seo.description[locale as Locale],
    openGraph: {
      title: page.seo.title[locale as Locale],
      description: page.seo.description[locale as Locale],
      images: page.seo.ogImage ? [{ url: page.seo.ogImage }] : undefined,
    },
  };
}

export default async function ExpertiseDetailRoute({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const page = getExpertiseDetailPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return <ExpertisePageTemplate locale={locale as Locale} page={page} />;
}
