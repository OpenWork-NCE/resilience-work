import type { Metadata } from "next";
import { TrainingPageTemplate } from "@/components/training/training-page-template";
import { trainingPageContent } from "@/content/pages/expertise";
import type { Locale } from "@/types/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: trainingPageContent.seo.title[locale as Locale],
    description: trainingPageContent.seo.description[locale as Locale],
    openGraph: {
      title: trainingPageContent.seo.title[locale as Locale],
      description: trainingPageContent.seo.description[locale as Locale],
      images: trainingPageContent.seo.ogImage ? [{ url: trainingPageContent.seo.ogImage }] : undefined,
    },
  };
}

export default async function TrainingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <TrainingPageTemplate locale={locale as Locale} />;
}
