import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { homePage } from "@/content/pages/home";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/shared/button";
import { Eyebrow } from "@/components/ui/content";
import { Locale } from "@/types/content";
import { getLocalizedCta } from "@/lib/navigation/get-navigation";

interface FinalCtaSectionProps {
  locale: Locale;
}

export function FinalCtaSection({ locale }: FinalCtaSectionProps) {
  const finalCta = homePage.finalCta;
  const contactCta = getLocalizedCta(locale, "contactUs");
  const whatsappCta = getLocalizedCta(locale, "whatsapp");

  return (
    <section className="bg-[rgb(var(--background))] py-[var(--section-space-lg)]">
      <Container size="wide">
        <div className="overflow-hidden rounded-[var(--radius-2xl)] border border-[color-mix(in_srgb,rgb(var(--background))_12%,transparent)] bg-[linear-gradient(135deg,rgb(var(--surface-inverse))_0%,rgb(var(--primary-active))_100%)] px-6 py-10 text-[rgb(var(--background))] shadow-[var(--shadow-elevated)] sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <div className="max-w-4xl">
            <Eyebrow className="text-[color-mix(in_srgb,rgb(var(--background))_64%,rgb(var(--surface-inverse)))]">
              {finalCta.eyebrow[locale]}
            </Eyebrow>
            <h2 className="mt-4 max-w-[14ch] font-display text-[clamp(2.3rem,5vw,3.8rem)] font-medium leading-[1.02] text-balance">
              {finalCta.title[locale]}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-[color-mix(in_srgb,rgb(var(--background))_78%,rgb(var(--surface-inverse)))] sm:text-lg">
              {finalCta.description[locale]}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={contactCta.href}>
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full border-white/10 bg-white text-[rgb(var(--primary-active))] hover:bg-white/90 sm:w-auto"
                >
                  {contactCta.label}
                </Button>
              </Link>
              <Link href={whatsappCta.href} target="_blank" rel="noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-white/20 text-white hover:bg-white/10 sm:w-auto"
                  leftIcon={<MessageCircle className="h-4 w-4" />}
                >
                  {whatsappCta.label}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
