import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "../globals.css";
import { ConsentProvider } from "@/components/consent/consent-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { SiteShell } from "@/components/layout/site-shell";
import { SkipLink } from "@/components/layout/skip-link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { brand } from "@/content/brand";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGroteskDisplay = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGroteskAccent = Space_Grotesk({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${brand.domain}`),
  title: "Resilience@Work",
  description: "Psychological support after a critical incident, crisis support in international mobility, training and workshops on well-being and mental health.",
  icons: {
    icon: "/images/brand/resilience-at-work-favicon.png",
    shortcut: "/images/brand/resilience-at-work-favicon.png",
    apple: "/images/brand/resilience-at-work-favicon.png",
  },
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as 'fr' | 'en' | 'it')) {
    notFound();
  }

  setRequestLocale(locale);

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGroteskDisplay.variable} ${spaceGroteskAccent.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <ConsentProvider locale={locale as "fr" | "en" | "it"}>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem={false}
              disableTransitionOnChange
            >
              <SiteShell>
                <SkipLink />
                <SiteHeader />
                <main id="main-content" className="flex-1">
                  {children}
                </main>
                <SiteFooter />
                <ScrollToTop />
              </SiteShell>
            </ThemeProvider>
          </ConsentProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
