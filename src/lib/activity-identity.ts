import type { ExpertiseId } from "@/types/content";

export const activityIdentity: Record<
  ExpertiseId,
  {
    objectPosition: string;
    iconClassName: string;
  }
> = {
  psychosocialPrevention: {
    objectPosition: "center 22%",
    iconClassName:
      "bg-[rgb(var(--accent-soft))] text-[rgb(var(--accent-foreground))]",
  },
  crisisManagement: {
    objectPosition: "center 42%",
    iconClassName:
      "bg-[rgb(var(--secondary))] text-[rgb(var(--secondary-foreground))]",
  },
  training: {
    objectPosition: "center 50%",
    iconClassName:
      "bg-[rgb(var(--surface-muted))] text-[rgb(var(--primary))]",
  },
  internationalMobility: {
    objectPosition: "center 40%",
    iconClassName:
      "bg-[rgb(var(--secondary))] text-[rgb(var(--secondary-foreground))]",
  },
};
