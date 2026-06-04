import type { RouteKey } from "@/types/content";

export const routes: Record<RouteKey, string> = {
  home: "/",
  about: "/about",
  expertise: "/expertise",
  psychosocialPrevention: "/expertise/psychosocial-prevention",
  internationalMobility: "/expertise/international-mobility",
  crisisManagement: "/expertise/crisis-management",
  training: "/expertise/training",
  international: "/international",
  contact: "/contact",
} as const;
