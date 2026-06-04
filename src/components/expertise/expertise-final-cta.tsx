import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/shared/button";
import type { Cta, Locale } from "@/types/content";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";

interface ExpertiseFinalCtaProps {
  locale: Locale;
  title: string;
  description: string;
  note: string;
  primaryCta: Cta;
  secondaryCta?: Cta;
}

export function ExpertiseFinalCta({
  locale,
  title,
  description,
  note,
  primaryCta,
  secondaryCta,
}: ExpertiseFinalCtaProps) {
  const primaryHref = primaryCta.route ? getLocalizedHref(locale, primaryCta.route) : primaryCta.href ?? "#";
  const secondaryHref = secondaryCta
    ? secondaryCta.route
      ? getLocalizedHref(locale, secondaryCta.route)
      : secondaryCta.href ?? "#"
    : undefined;

  return (
    <div className="relative overflow-hidden rounded-[var(--radius-2xl)] bg-[rgb(var(--surface-inverse))] px-6 py-8 text-[rgb(var(--inverse-foreground))] shadow-[var(--shadow-elevated)] sm:px-8 lg:px-12 lg:py-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,color-mix(in_srgb,rgb(var(--inverse-foreground))_10%,transparent),transparent_34%),linear-gradient(135deg,color-mix(in_srgb,rgb(var(--inverse-foreground))_3%,transparent),transparent_45%)]" />
      <div className="relative">
        <p className="font-[family:var(--font-accent)] text-xs font-semibold uppercase tracking-[0.16em] text-[rgb(var(--inverse-muted-foreground))]">
          {locale === "fr" ? "Prendre contact" : "Get in touch"}
        </p>
        <div className="mt-5 max-w-[44rem]">
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] font-medium leading-[1.02] text-balance">
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[rgb(var(--inverse-foreground))] sm:text-lg">
            {description}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--inverse-muted-foreground))] sm:text-base">
            {note}
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href={primaryHref}>
            <Button rightIcon={<ArrowRight className="h-4 w-4" />}>{primaryCta.label[locale]}</Button>
          </Link>
          {secondaryCta && secondaryHref ? (
            <a href={secondaryHref} target={secondaryCta.external ? "_blank" : undefined} rel={secondaryCta.external ? "noreferrer" : undefined}>
              <Button variant="secondary" leftIcon={<MessageCircle className="h-4 w-4" />}>
                {secondaryCta.label[locale]}
              </Button>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
