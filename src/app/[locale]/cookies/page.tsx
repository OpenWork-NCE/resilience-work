import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/legal-page-layout";
import { cookiePolicyDocument } from "@/content/legal/cookie-policy";
import { getPageMetadata } from "@/lib/seo/metadata";
import type { Locale } from "@/types/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata(locale as Locale, "cookies");
}

export default async function CookiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <LegalPageLayout locale={locale as Locale} document={cookiePolicyDocument} />;
}
