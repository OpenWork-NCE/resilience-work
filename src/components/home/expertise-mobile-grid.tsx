import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe2, HeartPulse, Presentation, ShieldAlert } from "lucide-react";
import { expertiseItems, homePage } from "@/content";
import { Button } from "@/components/shared/button";
import { Card } from "@/components/shared/card";
import { StaggerContainer, StaggerItem } from "@/components/motion/animated";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";
import { Locale } from "@/types/content";

interface ExpertiseMobileGridProps {
  locale: Locale;
}

const iconMap = {
  HeartPulse,
  Globe2,
  ShieldAlert,
  Presentation,
} as const;

export function ExpertiseMobileGrid({ locale }: ExpertiseMobileGridProps) {
  return (
    <StaggerContainer className="grid gap-5 lg:hidden">
      {expertiseItems.map((item, index) => {
        const Icon = iconMap[item.icon as keyof typeof iconMap];

        return (
          <StaggerItem key={item.id}>
            <Card variant="editorial" className="overflow-hidden p-0">
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image.src}
                  alt={item.image.alt[locale]}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  style={{ objectPosition: item.image.objectPosition ?? "center" }}
                />
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[rgb(var(--accent))]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full bg-[rgb(var(--accent-soft))] p-2 text-[rgb(var(--accent-foreground))]">
                    <Icon className="h-4 w-4" />
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[rgb(var(--foreground))]">
                    {item.title[locale]}
                  </h3>
                  <p className="mt-3 text-[rgb(var(--muted-foreground))]">
                    {item.summary[locale]}
                  </p>
                </div>
                <Link href={getLocalizedHref(locale, item.route)}>
                  <Button variant="ghost" className="px-0" rightIcon={<ArrowRight className="h-4 w-4" />}>
                    {homePage.expertise.itemCta.label[locale]}
                  </Button>
                </Link>
              </div>
            </Card>
          </StaggerItem>
        );
      })}
    </StaggerContainer>
  );
}
