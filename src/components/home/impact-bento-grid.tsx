import { Activity, Brain, HandHelping, ShieldCheck, Sparkles } from "lucide-react";
import { homePage } from "@/content/pages/home";
import { Card } from "@/components/shared/card";
import { StaggerContainer, StaggerItem } from "@/components/motion/animated";
import { Locale } from "@/types/content";
import { cn } from "@/lib/utils";

interface ImpactBentoGridProps {
  locale: Locale;
}

const iconMap = [Brain, Activity, ShieldCheck, HandHelping, Sparkles] as const;
const gridStyles = [
  "lg:col-span-2 lg:row-span-2",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-2",
] as const;

export function ImpactBentoGrid({ locale }: ImpactBentoGridProps) {
  return (
    <StaggerContainer className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {homePage.impact.items[locale].map((item, index) => {
        const Icon = iconMap[index];
        const isCompactCard = index === 3 || index === 4;

        return (
          <StaggerItem key={item} className={gridStyles[index]}>
            <Card
              variant={index === 0 || index === 4 ? "elevated" : "default"}
              hover
              className={cn(
                "flex h-full flex-col p-6",
                isCompactCard ? "justify-center" : "justify-between"
              )}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] bg-[rgb(var(--accent-soft))] text-[rgb(var(--accent-foreground))]">
                <Icon className="h-5 w-5" />
              </div>
              <div className={cn("mt-12", isCompactCard && "mt-8")}>
                <p className="max-w-[20ch] text-xl font-semibold leading-snug text-[rgb(var(--foreground))]">
                  {item}
                </p>
              </div>
            </Card>
          </StaggerItem>
        );
      })}
    </StaggerContainer>
  );
}
