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
        "flex shrink-0 items-center justify-center rounded-[var(--radius-xl)] border border-[rgb(var(--border-muted))] bg-white shadow-[var(--shadow-soft)]",
        "h-28 px-8 sm:h-32 sm:px-10 lg:h-36 lg:px-12",
        isPair ? "min-w-[17rem] gap-5 sm:min-w-[19rem] lg:min-w-[21rem]" : "min-w-[15rem] sm:min-w-[17rem] lg:min-w-[18.5rem]"
      )}
      aria-label={partner.label[locale]}
    >
      {partner.logos.map((logo) => {
        const scale = logo.scale ?? 1;
        // Larger visual well: ~56-68px logo height
        const displayHeight = Math.round(60 * scale);
        const displayWidth = Math.round((logo.width / logo.height) * displayHeight);
        const maxWidth = isPair ? 120 : 220;
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
            style={{ width, height, maxHeight: 72 }}
            sizes="220px"
          />
        );
      })}
    </li>
  );
}

export function PartnersMarquee({ locale }: PartnersMarqueeProps) {
  const prefersReducedMotion = useReducedMotion();
  const copy = partnersSection;
  // Two identical sequences → seamless loop at -50%
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
        <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
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
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[rgb(var(--background))] to-transparent sm:w-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[rgb(var(--background))] to-transparent sm:w-20" />

          <ul className="partners-marquee-track flex w-max items-center gap-4 py-2 sm:gap-5" aria-hidden="true">
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
