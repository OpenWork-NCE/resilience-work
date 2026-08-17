"use client";

import Image from "next/image";
import { partners, partnersSection } from "@/content/partners";
import { HOME_MEASURE, HomeSectionIntro } from "@/components/home/home-section-intro";
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
        "flex shrink-0 items-center justify-center",
        isPair ? "min-w-[12rem] gap-5" : "min-w-[10rem]"
      )}
      aria-label={partner.label[locale]}
    >
      {partner.logos.map((logo) => {
        const scale = logo.scale ?? 1;
        const displayHeight = Math.round(44 * scale);
        const displayWidth = Math.round((logo.width / logo.height) * displayHeight);
        const maxWidth = isPair ? 96 : 160;
        const width = Math.min(displayWidth, maxWidth);
        const height = Math.round(width * (logo.height / logo.width));

        return (
          <Image
            key={logo.src}
            src={logo.src}
            alt=""
            width={logo.width}
            height={logo.height}
            className="object-contain object-center opacity-70"
            style={{ width, height, maxHeight: 48 }}
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
  const track = [...partners, ...partners];

  return (
    <section className="border-y border-[rgb(var(--border-muted))] bg-[rgb(var(--background))] py-10 lg:py-12">
      <div className={`${HOME_MEASURE} mb-8`}>
        <HomeSectionIntro eyebrow={copy.eyebrow[locale]} />
      </div>

      {prefersReducedMotion ? (
        <ul className={`${HOME_MEASURE} flex flex-wrap items-center justify-start gap-10`}>
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

          <ul className="partners-marquee-track flex w-max items-center gap-16 py-1" aria-hidden="true">
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
    </section>
  );
}
