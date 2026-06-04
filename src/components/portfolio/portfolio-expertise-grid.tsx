import Link from "next/link";
import { ArrowRight, Globe2, GraduationCap, HeartPulse, ShieldAlert } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/motion/animated";
import { Card, CardDescription, CardTitle } from "@/components/shared/card";
import { Section } from "@/components/shared/section";
import { SectionHeader } from "@/components/shared/section-header";
import { ImageFrame } from "@/components/ui/image-frame";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";
import { jocelynePortfolioExpertiseItems } from "@/content/pages/jocelyne-katshinda";
import type { Locale } from "@/types/content";

const iconMap = {
  psychosocialPrevention: HeartPulse,
  internationalMobility: Globe2,
  crisisManagement: ShieldAlert,
  training: GraduationCap,
} as const;

interface PortfolioExpertiseGridProps {
  locale: Locale;
}

export function PortfolioExpertiseGrid({ locale }: PortfolioExpertiseGridProps) {
  return (
    <Section spacing="lg">
      <AnimatedSection>
        <SectionHeader
          eyebrow={locale === "fr" ? "Domaines d’intervention" : "Areas of expertise"}
          title={
            locale === "fr"
              ? "Quatre domaines d’intervention, présentés avec clarté"
              : "Four areas of expertise, presented with clarity"
          }
          description={
            locale === "fr"
              ? "Chaque domaine reprend les expertises déjà structurées dans la codebase, dans un format plus direct et mobile-friendly."
              : "Each area reuses the expertise already structured in the codebase, in a more direct and mobile-friendly format."
          }
          align="left"
          maxWidth="wide"
        />
      </AnimatedSection>

      <StaggerContainer className="grid gap-5 lg:grid-cols-2">
        {jocelynePortfolioExpertiseItems.map((item, index) => {
          const Icon = iconMap[item.id];

          return (
            <StaggerItem key={item.id}>
              <Card variant="editorial" hover className="h-full overflow-hidden p-0">
                <ImageFrame
                  src={item.image.src}
                  alt={item.image.alt[locale]}
                  width={item.image.width}
                  height={item.image.height}
                  aspectRatio="16/9"
                  objectPosition={item.image.objectPosition}
                  className="rounded-none"
                />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[rgb(var(--accent-soft))] text-[rgb(var(--accent-foreground))]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="font-[family:var(--font-accent)] text-xs font-semibold uppercase tracking-[0.16em] text-[rgb(var(--accent))]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>

                  <CardTitle className="mt-5 font-display text-2xl font-medium leading-tight">
                    {item.title[locale]}
                  </CardTitle>
                  <CardDescription className="mt-3 text-base">
                    {item.summary[locale]}
                  </CardDescription>

                  <ul className="mt-5 space-y-2 text-sm leading-relaxed text-[rgb(var(--muted-foreground))]">
                    {item.services[locale].slice(0, 3).map((service) => (
                      <li key={service} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[rgb(var(--accent))]" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={getLocalizedHref(locale, item.route)}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[rgb(var(--primary))] transition-colors hover:text-[rgb(var(--primary-hover))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--surface))]"
                  >
                    <span>{locale === "fr" ? "En savoir plus" : "Learn more"}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
