"use client";

import Image from "next/image";
import { partners, partnersSection } from "@/content/partners";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types/content";
import type { Partner } from "@/content/partners";

interface PartnersMarqueeProps {
  locale: Locale;
}

function PartnerMark({ partner, locale }: { partner: Partner; locale: Locale }) {
  const isPair = partner.logos.length > 1;

  return (
    <li
      className={cn(
        "flex h-[4.5rem] shrink-0 items-center justify-center rounded-[var(--radius-lg)] border border-[rgb(var(--border-muted))] bg-white px-6 shadow-[var(--shadow-soft)] sm:h-20 sm:px-8",
        isPair ? "min-w-[13.5rem] gap-4 sm:min-w-[15rem]" : "min-w-[11rem] sm:min-w-[12.5rem]"
      )}
      aria-label={partner.label[locale]}
    >
      {partner.logos.map((logo) => {
        const scale = logo.scale ?? 1;
        // Fixed visual height well; width follows aspect ratio, capped for ultra-wide marks.
        const displayHeight = Math.round(36 * scale);
        const displayWidth = Math.round((logo.width / logo.height) * displayHeight);
        const maxWidth = isPair ? 88 : 160;
        const width = Math.min(displayWidth, maxWidth);
        const height = Math.round(width * (logo.height / logo.width));

        return (
          <Image
            key={logo.src}
            src={logo.src}
            alt=""
            width={logo.width}
            height={logo.height}
            className="object-contain object-center"
            style={{ width, height, maxHeight: 44 }}
            sizes="160px"
          />
        );
      })}
    </li>
  );
}

export function PartnersMarquee({ locale }: PartnersMarqueeProps) {
  const prefersReducedMotion = useReducedMotion();
  const copy = partnersSection;
  // Duplicate for seamless CSS loop (translate -50%)
  const track = [...partners, ...partners];

  return (
    <Section spacing="md" tone="default" containerSize="wide">
      <SectionHeader
        eyebrow={copy.eyebrow[locale]}
        title={copy.title[locale]}
        description={copy.description[locale]}
        align="center"
        maxWidth="default"
        className="mb-8 lg:mb-10"
      />

      {prefersReducedMotion ? (
        <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {partners.map((partner) => (
            <PartnerMark key={partner.id} partner={partner} locale={locale} />
          ))}
        </ul>
      ) : (
        <div
          className="partners-marquee relative overflow-hidden"
          role="region"
          aria-label={copy.eyebrow[locale]}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[rgb(var(--background))] to-transparent sm:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[rgb(var(--background))] to-transparent sm:w-16" />

          <ul className="partners-marquee-track flex w-max items-center gap-3 py-1 sm:gap-4">
            {track.map((partner, index) => (
              <PartnerMark
                key={`${partner.id}-${index}`}
                partner={partner}
                locale={locale}
              />
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}
