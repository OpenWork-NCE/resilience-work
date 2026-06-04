import { Building2, BriefcaseBusiness, Globe, Handshake, Landmark, Users } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { audiences } from "@/content/audiences";
import type { Locale } from "@/types/content";

const iconList = [Building2, BriefcaseBusiness, Landmark, Handshake, Users, Globe] as const;

interface ExpertiseAudiencesSectionProps {
  locale: Locale;
  audienceIds: readonly string[];
}

export function ExpertiseAudiencesSection({ locale, audienceIds }: ExpertiseAudiencesSectionProps) {
  const items = audiences.filter((audience) => audienceIds.includes(audience.id));

  return (
    <>
      <SectionHeader
        eyebrow={locale === "fr" ? "Publics concernés" : "Who this is for"}
        title={locale === "fr" ? "Des accompagnements pensés pour plusieurs réalités professionnelles" : "Support designed for different professional realities"}
        align="left"
        maxWidth="wide"
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => {
          const Icon = iconList[index] ?? Users;
          return (
            <div
              key={item.id}
              className="flex items-start gap-4 rounded-[var(--radius-lg)] border border-[rgb(var(--border-muted))] bg-[rgb(var(--surface))] p-5"
            >
              <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgb(var(--accent-soft))] text-[rgb(var(--accent-foreground))]">
                <Icon className="h-4 w-4" />
              </div>
              <p className="text-sm leading-relaxed text-[rgb(var(--foreground))] sm:text-base">
                {item.label[locale]}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
