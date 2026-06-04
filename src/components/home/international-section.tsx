import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homePage, regions } from "@/content";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/shared/button";
import { Card } from "@/components/shared/card";
import { Locale } from "@/types/content";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";

interface InternationalSectionProps {
  locale: Locale;
}

export function InternationalSection({ locale }: InternationalSectionProps) {
  const international = homePage.international;

  return (
    <section className="bg-[rgb(var(--background))] py-[var(--section-space-lg)]">
      <Container size="wide">
        <div className="relative overflow-hidden rounded-[var(--radius-2xl)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface-inverse))] shadow-[var(--shadow-elevated)]">
          <div className="relative aspect-[16/10] min-h-[28rem] lg:aspect-[16/8]">
            <Image
              src={international.image.src}
              alt={international.image.alt[locale]}
              fill
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: international.image.objectPosition ?? "center" }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,29,40,0.08)_0%,rgba(7,29,40,0.22)_26%,rgba(7,29,40,0.82)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8 lg:p-10">
              <p className="font-[family:var(--font-accent)] text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white/76">
                {international.eyebrow[locale]}
              </p>
              <h2 className="mt-4 max-w-[13ch] font-display text-[clamp(2.2rem,4.8vw,3.4rem)] font-medium leading-[1.02] text-balance">
                {international.title[locale]}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/78 sm:text-lg">
                {international.description[locale]}
              </p>
              <div className="mt-6">
                <Link href={getLocalizedHref(locale, "international")}>
                  <Button variant="secondary" rightIcon={<ArrowRight className="h-4 w-4" />}>
                    {international.cta.label[locale]}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {regions.map((region) => (
            <Card key={region.id} variant="editorial" className="overflow-hidden rounded-[var(--radius-xl)] p-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-[var(--radius-xl)]">
                <Image
                  src={region.image.src}
                  alt={region.image.alt[locale]}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  style={{ objectPosition: region.image.objectPosition ?? "center" }}
                />
              </div>
              <div className="space-y-3 p-6">
                <h3 className="text-2xl font-semibold text-[rgb(var(--foreground))]">
                  {region.title[locale]}
                </h3>
                <p className="text-[rgb(var(--muted-foreground))]">
                  {region.summary[locale]}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
