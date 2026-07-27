import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe2, HeartPulse, Presentation, ShieldAlert } from "lucide-react";
import { expertiseItems, homePage } from "@/content";
import { StaggerContainer, StaggerItem } from "@/components/motion/animated";
import { getLocalizedHref } from "@/lib/navigation/get-localized-href";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types/content";

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
        const href = getLocalizedHref(locale, item.route);

        return (
          <StaggerItem key={item.id}>
            <article
              className={cn(
                "group overflow-hidden rounded-[var(--radius-xl)] border border-[rgb(var(--border-muted))]",
                "bg-[rgb(var(--surface))] shadow-[var(--shadow-soft)]",
                "transition-[transform,box-shadow,border-color] duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
                "hover:-translate-y-0.5 hover:border-[rgb(var(--border-strong))] hover:shadow-[var(--shadow-elevated)]"
              )}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image.src}
                  alt={item.image.alt[locale]}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[var(--duration-slow)] ease-[var(--ease-emphasized)] group-hover:scale-[1.04]"
                  style={{ objectPosition: item.image.objectPosition ?? "center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-white backdrop-blur-md">
                  <span className="font-[family:var(--font-accent)] text-[0.68rem] font-semibold uppercase tracking-[0.14em]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-white/50" aria-hidden="true" />
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </div>
              </div>

              <div className="space-y-4 p-5 sm:p-6">
                <div>
                  <h3 className="font-display text-[1.35rem] font-medium leading-snug text-[rgb(var(--foreground))] text-balance">
                    {item.title[locale]}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--muted-foreground))] sm:text-base">
                    {item.summary[locale]}
                  </p>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {item.services[locale].slice(0, 3).map((service) => (
                    <li
                      key={service}
                      className="rounded-full border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface-muted))] px-3 py-1.5 text-xs font-medium text-[rgb(var(--foreground))]"
                    >
                      {service}
                    </li>
                  ))}
                </ul>

                <Link
                  href={href}
                  className={cn(
                    "inline-flex items-center gap-2 text-sm font-semibold text-[rgb(var(--primary))]",
                    "transition-colors hover:text-[rgb(var(--accent))]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--accent))] focus-visible:ring-offset-2"
                  )}
                >
                  {homePage.expertise.itemCta.label[locale]}
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-[var(--duration-fast)] group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </article>
          </StaggerItem>
        );
      })}
    </StaggerContainer>
  );
}
