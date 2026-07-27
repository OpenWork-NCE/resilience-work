import type { Metadata } from "next";
import { ContactPageTemplate } from "@/components/contact/contact-page-template";
import { brand } from "@/content/brand";
import { contactPage } from "@/content/pages/contact";
import type { Locale } from "@/types/content";

const ogLocaleMap: Record<Locale, string> = {
  fr: "fr_FR",
  en: "en_US",
  it: "it_IT",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = locale as Locale;
  const baseUrl = `https://${brand.domain}`;
  const localizedPath = `/${currentLocale}/contact`;

  return {
    title: contactPage.seo.title[currentLocale],
    description: contactPage.seo.description[currentLocale],
    alternates: {
      canonical: `${baseUrl}${localizedPath}`,
      languages: {
        fr: `${baseUrl}/fr/contact`,
        en: `${baseUrl}/en/contact`,
        it: `${baseUrl}/it/contact`,
      },
    },
    openGraph: {
      title: contactPage.seo.title[currentLocale],
      description: contactPage.seo.description[currentLocale],
      locale: ogLocaleMap[currentLocale],
      type: "website",
      siteName: brand.name,
      images: [{ url: contactPage.seo.ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: contactPage.seo.title[currentLocale],
      description: contactPage.seo.description[currentLocale],
      images: [contactPage.seo.ogImage],
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ContactPageTemplate locale={locale as Locale} />;
}
